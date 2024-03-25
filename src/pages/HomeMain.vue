<template>
  <div class="common-layout">
    <el-container class="container-xxl">
      <el-main>
        <div class="container">
          <el-row justify="center" align="middle">
            <el-col :span="12" :xs="24">
              <h2>MNT Smart Chain Explorer</h2>
            </el-col>
          </el-row>

          <el-row justify="center" align="middle">
            <el-col :span="12" class="drop_search" :xs="20" :sm="18" :md="12" :lg="12">
              <el-input v-model="input3" placeholder="Search by Address Txn Hash Block Token Domain Name"
                style="max-width: 100%;height:100%;border:none" class="input-with-select">
                <template #prepend>
                  <el-select v-model="select" placeholder="Select" style="width: 115px;height:100%">
                    <el-option label="Restaurant" value="1" />
                    <el-option label="Order No." value="2" />
                    <el-option label="Tel" value="3" />
                  </el-select>
                </template>
                <template #append>
                  <el-button type="primary" icon="Search" />
                </template>
              </el-input>

            </el-col>
          </el-row>

          <el-row justify="center" align="middle">
            <el-col :span="12">
              <span>Featured: Bscscan API - Need higher call rates ? <el-link style="color:aqua" href="#"
                  target="_blank">Sign-up
                  for a
                  dedicated plan
                  today!</el-link></span>

            </el-col>
          </el-row>
        </div>
        <el-row :gutter="20" class="ContentPlaceHolder1">
          <el-col :span="11" :xs="24" :sm="24" :md="11" :lg="11" class="ContentPlaceHolder1_mainboxes">
            <div class="card-box">
              <div class="card-left">
                <svg-icon name="phone" width="2rem" height="2rem" style="margin-right: 10px; margin-top: 10px">
                </svg-icon>
                <!-- <el-icon :size="30" style="margin-right: 10px; margin-top: 10px">
                  <Compass />
                </el-icon> -->
                <div class="card">
                  <p class="card_p">MNT PRICE</p>
                  <el-link> $524.59 @ 0.007508 BTC (+4.02%)</el-link>
                </div>
              </div>
            </div>
          </el-col>
          <el-col class="ContentPlaceHolder1_mainboxes card-boxright" :span="11" :xs="24" :sm="24" :md="11" :lg="11">
            <div class="card-box">
              <div class="card-left">
                <el-icon :size="30" style="margin-right: 10px; margin-top: 10px">
                  <View />
                </el-icon>
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
          <el-col class="ContentPlaceHolder1_mainboxes" :span="11" :xs="24" :sm="24" :md="11" :lg="11">
            <div class="card-box">
              <div class="card-left">
                <svg-icon name="globe" width="2rem" height="2rem" style="margin-right: 10px; margin-top: 10px">
                </svg-icon>
                <div class="card">
                  <p class="card_p">MNT MARKET CAP ON BSC</p>
                  <el-link> $12,653,201,507.00 (23,985,641 MNT)</el-link>
                </div>
              </div>
            </div>
          </el-col>
          <el-col class="card-boxright ContentPlaceHolder1_mainboxes" :span="11" :xs="24" :sm="24" :md="11" :lg="11">
            <div class="card-box">
              <div class="card-left">
                <el-icon :size="30" style="margin-right: 10px; margin-top: 10px">
                  <Odometer />
                </el-icon>
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
          <el-col :span="11" :xs="24" :sm="24" :md="11" :lg="11" class="ContentPlaceHolder1_mainboxes">
            <div class="card-header">
              <h4>Latest Blocks</h4>
              <el-button><el-icon>
                  <Star />
                </el-icon>Customize</el-button>
            </div>
            <ul class="card-ul">
              <li class="card-li">
                <div class="d-flex">
                  <el-icon size="20px" style="margin-right: 10px">
                    <Document />
                  </el-icon>
                  <div>
                    <router-link to="/block"> 36890859 </router-link>
                    <p>6 secs ago</p>
                  </div>
                </div>
                <div class="b-flex">
                  <el-link>Validator: Certik</el-link>
                  <div><el-link>210 txns</el-link> <span>in 3 secs</span></div>
                </div>
                <el-tooltip content="Copy Address" placement="top">
                  <div class="c-flex">
                    <p>0.04532 MNT</p>
                  </div>
                </el-tooltip>
              </li>
              <li class="card-li">
                <div class="d-flex">
                  <el-icon size="20px" style="margin-right: 10px">
                    <Document />
                  </el-icon>
                  <div>
                    <router-link to="/block"> 36890859 </router-link>
                    <p>6 secs ago</p>
                  </div>
                </div>
                <div class="b-flex">
                  <el-link>Validator: Certik</el-link>
                  <div><el-link>210 txns</el-link> <span>in 3 secs</span></div>
                </div>
                <el-tooltip content="Copy Address" placement="top">
                  <div class="c-flex">
                    <p>0.04532 MNT</p>
                  </div>
                </el-tooltip>
              </li>
              <li class="card-li">
                <div class="d-flex">
                  <el-icon size="20px" style="margin-right: 10px">
                    <Document />
                  </el-icon>
                  <div>
                    <router-link to="/block"> 36890859 </router-link>
                    <p>6 secs ago</p>
                  </div>
                </div>
                <div class="b-flex">
                  <el-link>Validator: Certik</el-link>
                  <div><el-link>210 txns</el-link> <span>in 3 secs</span></div>
                </div>
                <el-tooltip content="Copy Address" placement="top">
                  <div class="c-flex">
                    <p>0.04532 MNT</p>
                  </div>
                </el-tooltip>
              </li>
              <li class="card-li">
                <div class="d-flex">
                  <el-icon size="20px" style="margin-right: 10px">
                    <Document />
                  </el-icon>
                  <div>
                    <router-link to="/block"> 36890859 </router-link>
                    <p>6 secs ago</p>
                  </div>
                </div>
                <div class="b-flex">
                  <el-link>Validator: Certik</el-link>
                  <div><el-link>210 txns</el-link> <span>in 3 secs</span></div>
                </div>
                <el-tooltip content="Copy Address" placement="top">
                  <div class="c-flex">
                    <p>0.04532 MNT</p>
                  </div>
                </el-tooltip>
              </li>
              <li class="card-li">
                <div class="d-flex">
                  <el-icon size="20px" style="margin-right: 10px">
                    <Document />
                  </el-icon>
                  <div>
                    <router-link to="/block"> 36890859 </router-link>
                    <p>6 secs ago</p>
                  </div>
                </div>
                <div class="b-flex">
                  <el-link>Validator: Certik</el-link>
                  <div><el-link>210 txns</el-link> <span>in 3 secs</span></div>
                </div>
                <el-tooltip content="Copy Address" placement="top">
                  <div class="c-flex">
                    <p>0.04532 MNT</p>
                  </div>
                </el-tooltip>
              </li>
              <li class="card-li">
                <div class="d-flex">
                  <el-icon size="20px" style="margin-right: 10px">
                    <Document />
                  </el-icon>
                  <div>
                    <el-link to="/block"> 36890859 </el-link>
                    <p>6 secs ago</p>
                  </div>
                </div>
                <div class="b-flex">
                  <el-link>Validator: Certik</el-link>
                  <div><el-link>210 txns</el-link> <span>in 3 secs</span></div>
                </div>
                <el-tooltip content="Copy Address" placement="top">
                  <div class="c-flex">
                    <p>0.04532 MNT</p>
                  </div>
                </el-tooltip>
              </li>
            </ul>
            <div class="card-footer">
              <router-link to="/blocks">
                VIEW ALL BLOCKS<el-icon>
                  <Right />
                </el-icon>
              </router-link>
            </div>
          </el-col>
          <el-col :span="11" :xs="24" :sm="24" :md="11" :lg="11" class="ContentPlaceHolder1_mainboxes">
            <div class="card-header">
              <h4>Latest Transactions</h4>
              <el-button><el-icon>
                  <Star />
                </el-icon>Customize</el-button>
            </div>
            <ul class="card-ul">
              <li class="card-li">
                <div class="d-flex">
                  <el-icon size="20px" style="margin-right: 10px">
                    <Document />
                  </el-icon>
                  <div>
                    <el-link>0xc793ba720b7fc6...</el-link>
                    <p>6 secs ago</p>
                  </div>
                </div>
                <div class="b-flex">
                  <div class="flex_from">
                    <h4>From</h4>
                    <el-link>0x70F65716...334f28e18</el-link>
                  </div>
                  <div class="flex_to">
                    <h4>to</h4>
                    <el-link>0x00000000...000001000</el-link>
                  </div>
                </div>
                <el-tooltip content="Copy Address" placement="top">
                  <div class="c-flex">
                    <p>0.04532 MNT</p>
                  </div>
                </el-tooltip>
              </li>
              <li class="card-li">
                <div class="d-flex">
                  <el-icon size="20px" style="margin-right: 10px">
                    <Document />
                  </el-icon>
                  <div>
                    <el-link>0xc793ba720b7fc6...</el-link>
                    <p>6 secs ago</p>
                  </div>
                </div>
                <div class="b-flex">
                  <div class="flex_from">
                    <h4>From</h4>
                    <el-link>0x70F65716...334f28e18</el-link>
                  </div>
                  <div class="flex_to">
                    <h4>to</h4>
                    <el-link>0x00000000...000001000</el-link>
                  </div>
                </div>
                <el-tooltip content="Copy Address" placement="top">
                  <div class="c-flex">
                    <p>0.04532 MNT</p>
                  </div>
                </el-tooltip>
              </li>
              <li class="card-li">
                <div class="d-flex">
                  <el-icon size="20px" style="margin-right: 10px">
                    <Document />
                  </el-icon>
                  <div>
                    <el-link>0xc793ba720b7fc6...</el-link>
                    <p>6 secs ago</p>
                  </div>
                </div>
                <div class="b-flex">
                  <div class="flex_from">
                    <h4>From</h4>
                    <el-link>0x70F65716...334f28e18</el-link>
                  </div>
                  <div class="flex_to">
                    <h4>to</h4>
                    <el-link>0x00000000...000001000</el-link>
                  </div>
                </div>
                <el-tooltip content="Copy Address" placement="top">
                  <div class="c-flex">
                    <p>0.04532 MNT</p>
                  </div>
                </el-tooltip>
              </li>
              <li class="card-li">
                <div class="d-flex">
                  <el-icon size="20px" style="margin-right: 10px">
                    <Document />
                  </el-icon>
                  <div>
                    <el-link>0xc793ba720b7fc6...</el-link>
                    <p>6 secs ago</p>
                  </div>
                </div>
                <div class="b-flex">
                  <div class="flex_from">
                    <h4>From</h4>
                    <el-link>0x70F65716...334f28e18</el-link>
                  </div>
                  <div class="flex_to">
                    <h4>to</h4>
                    <el-link>0x00000000...000001000</el-link>
                  </div>
                </div>
                <el-tooltip content="Copy Address" placement="top">
                  <div class="c-flex">
                    <p>0.04532 MNT</p>
                  </div>
                </el-tooltip>
              </li>
              <li class="card-li">
                <div class="d-flex">
                  <el-icon size="20px" style="margin-right: 10px">
                    <Document />
                  </el-icon>
                  <div>
                    <el-link>0xc793ba720b7fc6...</el-link>
                    <p>6 secs ago</p>
                  </div>
                </div>
                <div class="b-flex">
                  <div class="flex_from">
                    <h4>From</h4>
                    <el-link>0x70F65716...334f28e18</el-link>
                  </div>
                  <div class="flex_to">
                    <h4>to</h4>
                    <el-link>0x00000000...000001000</el-link>
                  </div>
                </div>
                <el-tooltip content="Copy Address" placement="top">
                  <div class="c-flex">
                    <p>0.04532 MNT</p>
                  </div>
                </el-tooltip>
              </li>
              <li class="card-li">
                <div class="d-flex">
                  <el-icon size="20px" style="margin-right: 10px">
                    <Document />
                  </el-icon>
                  <div>
                    <el-link>0xc793ba720b7fc6...</el-link>
                    <p>6 secs ago</p>
                  </div>
                </div>
                <div class="b-flex">
                  <div class="flex_from">
                    <h4>From</h4>
                    <el-link>0x70F65716...334f28e18</el-link>
                  </div>
                  <div class="flex_to">
                    <h4>to</h4>
                    <el-link>0x00000000...000001000</el-link>
                  </div>
                </div>
                <el-tooltip content="Copy Address" placement="top">
                  <div class="c-flex">
                    <p>0.04532 MNT</p>
                  </div>
                </el-tooltip>
              </li>
            </ul>
            <div class="card-footer">
              <router-link to="/txs">
                View all transactions<el-icon>
                  <Right />
                </el-icon>
              </router-link>
            </div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
