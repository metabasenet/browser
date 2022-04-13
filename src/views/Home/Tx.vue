<template>
    <div>

        <div class="page-tx content-child" data-v-520cdd27="">
            <div params="[object Object]" query="[object Object]" data-v-57312e58="">
                <section class="section" data-v-57312e58="">
                    <div class="baseInfoCard" data-v-57312e58="">
                        <div class="header" data-v-57312e58="">
                            <div class="title" data-v-57312e58="">{{$t('Tx.txInfo')}}</div>
                        </div>
                        <div class="content" data-v-57312e58="">
                            <div class="item hash" data-v-57312e58="">
                                <div class="val" data-v-57312e58="">
                                   {{ txid }}
                                </div>
                            </div><!----><!---->
                            <div class="item" data-v-57312e58="">
                                <div class="key" data-v-57312e58="">{{$t('Tx.block')}}</div>
                                <div class="value" data-v-57312e58="">
                                    <router-link :to="{ name:'block',query:{hash:block_hash } }">{{ block_hash }}</router-link>
                                </div>
                            </div>
                            <div class="item" data-v-57312e58="">
                                <div class="key" data-v-57312e58="">{{$t('Tx.time')}}</div>
                                <div class="value" data-v-57312e58="">{{ transtime }}</div>
                            </div>
                            <div class="item" data-v-57312e58="">
                                <div class="key" data-v-57312e58="">{{$t('Tx.from')}}</div>
                                <div class="value" data-v-57312e58="">{{ form }}</div>
                            </div>
                            <div class="item" data-v-57312e58="">
                                <div class="key" data-v-57312e58="">{{$t('Tx.to')}}</div>
                                <div class="value" data-v-57312e58="">{{ to }}</div>
                            </div>
                            <div class="item" data-v-57312e58="">
                                <div class="key" data-v-57312e58="">{{$t('Tx.txAmount')}}</div>
                                <div class="value" data-v-57312e58="">{{ amount }} {{this.golbal.virtualCurrencyUnit}}</div>
                            </div>
                            <div class="item" data-v-57312e58="">
                                <div class="key" data-v-57312e58="">{{$t('Tx.txFee')}}</div>
                                <div class="value" data-v-57312e58="">
                                    {{ free }}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            </div>
        </div>
</template>

<script>
    export default {
        name: "Tx",
        data() {
            return {
                txid:'',
                block_hash:'',
                form:'',
                to:'',
                amount:'',
                free:'',
                transtime:'',
            }
        },
        methods: {
            gettxinfo(){
                let params = {
                    txid:this.txid,
                };
                let that = this
                this.$api.tx(params).then(res => {
                    that.block_hash = res[0].block_hash
                    that.form = res[0].from
                    that.to = res[0].to
                    that.amount = res[0].amount
                    that.free = res[0].fee
                    that.transtime = that.timeformat(res[0].transtime)
                });
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
            this.txid = this.$route.query.txid
            this.gettxinfo()
        }
    }
</script>

<style>
    @import url("../../assets/css/tx.css");
</style>