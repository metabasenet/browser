<template>
  <div class="common-layout">
      <el-container class="container-xxl">
        <div class="container_bgc"></div>
        <el-aside class="responsive-aside"></el-aside>
      <el-main>
        <div class="container">
          <el-row justify="center" align="middle">
            <el-col :span="12" :xs="24">
              <h2>MNT Smart Chain Explorer</h2>
            </el-col>
          </el-row>
          <el-row justify="center" align="middle">
            <el-col :span="12" class="drop_search" :xs="22" :sm="22" :md="20" :lg="12">
              <el-input v-model="homeSearch" placeholder="Search by Address / Txn Hash / Block / Token / Domain Name"
                style="max-width: 100%;height:100%;border:none" class="input-with-select">
                <template #prepend>
                  <el-select v-model="select" placeholder="All Filters" style="width: 115px;height:100%">
                    <el-option label="Block" value="1" />
                    <el-option label="Txn Hash" value="2" />
                    <el-option label="Address" value="3" />
                    <el-option label="Contract" value="4" />
                  </el-select>
                </template>
                <template #append>
                  <el-button @click="getSearch" type="primary" icon="Search" />
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
              <el-button><el-icon><Grid /></el-icon>Customize</el-button>
            </div>
            <el-table :data="tableData" style="width: 100%" >
              <el-table-column prop="number">
                <template v-slot="scope">
                 <div style="display:flex;align-items: center;" >
                  <svg-icon name="box" width="1.8rem" height="1.8rem" >
                  </svg-icon>
                  <div style="margin-left:8px">
                    <div>
                    <router-link class="skyblue-text" :to="{ name: 'block', params: { blockNumber: scope.row.number } }">
                      {{ scope.row.number }}
                    </router-link>
                  </div>
                  <div>
                    <span class="b-flex_span">{{scope.row.formattedTime}}</span>
                  </div>
                  </div>
                 </div>
                </template>
              </el-table-column>
              <el-table-column prop="number" >
                <template v-slot="scope">
                  <div>
                    <span>Validated By</span>
                    <router-link class="skyblue-text" :to="{ name: 'block', params: { blockNumber: scope.row.number } }">
                      {{ scope.row.number }}
                    </router-link>
                  </div>
                  <div>
                    <router-link class="skyblue-text" :to="{ name: 'block', params: { blockNumber: scope.row.number } }">
                      {{ scope.row.number }}
                    </router-link>
                    <span class="b-flex_span">in 3 secs</span>
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                header-align="center"
                align="center"
                prop="number"
                width="150">
                <template v-slot="scope" >
                  <div>
                    <el-tooltip content="Copy Address" placement="top">
                  <div class="c-flex">
                    <p>{{ scope.row.number }}MNT</p>
                  </div>
                </el-tooltip>
                  </div>
                </template>
              </el-table-column>
            </el-table>
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
              <el-button><el-icon><Grid /></el-icon>Customize</el-button>
            </div>
            <el-table :data="tableDatas" style="width: 100%" >
              <el-table-column prop="number">
                <template v-slot="scope">
                 <div style="display:flex;align-items: center;" >
                  <svg-icon name="document" width="1.8rem" height="1.8rem" >
                  </svg-icon>
                  <div style="margin-left:8px;">
                    <div class="skyblue-text">
                    <router-link class="skyblue-text" :to="{ name: 'tx', params: { hash: scope.row.hash } }">
                      {{ scope.row.hash }}
                    </router-link>
                  </div>
                  <div>
                    <span class="b-flex_span">{{scope.row.formattedTime}}</span>
                  </div>
                  </div>
                 </div>
                </template>
              </el-table-column>
              <el-table-column prop="number" >
                <template v-slot="scope">
                  <div class="skyblue-text" style="width:10.25rem">
                    <span style="color:black">From </span>
                    <el-tooltip effect="dark" :content="scope.row.from" placement="top">
                      <router-link class="skyblue-text" :to="{ name: 'address', params: { address: scope.row.from } }">
                      {{ scope.row.from }}
                    </router-link>
                    </el-tooltip>
                  </div>
                  <div class="skyblue-text" style="width:10.25rem">
                    <span style="color:black">To </span>
                   <el-tooltip effect="dark" :content="scope.row.to" placement="top">
                    <router-link class="skyblue-text" :to="{ name: 'address', params: { address: scope.row.to} }">
                      {{ scope.row.to }}
                    </router-link>
                   </el-tooltip>
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                header-align="center"
                align="center"
                prop="number"
                width="150">
                <template v-slot="scope" >
                  <div>
                    <el-tooltip content="Copy Address" placement="top">
                  <div class="c-flex">
                    <p>{{ scope.row.number }}MNT</p>
                  </div>
                </el-tooltip>
                  </div>
                </template>
              </el-table-column>
            </el-table>
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
    <el-aside class="responsive-aside"></el-aside>
    </el-container>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import router from '@/router'
