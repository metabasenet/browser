<template>
  <div class="box">
    <el-row>
    <el-col :span="24">
      <div class="grid-content darkb_button grid-content_h3">
      <h3>Token Binance-Peg Ethereum Token (ETH) <el-button type="success" icon="Check" circle /></h3>
      <div>
        <el-button  type="primary">
        Buy<el-icon class="el-icon--right"><arrow-down /></el-icon>
      </el-button>
      <el-button  type="primary">
        Play<el-icon class="el-icon--right"><arrow-down /></el-icon>
      </el-button>
      <el-button  type="primary">
        Gaming<el-icon class="el-icon--right"><arrow-down /></el-icon>
      </el-button>
      </div>
      </div>
      </el-col>
  </el-row>
  <el-row class="blocks_heade">
    <el-col :span="24">
      <p class="blocks_heade_p">Sponsored:  Shido - Shido Network - One of the fastest Layer 1's launching! Buy SHIDO</p>
    <div class="ContentPlaceHolder1_lblWarning">
      <div>
    <el-tag type="info">BEP-20</el-tag>
    <el-tag type="info">Cross-Chain</el-tag>
    <el-tag type="info"># Binance</el-tag>
    <el-tag type="info"># Binance-Peg</el-tag>
    </div>
    <div >
      <el-dropdown style="margin-right:5px">
      <el-button type="primary">
        <el-icon class="el-icon--left"><Basketball /></el-icon>
        ethereum.org<el-icon class="el-icon--right"><arrow-down /></el-icon>
      </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>Action 1</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
          <el-dropdown-item>Action 3</el-dropdown-item>
          <el-dropdown-item>Action 4</el-dropdown-item>
          <el-dropdown-item>Action 5</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <el-dropdown>
      <el-button type="primary">
        <el-icon><Menu /></el-icon><el-icon class="el-icon--right"><arrow-down /></el-icon>
      </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>Action 1</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
          <el-dropdown-item>Action 3</el-dropdown-item>
          <el-dropdown-item>Action 4</el-dropdown-item>
          <el-dropdown-item>Action 5</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    </div>
    </div>
    </el-col>
  </el-row>
  <el-row class="blocks_heade"> 
  <el-col :span="5" :xs="24" :sm="12" :md="12" :lg="6"><div class="grid-content ep-bg-purple-dark blocks_header" >
    <p>NETWORK UTILIZATION(24H)</p>
    <el-link>5,028,546</el-link>
  </div>
  </el-col>
  <el-col :span="5" align :xs="24" :sm="12" :md="12" :lg="6"><div class="grid-content ep-bg-purple-dark blocks_header" >
    <p>NETWORK UTILIZATION(24H)</p>
    <el-link>222(Average)</el-link>
    </div></el-col>
    <el-col :span="5" align :xs="24" :sm="12" :md="12" :lg="6"><div class="grid-content ep-bg-purple-dark blocks_header" >
    <p>NETWORK UTILIZATION(24H)</p>
    <el-link>2,373.55MNT(0.04%)</el-link>
    </div>
    </el-col>
    <el-col :span="5" align :xs="24" :sm="12" :md="12" :lg="6"><div class="grid-content ep-bg-purple-dark blocks_header" >
    <p>NETWORK UTILIZATION(24H)</p>
    <el-link>0.2978 USD(18.64%)</el-link>
    </div>
    </el-col>
