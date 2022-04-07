<template>
    <div>

        <div data-v-7b0e1c95="" data-v-520cdd27="" class="content-child"><h1 data-v-7b0e1c95="" class="h1">
            MNT浏览器查询链上最新爆块，爆块时间，区块大小，播报方。</h1>
            <h2 data-v-7b0e1c95="" class="h2">MNT浏览器展示最新爆块，包括最新爆块时间，tps, 平均出块时间，区块高度，播报方，大小，奖励，交易笔数，交易总额。</h2>
            <div data-v-7b0e1c95="" class="page-header">
                <div data-v-7b0e1c95="" class="inner_content">
                    <div data-v-7b0e1c95="" class="header">
                        <div data-v-7b0e1c95="" class="lt"><span data-v-7b0e1c95="" class="title">最新爆块</span></div>
                    </div>

                    <div data-v-ce118d7e="" data-v-7b0e1c95="">

                        <!--                                最新爆块列表  开始  -->
                        <div data-v-ce118d7e="" class="block_list">
                            <ul data-v-ce118d7e="" class="item title">
                                <li data-v-ce118d7e="" class="inner_item miner">区块高度</li>
                                <li data-v-ce118d7e="" class="inner_item miner">播报方</li>
                                <li data-v-ce118d7e="" class="inner_item prize">爆块奖励</li>
                                <li data-v-ce118d7e="" class="inner_item miner">交易数量</li>
                                <li data-v-ce118d7e="" class="inner_item miner">上一区块</li>
                                <li data-v-ce118d7e="" class="inner_item time">时间</li>
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
                        <!--                                最新爆块列表  结束  -->

                        <!--                                最新爆块手机端列表  开始  -->
                        <div data-v-ce118d7e="" class="mobileList">
                            <div data-v-ce118d7e="" class="items" v-for="(item,index) in BlocklistDatas" :key="index">
                                <div data-v-ce118d7e="" class="item">
                                    <div data-v-ce118d7e="" class="value">
                                        <router-link :to="{ name:'block',query:{height:item.height } }">{{ item.height }}</router-link>
                                    </div>
                                </div>
                                <div data-v-ce118d7e="" class="item">
                                    <div data-v-ce118d7e="" class="key">播报方</div>
                                    <div data-v-ce118d7e="" class="value"><a data-v-ce118d7e=""
                                                                             href="javascript:void(0)">{{ item.reward_address }}</a>
                                    </div>
                                </div><!---->
                                <div data-v-ce118d7e="" class="item">
                                    <div data-v-ce118d7e="" class="key">
                                        爆块奖励
                                    </div>
                                    <div data-v-ce118d7e="" class="value">{{ item.reward_money }}</div>
                                </div>
                                <div data-v-ce118d7e="" class="item">
                                    <div data-v-ce118d7e="" class="key">交易数量</div>
                                    <div data-v-ce118d7e="" class="value"><a data-v-ce118d7e=""
                                                                             href="javascript:void(0)">{{ item.txs }}</a>
                                    </div>
                                </div><!---->
                                <div data-v-ce118d7e="" class="item">
                                    <div data-v-ce118d7e="" class="key">上一区块</div>
                                    <div data-v-ce118d7e="" class="value"><a data-v-ce118d7e=""
                                                                             href="javascript:void(0)">{{ item.prev_hash }}</a>
                                    </div>
                                </div><!---->
                                <div data-v-ce118d7e="" class="item">
                                    <div data-v-ce118d7e="" class="key">时间</div>
                                    <div data-v-ce118d7e="" class="value">
                                        <div data-v-ce118d7e=""><span class="el-tooltip"
                                                                      aria-describedby="el-tooltip-4340"
                                                                      tabindex="0">{{ timeformat(item.time) }}</span></div>
                                    </div>
                                </div><!----><!---->


                            </div>
                        </div>
                        <!--                                最新爆块手机端列表  结束  -->

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