import { getSearchInfo } from '@/api/home';
import { getBlockPage } from '@/api/block';
import { getTransactionPage } from '@/api/transaction';
import { ElMessage } from 'element-plus'
// import useUserStore from '@/store/modules/user'
// let userStore = useUserStore()
const tableData = ref([])
const tableDatas = ref([])
const homeSearch = ref('')
const select = ref('');
const currentPage4 = ref(1)
const pageSize4 = ref(6)
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
    } else if (select.value === '2' || response.data.transaction) {
      let hash = response.data.transaction.hash
      router.push({ name: 'tx', params: { hash: hash } });
    } else if (select.value === '3' || response.data.address) {
      let address = response.data.address.address
      // router.push({ name: 'address'});
      router.push({ name: 'address', params: { address: address } });
    } else if (select.value === '4' || response.data.contract) {
      let contractAddress = response.data.contract.contractaddress
      router.push({ name: 'token', params: { address: contractAddress } });
    } else {
      ElMessage.warning('No data found')
    }
  } catch (error) {

  }
}

const getBlockPageData = async (pager = 1) => {
  try {
    currentPage4.value = pager;
    const response = await getBlockPage(currentPage4.value, pageSize4.value)
    tableData.value = response.data.list;
    tableData.value.forEach(item => {
      const percentage = (item.gasused / item.gaslimit) * 100;
      item.percentage = percentage;
    })

    const currentTime = Math.floor(Date.now() / 1000);
    tableData.value.forEach(item => {
      const timestamp = item.timestamp;
      const timeDifferenceInSeconds = currentTime - timestamp;
      let formattedTime;
      if (timeDifferenceInSeconds < 60) {
        const absoluteTimeDifference = Math.abs(timeDifferenceInSeconds);
        formattedTime = `${absoluteTimeDifference} seconds ago`;
      } else if (timeDifferenceInSeconds >= 60 && timeDifferenceInSeconds < 3600) {
        const minutes = Math.floor(timeDifferenceInSeconds / 60);
        formattedTime = `${minutes} minutes ago`;
      } else if (timeDifferenceInSeconds >= 3600 && timeDifferenceInSeconds < 86400) {
        const hours = Math.floor(timeDifferenceInSeconds / 3600);
        formattedTime = `${hours} hours ago`;
      } else {
        const days = Math.floor(timeDifferenceInSeconds / 86400);
        formattedTime = `${days} days ago`;
      }
      item.formattedTime = formattedTime;
    });
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}
const getTransAction = async (pager = 1) => {
  try {
    currentPage4.value = pager;
    const response = await getTransactionPage(currentPage4.value, pageSize4.value)
    tableDatas.value = response.data.list;
    const currentTime = Math.floor(Date.now() / 1000);
    tableDatas.value.forEach(item => {
      const timestamp = item.timestamp;
      const timeDifferenceInSeconds = currentTime - timestamp;
      let formattedTime;
      if (timeDifferenceInSeconds < 60) {
        const absoluteTimeDifference = Math.abs(timeDifferenceInSeconds);
        formattedTime = `${absoluteTimeDifference} seconds ago`;
      } else if (timeDifferenceInSeconds >= 60 && timeDifferenceInSeconds < 3600) {
        const minutes = Math.floor(timeDifferenceInSeconds / 60);
        formattedTime = `${minutes} minutes ago`;
      } else if (timeDifferenceInSeconds >= 3600 && timeDifferenceInSeconds < 86400) {
        const hours = Math.floor(timeDifferenceInSeconds / 3600);
        formattedTime = `${hours} hours ago`;
      } else {
        const days = Math.floor(timeDifferenceInSeconds / 86400);
        formattedTime = `${days} days ago`;
      }
      item.formattedTime = formattedTime;
    });
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}
onMounted(() => {
  getBlockPageData()
  getTransAction()
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
  position: relative;
  background-color: #f5f7f9;
}
.container_bgc{
  position: absolute;
  width: 100%;
  height: 29vh;
  /* background: linear-gradient(45deg,#fff, #000,#000, #fff ); */
  background: linear-gradient(to right, #000, #fff);
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
.responsive-aside {
  width: 0rem;
  transition: width 0.5s ease; 
}
@media (min-width: 768px) {
  .responsive-aside {
    width: 10rem;
    opacity: 0.5;
    /* background-color: #fff;  */
  }
}
@media (max-width: 767px) {

  .card-ul,
  .card-li {
    padding: 5px;
    /* flex-wrap: wrap; */
  }

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

.b-flex_span {
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
  font-size: 15px;
  /* border: 1px solid #e6e6e6; */
  background-color: #f8f9fa;
}

.container {
  /* background-image: linear-gradient(to right, white, black, black, white); */
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

.skyblue-text {
  width: 7.5rem;
  color: #0693cc;
  margin-right: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>