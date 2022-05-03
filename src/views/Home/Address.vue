<template>
    <div>
        <div data-v-520cdd27="" class="page-address content-child">
            <div data-v-1a6f007e="" query="[object Object]"><!---->
                <section data-v-1a6f007e="" class="section">
                    <div data-v-6f78b530="" data-v-1a6f007e="">
                        <div data-v-6f78b530="" class="baseInfoCard">
                            <div data-v-6f78b530="" class="header">
                                <div data-v-6f78b530="" class="title">{{$t('Address.addressInfo')}}</div>
                            </div>
                            <div data-v-6f78b530="" class="content">
                                <div data-v-6f78b530="" class="item hash">
                                    <div data-v-6f78b530="" class="key">{{$t('Address.address')}}<!----></div>
                                    <div data-v-6f78b530="" class="val">{{ address }}</div>
                                </div><!----><!---->
                                <div data-v-6f78b530="" class="item">
                                    <div data-v-6f78b530="" class="key">{{$t('Address.balance')}}</div>
                                    <div data-v-6f78b530="" class="value">
                                        {{ balance }} {{ virtualCurrencyUnit }}
                                    </div>
                                </div>
                                <div data-v-6f78b530="" class="item">
                                    <div data-v-6f78b530="" class="key">{{$t('Address.locked')}}</div>
                                    <div data-v-6f78b530="" class="value">
                                        {{ locked }} {{ virtualCurrencyUnit }}
                                    </div>
                                </div>
                                <div data-v-6f78b530="" class="item">
                                    <div data-v-6f78b530="" class="key">{{$t('Address.totalRevenue')}}</div>
                                    <div data-v-6f78b530="" class="value">
                                        {{ income }} {{ virtualCurrencyUnit }}
                                    </div>
                                </div>
                                <div data-v-6f78b530="" class="item">
                                    <div data-v-6f78b530="" class="key">{{$t('Address.totalTransferOut')}}</div>
                                    <div data-v-6f78b530="" class="value">
                                        {{ expend }} {{ virtualCurrencyUnit }}
                                    </div>
                                </div>
                                <div data-v-6f78b530="" class="item">
                                    <div data-v-6f78b530="" class="key">{{$t('Address.rank')}}</div>
                                    <div data-v-6f78b530="" class="value">{{ rank }}</div>
                                </div>
                                 <div data-v-6f78b530="" class="item">
                                    <div data-v-6f78b530="" class="key">nonce</div>
                                    <div data-v-6f78b530="" class="value">{{ nonce }}</div>
                                </div>
                                <!----><!----><!---->
                            </div>
                        </div>
                    </div>
                    <div data-v-1a6f007e="" class="baseInfoCard">
                        <div data-v-1a6f007e="" class="header">
                            <div data-v-1a6f007e="" class="title">{{$t('Address.transactions')}}</div>
                        </div><!---->




                        <div data-v-bfa74ae2="" data-v-1a6f007e="" class="txs_box">
                            <ul data-v-bfa74ae2="" class="tx-ul ">
                                <li data-v-bfa74ae2="" v-for="(item,index) in TxListDatas"><!---->
                                    <div data-v-bfa74ae2="" class="tx_baseinfo">
                                        <div data-v-bfa74ae2="" class="left">
                                            <div data-v-bfa74ae2="" class="title">{{$t('Address.hash')}}</div><!---->
                                            <router-link :to="{ name:'tx',query:{txid:item.txid } }">{{ item.txid }}</router-link>
                                        </div>
                                        <div data-v-bfa74ae2="" class="right">
                                            <div data-v-bfa74ae2=""><span data-v-bfa74ae2="" class="title">{{$t('Address.time')}}</span>{{ timeformat(item.transtime) }}
                                            </div>
                                        </div>
                                    </div>
                                    <div data-v-4a9378aa="" data-v-bfa74ae2="" class="tx">
                                        <div data-v-4a9378aa="" class="tx_curt none">
                                            <div data-v-4a9378aa="" class="input">
                                                <div data-v-4a9378aa="" class="input_addr">Input</div>
                                            </div>
                                            <div data-v-4a9378aa="" class="output">
                                                <div data-v-4a9378aa="" class="output_addr">Output</div>
                                            </div>
                                        </div><!---->
                                        <div data-v-4a9378aa="" class="tx_detail">
                                            <div data-v-4a9378aa="" class="input">
                                                <div data-v-4a9378aa="" class="item start none">
                                                    <div data-v-4a9378aa="" class="input_addr">Input</div>
                                                </div>
                                                <div data-v-4a9378aa="" class="item">
                                                    <div data-v-4a9378aa="" class="input_addr"><span data-v-4a9378aa=""
                                                                                                     class="hash coinbase"><span
                                                            data-v-4a9378aa="" class="el-tooltip"
                                                            aria-describedby="el-tooltip-2085"
                                                            tabindex="0">{{ item.from }}</span></span></div>
                                                    <div data-v-4a9378aa="" class="input_value">{{ item.amount }} {{ virtualCurrencyUnit }}</div>
                                                </div><!----></div>
                                            <img data-v-4a9378aa=""
                                                 src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzBweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMzAgMTgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjIgKDc4MTgxKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5GaWxsIDHlpIfku70gMzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSLpobXpnaIxIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIwLjIwMDAwMDAwMyI+CiAgICAgICAgPGcgaWQ9IuW+heehruiupOS6pOaYkyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYyNy4wMDAwMDAsIC00MjEuMDAwMDAwKSIgZmlsbD0iIzAwMjJBOSI+CiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJGaWxsLTHlpIfku70tMyIgcG9pbnRzPSI2NTAuNjMxMjgyIDQyOC4zNjM3NjUgNjI3IDQyOC4zNjM3NjUgNjI3IDQzMS42MzY0NzUgNjUwLjYzMTI4MiA0MzEuNjM2NDc1IDY0NS40MzU2MzIgNDM2LjcwOTE2MSA2NDcuNzgyMTEgNDM5IDY1NyA0MzAuMDAwMTIgNjQ3Ljk0OTc0IDQyMSA2NDUuNjAzMjYyIDQyMy4yOTA4MzkiPjwvcG9seWdvbj4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="
                                                 alt="" class="jiantou">
                                            <div data-v-4a9378aa="" class="output">
                                                <div data-v-4a9378aa="" class="item start none">
                                                    <div data-v-4a9378aa="" class="output_addr">Output</div>
                                                </div>
                                                <div data-v-4a9378aa="" class="item">
                                                    <div data-v-4a9378aa="" class="output_addr"><span
                                                            data-v-4a9378aa="">{{ item.to }}</span>
                                                    </div>
                                                    <div data-v-4a9378aa="" class="output_value">{{ item.amount }} {{ virtualCurrencyUnit }}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-v-4a9378aa="" class="bottom-btn">
                                            <div data-v-4a9378aa="" class="left"><!----></div>
                                            <div data-v-4a9378aa="" class="right"><!---->
                                                <div data-v-4a9378aa=""><span data-v-4a9378aa=""
                                                                              class="title">{{$t('Address.block')}}</span>
                                                    <router-link :to="{ name:'block',query:{hash:item.block_hash } }">{{ item.block_hash }}</router-link>
                                                </div>
                                                <!---->
                                                <div data-v-4a9378aa=""><span data-v-4a9378aa=""
                                                                              class="title">{{$t('Address.txFee')}}</span>{{ item.fee }}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
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
        </section>
    </div><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----></div>


    </div>
