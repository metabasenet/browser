<template>
    <div>
        <div data-v-92014c5c="" data-v-520cdd27="" class="content-child"><h1 data-v-92014c5c="" class="h1">
            浏览器查询区块链及代币富豪榜</h1>
            <h2 data-v-92014c5c="" class="h2">浏览器展示富豪榜，包括富豪排名，富豪地址和交易金额。</h2>
            <div data-v-92014c5c="" class="baseInfoCard">
                <div data-v-92014c5c="" class="header">
                    <div data-v-92014c5c="" id="rich_list" class="btns">
                        <div data-v-92014c5c="" class="title ontitle">富豪榜</div>
                    </div>

                </div>
                <div data-v-18b505e9="" data-v-92014c5c="">
                    <div data-v-18b505e9="" class="full">
                        <div data-v-18b505e9="" class="part cp-rich">
                            <div data-v-18b505e9="" class="content">
                                <div data-v-18b505e9="" class="inner">
                                    <div data-v-18b505e9="" class="rich_list">
                                        <li data-v-18b505e9="" class="item">
                                            <div data-v-18b505e9="" class="rank"><b data-v-18b505e9="">名次</b></div>
                                            <!---->
                                            <div data-v-18b505e9="" class="address"><b data-v-18b505e9="">地址</b></div>
                                            <div data-v-18b505e9="" class="amount"><b data-v-18b505e9="">余额</b></div>
                                            <div data-v-18b505e9="" class="percent"><b data-v-18b505e9="">收益率</b></div>
                                        </li>
                                        <li data-v-18b505e9="" class="item" v-for="(item,index) in ranklistDatas" :key="index">
                                            <div data-v-18b505e9="" class="rank">{{ index+1 }}</div>
                                            <div data-v-18b505e9="" class="address">
                                                <a data-v-18b505e9="" href="javascript:void(0)" class="hash">
                                                    <span data-v-18b505e9="" class="el-tooltip" aria-describedby="el-tooltip-6004" tabindex="0">
                                                        {{ item.address }}
                                                    </span></a>

                                            </div>
                                            <div data-v-18b505e9="" class="amount">{{ item.balance }}</div>
                                            <div data-v-18b505e9="" class="percent">{{ item.yield }}</div>
                                        </li>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div data-v-18b505e9="" class="mobile">
                            <div data-v-18b505e9="" class="items" v-for="(item,index) in ranklistDatas" :key="index">
                                <div data-v-18b505e9="" class="item hash">
                                    <div data-v-18b505e9="" class="key">地址</div>
                                    <div data-v-18b505e9="" class="value">
                                        <div data-v-18b505e9="" class="address"><a data-v-18b505e9=""
                                                                                   href="javascript:void(0)"
                                                                                   class="hash">{{ item.address }}</a>
                                        </div>
                                    </div>
                                </div>
                                <div data-v-18b505e9="" class="item">
                                    <div data-v-18b505e9="" class="key">金额</div>
                                    <div data-v-18b505e9="" class="value">
                                        <div data-v-18b505e9="" class="amount">{{ item.balance }}</div>
                                    </div>
                                </div>
                                <div data-v-18b505e9="" class="item">
                                    <div data-v-18b505e9="" class="key">收益率</div>
                                    <div data-v-18b505e9="" class="value">{{ item.yield }}</div>
                                </div>
                                <div data-v-18b505e9="" class="item">
                                    <div data-v-18b505e9="" class="key">名次</div>
                                    <div data-v-18b505e9="" class="value">{{ index+1 }}</div>
                                </div>
                            </div>
                        </div>


                        <div data-v-7b0e1c95="">
                            <div data-v-5d77fed0="" data-v-7b0e1c95="" class="turn_page">
                                <div data-v-5d77fed0="" class="page_box">
                                    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                                                   :current-page="pagenum" :page-sizes="[20]" :page-size="pageSize"
                                                   layout="total, sizes, prev, pager, next, jumper" :total="total">
                                    </el-pagination>
                                </div>
                            </div>
                        </div>

                    </div>
                </div><!----></div>
        </div>

    </div>
</template>


<script>
    export default {
        name: "Rank",
        data() {
            return {
                ranklistDatas: [],
                pageSize: 20,
                pagenum: 1,
                total: 0,
            }
        },
        methods: {
            getList() {
                let params = {
                    page: this.pagenum,
                    pagesize: this.pageSize
                };
                let that = this
                this.$api.rank(params).then(res => {
                    that.ranklistDatas = res.data
                    that.page = res.pagenum
                    that.pageSize = res.pagesize
                    that.total = res.total

                });
            },

            handleSizeChange(newSzie) {
                this.pageSize = newSzie
                this.getList()
            },
            handleCurrentChange(newPage) {
                this.pagenum = newPage
                this.getList()
            },
        },
        created() {
            this.getList()
        }
    }
</script>

<style>
    @import url("../../assets/css/app.css");
    @import url("../../assets/css/rank.css");
</style>