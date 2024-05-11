<template>
  <div class="box">
    <el-container class="container-xxl">
      <!-- <el-aside class="responsive-aside" ></el-aside> -->
      <el-main>
        <el-row>
          <el-col :span="24">
            <div class="grid-content_h3">
              <h3 style="  color: #212529; font-size: 18.75px; font-weight: 500;">Transactions</h3>
            </div>
          </el-col>
        </el-row>
        <el-row class="blocks_heade">
          <el-col :span="5" :xs="24" :sm="12" :md="12" :lg="6">
            <div class="grid-content ep-bg-purple-dark blocks_header">
              <p>TRANSACTIONS (24H)</p>
              <el-link>{{transactionCount24}}</el-link>
            </div>
          </el-col>
          <el-col :span="5" align :xs="24" :sm="12" :md="12" :lg="6">
            <div class="grid-content ep-bg-purple-dark blocks_header">
              <p>TRANSACTIONS (1H)</p>
              <el-link>{{transactionCount1}}</el-link>
            </div>
          </el-col>
          <el-col :span="5" align :xs="24" :sm="12" :md="12" :lg="6">
            <div class="grid-content ep-bg-purple-dark blocks_header">
              <p>NETWORK TRANSACTIONS FEE (24H)</p>
              <el-link>{{transactionFee24}}&nbsp;<span style="font-size: 12.2569px; color: #000; font-weight: 400;">(GWei)</span></el-link>
            </div>
          </el-col>
          <el-col :span="5" align :xs="24" :sm="12" :md="12" :lg="6">
            <div class="grid-content ep-bg-purple-dark blocks_header" style="margin-right: 0;">
              <p>AVG. TRANSACTIONS FEE (24H)</p>
              <el-link >{{transactionAvgFee}}&nbsp;<span style="font-size: 12.2569px; color: #000; font-weight: 400;">(GWei)</span></el-link>
            </div>
          </el-col>
        </el-row>
        <el-row class="box-table">
          <div class="demo-pagination-block box-table_header">
            <div style="font-size: 14.4992px; color: #000;">More than {{total}} transactions found</div>
            <el-pagination background v-model:current-page="currentPage4" v-model:page-size="pageSize4"
              :page-sizes="[10, 25, 50, 100]" layout="sizes,prev, pager, next" :pager-count="5" :total="total" small
              @size-change="handleSizeChange" @current-change="getTransAction" />
          </div>
          <el-table v-loading="loading" :data="tableData" style="width: 100%" size="default" :row-style="{ height: '70px' }" > 
            <el-table-column prop="hash" label="Txn Hash" width="100  " >
              <template v-slot="scope">
                <el-tooltip effect="dark" :content="scope.row.hash" placement="top">
                  <router-link class="skyblue-text ellipsis-text" :to="{ name: 'tx', params: { hash: scope.row.hash } }">
                  {{ scope.row.hash.substring(0,10) + '...' }}
                </router-link>
                </el-tooltip>
              </template>
            </el-table-column>
            <el-table-column prop="method" label="Method" width="94">
                <template v-slot="scope">
                  <el-tooltip :content="scope.row.method">
                    <el-button style="border-radius: 8px; padding: 5px;">{{ scope.row.method }}</el-button>
                  </el-tooltip>
                </template>
            </el-table-column>
            <el-table-column prop="blockNumber" label="Block" >
              <template v-slot="scope">
                <router-link class="skyblue-text" :to="{ name: 'block', params: { blockNumber: scope.row.blockNumber } }">{{ scope.row.blockNumber }}</router-link>
              </template>
            </el-table-column>
            <el-table-column prop="formattedTime" label="Age" width="130">
              <template v-slot="scope">
                <span style="font-size: 14.4992px; color: #212529">{{ scope.row.formattedTime }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="from" label="From" width="220">
              <template v-slot="scope">
                <el-tooltip :content="scope.row.from" placement="top">
                  <router-link class="skyblue-text" :to="{ name: 'address', params: { address: scope.row.from } }">{{ scope.row.from.substring(0,10) + '...' }}</router-link>
                </el-tooltip>
                <el-tooltip v-if="!scope.row.isCopied" content="Copy Address" placement="top">
                  <el-button text icon="CopyDocument" @click="copyFormClipboard(scope.row.from,scope.row)">
                  </el-button>
                </el-tooltip>
                <el-tooltip v-else content="Copied!" placement="top">
                  <el-button text icon="Check" @click="copyFormClipboard(scope.row.from,scope.row)">
                  </el-button>
                </el-tooltip>
                <el-button style="margin-left:1.5rem" type="success" icon="right" circle plain />
              </template>
            </el-table-column>
            <el-table-column prop="to" label="To"  width="220">
              <template v-slot="scope">
                <el-tooltip v-if ="scope.row.to" content="Contract" placement="top">
                  <el-button  style="width: 1rem; height: 1rem;" icon="Document" >
                  </el-button>
                </el-tooltip>
                <el-tooltip :content="scope.row.to" placement="top">
                  <router-link class="skyblue-text" :to="{ name: 'address', params: { address: scope.row.to } }">{{ scope.row.to }}</router-link>
                </el-tooltip>
                <!-- <el-tooltip v-if="scope.row.to" content="Copy Address" placement="top"> -->
                <el-tooltip v-if="!scope.row.istoCopied" content="Copy Address" placement="top">
                  <el-button text icon="CopyDocument" @click="copyToClipboard(scope.row.to,scope.row)">
                  </el-button>
                </el-tooltip>
                <el-tooltip v-else content="Copied!" placement="top">
                  <el-button text icon="Check" @click="copyToClipboard(scope.row.to,scope.row)">
                  </el-button>
                </el-tooltip>
              </template>
            </el-table-column>
            <el-table-column prop="value" label="Value" >
              <template v-slot="scope">
                <el-tooltip effect="dark" :content="`${scope.row.value}`" placement="top">
                  <span class="skyblue-text">{{ scope.row.value }}</span>
                </el-tooltip>
              </template>
            </el-table-column>
            <el-table-column prop="gasPrice" label="Gas Price" >
              <template v-slot="scope">
               <span style="font-size: 14.4992px; color: #212529">{{ scope.row.gasPrice }}<span style="font-size: 12px; color:#212529;">(GWei)</span></span>
              </template>
            </el-table-column>
          </el-table>
          <div class="demo-pagination-block table_header">
            <span>Show rows:</span>
            <el-pagination background v-model:current-page="currentPage4" v-model:page-size="pageSize4"
              :page-sizes="[10, 25, 50, 100]" :pager-count="5" small layout="sizes,prev, pager, next" :total="total"
              @size-change="handleSizeChange" @current-change="getTransAction"/>
          </div>
        </el-row>
      </el-main>
      <!-- <el-aside class="responsive-aside" ></el-aside> -->
    </el-container>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive, computed, watch, nextTick, onUpdated } from 'vue'
