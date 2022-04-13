<template>
    <div>

        <div data-v-7b0e1c95="" data-v-520cdd27="" class="content-child"><h1 data-v-7b0e1c95="" class="h1">
            {{$t('BlockList.h1')}}</h1>
            <h2 data-v-7b0e1c95="" class="h2">{{$t('BlockList.h2')}}</h2>
            <div data-v-7b0e1c95="" class="page-header">
                <div data-v-7b0e1c95="" class="inner_content">
                    <div data-v-7b0e1c95="" class="header">
                        <div data-v-7b0e1c95="" class="lt"><span data-v-7b0e1c95="" class="title">{{$t('BlockList.newBlock')}}</span></div>
                    </div>

                    <div data-v-ce118d7e="" data-v-7b0e1c95="">

                        <!--                                block pc start -->
                        <div data-v-ce118d7e="" class="block_list">
                            <ul data-v-ce118d7e="" class="item title">
                                <li data-v-ce118d7e="" class="inner_item miner">{{$t('BlockList.height')}}</li>
                                <li data-v-ce118d7e="" class="inner_item miner">{{$t('BlockList.address')}}</li>
                                <li data-v-ce118d7e="" class="inner_item prize">{{$t('BlockList.reward')}}</li>
                                <li data-v-ce118d7e="" class="inner_item miner">{{$t('BlockList.amount')}}</li>
                                <li data-v-ce118d7e="" class="inner_item miner">{{$t('BlockList.previousBlock')}}</li>
                                <li data-v-ce118d7e="" class="inner_item time">{{$t('BlockList.time')}}</li>
                            </ul>
                            <span data-v-ce118d7e="">
                                        <ul data-v-ce118d7e="" class="item content" v-for="(item,index) in BlocklistDatas" :key="index">
                                            <li data-v-ce118d7e="" class="inner_item height">
                                                <router-link :to="{ name:'block',query:{hash:item.height } }">{{ item.height }}</router-link>
                                            </li>

                                            <li data-v-ce118d7e="" class="inner_item miner">
                                                 <router-link :to="{ name:'address',query:{hash:item.reward_address } }">{{ item.reward_address }}</router-link>
                                            </li>
                                            <li data-v-ce118d7e="" class="inner_item prize">{{ item.reward_money }}</li>
                                            <li data-v-ce118d7e="" class="inner_item miner">
                                                <a data-v-ce118d7e="" href="javascript:void(0)" class="el-tooltip" aria-describedby="el-tooltip-6541" tabindex="0">{{ item.txs }}</a>
                                            </li>
                                            <li data-v-ce118d7e="" class="inner_item miner">
                                                <a data-v-ce118d7e="" href="javascript:void(0)" class="el-tooltip" aria-describedby="el-tooltip-6541" tabindex="0">{{ item.prev_hash }}</a>
                                            </li>
                                            <li data-v-ce118d7e="" class="inner_item time">
                                                <div data-v-ce118d7e="">
                                                    <span class="el-tooltip" aria-describedby="el-tooltip-5279" tabindex="0">{{ timeformat(item.time) }}</span>
                                                </div>
                                            </li>
                                        </ul></span>
                        </div>
                        <!--                                block pc end  -->

                        <!--                               block mobile start -->
                        <div data-v-ce118d7e="" class="mobileList">
                            <div data-v-ce118d7e="" class="items" v-for="(item,index) in BlocklistDatas" :key="index">
                                <div data-v-ce118d7e="" class="item">
                                    {{$t('BlockList.height')}}
                                    <div data-v-ce118d7e="" class="value">
                                        <router-link :to="{ name:'block',query:{height:item.height } }">{{ item.height }}</router-link>
                                    </div>
                                </div>
                                <div data-v-ce118d7e="" class="item">
                                    <div data-v-ce118d7e="" class="key">{{$t('BlockList.address')}}</div>
                                    <div data-v-ce118d7e="" class="value"><a data-v-ce118d7e=""
                                                                             href="javascript:void(0)">{{ item.reward_address }}</a>
                                    </div>
                                </div><!---->
                                <div data-v-ce118d7e="" class="item">
                                    <div data-v-ce118d7e="" class="key">
                                        {{$t('BlockList.reward')}}
                                    </div>
                                    <div data-v-ce118d7e="" class="value">{{ item.reward_money }}</div>
                                </div>
                                <div data-v-ce118d7e="" class="item">
                                    <div data-v-ce118d7e="" class="key">{{$t('BlockList.amount')}}</div>
                                    <div data-v-ce118d7e="" class="value"><a data-v-ce118d7e=""
                                                                             href="javascript:void(0)">{{ item.txs }}</a>
                                    </div>
                                </div><!---->
                                <div data-v-ce118d7e="" class="item">
                                    <div data-v-ce118d7e="" class="key">{{$t('BlockList.previousBlock')}</div>
                                    <div data-v-ce118d7e="" class="value"><a data-v-ce118d7e=""
                                                                             href="javascript:void(0)">{{ item.prev_hash }}</a>
                                    </div>
                                </div><!---->
                                <div data-v-ce118d7e="" class="item">
                                    <div data-v-ce118d7e="" class="key">{{$t('BlockList.time')}}</div>
                                    <div data-v-ce118d7e="" class="value">
                                        <div data-v-ce118d7e=""><span class="el-tooltip"
                                                                      aria-describedby="el-tooltip-4340"
                                                                      tabindex="0">{{ timeformat(item.time) }}</span></div>
                                    </div>
                                </div><!----><!---->


                            </div>
                        </div>
                        <!--                                block mobile end   -->

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
        name: "BlockList",
        data() {
            return {
                BlocklistDatas: [],
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
                this.$api.blocklist(params).then(res => {
                    that.BlocklistDatas = res.data
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
    @import url("../../assets/css/app.css");
</style>