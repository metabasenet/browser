<template>
  <div class="box">
    
  <el-container class="container-xxl">
      <el-aside class="responsive-aside" ></el-aside>
      <el-main>
        <el-row>
    <el-col :span="24"><div class="grid-content ep-bg-purple-dark grid-content_h3">
      <h3>Blocks</h3>
      </div>
      </el-col>
  </el-row>
  <el-row class="blocks_heade"> 
    <el-col :span="5" :xs="24" :sm="12" :md="12" :lg="6"><div class="grid-content ep-bg-purple-dark blocks_header" >
      <p>NETWORK UTILIZATION(24H)</p>
      <el-link>12.7%</el-link>
    </div>
    </el-col>
    <el-col :span="5" align :xs="24" :sm="12" :md="12" :lg="6"><div class="grid-content ep-bg-purple-dark blocks_header" >
      <p>NETWORK UTILIZATION(24H)</p>
      <el-link>12.7%</el-link>
      </div></el-col>
      <el-col :span="5" align :xs="24" :sm="12" :md="12" :lg="6"><div class="grid-content ep-bg-purple-dark blocks_header" >
      <p>NETWORK UTILIZATION(24H)</p>
      <el-link>12.7%</el-link>
      </div>
      </el-col>
      <el-col :span="5" align :xs="24" :sm="12" :md="12" :lg="6"><div class="grid-content ep-bg-purple-dark blocks_header" >
      <p>NETWORK UTILIZATION(24H)</p>
      <el-link>12.7%</el-link>
      </div>
      </el-col>
  </el-row>
  <el-row class="box-table">
    <div class="demo-pagination-block box-table_header">
    <div class="demonstration"><p>Total of {{ total }} blocks</p>
    <!-- <span>(Showing blocks between #36949710 to #36949734)</span> -->
    </div>
    <el-pagination
      v-model:current-page="currentPage4"
      v-model:page-size="pageSize4"
      :page-sizes="[10, 25, 50, 100]"
      layout=" sizes, prev, pager, next, "
      :total="total"
      :pager-count="5"
      background
      small
      @size-change="handleSizeChange"
      @current-change="getBlockPageData"
    />
  </div>
    <el-table :data="tableData" size="default" style="width: 100%" >
    <el-table-column prop="number" label="Block" width="100">
      <template v-slot="scope">
            <router-link class="skyblue-text" 
            :to="{ name:'block',params:{blockNumber:scope.row.number} }">
            {{ scope.row.number }}</router-link>
        </template>
    </el-table-column>
    <el-table-column prop="formattedTime" label="Age" width="140" align="center" ></el-table-column>
    <el-table-column prop="transactioncount" label="Txn" width="60">
      <template v-slot="scope">
            <router-link class="skyblue-text" :to="{ path: '/txs' }">{{ scope.row.transactioncount }}</router-link>
        </template>
    </el-table-column>
    <el-table-column prop="validator" label="Validator">
      <template v-slot="{ row }">
      <router-link class="skyblue-text" to="/address" >{{ row.validator }}</router-link>
      <el-tooltip  content="Copy Address" placement="top">
        <el-button text style="margin-left:5px" icon="CopyDocument" @click="copyToClipboard(row.validator)">
        </el-button>
      </el-tooltip>
      
    </template>
    </el-table-column>
    <el-table-column prop="gasused" label="Gas used" >
      <template v-slot="{ row }">
      {{ row.gasused }}
      <el-progress :percentage="Math.round(row.percentage)" /> 
    </template>
    </el-table-column>
    <el-table-column prop="gaslimit" label="Gas Limit" />
    <el-table-column prop="reward" label="Reward" />
    <el-table-column prop="burntfees" label="Burnt Fees (MNT)" />
  </el-table>
  <div class="demo-pagination-block table_header">
    <span>Show rows:</span>
    <el-pagination
      v-model:current-page="currentPage4"
      v-model:page-size="pageSize4"
      :page-sizes="[10, 25, 50, 100]"
      background
      small
      :pager-count="5"
      layout=" sizes,prev, pager, next"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="getBlockPageData"
    />
  </div>
  </el-row>
      </el-main>
      <el-aside class="responsive-aside" ></el-aside>
    </el-container>
  </div>
</template>

<script setup>
import { ref,onMounted} from 'vue'
import { ElMessage } from 'element-plus';
import {getBlockPage} from '@/api/block';
const tableData = ref([])
const currentPage4 = ref(1)
const total = ref(0)
const pageSize4 = ref(10)
const copiedText = ref('');

const getBlockPageData = async (pager = 1) => {
  try {
    currentPage4.value = pager;
    const response = await getBlockPage(currentPage4.value, pageSize4.value)
    tableData.value = response.data.list;
    total.value = response.data.total;
    tableData.value.forEach(item => {
      const percentage = (item.gasused / item.gaslimit) * 100;
      item.percentage = percentage;
    })

    const currentTime = Math.floor(Date.now() / 1000);
    tableData.value.forEach(item => {
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
  } catch (error) {
    console.error('Error fetching data:',error)
  }
}


const handleSizeChange = (val) => {
  getBlockPageData()
}
// const handleCurrentChange = (val) => {
//   getBlockPageData()
// }
function copyToClipboard(text) {
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
    onMounted( () => {
  getBlockPageData()
})
</script>

<style scoped>
.box{
  background-color: #f9fafc;
}
.grid-content_h3 {
  margin: 0 2rem;
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
  margin: 10px 2rem;
}
.box-table_header{
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}
.table_header{
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 10px 0;
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
.demonstration span{
  font-size: 12px;
  color: #6c757d;
}
.skyblue-text{
  color: #0693cc;
}
.responsive-aside {
  width: 0rem;
  transition: width 0.5s ease; 
}
@media (min-width: 768px) {
  .responsive-aside {
    width: 10rem;
    opacity: 0.5;
    /* background-color: #fff;  */
  }
}
</style>