<template>
  <div class="box">
    <el-container class="container-xxl">
      <el-aside class="responsive-aside"></el-aside>
      <el-main>
        <el-row>
          <el-col :span="24">
            <div class="grid-content ep-bg-purple-dark grid-content_h3 darkb_button">
              <h3>Transaction Details</h3>
              <div>
                <el-dropdown style="margin-right:5px">
                  <el-button type="primary">
                    <el-icon class="el-icon--left">
                      <Basketball />
                    </el-icon>
                    Buy<el-icon class="el-icon--right"><arrow-down /></el-icon>
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
                <el-dropdown style="margin-right:5px">
                  <el-button type="primary">
                    Play<el-icon class="el-icon--right"><arrow-down /></el-icon>
                  </el-button>
                  <template #dropdown>
                    <el-dropdown-menu>
                      <el-dropdown-item>Action 1</el-dropdown-item>
                      <el-dropdown-item>Action 2</el-dropdown-item>
                    </el-dropdown-menu>
                  </template>
                </el-dropdown>
                <el-dropdown>
                  <el-button type="primary">
                    Gaming<el-icon class="el-icon--right"><arrow-down /></el-icon>
                  </el-button>
                  <template #dropdown>
                    <el-dropdown-menu>
                      <el-dropdown-item>Action 1</el-dropdown-item>
                      <el-dropdown-item>Action 2</el-dropdown-item>
                      <el-dropdown-item>Action 2</el-dropdown-item>
                    </el-dropdown-menu>
                  </template>
                </el-dropdown>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="grid-content ep-bg-purple-dark grid-content_h1">
              <el-tabs v-model="activeName" type="border-card" class="demo-tabs" @tab-click="handleClick">
                <el-tab-pane label="OverView" name="overView">
                  <!-- <el-button type="primary" round>OverView</el-button> -->
                  <el-row class="grid-content_row">
                    <el-col :span="24" :xs="24">
                      <el-descriptions class="grid-content_h2 grid-content_h1" size="default" v-model="transDetails"
                        :column="1" align="center">
                        <el-descriptions-item label="Transaction Hash:" label-align="center" align="left"
                          label-class-name="my-label" class-name="my-content ellipsis-text" label-width="30%">
                          <div class="block_height"> <span
                              v-if="transDetails && typeof transDetails.hash === 'string'">{{
                              transDetails.hash }}</span>
                            <span v-else>N/A</span>
                            <el-tooltip v-if="!transDetails.istoCopied" content="Copy TxHash to clipboard"
                              placement="top"><el-button text icon="CopyDocument"
                                @click="copyToClipboard(transDetails.hash)">
                              </el-button>
                            </el-tooltip>
                            <el-tooltip v-else content="Copied!" placement="top">
                              <el-button text icon="Check" @click="copyToClipboard(transDetails.hash)">
                              </el-button>
                            </el-tooltip>
                          </div>
                        </el-descriptions-item>
                        <el-descriptions-item label="Status:" label-align="center" align="left"
                          label-class-name="my-label">
                          <div class="block_height"><el-button v-if="transDetails.status == 1" type="success"
                              plain><el-icon>
                                <CircleCheckFilled />
                              </el-icon>Success</el-button>
                            <el-button v-else type="danger" plain><el-icon>
                                <CloseBold />
                              </el-icon>Lose</el-button>
                          </div>

                        </el-descriptions-item>
                        <el-descriptions-item label="Block:" label-align="center" align="left"
                          label-class-name="my-label">
                          <div class="block_height">
                            <div style="display: flex;  align-items: center;">
                              <router-link class="skyblue-text" to="/block">
                                <div class=" mb-2 truncate">
                                  <span> {{ transDetails.blockNumber }}</span>
                                </div>
                              </router-link>
                              <el-tooltip content="Number of blocks validated since" placement="top">
                                <el-button size="small">{{ blockHeightDiff }} Block Confirmations</el-button>
                              </el-tooltip>
                            </div>
                          </div>


                        </el-descriptions-item>
                        <el-descriptions-item label="Timestamp:" label-align="center" align="left"
                          label-class-name="my-label">
                          <div class="block_height"><el-icon>
                              <Timer />
                            </el-icon>
                            <span>{{ transDetails.formattedTime }} ({{ greenwichTime }})</span>
                          </div>
                        </el-descriptions-item>
                        <el-descriptions-item label="Transaction Action:" label-align="center" align="left"
                          label-class-name="my-label">
                          <div class="block_height">{{ transDetails.transactionActions }}</div>
                        </el-descriptions-item>
                        <el-descriptions-item label="From:" label-align="center" align="left"
                          label-class-name="my-label">
                          <div class="block_height">
                            <div class="TransactionAction">
                              <router-link class="skyblue-text ellipsis-text" :to="{
                                name: 'address',
                                params: { address: transDetails.from },
                              }">{{ transDetails.from }}
                              </router-link>
                              <el-tooltip v-if="!transDetails.istoCopieds" content="Copy Address"
                                placement="top"><el-button style="margin-left:5px" text icon="CopyDocument"
                                  @click="copyToClipboards(transDetails.from)">
                                </el-button>
                              </el-tooltip>
                              <el-tooltip v-else content="Copied!" placement="top">
                                <el-button text icon="Check" @click="copyToClipboards(transDetails.hash)">
                                </el-button>
                              </el-tooltip>
                            </div>
                          </div>
                        </el-descriptions-item>
                        <el-descriptions-item label="To:" label-align="center" align="left" label-class-name="my-label">
                          <div class="block_height">
                            <div class="TransactionAction">
                              <el-tooltip content="Contract" placement="top">
                                <el-icon>
                                  <Document />
                                </el-icon>
                              </el-tooltip>
                              <router-link class="skyblue-text ellipsis-text" :to="{
                                name: 'address',
                                params: { address: transDetails.to },
                              }">
                                <div class=" mb-2 truncate">{{ transDetails.to }}</div>
                              </router-link>

                              <el-tooltip v-if="!transDetails.istoCopiedd" content="Copy Address" placement="top">
                                <el-button style="margin-left:5px" text icon="CopyDocument"
                                  @click="copyToClipboardd(transDetails.to)">
                                </el-button>
                              </el-tooltip>
                              <el-tooltip v-else content="Copied!" placement="top">
                                <el-button text icon="Check" @click="copyToClipboardd(transDetails.hash)">
                                </el-button>
                              </el-tooltip>
                              <el-tooltip content="Contract Execution Completed" placement="top">
                                <el-button type="success" icon="Check" circle />
                              </el-tooltip>
                            </div>
                            <!-- <div class="TransactionAction">
                <el-icon>
                  <Money />
                </el-icon><span>Transfer 0.004435244050238826 MNT</span> <span>From</span>
                <el-tooltip content="BSC: Validator Set" placement="top">
                  <router-link class="skyblue-text" to="/address">
                    <div class=" mb-2 truncate">BSC: Validator Set</div>
                  </router-link>
                </el-tooltip><span>To</span>
                <el-tooltip content="BSC: System Reward" placement="top">
                  <router-link class="skyblue-text" to="/address">
                    <div class=" mb-2 truncate">BSC: System Reward</div>
                  </router-link>
                </el-tooltip>
              </div>
              <div class="TransactionAction">
                <el-icon>
                  <Money />
                </el-icon><span>Transfer 0.007096390480382122 MNT From</span>
                <el-tooltip content="BSC: Validator Set" placement="top">
                  <router-link class="skyblue-text" to="/address">
                    <div class=" mb-2 truncate">BSC: Validator Set</div>
                  </router-link>
                </el-tooltip><span>To</span>
                <el-tooltip content="Null: 0x000...dEaD" placement="top">
                  <router-link class="skyblue-text" to="/address">
                    <div class=" mb-2 truncate"></div>
                  </router-link>
                </el-tooltip>
              </div> -->
                          </div>

                        </el-descriptions-item>
                        <el-descriptions-item label="Value:" label-align="center" align="left"
                          label-class-name="my-label">
                          <div class="block_height"> <el-icon>
                              <Timer />
                            </el-icon>
                            <span> {{ transDetails.value }}
                              <!-- ($43.24) -->
                            </span>
                          </div>

                        </el-descriptions-item>
                        <el-descriptions-item label="Transaction Fee:" label-align="center" align="left"
                          label-class-name="my-label">
                          <div class="block_height"> <span> {{ transDetails.TransactionFee }} MNT
                              <!-- (${{ transDetails.TransactionFee }}) -->
                            </span>
                          </div>

                        </el-descriptions-item>
                        <el-descriptions-item label="Gas Price:" label-align="center" align="left"
                          label-class-name="my-label">
                          <div class="block_height"><span> {{ transDetails.gasPrice }}
                              <!-- ({{ transDetails.gasPrice }})MNT -->
                            </span>
                          </div>

                        </el-descriptions-item>
                      </el-descriptions>
                    </el-col>
                  </el-row>
                  <el-row class="grid-content_h2">
                    <el-col :span="24" :xs="24">
                      <el-collapse @change="handleChange">
                        <el-collapse-item title="More Details:" name="1">
                          <el-descriptions class="grid-content" :column="1" align="left" v-model="transDetails">
                            <el-descriptions-item label-class-name="my-label" label="Gas Limit & Usage by Txn:"
                              label-align="center" align="left" class-name="my-content">
                              <div class="block_height"><span>{{ transDetails.gasUsed }} | {{ transDetails.gasLimit }}
                                  ({{ratioValue}}%)</span></div>
                            </el-descriptions-item>
                            <el-descriptions-item label-class-name="my-label" label="Burnt Fees:" label-align="center"
                              align="left">
                              <div class="block_height"><span>0.005224500901272524 MNT
                                  ($3.15)</span></div>
                            </el-descriptions-item>
                            <el-descriptions-item label-class-name="my-label" label="Other Attributes:"
                              label-align="center" align="left">
                              <div class="block_height"> <el-button>Nonce: 1607650</el-button><el-button>Position In
                                  Block:
                                  208</el-button></div>

                            </el-descriptions-item>
                            <el-descriptions-item label-class-name="my-label" label="Input Data:" label-align="center"
                              align="left">
                              <div class="block_height"><el-input style="width: 100%" :rows="2" type="textarea" disabled
                                  :placeholder="transDetails.data" />
                                <el-select v-model="value" placeholder="View Input As"
                                  style="width: 150px;margin-right:10px">
                                  <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value" />
                                </el-select>
                                <el-button icon="Menu">Decode Input Data</el-button>
                                <el-button icon="Position">Advanced Filter</el-button>
                              </div>

                            </el-descriptions-item>
                          </el-descriptions>
                        </el-collapse-item>
                      </el-collapse>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="24" :xs="24">
                      <el-descriptions class="grid-content_h2 grid-content" :column="1" align="center">
                        <el-descriptions-item label="Private Note:" label-align="center" align="left"
                          label-class-name="my-label" class-name="my-content" label-width="30%">
                          <div class="block_height"> <span>To access the Private Note feature, you must be Logged
                              In</span></div>

                        </el-descriptions-item>

                      </el-descriptions>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="24" :xs="24" class="grid-content_h1 grid_content">
                      <span>
                        <el-icon>
                          <Loading />
                        </el-icon>
                        A transaction is a cryptographically signed instruction that changes the blockchain state. Block
                        explorers
                        track the details of all transactions in the network. Learn more about transactions in our
                        Knowledge
                        Base.</span>
                    </el-col>
                  </el-row>
                </el-tab-pane>
                <el-tab-pane :label="`Logs(${ total })`" name="logs">
                  <el-row class="grid-content_row">
                    <el-col :span="24" :xs="24">
                      <ul>
                        <h3>Transaction Receipt Event Logs</h3>
                        <li class="log_li" v-for="(item, index) in transLogs" :key="index">
                          <div>
                            <el-tag type="success" size="large" effect="dark" round><span
                                style="color:#fff">{{item.index}}</span></el-tag>
                          </div>
                          <div style="width: 100%;">
                            <el-descriptions class="grid-content_h2 grid-content_h1" size="default"
                              v-model="transDetails" :column="1" align="center">
                              <el-descriptions-item label="Adddress:" label-align="center" align="left"
                                label-class-name="my-label" class-name="my-content ellipsis-text" label-width="30%">
                                <template #label>
                                  <h3>Adddress:</h3>
                                </template>
                                <div class="block_height">
                                  <div class="log_address">
                                    <el-tooltip effect="dark" :content="item.contractaddress" placement="top">
                                      <router-link class="skyblue-text ellipsis-text" :to="{
                                        name: 'address',
                                        params: { address: item.contractaddress },
                                      }">{{ item.contractaddress }}
                                      </router-link>
                                    </el-tooltip>
                                    <el-tooltip v-if="!istoCopiedsd" content="Copy contractaddress to clipboard"
                                      placement="top"><el-button text icon="CopyDocument"
                                        @click="copyToClipboardss(item.contractaddress)">
                                      </el-button>
                                    </el-tooltip>
                                    <el-tooltip v-else content="Copied!" placement="top">
                                      <el-button text icon="Check" @click="copyToClipboardss(item.contractaddress)">
                                      </el-button>
                                    </el-tooltip>
                                  </div>
                                </div>
                              </el-descriptions-item>
                              <el-descriptions-item label="Name:" label-align="center" align="left"
                                label-class-name="my-label" class-name="my-content" label-width="30%">
                                <div class="block_height">
                                  <span>{{ item.methodhash }}</span>

                                </div>
                              </el-descriptions-item>
                              <el-descriptions-item label="Topics:" label-align="center" align="left"
                                label-class-name="my-label" class-name="my-content" label-width="30%">
                                <div class="block_height">
                                  <div style="display:flex" v-if="item.from">
                                    <el-tag type="warning">0:from</el-tag><router-link
                                      class="skyblue-text ellipsis-text" :to="{
                                        name: 'address',
                                        params: { address: item.from },
                                      }">{{ item.from }}
                                    </router-link>
                                  </div>
                                </div>
                                <div class="block_heights">
                                  <div style="display:flex" v-if="item.to">
                                    <el-tag type="info">1:to</el-tag><router-link class="skyblue-text ellipsis-text"
                                      :to="{
                                        name: 'address',
                                        params: { address: item.to },
                                      }">{{ item.to }}
                                    </router-link>
                                  </div>
                                </div>
                              </el-descriptions-item>
                              <el-descriptions-item label="Data:" label-align="center" align="left"
                                label-class-name="my-label" class-name="my-content" label-width="30%">
                                <div class="block_heightz">
                                  <div class="input_div">
                                    <el-input type="textarea" v-model="item.value" autosize disabled
                                      style="width: 100%;height:auto"></el-input>
                                    <div class="input_button">
                                      <el-button type="primary" @click="decadecimal(item.value,index)">Dec</el-button>
                                      <el-button type="success" @click="hexadecimal(item.value,index)">Hex</el-button>
                                    </div>
                                  </div>
                                </div>
                              </el-descriptions-item>
                            </el-descriptions>
                          </div>
                        </li>

                      </ul>

                    </el-col>
                  </el-row>
                </el-tab-pane>
                <!-- <el-tab-pane label="State" name="state">State</el-tab-pane> -->
              </el-tabs>
            </div>
          </el-col>
        </el-row>

      </el-main>
      <el-aside class="responsive-aside"></el-aside>
    </el-container>

  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { ElMessage } from 'element-plus';
