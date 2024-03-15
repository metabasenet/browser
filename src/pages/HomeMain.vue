<template>
  <div class="common-layout">
    <el-container class="container-xxl">
      <el-main >
        <el-row :gutter="20" class="ContentPlaceHolder1_mainboxes " style="margin-left:-1px">
      <el-col :span="12" :xs="24" :sm="12" :md="12" :lg="12" style="padding-right:2.8125rem" >
       <div class="card-box">
        <div class="card-left">
          <el-icon :size="30" style="margin-right:10px;margin-top:10px"><Compass /></el-icon>
          <div class="card">
          <p class="card_p">BNB PRICE</p>
          <el-link> $524.59 @ 0.007508 BTC (+4.02%)</el-link>
        </div>
        </div>
       </div>
      </el-col>
      <el-col class="card-boxright" :span="12" :xs="24" :sm="12" :md="12" :lg="12">
        <div class="card-box ">
          <div class="card-left">
            <el-icon :size="30" style="margin-right:10px;margin-top:10px"><View /></el-icon>
          <div class="card">
          <p class="card_p">TTRANSACTIONS</p>
          <el-link> 5,469.16 M (65.2 TPS)</el-link>
        </div>
          </div>
        <div class="card-right">
          <p class="card_p">MED GAS PRICE</p>
          <el-link> 3 Gwei ($0.03)</el-link>
        </div>
        </div>
      </el-col>
      <el-col :span="12" :xs="24" :sm="12" :md="12" :lg="12" style="padding-right:2.8125rem">
        <div class="card-box">
        <div class="card-left">
          <el-icon :size="30" style="margin-right:10px;margin-top:10px"><Clock /></el-icon>
          <div class="card">
          <p class="card_p">BNB MARKET CAP ON BSC</p>
          <el-link> $12,653,201,507.00 (23,985,641 BNB)</el-link>
        </div>
        </div>
        </div>
      </el-col>
      <el-col class="card-boxright" :span="12" :xs="24" :sm="12" :md="12" :lg="12">
        <div class="card-box ">
          <div class="card-left">
            <el-icon :size="30" style="margin-right:10px;margin-top:10px"><Odometer /></el-icon>
          <div class="card">
          <p class="card_p">LATEST BLOCK</p>
          <el-link> 36871960 (3.0s)</el-link>
        </div>
          </div>
        <div class="card-right">
          <p class="card_p">MED GAS PRICE</p>
          <el-link> 3 Gwei ($0.03)</el-link>
        </div>
        </div>
      </el-col>
        </el-row>
        <el-row :gutter="20" class="ContentPlaceHolder1">
          <el-col :span="11" :xs="24" :sm="24" :md="10" :lg="11" class="ContentPlaceHolder1_mainboxes ">
            <div class="card-header">
              <h4>Latest Blocks</h4>
              <el-button><el-icon><Star /></el-icon>Customize</el-button>
            </div>
            <ul class="card-ul">
              <li class="card-li">
                <div class="d-flex">
                  <el-icon size="20px" style="margin-right:10px"><Pointer /></el-icon>
                  <div>
                    <router-link to="/block">
                      36890859
      </router-link>
                    <p>6 secs ago</p>
                  </div>
                </div>
                <div class="b-flex">
                    <el-link>Validator: Certik</el-link>
                    <div><el-link>210 txns</el-link>
                    <span>in 3 secs</span></div>
                </div>
                <el-tooltip content="Copy Address" placement="top"><div class="c-flex">
                <p>0.04532 BNB</p>
               </div></el-tooltip>
              </li>
              <li class="card-li">
                <div class="d-flex">
                  <el-icon size="20px" style="margin-right:10px"><Pointer /></el-icon>
                  <div>
                    <router-link to="/block">
                      36890859
      </router-link>
                    <p>6 secs ago</p>
                  </div>
                </div>
                <div class="b-flex">
                    <el-link>Validator: Certik</el-link>
                    <div><el-link>210 txns</el-link>
                    <span>in 3 secs</span></div>
                </div>
                <el-tooltip content="Copy Address" placement="top"><div class="c-flex">
                <p>0.04532 BNB</p>
               </div></el-tooltip>
              </li>
              <li class="card-li">
                <div class="d-flex">
                  <el-icon size="20px" style="margin-right:10px"><Pointer /></el-icon>
                  <div>
                    <router-link to="/block">
                      36890859
      </router-link>
                    <p>6 secs ago</p>
                  </div>
                </div>
                <div class="b-flex">
                    <el-link>Validator: Certik</el-link>
                    <div><el-link>210 txns</el-link>
                    <span>in 3 secs</span></div>
                </div>
                <el-tooltip content="Copy Address" placement="top"><div class="c-flex">
                <p>0.04532 BNB</p>
               </div></el-tooltip>
              </li>
              <li class="card-li">
                <div class="d-flex">
                  <el-icon size="20px" style="margin-right:10px"><Pointer /></el-icon>
                  <div>
                    <router-link to="/block">
                      36890859
      </router-link>
                    <p>6 secs ago</p>
                  </div>
                </div>
                <div class="b-flex">
                    <el-link>Validator: Certik</el-link>
                    <div><el-link>210 txns</el-link>
                    <span>in 3 secs</span></div>
                </div>
                <el-tooltip content="Copy Address" placement="top"><div class="c-flex">
                <p>0.04532 BNB</p>
               </div></el-tooltip>
              </li>
              <li class="card-li">
                <div class="d-flex">
                  <el-icon size="20px" style="margin-right:10px"><Pointer /></el-icon>
                  <div>
                    <router-link to="/block">
                      36890859
      </router-link>
                    <p>6 secs ago</p>
                  </div>
                </div>
                <div class="b-flex">
                    <el-link>Validator: Certik</el-link>
                    <div><el-link>210 txns</el-link>
                    <span>in 3 secs</span></div>
                </div>
                <el-tooltip content="Copy Address" placement="top"><div class="c-flex">
                <p>0.04532 BNB</p>
               </div></el-tooltip>
              </li>
              <li class="card-li">
                <div class="d-flex">
                  <el-icon size="20px" style="margin-right:10px"><Pointer /></el-icon>
                  <div>
                    <router-link to="/block">
                      36890859
      </router-link>
                    <p>6 secs ago</p>
                  </div>
                </div>
                <div class="b-flex">
                    <el-link>Validator: Certik</el-link>
                    <div><el-link>210 txns</el-link>
                    <span>in 3 secs</span></div>
                </div>
               <el-tooltip content="Copy Address" placement="top"><div class="c-flex">
                <p>0.04532 BNB</p>
               </div></el-tooltip>
              </li>
            </ul>
            <div class="card-footer">
              <router-link to="/blocks">
                VIEW ALL BLOCKS<el-icon><Right /></el-icon>
      </router-link>
            </div>
          </el-col>
          <el-col :span="11" :xs="24" :sm="24" :md="10" :lg="11" class="ContentPlaceHolder1_mainboxes">
            <div class="card-header">
              <h4>Latest Transactions</h4>
              <el-button><el-icon><Star /></el-icon>Customize</el-button>
            </div>
            <ul class="card-ul">
              <li class="card-li">
                <div class="d-flex">
                  <el-icon size="20px" style="margin-right:10px"><Pointer /></el-icon>
                  <div>
                    <el-link>0xc793ba720b7fc6...</el-link>
                    <p>6 secs ago</p>
                  </div>
                </div>
                <div class="b-flex">
                 <div class="flex_from"><h4>From</h4>
                    <el-link>0x70F65716...334f28e18</el-link></div>
                    <div class="flex_to"><h4>to</h4><el-link>0x00000000...000001000</el-link>
                    </div>
                </div>
               <el-tooltip content="Copy Address" placement="top"><div class="c-flex">
                <p>0.04532 BNB</p>
               </div></el-tooltip>
              </li>
              <li class="card-li">
                <div class="d-flex">
                  <el-icon size="20px" style="margin-right:10px"><Pointer /></el-icon>
                  <div>
                    <el-link>0xc793ba720b7fc6...</el-link>
                    <p>6 secs ago</p>
                  </div>
                </div>
                <div class="b-flex">
                 <div class="flex_from"><h4>From</h4>
                    <el-link>0x70F65716...334f28e18</el-link></div>
                    <div class="flex_to"><h4>to</h4><el-link>0x00000000...000001000</el-link>
                    </div>
                </div>
               <el-tooltip content="Copy Address" placement="top"><div class="c-flex">
                <p>0.04532 BNB</p>
               </div></el-tooltip>
              </li>
              <li class="card-li">
                <div class="d-flex">
                  <el-icon size="20px" style="margin-right:10px"><Pointer /></el-icon>
                  <div>
                    <el-link>0xc793ba720b7fc6...</el-link>
                    <p>6 secs ago</p>
                  </div>
                </div>
                <div class="b-flex">
                 <div class="flex_from"><h4>From</h4>
                    <el-link>0x70F65716...334f28e18</el-link></div>
                    <div class="flex_to"><h4>to</h4><el-link>0x00000000...000001000</el-link>
                    </div>
                </div>
               <el-tooltip content="Copy Address" placement="top"><div class="c-flex">
                <p>0.04532 BNB</p>
               </div></el-tooltip>
              </li>
              <li class="card-li">
                <div class="d-flex">
                  <el-icon size="20px" style="margin-right:10px"><Pointer /></el-icon>
                  <div>
                    <el-link>0xc793ba720b7fc6...</el-link>
                    <p>6 secs ago</p>
                  </div>
                </div>
                <div class="b-flex">
                 <div class="flex_from"><h4>From</h4>
                    <el-link>0x70F65716...334f28e18</el-link></div>
                    <div class="flex_to"><h4>to</h4><el-link>0x00000000...000001000</el-link>
                    </div>
                </div>
               <el-tooltip content="Copy Address" placement="top"><div class="c-flex">
                <p>0.04532 BNB</p>
               </div></el-tooltip>
              </li>
              <li class="card-li">
                <div class="d-flex">
                  <el-icon size="20px" style="margin-right:10px"><Pointer /></el-icon>
                  <div>
                    <el-link>0xc793ba720b7fc6...</el-link>
                    <p>6 secs ago</p>
                  </div>
                </div>
                <div class="b-flex">
                 <div class="flex_from"><h4>From</h4>
                    <el-link>0x70F65716...334f28e18</el-link></div>
                    <div class="flex_to"><h4>to</h4><el-link>0x00000000...000001000</el-link>
                    </div>
                </div>
               <el-tooltip content="Copy Address" placement="top"><div class="c-flex">
                <p>0.04532 BNB</p>
               </div></el-tooltip>
              </li>
              <li class="card-li">
                <div class="d-flex">
                  <el-icon size="20px" style="margin-right:10px"><Pointer /></el-icon>
                  <div>
                    <el-link>0xc793ba720b7fc6...</el-link>
                    <p>6 secs ago</p>
                  </div>
                </div>
                <div class="b-flex">
                 <div class="flex_from"><h4>From</h4>
                    <el-link>0x70F65716...334f28e18</el-link></div>
                    <div class="flex_to"><h4>to</h4><el-link>0x00000000...000001000</el-link>
                    </div>
                </div>
               <el-tooltip content="Copy Address" placement="top"><div class="c-flex">
                <p>0.04532 BNB</p>
               </div></el-tooltip>
              </li>
            </ul>
            <div class="card-footer">
              <router-link to="/txs">
                View all transactions<el-icon><Right /></el-icon>
              </router-link>
            </div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script  setup>
