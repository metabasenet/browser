<template>
  <div class="common-layout">
    <el-container class="container-xxl">
      <div class="container_bgc"></div>
      <el-aside class="responsive-aside"></el-aside>
      <el-main>
        <div class="container">
          <el-row justify="center" class="homeOne-itemone">
            <el-col :span="12" :xs="24">
              <h2 class="home-title">MNT Smart Chain Explorer</h2>
            </el-col>
          </el-row>
          <el-row justify="center" class="homeOne-itemtwo">
            <el-col :span="24" :xs="22" :sm="22" :md="20" :lg="12">
              <div class="input">
                <div class="select">
                  <el-select v-model="select" placeholder="All Filters" style="width: 100px; margin-right: 3px;">
                    <el-option label="All Filters" value="1" />
                    <el-option label="Block" value="2" />
                    <el-option label="Txn Hash" value="3" />
                    <el-option label="Address" value="4" />
                    <el-option label="Contract" value="5" />
                  </el-select>
                </div>
                <input v-model="homeSearch" :class="input_item"
                  placeholder="Search by Address / Txn Hash / Block / Token / Domain Name"
                  @focus="input_item = 'input_item_selected'" @blur="input_item = 'input_item'" />
                <el-button style="width: 35px; height: 35px; border-radius: 11px; margin-left: 6px" type="primary"
                  :icon="Search" @click="getSearch" />
              </div>
            </el-col>
          </el-row>
          <el-row justify="center">
            <el-col :span="24" style="text-align: center">
              <span class="input-bottom" style="font-size: 14.4992px; color: #fff;">Featured: Bscscan API - Need higher
                call rates ?
                <el-link style="color:#0784c3" href="#" target="_blank">Sign-up for a dedicated plan today!</el-link>
              </span>
            </el-col>
          </el-row>
        </div>
        <el-row class="homeTwo" style="margin-bottom: 1.5rem;">
          <el-col :span="7" class="homeTwo-one" :xs="24">
            <div class="cardOne-top">
              <div class="cardOne-top-img">
                <svg-icon name="phone" width="2rem" height="2rem">
                </svg-icon>
              </div>
              <div class="cardOne-top-font">
                <p class="card_p" style="font-size: 12px; color:#6C757D">MNT PRICE</p>
                <el-link> <span style="font-size: 15px; color: #081D35">${{ headerPrice }}</span>&nbsp;<span
                    style="font-size: 15px; color: #6C757D">@ 0.007508 MNT</span>&nbsp;<span
                    style="font-size: 13.125px; color: #00A186;">(+4.02%)</span></el-link>
              </div>
            </div>
            <div class="line"></div>
            <div class="cardOne-bottom">
              <div class="cardOne-top-img">
                <svg-icon name="globe" width="2rem" height="2rem">
                </svg-icon>
              </div>
              <div class="cardOne-top-font">
                <p class="card_p">MNT MARKET CAP ON BSC</p>
                <el-link></el-link>
              </div>
            </div>
          </el-col>
          <el-col :span="1"><el-divider direction="vertical" style="height: 100%;" class="divder" /></el-col>
          <el-col :span="7" class="homeTwo-two" :xs="24">
            <div class="cardTwo-top">
              <div class="cardTwo-topLeft">
                <div class="cardTwo-topLeft-img">
                  <el-icon :size="30">
                    <View />
                  </el-icon>
                </div>
                <div>
                  <p class="card_p">TTRANSACTIONS</p>
                  <el-link style="font-size: 15px; color: #081D35"><span>{{ transactionCount }}</span></el-link>
                </div>
              </div>
              <div class="cardTwo-topRight">
                <p class="card_p">MED GAS PRICE</p>
                <el-link> <span style="font-size: 15px; color: #081D35">{{ gasPrice }}</span> <span
                    style="font-size: 12px; color: #6C757D">Gwei ($0.01)</span></el-link>
              </div>
            </div>
            <div class="line"></div>
            <div class="cardTwo-bottom">
              <div class="cardTwo-topLeft">
                <div class="cardTwo-topLeft-img">
                  <el-icon :size="30">
                    <Odometer />
                  </el-icon>
                </div>
                <div>
                  <p class="card_p">LATEST BLOCK</p>
                  <el-link> <span style="font-size: 15px; color: #081D35">{{ lastestBlock }}</span>&nbsp;<span
                      style="font-size: 12.6868px; color: #6C757D">(3.0s)</span></el-link>
                </div>
              </div>
              <div class="cardTwo-topRight">
                <p class="card_p">VOTING POWER</p>
                <el-link style="font-size: 15px; color: #081D35"> 26,321,900.53 BNB</el-link>
              </div>
            </div>
          </el-col>
          <el-col :span="1"><el-divider direction="vertical" style="height: 100%;" class="divder" /></el-col>
          <el-col :span="8" :xs="24">
            <div ref="chart" style="height: 150px;">
            </div>
          </el-col>
        </el-row>
        <div class="homeThree">
          <div class="homeThree-one">
            <div class="card-header">
              <h4 style="font-size: 15px; color: #212529; font-weight: 500;">Latest Blocks</h4>
              <!-- <el-button><el-icon>
                  <Grid />
                </el-icon>Customize</el-button> -->
            </div>
            <el-table :data="tableData" style="width: 100%" :row-style="{ height: '70px' }">
              <el-table-column prop="number">
                <template v-slot="scope">
                  <div style="display:flex;align-items: center;">
                    <div
                      style="width: 3rem; height: 3rem; background-color: #f8f9fa; display: flex; justify-content: center; align-items: center; border-radius: 12px;">
                      <svg-icon name="box" width="1rem" height="1rem">
                      </svg-icon>
                    </div>
                    <div style="margin-left:8px">
                      <div>
                        <router-link class="skyblue-text"
                          :to="{ name: 'block', params: { blockNumber: scope.row.number } }">
                          {{ scope.row.number }}
                        </router-link>
                      </div>
                      <div>
                        <span class="b-flex_span">{{ scope.row.formattedTime }}</span>
                      </div>
                    </div>
                  </div>
                </template>
              </el-table-column>
              <el-table-column prop="number">
                <template v-slot="scope">
                  <!-- <div>
                    <span>Validated By</span>
                    <router-link class="skyblue-text"
                      :to="{ name: 'block', params: { blockNumber: scope.row.number } }">
                      {{ scope.row.number }}
                    </router-link>
                  </div> -->
                  <el-tooltip :content="scope.row.hash">
                    <span style="font-size: 14.4992px; color:#0784c3; cursor: pointer;">
                      {{ scope.row.hash.substring(0, 20) + '...' }}
                    </span>
                  </el-tooltip>
                  <div>
                    <!-- :to="{ name: 'txs', params: { block: scope.row.hash }}" -->
                    <span style="font-size: 14.4992px; color: #0784C3; cursor: pointer;"
                      @click="goTransactionPage(scope.row.transactioncount, scope.row.hash)">{{
                      scope.row.transactioncount}}
                      txns</span>&nbsp;
                    <span style="font-size: 12.6868px; color: #6C757D;">in 3 secs</span>
                  </div>
                </template>
              </el-table-column>
              <el-table-column header-align="center" align="center" prop="number" width="130">
                <template v-slot="scope">
                  <div>
                    <el-tooltip :content="scope.row.gaspriceTotal.toString()">
                      <div class="c-flex">
                        <p>{{ scope.row.gaspriceTotal }}MNT</p>
                      </div>
                    </el-tooltip>
                  </div>
                </template>
              </el-table-column>
            </el-table>
            <div class="card-footer">
              <router-link to="/blocks" class="view-all">
                <span style="font-size: 12px; color: #6C757D;">VIEW ALL BLOCKS</span>
                <el-icon style="margin-left:3px">
                  <Right />
                </el-icon>
              </router-link>
            </div>
          </div>
          <div class="homeThree-two">
            <div class="card-header">
              <h4 style="font-size: 15px; color: #212529; font-weight: 500;">Latest Transactions</h4>
              <!-- <el-button><el-icon>
                  <Grid />
                </el-icon>Customize</el-button> -->
            </div>
            <el-table :data="tableDatas" style="width: 100%" :row-style="{ height: '70px' }">
              <el-table-column prop="number">
                <template v-slot="scope">
                  <div style="display:flex;align-items: center;">
                    <div
                      style="width: 3rem; height: 3rem; background-color: #f8f9fa; display: flex; justify-content: center; align-items: center; border-radius: 12px;">
                      <svg-icon name="document" width="1rem" height="1rem">
                      </svg-icon>
                    </div>
                    <div style="margin-left:8px;">
                      <div class="skyblue-text">
                        <router-link class="skyblue-text" :to="{ name: 'tx', params: { hash: scope.row.hash } }">
                          {{ scope.row.hash }}
                        </router-link>
                      </div>
                      <div>
                        <span class="b-flex_span">{{ scope.row.formattedTime }}</span>
                      </div>
                    </div>
                  </div>
                </template>
              </el-table-column>
              <el-table-column prop="number">
                <template v-slot="scope">
                  <div class="skyblue-text" style="width:10.25rem">
                    <span style="color:black">From </span>
                    <el-tooltip effect="dark" :content="scope.row.from">
                      <router-link class="skyblue-text" :to="{ name: 'address', params: { address: scope.row.from } }">
                        {{ scope.row.from }}
                      </router-link>
                    </el-tooltip>
                  </div>
                  <div class="skyblue-text" style="width:10.25rem">
                    <span style="color:black">To </span>
                    <el-tooltip effect="dark" :content="scope.row.to">
                      <router-link class="skyblue-text" :to="{ name: 'address', params: { address: scope.row.to } }">
                        {{ scope.row.to }}
                      </router-link>
                    </el-tooltip>
                  </div>
                </template>
              </el-table-column>
              <el-table-column header-align="center" align="center" prop="number" width="130">
                <template v-slot="scope">
                  <div>
                    <el-tooltip content="Copy Address">
                      <div class="c-flex">
                        <p>{{ scope.row.gaspriceTotal }}MNT</p>
                      </div>
                    </el-tooltip>
                  </div>
                </template>
              </el-table-column>
            </el-table>
            <div class="card-footer">
              <router-link to="/txs/home" class="view-all">
                <span style="font-size: 12px; color: #6C757D;">VIEW ALL TRANSACTIONS</span>
                <el-icon style="margin-left:3px">
                  <Right />
                </el-icon>
              </router-link>
            </div>
          </div>
        </div>
      </el-main>
      <el-aside class="responsive-aside"></el-aside>
    </el-container>
  </div>