</el-row>
<el-row class="blocks_heade">
    <el-col :span="24">
      <el-button type="primary">Transfers</el-button>
      <el-button>Holders</el-button>
      <el-button>info</el-button>
      <el-button>DEX Trades</el-button>
      <el-button>Contract</el-button>
      <el-button>Analytics</el-button>
    </el-col>
  </el-row>
  <el-row class="box-table">
    <div class="demo-pagination-block box-table_header">
    <div class="demonstration">Total of 36,899,505 blocks</div>
    <el-pagination
      v-model:current-page="currentPage4"
      v-model:page-size="pageSize4"
      :page-sizes="[10, 20, 30, 40]"
      layout=" sizes, prev, pager, next, "
      :total="10"
      small
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
  <el-table :data="tableData" style="width: 100%" >
  <el-table-column prop="txnhash" label="Txn Hash" width="120">
    <template v-slot="scope">
          <router-link class="skyblue-text ellipsis-text" :to="{ path: '/tx' }">{{ scope.row.txnhash }}</router-link>
      </template>
  </el-table-column>
  <el-table-column prop="method" label="Method " width="120" >
    <template v-slot="scope">
      <el-tooltip :content="scope.row.method" placement="top">
        <el-button>{{ scope.row.method}}</el-button>
      </el-tooltip>
      </template>
  </el-table-column>
  <el-table-column prop="block" label="Block" width="100">
    <template v-slot="scope">
          <router-link class="skyblue-text" :to="{ path: '/block' }">{{ scope.row.block }}</router-link>
      </template>
  </el-table-column>
  <el-table-column prop="age" label="Age">
  </el-table-column>
  <el-table-column prop="from" label="From" width="250">
    <template v-slot="scope">
      <el-tooltip :content="scope.row.from" placement="top">
        <router-link class="skyblue-text" :to="{ path: '/address' }">{{ scope.row.from }}</router-link>
      </el-tooltip> 
      <el-tooltip content="Copy Address" placement="top">
        <el-button  icon="CopyDocument" @click="copyToClipboard(scope.row.from)">
      </el-button>
      </el-tooltip>
      <el-button style="margin-left:2.5rem" type="success" icon="right" circle plain/>
      </template>
  </el-table-column>
  <el-table-column prop="to" label="To" width="250" >
    <template v-slot="scope">
      <el-tooltip content="Contract" placement="top">
        <el-button style="margin-right:5px"  icon="Document" @click="copyToClipboard(scope.row.to)">
      </el-button>
      </el-tooltip>
      <el-tooltip :content="scope.row.to" placement="top">
        <router-link class="skyblue-text" :to="{ path: '/address' }">{{ scope.row.to }}</router-link>
      </el-tooltip> 
      <el-tooltip content="Copy Address" placement="top">
        <el-button  icon="CopyDocument" @click="copyToClipboard(scope.row.to)">
      </el-button>
      </el-tooltip>
      </template>
  </el-table-column>
  <el-table-column prop="value" label="Value" />
  <el-table-column prop="gasprice" label="Gas Price" />
</el-table>
  <div class="demo-pagination-block box-table_header">
    <el-pagination
      v-model:current-page="currentPage4"
      v-model:page-size="pageSize4"
      :page-sizes="[10, 20, 30, 40]"
      small
      layout=" sizes, prev, pager, next"
      :total="20"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
  </el-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus';
const tableData = ref([
{
  txnhash: '0x995d8e4d593fd45703c4aa26664606b9ad3de0f021be6586377db86ea45476e3',
  method : 'Deposit',
  block: '36956012',
  age:'7 secs ago',
  from:'Validator: Legend II',
  to:'BSC: Validator Set',
  value:'0.04062 BNB',
  gasprice:1
},{
  txnhash: '0x995d8e4d593fd45703c4aa26664606b9ad3de0f021be6586377db86ea45476e3',
  method : 'Deposit',
  block: '36956012',
  age:'7 secs ago',
  from:'Validator: Legend II',
  to:'BSC: Validator Set',
  value:'0.04062 BNB',
  gasprice:1
},{
  txnhash: '0x995d8e4d593fd45703c4aa26664606b9ad3de0f021be6586377db86ea45476e3',
  method : 'Deposit',
  block: '36956012',
  age:'7 secs ago',
  from:'Validator: Legend II',
  to:'BSC: Validator Set',
  value:'0.04062 BNB',
  gasprice:1
},{
  txnhash: '0x995d8e4d593fd45703c4aa26664606b9ad3de0f021be6586377db86ea45476e3',
  method : 'Deposit',
  block: '36956012',
  age:'7 secs ago',
  from:'Validator: Legend II',
  to:'BSC: Validator Set',
  value:'0.04062 BNB',
  gasprice:1
},{
  txnhash: '0x995d8e4d593fd45703c4aa26664606b9ad3de0f021be6586377db86ea45476e3',
  method : 'Deposit',
  block: '36956012',
  age:'7 secs ago',
  from:'Validator: Legend II',
  to:'BSC: Validator Set',
  value:'0.04062 BNB',
  gasprice:1
},{
  txnhash: '0x995d8e4d593fd45703c4aa26664606b9ad3de0f021be6586377db86ea45476e3',
  method : 'Deposit',
  block: '36956012',
  age:'7 secs ago',
  from:'Validator: Legend II',
  to:'BSC: Validator Set',
  value:'0.04062 BNB',
  gasprice:1
},{
  txnhash: '0x995d8e4d593fd45703c4aa26664606b9ad3de0f021be6586377db86ea45476e3',
  method : 'Deposit',
  block: '36956012',
  age:'7 secs ago',
  from:'Validator: Legend II',
  to:'BSC: Validator Set',
  value:'0.04062 BNB',
  gasprice:1
},{
  txnhash: '0x995d8e4d593fd45703c4aa26664606b9ad3de0f021be6586377db86ea45476e3',
  method : 'Deposit',
  block: '36956012',
  age:'7 secs ago',
  from:'Validator: Legend II',
  to:'BSC: Validator Set',
  value:'0.04062 BNB',
  gasprice:1
},{
  txnhash: '0x995d8e4d593fd45703c4aa26664606b9ad3de0f021be6586377db86ea45476e3',
  method : 'Deposit',
  block: '36956012',
  age:'7 secs ago',
  from:'Validator: Legend II',
  to:'BSC: Validator Set',
  value:'0.04062 BNB',
  gasprice:1
},{
  txnhash: '0x995d8e4d593fd45703c4aa26664606b9ad3de0f021be6586377db86ea45476e3',
  method : 'Deposit',
  block: '36956012',
  age:'7 secs ago',
  from:'Validator: Legend II',
  to:'BSC: Validator Set',
  value:'0.04062 BNB',
  gasprice:1
},{
  txnhash: '0x995d8e4d593fd45703c4aa26664606b9ad3de0f021be6586377db86ea45476e3',
  method : 'Deposit',
  block: '36956012',
  age:'7 secs ago',
  from:'Validator: Legend II',
  to:'BSC: Validator Set',
  value:'0.04062 BNB',
  gasprice:1
},{
  txnhash: '0x995d8e4d593fd45703c4aa26664606b9ad3de0f021be6586377db86ea45476e3',
  method : 'Deposit',
  block: '36956012',
  age:'7 secs ago',
  from:'Validator: Legend II',
  to:'BSC: Validator Set',
  value:'0.04062 BNB',
  gasprice:1
},{
  txnhash: '0x995d8e4d593fd45703c4aa26664606b9ad3de0f021be6586377db86ea45476e3',
  method : 'Deposit',
  block: '36956012',
  age:'7 secs ago',
  from:'Validator: Legend II',
  to:'BSC: Validator Set',
  value:'0.04062 BNB',
  gasprice:1
},{
  txnhash: '0x995d8e4d593fd45703c4aa26664606b9ad3de0f021be6586377db86ea45476e3',
  method : 'Deposit',
  block: '36956012',
  age:'7 secs ago',
  from:'Validator: Legend II',
  to:'BSC: Validator Set',
  value:'0.04062 BNB',
  gasprice:1
},
])
const currentPage4 = ref(1)
const pageSize4 = ref(20)
const copiedText = ref('');
const handleSizeChange = (val) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val) => {
  console.log(`current page: ${val}`)
}
function copyToClipboard(text) {
    copiedText.value = text;
    navigator.clipboard.writeText(text)
      .then(() => {
        ElMessage.success('Copy successful!');
      })
      .catch(err => {
        console.error('Copy failed:', err);
        ElMessage.error('Copy failed, please copy manually!');
      });
  }
