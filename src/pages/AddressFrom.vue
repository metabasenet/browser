<template>
  <div class="box">
    <el-container class="container-xxl">
      <el-aside class="responsive-aside"></el-aside>
      <el-main>
        <el-row>
          <el-col :span="24">
            <div class="grid-content darkb_button grid-content_h3">
              <div>
                <h3>{{ contract }}</h3>
                <span class="ellipsis-text">{{ address }}</span>
                <el-tooltip v-if="!istoCopied" content="Copy Address" placement="top">
                  <el-button text icon="CopyDocument" @click="copyToClipboard(address)">
                  </el-button>
                </el-tooltip>
                <el-tooltip v-else content="Copied!" placement="top">
              <el-button text icon="Check" @click="copyToClipboard(address)">
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
            <p class="blocks_heade_p">
              Sponsored: METAWIN - Join Metawin Today Enter Now.
            </p>
            <div class="ContentPlaceHolder1_lblWarning">
              <div>
                <el-tag type="info">ERC-20</el-tag>
                <el-tag type="info">Cross-Chain</el-tag>
                <el-tag type="info"># Binance</el-tag>
                <el-tag type="info"># Binance-Peg</el-tag>
              </div>
              <div>
                <el-dropdown style="margin-right: 5px">
                  <el-button icon="Star"> </el-button>
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
                  <p>MNT BALANCE</p>
                  <!-- <el-tooltip class="box-item" effect="dark"
                :content="individualQueryDetails && individualQueryDetails.totalsupply ? individualQueryDetails.totalsupply.toString() : ''"
                placement="top-start">
                <span>{{ individualQueryDetails.totalsupply }}</span>
              </el-tooltip> -->
                  <!-- <span style="font-weight: bold;"> ETH </span> -->
                  <el-tooltip class="box-item" effect="dark" content="CSupply: 551,557.859909" placement="top-start">
                    <span>{{ getByBalance.balance }}</span>
                  </el-tooltip>
                </li>
                <li class="over_li">
                  <p>MNT VALUE</p>
                  <span>$5,250,039,228.27 (@ $544.76/BNB)</span>
                </li>
                <li class="over_li">
                  <p>TOKEN HOLDINGS</p>
                  <div class="over_div">
                    <el-select v-model="values" placeholder=">$96,375" filterable style="width: 100%">
                      <template #header>
                        <p class="erc_p">ERC-20 Tokens</p>
                      </template>
                      <el-option v-for="item in cities" :key="item.decimals" :label="item.ercName"
                        :value="item.decimals">
                        <router-link :to="{ name: 'token', params: { address: item.address } }"
                          style="display: flex; height:50px; flex-direction: column; line-height: 1.5; padding-top: 5px; padding-bottom: 5px;">
                          <p style="margin: 0; color: black;
                            font-weight:400;
                            font-size: 12px; ">{{ item.ercName }} ({{ item.ercSymbol }})</p>
                          <p style="margin: 0; color: #6c757d;
                            font-weight:400;
                            font-size: 13px; ">{{ item.balance }} {{ item.ercSymbol }}</p>
                        </router-link>
                      </el-option>
                    </el-select>
                  </div>
                </li>
              </ul>
            </div>
          </el-col>
          <el-col :span="5" align :xs="24" :sm="12" :md="8" :lg="8">
            <div class="grid-content ep-bg-purple-dark blocks_header">
              <ul class="over_ul">
                <li>
                  <h3>More Info</h3>
                </li>
                <li class="over_li">
                  <p>PRIVATE NAME TAGS</p>
                  <el-button icon="Plus" round>Add</el-button>
                  <!-- <el-tooltip class="box-item" effect="dark" content="Top Left prompts info" placement="top-start">
                    <span class="ellipsis-text">604,999.999959 </span>
                  </el-tooltip>
                  <span style="font-weight: bold;">ETH </span>
                  <el-tooltip class="box-item" effect="dark" content="Top Left prompts info" placement="top-start">
                    <span class="ellipsis-text" style="color:#6c757d">(CSupply: 551,557.859909)</span>
                  </el-tooltip> -->
                </li>
                <li class="over_li">
                  <p>LAST TXN SENT</p>
                  <div class="over_div">
                    <el-tooltip class="box-item" effect="dark" :content="address" placement="top-start">
                      <router-link class="skyblue-text ellipsis-text"
                        :to="{ name: 'address', params: { address: address } }">{{
                          address
                        }}</router-link>
                    </el-tooltip>
                    <span>from 12 hrs ago</span>
                  </div>

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
                  <p>TOKEN CONTRACT</p>
                  <div class="over_div">
                    <el-tooltip class="box-item" effect="dark" content="Contract" placement="top-start">
                      <el-icon>
                        <Document />
                      </el-icon>
                    </el-tooltip>
                    <el-tooltip class="box-item" effect="dark" :content="address" placement="top-start">
                      <router-link class="skyblue-text ellipsis-text"
                        :to="{ name: 'address', params: { address: address } }">{{
                          address }}</router-link>
                    </el-tooltip>
                    <el-tooltip content="Copy Address" placement="top">
                      <el-button text icon="CopyDocument" @click="copyToClipboard(address)">
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
                    <div class="demonstration">
                      More than {{ total }} transactions found
                    </div>
                    <el-pagination :pager-count="5" v-model:current-page="currentPage4" v-model:page-size="pageSize4"
                      :page-sizes="[10, 20, 30, 40]" background layout=" sizes, prev, pager, next, " :total="total"
                      small @size-change="handleSizeChange1" @current-change="getAddressList" />
                  </div>
                  <el-table :data="tableData" style="width: 100%" size="default">
                    <el-table-column prop="hash" label="Transaction Hash" align="center" width="120">
                      <template v-slot="scope">
                        <el-tooltip :content="scope.row.hash" placement="top">
                          <router-link class="skyblue-text ellipsis-text" :to="{
                            name: 'tx',
                            params: { hash: scope.row.hash },
                          }">{{ scope.row.hash }}</router-link>
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
                        <router-link class="skyblue-text" :to="{
                          name: 'block',
                          params: { blockNumber: scope.row.blockNumber },
                        }">{{ scope.row.blockNumber }}</router-link>
                      </template>
                    </el-table-column>
                    <el-table-column prop="formattedTime" label="Age" align="center" width="150">
                    </el-table-column>
                    <el-table-column prop="from" label="From" align="center" width="250">
                      <template v-slot="scope">
                        <div class="router_box">
                          <el-tooltip :content="scope.row.from" placement="top">
                            <router-link class="skyblue-text ellipsis-text" :to="{
                              name: 'address',
                              params: { address: scope.row.from },
                            }">{{ scope.row.from }}</router-link>
                          </el-tooltip>
                          <el-tooltip content="Copy Address" placement="top">
                            <el-button text icon="CopyDocument" @click="copyToClipboard(scope.row.from)">
                            </el-button>
                          </el-tooltip>
                          <el-button style="margin-left: 2.5rem" type="success" icon="right" circle plain />
                        </div>
                      </template>
                    </el-table-column>
                    <el-table-column prop="to" label="To" align="center" width="250">
                      <template v-slot="scope">
                        <div class="router_box">
                          <el-tooltip content="Contract" placement="top">
                            <el-button style="margin-right: 5px" icon="Document" @click="copyToClipboard(scope.row.to)">
                            </el-button>
                          </el-tooltip>
                          <el-tooltip :content="scope.row.to" placement="top">
                            <router-link class="skyblue-text ellipsis-text" :to="{
                              name: 'address',
                              params: { address: scope.row.to },
                            }">{{ scope.row.to }}</router-link>
                          </el-tooltip>
                          <el-tooltip content="Copy Address" placement="top">
                            <el-button text icon="CopyDocument" @click="copyToClipboard(scope.row.to)">
                            </el-button>
                          </el-tooltip>
                        </div>
                      </template>
                    </el-table-column>
                    <el-table-column prop="value" label="Value" align="center">
                      <template v-slot="scope">
                        <el-tooltip :content="`${scope.row.value}`" placement="top">
                          <span class="ellipsis-text">{{
                            scope.row.value
                          }}</span>
                        </el-tooltip>
                      </template>
                    </el-table-column>
                    <el-table-column prop="TransactionFee" label="Txn Fee" align="center">
                      <template v-slot="scope">
                        <el-tooltip :content="`${scope.row.TransactionFee}`" placement="top">
                          <span class="ellipsis-text">{{
                            scope.row.TransactionFee
                          }}</span>
                        </el-tooltip>
                      </template>
                    </el-table-column>
                  </el-table>
                  <div class="demo-pagination-block box-table_header">
                    <el-pagination :pager-count="5" v-model:current-page="currentPage4" v-model:page-size="pageSize4"
                      :page-sizes="[10, 20, 30, 40]" background layout=" sizes, prev, pager, next, " :total="total"
                      small @size-change="handleSizeChange1" @current-change="getAddressList" />
                  </div>
                </el-row>
              </el-tab-pane>
              <el-tab-pane label="Internal Transactions" name="tab2">Config</el-tab-pane>
              <el-tab-pane label="Token Transfers(ERC-20)" name="tab3"><el-row class="box-table">
                  <div class="demo-pagination-block box-table_header">
                    <div class="demonstration">
                      Latest {{ totals }} ERC-20 Token Transfer Events (View All)
                    </div>
                    <el-pagination :pager-count="5" v-model:current-page="currentPage4" v-model:page-size="pageSize4"
                      :page-sizes="[10, 20, 30, 40]" background layout=" sizes, prev, pager, next, " :total="totals"
                      small @size-change="handleSizeChange" @current-change="getContractList" />
                  </div>
                  <el-table :data="tableDatas" style="width: 100%" size="default">
                    <el-table-column prop="transactionHash" label="Txn Hash">
                      <template v-slot="scope">
                        <el-tooltip :content="scope.row.to" placement="top">
                          <router-link class="skyblue-text ellipsis-text" :to="{
                            name: 'tx',
                            params: { hash: scope.row.transactionHash },
                          }">{{
                                scope.row.transactionHash }}</router-link>
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
                        <router-link class="skyblue-text" :to="{
                          name: 'block',
                          params: { blockNumber: scope.row.blockNumber },
                        }">{{ scope.row.blockNumber
                          }}</router-link>
                      </template>
                    </el-table-column>
                    <el-table-column prop="formattedTime" label="Age" align="center">
                    </el-table-column>
                    <el-table-column prop="from" label="From" align="center" width="250">
                      <template v-slot="scope">
                        <div class="router_box">
                          <el-tooltip :content="scope.row.from" placement="top">
                            <router-link class="skyblue-text ellipsis-text" :to="{
                              name: 'address',
                              params: { address: scope.row.from },
                            }">{{ scope.row.from }}</router-link>
                          </el-tooltip>
                          <el-tooltip content="Copy Address" placement="top">
                            <el-button text icon="CopyDocument" @click="copyToClipboard(scope.row.from)">
                            </el-button>
                          </el-tooltip>
                          <el-button style="margin-left: 2.5rem" type="success" icon="right" circle plain />
                        </div>
                      </template>
                    </el-table-column>
                    <el-table-column prop="to" align="center" label="To" width="250">
                      <template v-slot="scope">
                        <div class="router_box">
                          <el-tooltip content="Contract" placement="top">
                            <el-button style="margin-right: 5px" icon="Document" @click="copyToClipboard(scope.row.to)">
                            </el-button>
                          </el-tooltip>
                          <el-tooltip :content="scope.row.to" placement="top">
                            <router-link class="skyblue-text ellipsis-text" :to="{
                              name: 'address',
                              params: { address: scope.row.to },
                            }">{{ scope.row.to }}</router-link>
                          </el-tooltip>
                          <el-tooltip content="Copy Address" placement="top">
                            <el-button text icon="CopyDocument" @click="copyToClipboard(scope.row.to)">
                            </el-button>
                          </el-tooltip>
                        </div>
                      </template>
                    </el-table-column>
                    <el-table-column prop="value" align="center" label="Value">
                      <template v-slot="scope">
                        <el-tooltip :content="`${scope.row.value}`" placement="top">
                          <span class="ellipsis-text">{{
                            scope.row.value
                          }}</span>
                        </el-tooltip>
                      </template>
                    </el-table-column>
                    <el-table-column prop="ercName" align="center" label="Token" />
                  </el-table>
                  <div class="card-footer">
                    <router-link to="/tokentxns" class="view-all">
                      <span>VIEW ALL ERC-20 TRANSACTIONS </span>
                      <el-icon style="margin-left:3px">
                        <Right />
                      </el-icon>
                    </router-link>
                  </div>

                  <!-- <div class="demo-pagination-block box-table_header"></div> -->
                  <!-- <el-pagination :pager-count="5" v-model:current-page="currentPage4" v-model:page-size="pageSize4"
                      :page-sizes="[10, 20, 30, 40]" background layout=" sizes, prev, pager, next, " :total="totals"
                      small @size-change="handleSizeChange" @current-change="getContractList" /> -->
                </el-row>
              </el-tab-pane>
              <!-- <el-tab-pane label="NFT Transfers" name="tab4">Task</el-tab-pane> -->

            </el-tabs>

          </el-col>
        </el-row>
      </el-main>
      <el-aside class="responsive-aside"></el-aside>
    </el-container>
  </div>
