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
                                :alt="$t('eTopBar.alt')" :title="$t('common.browser')">
                <div class="order">
                    <div class="menu icon-menu"></div>                
                    <img src="../../assets/images/custom/logo.png" alt="$t('common.browser')" class="coinlogo">
                    <div class="coin_name">{{$t('common.browser')}}</div><!----></div>
            </a>
                <div class="inner_header">
                    <div class="rt" style="min-width:500px;">
                        <ul class="bottom"><!---->
                            <li class="item active"><a href="/" alt="" title="$t('common.browser')" data-tracking="coins-header-home">{{$t('eTopBar.home')}}</a>
                            </li>
                            <li class="item active"><a href="rank" alt="" title="$t('common.browser')" data-tracking="coins-header-home">{{$t('eTopBar.rich')}}</a>
                            </li>
                              <li class="item active"><a href="dpos" alt="" title="$t('common.browser')" data-tracking="coins-header-home">dpos</a>
                            </li>
                            <el-select v-model="langFlag" @change="changeLanguages" class="language-select"
                                     :filterable="true"
                                    style="width: 130px;" placeholder="please choose language">
                                <el-option :key="item.value" v-for="item in language"
                                        :label="item.label" :value="item.value">
                                </el-option>
                            </el-select> 
                           <!-- <li class="item active"   title="$t('common.browser')" @mouseover="showLanguage()" >language</li>
                            <div v-show="openLanguage" class="language-menu"  @mouseleave="hideLanguage()">
                                <div @click="chooseLanguage('zh-CN')">中文</div>
                                <div @click="chooseLanguage('en-US')">English</div>
                            </div>-->
                        </ul>
                       
                    </div>
                </div>

            </div>
        </div>


        <div class="mobile_header">
            <div class="head_menu"><a href="/" data-tracking="coins-header-home">
                    <div class="coin_name"><img src="../../assets/images/custom/logo.png" alt="" class="icon"> 
                    {{$t('common.browser')}}
                    <!----></div>
            </a>
                <div :class="{'menu':true, 'openmenu':!openFlag, 'closemenu': openFlag}" @click="toggleMenu"></div>
            </div><!---->

            <ul class="smallUl menu-card" v-if="openFlag">
                <li class="item active"><a href="/" alt="" title="$t('common.browser')" data-tracking="coins-header-home">{{$t('eTopBar.home')}}</a></li>
                <li class="item active"><a href="rank" alt="" title="$t('common.browser')" data-tracking="coins-header-home">{{$t('eTopBar.rich')}}</a></li>
                <li class="item active"><a href="dpos" alt="" title="$t('common.browser')" data-tracking="coins-header-home">dpos</a></li>     
                <el-select v-model="langFlag" @change="changeLanguages" class="language-select"  :default-first-option="true" :filterable="true"
                    style="width: 130px;" placeholder="please choose language">
                    <el-option :key="item.value" v-for="item in language"
                            :label="item.label" :value="item.value">
                    </el-option>
                </el-select> 
            </ul>
           
        </div>



    </div>

    <div class="search_area" data-v-4196e052 data-v-02b3c3b7>
        <div class="search_box" data-v-4196e052>
            <div class="filter_box" data-v-4196e052>
                <el-select v-model="value">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="$t('common.'+item.label)"
                            :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <input type="text" :placeholder="$t('common.placeholder')" value="" class="search" data-v-4196e052 v-model="search_text">
            <div class="search_btn" data-v-4196e052 @click="search()">{{$t('common.search')}}</div><!----></div>
        <div class="header_tips" data-v-4196e052></div><!----><!---->
        </div>
      


    </div>

</template>


<script>
    export default {
        name: "eTopBar",
        data() {
            return {
                options: [{
                    value: 1,
                    label: 'address',
                }, {
                    value: '2',
                    label: 'block'
                }, {
                    value: '3',
                    label: 'tx'
                }],
                value: 1,
                search_text:'',
                openFlag: false,
                openLanguage: false,
                openLanguageDiv:false,
                langFlag: 'zh-CN',
                langText:'中文',
                language: 
                [
                    {
                        value: 'zh-CN',
                        label: '中文'
                    },
                    {
                        value: 'en-US',
                        label: 'English'
                    }
                ],
              
            }
        },

        methods: {
            search(){
                        console.log("111111" , this.value, '222222',this.search_text)
                if(this.value == 1){
                    this.$router.push({ path: "address", query: { hash: this.search_text } });
                }else if(this.value == 2){
                    this.$router.push({ path: "block", query: { hash: this.search_text } });
                }else{
                    this.$router.push({ path: "tx", query: { txid: this.search_text } });
                }
            },
            toggleMenu(){
                this.openFlag =!this.openFlag
   
            },
            chooseLanguage(value){
                this.openLanguage =false
                this.$i18n.locale=value
            },
            showLanguage(){
                this.openLanguage=true
                
            },          
            hideLanguage(){    
                this.openLanguage=false
            },
            changeLanguages() {
                localStorage.setItem('virtualCurrencyLocale', this.langFlag)
                this.$i18n.locale = localStorage.getItem('virtualCurrencyLocale')

                //console.log(this.$i18n.locale)
                //this.$i18n.locale = this.langFlag;
            },
            getDefaultLanguage(){
                var virtualCurrencyLocale=localStorage.getItem('virtualCurrencyLocale')
                if (virtualCurrencyLocale =='en-US'){
                    this.langFlag='en-US'
                    this.langText='English'    
                }
            }

        },

        created() {this.getDefaultLanguage()}
    }
</script>
