<template>
  <div class="box">
    <el-container class="container-xxl">
      <!-- <el-aside class="responsive-aside"></el-aside> -->
      <el-main>
        <el-row>
          <el-col :span="24">
            <div class="grid-content_h3">
              <div style="display: flex; justify-content: flex-start; align-items: center">
                <img src="@/images/Avatar.png"
                  style="width: 24px; height: 24px; border-radius: 100px; vertical-align: middle; margin-right: 5px;"
                  alt="">
                <span style="font-size: 18.75px; color: #212529; margin-right: 6px; ">Address</span>
                <!-- <h3>{{ contract }}</h3> -->
                <span class="ellipsis-text" style="font-size: 15px; color: #212529">{{ address }}</span>
                <el-tooltip v-if="!istoCopied" content="Copy Address" placement="top">
                  <el-button text icon="CopyDocument" @click="copyToClipboards(address)">
                  </el-button>
                </el-tooltip>
                <el-tooltip v-else content="Copied!" placement="top">
                  <el-button text icon="Check" @click="copyToClipboards(address)">
                  </el-button>
                </el-tooltip>
              </div>
              <!-- <div>
                <el-button type="primary">
                  Buy<el-icon class="el-icon--right"><arrow-down /></el-icon>
                </el-button>
                <el-button type="primary">
                  Play<el-icon class="el-icon--right"><arrow-down /></el-icon>
                </el-button>
                <el-button type="primary">
                  Gaming<el-icon class="el-icon--right"><arrow-down /></el-icon>
                </el-button>
              </div> -->
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
                <el-tag type="info" style="color: #000; background-color: #fff; border-radius: 10px;">ERC-20</el-tag>
                <el-tag type="info"
                  style="color: #000; background-color: #fff; border-radius: 10px;">Cross-Chain</el-tag>
                <el-tag type="info" style="color: #000; background-color: #fff; border-radius: 10px;"># Binance</el-tag>
                <el-tag type="info" style="color: #000; background-color: #fff; border-radius: 10px;">#
                  Binance-Peg</el-tag>
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
                      <!-- <el-dropdown-item>Action 1</el-dropdown-item>
                      <el-dropdown-item>Action 2</el-dropdown-item>
                      <el-dropdown-item>Action 3</el-dropdown-item>
                      <el-dropdown-item>Action 4</el-dropdown-item>
                      <el-dropdown-item>Action 5</el-dropdown-item> -->
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
                  <h3 style="font-size: 14.4992px; color: #212529; font-weight: 500">Overview</h3>
                </li>
                <li class="over_li">
                  <p class="title-item">MNT BALANCE</p>
                  <!-- <el-tooltip class="box-item" effect="dark"
                :content="individualQueryDetails && individualQueryDetails.totalsupply ? individualQueryDetails.totalsupply.toString() : ''"
                placement="top-start">
                <span>{{ individualQueryDetails.totalsupply }}</span>
              </el-tooltip> -->
                  <!-- <span style="font-weight: bold;"> ETH </span> -->
                  <el-tooltip class="box-item" effect="dark" content="CSupply: 551,557.859909" placement="top-start">
                    <span class="content-item">{{ getByBalance.balance }}</span>
                  </el-tooltip>
                </li>
                <li class="over_li">
                  <p class="title-item">MNT VALUE</p>
                  <span class="content-item">$5,250,039,228.27 (@ $544.76/MNT)</span>
                </li>
                <li class="over_li">
                  <p class="title-item">TOKEN HOLDINGS</p>
                  <div class="over_div">
                    <el-select v-model="values" placeholder=">$96,375" filterable style="width: 100%">
                      <template #header>
                        <p class="erc_p">ERC-20 Tokens</p>
                      </template>
                      <el-option v-for="(item, index) in cities" :key="index" :label="item.ercName"
                        :value="item.decimals || ''">
                        <router-link v-if="item.decimals !== null"
                          :to="{ name: 'token', params: { address: item.address } }"
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
                  <h3 style="font-size: 14.4992px; color: #212529; font-weight: 500">More Info</h3>
                </li>
                <li class="over_li">
                  <p class="title-item">PRIVATE NAME TAGS</p>
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
                  <p class="title-item">LAST TXN SENT</p>
                  <div class="over_div">
                    <el-tooltip class="box-item" effect="dark" :content="address" placement="top-start">
                      <router-link style="font-size: 14.4992px; color: #0784C3;" class="skyblue-text ellipsis-text"
                        :to="{ name: 'address', params: { address: address } }">{{
                        address.substring(0,30) + '...'
                        }}</router-link>
                    </el-tooltip>
                    <!-- <span class="content-item">from 12 hrs ago</span> -->
                  </div>

                </li>
                <li class="over_li">
                  <p class="title-item">TOTAL TRANSFERS</p>
                  <span class="content-item">{{ total }}</span>
                  <!-- <el-tooltip class="box-item" effect="dark"
                    content="This count of token transfers is updated every few hours instead of in real-time"
                    placement="top-start">
                    <el-icon style="vertical-align: middle; margin-bottom: 4px;">
                      <Warning />
                    </el-icon>
                  </el-tooltip> -->
                </li>
              </ul>
            </div>
          </el-col>
          <el-col :span="5" align :xs="24" :sm="8" :md="8" :lg="8">
            <div class="blocks_header" style="margin-right: 0;">
              <ul class="over_ul">
                <li>
                  <h3 style="font-size: 14.4992px; color: #212529; font-weight: 500">Other Info</h3>
                </li>
                <li class="over_li">
                  <p class="title-item">TOKEN CONTRACT</p>
                  <div class="over_div">
                    <el-tooltip class="box-item" effect="dark" content="Contract" placement="top-start">
                      <el-icon>
                        <Document />
                      </el-icon>
                    </el-tooltip>
                    <el-tooltip class="box-item" effect="dark" :content="address" placement="top-start">
                      <router-link class="skyblue-text ellipsis-text" style="font-size: 14.4992px; color: #0784C3"
                        :to="{ name: 'address', params: { address: address } }">{{
                        address.substring(0,25) + '...' }}</router-link>
                    </el-tooltip>
                    <el-tooltip v-if="!istoCopied" content="Copy Address" placement="top">
                      <el-button text icon="CopyDocument" @click="copyToClipboards(address)">
                      </el-button>
                    </el-tooltip>
                    <el-tooltip v-else content="Copied!" placement="top">
                      <el-button text icon="Check" @click="copyToClipboards(address)">
                      </el-button>
                    </el-tooltip>
                  </div>
                </li>
                <li class="over_li">
                  <p class="title-item">HOLDERS</p>
                  <span class="content-item">1,886,491 (0.00%)</span>
                </li>
                <li class="over_li">
                  <p class="title-item">TOTAL TRANSFERS</p>
                  <span class="content-item">{{ total }}</span>

                  <!-- <el-tooltip class="box-item" effect="dark"
                    content="This count of token transfers is updated every few hours instead of in real-time"
                    placement="top-start">
                    <el-icon style="vertical-align: middle; margin-bottom: 4px;">
                      <Warning />
                    </el-icon>
                  </el-tooltip> -->
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
                    <div class="demonstration" style="font-size: 14.4992px; color: #212529">
                      More than <span style="font-size: 14.4992px; color: #0784C3">{{ total }}</span> transactions found
                    </div>
                    <el-pagination :pager-count="5" v-model:current-page="currentPage4" v-model:page-size="pageSize4"
                      :page-sizes="[10, 20, 30, 40]" background layout=" sizes, prev, pager, next, " :total="total"
                      small @size-change="handleSizeChange1" @current-change="getAddressList" />
                  </div>
                  <el-table v-loading="loading" :data="tableData" style="width: 100%" size="default"
                    :row-style="{ height: '70px' }">
                    <el-table-column prop="hash" label="Transaction Hash" width="125">
                      <template v-slot="scope">
                        <el-tooltip :content="scope.row.hash" placement="top">
                          <router-link class="skyblue-text ellipsis-text" :to="{
                            name: 'tx',
                            params: { hash: scope.row.hash },
                          }" style="font-size: 14.4992px; color: #0784C3">{{ scope.row.hash }}</router-link>
                        </el-tooltip>
                      </template>
                    </el-table-column>
                    <el-table-column prop="method" label="Method" width="90">
                      <template v-slot="scope">
                        <el-tooltip :content="scope.row.method" placement="top">
                          <el-button v-if="scope.row.method"
                            style="padding: 5px; font-size: 10.8744px; color: #000;  border-radius: 6px;">{{
                            scope.row.method }}</el-button>
                        </el-tooltip>
                      </template>
                    </el-table-column>
                    <el-table-column prop="blockNumber" label="Block" width="88">
                      <template v-slot="scope">
                        <router-link class="skyblue-text" :to="{
                          name: 'block',
                          params: { blockNumber: scope.row.blockNumber },
                        }" style="font-size: 14.4992px; color: #0784C3">{{ scope.row.blockNumber }}</router-link>
                      </template>
                    </el-table-column>
                    <el-table-column prop="formattedTime" label="Age" width="127">
                      <template v-slot="scope">
                        <span style="font-size: 14.4992px; color: #212529">{{ scope.row.formattedTime }}</span>
                      </template>
                    </el-table-column>
                    <el-table-column prop="from" label="From" width="200" align="center">
                      <template v-slot="scope">
                        <div class="router_box">
                          <el-tooltip :content="scope.row.from" placement="top">
                            <router-link class="skyblue-text ellipsis-text" :to="{
                              name: 'address',
                              params: { address: scope.row.from },
                            }" style="font-size: 14.4992px; color: #0784C3;">{{ scope.row.from.substring(0,10) + '...'
                              }}</router-link>
                          </el-tooltip>
                          <el-tooltip v-if="!scope.row.isCopied" content="Copy Address" placement="top">
                            <el-button text icon="CopyDocument" @click="copyFormClipboard(scope.row.from, scope.row)">
                            </el-button>
                          </el-tooltip>
                          <el-tooltip v-else content="Copied!" placement="top">
                            <el-button text icon="Check" @click="copyFormClipboard(scope.row.from, scope.row)">
                            </el-button>
                          </el-tooltip>
                          <el-button style="margin-left: 0.5rem" type="success" icon="right" circle plain />
                        </div>
                      </template>
                    </el-table-column>
                    <el-table-column prop="to" label="To" align="center" width="200">
                      <template v-slot="scope">
                        <div class="router_box">
                          <el-tooltip content="Contract" placement="top">
                            <el-button
                              style="margin-right: 5px; margin-top: 5px; width: 12.69px; height: 15px; border-radius: 5px;"
                              icon="Document">
                            </el-button>
                          </el-tooltip>
                          <el-tooltip :content="scope.row.to" placement="top">
                            <router-link class="skyblue-text ellipsis-text" :to="{
                              name: 'address',
                              params: { address: scope.row.to },
                            }" style="font-size: 14.4992px; color: #0784C3">{{ scope.row.to.substring(0,10) + '...'
                              }}</router-link>
                          </el-tooltip>
                          <el-tooltip v-if="!scope.row.istoCopied" content="Copy Address" placement="top">
                            <el-button text icon="CopyDocument" @click="copyToClipboard(scope.row.to, scope.row)">
                            </el-button>
                          </el-tooltip>
                          <el-tooltip v-else content="Copied!" placement="top">
                            <el-button text icon="Check" @click="copyToClipboard(scope.row.to, scope.row)">
                            </el-button>
                          </el-tooltip>
                        </div>
                      </template>
                    </el-table-column>
                    <el-table-column prop="TransactionFee" label="Txn Fee">
                      <template v-slot="scope">
                        <el-tooltip :content="`${scope.row.TransactionFee}`" placement="top">
                          <span class="ellipsis-text" v-if="scope.row.TransactionFee"> {{ scope.row.TransactionFee
                            }}</span>
                        </el-tooltip>
                      </template>
                    </el-table-column>
                    <el-table-column prop="value" label="Value">
                      <template v-slot="scope">
                        <el-tooltip :content="`${scope.row.value}`" placement="top">
                          <span class="ellipsis-text">{{
                            scope.row.value
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
              <el-tab-pane label="Internal Transactions" name="tab2">
                <el-row class="box-table">
                  <div class="demo-pagination-block box-table_header">
                    <div class="demonstration" style="font-size: 14.4992px; color: #212529">
                      More than <span style="font-size: 14.4992px; color: #0784C3">{{ tableDataInternal.length }}</span>
                      Internal
                      transactions found
                    </div>
                    <el-pagination :pager-count="5" v-model:current-page="currentPageInternal"
                      v-model:page-size="pageSizeInternal" :page-sizes="[10, 20, 30, 40]" background
                      layout=" sizes, prev, pager, next, " :total="tableDataInternal.length" small
                      @size-change="handleSizeChangeInternal" @current-change="handleCurrentChangeInternal" />
                  </div>
                  <el-table v-loading="loading2" :data="tableDataInternal" style="width: 100%" size="default"
                    :row-style="{ height: '70px' }">
                    <el-table-column prop="transactionhash" label="Parent Transaction Hash" width="450">
                      <template v-slot="scope">
                        <el-tooltip :content="scope.row.transactionhash" placement="top">
                          <router-link class="skyblue-text ellipsis-text" :to="{
            name: 'tx', params: { hash: scope.row.transactionhash },
                            }" style="font-size: 14.4992px; color: #0784C3">{{ scope.row.transactionhash }}
                          </router-link>
                        </el-tooltip>
                      </template>
                    </el-table-column>
                    <el-table-column prop="utc" label="Age" width="127">
                      <template v-slot="scope">
                        <span style="font-size: 14.4992px; color: #212529">{{ scope.row.utc }}</span>
                      </template>
                    </el-table-column>
                    <el-table-column prop="from" label="From" width="200" align="center">
                      <template v-slot="scope">
                        <div class="router_box">
                          <el-tooltip :content="scope.row.from" placement="top">
                            <router-link class="skyblue-text ellipsis-text" :to="{
                                  name: 'address',
                                  params: { address: scope.row.from },
                                }" style="font-size: 14.4992px; color: #0784C3;">{{ scope.row.from.substring(0, 10) +
                              '...'
                              }}</router-link>
                          </el-tooltip>
                          <el-tooltip v-if="!scope.row.isCopied" content="Copy Address" placement="top">
                            <el-button text icon="CopyDocument" @click="copyFormClipboard(scope.row.from, scope.row)">
                            </el-button>
                          </el-tooltip>
                          <el-tooltip v-else content="Copied!" placement="top">
                            <el-button text icon="Check" @click="copyFormClipboard(scope.row.from, scope.row)">
                            </el-button>
                          </el-tooltip>
                          <el-button style="margin-left: 0.5rem" type="success" icon="right" circle plain />
                        </div>
                      </template>
                    </el-table-column>
                    <el-table-column prop="to" label="To" align="center" width="200">
                      <template v-slot="scope">
                        <div class="router_box">
                          <el-tooltip content="Contract" placement="top">
                            <el-button
                              style="margin-right: 5px; margin-top: 5px; width: 12.69px; height: 15px; border-radius: 5px;"
                              icon="Document">
                            </el-button>
                          </el-tooltip>
                          <el-tooltip :content="scope.row.to" placement="top">
                            <router-link class="skyblue-text ellipsis-text" :to="{
            name: 'address',
            params: { address: scope.row.to },
          }" style="font-size: 14.4992px; color: #0784C3">{{ scope.row.to.substring(0, 10) + '...'
                              }}</router-link>
                          </el-tooltip>
                          <el-tooltip v-if="!scope.row.istoCopied" content="Copy Address" placement="top">
                            <el-button text icon="CopyDocument" @click="copyToClipboard(scope.row.to, scope.row)">
                            </el-button>
                          </el-tooltip>
                          <el-tooltip v-else content="Copied!" placement="top">
                            <el-button text icon="Check" @click="copyToClipboard(scope.row.to, scope.row)">
                            </el-button>
                          </el-tooltip>
                        </div>
                      </template>
                    </el-table-column>
                    <el-table-column prop="value" label="Value">
                      <template v-slot="scope">
                        <el-tooltip :content="`${scope.row.value}`" placement="top">
                          <span class="ellipsis-text" style="font-size: 14.4992px; color: #212529;">{{
                            scope.row.value
                            }}</span>
                        </el-tooltip>
                      </template>
                    </el-table-column>
                  </el-table>
                  <div class="demo-pagination-block box-table_header">
                    <el-pagination :pager-count="5" v-model:current-page="currentPageInternal"
                      v-model:page-size="pageSizeInternal" :page-sizes="[10, 20, 30, 40]" background
                      layout=" sizes, prev, pager, next, " :total="tableDataInternal.length" small
                      @size-change="handleSizeChangeInternal" @current-change="handleCurrentChangeInternal" />
                  </div>
                </el-row>
              </el-tab-pane>
              <!-- <el-tab-pane label="Internal Transactions" name="tab2">Config</el-tab-pane> -->
              <el-tab-pane label="Token Transfers(ERC-20)" name="tab3">
                <el-row class="box-table">
                  <div class="demo-pagination-block box-table_header">
                    <div class="demonstration" style="font-size: 14.4992px; color: #212529;">
                      Latest {{ totals }} ERC-20 Token Transfer Events (<span
                        style="font-size: 14.4992px; color: #0784C3;">View All</span>)
                    </div>
                    <el-pagination :pager-count="5" v-model:current-page="currentPage4" v-model:page-size="pageSize4"
                      :page-sizes="[10, 20, 30, 40]" background layout=" sizes, prev, pager, next, " :total="totals"
                      small @size-change="handleSizeChange" @current-change="getContractList" />
                  </div>
                  <el-table v-loading="loading1" :data="tableDatas" style="width: 100%" size="default"
                    :row-style="{ height: '70px' }">
                    <el-table-column prop="transactionHash" label="Txn Hash" width="150">
                      <template v-slot="scope">
                        <el-tooltip :content="scope.row.to" placement="top">
                          <router-link class="skyblue-text ellipsis-text" :to="{
                            name: 'tx',
                            params: { hash: scope.row.transactionHash },
                          }" style="font-size: 14.4992px; color: #0784C3;">{{
                            scope.row.transactionHash }}</router-link>
                        </el-tooltip>
                      </template>
                    </el-table-column>
                    <el-table-column prop="method" label="Method" width="100">
                      <template v-slot="scope">
                        <el-tooltip :content="scope.row.method" placement="top">
                          <el-button style="font-size: 10.8744px; color: #000; padding: 5px; border-radius: 6px;">{{
                            scope.row.method }}</el-button>
                        </el-tooltip>
                      </template>
                    </el-table-column>
                    <el-table-column prop="blockNumber" label="Block" width="88">
                      <template v-slot="scope">
                        <router-link class="skyblue-text" :to="{
                          name: 'block',
                          params: { blockNumber: scope.row.blockNumber },
                        }" style="font-size: 14.4992px; color: #0784C3">{{ scope.row.blockNumber
                          }}</router-link>
                      </template>
                    </el-table-column>
                    <el-table-column prop="formattedTime" label="Age" width="128">
                      <template v-slot="scope">
                        <span style="font-size: 14.4992px; color: #0784C3">{{ scope.row.formattedTime }}</span>
                      </template>
                    </el-table-column>
                    <el-table-column prop="from" label="From" align="center" width="200">
                      <template v-slot="scope">
                        <div class="router_box">
                          <el-tooltip :content="scope.row.from" placement="top">
                            <router-link class="skyblue-text ellipsis-text" :to="{
                              name: 'address',
                              params: { address: scope.row.from },
                            }" style="font-size: 14.4992px; color: #0784C3;">{{ scope.row.from.substring(0,10) + '...'
                              }}</router-link>
                          </el-tooltip>
                          <el-tooltip v-if="!scope.row.isCopied" content="Copy Address" placement="top">
                            <el-button text icon="CopyDocument" @click="copyFormClipboard(scope.row.from, scope.row)">
                            </el-button>
                          </el-tooltip>
                          <el-tooltip v-else content="Copied!" placement="top">
                            <el-button text icon="Check" @click="copyFormClipboard(scope.row.from, scope.row)">
                            </el-button>
                          </el-tooltip>
                          <el-button style="margin-left: 1rem" type="success" icon="right" circle plain />
                        </div>
                      </template>
                    </el-table-column>
                    <el-table-column prop="to" align="center" label="To" width="200">
                      <template v-slot="scope">
                        <div class="router_box">
                          <el-tooltip content="Contract" placement="top">
                            <el-button
                              style="margin-right: 5px; margin-top: 4px; width: 12.69px; height: 15px; border-radius: 5px;"
                              icon="Document" @click="copyToClipboard(scope.row.to)">
                            </el-button>
                          </el-tooltip>
                          <el-tooltip :content="scope.row.to" placement="top">
                            <router-link class="skyblue-text ellipsis-text" :to="{
                              name: 'address',
                              params: { address: scope.row.to },
                            }" style="font-size: 14.4992px; color: #0784C3">{{ scope.row.to.substring(0,10) + '...'
                              }}</router-link>
                          </el-tooltip>
                          <el-tooltip v-if="!scope.row.istoCopied" content="Copy Address" placement="top">
                            <el-button text icon="CopyDocument" @click="copyToClipboard(scope.row.to, scope.row)">
                            </el-button>
                          </el-tooltip>
                          <el-tooltip v-else content="Copied!" placement="top">
                            <el-button text icon="Check" @click="copyToClipboard(scope.row.to, scope.row)">
                            </el-button>
                          </el-tooltip>
                        </div>
                      </template>
                    </el-table-column>
                    <el-table-column prop="value" align="center" label="Value">
                      <template v-slot="scope">
                        <el-tooltip :content="`${scope.row.value}`" placement="top">
                          <span class="ellipsis-text" style="font-size: 14.4992px; color: #212529">{{
                            scope.row.value
                            }}</span>
                        </el-tooltip>
                      </template>
                    </el-table-column>
                    <el-table-column prop="ercName" align="center" label="Token" />
                  </el-table>
                  <div class="card-footer">
                    <router-link to="/tokentxns" class="view-all">
                      <span style="font-size: 12px; color: #6C757D">VIEW ALL ERC-20 TRANSACTIONS </span>
                      <el-icon style="margin-left:3px; vertical-align: middle">
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
              <el-tab-pane v-if="verifystatused === 0 || !verifystatused" label="Contract" name="tab4">
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
                          </el-icon>
                        </el-button>
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
              <el-tab-pane v-else name="tab4">
                <template #label>
                  <el-badge value="√" class="item" type="success">
                    Contract
                  </el-badge>
                </template>
                <el-tabs type="card" v-model="activeNames" class="demo-tabs" @tab-click="handleClicks">
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
                            <div class="grid-content_h2 darkb_button">
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
                      <el-col v-if="!results" :xs="24" :sm="24" :md="24" :lg="24"><el-button plain @click="openWeb">
                          <svg-icon name="reddot" width=".8rem" height=".8rem" style="margin-right: 5px"></svg-icon>
                          Connect to Web3
                        </el-button></el-col>
                      <el-col v-else :xs="24" :sm="24" :md="24" :lg="24"><el-button @click="openWeb">
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
                          <el-select size="large" v-model="form.region" @change="handleSelectChange"
                            placeholder="Select">
                            <el-option label="10⁶" value="1000000" />
                            <el-option label="10⁸" value="100000000" />
                            <el-option label="10¹⁸" value="1000000000000000000" />
                            <el-option label="Custom" value="Custom" />
                          </el-select>
                          <div v-if="showCustomInput" style="width:100%">
                            <el-input style="margin-top: 10px" v-model="form.customValue" size="large" type="number"
                              :min="1" :max="18" @blur="handleInputBlur" @input="handleInput"></el-input>
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
              <!-- <el-tab-pane label="NFT Transfers" name="tab4">Task</el-tab-pane> -->
            </el-tabs>
          </el-col>
        </el-row>
      </el-main>
      <!-- <el-aside class="responsive-aside"></el-aside> -->
    </el-container>
  </div>
