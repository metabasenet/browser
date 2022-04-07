<template>
    <div>

        <div data-v-520cdd27="" class="content-child"><h1 class="h1">浏览器查询链上待确认交易，待确认交易数量，交易费</h1>
            <h2 class="h2">浏览器可查询比特币待确认交易，包括交易的交易数，交易额，Token交易笔数，总合约交易笔数等。</h2>
            <div class="page-header"><!---->
                <div class="inner_content">
                    <div class="header">
                        <div class="lt"><span class="title">交易</span></div>
                    </div>
                    <div data-v-603f4bbb="">


                        <!--                                最新交易列表 开始  -->
                        <div data-v-603f4bbb="" class="pending_list pc btc">
                            <ul data-v-603f4bbb="" class="item title">
                                <li data-v-603f4bbb="" class="inner_item hash">交易哈希</li>
                                <li data-v-603f4bbb="" class="inner_item time">时间</li>
                                <li data-v-603f4bbb="" class="inner_item fee">交易金额</li>
                                <!--                                    <li data-v-603f4bbb="" class="inner_item fee">手续费</li>-->
                                <li data-v-603f4bbb="" class="inner_item from">从</li>
                                <li data-v-603f4bbb="" class="inner_item to">到</li>
                            </ul><!---->

                            <ul data-v-603f4bbb="" class="item content" v-for="(item,index) in TxListDatas" :key="index">
                                <li data-v-603f4bbb="" class="inner_item hash">
                                    <router-link :to="{ name:'tx',query:{txid:item.txid } }">{{ item.txid }}</router-link>
                                </li>
                                <li data-v-603f4bbb="" class="inner_item time"><span data-v-603f4bbb=""
                                                                                     class="el-tooltip"
                                                                                     aria-describedby="el-tooltip-9935"
                                                                                     tabindex="0">{{ timeformat(item.transtime) }}</span></li>
                                <li data-v-603f4bbb="" class="inner_item fee">{{ item.amount }}</li>
                                <!--                                    <li data-v-603f4bbb="" class="inner_item fee">{{ item.free }}</li>-->
                                <li data-v-603f4bbb="" class="inner_item from"><!----><span data-v-603f4bbb="">{{ item.from }}</span>
                                    <!----></li>
                                <li data-v-603f4bbb="" class="inner_item to"><!----><span data-v-603f4bbb="">{{ item.to }}</span>
                                    <!----></li>
                            </ul>

                        </div>
                        <!--                                最新交易列表 结束  -->


                        <!--                                最新交易列表-手机端 开始  -->
                        <div data-v-603f4bbb="" class="mobileList"><!---->
                            <ul data-v-603f4bbb="" class="items" v-for="(item,index) in TxListDatas" :key="index">
                                <div data-v-603f4bbb="" class="item">
                                    <div data-v-603f4bbb="" class="key">交易哈希</div>
                                    <div data-v-603f4bbb="" class="value"><a data-v-603f4bbb=""
                                                                             href="/tx"
                                                                             rel="nofollow">{{ item.txid }}</a>
                                    </div>
                                </div>
                                <div data-v-603f4bbb="" class="item">
                                    <div data-v-603f4bbb="" class="key">时间</div>
                                    <div data-v-603f4bbb="" class="value"><span data-v-603f4bbb=""
                                                                                class="el-tooltip"
                                                                                aria-describedby="el-tooltip-6781"
                                                                                tabindex="0">{{ timeformat(item.transtime) }}</span></div>
                                </div>
                                <div data-v-603f4bbb="" class="item">
                                    <div data-v-603f4bbb="" class="key">交易金额</div>
                                    <div data-v-603f4bbb="" class="value">
                                        {{ item.amount }}
                                    </div>
                                </div>
                                <div data-v-603f4bbb="" class="item">
                                    <div data-v-603f4bbb="" class="key">从</div>
                                    <div data-v-603f4bbb="" class="value"><!----><span data-v-603f4bbb="">{{ item.from }}</span>
                                        <!----></div>
                                </div>
                                <div data-v-603f4bbb="" class="item">
                                    <div data-v-603f4bbb="" class="key">到</div>
                                    <div data-v-603f4bbb="" class="value"><!----><span data-v-603f4bbb="">{{ item.to }}</span>
                                        <!----></div>
                                </div>
                            </ul>
                        </div>
                        <!--                                最新交易列表-手机端 结束  -->


                    </div>

                    <div data-v-7b0e1c95="">
                        <div data-v-5d77fed0="" data-v-7b0e1c95="" class="turn_page">
                            <div data-v-5d77fed0="" class="page_box">
                                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                                               :current-page="pagenum" :page-sizes="[20,50,100]" :page-size="pageSize"
                                               layout="total, sizes, prev, pager, next, jumper" :total="total">
                                </el-pagination>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>

</template>

<script>
    export default {
        name: "Pending",
        data() {
            return {
                TxListDatas: [],
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
                this.$api.txlist(params).then(res => {
                    that.TxListDatas = res.data
                    that.pagenum = res.pagenum
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
            timeformat(obj){
                if (obj == null) {
                    return null
                }
                let date = new Date(obj * 1000);
                let y = 1900 + date.getYear();
                let m = "0" + (date.getMonth() + 1);
                let d = "0" + date.getDate();
                let h = "0" + date.getHours();
                let mm = "0" + date.getMinutes();
                let s = date.getSeconds();
                return y + "-" + m.substring(m.length - 2, m.length) + "-" + d.substring(d.length - 2, d.length) + " " + h.substring(h.length - 2, h.length) + ":" + mm.substring(mm.length - 2, mm.length) + ":" + s;
            }
        },
        created() {
            this.getList()
        }
    }
</script>

<style>
    @import url("../../assets/css/pending.css");
</style>