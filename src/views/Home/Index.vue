<template>

    <div>
      
        <div class="content-child" data-v-02b3c3b7 data-v-02b3c3b7>

     
<!--            <h1 class="h1"></h1>-->
            <h2 class="h2">
                	{{$t('Index.h2')}}</h2>
            <div class="p-home">
                <div class="page-network">
                    <div class="count_down"><!----></div>

<!--                                block pc start -->
                    <div>
                        <div class="latest_block item1" data-v-135e9942>
                            <div id="chart" style="width:95%;height:400px;"></div>
                        </div>
                        <div class="latest_block item1" data-v-135e9942>
                            <div class="header" data-v-135e9942>
                                <div class="title" data-v-135e9942><h2 class="txt" data-v-135e9942>{{$t('BlockList.newBlock')}}</h2></div>
                            </div>
                            <div data-v-ce118d7e="" data-v-135e9942="">
    <!--                               block pc start -->
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
    <!--                               block pc end  -->


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
                                            <div data-v-ce118d7e="" class="key">{{$t('BlockList.previousBlock')}}</div>
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
                            <a href="blocklist" class="more" data-v-135e9942>
                                <div class="more" data-v-135e9942>
                                    <div data-v-135e9942>{{$t('common.more')}} >></div>
                                </div>
                            </a></div>
                    </div>
<!--                                block  end  -->



 
                    <div class="pending_wrap" data-v-a7eb4120>
                        <div class="header" data-v-a7eb4120>
                            <div class="title" data-v-a7eb4120><h2 class="txt" data-v-a7eb4120>{{$t('Pending.tx')}}</h2></div>
                        </div>
                        <div data-v-603f4bbb="" data-v-a7eb4120="">
    <!--                              pc start  -->
                            <div data-v-603f4bbb="" class="pending_list pc btc">
                                <ul data-v-603f4bbb="" class="item title">
                                    <li data-v-603f4bbb="" class="inner_item hash">{{$t('Pending.hash')}}</li>
                                    <li data-v-603f4bbb="" class="inner_item time">{{$t('Pending.time')}}</li>
                                    <li data-v-603f4bbb="" class="inner_item fee">{{$t('Pending.amount')}}</li>
                                    <li data-v-603f4bbb="" class="inner_item from">{{$t('Pending.from')}}</li>
                                    <li data-v-603f4bbb="" class="inner_item to">{{$t('Pending.to')}}</li>
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
    <!--                                pc end -->

    <!--                                mobile start  -->
                            <div data-v-603f4bbb="" class="mobileList"><!---->
                                <ul data-v-603f4bbb="" class="items" v-for="(item,index) in TxlistDatas" :key="index">
                                    <div data-v-603f4bbb="" class="item">
                                        <div data-v-603f4bbb="" class="key">{{$t('Pending.hash')}}</div>
                                        <div data-v-603f4bbb="" class="value">
                                            <router-link :to="{ name:'tx',query:{txid:item.txid } }">{{ item.txid }}</router-link>
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
                                        <div data-v-603f4bbb="" class="key">{{$t('Pending.amount')}}</div>
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

                        </div>

                        <div class="more" data-v-a7eb4120>
                            <a href="pending" class="more" data-v-135e9942>
                                <div class="more" data-v-135e9942>
                                    <div data-v-135e9942>{{$t('common.more')}} >></div>
                                </div>
                            </a>
                        </div>
                    </div>
<!--                                mobile end -->


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
                timer: null,  // timer
                chartInfo:[],
                legend:"",
                xAxis:"",
                series:"",
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
            drawChart() { 
                let myChart = this.$echarts.init(document.getElementById("chart"));
                
                let option = {
                    grid: {
                        left: '10%',
                        right: '5%',
                        bottom: '5%',
                        top: '5%'
                     },
                    title: {
                    text: ""
                    },
                    tooltip: {},
                    legend: {
            
                    data:this.legend
                    },
                    xAxis: {
                
                    data: this.xAxis
                
                    },
                    yAxis: {},
                    series:this.series
                };
                
                myChart.setOption(option);
                console.log("option",option);
            },
            getChartData(days) {
                let params = {
                     days:days,
                };
                let that = this
                this.$api.blockstatistics(params).then(res => {
                    that.ranklistDatas = res;
                    that.legend=res.legend;
                    that.xAxis=res.xAxis;        
                    let series= [];
                    for(let serieIndex =0; serieIndex<res.series.length; serieIndex++){               
                        let serie=
                         {
                          name: res.series[serieIndex].name,
                          type: "line",
                          data: res.series[serieIndex].data
                        }
                       series.push(serie)
                    }
                    that.series =series;
       
                   that.drawChart();
          
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
            },
            _isMobile() {
                let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
                return flag;
            }
        },
        created() {
          
        },
        mounted(){
            this.getList()
            let days=31;
            if (this._isMobile()){
                days=8;
            }
            this.getChartData(days)
            this.timer = setInterval(() =>{
                this.getList()
                this.getChartData(days)
            },1000 * 10)
        }
    }
</script>




