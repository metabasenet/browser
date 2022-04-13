<template>
    <div>
        <div data-v-92014c5c="" data-v-520cdd27="" class="content-child"><h1 data-v-92014c5c="" class="h1">
           {{$t('dpos.h1')}}</h1>
            <h2 data-v-92014c5c="" class="h2">{{$t('dpos.h2')}}</h2>
            <div data-v-92014c5c="" class="baseInfoCard">
                <div data-v-92014c5c="" class="header">
                    <div data-v-92014c5c="" id="rich_list" class="btns">
                        <div data-v-92014c5c="" class="title ontitle">{{$t('dpos.dpos')}}</div>
                    </div>

                </div>
                <div data-v-18b505e9="" data-v-92014c5c="">
                    <div data-v-18b505e9="" class="full">
                        <div data-v-18b505e9="" class="part cp-rich">
                            <div data-v-18b505e9="" class="content">
                                <div data-v-18b505e9="" class="inner">
                                    <div data-v-18b505e9="" class="rich_list">
                                        <li data-v-18b505e9="" class="item">
                                            <div data-v-18b505e9="" class="index dposeindex"><b data-v-18b505e9="">{{$t('dpos.serialNumber')}}</b></div>        
                                            <div data-v-18b505e9="" class="address"><b data-v-18b505e9="">{{$t('dpos.address')}}</b></div>                                        
                                            <div data-v-18b505e9="" class="votes"><b data-v-18b505e9="">{{$t('dpos.vote')}}</b></div>
                                            <div data-v-18b505e9="" class="name"><b data-v-18b505e9="">{{$t('dpos.name')}}</b></div>                                 
                                        </li>
                                        <li data-v-18b505e9="" class="item" v-for="(item,index) in dposlistDatas" :key="index">
                                            <div data-v-18b505e9="" class="index dposeindex">{{ index+1}}</div>
                                            <!--<div data-v-18b505e9="" class="address" :title="item.address">
                                                <a data-v-18b505e9="" href="javascript:void(0)" @click="openTip(item.address)" class="hash">
                                                    <span data-v-18b505e9="" class="el-tooltip" aria-describedby="el-tooltip-6004" tabindex="0">
                                                        {{ item.address }}
                                                    </span></a>

                                            </div>-->
                                            <div data-v-18b505e9="" class="address" :title="item.address">
                                                <a data-v-18b505e9="" href="javascript:void(0)" @click="handleWindow(item.address)" class="hash">
                                                    <span data-v-18b505e9="" class="el-tooltip" aria-describedby="el-tooltip-6004" tabindex="0">
                                                        {{ item.address }}
                                                    </span></a>

                                            </div>
                                            <div data-v-18b505e9="" class="votes">{{ item.votes }}</div>
                                            <div data-v-18b505e9="" class="name">{{ item.name }}</div>
                                        </li>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div data-v-18b505e9="" class="mobile">
                            <div data-v-18b505e9="" class="items" v-for="(item,index) in dposlistDatas" :key="index">
                                <div data-v-18b505e9="" class="item hash">
                                    <div data-v-18b505e9="" class="key">{{$t('dpos.address')}}</div>
                                    <div data-v-18b505e9="" class="value">
                                        <div data-v-18b505e9="" class="address"><a data-v-18b505e9=""
                                                                                   href="javascript:void(0)" @click="handleWindow(item.address)"
                                                                                   class="hash">{{ item.address }}</a>
                                        </div>
                                    </div>
                                </div>
                                <div data-v-18b505e9="" class="item">
                                    <div data-v-18b505e9="" class="key">{{$t('dpos.vote')}}</div>
                                    <div data-v-18b505e9="" class="value">
                                        <div data-v-18b505e9="" class="amount">{{ item.votes }}</div>
                                    </div>
                                </div>
                                <div data-v-18b505e9="" class="item">
                                    <div data-v-18b505e9="" class="key">{{$t('dpos.name')}}</div>
                                    <div data-v-18b505e9="" class="value">{{ item.name }}</div>
                                </div>
                             
                            </div>
                        </div>



                    </div>
                </div><!----></div>
        </div>
        <alert-tip v-if="showa" @closeTip="closeTip" :address="address"></alert-tip>
    </div>
 
</template>


<script>
 
    export default {
        name: "dpos",
        data() {
            return {
                dposlistDatas: [],
                  showa:false,
                  address:''
            }
        },
        methods: {
            getList() {
                let params = {
                    page: this.pagenum,
                    pagesize: this.pageSize
                };
                let that = this
                this.$api.listdelegate(params).then(res => {
                    that.dposlistDatas = res                  
                   
                });
            },
            closeTip(){
                this.showa=false
            },
              openTip(address){
                this.address =address;
                this.showa=true;
                console.log(this.showa);
              },
             handleWindow(dposAddress) {                
                var route = this.$router.resolve({
                    name: 'dposDetail',
                })               
                sessionStorage.setItem("dposAddress", dposAddress);                
                window.open(route.href, '_blank')
                } 

         
        },
        created() {         
            this.getList()               
        },
      
    }
</script>

<style>
    @import url("../../assets/css/app.css");
    @import url("../../assets/css/rank.css");
    @import url("../../assets/css/dpos.css");

    h1, h2 {
  font-weight: normal;
}
 
ul {
  list-style-type: none;
  padding: 0;
}
 
li {

}
 
a {
  color: #2d8cf0;
}
</style>