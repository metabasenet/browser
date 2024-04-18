<template>
  <div class="box">
    <el-container class="container-xxl">
      <el-aside class="responsive-aside"></el-aside>
      <el-main>
        <el-row>
          <el-col :span="24">
            <div class="grid-content darkb_button grid-content_h3">
              <h3>
                Token {{ individualQueryDetails.ercname }} ({{
                  individualQueryDetails.ercsymbol
                }}) <el-button type="success" icon="Check" circle />
              </h3>
              <div class="darkb_button_div">
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
              Sponsored: Shido - Shido Network - One of the fastest Layer 1's
              launching! Buy SHIDO
            </p>
            <div class="ContentPlaceHolder1_lblWarning">
              <div>
                <el-tag type="info">ERC-20</el-tag>
                <el-tag type="info">Cross-Chain</el-tag>
                <el-tag type="info"># Binance</el-tag>
                <el-tag type="info"># Binance-Peg</el-tag>
              </div>
              <div class="ethereum">
                <el-dropdown style="margin-right: 5px;">
                  <el-button type="primary">
                    <el-icon class="el-icon--left">
                      <Basketball />
                    </el-icon>
                    ethereum.org<el-icon class="el-icon--right"><arrow-down /></el-icon>
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
                <el-dropdown class="icon_menu">
                  <el-button type="primary">
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
          <el-col :span="5" align :xs="24" :sm="12" :md="12" :lg="12">
            <div class="grid-content ep-bg-purple-dark blocks_header">
              <ul class="over_ul">
                <li>
                  <h3>Overview</h3>
                </li>
                <li class="over_li">
                  <p>MAX TOTAL SUPPLY</p>
                  <el-tooltip class="box-item" effect="dark" :content="individualQueryDetails &&
                    individualQueryDetails.totalsupply
                    ? individualQueryDetails.totalsupply.toString()
                    : ''
                    " placement="top-start">
                    <span>{{ individualQueryDetails.totalsupply }}</span>
                  </el-tooltip>
                  <span style="font-weight: bold"> {{ individualQueryDetails.ercsymbol }} </span>
                  <el-tooltip class="box-item" effect="dark" content="CSupply: 551,557.859909" placement="top-start">
                    <span style="color: #6c757d">(CSupply: 551,557.859909)</span>
                  </el-tooltip>
                </li>
                <li class="over_li">
                  <p>HOLDERS</p>
                  <span>{{ holdTotal }}</span>
                </li>
                <li class="over_li">
                  <p>TOTAL TRANSFERS</p>
                  <div class="over_div">
                    <span>{{transfers}}</span>
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
          <!-- <el-col :span="5" align :xs="24" :sm="12" :md="8" :lg="8">
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
                  <span style="font-weight: bold">ETH </span>
                  <el-tooltip class="box-item" effect="dark" content="Top Left prompts info" placement="top-start">
                    <span style="color: #6c757d">(CSupply: 551,557.859909)</span>
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
          </el-col> -->
          <el-col :span="5" align :xs="24" :sm="12" :md="12" :lg="12">
            <div class="grid-content ep-bg-purple-dark blocks_header">
              <ul class="over_ul">
                <li>
                  <h3>Other Info</h3>
                </li>
                <li class="over_li">
                  <p>TOKEN CONTRACT ({{ individualQueryDetails.decimals }})</p>
                  <div class="over_div">
                    <el-tooltip class="box-item" effect="dark" content="Contract" placement="top-start">
                      <el-icon>
                        <Document />
                      </el-icon>
                    </el-tooltip>
                    <el-tooltip class="box-item" effect="dark" :content="address" placement="top-start">
                      <router-link class="ellipsis-text" :to="{ name: 'address' }">{{ address }}</router-link>
                    </el-tooltip>
                    <el-tooltip content="Copy Address" placement="top">
                      <el-button text icon="CopyDocument" @click="copyToClipboard(address)">
                      </el-button>
                    </el-tooltip>
                  </div>
                </li>
                <li class="over_li">
                  <p>HOLDERS</p>
                  <span>{{holdTotal}}</span>
                </li>
                <li class="over_li">
                  <p>TOTAL TRANSFERS</p>
                  <span>{{transfers}}</span>
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
        <!-- <el-row class="blocks_heade">
      <el-col :span="24">
        <el-button type="primary">Transfers</el-button>
        <el-button>Holders</el-button>
        <el-button>info</el-button>
        <el-button>DEX Trades</el-button>
        <el-button>Contract</el-button>
        <el-button>Analytics</el-button>
      </el-col>
    </el-row> -->
        <el-row class="blocks_heade">
          <el-col :span="24">
            <el-tabs v-model="activeName" type="card" class="demo-tabs" @tab-click="handleClick">
              <el-tab-pane label="Transfers" name="tab1">
                <el-row class="box-table">
                  <div class="demo-pagination-block box-table_header">
                    <div class="demonstration"> {{total}} transactions in total</div>
                    <el-pagination v-model:current-page="currentPage4" v-model:page-size="pageSize4"
                      :page-sizes="[10, 20, 30, 40]" small background layout="sizes,prev, pager, next" :total="total"
                      class="mt-4" @size-change="handleSizeChange" @current-change="getContactList" />
                  </div>
                  <el-table :data="tableData" style="width: 100%" size="default">
                    <el-table-column prop="transactionHash" label="Txn Hash" width="120">
                      <template v-slot="scope">
                        <router-link class="skyblue-text ellipsis-text" :to="{
                          name: 'tx',
                          params: { hash: scope.row.transactionHash },
                        }">{{ scope.row.transactionHash }}</router-link>
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
                        <router-link class="skyblue-text" :to="{
                          name: 'block',
                          params: { blockNumber: scope.row.blockNumber },
                        }">{{ scope.row.blockNumber }}</router-link>
                      </template>
                    </el-table-column>
                    <el-table-column prop="formattedTime" label="Age">
                    </el-table-column>
                    <el-table-column prop="from" label="From" width="250" align="center">
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
                    <el-table-column prop="to" label="To" width="250" align="center">
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
                    <el-table-column prop="value" label="Value" >
                      <template v-slot="scope">
                        <el-tooltip :content="`${scope.row.value}`" placement="top">
                          <span class="ellipsis-text">{{ scope.row.value }}</span>
                        </el-tooltip>
                      </template>
                    </el-table-column>
                    <el-table-column prop="TransactionFee" label="Gas Price" >
                      <template v-slot="scope">
                        <el-tooltip :content="`${scope.row.TransactionFee}`" placement="top">
                          <span class="ellipsis-text">{{ scope.row.TransactionFee }}</span>
                        </el-tooltip>
                      </template>
                    </el-table-column>
                  </el-table>
                  <div class="demo-pagination-block box-table_header">
                    <el-pagination v-model:current-page="currentPage4" v-model:page-size="pageSize4"
                      :page-sizes="[10, 20, 30, 40]" small background layout="sizes,prev, pager, next" :total="total"
                      class="mt-4" @size-change="handleSizeChange" @current-change="getContactList" />
                  </div>
                </el-row>
              </el-tab-pane>
              <el-tab-pane label="Holders" name="tab2">
                <el-row class="box-table">
                  <el-button type="primary" icon="Histogram" class="holders_chart">Token Holders Chart</el-button>
                  <div class="demo-pagination-block box-table_header">
                    <div class="demonstration">Top {{ holdTotal }} holders (From a total of {{holdTotal}} holders)</div>
                    <el-pagination v-model:current-page="currentPage4" v-model:page-size="pageSize4"
                      :page-sizes="[10, 20, 30, 40]" layout=" sizes, prev, pager, next," :pager-count="5" background
                      :total="holdTotal" small @size-change="handleSizeChange2" @current-change="getBalanceList" />
                  </div>
                  <el-table :data="holdTableData" style="width: 100%" size="default">
                    <el-table-column type="index" width="60" align="center" label="Rank" />
                    <el-table-column prop="address" align="center" label="Address" width="250">
                      <template v-slot="scope">
                        <div class="router_box">
                          <el-tooltip content="Contract" placement="top">
                            <el-button  icon="Document">
                            </el-button>
                          </el-tooltip>
                          <el-tooltip :content="scope.row.address" placement="top">
                            <router-link class="skyblue-text ellipsis-text"
                              :to="{ name: 'address', params: { address: scope.row.address } }">{{ scope.row.address
                              }}</router-link>
                          </el-tooltip>
                          <el-tooltip content="Copy Address" placement="top">
                            <el-button text icon="CopyDocument" @click="copyToClipboard(scope.row.address)">
                            </el-button>
                          </el-tooltip>
                        </div>
                      </template>
                    </el-table-column>
                    <el-table-column prop="Quantity" label="Quantity" align="center">
                    </el-table-column>
                    <el-table-column prop="percentage" label="Percentage" align="center" width="200">
                      <template v-slot="scope">
                        <el-progress :percentage="scope.row.percentage" />
                      </template>
                    </el-table-column>
                    <el-table-column prop="balance" label="Value" align="center">
                    </el-table-column>
                    <el-table-column prop="Analytics" label="Analytics" align="center">
                      <router-link to="/home">
                        <svg-icon name="broken" width="1rem" height="1rem">
                        </svg-icon>
                      </router-link>
                    </el-table-column>
                  </el-table>
                  <div class="demo-pagination-block box-table_header">
                    <el-pagination v-model:current-page="currentPage4" v-model:page-size="pageSize4"
                      :page-sizes="[10, 20, 30, 40]" layout=" sizes, prev, pager, next," :pager-count="5" background
                      :total="holdTotal" small @size-change="handleSizeChange2" @current-change="getBalanceList" />
                  </div>
                </el-row>
              </el-tab-pane>
              <el-tab-pane label="info" name="tab3">
                <!-- <el-row class="box-table">
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
                          <router-link class="skyblue-text ellipsis-text" :to="{ path: '/address' }">{{
                            scope.row.transactionHash
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
                        <router-link class="skyblue-text" :to="{ path: '/block' }">{{ scope.row.blockNumber
                          }}</router-link>
                      </template>
                    </el-table-column>
                    <el-table-column prop="formattedTime" label="Age" align="center">
                    </el-table-column>
                    <el-table-column prop="from" label="From" align="center" width="280">
                      <template v-slot="scope">
                        <div class="router_box">
                          <el-tooltip :content="scope.row.from" placement="top">
                            <router-link class="skyblue-text ellipsis-text"
                              :to="{ name: 'address', params: { address: scope.row.from } }">{{ scope.row.from
                              }}</router-link>
                          </el-tooltip>
                          <el-tooltip content="Copy Address" placement="top">
                            <el-button text icon="CopyDocument" @click="copyToClipboard(scope.row.from)">
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
                            <router-link class="skyblue-text ellipsis-text"
                              :to="{ name: 'address', params: { address: scope.row.to } }">{{ scope.row.to
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
                </el-row> -->
              </el-tab-pane>
              <el-tab-pane label="DEX Trades" name="tab4">DEX Trades</el-tab-pane>
              <el-tab-pane v-if="verifystatused === 0 || !verifystatused" label="Contract" name="tab5">
                <el-row :gutter="10">
                  <el-col :span="24">
                    <div class="grid-content_h2 grid-contents">
                      <div>
                        <p style="margin-bottom: 10px">
                          <el-icon style="top: 2px">
                            <WarningFilled />
                          </el-icon>
                          Are you the contract creator?
                          <router-link class="skyblue-text" :to="{
                            name: 'verifyContract',
                            params: {
                              address: individualQueryDetails.contractaddress,
                            },
                          }">Verify and Publish </router-link>your contract source code today!
                        </p>
                        <el-button type="info">Decompile Bytecode
                          <el-icon>
                            <Share />
                          </el-icon></el-button>
                        <el-button type="info">Switch To Opcodes View</el-button>
                        <el-button type="info">Switch To Opcodes View</el-button>
                      </div>
                    </div>
                    <div class="grid-content_h2">
                      <el-input v-model="textarea2" style="height: 200px" :rows="10" type="textarea" />
                    </div>
                  </el-col>
                </el-row>
              </el-tab-pane>
              <el-tab-pane v-else name="tab5">
                <template #label>
                  <el-badge value="√" class="item" type="success">
                    Contract
                  </el-badge>
                </template>
                <el-tabs  type="card" v-model="activeNames" class="demo-tabs"
                  @tab-click="handleClicks">
                  <el-tab-pane label="Code" name="first">
                    <el-row :gutter="10">
                      <el-col :span="24">
                        <el-descriptions :column="2" class="grid-content_h3">
                          <template #title>
                            <div>
                              <svg-icon name="true" width="1rem" height="1rem"
                                style="margin-right: 5px"></svg-icon><span>Contract Source Code Verified </span><span
                                style="color: #6c757d">(Exact Match)</span>
                            </div>

                          </template>
                          <el-descriptions-item label="Contract Name:" label-class-name="my-label">
                            <div class="block_height">
                              <span>{{ contractSource.contractname }}</span>
                            </div>
                          </el-descriptions-item>
                          <el-descriptions-item label="Optimization Enabled:" label-class-name="my-label">
                            <div class="block_height">
                              <span v-if="contractSource.optimization === 1">YES</span>
                              <span v-else>NO</span>
                            </div>
                          </el-descriptions-item>
                          <el-descriptions-item label="Compiler Version:" label-class-name="my-label">
                            <div class="block_height">
                              <span>{{ contractSource.compilerversion }}</span>
                            </div>
                          </el-descriptions-item>
                          <el-descriptions-item label="Other Settings:" label-class-name="my-label">
                            <div class="block_height">
                              <span>{{ contractSource.other }}</span>
                            </div>
                          </el-descriptions-item>
                        </el-descriptions>
                        <el-row :gutter="10">
                          <el-col :span="24">
                            <div class="grid-content ep-bg-purple-dark grid-content_h2 darkb_button">
                              <h4>
                                <el-icon style="margin-right: 5px">
                                  <Tickets />
                                </el-icon>Contract Source Code<span style="color: #6c757d">(Exact Match)</span>
                              </h4>

                              <div>
                                <el-dropdown trigger="click">
                                  <el-button type="info" plain><span class="el-dropdown-link">
                                      Open In<el-icon class="el-icon--right"><arrow-down /></el-icon>
                                    </span></el-button>
                                  <template #dropdown>
                                    <el-dropdown-menu>
                                      <el-dropdown-item icon="Plus">Action 1</el-dropdown-item>
                                      <el-dropdown-item icon="CirclePlusFilled">
                                        Action 2
                                      </el-dropdown-item>
                                      <el-dropdown-item icon="CirclePlus">Action 3</el-dropdown-item>
                                      <el-dropdown-item icon="Check">Action 4</el-dropdown-item>
                                      <el-dropdown-item icon="CircleCheck">Action 5</el-dropdown-item>
                                    </el-dropdown-menu>
                                  </template>
                                </el-dropdown>
                                <el-dropdown trigger="click" style="margin-left: 5px">
                                  <el-button type="info" plain><span class="el-dropdown-link">
                                      Outline<el-icon class="el-icon--right"><arrow-down /></el-icon>
                                    </span></el-button>
                                  <template #dropdown>
                                    <el-dropdown-menu>
                                      <el-dropdown-item icon="Plus">Action 1</el-dropdown-item>
                                      <el-dropdown-item icon="CirclePlusFilled">
                                        Action 2
                                      </el-dropdown-item>
                                      <el-dropdown-item icon="CirclePlus">Action 3</el-dropdown-item>
                                      <el-dropdown-item icon="Check">Action 4</el-dropdown-item>
                                      <el-dropdown-item icon="CircleCheck">Action 5</el-dropdown-item>
                                    </el-dropdown-menu>
                                  </template>
                                </el-dropdown>
                                <el-dropdown trigger="click" style="margin-left: 5px">
                                  <el-button type="info" plain><span class="el-dropdown-link">
                                      More Options<el-icon class="el-icon--right"><arrow-down /></el-icon>
                                    </span></el-button>
                                  <template #dropdown>
                                    <el-dropdown-menu>
                                      <el-dropdown-item icon="Plus">Action 1</el-dropdown-item>
                                      <el-dropdown-item icon="CirclePlusFilled">
                                        Action 2
                                      </el-dropdown-item>
                                      <el-dropdown-item icon="CirclePlus">Action 3</el-dropdown-item>
                                      <el-dropdown-item icon="Check">Action 4</el-dropdown-item>
                                      <el-dropdown-item icon="CircleCheck">Action 5</el-dropdown-item>
                                    </el-dropdown-menu>
                                  </template>
                                </el-dropdown>
                              </div>
                            </div>
                          </el-col>
                          <el-col :span="24">
                            <div v-for="(item, index) in contractSource.sourceCode" :key="index">
                              <div class="grid-content_h2 grid-contents">
                                <div>
                                  <span>File {{ index + 1 }} of {{
                                    contractSource.sourceCode.length }}:</span> <span>{{ item.fileName }}</span>
                                </div>
                                <div>
                                  <el-button type="info" icon="Edit" />
                                  <el-button type="info" icon="Share" />
                                  <el-button type="info" icon="Delete" />
                                </div>
                              </div>
                              <div class="grid-content_h2">
                                <el-input v-model="item.sourceCode" disabled style="height: 300px" :rows="16"
                                  type="textarea" />
                              </div>
                            </div>
                          </el-col>
                          <el-col :span="24">
                            <div class="grid-content_h2">
                              <h4 style="margin-bottom: 10px">
                                <el-icon style="margin-right: 5px">
                                  <Tickets />
                                </el-icon>Contract Security Audit<span style="color: #6c757d">(Exact Match)</span>
                              </h4>
                              <span style="margin-left: 5px; font-size: 10px">
                                <el-icon>
                                  <Close />
                                </el-icon>No Contract Security Audit Submitted</span>-<el-link>Submit Audit
                                Here</el-link>
                            </div>
                            <div class="grid-content_h2 grid-contents">
                              <div>
                                <span><el-icon>
                                    <Operation />
                                  </el-icon>
                                  Contract ABI</span>
                              </div>
                              <div>
                                <el-button type="info" icon="Edit" />
                                <el-button type="info" icon="Share" />
                                <el-button type="info" icon="Delete" />
                              </div>
                            </div>
                            <div class="grid-content_h2">
                              <el-input v-model="contractSource.abi" disabled style="height: 200px" :rows="10"
                                type="textarea" />
                            </div>
                          </el-col>
                          <el-col :span="24">
                            <div class="grid-content_h2 grid-contents">
                              <div>
                                <span><el-icon>
                                    <Switch />
                                  </el-icon>
                                  Contract Creation Code</span>
                              </div>
                              <div>
                                <el-button class="decompile" type="info">Decompile Bytecode
                                  <el-icon>
                                    <Share />
                                  </el-icon></el-button>
                                <el-button type="info">Switch To Opcodes View</el-button>
                              </div>
                            </div>
                            <div class="grid-content_h2">
                              <el-input v-model="textarea2" style="height: 200px" :rows="10" type="textarea" />
                            </div>
                          </el-col>
                          <el-col :span="24">
                            <div class="grid-content_h2 grid-contents">
                              <div>
                                <span><el-icon>
                                    <Switch />
                                  </el-icon>
                                  Deployed Bytecode</span>
                              </div>
                            </div>
                            <div class="grid-content_h2">
                              <el-input v-model="contractSource.bytecode" style="height: 200px" :rows="10"
                                type="textarea" disabled />
                            </div>
                          </el-col>
                          <el-col :span="24">
                            <div class="grid-content_h2 grid-contents">
                              <div>
                                <span><el-icon>
                                    <Switch />
                                  </el-icon>
                                  Deployed Bytecode Sourcemap</span>
                              </div>
                            </div>
                            <div class="grid-content_h2">
                              <el-input v-model="textarea2" style="height: 200px" :rows="10" type="textarea" />
                            </div>
                          </el-col>
                        </el-row>
                      </el-col>
                    </el-row>
                  </el-tab-pane>
                  <el-tab-pane label="Read Contract">
                    <el-row :gutter="10">
                      <el-col v-if="!results" :xs="24" :sm="24" :md="24" :lg="24"><el-button plain @click="openWeb">
                          <svg-icon name="reddot" width=".8rem" height=".8rem" style="margin-right: 5px"></svg-icon>
                          Connect to Web3
                        </el-button></el-col>
                      <el-col v-else :xs="24" :sm="24" :md="24" :lg="24"><el-button plain @click="openWeb">
                          <svg-icon name="greendot" width=".8rem" height=".8rem" style="margin-right: 5px"></svg-icon>
                          Connect to Web3 [{{ results }}]
                        </el-button></el-col>
                      <el-col :xs="24" :sm="24" :md="24" :lg="24">
                        <div class="contracts_info">
                          <div>
                            <el-icon>
                              <Document />
                            </el-icon>Read Contract Information
                          </div>
                          <div>
                            <el-button text type="" @click="toggleAll">[Expand all]</el-button>
                            <el-button text type="" @click="resetAll">[Reset]</el-button>
                          </div>
                        </div>
                      </el-col>

                      <el-col :xs="24" :sm="24" :md="24" :lg="24">
                        <div class="demo-collapse">
                          <el-collapse @change="handleChange" v-model="actives">
                            <el-collapse-item v-for="(functionItem, index) in viewFunctions" :key="index"
                              :name="index.toString()">
                              <template #title>
                                <div class="collapsed">
                                  <div>{{ index + 1 }}_{{ functionItem.name }}</div>
                                  <div>
                                    <el-tooltip effect="dark" content="Copy Method Name" placement="top">
                                      <el-button text icon="CopyDocument"></el-button>
                                    </el-tooltip>
                                    <el-tooltip effect="dark" content="Copy Permalink" placement="top">
                                      <el-button icon="Link"></el-button>
                                    </el-tooltip>
                                  </div>
                                </div>
                              </template>
                              <div v-if="functionItem.inputs.length !== 0">
                                <el-form :model="formModel" label-position="top">
                                  <el-form-item v-for="(
                                      input, inputIndex
                                    ) in functionItem.inputs" :key="inputIndex" :prop="input.name" :label="input.name">
                                    <el-input size="large" v-model="input.value" placeholder="Enter value"></el-input>
                                  </el-form-item>
                                  <el-form-item>
                                    <el-button type="info" plain @click="handleQuery(functionItem)">Query</el-button>
                                  </el-form-item>
                                  <el-form-item>
                                    <span class="uints">{{ functionItem.outputs[0].internalType }}</span>
                                  </el-form-item>
                                  <el-form-item v-if="responsed">
                                    <div style="
                                      display: flex;
                                      flex-direction: column;
                                      flex-wrap: wrap;
                                    ">
                                      <!-- <p>
                                        [ allowance(address,address) method
                                        Response ]
                                      </p> -->
                                      <p class="uints" style="
                                        display: flex;
                                        align-items: center;
                                        margin: 10px;
                                      ">
                                        <svg-icon name="right"></svg-icon>uint256:
                                        {{ queryResult }}
                                      </p>
                                      <p>{{
                                        queryError }}</p>
                                    </div>
                                  </el-form-item>
                                </el-form>
                              </div>
                              <div v-else>
                                <span class="uints">{{ functionItem.detail }}</span>
                              </div>
                            </el-collapse-item>
                          </el-collapse>
                        </div>
                      </el-col>
                    </el-row>
                    <el-dialog v-model="dialogFormVisible" title="Connect a Wallet" width="500">
                      <el-form :model="form">
                        <el-form-item>
                          <p class="wrap-text">
                            <el-icon style="margin-right: 5px">
                              <Warning />
                            </el-icon>Connecting wallet for read function is optional,
                            useful if you want to call certain functions or
                            simply use your wallet's node.
                          </p>
                        </el-form-item>
                        <el-form-item style="display: flex">
                          <el-button @click="connectWallet" size="large" plain class="fox_box" style="flex-grow: 1">
                            <p>MetaMask</p>
                            <svg-icon name="fox" width="1rem" height="1rem" style="margin-left: 10px">
                            </svg-icon>
                          </el-button>
                        </el-form-item>
                      </el-form>
                      <template #footer>
                        <div class="dialog-footer">
                          <el-button @click="dialogFormVisible = false">Cancel</el-button>
                          <el-button type="primary" @click="dialogFormVisible = false">
                            Confirm
                          </el-button>
                        </div>
                      </template>
                    </el-dialog>
                  </el-tab-pane>
                  <el-tab-pane label="Write Contract" name="third">
                    <el-row :gutter="10">
                      <el-col v-if="!results" :xs="24" :sm="24" :md="24" :lg="24"><el-button  plain
                          @click="openWeb">
                          <svg-icon name="reddot" width=".8rem" height=".8rem" style="margin-right: 5px"></svg-icon>
                          Connect to Web3
                        </el-button></el-col>
                      <el-col v-else :xs="24" :sm="24" :md="24" :lg="24"><el-button  @click="openWeb">
                          <svg-icon name="greendot" width=".8rem" height=".8rem" style="margin-right: 5px"></svg-icon>
                          Connect to Web3 [{{ results }}]
                        </el-button></el-col>
                      <el-col :xs="24" :sm="24" :md="24" :lg="24">
                        <div class="contracts_info">
                          <div>
                            <el-icon>
                              <Document />
                            </el-icon>Read Contract Information
                          </div>
                          <div>
                            <el-button text type="" @click="toggleAll2">[Expand all]</el-button>
                            <el-button text type="" @click="resetAll2">[Reset]</el-button>
                          </div>
                        </div>
                      </el-col>
                      <el-col :xs="24" :sm="24" :md="24" :lg="24">
                        <div class="demo-collapse">
                          <el-collapse @change="handleChange" v-model="actives">
                            <el-collapse-item v-for="(item, index) in writeContract" :key="index"
                              :name="index.toString()">
                              <template #title>
                                <div class="collapsed">
                                  <div>{{ index + 1 }}_{{ item.name }}</div>
                                  <div>
                                    <el-tooltip effect="dark" content="Copy Method Name" placement="top">
                                      <el-button text icon="CopyDocument"></el-button>
                                    </el-tooltip>
                                    <el-tooltip effect="dark" content="Copy Permalink" placement="top">
                                      <el-button icon="Link"></el-button>
                                    </el-tooltip>
                                  </div>
                                </div>
                              </template>
                              <div v-if="item.inputs.length !== 0">
                                <el-form :model="formModels" label-position="top">
                                  <el-form-item v-for="(
                                      input, inputIndex
                                    ) in item.inputs" :key="inputIndex" :prop="input.name">
                                    <template #label>
                                      <span>{{ input.name }}</span>
                                      <el-button style="margin-left: 5px;" v-if="input.type === 'uint256'" type="info"
                                        plain @click="openDialog(index, inputIndex)"><el-icon>
                                          <Plus />
                                        </el-icon></el-button>
                                    </template>
                                    <el-input size="large" v-model="input.value" :placeholder="input.name"></el-input>
                                  </el-form-item>
                                  <el-form-item>
                                    <el-button type="primary" @click="submitWrite(item)">Write</el-button>
                                  </el-form-item>
                                  <el-form-item>
                                  </el-form-item>
                                  <el-form-item v-if="responsed">
                                    <div style="
                                      display: flex;
                                      flex-direction: column;
                                      flex-wrap: wrap;
                                    ">
                                      <!-- <p>
                                        [ allowance(address,address) method
                                        Response ]
                                      </p> -->
                                      <p class="uints" style="
                                        display: flex;
                                        align-items: center;
                                        margin: 10px;
                                      ">
                                        <svg-icon name="right"></svg-icon>
                                        <span class="successDetail" v-if="successDetail">uint256:{{ successDetail
                                          }}</span>
                                        <span class="loseDetail" v-else-if="loseDetail">uint256:{{ loseDetail }}</span>
                                      </p>
                                    </div>
                                  </el-form-item>
                                </el-form>
                              </div>
                              <div v-else>

                                <div>{{ item.outputs[0].name }} <span class="uints">{{ queryError
                                    }}</span>
                                </div>
                              </div>
                            </el-collapse-item>
                          </el-collapse>
                        </div>
                      </el-col>
                    </el-row>
                    <el-dialog v-model="dialogFormVisibles" title="Add Zeroes" width="500">
                      <el-form :model="form">
                        <el-form-item>
                          <el-select size="large" v-model="form.region" @change="handleSelectChange" placeholder="Select">
                            <el-option label="10⁶" value="1000000" />
                            <el-option label="10⁸" value="100000000" />
                            <el-option label="10¹⁸" value="1000000000000000000" />
                            <el-option label="Custom" value="Custom"/>
                          </el-select>
                          <div v-if="showCustomInput" style="width:100%">
                            <el-input style="margin-top: 10px" v-model="form.customValue" size="large"  type="number" :min="1" :max="18"
                          @blur="handleInputBlur" @input="handleInput"
                          ></el-input>
                          <p>Enter the number of zeroes to add. Example: 3 to add three (000) zeroes.</p>
                          </div>
                        </el-form-item>
                      </el-form>
                      <template #footer>
                        <div class="dialog-footer">
                          <el-button @click="dialogFormVisibles = false">Cancel</el-button>
                          <el-button type="primary" @click="addSelect(form.region)">
                            Add
                          </el-button>
                        </div>
                      </template>
                    </el-dialog>
                    <el-dialog v-model="dialogFormVisible" title="Connect a Wallet" width="500">
                      <el-form :model="form">
                        <el-form-item>
                          <p class="wrap-text">
                            <el-icon style="margin-right: 5px">
                              <Warning />
                            </el-icon>Connecting wallet for read function is optional,
                            useful if you want to call certain functions or
                            simply use your wallet's node.
                          </p>
                        </el-form-item>
                        <el-form-item style="display: flex">
                          <el-button @click="connectWallet" size="large" plain class="fox_box" style="flex-grow: 1">
                            <p>MetaMask</p>
                            <svg-icon name="fox" width="1rem" height="1rem" style="margin-left: 10px">
                            </svg-icon>
                          </el-button>
                        </el-form-item>
                      </el-form>
                      <template #footer>
                        <div class="dialog-footer">
                          <el-button @click="dialogFormVisible = false">Cancel</el-button>
                          <el-button type="primary" @click="dialogFormVisible = false">
                            Confirm
                          </el-button>
                        </div>
                      </template>
                    </el-dialog>
                  </el-tab-pane>
                </el-tabs>
              </el-tab-pane>
              <el-tab-pane label="NFT Transfers" name="tab6">Task</el-tab-pane>
            </el-tabs>
          </el-col>
        </el-row>
      </el-main>
      <el-aside class="responsive-aside"></el-aside>
    </el-container>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { ElMessage } from "element-plus";
import { getContactPage, getTokenInquire, getContactBalance,getContractTransationCount } from "@/api/toTokens";
import { getFileInfo } from "@/api/upload";
import { getContractDetail } from "@/api/verifyContract";
import { ethers } from "ethers";
const sizeForm = ref({
  address: "",
  spender: "",
});
let results = ref("");
let responsed = ref(false);;
const tableData = ref([]);
const actives = ref([])
const total = ref(0)
const holdTableData = ref([]);
const holdTotal = ref(0);
const individualQueryDetails = ref({});
const currentPage4 = ref(1);
const textarea2 = ref("");
const pageSize4 = ref(10);
const copiedText = ref("");
const activeName = ref("tab1");
const activeNames = ref("first");
const verifystatused = ref(0);
const contractSource = ref({});
const queryResult = ref(null);
const queryError = ref(null);
const successDetail = ref("");
const loseDetail = ref("");
let dialogFormVisible = ref(false);
let dialogFormVisibles = ref(false);
const activeNamese = ref(["1"]);
const viewDetails = ref([]);
const viewFunctions = ref([]);
const writeContract = ref([]);
const { address } = defineProps({
  address: {
    type: [String],
    required: true,
  },
});
const transfers = ref('')
const FunctionIndex = ref('');
const InputIndex = ref('');
const formModels = ref({});
const formModel = ref({});
const form = ref({
  name: "",
  region: "",
  customValue: '',
  date1: "",
  date2: "",
  delivery: false,
  type: [],
  resource: "",
  desc: "",
});
const showCustomInput = ref(false);
const rules = ref({
  address: [{ required: true, message: "Required", trigger: "blur" }],
  spender: [
    { required: true, message: "This field is required.", trigger: "blur" },
  ],
});
const handleChange = (val) => {
  console.log(val);
};
const getTransationCount = async()=>{
  try {
    if (address !== null) {
      const response = await getContractTransationCount(address);
      transfers.value = response.data;
    }
  } catch (error) {
    console.error("Error fetching getContractTransationCount details:", error);
  }
}
const toggleAll=()=>{
  if (actives.value.length === viewFunctions.value.length) {
        actives.value = [];
      } else {
        actives.value = viewFunctions.value.map((_, index) => index.toString());
      }
}
const resetAll =()=>{
  actives.value = [];
  viewFunctions.value.forEach((item) => {
    item.inputs.forEach((input) => {
      input.value = '';
    })
  })
}
const toggleAll2=()=>{
  if (actives.value.length === writeContract.value.length) {
        actives.value = [];
      } else {
        actives.value = writeContract.value.map((_, index) => index.toString());
      }
}
const resetAll2 =()=>{
  actives.value = [];
  writeContract.value.forEach((item) => {
    item.inputs.forEach((input) => {
      input.value = '';
    })
  })
}
const openWeb = () => {
  dialogFormVisible.value = true;
};
const handleSelectChange =(value)=>{
  console.log(value);
  if(value === 'Custom'){
    showCustomInput.value = true;
    form.value.customValue = '';
  }else{
    showCustomInput.value = false;
    form.value.customValue = '';
  }
}
const handleInput = (value)=>{
  form.value.customValue = value.replace(/[^\d]/g, '')
  const intValue = parseInt(value, 10);
  if(isNaN(intValue) || intValue < 1 || intValue > 18){
    form.value.customValue = form.value.customValue.slice(0, -1);
    ElMessage.error('Please enter a number between 1 and 18');
  }
}
const handleInputBlur =()=>{
  console.log(form.value.customValue);
  const customValue = parseInt(form.value.customValue, 10);
  if(!isNaN(customValue) && customValue >= 1 && customValue <= 18){
    form.value.region = Math.pow(10, customValue);
  }else{
    form.value.region = ''
    ElMessage.error('Please enter a number between 1 and 18');
    return
  }
}
const connectWallet = async () => {
  // const chainId = '0x2267';
  // const rpcUrl = 'https://test2.metabasenet.site/rpc';
  // if (window.ethereum) {
  //   try {
  //     await ethereum.request({
  //       method: 'wallet_switchEthereumChain',
  //       params: [{
  //         chainId: chainId 
  //       }]
  //     })
  //     console.log('wallet_switchEthereumChain');
  //   } catch (e) {
  //     console.log('(e as any).code', e.code);
  //     if (e.code == 4902) {
  //       try {
  //         console.log('wallet_addEthereumChain');
  //         await ethereum.request({
  //           method: 'wallet_addEthereumChain',
  //           params: [
  //             {
  //               chainId: chainId, 
  //               chainName: 'MNT Testnet',
  //               nativeCurrency: {
  //                 name: 'MNT',
  //                 symbol: 'MNT',
  //                 decimals: 18
  //               },
  //               rpcUrls: [rpcUrl], 
  //             }
  //           ]
  //         })
  //       } catch (ee) {
  //         //
  //       }
  //     } else if (e.code == 4001) return
  //   }
  // }

  if (typeof window.ethereum !== "undefined") {
    try {
      dialogFormVisible.value = false;
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];

      if (account.length >= 10) {
        const firstPart = account.substring(0, 6);
        const lastPart = account.substring(account.length - 4);
        const result = firstPart + "..." + lastPart;
        results.value = result;
        console.log(result);
      }
      console.log("Connected", account);
      // const provider = new ethers.providers.Web3Provider(window.ethereum);
      // const provider = new ethers.BrowserProvider(window.ethereum,"https://test.metabasenet.site/rpc");
      // // const provider = new ethers.JsonRpcProvider("https://test.metabasenet.site/rpc");
      // let byteCode = await provider.getCode(contractAddress);
      // return byteCode;
      // }
      const provider = new ethers.BrowserProvider(window.ethereum);
      // const provider = new ethers.BrowserProvider(window.ethereum, "https://test2.metabasenet.site/rpc");
      console.log(provider);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(
        contractSource.value.contractaddress,
        contractSource.value.abi,
        signer
      );
      console.log(contract);
      //  const amountInWei = ethers.utils.parseEther(amountInEther);
      // const balance = await contract.provider.getBalance(account);
      const balance = await provider.getBalance(account);
      // const balance = await contract.balanceOf(account);
      console.log(balance);
      // console.log("Balance:", ethers.utils.formatEther(balance));
      const totalSupply = await contract.totalSupply();
      // console.log("Total Token Supply:", ethers.utils.formatEther(totalSupply));


      const allowance = await contract.allowance(account, anotherAccount);

      console.log(
        "Allowance for anotherAccount:",
        ethers.utils.formatEther(allowance)
      );
      const approveTxn = await contract.approve(anotherAccount, amountInEther);
      const receipt = await approveTxn.wait();
      console.log("Approval Transaction:", receipt);
      const transferTxn = await contract.transfer(address, amountInEther);
      const transferReceipt = await transferTxn.wait();
      console.log("Transfer Transaction:", transferReceipt);
      const transferFromTxn = await contract
        .connect(signer)
        .transferFrom(fromAccount, address, amountInEther);
      const transferFromReceipt = await transferFromTxn.wait();
      console.log("Transfer From Transaction:", transferFromReceipt);
      let byteCode = await provider.getCode(contractAddress);
      return byteCode;
    } catch (error) {

      console.error("Failed to connect to MetaMask", error);
    }
  } else {
    console.error("MetaMask is not installed!");
  }
};
const openDialog = (functionIndex, inputIndex) => {
  showCustomInput.value = false;
  form.value.region = '';
  dialogFormVisibles.value = true;
  InputIndex.value = inputIndex;
  FunctionIndex.value = functionIndex;
}
const addSelect = (value) => {
  dialogFormVisibles.value = false;
  console.log(writeContract.value[FunctionIndex.value].inputs[InputIndex.value]);
  let itemInput = writeContract.value[FunctionIndex.value].inputs[InputIndex.value];
  itemInput.value ||= 1;
  itemInput.value *= value;
}
const submitWrite = async (item) => {
  // v-if="!results".value
  successDetail.value = "";
  loseDetail.value = "";
  if (typeof window.ethereum !== "undefined" && results.value) {
    responsed.value = true;
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      // const provider = new ethers.BrowserProvider(window.ethereum, "https://test2.metabasenet.site/rpc");
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractSource.value.contractaddress, contractSource.value.abi, signer);
      const params = item.inputs.reduce((acc, input) => {
        acc[input.name] = input.value;
        return acc;
      }, {});
      const valuesArray = Object.values(params);
      try {
        let res = await contract[item.name](...valuesArray);
        successDetail.value = 'success';
      } catch (error) {
        loseDetail.value = error.revert.args[0];
      }
      console.log(res);
      //  let res = await contract["transfer"]("0xe6897baC8439E77Cb662b18CF68a897c13aCacb5",0)
    } catch (error) {
      queryError.value = error.message;
    }
  } else {
    ElMessage.error("Please install or connect MetaMask!");
  }

}
const handleQuery = async (functionItem) => {
  responsed.value = true;
  try {
    const provider = new ethers.BrowserProvider(window.ethereum);
    // const provider = new ethers.BrowserProvider(window.ethereum, "https://test2.metabasenet.site/rpc");
    const signer = await provider.getSigner();
    // const contract = new ethers.Contract(contractSource.value.contractaddress, contractSource.value.abi, provider);
    const contract = new ethers.Contract(contractSource.value.contractaddress, contractSource.value.abi, signer);
    // let res11 = await contract["transfer"]("0xe6897baC8439E77Cb662b18CF68a897c13aCacb5","5");
    const params = functionItem.inputs.reduce((acc, input) => {
      acc[input.name] = input.value;
      return acc;
    }, {});
    // let res = await contract[functionItem.name](params.account);
    const valuesArray = Object.values(params);
    // let res = await contract["symbol"]();
    let res = await contract[functionItem.name](...valuesArray);
    // const res = await contract[functionItem.functionName](...Object.values(params));
    queryResult.value = res;
  } catch (error) {
    queryError.value = error.message;
  }
}
const getItemName = async () => {
  try {
    const provider = new ethers.BrowserProvider(window.ethereum);
    if (!contractSource.value || !contractSource.value.contractaddress) {
      throw new Error('Contract address is not initialized or invalid.');
    }
    const contract = new ethers.Contract(
      contractSource.value.contractaddress,
      contractSource.value.abi,
      provider
    );

    const promises = viewFunctions.value.map(async (item, index) => {
      try {
        if (item.inputs && item.inputs.length === 0) {
          item.detail = await contract[item.name]();
          viewDetails.value[index] = item.detail;
        } else {
          item.detail = '';
        }
      } catch (error) {
        console.error(`An error occurred while calling ${item.name}:`, error);
        item.detail = '';
      }
    });
    await Promise.all(promises);
    if (viewFunctions.value.length === viewDetails.value.length) {
      viewFunctions.value.forEach((obj, index) => {
        obj.detail = viewDetails.value[index];
      })
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
};
const handleClicks = (tab, event) => {
  if (tab.props.name === "first") {
    // getContactList();
  } else if (tab.props.name === "second") {
  } else if (tab.props.name === "third") {
    // getContractList()
  }
};
const handleClick = (tab, event) => {
  if (tab.props.name === "tab1") {
    getContactList();
  } else if (tab.props.name === "tab2") {
    if (address !== null) {
      getBalanceList();
} else {
  console.error('Cannot fetch balance list because the address is null');
}
    
  } else if (tab.props.name === "tab3") {
    // getContractList()
  } else if (tab.props.name === "tab4") {

  } else if (tab.props.name === "tab5") {
    if (verifystatused.value == "1") {
      getFileInfos();
      getItemName();
    } else {

    }
  }
};
const getFileInfos = async () => {
  try {
    if (address !== null) {
      const response = await getFileInfo(address);
      if (response && response.length > 0) {
        contractSource.value = contractSource.value || {};
        contractSource.value.sourceCode = response;
      } else {
        console.warn('getFileInfo did not return any data or was invalid.');
      }
    }
  } catch (error) {
    console.error("Error fetching block details:", error);
  }
};
const getContactDetail = async () => {
  try {
    if (address !== null) {
      const response = await getContractDetail(address);
      verifystatused.value = response.data?.verifystatus;
      contractSource.value = response.data;
      // contractSource.value.abi = JSON.parse(response.data?.abi);
      let abi;
      if (response.data && typeof response.data.abi === 'string') {
        try {
          abi = JSON.parse(response.data.abi);
          viewFunctions.value = abi.filter(
            (item) => item.type === "function" && item.stateMutability === "view" || item.stateMutability == 'prue'
          );
          writeContract.value = abi.filter(
            (item) => item.type === "function" && item.stateMutability === "nonpayable" || item.stateMutability == 'payable'
          );
        } catch (error) {
          abi = null;
        }
      } else {
        // console.warn('ABI is undefined or not a string.');
        abi = null;
      }
    }
  } catch (error) {
    console.error("Error fetching block details:", error);
  }
};
const getIndividualQuery = async () => {
  try {
    if (address !== null) {
      const response = await getTokenInquire(address);
      individualQueryDetails.value = response.data;
    }
  } catch (error) {
    console.error("Error fetching block details:", error);
  }
};
const getBalanceList = async (pager = 1) => {
  try {
    if (address !== null) {
      currentPage4.value = pager;
      const response = await getContactBalance(
        address,
        currentPage4.value,
        pageSize4.value
      );
      holdTableData.value = response.data.list;
      holdTotal.value = response.data.total;

    }
  } catch (error) {
    console.error("Error fetching block details:", error);
  }
};
const getContactList = async (pager = 1) => {
  try {
    if (address !== null) {
      currentPage4.value = pager;
      const response = await getContactPage(
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
    console.error("Error fetching block details:", error);
  }
};
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
const handleSizeChange = (val) => {
  getContactList();
};
const handleSizeChange2 = (val) => {
  getBalanceList();
};
const handleCurrentChange = (val) => {
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
  getContactList();
  getContactDetail();
  getIndividualQuery();
  getTransationCount();
  getBalanceList();
});
</script>

<style scoped>
.holders_chart{
  font-weight: 500;
}
.successDetail {
  color: green;

}

.loseDetail {
  color: red;
}

.fox_box {
  display: flex;
}

.wrap-text {
  white-space: normal;
  word-break: break-all;
  background-color: #e9ecef;
  border-radius: 9px;
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

.box {
  background-color: #f9fafc;
}

.grid-content_h3 {
  margin: 0 2rem;
  padding: 19px 0;
  border-bottom: 1px solid #dcdfe6;
}

.grid-content_h2 {
  margin: 0 2rem;
  padding: 10px 0;
}

.grid-contents {
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  margin: 10px 1rem;
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

  .grid-content_h3 {
    margin: 0 0.5rem;
  }

  .blocks_heade {
    margin: 0.7rem 0rem;
  }
  .decompile{
    margin-left: 12px;
    margin-bottom: 10px;
  }
  .card-ul,
  .card-li {
    padding: 5px;
  }

  .card_p {
    font-size: 10px;
  }
  .icon_menu,.darkb_button_div{
    margin-top: 10px;
  }
  .ethereum {
    margin: auto;
  }
  .grid-content_h2{
    margin: 0;
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
  justify-content: center;
  flex-wrap: wrap;
}

.blocks_heade_p {
  color: #6c757d;
  font-size: 13px;
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

.demo-tabs {
  background-color: #fff;
  border-radius: 15px;
  margin: 10px;
}

:deep(.el-badge__content.is-fixed) {
  right: 0;
}

/* :deep(.my-label) {
  width: 200px;
  display: inline-block;
} */

.block_height {
  display: inline-block;
}

.contracts_info {
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
}

.collapsed {
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: #6c757d;
  /* background-color: #f8f9fa; */
  /* border-radius: 10px; */
}

.uints {
  font-size: 13px;
  font-style: italic;
}
</style>