</template>

<script setup>
import { ref, onMounted, defineProps, reactive } from "vue";
import { useRoute } from "vue-router";
import { ElMessage } from "element-plus";
import { ethers, formatUnits } from "ethers";
import {config} from '@/config/config'
import {
  getAddressPage,
  getContractAddress,
  getBalanceAddress,
  getselectAddress
} from "@/api/address";
import { getTransactionPlaform } from '@/api/transaction'
const { address } = defineProps({
  address: {
    type: [String],
    required: true,
  },
});
const istoCopied = ref(false);
let tableData = reactive([]);
const total = ref(0);
const totals = ref(0);
let tableDatas = reactive([]);
let tableDataInternal = ref([])
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
let loading = ref(false)
let loading1 = ref(false)
let loading2 = ref(false)
let currentPageInternal = ref(1);
let pageSizeInternal = ref(10);
const verifystatused = ref(0);

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
const timestamps = () => {
  const currentTime = Math.floor(Date.now() / 1000);
  tableData.forEach((item) => {
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
const getContractList = async (pager = 1) => {
  try {
    loading1.value = true
    if (address !== null) {
      currentPage4.value = pager;
      const response = await getContractAddress(
        address,
        currentPage4.value,
        pageSize4.value
      );

      tableDatas = response.data.list;
      tableDatas.forEach((item) => {
          item.method = item.method ||item.methodHash;
        const decimals = item.decimals || 0;
            const values = item.value || 0;
            item.value = formatUnits(parseInt(values, 16).toString(), decimals);
      });
      totals.value = response.data.total;
      const currentTime = Math.floor(Date.now() / 1000);
      tableDatas.forEach((item) => {
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
    loading1.value = false
  } catch (error) {
    console.error("Error fetching details:", error);
  }
};
const getAddressList = async (pager = 1) => {
  try {
    loading.value = true
    if (address !== null) {
      currentPage4.value = pager;
      const response = await getAddressPage(
        address,
        currentPage4.value,
        pageSize4.value
      );
      tableData = response.data.list;
      total.value = response.data.total;
      timestamps();
      tableData.forEach((item) => {
        item.TransactionFee = formatUnits((item.cumulativeGasUsed * item.effectiveGasPrice).toString(), 18);
        item.method = item.method ||item.methodHash;
        // const decimals = item.decimals || 0;
        // const values = item.value || 0;
        item.value = Number(formatUnits(item.value.toString(), 18)).toFixed(8);
      });
    }
    loading.value = false
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
  const provider = new ethers.JsonRpcProvider(config.testRpc_adress);
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
const handleSizeChange1 = (val) => {
  getAddressList();
};
const handleSizeChange = (val) => {
  getContractList();
};
const handleCurrentChange = (val) => {
  console.log(`current page: ${val}`);
};
function copyFormClipboard(text, row) {
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
function copyToClipboard(text, row) {
  row.istoCopied = true;
  setTimeout(() => {
    row.istoCopied = false;
  }, 2000);
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
  istoCopied.value = true;
  setTimeout(() => {
    istoCopied.value = false;
  }, 2000);
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
const getTransactionPlaforms = async (pager = 1) => {
  try {
    loading2.value = true
    currentPageInternal.value = pager
    let {data:{list}} = await getTransactionPlaform(address, currentPageInternal.value, pageSizeInternal.value)
    tableDataInternal.value = list;

    const currentTime = Math.floor(Date.now() / 1000);
    tableDataInternal.value.forEach((item) => {
      const timestamp = item.utc;
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
      item.utc = formattedTime;
    });
    loading2.value = false
  } catch (error) {
    console.error(error);
  }
}
let handleSizeChangeInternal = async () => {
  getTransactionPlaforms()
}
let handleCurrentChangeInternal = async () => {
  getTransactionPlaforms()
}
onMounted(() => {
  getAddressList();
  getBalanceList();
  getSelectList();
  getContractOrAddress();
  getTransactionPlaforms();
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
  padding: 19px 0;
  border-bottom: 1px solid #dcdfe6;
}

.blocks_heade {
  margin-top: 1.25rem;
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
  border-radius: 0 0 12px 12px;
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
  /* width: 7.125rem; */
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
  color: #6C757D;
  font-size: 14.4992px;
}

.el-tag {
  margin-top: 1.25rem;
  margin-right: 0.625rem;
}

/* .darkb_button {
  display: flex;
  justify-content: flex-start;
  align-items: center; 
  flex-wrap: wrap; 
} */

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
.title-item {
  font-size:  12px;
  color:  #6C757D;
}
.content-item {
  font-size: 14.4992px;
  color: #212529;
}
:deep(.el-table--default .cell) {
  font-size: 12.5625px;
  color: #212529;
  font-weight: 500;
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
.block_height {
  display: inline-block;
}
.darkb_button {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
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
.wrap-text {
  white-space: normal;
  word-break: break-all;
  background-color: #e9ecef;
  border-radius: 9px;
}
.fox_box {
  display: flex;
}
.uints {
  font-size: 13px;
  font-style: italic;
}
</style>