</script>

<style scoped>
.el-table {
  width: 100%;
}

.el-table th,
.el-table td {
  border: 1px solid #ebeef5;
  padding: 12px 18px;
}

.el-table th {
  background-color: #f5f7ff;
  font-weight: bold;
}

.el-table tr:nth-child(even) {
  background-color: #f5f7ff;
}
.container-xxl{
  background-color: #f5f7f9;
}
.el-link {
  margin-right: 8px;
}
.card{  
  display: flex;
  align-items: flex-start;
  flex-direction: column; 
  padding: 15px;
}
.ContentPlaceHolder1_mainboxes{
 width: 100%;
 border-radius: 15px;
 margin-bottom: 1.25rem;
 background-color: #fff;
 border: 1px solid #dee2e6;
}
.ContentPlaceHolder1{
  display: flex;
  justify-content: space-around;
}
.card-box {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e6e6e6;
  /* margin-right: 10px; */
  margin-left: 10px;
}
/* .card-boxright{
  margin-left: 5.1875rem;
} */
@media (min-width: 768px) {
  .card-box {
    /* flex-direction: row; */
  }
}
/* 在小屏幕下减小间距 */
@media (max-width: 767px) {
  .card-ul,
  .card-li {
    padding: 5px;
    /* 换行 */
    /* flex-wrap: wrap; */
  }
  
  /* 减小字体大小 */
  .card_p, .c-flex p,.b-flex h4 {
    font-size: 8px;
  }
  .el-link {
    font-size: 8px;
  }
}
.card-left{
  display: flex;
}
/* .el-link {
    font-size: 12px;
  } */