</template>

<script setup>
import { onMounted, ref, reactive} from 'vue'
import router from '@/router'
import { getSearchInfo } from '@/api/home';
import { getBlockPage } from '@/api/block';
import { getTransactionPage, getTransactionRecords, getTransactionCount } from '@/api/transaction';
import { ElMessage } from 'element-plus'
import { config } from '@/config/config';
import { getPriceInfo } from '@/api/headerprice';
import * as echarts from 'echarts';
import { Search } from '@element-plus/icons-vue';
import { ethers, formatUnits } from "ethers";
// import useUserStore from '@/store/modules/user'
// let userStore = useUserStore()
let tableData = reactive([])
const tableDatas = ref([])
const homeSearch = ref('')
const select = ref('');
const currentPage4 = ref(1)
const pageSize4 = ref(6)
const lastestBlock = ref()
const headerPrice = ref()
const chart = ref();
let transactionCount = ref()
let transationHistory = reactive([])
const input_item = ref('input_item')
const gasPrice = ref()

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
      if (response.data.contract) {
        let contractaddress = response.data.contract.contractaddress
        let contract = Object.keys(response.data)[0]
        router.push({ name: 'address', params: { address: contractaddress }, query: { contract } });
        homeSearch.value = '';
      } else {
        let address = response.data.address.address
        let contract = Object.keys(response.data)[0]
        router.push({ name: 'address', params: { address: address }, query: { contract } });
        homeSearch.value = '';
      }
    } else if (select.value === '4') {
      let contractAddress = response.data.contract.contractaddress
      router.push({ name: 'token', params: { address: contractAddress } });
      homeSearch.value = '';
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
    tableData = response.data.list;
    console.log(tableData);
    tableData.forEach(item => {
      const percentage = (item.gasused / item.gaslimit) * 100;
      item.percentage = percentage;
    })
    tableData.forEach(item => {
      const gasused = parseFloat(item.gasUsed) || 0;
      const gasprice = item.gasprice || 0;
      const result = ethers.formatEther(gasused * parseFloat(gasprice))
      item.gaspriceTotal = 0 ? '0' : result;
    })
    const currentTime = Math.floor(Date.now() / 1000);
    tableData.forEach(item => {
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
    tableDatas.value.forEach(item => {
      const gasused = parseFloat(item.gasUsed);
      const gasprice = item.gasprice || 0;
      const result = ethers.formatEther(gasused * parseFloat(gasprice))
      item.gaspriceTotal = 0 ? '0' : result;
    })
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
    // addGaspriceTotalToTableDatas();
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}
let getGasPrice = async ()=>{
  const provider = new ethers.JsonRpcProvider(config.rpc_adress);
  const res = await provider.send("eth_gasPrice");
  gasPrice.value = formatUnits(parseInt(res, 16), 9)
}
let getTransationCords = async () => {
  transationHistory = await getTransactionRecords();
  let xdata = []
  let ydata = []
  for (let i=0;i<transationHistory.length;i++) {
    ydata.push(transationHistory[i].count)
    xdata.push(transationHistory[i].date)
  }
  let myChart = echarts.init(chart.value);
  let option = {
    title: {
      text: 'MNT SMART CHAIN TRANSACTION HISTORY IN 14 DAYS',
      textStyle: {
        fontSize: 12
      },
    },
    grid: {
      top: '20%',    // 设置 Y 轴顶部留白的高度，可以是像素值，也可以是百分比
      bottom: '20%',  // 设置 Y 轴底部留白的高度，同样可以是像素值或百分比
      left: '10%',    // 设置 X 轴左侧留白的宽度，可以是像素值，也可以是百分比
      right: '10%' 
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    xAxis: {
      type: 'category',
      data: xdata,
      boundaryGap: false,
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: ydata,
        type: 'line',
        smooth: true
      }
    ]
  };
  myChart.setOption(option)
  
}
let getTransactionCounts = async () => {
  let {data} = await getTransactionCount()
  transactionCount.value = data[2].count
}
onMounted(() => {
  getBlockPageData()
  getTransAction()
  getLastestHeight()
  getMNtPrice()
  getGasPrice()
  getTransationCords()
  getTransactionCounts()
  // userStore.userInfo()
})
async function getLastestHeight() {
  const provider = new ethers.JsonRpcProvider(config.rpc_adress);
  const blockNumber = await provider.getBlockNumber()
  lastestBlock.value = blockNumber
}
async function getMNtPrice () {
  try {
    const response = await getPriceInfo()
    headerPrice.value = response.price;
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}
function goTransactionPage (count, hash) {
  if (count == 0) {
    return
  } else {
    router.push({ name: 'txs', params: { block: hash}})
  }
}
</script>

<style scoped>
.view-all {
  display: flex;
  justify-content: center;
  align-items: center;
}

.el-select {
  width: 7.1875rem;
  height: 100%;
}

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

.container_bgc {
  position: absolute;
  width: 100%;
  height: 45vh;
  /* background: linear-gradient(45deg, #fff, #000, #000, #fff); */
  background-color: #131313
  /* background: linear-gradient(45deg,#fff,#0c9482, #0c9482, #fff); */
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
    /* width: 10rem; */
    width: 3vw;
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

  .el-select {
    width: 5.6rem;
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
  font-size: 12px; 
  color:#6C757D;
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
  font-size: 13px;
}

.b-flex {
  display: flex;
  flex-direction: column;
}

.b-flex .el-link {
  color: #0784cf;
}

.b-flex_span {
  color: #6C757D;
  font-size: 12.6868px;
}

.b-flex h4 {
  margin-right: 10px;
  font-size: 14px;
}

.c-flex {
  width: 82px;
  font-weight: 500;
  background-color: #fff;
  height: 25px;
  line-height: 25px;
  text-align: center;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  font-size:  10.8744px;
  color: #000;
}

.c-flex p {
  padding: 0 10px;
}

.card-footer {
  text-align: center;
  padding: 15px 0;
  color: #6c757d;
  font-size: 16px;
  background-color: #f8f9fa;
  border-radius:  0 0 15px 15px;
}

.container {
  /* background-image: linear-gradient(to right, white, black, black, white); */
  display: flex;
  height: 20vh;
  color: #fff;
  flex-direction: column;
  justify-content: space-evenly;
  margin-bottom: 2rem;

}

.container h2 {
  text-align: center;
}


.skyblue-text {
  width: 7.5rem;
  color: #0784C3;
  margin-right: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14.4992px;
  
}


/* //修改样式 */
.homeOne-itemone {
  margin-bottom: 12px;
}
.home-title {
  font-size: 19.6875px;
  color: #fff;
}
.homeOne-itemtwo {
  margin-bottom: 5px;
}
.cardOne-top {
  display: flex;
}
.homeTwo {
  padding: 15px;
  background-color: #fff;
  border-radius: 15px;
  border: 1px solid #dee2e6;
}
.cardOne-top-img {
  margin-right: 12px;
} 
.cardOne-bottom {
  display: flex;
}
.cardTwo-top {
  display: flex;
  justify-content: space-between;
}
.cardTwo-topLeft {
  display: flex;
}
.cardTwo-topLeft-img {
  margin-right: 12px;
}
.cardTwo-bottom {
  display: flex;
  justify-content: space-between;
}
.cardTwo-topRight {
  text-align: center;
}
.line {
  width: 95%;
  height: 1px;
  background-color: #ccc;
  margin: 24px 0;
}
@media (max-width: 768px) {
  .divder {
    display: none;
  }
  .homeTwo-one {
    margin-bottom: 60px;
  }
  .homeTwo-two {
    margin-bottom: 60px;
  }
}
.homeThree {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.homeThree-one {
  width: 49%;
  border-radius: 15px;
  background-color: #fff;
  border: 1px solid #dee2e6;
}
.homeThree-two {
  width: 49%;
  border-radius: 15px;
  background-color: #fff;
  border: 1px solid #dee2e6;
}
@media (max-width: 768px) {
 .homeThree-one {
  width: 100%;
  margin-bottom: 1.25rem;
}
.homeThree-two {
  width: 100%;
}
.input-bottom {
  display: none;
}
}

.input {
  width: 100%;
  background-color: #fff;
  height: 35px;
  border-radius: 10px;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
:deep(.el-select__wrapper) {
  height: 35px;
  border-radius: 10px;
  border: 1px solid #fff;
  box-shadow: none;
}
.input_item {
  width: 100%;
  height: 32px;
  border-radius: 10px;
  border: 1px solid #fff;
  box-shadow: none;
  padding-left: 10px;
}
.input_item_selected {
  width: 100%;
  height: 32px;
  border-radius: 10px;
  border: 1px solid #fff;
  box-shadow: 10px 5px 25px 0 #adb5bd;
  padding-left: 10px;
  transition: 0.6s;
}
input:focus {
  outline-color: #fff;
}
.select {
  width: 100px;
  margin-right: 4px;
}
</style>