<template>
    <div>

        <div class="content-child" data-v-02b3c3b7 data-v-02b3c3b7>
<!--            <h1 class="h1">比特币BTC区块链浏览器查询|官网|搭建|下载</h1>-->
            <h2 class="h2">
                区块链浏览器是全球范围内数据最精准，速度最快速的浏览器，用户可以使用区块链浏览器搭建钱包以及使用查询和搜索链上的所有区块链数据信息</h2>
            <div class="p-home">
                <div class="page-network">
                    <div class="count_down"><!----></div>

<!--                                最新爆块 开始  -->
                    <div>
                        <div class="latest_block item1" data-v-135e9942>
                            <div class="header" data-v-135e9942>
                                <div class="title" data-v-135e9942><h2 class="txt" data-v-135e9942>最新爆块</h2></div>
                            </div>
                            <div data-v-ce118d7e="" data-v-135e9942="">
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
                            <a href="blocklist" class="more" data-v-135e9942>
                                <div class="more" data-v-135e9942>
                                    <div data-v-135e9942>查看更多 >></div>
                                </div>
                            </a></div>
                    </div>
<!--                                最新爆块 结束  -->



<!--                                最新交易 开始  -->
                    <div class="pending_wrap" data-v-a7eb4120>
                        <div class="header" data-v-a7eb4120>
                            <div class="title" data-v-a7eb4120><h2 class="txt" data-v-a7eb4120>交易</h2></div>
                        </div>
                        <div data-v-603f4bbb="" data-v-a7eb4120="">
    <!--                                最新交易列表 开始  -->
                            <div data-v-603f4bbb="" class="pending_list pc btc">
                                <ul data-v-603f4bbb="" class="item title">
                                    <li data-v-603f4bbb="" class="inner_item hash">交易哈希</li>
                                    <li data-v-603f4bbb="" class="inner_item time">时间</li>
                                    <li data-v-603f4bbb="" class="inner_item fee">交易金额</li>
                                    <li data-v-603f4bbb="" class="inner_item from">从</li>
                                    <li data-v-603f4bbb="" class="inner_item to">到</li>
                                </ul><!---->

                                <ul data-v-603f4bbb="" class="item content" v-for="(item,index) in TxlistDatas" :key="index">
                                    <li data-v-603f4bbb="" class="inner_item hash">
                                        <router-link :to="{ name:'tx',query:{txid:item.txid } }">{{ item.txid }}</router-link>
                                    </li>
                                    <li data-v-603f4bbb="" class="inner_item time"><span data-v-603f4bbb=""
                                                                                         class="el-tooltip"
                                                                                         aria-describedby="el-tooltip-9935"
                                                                                         tabindex="0">{{ timeformat(item.transtime) }}</span></li>
                                    <li data-v-603f4bbb="" class="inner_item fee">{{ item.amount }}</li>
                                    <li data-v-603f4bbb="" class="inner_item from"><!----><span data-v-603f4bbb="">{{ item.from }}</span>
                                        <!----></li>
                                    <li data-v-603f4bbb="" class="inner_item to"><!----><span data-v-603f4bbb="">{{ item.to }}</span>
                                        <!----></li>
                                </ul>

                            </div>
    <!--                                最新交易列表 结束  -->

    <!--                                最新交易列表-手机端 开始  -->
                            <div data-v-603f4bbb="" class="mobileList"><!---->
                                <ul data-v-603f4bbb="" class="items" v-for="(item,index) in TxlistDatas" :key="index">
                                    <div data-v-603f4bbb="" class="item">
                                        <div data-v-603f4bbb="" class="key">交易哈希</div>
                                        <div data-v-603f4bbb="" class="value">
                                            <router-link :to="{ name:'tx',query:{txid:item.txid } }">{{ item.txid }}</router-link>
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

                        <div class="more" data-v-a7eb4120>
                            <a href="pending" class="more" data-v-135e9942>
                                <div class="more" data-v-135e9942>
                                    <div data-v-135e9942>查看更多 >></div>
                                </div>
                            </a>
                        </div>
                    </div>
<!--                                最新交易 结束  -->


                </div>

            </div>
        </div>
        <div data-zone="C-10160c9c251398bf842" class="coinzilla" data-v-02b3c3b7></div>
    </div>
</template>

<script>
    export default {
        name: "index",
        inject: ['reload'],
        data() {
            return {
                BlocklistDatas: [],
                TxlistDatas: [],
                timer: null  // 定时器
            }
        },
        methods: {
            getList() {
                let params = {};
                let that = this
                this.$api.newblock(params).then(res => {
                    that.BlocklistDatas = res
                });

                this.$api.newtx(params).then(res => {
                    that.TxlistDatas = res
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
            this.getList()
            this.timer = setInterval(() =>{
                this.getList()
            },1000 * 10)
        }
    }
</script>




