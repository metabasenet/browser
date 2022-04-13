<template>
    <div>
        <div data-v-92014c5c="" data-v-520cdd27="" class="content-child"><h1 data-v-92014c5c="" class="h1">
           {{$t('dposDetail.h1')}}</h1>
            <h2 data-v-92014c5c="" class="h2">{{$t('dposDetail.h2')}}</h2>
            <div data-v-92014c5c="" class="baseInfoCard">
                <div data-v-92014c5c="" class="header">
                    <div data-v-92014c5c="" id="rich_list" class="btns" style="width:95%;">
                        <div data-v-92014c5c="" class="title ontitle">{{$t('dposDetail.dposDetail')}} {{dposAddress}}</div>                   
                    </div>
                </div>
                <div data-v-18b505e9="" data-v-92014c5c="">
                    <div data-v-18b505e9="" class="full">
                        <div data-v-18b505e9="" class="part cp-rich">
                            <div data-v-18b505e9="" class="content">
                                <div data-v-18b505e9="" class="inner">
                                    <div data-v-18b505e9="" class="rich_list">
                                        <li data-v-18b505e9="" class="item">
                                           <div data-v-18b505e9="" class="index dposeindex"><b data-v-18b505e9="">{{$t('dposDetail.serialNumber')}}</b></div>      
                                            <div data-v-18b505e9="" class="address"><b data-v-18b505e9="">{{$t('dposDetail.address')}}</b></div>                                        
                                            <div data-v-18b505e9="" class="type"><b data-v-18b505e9="">{{$t('dposDetail.amount')}}</b></div>
                                   
                                            <div data-v-18b505e9="" class="time"><b data-v-18b505e9="">{{$t('dposDetail.time')}}</b></div> 
                                            <div data-v-18b505e9="" class="height"><b data-v-18b505e9="">{{$t('dposDetail.height')}}</b></div>       
                                            <div data-v-18b505e9="" class="voteState"><b data-v-18b505e9="">{{$t('dposDetail.voteType')}}</b></div>                                           
                                        </li>
                                        
                                        <li data-v-18b505e9="" class="item" v-for="(item,index) in dposlistDetailDatas" :key="index">
                                            <div data-v-18b505e9="" class="index dposeindex">{{ index+1}}</div>                                 
                                            <div data-v-18b505e9="" class="address" :title="item.client_address">
                                                <a data-v-18b505e9="" href="javascript:void(0)"  class="hash">
                                                    <span data-v-18b505e9="" class="el-tooltip" aria-describedby="el-tooltip-6004" tabindex="0">
                                                        {{ item.client_address }}
                                                    </span></a>

                                            </div>
                                            <div data-v-18b505e9="" class="type">{{ item.amount }}</div>
                                 
                                             <div data-v-18b505e9="" class="time">{{ item.time }}</div>
                                              <div data-v-18b505e9="" class="height">{{ item.height }}</div>
                                               <div data-v-18b505e9="" class="voteState">{{ $t('dposDetail.data'+item.voteState)}}</div>
                                 
                                        </li>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div data-v-18b505e9="" class="mobile">
                            <div data-v-18b505e9="" class="items" v-for="(item,index) in dposlistDetailDatas" :key="index">
                                <div data-v-18b505e9="" class="item">
                                    <div data-v-18b505e9="" class="key">{{$t('dposDetail.serialNumber')}}</div>
                                    <div data-v-18b505e9="" class="value">
                                        <div data-v-18b505e9="" class="amount">{{index+1}}</div>
                                    </div>
                                </div>


                                <div data-v-18b505e9="" class="item hash">
                                    <div data-v-18b505e9="" class="key">{{$t('dposDetail.address')}}</div>
                                    <div data-v-18b505e9="" class="value">
                                        <div data-v-18b505e9="" class="client_address"><a data-v-18b505e9=""
                                                                                   href="javascript:void(0)"
                                                                                   class="hash">{{ item.client_address }}</a>
                                        </div>
                                    </div>
                                </div>
                                <div data-v-18b505e9="" class="item">
                                    <div data-v-18b505e9="" class="key">{{$t('dposDetail.amount')}}</div>
                                    <div data-v-18b505e9="" class="value">
                                        <div data-v-18b505e9="" class="amount">{{ item.amount }}</div>
                                    </div>
                                </div>
                           

                                <div data-v-18b505e9="" class="item">
                                    <div data-v-18b505e9="" class="key">{{$t('dposDetail.time')}}</div>
                                    <div data-v-18b505e9="" class="value">{{ item.time }}</div>
                                </div>

                                <div data-v-18b505e9="" class="item">
                                    <div data-v-18b505e9="" class="key">{{$t('dposDetail.height')}}</div>
                                    <div data-v-18b505e9="" class="value">{{ item.height }}</div>
                                </div>
                             
                                <div data-v-18b505e9="" class="item">
                                    <div data-v-18b505e9="" class="key">{{$t('dposDetail.voteType')}}</div>
                                    <div data-v-18b505e9="" class="value">{{ item.voteState }}</div>
                                </div>

                            </div>
                        </div>
                        <div data-v-7b0e1c95="">
                            <div data-v-5d77fed0="" data-v-7b0e1c95="" class="turn_page">
                                <div data-v-5d77fed0="" class="page_box">
                                    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                                                   :current-page="pagenum" :page-sizes="[20]" :page-size="pageSize"
                                                   layout="total, sizes, prev, pager, next, jumper" :total="total">
                                    </el-pagination>
                                </div>
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
        name: "dpos",
        data() {
            return {
                dposlistDetailDatas: [],
                  showa:false,
                  address:'',
                  dposAddress:'',
                  pageSize: 20,
                  pagenum: 1,
                  total: 0,
                  res:'',
            }
        },
        methods: {
            getList() {
                let params = {
                    page: this.pagenum,
                    pagesize: this.pageSize,
                    dposAddress:this.dposAddress,

                };
               // console.log(params);
                let that = this
                this.$api.listdelegatedetail(params).then(res => {             
                    that.res=res                       
                    that.dposlistDetailDatas = res.data                               
                    that.page = res.pagenum
                    that.pageSize = parseInt(res.pagesize)
                    that.total = res.total 
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
                handleSizeChange(newSzie) {
                this.pageSize = newSzie
                this.getList()
            },
            handleCurrentChange(newPage) {
                this.pagenum = newPage
                this.getList()
            }
         
        },
        created() {
            this.dposAddress = sessionStorage.getItem("dposAddress")     
            this.getList()
        }
        
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