</template>

<script>

    export default {
        name: "Address",
        data() {
            return {
                address:'',
                balance:'',
                locked:'',
                nonce:'',
                income:'',
                expend:'',
                rank:'',
                TxListDatas: [],
                pageSize: 20,
                pagenum: 1,
                total: 0,
                virtualCurrencyUnit:this.globalString.virtualCurrencyUnit ,
            }

        },
        methods: {
            getaddressinfo(){
                let params = {
                    address:this.address,
                    page: this.pagenum,
                    pagesize: this.pageSize
                 
                };
                console.log('params',params);
                let that = this
                this.$api.address(params).then(res => {
                  console.log("res",res);
                    that.balance = res.balance
                    that.income = res.income
                    that.expend = res.expend
                    that.rank = res.rank
                    that.TxListDatas = res.data.data
                      console.log(that.TxListDatas) ;
                    that.pagenum = res.data.pagenum
                    that.pageSize = res.data.pagesize
                    that.total = res.data.total
                });
            },
            getBalanceInfo(){
                let params={
                    address:this.address,
                    symbol:'HAH',                 
                };
                let that=this
                this.$api.balance(params).then(res=>{
                    console.log('res',res);
                    that.locked = res.locked
                    that.nonce = res.nonce
                });

            },
            handleSizeChange(newSzie) {
                this.pageSize = newSzie
                this.getaddressinfo()
            },
            handleCurrentChange(newPage) {
                this.pagenum = newPage
                this.getaddressinfo()
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
              console.log("11111111111", this.$route.query)
            this.address = this.$route.query.hash
         
            //alert(this.address)
            this.getaddressinfo()
            this.getBalanceInfo()
        }
    }


</script>

<style>
    @import url("../../assets/css/block.css");
</style>
