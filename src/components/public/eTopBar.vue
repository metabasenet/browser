<template>

    <div>
    <div class="layout-header" data-v-02b3c3b7>
        <div class="head cn">
            <div class="topMenu">
                <div class="box">
                    <div class="btns">

                    </div>
                </div>
            </div>
        </div>

        <div class="header_wrap btc">
            <div class="box"><a href="/" data-tracking="coins-header-home"
                                alt="浏览器可查询链上的所有所有信息包括最新爆块，最新交易信息等，区块内的交易等等" title="MNT浏览器">
                <div class="order">
                    <div class="menu icon-menu"></div>
                    <img src="../../assets/images/icon/mnt.png" alt="区块链浏览器" class="coinlogo">
                    <div class="coin_name">MNT 浏览器</div><!----></div>
            </a>
                <div class="inner_header">
                    <div class="rt" style="min-width:500px;">
                        <ul class="bottom"><!---->
                            <li class="item active"><a href="/" alt="" title="MNT浏览器" data-tracking="coins-header-home">首页</a>
                            </li>
                            <li class="item active"><a href="rank" alt="" title="MNT浏览器" data-tracking="coins-header-home">富豪榜</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>


        <div class="mobile_header">
            <div class="head_menu"><a href="/" data-tracking="coins-header-home">
                <div class="coin_name"><img src="../../assets/images/icon/mnt.png" alt="" class="icon">
                    MNT 浏览器
                    <!----></div>
            </a>
                <div class="menu openmenu"></div>
            </div><!---->
        </div>



    </div>

    <div class="search_area" data-v-4196e052 data-v-02b3c3b7>
        <div class="search_box" data-v-4196e052>
            <div class="filter_box" data-v-4196e052>
                <el-select v-model="value">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <input type="text" placeholder="搜索地址，交易，区块" value="" class="search" data-v-4196e052 v-model="search_text">
            <div class="search_btn" data-v-4196e052 @click="search()">搜索</div><!----></div>
        <div class="header_tips" data-v-4196e052></div><!----><!----></div>

    </div>
</template>


<script>
    export default {
        name: "eTopBar",
        data() {
            return {
                options: [{
                    value: 1,
                    label: '地址'
                }, {
                    value: '2',
                    label: '区块'
                }, {
                    value: '3',
                    label: '交易'
                }],
                value: 1,
                search_text:''
            }
        },

        methods: {
            search(){
                if(this.value == 1){
                    this.$router.push({ path: "address", query: { address: this.search_text } });
                }else if(this.value == 2){
                    this.$router.push({ path: "block", query: { hash: this.search_text } });
                }else{
                    this.$router.push({ path: "tx", query: { txid: this.search_text } });
                }
            }
        },

        created() {}
    }
</script>
