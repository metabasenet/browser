<template>
  <div class="box">
    
    <el-container class="container-xxl">
      <el-aside class="responsive-aside" ></el-aside>
      <el-main>
        <el-row>
      <el-col :span="24">
        <div class="grid-content ep-bg-purple-dark grid-content_h3">
          <h3>Transactions</h3>
        </div>
      </el-col>
    </el-row>
    <el-row class="blocks_heade">
      <el-col :span="5" :xs="24" :sm="12" :md="12" :lg="6">
        <div class="grid-content ep-bg-purple-dark blocks_header">
          <p>NETWORK UTILIZATION(24H)</p>
          <el-link>5,028,546</el-link>
        </div>
      </el-col>
      <el-col :span="5" align :xs="24" :sm="12" :md="12" :lg="6">
        <div class="grid-content ep-bg-purple-dark blocks_header">
          <p>NETWORK UTILIZATION(24H)</p>
          <el-link>222(Average)</el-link>
        </div>
      </el-col>
      <el-col :span="5" align :xs="24" :sm="12" :md="12" :lg="6">
        <div class="grid-content ep-bg-purple-dark blocks_header">
          <p>NETWORK UTILIZATION(24H)</p>
          <el-link>2,373.55MNT(0.04%)</el-link>
        </div>
      </el-col>
      <el-col :span="5" align :xs="24" :sm="12" :md="12" :lg="6">
        <div class="grid-content ep-bg-purple-dark blocks_header">
          <p>NETWORK UTILIZATION(24H)</p>
          <el-link>0.2978 USD(18.64%)</el-link>
        </div>
      </el-col>
    </el-row>
    <el-row class="box-table">
      <div class="demo-pagination-block box-table_header">
        <div class="demonstration">More than {{total}} transactions found</div>
        <el-pagination background v-model:current-page="currentPage4" v-model:page-size="pageSize4"
          :page-sizes="[10, 25, 50, 100]" layout="sizes,prev, pager, next" :pager-count="5" :total="total" small
          @size-change="handleSizeChange" @current-change="getTransAction" />
      </div>
      <el-table :data="tableData" style="width: 100%" size="default" > 
        <el-table-column prop="hash" label="Txn Hash" width="120">
          <template v-slot="scope">
            <router-link class="skyblue-text ellipsis-text" :to="{ name: 'tx', params: { hash: scope.row.hash } }">
              {{ scope.row.hash }}
            </router-link>
          </template>
        </el-table-column>
        <el-table-column prop="method" label="Method " width="120">
          <template v-slot="scope">
            <el-tooltip :content="scope.row.method" placement="top">
              <el-button>{{ scope.row.method }}</el-button>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column prop="blockNumber" label="Block" width="100">
          <template v-slot="scope">
            <router-link class="skyblue-text" :to="{ name: 'block', params: { blockNumber: scope.row.blockNumber } }">{{ scope.row.blockNumber }}</router-link>
          </template>
        </el-table-column>
        <el-table-column prop="formattedTime" label="Age">
        </el-table-column>
        <el-table-column prop="from" label="From" width="250" align="center">
          <template v-slot="scope">
            <el-tooltip :content="scope.row.from" placement="top">
              <router-link class="skyblue-text" :to="{ name: 'address', params: { address: scope.row.from } }">{{ scope.row.from }}</router-link>
            </el-tooltip>
            <el-tooltip content="Copy Address" placement="top">
              <el-button text icon="CopyDocument" @click="copyToClipboard(scope.row.from)">
              </el-button>
            </el-tooltip>
            <el-button style="margin-left:2.5rem" type="success" icon="right" circle plain />
          </template>
        </el-table-column>
        <el-table-column prop="to" label="To" width="250" align="center">
          <template v-slot="scope">
            <el-tooltip v-if ="scope.row.to" content="Contract" placement="top">
              <el-button  icon="Document" >
              </el-button>
            </el-tooltip>
            <el-tooltip :content="scope.row.to" placement="top">
              <router-link class="skyblue-text" :to="{ name: 'address', params: { address: scope.row.to } }">{{ scope.row.to }}</router-link>
            </el-tooltip>
            <el-tooltip v-if="scope.row.to" content="Copy Address" placement="top">
              <el-button text icon="CopyDocument" @click="copyToClipboard(scope.row.to)">
              </el-button>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column prop="value" label="Value">
          <template v-slot="scope">
            <el-tooltip effect="dark" :content="`${scope.row.value}`" placement="top">
              <span class="skyblue-text">{{ scope.row.value }}</span>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column prop="gasPrice" label="Gas Price" />
      </el-table>
      <div class="demo-pagination-block table_header">
        <span>Show rows:</span>
        <el-pagination background v-model:current-page="currentPage4" v-model:page-size="pageSize4"
          :page-sizes="[10, 25, 50, 100]" :pager-count="5" small layout="sizes,prev, pager, next" :total="total"
          @size-change="handleSizeChange" @current-change="getTransAction"/>
      </div>
    </el-row>
      </el-main>
      <el-aside class="responsive-aside" ></el-aside>
    </el-container>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { ElMessage } from 'element-plus';
import { getTransactionPage } from '@/api/transaction';
const tableData = ref([])
const currentPage4 = ref(1)
const pageSize4 = ref(10)
const total = ref(0)
const copiedText = ref('');
const handleSizeChange = (val) => {
  getTransAction()
}
const getTransAction = async (pager = 1) => {
  try {
    currentPage4.value = pager;
    const response = await getTransactionPage(currentPage4.value, pageSize4.value)
    tableData.value = response.data.list;
    total.value = response.data.total;
    const currentTime = Math.floor(Date.now() / 1000);
    tableData.value.forEach(item => {
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
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}
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
onMounted(() => {
  getTransAction();
})
</script>

<style scoped>
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

.box {
  background-color: #f9fafc;
}

.grid-content_h3 {
  margin: 0 2rem;
  padding: 19px 0;
  border-bottom: 1px solid #dcdfe6;
}

.blocks_heade {
  margin: 20px 2rem;
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
  color: #88877d;
}

.blocks_header .el-link {
  font-weight: bold;
}

.box-table {
  margin: 10px 2rem;
}

.box-table_header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}

.table_header {
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 10px 0;
  color: #6c757d;
  font-size: 14px;
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
  .card-box {
    /* flex-direction: row; */
  }
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
  color: #0693cc;
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
</style>