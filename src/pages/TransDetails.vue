<template>
  <div class="box">
    <el-container class="container-xxl">
      <el-main>
        <el-row>
          <el-col :span="24">
            <div class=" grid-content_h3 darkb_button">
              <h3 style="font-size: 18.75px; color: #212529; font-weight: 500;">Transaction Details</h3>
              <!-- <div>
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
              </div> -->
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class=" grid-content_h1">
              <el-tabs v-model="activeName" class="demo-tabs">
                <el-tab-pane label="OverView" name="overView">
                  <el-row class="grid-content_row">
                    <el-col :span="24" :xs="24">
                      <el-descriptions class="grid-content_h2 grid-content_h1" size="default" v-model="transDetails"
                        :column="1" align="center">
                        <el-descriptions-item label="Transaction Hash:" label-align="center" align="left"
                          label-class-name="my-label" class-name="my-content ellipsis-text" label-width="30%">
                          <div class="block_height"> <span v-if="transDetails && typeof transDetails.hash === 'string'"
                              style="font-size: 14.4992px; color: #212529;">{{
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
                              style="border-radius: 6px;" plain><el-icon>
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
                                  <span style="font-size: 14.4992px; color: #0784C3;"> {{ transDetails.blockNumber
                                    }}</span>
                                </div>
                              </router-link>
                              <el-tooltip content="Number of blocks validated since" placement="top">
                                <el-button
                                  style="padding: 5px; border-radius: 6px; font-size: 10.8744px; color: #000;">{{
                                  blockHeightDiff }} Block Confirmations</el-button>
                              </el-tooltip>
                            </div>
                          </div>
                        </el-descriptions-item>
                        <el-descriptions-item label="Timestamp:" label-align="center" align="left"
                          label-class-name="my-label">
                          <div class="block_height" style="font-size: 14.4992px; color: #212529;">
                            <el-icon style="vertical-align: middle; margin-bottom: 2px;">
                              <Timer />
                            </el-icon>
                            {{ transDetails.formattedTime }} ({{ greenwichTime }})
                          </div>
                        </el-descriptions-item>
                        <el-descriptions-item label="Transaction Action:" label-align="center" align="left"
                          label-class-name="my-label">
                          <div class="block_height" style="font-size: 14.4992px; color: #212529;">{{
                            transDetails.transactionActions }}</div>
                        </el-descriptions-item>
                        <el-descriptions-item label="From:" label-align="center" align="left"
                          label-class-name="my-label">
                          <div class="block_height">
                            <div class="TransactionAction">
                              <router-link class="skyblue-text ellipsis-text" :to="{
                                name: 'address',
                                params: { address: transDetails.from },
                              }" style="font-size: 14.4992px; color: #0784C3;">{{ transDetails.from }}
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
                                <div class=" mb-2 truncate" style="font-size: 14.4992px; color: #0784C3;">{{
                                  transDetails.to }}</div>
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
              </div> -->
                            <!-- <div class="TransactionAction">
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
                          <div class="block_height">
                            <el-icon
                              style="font-size: 14.4992px; color: #212529; vertical-align: middle; margin-bottom: 3px">
                              <Timer />
                            </el-icon>
                            <span style="font-size: 14.4992px; color: #212529;"> {{ transDetails.value }}
                              <!-- ($43.24) -->
                            </span>
                          </div>

                        </el-descriptions-item>
                        <el-descriptions-item label="Transaction Fee:" label-align="center" align="left"
                          label-class-name="my-label">
                          <div class="block_height"> <span style="font-size: 14.4992px; color:#212529;">{{
                              transDetails.TransactionFee }} MNT
                              <!-- (${{ transDetails.TransactionFee }}) -->
                            </span>
                          </div>

                        </el-descriptions-item>
                        <el-descriptions-item label="Gas Price:" label-align="center" align="left"
                          label-class-name="my-label">
                          <div class="block_height"><span style="font-size: 14.4992px; color:#212529;"> {{
                              transDetails.gasPrice }}
                              ({{ transDetails.gasPrice }})<span style="font-size: 12px; color: #212529;">MNT</span>
                            </span>
                          </div>

                        </el-descriptions-item>
                      </el-descriptions>
                    </el-col>
                  </el-row>
                  <el-row class="grid-content_h2">
                    <el-col :span="24" :xs="24">
                      <el-collapse>
                        <el-collapse-item title="More Details:" name="1">
                          <el-descriptions class="grid-content" :column="1" align="left" v-model="transDetails">
                            <el-descriptions-item label-class-name="my-label" label="Gas Limit & Usage by Txn:"
                              label-align="center" align="left" width="500px" class-name="my-content">
                              <div class="block_height"><span style="font-size: 14.4992px; color: #212529;">{{
                                  transDetails.gasUsed }} | {{ transDetails.gasLimit }}
                                  ({{ ratioValue }}%)</span></div>
                            </el-descriptions-item>
                            <el-descriptions-item label-class-name="my-label" label="Burnt Fees:" label-align="center"
                              align="left">
                              <div class="block_height"><span
                                  style="font-size: 14.4992px; color: #212529;">0.005224500901272524 MNT
                                  ($3.15)</span></div>
                            </el-descriptions-item>
                            <el-descriptions-item label-class-name="my-label" label="Other Attributes:"
                              label-align="center" align="left">
                              <div class="block_height">
                                <el-button
                                  style="width: 98.3px; height: 24.88px; font-size: 10.8744px; color: #6C757D; border-radius: 6px;">Nonce:&nbsp;<span
                                    style="font-size: 10.8744px; color: #000;">1607650</span></el-button>
                                <el-button
                                  style="width: 123.9px; height: 24.88px; font-size: 10.8744px; color: #6C757D; border-radius: 6px;">Position
                                  In Block:&nbsp;<span style="font-size: 10.8744px; color: #000;">208</span></el-button>
                              </div>
                            </el-descriptions-item>
                            <el-descriptions-item label-class-name="my-label" label="Input Data:" label-align="center"
                              align="left">
                              <div class="block_height" v-show="decodeShow == false">
                                <el-input v-show="currentValue == 'Original'"
                                  style="width: 85vw; font-size: 14.4492px; color: red;" :rows="5" type="textarea"
                                  :disabled="true" :placeholder="transDetails.data">
                                </el-input>
                                <el-input v-show="currentValue == 'Default View' && isZeroAddress == false"
                                  style="width: 85vw; font-size: 14.4992px; color: red;" :rows="5" type="textarea"
                                  :disabled="true"
                                  :placeholder="decOrHexFlag == 'hex' ? `${functionName}\n\n${methodId}\n${methodParams}` : `${functionName}\n\n${methodId}\n${methodParamsDec}`">
                                </el-input>
                                <el-input v-show="currentValue == 'Default View' && isZeroAddress == true"
                                  style="width: 85vw; font-size: 14.4992px; color: red;" :rows="5" type="textarea"
                                  :disabled="true" :placeholder="transDetails.data">
                                </el-input>
                                <el-select v-model="value" placeholder="View Input As"
                                  style="width: 110px;margin-right:10px;" @change="valueChange(value)">
                                  <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value" />
                                </el-select>
                                <el-button v-show="currentValue == 'Default View' && isZeroAddress == false"
                                  type="primary" @click="baseConversion(10)">Dec</el-button>
                                <el-button v-show="currentValue == 'Default View' && isZeroAddress == false"
                                  type="success" @click="baseConversion(16)">Hex</el-button>
                                <el-button icon="HelpFilled" @click="decodeShow = true" v-if="isZeroAddress == false">Decode
                                  Input Data</el-button>
                              </div>
                              <div v-show="decodeShow == true">
                                <el-table :data="tableDatass" style="width: 100%;" empty-text="No Data">
                                  <el-table-column prop="name" label="Name" width="180" />
                                  <el-table-column prop="type" label="Type" width="180" />
                                  <el-table-column prop="data" label="Data" />
                                </el-table>
                                <el-button icon="RefreshLeft" @click="decodeShow = false">Switch Back</el-button>
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
                          <div class="block_height">
                            <span style="font-size: 14.4992px; color: #212529; ">To access the
                              <span style="font-size: 14.4992px; color: #000;">Private Note</span>
                              feature, you must be
                              <span style="font-size: 14.4992px; color: #0784C3;">Logged In</span>
                            </span>
                          </div>
                        </el-descriptions-item>

                      </el-descriptions>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="24" :xs="24" class="grid-content_h1 grid_content">
                      <span style="font-size: 12.5625px; color: #6C757D">
                        <el-icon style="vertical-align: middle;">
                          <Loading />
                        </el-icon>
                        A transaction is a cryptographically signed instruction that changes the blockchain state. Block
                        explorers
                        track the details of all transactions in the network. Learn more about transactions in our
                        <span style="font-size: 12.5625px; color: #0784C3">Knowledge Base.</span>
                      </span>
                    </el-col>
                  </el-row>
                </el-tab-pane>
                <el-tab-pane label="Internal Txns" name="internalTxns">
                  <el-row class="box-table">
                    <el-table v-loading="loading" :data="tableData" style="width: 100%; border-radius: 15px;"
                      size="default" :row-style="{ height: '70px' }">
                      <el-table-column prop="transactionhash" label="TrsHash" width="110">
                        <template v-slot="scope">
                          <el-tooltip :content="scope.row.transactionhash">
                            <span style="font-size: 14.4992px; color: #0784C3;">{{
                              scope.row.transactionhash.substring(0,8) + '...' }}</span>
                          </el-tooltip>
                        </template>
                      </el-table-column>
                      <el-table-column prop="utc" label="Age" width="128">
                        <template v-slot="scope">
                          <span style="font-size: 14.4992px; color: #212529;">{{ scope.row.utc }}</span>
                        </template>
                      </el-table-column>
                      <el-table-column prop="from" label="From" width="250" align="center">
                        <template v-slot="scope">
                          <div class="router_box">
                            <el-tooltip :content="scope.row.from" placement="top">
                              <router-link :to="{name: 'address', params: { address: scope.row.from }}"
                                style="font-size: 14.4992px; color: #0784C3">
                                {{ scope.row.from.substring(0,10) + '...'}}
                              </router-link>
                            </el-tooltip>
                            <el-tooltip v-if="!scope.row.isCopied" content="Copy Address" placement="top">
                              <el-button text icon="CopyDocument"
                                @click="copyFormClipboardInternal(scope.row.from, scope.row)">
                              </el-button>
                            </el-tooltip>
                            <el-tooltip v-else content="Copied!" placement="top">
                              <el-button text icon="Check"
                                @click="copyFormClipboardInternal(scope.row.from, scope.row)">
                              </el-button>
                            </el-tooltip>
                            <el-button style="margin-left: 1rem" type="success" icon="right" circle plain />
                          </div>
                        </template>
                      </el-table-column>
                      <el-table-column prop="to" label="To" width="200" align="center">
                        <template v-slot="scope">
                          <div class="router_box">
                            <el-tooltip content="Contract" placement="top">
                              <el-button
                                style="margin-right: 5px; margin-top: 4px; width: 12.69px; height: 15px; border-radius: 5px;"
                                icon="Document">
                              </el-button>
                            </el-tooltip>
                            <el-tooltip :content="scope.row.to" placement="top">
                              <router-link class="skyblue-text ellipsis-text"
                                :to="{ name: 'address', params: { address: scope.row.to }}"
                                style="font-size: 14.4992px; color: #0784C3">
                                {{ scope.row.to.substring(0, 10) + '...'}}
                              </router-link>
                            </el-tooltip>
                            <el-tooltip v-if="!scope.row.istoCopied" content="Copy Address" placement="top">
                              <el-button text icon="CopyDocument"
                                @click="copyToClipboardInternal(scope.row.to, scope.row)">
                              </el-button>
                            </el-tooltip>
                            <el-tooltip v-else content="Copied!" placement="top">
                              <el-button text icon="Check" @click="copyToClipboardInternal(scope.row.to, scope.row)">
                              </el-button>
                            </el-tooltip>
                          </div>
                        </template>
                      </el-table-column>
                      <el-table-column prop="value" label="Value" align="center">
                        <template v-slot="scope">
                          <el-tooltip :content="`${scope.row.value}`" placement="top">
                            <span style="font-size: 14.4992px; color: #212529;">{{ scope.row.value }}<span
                                style="font-size: 12px;">(MNT)</span></span>
                          </el-tooltip>
                        </template>
                      </el-table-column>
                    </el-table>
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
                                    <el-tooltip effect="dark" :content="item.contractAddress" placement="top">
                                      <router-link class="skyblue-text ellipsis-text" :to="{
                                        name: 'address',
                                        params: { address: item.contractAddress },
                                      }">{{ item.contractAddress }}
                                      </router-link>
                                    </el-tooltip>
                                    <el-tooltip v-if="!istoCopiedsd" content="Copy contractaddress to clipboard"
                                      placement="top"><el-button text icon="CopyDocument"
                                        @click="copyToClipboardss(item.contractAddress)">
                                      </el-button>
                                    </el-tooltip>
                                    <el-tooltip v-else content="Copied!" placement="top">
                                      <el-button text icon="Check" @click="copyToClipboardss(item.contractAddress)">
                                      </el-button>
                                    </el-tooltip>
                                  </div>
                                </div>
                              </el-descriptions-item>
                              <el-descriptions-item label="Name:" label-align="center" align="left"
                                label-class-name="my-label" class-name="my-content" label-width="30%">
                                <div class="block_height">
                                  <span>{{ item.method }}</span>

                                </div>
                              </el-descriptions-item>
                              <el-descriptions-item label="Topics:" label-align="center" align="left"
                                label-class-name="my-label" class-name="my-content" label-width="30%">
                                <div class="block_height topics-one" style="margin-bottom: 6px;">
                                  <div style="display:flex; align-items: center" v-if="item.methodHash">
                                    <el-tag type="success">0:</el-tag><span class="skyblue-text ellipsis-text">{{
                                      item.methodHash }}
                                    </span>
                                  </div>
                                </div>
                                <div class="block_height" style="margin-left: 19%;">
                                  <div style="display:flex; align-items: center" v-if="item.from">
                                    <el-tag type="warning">1:</el-tag><router-link class="skyblue-text ellipsis-text"
                                      :to="{
                                          name: 'address',
                                          params: { address: item.from },
                                        }">{{ item.from }}
                                    </router-link>
                                  </div>
                                </div>
                                <div class="block_heights" style="margin-left: 19%;">
                                  <div style="display:flex; align-items: center" v-if="item.to">
                                    <el-tag type="info">2:</el-tag><router-link class="skyblue-text ellipsis-text" :to="{
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
                                      <el-button type="primary" @click="decadecimal(index)">Dec</el-button>
                                      <el-button type="success" @click="hexadecimal(index)">Hex</el-button>
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
    </el-container>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, reactive, watch } from 'vue'