// import useUserStore from '@/store/modules/user'
// let userStore = useUserStore()
const input3 = ref('')
const select = ref('');

onMounted(()=>{ 
  // userStore.userInfo()
})
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

.container-xxl {
  background-color: #f5f7f9;
}

.el-link {
  margin-right: 8px;
}

.card {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 15px;
}

.ContentPlaceHolder1_mainboxes {
  width: 100%;
  border-radius: 15px;
  margin-bottom: 1.25rem;
  background-color: #fff;
  border: 1px solid #dee2e6;
}

.ContentPlaceHolder1 {
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
    /* flex-wrap: wrap; */
  }

  /* 减小字体大小 */
  /* .card_p,
  .c-flex p,
  .b-flex h4 {
    font-size: 10px;
  }

  .el-link {
    font-size: 10px;
  } */
}

.card-left {
  display: flex;
}

/* .el-link {
    font-size: 12px;
  } */
.flex_from {
  display: flex;
  flex-wrap: wrap;
}

.flex_from h4 {
  font-weight: normal;
}

.flex_to {
  display: flex;
  flex-wrap: wrap;
}

.flex_to h4 {
  font-weight: normal;
}

.card-right {
  margin-top: 13px;
}

.card_p {
  font-size: 10px;
}

.card-header {
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  margin-right: 10px;
  margin-left: 10px;
}

