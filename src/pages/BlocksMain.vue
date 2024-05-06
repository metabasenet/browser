<template>
  <div class="box">
    <el-container class="container-xxl">
      <!-- <el-aside class="responsive-aside"></el-aside> -->
      <el-main>
        <el-row>
          <el-col :span="24">
            <div class="grid-content_h3">
              <h3 style="font-size: 18.75px; color: #212529; font-weight: 500;">Blocks</h3>
            </div>
          </el-col>
        </el-row>
        <!-- <el-row class="blocks_heade">
          <el-col :span="5" :xs="24" :sm="12" :md="12" :lg="6">
            <div class="grid-content ep-bg-purple-dark blocks_header">
              <p>NETWORK UTILIZATION(24H)</p>
              <el-link>12.7%</el-link>
            </div>
          </el-col>
          <el-col :span="5" align :xs="24" :sm="12" :md="12" :lg="6">
            <div class="grid-content ep-bg-purple-dark blocks_header">
              <p>NETWORK UTILIZATION(24H)</p>
              <el-link>12.7%</el-link>
            </div>
          </el-col>
          <el-col :span="5" align :xs="24" :sm="12" :md="12" :lg="6">
            <div class="grid-content ep-bg-purple-dark blocks_header">
              <p>NETWORK UTILIZATION(24H)</p>
              <el-link>12.7%</el-link>
            </div>
          </el-col>
          <el-col :span="5" align :xs="24" :sm="12" :md="12" :lg="6">
            <div class="grid-content ep-bg-purple-dark blocks_header">
              <p>NETWORK UTILIZATION(24H)</p>
              <el-link>12.7%</el-link>
            </div>
          </el-col>
        </el-row> -->
        <el-row class="box-table">
          <div class="demo-pagination-block box-table_header">
            <div class="demonstration">
              <p>Total of {{ total }} blocks</p>
              <!-- <span>(Showing blocks between #36949710 to #36949734)</span> -->
            </div>
            <el-pagination v-model:current-page="currentPage4" v-model:page-size="pageSize4"
              :page-sizes="[10, 25, 50, 100]" layout=" sizes, prev, pager, next, " :total="total" :pager-count="5"
              background small @size-change="handleSizeChange" @current-change="getBlockPageData" />
          </div>
          <el-table v-loading="loading" :data="tableData" size="default"
            style="width: 100%" :row-style="{ height: '70px' }">
            <el-table-column prop="number" label="Block" width="100" style="font-size: 12px;">
              <template v-slot="scope">
                <router-link class="skyblue-text" :to="{ name:'block',params:{blockNumber:scope.row.number} }">
                  {{ scope.row.number }}</router-link>
              </template>
            </el-table-column>
            <el-table-column prop="hash" label="Hash" width="250">
              <template v-slot="scope">
                <el-tooltip :content="scope.row.hash">
                  <span style="font-size: 14.4992px; color: #0784C3;">{{ scope.row.hash.substring(0, 25) + '...'
                    }}</span>
                </el-tooltip>
              </template>
            </el-table-column>
            <el-table-column prop="formattedTime" label="Age" width="150" class="age-table">
              <template v-slot="scope">
                <span style="font-size: 14.4992px; color: #212529">{{ scope.row.formattedTime }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="transactioncount" label="Txn" width="60">
              <template v-slot="scope">
                <div class="skyblue-text" style="cursor: pointer;"
                  @click="goTransactionPage(scope.row.transactioncount, scope.row.hash)">{{
                  scope.row.transactioncount }}</div>
              </template>
            </el-table-column>
            <el-table-column prop="gasused" label="Gas used" align="center">
              <template v-slot="scope">
                <span style="font-size: 14.4992px; color: #212529;">{{ scope.row.gasused }}</span>
                <!-- &nbsp;({{ scope.row.ratio}}%) -->
                <!-- <el-progress :percentage="Math.round(row.percentage)" /> -->
              </template>
            </el-table-column>
            <el-table-column prop="gaslimit" label="Gas Limit">
              <template v-slot="scope">
                <span style="font-size: 14.4992px; color: #212529;">{{ scope.row.gaslimit }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="validator" label="Validator" width="80">
              <template v-slot="{ row }">
                <div v-if="row.validator">
                  <router-link class="skyblue-text" to="/address">{{ row.validator }}</router-link>
                  <el-tooltip v-if="!row.istoCopied" content="Copy Address" placement="top">
                    <el-button text style="margin-left:5px" icon="CopyDocument"
                      @click="copyToClipboard(row.validator,row)">
                    </el-button>
                  </el-tooltip>
                  <el-tooltip v-else content="Copied!" placement="top">
                    <el-button text icon="Check" @click="copyToClipboard(row.validator,row)">
                    </el-button>
                  </el-tooltip>
                </div>

              </template>
            </el-table-column>
            <el-table-column prop="reward" label="Reward" width="80" />
          </el-table>
          <div class="demo-pagination-block table_header">
            <span>Show rows:</span>
            <el-pagination v-model:current-page="currentPage4" v-model:page-size="pageSize4"
              :page-sizes="[10, 25, 50, 100]" background small :pager-count="5" layout=" sizes,prev, pager, next"
              :total="total" @size-change="handleSizeChange" @current-change="getBlockPageData" />
          </div>
        </el-row>
      </el-main>
      <!-- <el-aside class="responsive-aside"></el-aside> -->
    </el-container>
  </div>
</template>

<script setup>
import { ref,onMounted,computed, reactive} from 'vue'
import { ElMessage } from 'element-plus';
import {getBlockPage} from '@/api/block';
import router from '@/router';
let tableData = reactive([])
const currentPage4 = ref(1)
const total = ref(0)
const pageSize4 = ref(10)
const copiedText = ref('');
let loading = ref(false)
const getBlockPageData = async (pager = 1) => {
  try {
    loading.value = true
    currentPage4.value = pager;
    const response = await getBlockPage(currentPage4.value, pageSize4.value)
    tableData = response.data.list;
    console.log(tableData);
    total.value = response.data.total;
    tableData.forEach(item => {
      const percentage = (item.gasused / item.gaslimit) * 100;
      item.percentage = percentage;
      item.ratio = (item.gasused / item.gaslimit * 100).toFixed(0)
    })

    const currentTime = Math.floor(Date.now() / 1000);
    tableData.forEach(item => {
      const timestamp = item.timestamp;
      const timeDifferenceInSeconds  = currentTime - timestamp;
      let formattedTime;
      if(timeDifferenceInSeconds < 60) {
        const absoluteTimeDifference = Math.abs(timeDifferenceInSeconds);
        formattedTime = `${absoluteTimeDifference} seconds ago`;
      }else if(timeDifferenceInSeconds>=60 && timeDifferenceInSeconds < 3600) {
        const minutes = Math.floor(timeDifferenceInSeconds / 60);
        formattedTime = `${minutes} minutes ago`;
      }else if(timeDifferenceInSeconds >= 3600 && timeDifferenceInSeconds < 86400) {
        const hours = Math.floor(timeDifferenceInSeconds / 3600);
        formattedTime = `${hours} hours ago`;
      }else{
        const days = Math.floor(timeDifferenceInSeconds / 86400);
        formattedTime = `${days} days ago`;
      }
      item.formattedTime = formattedTime;
    });
    addGaspriceTotalToTableData();
    loading.value = false
  } catch (error) {
    console.error('Error fetching data:',error)
  }
}
const gaspricetotal = computed(()=>{
  let total = 0;
  tableData.forEach(item => {
    const gasused = parseFloat(item.gasused);
    const gasprice = item.gasprice || 0;
    const result = gasused * parseFloat(gasprice) / 10**18;
    total += result;
    })
    return total === 0 ? '0' : total.toFixed(7);
})
const addGaspriceTotalToTableData = () => {
      tableData.forEach(item => {
        item.gaspriceTotal = gaspricetotal.value;
      });
};

const handleSizeChange = (val) => {
  getBlockPageData()
}
// const handleCurrentChange = (val) => {
//   getBlockPageData()
// }
function copyToClipboard(text,row) {
  row.istoCopied = true;
  setTimeout(() => { row.istoCopied = false; }, 2000);
      copiedText.value = text;
      navigator.clipboard.writeText(text)
        .then(() => {
          ElMessage.success('Copy successful!');
        })
        .catch(err => {
          console.error('Copy failed:', err);
          ElMessage.error('Copy failed, please copy manually!');
        });
    }
onMounted(() => {
  getBlockPageData()
})
function goTransactionPage(count, hash) {
  if (count == 0) {
    return
  } else {
    router.push({ name: 'txs', params: { block: hash } })
  }
}
</script>

<style scoped>
.box{
  background-color: #f9fafc;
}
.grid-content_h3 {
  padding: 19px 0;
  border-bottom: 1px solid #dcdfe6;
}
.blocks_heade{
  margin: 20px 2rem;
}
.blocks_header{
  background-color: #fff;
  padding: 10px 10px;
  border: 1px solid #dcdfe6;
  border-radius: 10px;
  margin-right: 10px;
  margin-top: 10px;
}
.blocks_header p{
 font-size: 12px;
 color: #88877d;
}
.blocks_header .el-link{
  font-weight: bold;
}
.box-table{
  margin: 10px 0;
  background-color: #fff;
  border-radius: 15px;
}
.box-table_header{
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding:  12px;
}
.table_header{
  width: 100%;
  padding: 30px 12px 30px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  color: #6c757d;
  font-size: 14px;
}
.table_header span{
  margin-right: 5px;
}
@media (max-width: 768px) {
  .box-table_header{
    flex-wrap: wrap;
  }
  .box-table{
    margin: 0;
  }
  .blocks_heade,.grid-content_h3{
    margin: 0;
  }
}
.demonstration p{
  font-size: 14.4992px;
  color: #000;
}
.skyblue-text{
  color: #0784C3;
  font-size: 14.4992px;
}
.responsive-aside {
  width: 0rem;
  transition: width 0.5s ease; 
}
@media (min-width: 768px) {
  .responsive-aside {
    /* width: 10rem; */
    width: 3vw;
    opacity: 0.5;
    /* background-color: #fff;  */
  }
}
:deep(.el-table--default .cell) {
  font-size: 12.5625px;
  color: #212529;
  font-weight: 500;
}
</style>