import { ElMessage } from 'element-plus';
import { getTransactionDetail, getTransactionLogs, getTransactionInternal, getInternalTransactionTest, getTransactionFunctionName } from '@/api/transaction';
import { ethers,formatUnits } from "ethers";
import {config} from '@/config/config'
import moment from 'moment'
import { getBlockPage } from '@/api/block';
import { getContractDetail } from '@/api/verifyContract'
const tableData = ref([])
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
let loading = ref(false)
let decodeShow = ref(false)

const options = [
  {
    value: 'Default View',
    label: 'Default View',
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
let inputData = ref('')
let toAddress = ref('')
let isZeroAddress = ref(false)
const fetchTransactionDetails = async () => {
  try {
    if (hash !== null) {
      const response = await getTransactionDetail(hash);
      transDetails.value = response.data;
      toAddress.value = transDetails.value.to
      if (toAddress.value == ethers.ZeroAddress) {
        isZeroAddress.value = true
      }
      inputData.value = transDetails.value.data
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
      transLogs.value = response.data.list || [];
      total.value = response.data.total;
    }
  } catch (error) {
    console.error('Error fetching block details:', error);
  }
}
function detectNumberBase(numberString) {
    numberString = numberString.toString();
    if (numberString.startsWith("0x")) {
        return 16;
    }
    return 10;
}
const decadecimal = (index)=>{
  const base = detectNumberBase(transLogs.value[index].value)
  if (base == 16) {
    transLogs.value[index].value = parseInt(transLogs.value[index].value.substring(2), 16)
  } else {
    return
  }
}
const hexadecimal =(index)=>{
  const base = detectNumberBase(transLogs.value[index].value)
  if (base == 10) {
    transLogs.value[index].value = '0x' + transLogs.value[index].value.toString(16)
  } else {
    return
  }
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
function copyFormClipboardInternal(text, row) {
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
function copyToClipboardInternal(text, row) {
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
const getInterTransactions = async () => {
  try {
    loading.value = true
    if(location.hostname == config.domainUser_url) {
      let {data} = await getTransactionInternal(hash);
      tableData.value = data;
    } else {
      let {data} = await getInternalTransactionTest(hash)
      tableData.value = data;
    }

    tableData.value.forEach(item => {
      item.value = ethers.formatUnits(parseInt(item.value, 16).toString(), 18);
      const currentTime = Math.floor(Date.now() / 1000);
      const timestamp = item.utc;
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
      item.utc = formattedTime;
    })
    loading.value = false
  } catch (error) {
    console.error(error);
  }
}
let currentValue = ref('Default View')
function valueChange (v) {
  currentValue.value = v
}

let methodId = computed(() => {
  let MethodId = inputData.value.substring(0, 10)
  return 'MethodId: ' + MethodId
})
let methodParams = computed(() => {
  let startIndex = 0;
  let indexSize = 64;
  let MethodParams = inputData.value.substring(10)
  let resultArry = []
  while (startIndex < MethodParams.length) {
    let subStr = MethodParams.substring(startIndex, startIndex + indexSize)
    startIndex += indexSize
    resultArry.push(subStr)
  }
  for (let i=0; i<resultArry.length; i++) {
    resultArry[i] = `[${i}]: ${resultArry[i]}`
  }
  let resStr = resultArry.join('\n')
  return resStr
})
let decOrHexFlag = ref('hex')
function baseConversion (v) {
  if (v == 10) {
    decOrHexFlag.value = 'dec'
  } else {
    decOrHexFlag.value = 'hex'
  }
}

let methodParamsDec = computed(() => {
  let startIndex = 0;
  let indexSize = 64;
  let MethodParams = inputData.value.substring(10)
  let resultArry = []
  while (startIndex < MethodParams.length) {
    let subStr = MethodParams.substring(startIndex, startIndex + indexSize)
    startIndex += indexSize
    resultArry.push(subStr)
  }
  for (let i = 0; i < resultArry.length; i++) {
    resultArry[i] = `[${i}]: ${parseInt(resultArry[i], 16)}`
  }
  let resStr = resultArry.join('\n')
  return resStr
})
let functionName = ref('')
async function getFunctionName() {
  try {
    let MethodId = inputData.value.substring(0, 10)
    let { data } = await getTransactionFunctionName(MethodId)
    functionName.value = data ? data.method : ''
  } catch (error) {
    console.error('Error in obtaining method name:', error);
  }
}
let tableDatass = ref([
])

async function decodeDataFn () {
  let toAddressAbi = []
  let res = await getContractDetail('0x3056ed8057dA4eFB828321E308fa400EB7ACAF7D')
  toAddressAbi = res.data ? JSON.parse(res.data.abi) : ''
  let functionNameN = ''
  if (functionName.value.indexOf('(') != -1) {
    functionNameN = functionName.value.substring(0, functionName.value.indexOf('('))
  }
  let fnItem = toAddressAbi.filter(
    item => item.name == functionNameN
  )
  let MethodParams = inputData.value.substring(10)
  const coder = ethers.AbiCoder.defaultAbiCoder();
  const decodeRes = coder.decode([fnItem[0].inputs[0].type, fnItem[0].inputs[1].type], `0x${MethodParams}`);
  console.log(decodeRes)
  fnItem[0].inputs.forEach((item) => {
    let obj = {}
    obj.name = item.name
    obj.type = item.type
    if(item.type == 'uint256') {
      obj.data = decodeRes[1]
    } else {
      obj.data = decodeRes[0]
    }
    tableDatass.value.push(obj)
  })
}
onMounted(async () => {
  await fetchTransactionDetails();
  await fetchTransactionLogs();
  await getLastestHeight();
  await getInterTransactions();
  await getFunctionName()
  decodeDataFn()
})
let ratioValue = computed(()=>{
  let res = transDetails.value.gasLimit == 0 ? 0 : (transDetails.value.gasUsed / transDetails.value.gasLimit) * 100
  return res.toFixed(2)
})

async function getLastestHeight () {
  const provider = new ethers.JsonRpcProvider(location.hostname == config.domainUser_url ? config.mainRpc_address : config.testRpc_adress);
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
  padding: 19px 0;
}

.grid-content_h1 span {
  font-size: 14px;
  color: #6c757d;
}

.grid-content_h3 {
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
  .topics-one {
    margin-left: 19%;
  }
}
:deep(.el-descriptions__label:not(.is-bordered-label)) {
    font-size: 14.4992px;
    color: #6C757D;
    width: 180px;
}
:deep(.el-collapse-item__header) {
  font-size: 14.4992px;
  color: #6C757D;
}
.demo-tabs {
  border-radius: 15px;
  border: 1px solid #dcdfe6;
}
.box-table {
  background-color: #fff;
  border-radius: 15px;
}
:deep(.el-table--default .cell) {
  font-size: 12.5625px;
  color: #212529;
  font-weight: 500;
}
.router_box {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

</style>