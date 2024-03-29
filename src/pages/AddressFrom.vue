<template>
  <div class="box">
    
    <el-container class="container-xxl">
      <el-aside class="responsive-aside" ></el-aside>
      <el-main>
        <el-row>
      <el-col :span="24">
        <div class="grid-content darkb_button grid-content_h3">
          <div>
            <h3>Address</h3> <span>0x18C05c465181eFf2db29d123FA9ceFaF64A80Feb</span>
            <el-tooltip content="Copy Address" placement="top">
              <el-button icon="CopyDocument" @click="copyToClipboard(address)">
              </el-button>
            </el-tooltip>
          </div>
          <div>
            <el-button type="primary">
              Buy<el-icon class="el-icon--right"><arrow-down /></el-icon>
            </el-button>
            <el-button type="primary">
              Play<el-icon class="el-icon--right"><arrow-down /></el-icon>
            </el-button>
            <el-button type="primary">
              Gaming<el-icon class="el-icon--right"><arrow-down /></el-icon>
            </el-button>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="blocks_heade">
      <el-col :span="24">
        <p class="blocks_heade_p">Sponsored: METAWIN - Join Metawin Today Enter Now.
        </p>
        <div class="ContentPlaceHolder1_lblWarning">
          <div>
            <el-tag type="info">ERC-20</el-tag>
            <el-tag type="info">Cross-Chain</el-tag>
            <el-tag type="info"># Binance</el-tag>
            <el-tag type="info"># Binance-Peg</el-tag>
          </div>
          <div>
            <el-dropdown style="margin-right:5px">
              <el-button icon="Star">
              </el-button>
            </el-dropdown>
            <el-dropdown>
              <el-button>
                <el-icon>
                  <Menu />
                </el-icon><el-icon class="el-icon--right"><arrow-down /></el-icon>
              </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>Action 1</el-dropdown-item>
                  <el-dropdown-item>Action 2</el-dropdown-item>
                  <el-dropdown-item>Action 3</el-dropdown-item>
                  <el-dropdown-item>Action 4</el-dropdown-item>
                  <el-dropdown-item>Action 5</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="blocks_heade">
      <el-col :span="5" :xs="24" :sm="8" :md="8" :lg="8">
        <div class="grid-content ep-bg-purple-dark blocks_header">
          <ul class="over_ul">
            <li>
              <h3>Overview</h3>
            </li>
            <li class="over_li">
              <p>MAX TOTAL SUPPLY</p>
              <!-- <el-tooltip class="box-item" effect="dark"
                :content="individualQueryDetails && individualQueryDetails.totalsupply ? individualQueryDetails.totalsupply.toString() : ''"
                placement="top-start">
                <span>{{ individualQueryDetails.totalsupply }}</span>
              </el-tooltip> -->
              <span style="font-weight: bold;"> ETH </span>
              <el-tooltip class="box-item" effect="dark" content="CSupply: 551,557.859909" placement="top-start">
                <span style="color:#6c757d">(CSupply: 551,557.859909)</span>
              </el-tooltip>
            </li>
            <li class="over_li">
              <p>HOLDERS</p>
              <span>1,886,491 (0.00%)</span>
            </li>
            <li class="over_li">
              <p>TOTAL TRANSFERS</p>
              <div class="over_div">
                <span>58,667,724</span>
                <el-tooltip class="box-item" effect="dark"
                  content="This count of token transfers is updated every few hours instead of in real-time"
                  placement="top-start">
                  <el-icon>
                    <Warning />
                  </el-icon>
                </el-tooltip>
              </div>
            </li>
          </ul>
        </div>
      </el-col>
      <el-col :span="5" align :xs="24" :sm="12" :md="8" :lg="8">
        <div class="grid-content ep-bg-purple-dark blocks_header">
          <ul class="over_ul">
            <li>
              <h3>Overview</h3>
            </li>
            <li class="over_li">
              <p>MAX TOTAL SUPPLY</p>
              <el-tooltip class="box-item" effect="dark" content="Top Left prompts info" placement="top-start">
                <span>604,999.999959 </span>
              </el-tooltip>
              <span style="font-weight: bold;">ETH </span>
              <el-tooltip class="box-item" effect="dark" content="Top Left prompts info" placement="top-start">
                <span style="color:#6c757d">(CSupply: 551,557.859909)</span>
              </el-tooltip>
            </li>
            <li class="over_li">
              <p>HOLDERS</p>
              <span>1,886,491 (0.00%)</span>
            </li>
            <li class="over_li">
              <p>TOTAL TRANSFERS</p>
              <span>58,667,724</span>
              <span>ETH</span>
              <el-tooltip class="box-item" effect="dark"
                content="This count of token transfers is updated every few hours instead of in real-time"
                placement="top-start">
                <el-icon>
                  <Warning />
                </el-icon>
              </el-tooltip>
            </li>
          </ul>
        </div>
      </el-col>
      <el-col :span="5" align :xs="24" :sm="8" :md="8" :lg="8">
        <div class="grid-content ep-bg-purple-dark blocks_header">
          <ul class="over_ul">
            <li>
              <h3>Other Info</h3>
            </li>
            <li class="over_li">
              <p>TOKEN CONTRACT </p>
              <div class="over_div">
                <el-tooltip class="box-item" effect="dark" content="Contract" placement="top-start">
                  <el-icon>
                    <Document />
                  </el-icon>
                </el-tooltip>
                <el-tooltip class="box-item" effect="dark" :content="address" placement="top-start">
                  <router-link class="ellipsis-text" :to="{ name: 'address', }">{{ address }}</router-link>
                </el-tooltip>
                <el-tooltip content="Copy Address" placement="top">
                  <el-button icon="CopyDocument" @click="copyToClipboard(address)">
                  </el-button>
                </el-tooltip>
              </div>
            </li>
            <li class="over_li">
              <p>HOLDERS</p>
              <span>1,886,491 (0.00%)</span>
            </li>
            <li class="over_li">
              <p>TOTAL TRANSFERS</p>
              <span>58,667,724</span>
              <span>ETH</span>
              <el-tooltip class="box-item" effect="dark"
                content="This count of token transfers is updated every few hours instead of in real-time"
                placement="top-start">
                <el-icon>
                  <Warning />
                </el-icon>
              </el-tooltip>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
    <el-row class="blocks_heade">
      <el-col :span="24">
        <el-tabs v-model="activeName" type="card" class="demo-tabs" @tab-click="handleClick">
          <el-tab-pane label="Transactions" name="tab1">
            <el-row class="box-table">
              <div class="demo-pagination-block box-table_header">
                <div class="demonstration">Total of 36,899,505 blocks</div>
                <el-pagination v-model:current-page="currentPage4" v-model:page-size="pageSize4"
                  :page-sizes="[10, 20, 30, 40]" layout=" sizes, prev, pager, next, " :total="10" small
                  @size-change="handleSizeChange" @current-change="handleCurrentChange" />
              </div>
              <el-table :data="tableData" style="width: 100%" >
                <el-table-column prop="hash" label="Transaction Hash" align="center" width="120">
                  <template v-slot="scope">
                    <router-link class="skyblue-text ellipsis-text"
                      :to="{ name: 'tx', params: { hash: scope.row.hash } }">{{
        scope.row.hash
      }}</router-link>
                  </template>
                </el-table-column>
                <el-table-column prop="method" label="Method" align="center" width="120">
                  <template v-slot="scope">
                    <el-tooltip :content="scope.row.method" placement="top">
                      <el-button>{{ scope.row.method }}</el-button>
                    </el-tooltip>
                  </template>
                </el-table-column>
                <el-table-column prop="blockNumber" label="Block" align="center" width="100">
                  <template v-slot="scope">
                    <router-link class="skyblue-text" :to="{ path: '/block' }">{{ scope.row.blockNumber }}</router-link>
                  </template>
                </el-table-column>
                <el-table-column prop="formattedTime" label="Age" align="center">
                </el-table-column>
                <el-table-column prop="from" label="From" align="center" width="280">
                  <template v-slot="scope">
                    <div class="router_box">
                      <el-tooltip :content="scope.row.from" placement="top">
                        <router-link class="skyblue-text ellipsis-text" :to="{ name: 'address', params: { address: scope.row.from } }">{{ scope.row.from
                          }}</router-link>
                      </el-tooltip>
                      <el-tooltip content="Copy Address" placement="top">
                        <el-button icon="CopyDocument" @click="copyToClipboard(scope.row.from)">
                        </el-button>
                      </el-tooltip>
                      <el-button style="margin-left:2.5rem" type="success" icon="right" circle plain />
                    </div>
                  </template>
                </el-table-column>
                <el-table-column prop="to" label="To" align="center" width="280">
                  <template v-slot="scope">
                    <div class="router_box">
                      <el-tooltip content="Contract" placement="top">
                        <el-button style="margin-right:5px" icon="Document" @click="copyToClipboard(scope.row.to)">
                        </el-button>
                      </el-tooltip>
                      <el-tooltip :content="scope.row.to" placement="top">
                        <router-link class="skyblue-text ellipsis-text" :to="{ name: 'address', params: { address: scope.row.to } }">{{ scope.row.to
                          }}</router-link>
                      </el-tooltip>
                      <el-tooltip content="Copy Address" placement="top">
                        <el-button icon="CopyDocument" @click="copyToClipboard(scope.row.to)">
                        </el-button>
                      </el-tooltip>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column prop="value" label="Value" align="center" />
                <el-table-column prop="TransactionFee" label="Txn Fee" align="center" />
              </el-table>
              <div class="demo-pagination-block box-table_header">
                <el-pagination v-model:current-page="currentPage4" v-model:page-size="pageSize4"
                  :page-sizes="[10, 20, 30, 40]" small layout=" sizes, prev, pager, next" :total="20"
                  @size-change="handleSizeChange" @current-change="handleCurrentChange" />
              </div>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="Internal Transactions" name="tab2">Config</el-tab-pane>
          <el-tab-pane label="Token Transfers(ERC-20)" name="tab3"><el-row class="box-table">
              <div class="demo-pagination-block box-table_header">
                <div class="demonstration">Total of 36,899,505 blocks</div>
                <el-pagination v-model:current-page="currentPage4" v-model:page-size="pageSize4"
                  :page-sizes="[10, 20, 30, 40]" layout=" sizes, prev, pager, next, " :total="10" small
                  @size-change="handleSizeChange" @current-change="handleCurrentChange" />
              </div>
              <el-table :data="tableDatas" style="width: 100%">
                <el-table-column prop="transactionHash" label="Txn Hash">
                  <template v-slot="scope">
                    <el-tooltip :content="scope.row.to" placement="top">
                        <router-link class="skyblue-text ellipsis-text" :to="{ path: '/address' }">{{ scope.row.transactionHash
                          }}</router-link>
                      </el-tooltip>
                  </template>
                </el-table-column>
                <el-table-column prop="method" label="Method" align="center" width="120">
                  <template v-slot="scope">
                    <el-tooltip :content="scope.row.method" placement="top">
                      <el-button>{{ scope.row.method }}</el-button>
                    </el-tooltip>
                  </template>
                </el-table-column>
                <el-table-column prop="blockNumber" label="Block" align="center" width="100">
                  <template v-slot="scope">
                    <router-link class="skyblue-text" :to="{ path: '/block' }">{{ scope.row.blockNumber }}</router-link>
                  </template>
                </el-table-column>
                <el-table-column prop="formattedTime" label="Age" align="center">
                </el-table-column>
                <el-table-column prop="from" label="From" align="center" width="280">
                  <template v-slot="scope">
                    <div class="router_box">
                      <el-tooltip :content="scope.row.from" placement="top">
                        <router-link class="skyblue-text ellipsis-text" :to="{ name: 'address', params: { address: scope.row.from } }">{{ scope.row.from
                          }}</router-link>
                      </el-tooltip>
                      <el-tooltip content="Copy Address" placement="top">
                        <el-button icon="CopyDocument" @click="copyToClipboard(scope.row.from)">
                        </el-button>
                      </el-tooltip>
                      <el-button style="margin-left:2.5rem" type="success" icon="right" circle plain />
                    </div>
                  </template>
                </el-table-column>
                <el-table-column prop="to" align="center" label="To" width="280">
                  <template v-slot="scope">
                    <div class="router_box">
                      <el-tooltip content="Contract" placement="top">
                        <el-button style="margin-right:5px" icon="Document" @click="copyToClipboard(scope.row.to)">
                        </el-button>
                      </el-tooltip>
                      <el-tooltip :content="scope.row.to" placement="top">
                        <router-link class="skyblue-text ellipsis-text" :to="{ name: 'address', params: { address: scope.row.to } }">{{ scope.row.to
                          }}</router-link>
                      </el-tooltip>
                      <el-tooltip content="Copy Address" placement="top">
                        <el-button icon="CopyDocument" @click="copyToClipboard(scope.row.to)">
                        </el-button>
                      </el-tooltip>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column prop="value" align="center" label="Value" />
                <el-table-column prop="ercName" align="center" label="Token" />
              </el-table>
              <div class="demo-pagination-block box-table_header">
                <el-pagination v-model:current-page="currentPage4" v-model:page-size="pageSize4"
                  :page-sizes="[10, 20, 30, 40]" small layout=" sizes, prev, pager, next" :total="20"
                  @size-change="handleSizeChange" @current-change="handleCurrentChange" />
              </div>
            </el-row></el-tab-pane>
          <el-tab-pane label="NFT Transfers" name="tab4">Task</el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
      </el-main>
      <el-aside class="responsive-aside" ></el-aside>
    </el-container>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { ElMessage } from 'element-plus';