.card-ul {
  margin-right: 10px;
  margin-left: 10px;
}

.card-li {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-top: 1px solid #e6e6e6;
}

.d-flex {
  display: flex;
  justify-content: space-evenly;
}

.d-flex .el-link {
  color: #0784cf;
}

.d-flex .el-icon {
  margin-top: 10px;
}

.d-flex p {
  color: #6c757d;
  font-size: 11px;
}

.b-flex {
  display: flex;
  flex-direction: column;
}

.b-flex .el-link {
  color: #0784cf;
}

.b-flex span {
  color: #6c757d;
  font-size: 11px;
}

.b-flex h4 {
  margin-right: 10px;
  font-size: 12px;
}

.c-flex {
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

.card-footer {
  text-align: center;
  padding: 15px 0;
  color: #6c757d;
  /* border: 1px solid #e6e6e6; */
  background-color: #f8f9fa;
}

.container {
  background-image: linear-gradient(to right, white, black, black, white);
  display: flex;
  height: 20vh;
  color: #fff;
  flex-direction: column;
  justify-content: space-evenly;
  margin-bottom: 1rem;
}

.container h2 {
  text-align: center;
}

.drop_search {
  background-color: #fff;
  height: 4vh;
  border-radius: 15px;
}

:deep(.el-select__wrapper) {
  height: 100%;
}
</style>