import { getTransactionDetail, getTransactionLogs } from '@/api/transaction';
import { ethers,formatUnits } from "ethers";
import {config} from '@/config/config'
import moment from 'moment'
import { getBlockPage } from '@/api/block';
 
const activeNames = ref([])
const transDetails = ref({})
const transLogs = ref([])
const total = ref(0)
const istoCopiedsd = ref(false)
const value = ref('')
const copiedText = ref('');
const greenwichTime = ref('')
const lastestBlock = ref();
const activeName = ref('overView')
const page = ref(1)
const pageSize = ref(100)
const options = [
  {
    value: 'Default View',
    label: 'Default View',
  },
  {
    value: 'UTF-8',
    label: 'UTF-8',
  },
  {
    value: 'Original',
    label: 'Original',
  },
]
const { hash } = defineProps({
  hash: {
    type: [String],
    required: true,
  }
});

const handleClick = (tab) => {
  if (tab.props.name === "overview") {
    // fetchTransactionDetails();
  }else if(tab.props.name === "logs"){
    // fetchTransactionLogs();
  }
}
const timestamps = () => {
  const currentTime = Math.floor(Date.now() / 1000);
  const timestamp = transDetails.value.timestamp;
  greenwichTime.value = moment.utc(timestamp * 1000).format('MMM-DD-YYYY HH:mm:ss A') + ' ' + '+UTC'
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
  transDetails.value.formattedTime = formattedTime;
}
const fetchTransactionDetails = async () => {
  try {
    if (hash !== null) {
      const response = await getTransactionDetail(hash);
      console.log(response);
      transDetails.value = response.data;
      const results = formatUnits(transDetails.value.value.toString(), 18)
      transDetails.value.value = results;
      const gaspricetotal = computed(() => {
        const gasused = parseFloat(transDetails.value.gasUsed);
        const gasprice = transDetails.value.effectiveGasPrice || 0;
        const result = gasused * parseFloat(gasprice)
        return ethers.formatEther(result);
      })
      transDetails.value.TransactionFee = gaspricetotal.value;
      timestamps()
      if (transDetails.value.method == null) {
        transDetails.value.transactionActions = transDetails.value.methodHash
      } else {
        transDetails.value.transactionActions = transDetails.value.method
      }
    }
  } catch (error) {
    console.error('Error fetching block details:', error);
  }
}
const fetchTransactionLogs = async () => {
  try {
    if (hash !== null) {
      const response = await getTransactionLogs(hash,page.value,pageSize.value);
      transLogs.value = response.data.list;
      total.value = response.data.total;
    }
  } catch (error) {
    console.error('Error fetching block details:', error);
  }
}
const decadecimal = (value,index)=>{
  const decimal = parseInt(value,16)
  transLogs.value[index].value = decimal
}
const hexadecimal =(value,index)=>{
  const hex = value.toString(16);
  transLogs.value[index].value = hex
}
const handleChange = (val) => {
  console.log(val)
}
function copyToClipboard(text) {
  transDetails.value.istoCopied = true;
  setTimeout(() => { transDetails.value.istoCopied = false; }, 2000);
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
function copyToClipboards(text) {
  transDetails.value.istoCopieds = true;
  setTimeout(() => { transDetails.value.istoCopieds = false; }, 2000);
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
function copyToClipboardss(text) {
 istoCopiedsd.value = true;
  setTimeout(() => { istoCopiedsd.value = false; }, 2000);
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
function copyToClipboardd(text) {
  transDetails.value.istoCopiedd = true;
  setTimeout(() => { transDetails.value.istoCopiedd = false; }, 2000);
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
  fetchTransactionDetails();
  fetchTransactionLogs();
  getLastestHeight();
})
let ratioValue = computed(()=>{
  let res = (transDetails.value.gasUsed / transDetails.value.gasLimit) * 100
  return res.toFixed(2)
})

async function getLastestHeight () {
  const provider = new ethers.JsonRpcProvider(config.rpc_adress);
  const blockNumber =  await provider.getBlockNumber()
  lastestBlock.value = blockNumber
}
let blockHeightDiff = computed(()=>{
  return lastestBlock.value - transDetails.value.blockNumber
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

body {
  font-size: 16px;
}



.log_li {
  display: flex;
  align-items: center;
  padding: 10px 10px;
}

.box {
  background-color: #f9fafc;
}

.grid-content_h1 {
  padding: 19px 10px;
  margin-left: 10px;
}

.grid-content_h1 span {
  font-size: 14px;
  color: #6c757d;
}

.grid-content span {
  font-size: 14px;
  color: #6c757d;
}

.grid-content_h3 {
  margin: 0 2rem;
  padding: 19px 0;
  border-bottom: 1px solid #dcdfe6;
}

.grid-content_h2 {
  margin: 5px 1rem;
  padding: 19px 20px;
  background-color: #fff;
  border: 1px solid #dcdfe6;
  border-radius: 10px;
}

.grid-content_span {
  margin-left: 6rem;
}

/* .grid-content_row {
  background-color: #f9fafc;
} */
.log_address{
  display: flex;
}
:deep(.my-label) {
  width: 130px;
  display: inline-block;
}

.truncate {
  word-break: break-all;
}

.skyblue-text {
  color: #0693cc;
  margin-right: 5px;
}

.TransactionAction {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 768px) {
    width: 100%;
  }
}

.ellipsis-text {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  word-break: break-word;
}

.darkb_button {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.block_height {
  display: inline-block;
  /* margin-left: 5rem; */
}

.block_heights {
  display: block;
  margin-top: 8px;
  margin-left: 9.1rem;
}
.block_heightz {
  display: inline-block;
  width: 85%;
}
.input_div{
  display: flex;
  width: 100%;
}
.input_button{
  display: flex;
  margin-left: 10px;
}
@media (max-width: 768px) {
  .block_height {
    display: block;
    margin-left: 0;
  }

  .el-main {
    --el-main-padding: 0px;
  }

  .grid-content_h3 {
    margin: 0 1rem;
  }

  .grid_content {
    margin-left: 0;
  }
}
@media (max-width: 768px) {
  body {
    font-size: 14px;
  }

  .grid-content_row {
    flex-direction: column;
  }
  .block_heights{
    margin-left: 0px;
  }
  .input_div{
    display: flex;
    flex-direction: column;
  }
  .grid-content_h1{
    /* padding: 0; */
    margin: 0;
  }
}
</style>