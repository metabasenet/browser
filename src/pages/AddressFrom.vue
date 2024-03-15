<template>
  <div class="box">
    <el-row>
    <el-col :span="24"><div class="grid-content ep-bg-purple-dark grid-content_h3">
      <h3>Address 0xB1b8a9FfB31F9475b7f1A0b3d0525348a6E9F184</h3>
      </div>
      </el-col>
  </el-row>
  <el-row>
    <el-col :span="24"><div class="grid-content ep-bg-purple-dark grid-content_h3">
      <p>BscScan - Sponsored slots available. Book your slot here!</p>
      </div>
      </el-col>
  </el-row>
  <el-row class="blocks_heade"> 
    <el-col :span="7" :xs="24" :sm="12" :md="8" :lg="8"><div class="grid-content ep-bg-purple-dark blocks_header" >
      <p>NETWORK UTILIZATION(24H)</p>
      <el-link>12.7%</el-link>
    </div>
    </el-col>
    <el-col :span="7" align :xs="24" :sm="12" :md="8" :lg="8"><div class="grid-content ep-bg-purple-dark blocks_header" >
      <p>NETWORK UTILIZATION(24H)</p>
      <el-link>12.7%</el-link>
      </div></el-col>
      <el-col :span="7" align :xs="24" :sm="12" :md="8" :lg="8"><div class="grid-content ep-bg-purple-dark blocks_header" >
      <p>NETWORK UTILIZATION(24H)</p>
      <el-link>12.7%</el-link>
      </div>
      </el-col>
  </el-row>
  <el-row class="box-table">
    <div class="demo-pagination-block box-table_header">
    <div class="demonstration">Total of 36,899,505 blocks</div>
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
  <el-row>
        <el-col :span="24" class="grid-content_h1">
            <span>
              A wallet address is a publicly available address that allows its owner to receive funds from another party. To access the funds in an address, you must have its private key. Learn more about addresses in our Knowledge Base.</span>
        </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'
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
const handleSizeChange = (val) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val) => {
  console.log(`current page: ${val}`)
}
</script>

<style scoped>
.grid-content_h1 {
  margin: 0 2rem;
  padding: 19px 0;
}
.grid-content_h1  span{
  font-size: 10px;
  color: #6c757d;
}
.box{
  background-color: #f9fafc;
}
.grid-content_h3 {
  margin: 0 2rem;
  padding: 19px 0;
  border-bottom: 1px solid #dcdfe6;
}
.grid-content_h3 p{
  font-size: 12px;
  color: #6c757d;
}
.blocks_heade{
  margin: 20px 2rem;
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
.skyblue-text{
  color: #0693cc;
  margin-right: 5px;
}
.ellipsis-text {
  white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis; 
}
</style>