import { getAddressPage,getContractAddress } from '@/api/address';
const tableData = ref([]);
const tableDatas = ref([]);
// const individualQueryDetails = ref({})
const currentPage4 = ref(1)
const pageSize4 = ref(10)
const copiedText = ref('');
const { address } = defineProps({
  address: {
    type: [String],
    required: true,
  }
});
const activeName = ref('tab1')

const handleClick = (tab, event) => {
  console.log(tab.props.name)
  if(tab.props.name === 'tab1'){
    getAddressList()
  }else if(tab.props.name === 'tab2'){
    console.log(tab.props.name);
  }else if(tab.props.name === 'tab3'){
    getContractList()
  }
}
// const getIndividualQuery = async () => {
//   try {
//     if (address !== null) {
//       const response = await getTokenInquire(address);
//       individualQueryDetails.value = response.data;
//       console.log(response.data);
//     }
//   } catch (error) {
//     console.error('Error fetching block details:', error);
//   }
// }
const getContractList = async () => {
  try {
    if (address !== null) {
      const response = await getContractAddress(address, currentPage4.value, pageSize4.value);
      console.log(response.data);
      tableDatas.value = response.data.list;
      const currentTime = Math.floor(Date.now() / 1000);
      tableDatas.value.forEach(item => {
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
      })
    }
  } catch (error) {
    console.error('Error fetching block details:', error);
  }
}
const getAddressList = async () => {
  try {
    if (address !== null) {
      const response = await getAddressPage(address, currentPage4.value, pageSize4.value);
      tableData.value = response.data.list;
      timestamps();
      tableData.value.forEach(item => {
        item.TransactionFee = item.cumulativeGasUsed * item.effectiveGasPrice
      })
    }
  } catch (error) {
    console.error('Error fetching block details:', error);
  }
}
const timestamps = () => {
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
}
const handleSizeChange = (val) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val) => {
  console.log(`current page: ${val}`)
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
  getAddressList();
  // getIndividualQuery();
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
  margin-top: 1.25rem;
  margin-left: 2rem;
  margin-right: 2rem;
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
  font-size: 10px;
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

@media (max-width: 767px) {

  .card-ul,
  .card-li {
    padding: 5px;
  }

  .card_p {
    font-size: 8px;
  }
}

.card-left {
  display: flex;
}

.card_p {
  font-size: 10px;
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
  margin-right: 5px;
}

.ellipsis-text {
  width: 7.125rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.router_box {
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
}

.blocks_heade_p {
  color: #6c757d;
  font-size: 12px;
}

.el-tag {
  margin-top: 1.25rem;
  margin-right: .625rem;
}

.darkb_button {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.ContentPlaceHolder1_lblWarning {
  display: flex;
  justify-content: space-between;
}

.over_ul {
  height: 10rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
}

.over_li p {
  padding-bottom: 3px;
}

.over_div {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
</style>