</script>

<style scoped>
.box{
  background-color: #f9fafc;
}
.grid-content_h3 {
  margin: 0 2rem;
  padding: 19px 0;
  border-bottom: 1px solid #dcdfe6;
}
.blocks_heade{
 margin-top: 1.25rem;
 margin-left: 2rem;
 margin-right: 2rem;
}
.blocks_header{
  background-color: #fff;
  padding: 10px 10px;
  border: 1px solid #dcdfe6;
  border-radius: 10px;
  margin-right: 10px;
  margin-top: 10px;
}
.blocks_header p{
 font-size: 10px;
 color: #88877d;
}
.blocks_header .el-link{
  font-weight: bold;
}
.box-table{
  margin: 10px 2rem;
}
.box-table_header{
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}
@media (max-width: 768px) {
  .box-table_header{
    flex-wrap: wrap;
  }
}
.ContentPlaceHolder1_mainboxes{
width: 100%;
border-radius: 15px;
margin-bottom: 1.25rem;
background-color: #fff;
border: 1px solid #dee2e6;
}
.ContentPlaceHolder1{
margin-right: 5.75rem;
}
@media (min-width: 768px) {
.card-box {
  /* flex-direction: row; */
}
}

@media (max-width: 767px) {
.card-ul,
.card-li {
  padding: 5px;
}

.card_p {
  font-size: 8px;
}
}
.card-left{
display: flex;
}
.card_p{
font-size: 10px;
}
.card{  
display: flex;
align-items: flex-start;
flex-direction: column; 
padding: 15px;
}
.card-right{
margin-top: 13px;
}
.card-box {
display: flex;
justify-content: space-between;
border-bottom: 1px solid #e6e6e6;
margin-right: 10px;
margin-left: 10px;
}
.skyblue-text{
color: #0693cc;
margin-right: 5px;
}
.ellipsis-text {
white-space: nowrap; 
overflow: hidden;
text-overflow: ellipsis; 
}
.blocks_heade_p{
  color: #6c757d;
  font-size: 12px;
}
.el-tag{
  margin-top: 1.25rem;
  margin-right: .625rem;
}
.darkb_button{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.ContentPlaceHolder1_lblWarning{
  display: flex;
  justify-content: space-between;
}
</style>