.flex_from{
  display: flex;
  flex-wrap: wrap;
}
.flex_to{
  display: flex;
  flex-wrap: wrap;
}
.card-right{
  margin-top: 13px;
}
.card_p{
  font-size: 10px;
}
.card-header{
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  margin-right: 10px;
  margin-left: 10px;
}
.card-ul{
  margin-right: 10px;
  margin-left: 10px;
}
.card-li{
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-top: 1px solid #e6e6e6;
}
.d-flex{
  display: flex;
  justify-content: space-evenly;
}
.d-flex .el-link{
  color: #0784cf;
}
.d-flex .el-icon{
  margin-top: 10px;
}
.d-flex p {
  color: #6c757d;
  font-size: 11px;
}
.b-flex{
  display: flex;
  flex-direction: column
}
.b-flex .el-link{
  color: #0784cf;
}
.b-flex span {
  color: #6c757d;
  font-size: 11px;
}
.b-flex h4{
  margin-right: 10px;
  font-size: 12px;
}
.c-flex{
  font-weight: bold;
  background-color: #fff;
  height: 30px;
  line-height: 30px;
  border: 1px solid #e6e6e6;
  border-radius: 10%;
}
.c-flex p {
  padding: 0 10px;
}
.card-footer{
  text-align: center;
  padding: 15px 0;
  color: #6c757d;
  /* border: 1px solid #e6e6e6; */
  background-color: #f8f9fa;
}
</style>