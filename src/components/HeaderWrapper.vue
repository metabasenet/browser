<template>
  <div>
    <el-container class="container-xxl">
      <!-- <el-aside class="responsive-aside"></el-aside> -->
      <el-main style="padding-bottom: 0;">
        <div class="fixed-header">
          <div style="display: flex; align-items: center; padding: 0 20px; ">
            <span>MNT Price:</span>&nbsp;
            <span style="color: #0784c3;">${{ headerPrice }}
              <span style="color:#00a186">(+0.49%)</span>
            </span>&nbsp;&nbsp;&nbsp;&nbsp;
            <svg-icon name="refuel" width=".85rem" height=".85rem" />&nbsp;
            <span>Gas:</span>&nbsp;
            <span style="color: #0784c3;">{{ gasPrice }} GWei</span>
          </div>
          <div style="display: flex; align-items: center; padding: 5px 10px;">
            <el-input v-model="homeSearch" style="height: 40px; width: 485.5px;"
              placeholder="Search by Address / Txn Hash / Block / Token / Domain Name" class="input-with-select">
              <template #append>
                <el-button @click="getSearch" icon="Search" />
              </template>
            </el-input>
            <el-button icon="Sunny" class="header_button" size="large" style="margin-left:5px"></el-button>
            <div style="position: relative;">
              <el-button icon="ChromeFilled" class="header_button" size="large" style="margin-left:5px"
                @click="showBox = !showBox"></el-button>
              <!-- @mouseleave="close" -->
              <div class="hide-box" v-show="showBox">
                <ul style="text-align: center;">
                  <li class="switch-chain"
                    style="font-size: 12.5625px; color: #212529;margin-bottom: 0; margin-top: 30px; cursor: pointer;"
                    @click="chainSelect(1)">
                    MNT Mainnet</li>
                  <li style="height: 1px; background-color: #adb5bd; margin: 25px 0;"></li>
                  <li class="switch-chain" style="font-size: 12.5625px; color: #212529; cursor: pointer;"
                    @click="chainSelect(0)">MNT Testnet
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- <el-row :gutter="10" class="header_row ">
            <el-col :span="1" :xs="0" :sm="11" :md="11" :lg="1" style="background-color: red;"></el-col>
            <el-col :span="12" :xs="0" :sm="0" :md="11" :lg="11" class="header_search">
              <div class="header_price">
                <div class="header_price" style="margin-right:10px">
                  <span>MNT Price:</span>
                  <span style="color: #0784c3;">${{headerPrice}} 
                    <span style="color:#00a186">(+0.49%)</span>
                  </span>
                </div>
                <div class="header_price">
                  <svg-icon name="refuel" width=".85rem" height=".85rem" />
                  <span>Gas:</span><span style="color: #0784c3;">{{ gasPrice }} GWei</span>
                </div>
              </div>
            </el-col>
            <el-col :span="12" :xs="23" :sm="24" :md="11" :lg="11" style="background-color: red;">
              <div class="mt-4">
                <el-input v-model="homeSearch" style="height: 40px;"
                  placeholder="Search by Address / Txn Hash / Block / Token / Domain Name" class="input-with-select">
                  <template #append>
                    <el-button @click="getSearch" icon="Search" />
                  </template>
                </el-input>
                <el-button icon="Sunny" class="header_button" size="large" style="margin-left:10px"></el-button>
                <el-button icon="ChromeFilled" class="header_button" size="large" style="margin-left:10px"></el-button>
              </div>
            </el-col>
            <el-col :span="1" :xs="0" :sm="0" :md="1" :lg="1"></el-col>
          </el-row> -->
        </div>
        <div class="header-menu"
          style="padding: 0 10px; display: flex; align-items: center; justify-content: space-between;">
          <div style="display: flex; align-items: center; padding: 0 20px;">
            <img width="40" height="37" src="/header_img.png" alt="" />
            <span style="font-size:1.4rem;color:#00a186">MNT</span>
          </div>
          <el-menu style="width: 45%;" ellipsis class="el-menu-popper-demo" router mode="horizontal" :popper-offset="1">
            <el-menu-item index="/" class="font-item">Home</el-menu-item>
            <el-sub-menu index="2">
              <template #title><span class="font-item">Blockchain</span></template>
              <el-menu-item index="/blocks" class="font-item">View Blocks</el-menu-item>
              <el-menu-item index="/txs/home" class="font-item">Transactions</el-menu-item>
              <el-menu-item index="/accounts" class="font-item">Top Accounts</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="3">
              <template #title><span class="font-item">Tokens</span></template>
              <el-menu-item index="/tokens" class="font-item">Top Tokens<span
                  class="font-item">(ERC-20)</span></el-menu-item>
              <el-menu-item index="/tokentxns" class="font-item">Token Transfers
                <span class="font-item">(ERC-20)</span></el-menu-item>
            </el-sub-menu>
            <el-menu-item index="/login" class="font-item">
              <el-icon>
                <User />
              </el-icon>
              Sign In
            </el-menu-item>
          </el-menu>
          <!-- <el-row :gutter="10">
            <el-col :span="24">
              <el-menu ellipsis class="el-menu-popper-demo" router mode="horizontal" :popper-offset="16">
                <el-menu-item index="/">
                  <div class="el-img">
                    <img width="40" height="37" src="/header_img.png" alt="" />
                    <span style="font-size:1.4rem;color:#00a186">MNT</span>
                  </div>
                </el-menu-item>
                <div class="el_menu">
                  <el-menu-item index="/" class="font-item">Home</el-menu-item>
                  <el-sub-menu index="2">
                    <template #title><span class="font-item">Blockchain</span></template>
                    <el-menu-item index="/blocks" class="font-item">View Blocks</el-menu-item>
                    <el-menu-item index="/txs/home" class="font-item">Transactions</el-menu-item>
                    <el-menu-item index="/accounts" class="font-item">Top Accounts</el-menu-item>
                  </el-sub-menu>
                  <el-sub-menu index="3" :popper-offset="8">
                    <template #title><span class="font-item">Tokens</span></template>
                    <el-menu-item index="/tokens" class="font-item">Top Tokens<span
                        class="font-item">(ERC-20)</span></el-menu-item>
                    <el-menu-item index="/tokentxns" class="font-item">Token Transfers
                      <span class="font-item">(ERC-20)</span></el-menu-item>
                  </el-sub-menu>
                  <el-menu-item index="/login" class="font-item">
                    <el-icon>
                      <User />
                    </el-icon>
                    Sign In
                  </el-menu-item>
                </div>
              </el-menu>
            </el-col>
          </el-row> -->
        </div>
      </el-main>
      <!-- <el-aside class="responsive-aside"></el-aside> -->
    </el-container>

  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import router from '@/router'
