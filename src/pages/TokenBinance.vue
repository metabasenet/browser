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
              <div>
                <el-dropdown style="margin-right: 5px">
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
                <el-dropdown>
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
          <el-col :span="5" :xs="24" :sm="8" :md="8" :lg="8">
            <div class="grid-content ep-bg-purple-dark blocks_header">
              <ul class="over_ul">
                <li>
                  <h3>Overview</h3>
                </li>
                <li class="over_li">
                  <p>MAX TOTAL SUPPLY</p>
                  <el-tooltip class="box-item" effect="dark" :content="
                      individualQueryDetails &&
                      individualQueryDetails.totalsupply
                        ? individualQueryDetails.totalsupply.toString()
                        : ''
                    " placement="top-start">
                    <span>{{ individualQueryDetails.totalsupply }}</span>
                  </el-tooltip>
                  <span style="font-weight: bold"> ETH </span>
                  <el-tooltip class="box-item" effect="dark" content="CSupply: 551,557.859909" placement="top-start">
                    <span style="color: #6c757d">(CSupply: 551,557.859909)</span>
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
          </el-col>
          <el-col :span="5" align :xs="24" :sm="8" :md="8" :lg="8">
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
                    <div class="demonstration">Total of 36,899,505 blocks</div>
                    <el-pagination v-model:current-page="currentPage4" v-model:page-size="pageSize4"
                      :page-sizes="[10, 20, 30, 40]" layout=" sizes, prev, pager, next, " :total="10" small
                      @size-change="handleSizeChange" @current-change="handleCurrentChange" />
                  </div>
                  <el-table :data="tableData" style="width: 100%">
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
                            <el-button icon="CopyDocument" @click="copyToClipboard(scope.row.from)">
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
                            <el-button icon="CopyDocument" @click="copyToClipboard(scope.row.to)">
                            </el-button>
                          </el-tooltip>
                        </div>
                      </template>
                    </el-table-column>
                    <el-table-column prop="value" label="Value" />
                    <el-table-column prop="TransactionFee" label="Gas Price" />
                  </el-table>
                  <div class="demo-pagination-block box-table_header">
                    <el-pagination v-model:current-page="currentPage4" v-model:page-size="pageSize4"
                      :page-sizes="[10, 20, 30, 40]" small layout=" sizes, prev, pager, next" :total="20"
                      @size-change="handleSizeChange" @current-change="handleCurrentChange" />
                  </div>
                </el-row>
              </el-tab-pane>
              <el-tab-pane label="Holders" name="tab2">Config</el-tab-pane>
              <!-- <el-tab-pane label="info" name="tab3"><el-row class="box-table">
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
            </el-row></el-tab-pane> -->
              <el-tab-pane label="DEX Trades" name="tab4">DEX Trades</el-tab-pane>
              <el-tab-pane v-if="verifystatused === 0 || !verifystatused" label="comments" name="tab5">
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
                    comments
                  </el-badge>
                </template>
                <el-tabs style="margin: 10px" type="card" v-model="activeNames" class="demo-tabs"
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
                              <span>{{ contractSource.optimization }}</span>
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
                            <div class="grid-content_h2 grid-contents">
                              <div></div>
                              <div>
                                <el-button type="info" icon="Edit" />
                                <el-button type="info" icon="Share" />
                                <el-button type="info" icon="Delete" />
                              </div>
                            </div>
                            <div class="grid-content_h2">
                              <el-input v-model="contractSource.sourceCode" style="height: 300px" :rows="16"
                                type="textarea" />
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
                              <el-input v-model="contractSource.abi" style="height: 200px" :rows="10" type="textarea" />
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
                                <el-button type="info">Decompile Bytecode
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
                            <router-link to="/home">[Expand all]</router-link>
                            <router-link to="/home">[Reset]</router-link>
                          </div>
                        </div>
                      </el-col>

                      <el-col :xs="24" :sm="24" :md="24" :lg="24">
                        <div class="demo-collapse">
                          <el-collapse @change="handleChange">
                            <el-collapse-item v-for="(functionItem, index) in viewFunctions" :key="index"
                              :name="index.toString()">
                              <template #title>
                                <div class="collapsed">
                                  <div>{{ index + 1 }}_{{ functionItem.name }}</div>
                                  <div>
                                    <el-tooltip effect="dark" content="Copy Method Name" placement="top">
                                      <el-button icon="CopyDocument"></el-button>
                                    </el-tooltip>
                                    <el-tooltip effect="dark" content="Copy Permalink" placement="top">
                                      <el-button icon="Link"></el-button>
                                    </el-tooltip>
                                  </div>
                                </div>
                              </template>
                              <div v-if="functionItem.inputs.length !== 0">
                                <!-- 根据inputs 显示表单 -->
                                <el-form :model="formModel" label-position="top">
                                  <el-form-item v-for="(
                                      input, inputIndex
                                    ) in functionItem.inputs" :key="inputIndex" :prop="input.name" :label="input.name">
                                    <el-input size="large" v-model="formModel[input.name]" placeholder="Enter value"></el-input>
                                  </el-form-item>
                                  <el-form-item>
                                    <el-button type="info" plain @click="queryAllowance(functionItem)">Query</el-button>
                                  </el-form-item>
                                  <el-form-item>
                                    <span class="uints">{{functionItem.outputs[0].internalType}}</span>
                                  </el-form-item>
                                  <el-form-item v-if="response">
                                    <div style="
                                      display: flex;
                                      flex-direction: column;
                                      flex-wrap: wrap;
                                    ">
                                      <p>
                                        [ allowance(address,address) method
                                        Response ]
                                      </p>
                                      <p class="uints" style="
                                        display: flex;
                                        align-items: center;
                                        margin: 10px;
                                      ">
                                        <svg-icon name="right"></svg-icon>uint256:
                                        0
                                      </p>
                                    </div>
                                  </el-form-item>
                                </el-form>
                              </div>
                              <div v-else>
                                <!-- 对于非函数类型的项,可以显示其他信息 -->
                                <div>{{functionItem.outputs[0].name}} <span
                                    class="uints">{{functionItem.outputs[0].internalType}}</span></div>
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
                      <el-col v-if="!results" :xs="24" :sm="24" :md="24" :lg="24"><el-button type="info" plain
                          @click="openWeb">
                          <svg-icon name="reddot" width=".8rem" height=".8rem" style="margin-right: 5px"></svg-icon>
                          Connect to Web3
                        </el-button></el-col>
                      <el-col v-else :xs="24" :sm="24" :md="24" :lg="24"><el-button type="info" @click="openWeb">
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
                            <router-link to="/home">[Expand all]</router-link>
                            <router-link to="/home">[Reset]</router-link>
                          </div>
                        </div>
                      </el-col>
                      <el-col :xs="24" :sm="24" :md="24" :lg="24">
                        <div class="demo-collapse">
                          <el-collapse @change="handleChange">
                            <el-collapse-item v-for="(item, index) in writeContract" :key="index"
                              :name="index.toString()">
                              <template #title>
                                <div class="collapsed">
                                  <div>{{ index + 1 }}_{{ item.name }}</div>
                                  <div>
                                    <el-tooltip effect="dark" content="Copy Method Name" placement="top">
                                      <el-button icon="CopyDocument"></el-button>
                                    </el-tooltip>
                                    <el-tooltip effect="dark" content="Copy Permalink" placement="top">
                                      <el-button icon="Link"></el-button>
                                    </el-tooltip>
                                  </div>
                                </div>
                              </template>
                              <div v-if="item.inputs.length !== 0">
                                <!-- 根据inputs 显示表单 -->
                                <el-form :model="formModels" label-position="top">
                                  <el-form-item v-for="(
                                      input, inputIndex
                                    ) in item.inputs" :key="inputIndex" :prop="input.name">
                                    <template #label>
                                      <span>{{ input.name }}</span>
                                      <el-button style="margin-left: 5px;" v-if="input.type === 'uint256'" type="info"
                                        plain @click="dialogFormVisibles = true"><el-icon>
                                          <Plus />
                                        </el-icon></el-button>
                                    </template>
                                    <el-input size="large" v-model="formModels[input.name]"
                                      :placeholder="input.name"></el-input>

                                  </el-form-item>
                                  <el-form-item>
                                    <el-button type="primary">Write</el-button>
                                  </el-form-item>
                                  <el-form-item>
                                  </el-form-item>
                                  <el-form-item v-if="response">
                                    <div style="
                                      display: flex;
                                      flex-direction: column;
                                      flex-wrap: wrap;
                                    ">
                                      <p>
                                        [ allowance(address,address) method
                                        Response ]
                                      </p>
                                      <p class="uints" style="
                                        display: flex;
                                        align-items: center;
                                        margin: 10px;
                                      ">
                                        <svg-icon name="right"></svg-icon>uint256:
                                        0
                                      </p>
                                    </div>
                                  </el-form-item>
                                </el-form>
                              </div>
                              <div v-else>
                                <!-- 对于非函数类型的项,可以显示其他信息 -->
                                <div>{{item.outputs[0].name}} <span
                                    class="uints">{{item.outputs[0].internalType}}</span></div>
                              </div>
                            </el-collapse-item>
                          </el-collapse>
                        </div>
                      </el-col>
                    </el-row>
                    <el-dialog v-model="dialogFormVisibles" title="Add Zeroes" width="500">
                      <el-form :model="form">
                        <el-form-item>
                          <el-select size="large" v-model="form.region" placeholder="Select">
                            <el-option label="10" value="shanghai" />
                            <el-option label="100" value="beijing" />
                            <el-option label="10000" value="beijing" />
                            <el-option label="100000" value="beijing" />
                          </el-select>
                        </el-form-item>
                      </el-form>
                      <template #footer>
                        <div class="dialog-footer">
                          <el-button @click="dialogFormVisibles = false">Cancel</el-button>
                          <el-button type="primary" @click="dialogFormVisibles = false">
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
import { getContactPage, getTokenInquire } from "@/api/toTokens";
import { getFileInfo } from "@/api/upload";
import { getContractDetail } from "@/api/verifyContract";
// import Web3 from "web3";
import { ethers } from "ethers";
const sizeForm = ref({
  address: "",
  spender: "",
});
let results = ref("");
let response = false;
const tableData = ref([]);
const individualQueryDetails = ref({});
const currentPage4 = ref(1);
const textarea2 = ref("");
const pageSize4 = ref(10);
const copiedText = ref("");
const activeName = ref("tab1");
const activeNames = ref("first");
const verifystatused = ref(0);
const contractSource = ref({});
let dialogFormVisible = ref(false);
let dialogFormVisibles = ref(false);
const activeNamese = ref(["1"]);
const viewFunctions = ref([]);
const writeContract = ref([]);
const { address } = defineProps({
  address: {
    type: [String],
    required: true,
  },
});
const formModels = ref({});
const formModel =ref({});
const form = ref({
  name: "",
  region: "",
  date1: "",
  date2: "",
  delivery: false,
  type: [],
  resource: "",
  desc: "",
});
const rules = ref({
  address: [{ required: true, message: "Required", trigger: "blur" }],
  spender: [
    { required: true, message: "This field is required.", trigger: "blur" },
  ],
});
const handleChange = (val) => {
  console.log(val);
};
const openWeb = () => {
  dialogFormVisible.value = true;
};
const queryAllowance = async (functionItem) => {
  // 根据 functionItem.inputs 构建查询参数
  // const params = functionItem.inputs.reduce((acc, input) => {
  //       acc[input.name] = formModel[input.name];
  //       return acc;
  //     }, {});
  //       // 发送查询到后端，这里只是模拟
  //       const response = await getFileInfo(address);
  //       response[functionItem.name] = 'Your query response here';
}
const connectWallet = async () => {
  // 检查是否安装了MetaMask
  if (typeof window.ethereum !== "undefined") {
    try {
      dialogFormVisible.value = false;
      // 从MetaMask请求账户访问权限
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];
      // 如果账户地址长度足够，只显示前6位和后4位，中间用...代替
      if (account.length >= 10) {
        const firstPart = account.substring(0, 6);
        const lastPart = account.substring(account.length - 4);
        const result = firstPart + "..." + lastPart;
        results.value = result;
        console.log(result);
      }
      // 输出已连接的账户地址
      console.log("Connected", account);
      // 创建Web3提供者
      // const provider = new ethers.providers.Web3Provider(window.ethereum);
      const provider = new ethers.BrowserProvider(window.ethereum);
      console.log(provider);

      // 获取签名器
      const signer = provider.getSigner();

      // 使用ABI和合约地址初始化合约
      const contract = new ethers.Contract(
        contractSource.value.contractaddress,
        contractSource.value.abi,
        signer
      );
       // 假设amountInEther和address已被正确赋值
      //  const amountInWei = ethers.utils.parseEther(amountInEther);
      // 获取账户余额
      // const balance = await contract.provider.getBalance(account);
      const balance = await provider.getBalance(account);
      // const balance = await contract.balanceOf(account);
      console.log(balance);
      // 将余额从wei转换为ether并输出
      console.log("Balance:", ethers.utils.formatEther(balance));

      // 查询代币总供应量
      const totalSupply = await contract.totalSupply();
      // 将总供应量从wei转换为ether并输出
      console.log("Total Token Supply:", ethers.utils.formatEther(totalSupply));

      // 查询另一个账户的批准代币数量
      const allowance = await contract.allowance(account, anotherAccount);
      // 将批准数量从wei转换为ether并输出
      console.log(
        "Allowance for anotherAccount:",
        ethers.utils.formatEther(allowance)
      );

      // 批准另一个账户花费代币
      const approveTxn = await contract.approve(anotherAccount, amountInEther);
      const receipt = await approveTxn.wait();
      // 输出批准交易回执
      console.log("Approval Transaction:", receipt);

      // 转账代币
      const transferTxn = await contract.transfer(address, amountInEther);
      const transferReceipt = await transferTxn.wait();
      // 输出转账交易回执
      console.log("Transfer Transaction:", transferReceipt);

      // 代理转账代币
      const transferFromTxn = await contract
        .connect(signer)
        .transferFrom(fromAccount, address, amountInEther);
      const transferFromReceipt = await transferFromTxn.wait();
      // 输出代理转账交易回执
      console.log("Transfer From Transaction:", transferFromReceipt);
    } catch (error) {
      // 如果连接MetaMask失败，输出错误信息
      console.error("Failed to connect to MetaMask", error);
    }
  } else {
    // 如果未安装MetaMask，输出错误信息
    console.error("MetaMask is not installed!");
  }
};
const handleClicks = (tab, event) => {
  if (tab.props.name === "first") {
    // getContactList();
  } else if (tab.props.name === "second") {
    console.log(tab.props.name);
  } else if (tab.props.name === "third") {
    // getContractList()
  }
};
const handleClick = (tab, event) => {
  console.log(tab.props.name);
  if (tab.props.name === "tab1") {
    getContactList();
  } else if (tab.props.name === "tab2") {
    console.log(tab.props.name);
  } else if (tab.props.name === "tab3") {
    // getContractList()
  } else if (tab.props.name === "tab4") {

  } else if (tab.props.name === "tab5") {
    getFileInfos();
  }
};
const getFileInfos = async () => {
  try {
    if (address !== null) {
      const response = await getFileInfo(address);
      contractSource.value.sourceCode = response[0].sourceCode;
      console.log(response);
    }
  } catch (error) {
    console.error("Error fetching block details:", error);
  }
};
const getContactDetail = async () => {
  try {
    if (address !== null) {
      const response = await getContractDetail(address);
      verifystatused.value = response.data.verifystatus;
      contractSource.value = response.data;
      let abi = JSON.parse(response.data.abi);
      viewFunctions.value = abi.filter(
        (item) => item.type === "function" && item.stateMutability === "view"
      );
      writeContract.value = abi.filter(
        (item) => item.type === "function" && item.stateMutability === "nonpayable"
      );
      console.log(writeContract.value);
      console.log(viewFunctions.value);
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
      console.log(response.data);
    }
  } catch (error) {
    console.error("Error fetching block details:", error);
  }
};
const getContactList = async () => {
  try {
    if (address !== null) {
      const response = await getContactPage(
        address,
        currentPage4.value,
        pageSize4.value
      );
      tableData.value = response.data.list;
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
  console.log(`${val} items per page`);
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
  getContactList();
  getContactDetail();
  getIndividualQuery();
});
</script>

<style scoped>
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
  justify-content: center;
  flex-wrap: wrap;
}

.blocks_heade_p {
  color: #6c757d;
  font-size: 12px;
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
}
:deep(.el-badge__content.is-fixed) {
  right: 0;
}
:deep(.my-label) {
  width: 200px;
  display: inline-block;
}

.block_height {
  display: inline-block;
  margin-left: 5rem;
}
@media (max-width: 768px) {
  .block_height {
    display: block;
    margin-left: 0;
  }
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
  font-size: 10px;
  font-style: italic;
}
</style>