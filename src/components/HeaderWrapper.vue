<template>
  <div>
    <div class="fixed-header">
      <el-row :gutter="10">
      <el-col :span="10" :xs="0" :sm="11" :md="11" :lg="11" class="header_search">
        <div class="header_price">
          <div class="header_price" style="margin-right:10px">
            <span>MNT Price:</span><span style="color: #0784c3;">$586.58 <span
                style="color:#00a186">(+0.49%)</span></span>
          </div>
          <div class="header_price">
            <svg-icon name="refuel" width=".85rem" height=".85rem" />
            <span>Gas:</span><span style="color: #0784c3;">1 GWei</span>
          </div>
        </div>
      </el-col>
      <el-col :span="10" :xs="24" :sm="11" :md="12" :lg="12" >
        <div class="mt-4" >
          <el-input v-model="homeSearch" style="height: 40px;"
            placeholder="Search by Address / Txn Hash / Block / Token / Domain Name" class="input-with-select">
            <template #append>
              <el-button @click="getSearch" type="primary" icon="Search" />
            </template>
          </el-input>
            <el-button icon="Sunny" class="header_button" size="large" style="margin-left:10px"></el-button>
          <el-button icon="ChromeFilled" class="header_button" size="large" style="margin-left:10px"></el-button>
        </div>
      </el-col>
    </el-row>
    </div>
    <div class="header-menu"><el-row :gutter="10">
      <el-col :span="24">
        <el-menu :default-active="$route.path" router class="el-menu-demo" mode="horizontal">
          <div class="el-img">
            <img width="40" height="37" src="/header_img.png" alt="" />
          </div>
          <div class="el_menu">
            <el-menu-item index="/home">Home</el-menu-item>
            <el-sub-menu index="2">
              <template #title>Blockchain</template>
              <el-menu-item index="/blocks">View Blocks</el-menu-item>
              <el-menu-item index="/txs">Transactions</el-menu-item>
              <el-menu-item index="/accounts">Top Accounts</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="3">
              <template #title>Tokens</template>
              <el-menu-item index="/tokens">Top Tokens<span>(ERC-20)</span></el-menu-item>
              <el-menu-item index="/tokentxns">Token Transfers <span>(ERC-20)</span></el-menu-item>
              <el-menu-item index="3-3">item three</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="4">
              <template #title>Blockchain</template>
              <el-menu-item index="4-1">View Blocks</el-menu-item>
              <el-menu-item index="4-2">item two</el-menu-item>
              <el-menu-item index="4-3">item three</el-menu-item>
            </el-sub-menu>
            <el-menu-item index="/login"><el-icon>
                <User />
              </el-icon>Sign In</el-menu-item>
          </div>
        </el-menu>
      </el-col>
    </el-row></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import router from '@/router'
import { getSearchInfo } from '@/api/home';
import { ElMessage } from 'element-plus'
const homeSearch = ref('')
const select = ref('');
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
      router.push({ name: 'block', params: {blockNumber:number} });
    }else if(select.value === '2' || response.data.transaction){
      let hash = response.data.transaction.hash
      router.push({ name: 'tx', params: {hash:hash} });
    }else if(select.value === '3' || response.data.address){
      let address = response.data.address.address
      // router.push({ name: 'address'});
      router.push({ name: 'address', params: {address:address} });
    }else if(select.value === '4' || response.data.contract){
      let contractAddress = response.data.contract.contractaddress
      router.push({ name: 'token', params: {address:contractAddress} });
    }else{
      ElMessage.warning('No data found')
    }
  } catch (error) {

  }
}
</script>

<style scoped>
.mt-4{
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e8e8e8;
}
.header_search{
  margin-left: 2.25rem;
  display: flex;
  flex-wrap: wrap;
    align-content: center;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e8e8e8;
}
.header_price {
  display: flex;
  color: #6c757d;
  font-size: .78515625rem;
}

.el-menu-demo {
  display: flex;
  justify-content: space-between;
  margin: 0 2.25rem;
}

.el_menu {
  display: flex;
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
@media (max-width: 768px) {
  .header_price,.header_button {
   display: none;
  }
  .mt-4{
    margin: 0 2.25rem;
  }
}
.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999; 
  background-color: #fff; /* Set a background color if needed */
}
.header-menu{
  margin-top: 50px;
}
</style>