import { getSearchInfo } from '@/api/home';
import { getPriceInfo } from '@/api/headerprice';
import { ElMessage } from 'element-plus'
import { ethers, formatUnits } from "ethers";
import { config } from '@/config/config';
import { useUserStore } from '@/store/user'
import pinia from '@/store';
const homeSearch = ref('')
const select = ref('');
const headerPrice = ref('')
const gasPrice = ref()
const user = useUserStore(pinia)
let showBox = ref(false)
const getSearch = async () => {
  if (!homeSearch.value) {
    ElMessage.warning('Please enter your search')
    return
  }
  try {
    const response = await getSearchInfo(homeSearch.value, select.value);
    if (!response.data || Object.keys(response.data).length === 0) {
      ElMessage.warning('No data found')
      return
    } else if (select.value === '1' || response.data.block) {
      let number = response.data.block.number
      router.push({ name: 'block', params: { blockNumber: number } });
      homeSearch.value = '';
    } else if (select.value === '2' || response.data.transaction) {
      let hash = response.data.transaction.hash
      router.push({ name: 'tx', params: { hash: hash } });
      homeSearch.value = '';
    } else if (select.value === '3' || response.data.address || response.data.contract) {
      if(response.data.contract){
        let contractaddress = response.data.contract.contractaddress
        let contract = Object.keys(response.data)[0]
        console.log(contract);
        router.push({ name: 'address', params: { address: contractaddress },query:{contract} });
        homeSearch.value = '';
      }else{
        let address = response.data.address.address
        let contract = Object.keys(response.data)[0]
        router.push({ name: 'address', params: { address: address },query:{contract} });
        homeSearch.value = '';
      }
    }else if (select.value === '4' || response.data.contract) {
      let contractAddress = response.data.contract.contractaddress
      router.push({ name: 'token', params: { address: contractAddress } });
      homeSearch.value = '';
    } else {
      ElMessage.warning('No data found')
    }
  } catch (error) {

  }
}
const getHeaderPrice = async () => {
  try {
    const response = await getPriceInfo()
    headerPrice.value = response.price;
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}
let getGasPrice = async ()=>{
  const provider = new ethers.JsonRpcProvider(config.testRpc_adress);
  // let res = await provider.getCode('address')
  // res.length>4
  //const res = await provider.send("eth_gasPrice");
  //gasPrice.value = formatUnits(parseInt(res, 16), 9)
}
function chainSelect (v) {
  // sessionStorage.setItem("flag", v)
  location.href = v == 1 ? config.domain_url : config.dev_url
  showBox.value = false
}
function close () {
  if (showBox.value == true) {
    showBox.value = false
  }
}
onMounted(()=>{
  getHeaderPrice()
  getGasPrice()
})
</script>

<style scoped>
:deep(.el-menu--horizontal){
  justify-content: space-between;
}
.container-xxl {
  border-bottom: 1px solid #e8e8e8;
}

.mt-4 {
  height: 50px;
  display: flex;
  align-items: center;
  /* margin-left: 300px; */
}

.header_search {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-between;
  align-items: center;

}

.header_row {
  display: flex;
  border-bottom: 1px solid #e8e8e8;
}

.header_price {
  display: flex;
  align-items: center;
  color: #6c757d;
  font-size: 0.9rem;
  margin-left: 10px;
}

.el-menu-demo {
  display: flex;
  justify-content: space-between;
  margin: 0 1.4rem;
}

.el-img {
  display: flex;
  align-items: center;
}

.drop_search {
  background-color: #fff;
  height: 6vh;
  border-radius: 15px;
}

:deep(.el-select__wrapper) {
  height: 100%;
}


.fixed-header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  z-index: 999;
  border-bottom: 1px solid #e8e8e8;
}

.responsive-aside {
  width: 0rem;
  transition: width 0.5s ease;
}

@media (min-width: 768px) {
  .responsive-aside {
    width: 3vw;
    opacity: 0.5;
    /* background-color: #fff;  */
  }
}

.header-menu {
  margin-top: 48px;
  background-color: #fff;
}

:deep(.el-input-group--append>.el-input__wrapper) {
  background-color: #f8f9fa;
}
.font-item {
  font-size: 14.4992px;
  color: #000;
}
:deep(.el-main) {
  padding: 0;
}
@media (max-width: 768px) {
  .fixed-header {
    display: none;
    height: 0;
  }
  .header-menu {
    margin-top: 0;
  }
}
.hide-box {
  width: 100px;
  height: 130px;
  background-color: #FFF;
  border-radius: 12px;
  position: absolute;
  right: 1px;
  padding: 15px;
}
.switch-chain:hover {
  background-color: #0784c3;
}
</style>