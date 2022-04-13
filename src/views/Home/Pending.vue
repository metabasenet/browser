<template>
    <div>

        <div data-v-520cdd27="" class="content-child"><h1 class="h1">{{$t('Pending.h1')}}</h1>
            <h2 class="h2">{{$t('Pending.h2')}}</h2>
            <div class="page-header"><!---->
                <div class="inner_content">
                    <div class="header">
                        <div class="lt"><span class="title">{{$t('Pending.tx')}}</span></div>
                    </div>
                    <div data-v-603f4bbb="">


                        <!--                               pc start -->
                        <div data-v-603f4bbb="" class="pending_list pc btc">
                            <ul data-v-603f4bbb="" class="item title">
                                <li data-v-603f4bbb="" class="inner_item hash">{{$t('Pending.hash')}}</li>
                                <li data-v-603f4bbb="" class="inner_item time">{{$t('Pending.time')}}</li>
                                <li data-v-603f4bbb="" class="inner_item fee">{{$t('Pending.amount')}}</li>
                                <!--                                    <li data-v-603f4bbb="" class="inner_item fee"> Service Charge </li>-->
                                <li data-v-603f4bbb="" class="inner_item from">{{$t('Pending.from')}}</li>
                                <li data-v-603f4bbb="" class="inner_item to">{{$t('Pending.to')}}</li>
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
                        <!--                               pc end -->


                        <!--                                mobile start -->
                        <div data-v-603f4bbb="" class="mobileList"><!---->
                            <ul data-v-603f4bbb="" class="items" v-for="(item,index) in TxListDatas" :key="index">
                                <div data-v-603f4bbb="" class="item">
                                    <div data-v-603f4bbb="" class="key">{{$t('Pending.hash')}}</div>
                                    <div data-v-603f4bbb="" class="value"><a data-v-603f4bbb=""
                                                                             href="/tx"
                                                                             rel="nofollow">{{ item.txid }}</a>
                                    </div>
                                </div>
                                <div data-v-603f4bbb="" class="item">
                                    <div data-v-603f4bbb="" class="key">{{$t('Pending.time')}}</div>
                                    <div data-v-603f4bbb="" class="value"><span data-v-603f4bbb=""
                                                                                class="el-tooltip"
                                                                                aria-describedby="el-tooltip-6781"
                                                                                tabindex="0">{{ timeformat(item.transtime) }}</span></div>
                                </div>
                                <div data-v-603f4bbb="" class="item">
                                    <div data-v-603f4bbb="" class="key">{{$t('Pending.Amount')}}</div>
                                    <div data-v-603f4bbb="" class="value">
                                        {{ item.amount }}
                                    </div>
                                </div>
                                <div data-v-603f4bbb="" class="item">
                                    <div data-v-603f4bbb="" class="key">{{$t('Pending.from')}}</div>
                                    <div data-v-603f4bbb="" class="value"><!----><span data-v-603f4bbb="">{{ item.from }}</span>
                                        <!----></div>
                                </div>
                                <div data-v-603f4bbb="" class="item">
                                    <div data-v-603f4bbb="" class="key">{{$t('Pending.to')}}</div>
                                    <div data-v-603f4bbb="" class="value"><!----><span data-v-603f4bbb="">{{ item.to }}</span>
                                        <!----></div>
                                </div>
                            </ul>
                        </div>
                        <!--                                mobile end -->


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