import { ElMessage } from 'element-plus';
import { getTransactionPage, getTransactionFee, getTransactionCount } from '@/api/transaction';
import { formatUnits} from 'ethers';
import { getBlockHashTransaction } from '@/api/block'
import { number } from 'echarts';
import router from '@/router';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
let tableData = reactive([])
const currentPage4 = ref(1)
const pageSize4 = ref(10)
const total = ref(0)
const copiedText = ref('');
const route = useRoute()
let transactionCount = reactive([])
let transactionCount24 = ref(0)
let transactionCount1 = ref(0)
let transactionFee24 = ref(0)
let transactionAvgFee = ref(0)
let loading = ref(false)
const {block} = defineProps({
  block: {
    type: [String],
    required: true
  }
})
const getTransAction = async (pager = 1,param = 0) => {
  try {
    loading.value = true
    let response = ''
    currentPage4.value = pager;
    if (block == 'home' || param == 1) {
      response = await getTransactionPage(currentPage4.value, pageSize4.value)
      tableData = response.data.list;
      total.value = response.data.total;
    } else {
      let {data} = await getBlockHashTransaction(block)
      tableData = data;
    }
    tableData.forEach(item => {
      item.gasPrice = formatUnits(item.gasPrice.toString(), 9)
      item.method = item.method || item.methodHash;
      // const values = parseFloat(item.value) || 0;
  //     if (values > Number.MAX_SAFE_INTEGER) {
  //   console.error(`Invalid value detected: ${values}. Skipping formatting.`);
  //   return;
  // }
      const result = formatUnits(item.value.toString(),18)
      item.value = result;
    })
    const currentTime = Math.floor(Date.now() / 1000);
    tableData.forEach(item => {
      const timestamp = item.timestamp;
      const timeDifferenceInSeconds = currentTime - timestamp;
      let formattedTime;
      if (timeDifferenceInSeconds < 60) {
        const absoluteTimeDifference = Math.abs(timeDifferenceInSeconds);
        formattedTime = `${absoluteTimeDifference} seconds ago`;
      } else if (timeDifferenceInSeconds >= 60 && timeDifferenceInSeconds < 3600) {
        const minutes = Math.floor(timeDifferenceInSeconds / 60);
        formattedTime = `${minutes} minutes ago`;
      } else if (timeDifferenceInSeconds >= 3600 && timeDifferenceInSeconds < 86400) {
        const hours = Math.floor(timeDifferenceInSeconds / 3600);
        formattedTime = `${hours} hours ago`;
      } else {
        const days = Math.floor(timeDifferenceInSeconds / 86400);
        formattedTime = `${days} days ago`;
      }
      item.formattedTime = formattedTime;
    });
    loading.value = false
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}
const handleSizeChange = () => {
  getTransAction()
}
function copyFormClipboard(text,row) {
  row.isCopied = true;
  setTimeout(() => { row.isCopied = false; }, 2000);
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
let getTransactionFees = async () => {
  let {data} =  await getTransactionFee()
  let transactionFee24Tmp = formatUnits(data.txFee.toString(),9)
  transactionFee24.value = Number(transactionFee24Tmp).toFixed(2)
  let transactionAvgFeeTmp = formatUnits(Math.floor(data.avgTxFee).toString(),9)
  transactionAvgFee.value = Number(transactionAvgFeeTmp).toFixed(4)
}
let getTransactionCounts = async () => {
  let {data} =  await getTransactionCount()
  transactionCount = data;
  transactionCount24.value = transactionCount[1].count
  transactionCount1.value = transactionCount[0].count || 0
}
watch(() => transactionCount1.value, (newValue) => {
  transactionCount1.value = newValue
});
watch(() => transactionCount24.value, (newValue) => {
  transactionCount24.value = newValue
});
onMounted(async () => {
  await getTransAction();
  await getTransactionCounts();
  await getTransactionFees();
})
watch(() => route.params, () => {
  
  getTransAction(1,1)
})
</script>

<style scoped>
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

.box {
  background-color: #f9fafc;
}

.grid-content_h3 {
  padding: 19px 0;
  border-bottom: 1px solid #dcdfe6;
}
.blocks_heade {
  margin: 20px 0;
}

.blocks_header {
  background-color: #fff;
  padding: 10px 10px;
  border: 1px solid #dcdfe6;
  border-radius: 10px;
  margin-right: 10px;
  margin-top: 10px;
}

.blocks_header p {
  font-size: 12px;
  color: #6c757d;
  margin-bottom: 4px;
}

.blocks_header .el-link {
  font-size: 18.75px;
  color:  #081D35; 
}

.box-table {
  margin: 10px 0;
  background-color: #fff;
  border-radius: 15px;
}

.box-table_header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px 15px 15px;
}

.table_header {
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  color: #6c757d;
  font-size: 14px;
  padding: 20px 15px 15px;
}

.table_header span {
  margin-right: 5px;
}

@media (max-width: 768px) {
  .box-table_header {
    flex-wrap: wrap;
  }
}

.ContentPlaceHolder1_mainboxes {
  width: 100%;
  border-radius: 15px;
  margin-bottom: 1.25rem;
  background-color: #fff;
  border: 1px solid #dee2e6;
}

.ContentPlaceHolder1 {
  margin-right: 5.75rem;
}

@media (min-width: 768px) {

}

@media (max-width: 768px) {

  .card-ul,
  .card-li {
    padding: 5px;
  }

  .card_p {
    font-size: 10px;
  }
  .blocks_heade,.box-table,.grid-content_h3{
    margin:0px
  }
}

.card-left {
  display: flex;
}

.card_p {
  font-size: 12px;
}

.card {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 15px;
}

.card-right {
  margin-top: 13px;
}

.card-box {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e6e6e6;
  margin-right: 10px;
  margin-left: 10px;
}

.skyblue-text {
  color: #0784C3;
  font-size: 14.4992px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

:deep(.cell) {
  display: flex;
  justify-content: center;
    align-items: center;
}

.ellipsis-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
:deep(.el-table--default .cell) {
  font-size: 12.5625px;
  color: #212529;
  font-weight: 500;
}
</style>