</template>

<script setup>
import { ref, onMounted,defineProps} from "vue";
import { useRoute } from "vue-router";
import { ElMessage } from "element-plus";
import { ethers } from "ethers";
import HomeMain from "@/pages/HomeMain.vue";
import {
  getAddressPage,
  getContractAddress,
  getBalanceAddress,
  getselectAddress
} from "@/api/address";
const { address } = defineProps({
  address: {
    type: [String],
    required: true,
  },
});
const istoCopied = ref(false);
const tableData = ref([]);
const total = ref(0);
const totals = ref(0);
const tableDatas = ref([]);
const cities = ref([])
const values = ref('')
// const individualQueryDetails = ref({})
const route = useRoute();
const contract = ref(route.query.contract);
const currentPage4 = ref(1);
const pageSize4 = ref(10);
const copiedText = ref("");
const getByBalance = ref({});
const activeName = ref("tab1");
const handleClick = (tab, event) => {
  console.log(tab.props.name);
  if (tab.props.name === "tab1") {
    getAddressList();
  } else if (tab.props.name === "tab2") {
    console.log(tab.props.name);
  } else if (tab.props.name === "tab3") {
    getContractList();
  }
};
// const getIndividualQuery = async () => {
//   try {
//     if (address !== null) {
//       const response = await getTokenInquire(address);
//       individualQueryDetails.value = response.data;
//       
//     }
//   } catch (error) {
//     console.error('Error fetching details:', error);
//   }
// }
const getContractList = async (pager = 1) => {
  try {
    if (address !== null) {
      currentPage4.value = pager;
      const response = await getContractAddress(
        address,
        currentPage4.value,
        pageSize4.value
      );

      tableDatas.value = response.data.list;
      
      totals.value = response.data.total;
      const currentTime = Math.floor(Date.now() / 1000);
      tableDatas.value.forEach((item) => {
        const timestamp = item.timestamp;
        const timeDifferenceInSeconds = currentTime - timestamp;
        let formattedTime;
        if (timeDifferenceInSeconds < 60) {
          const absoluteTimeDifference = Math.abs(timeDifferenceInSeconds);
          formattedTime = `${absoluteTimeDifference} seconds ago`;
        } else if (
          timeDifferenceInSeconds >= 60 &&
          timeDifferenceInSeconds < 3600
        ) {
          const minutes = Math.floor(timeDifferenceInSeconds / 60);
          formattedTime = `${minutes} minutes ago`;
        } else if (
          timeDifferenceInSeconds >= 3600 &&
          timeDifferenceInSeconds < 86400
        ) {
          const hours = Math.floor(timeDifferenceInSeconds / 3600);
          formattedTime = `${hours} hours ago`;
        } else {
          const days = Math.floor(timeDifferenceInSeconds / 86400);
          formattedTime = `${days} days ago`;
        }
        item.formattedTime = formattedTime;
      });
    }
  } catch (error) {
    console.error("Error fetching details:", error);
  }
};
const getAddressList = async (pager = 1) => {
  try {
    if (address !== null) {
      currentPage4.value = pager;
      const response = await getAddressPage(
        address,
        currentPage4.value,
        pageSize4.value
      );
      tableData.value = response.data.list;
      total.value = response.data.total;
      timestamps();
      tableData.value.forEach((item) => {
        item.TransactionFee = item.cumulativeGasUsed * item.effectiveGasPrice;
      });
    }
  } catch (error) {
    console.error("Error fetching details:", error);
  }
};
const getBalanceList = async () => {
  try {
    if (address !== null) {
      const response = await getBalanceAddress(address);
      getByBalance.value = response.data[0] || {};
    }
  } catch (error) {
    console.error("Error fetching details:", error);
  }
};
const getSelectList = async () => {
  try {
    if (address !== null) {
      const response = await getselectAddress(address);

      cities.value = response.data || [];
    }
  } catch (error) {
    console.error("Error fetching details:", error);
  }
};
const getContractOrAddress = async () => {
  const provider = new ethers.BrowserProvider(window.ethereum);
  try {
    await provider.getCode(address).then(code => {
      if (code.length > 4) {
        contract.value = "contract"
      } else {
        contract.value = "address"
      }
    })
  } catch (error) {
    console.log(error);
  }
}
const timestamps = () => {
  const currentTime = Math.floor(Date.now() / 1000);
  tableData.value.forEach((item) => {
    const timestamp = item.timestamp;
    const timeDifferenceInSeconds = currentTime - timestamp;
    let formattedTime;
    if (timeDifferenceInSeconds < 60) {
      const absoluteTimeDifference = Math.abs(timeDifferenceInSeconds);
      formattedTime = `${absoluteTimeDifference} seconds ago`;
    } else if (
      timeDifferenceInSeconds >= 60 &&
      timeDifferenceInSeconds < 3600
    ) {
      const minutes = Math.floor(timeDifferenceInSeconds / 60);
      formattedTime = `${minutes} minutes ago`;
    } else if (
      timeDifferenceInSeconds >= 3600 &&
      timeDifferenceInSeconds < 86400
    ) {
      const hours = Math.floor(timeDifferenceInSeconds / 3600);
      formattedTime = `${hours} hours ago`;
    } else {
      const days = Math.floor(timeDifferenceInSeconds / 86400);
      formattedTime = `${days} days ago`;
    }
    item.formattedTime = formattedTime;
  });
};
const handleSizeChange1 = (val) => {
  getAddressList();
};
const handleSizeChange = (val) => {
  getContractList();
};
const handleCurrentChange = (val) => {
  console.log(`current page: ${val}`);
};
function copyToClipboard(text) {
  copiedText.value = text;
  navigator.clipboard
    .writeText(text)
    .then(() => {
      ElMessage.success("Copy successful!");
    })
    .catch((err) => {
      console.error("Copy failed:", err);
      ElMessage.error("Copy failed, please copy manually!");
    });
}
onMounted(() => {
  getAddressList();
  getBalanceList();
  getSelectList();
  getContractOrAddress();
});
</script>

<style scoped>
.el-select-dropdown__item {
  height: auto;
  line-height: normal;
  overflow: visible;
}

:deep(.is-filterable) {
  height: 40px;
}

.erc_p {
  font-size: 13px;
  color: black;
  font-weight: 500;
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

.card-footer {
  width: 100%;
  text-align: center;
  padding: 15px 0;
  color: #6c757d;
  font-size: 16px;
  background-color: #f8f9fa;
  /* border: 1px solid #e6e6e6; */

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

  .grid-content_h3,
  .blocks_heade {
    margin-left: 0;
    margin-right: 0;
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
  font-size: 14px;
}

.el-tag {
  margin-top: 1.25rem;
  margin-right: 0.625rem;
}

.darkb_button {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.ContentPlaceHolder1_lblWarning {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.over_ul {
  height: 12rem;
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

.demo-tabs {
  background-color: #fff;
  border-radius: 15px;
}
</style>