<template>
  <div class="box">
    <el-row>
    <el-col :span="24"><div class="grid-content ep-bg-purple-dark grid-content_h3">
      <h3>Blocks</h3>
      </div>
      </el-col>
  </el-row>
  <el-row class="blocks_heade"> 
    <el-col :span="5" :xs="24" :sm="12" :md="12" :lg="6"><div class="grid-content ep-bg-purple-dark blocks_header" >
      <p>NETWORK UTILIZATION(24H)</p>
      <el-link>12.7%</el-link>
    </div>
    </el-col>
    <el-col :span="5" align :xs="24" :sm="12" :md="12" :lg="6"><div class="grid-content ep-bg-purple-dark blocks_header" >
      <p>NETWORK UTILIZATION(24H)</p>
      <el-link>12.7%</el-link>
      </div></el-col>
      <el-col :span="5" align :xs="24" :sm="12" :md="12" :lg="6"><div class="grid-content ep-bg-purple-dark blocks_header" >
      <p>NETWORK UTILIZATION(24H)</p>
      <el-link>12.7%</el-link>
      </div>
      </el-col>
      <el-col :span="5" align :xs="24" :sm="12" :md="12" :lg="6"><div class="grid-content ep-bg-purple-dark blocks_header" >
      <p>NETWORK UTILIZATION(24H)</p>
      <el-link>12.7%</el-link>
      </div>
      </el-col>
  </el-row>
  <el-row class="box-table">
    <div class="demo-pagination-block box-table_header">
    <div class="demonstration"><p>Total of 36,899,505 blocks</p><span>(Showing blocks between #36949710 to #36949734)</span></div>
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
    <el-table-column prop="block" label="Block" width="120">
      <template v-slot="scope">
            <router-link class="skyblue-text" :to="{ path: '/block' }">{{ scope.row.block }}</router-link>
        </template>
    </el-table-column>
    <el-table-column prop="name" label="Age" width="100" ></el-table-column>
    <el-table-column prop="address" label="Txn" width="60">
      <template v-slot="scope">
            <router-link class="skyblue-text" :to="{ path: '/txs' }">{{ scope.row.address }}</router-link>
        </template>
    </el-table-column>
    <el-table-column prop="validator" label="Validator">
      <template v-slot="{ row }">
      <!-- 添加Tooltip组件 -->
      <router-link class="skyblue-text" to="/address" >{{ row.validator }}</router-link>
      <el-tooltip content="Copy Address" placement="top">
        <el-button  icon="CopyDocument" @click="copyToClipboard(row.validator)">
        </el-button>
      </el-tooltip>
      
    </template>
    </el-table-column>
    <el-table-column prop="gasused" label="Gas used" >
      <template v-slot="{ row }">
      {{ row.gasused }}
      <el-progress :percentage="50" /> 
    </template>
    </el-table-column>
    <el-table-column prop="gaslimit" label="Gas Limit" />
    <el-table-column prop="reward" label="Reward" />
    <el-table-column prop="burntfees" label="Burnt Fees (BNB)" />
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
    block: '36949734',
    name: '5 secs ago',
    address: '153',
    validator:'Validator:Legend Il',
    gasused:'12,974,406 (9%)',
    gaslimit:'140,000,000',
    reward:'0.04062 BNB',
    burntfees:'0.00406 BNB'
  },
  {
    block: '36949734',
    name: '5 secs ago',
    address: '153',
    validator:'Validator:Legend Il',
    gasused:'12,974,406 (9%)',
    gaslimit:'140,000,000',
    reward:'0.04062 BNB',
    burntfees:'0.00406 BNB'
  },{
    block: '36949734',
    name: '5 secs ago',
    address: '153',
    validator:'Validator:Legend Il',
    gasused:'12,974,406 (9%)',
    gaslimit:'140,000,000',
    reward:'0.04062 BNB',
    burntfees:'0.00406 BNB'
  },{
    block: '36949734',
    name: '5 secs ago',
    address: '153',
    validator:'Validator:Legend Il',
    gasused:'12,974,406 (9%)',
    gaslimit:'140,000,000',
    reward:'0.04062 BNB',
    burntfees:'0.00406 BNB'
  },{
    block: '36949734',
    name: '5 secs ago',
    address: '153',
    validator:'Validator:Legend Il',
    gasused:'12,974,406 (9%)',
    gaslimit:'140,000,000',
    reward:'0.04062 BNB',
    burntfees:'0.00406 BNB'
  },{
    block: '36949734',
    name: '5 secs ago',
    address: '153',
    validator:'Validator:Legend Il',
    gasused:'12,974,406 (9%)',
    gaslimit:'140,000,000',
    reward:'0.04062 BNB',
    burntfees:'0.00406 BNB'
  },{
    block: '36949734',
    name: '5 secs ago',
    address: '153',
    validator:'Validator:Legend Il',
    gasused:'12,974,406 (9%)',
    gaslimit:'140,000,000',
    reward:'0.04062 BNB',
    burntfees:'0.00406 BNB'
  },{
    block: '36949734',
    name: '5 secs ago',
    address: '153',
    validator:'Validator:Legend Il',
    gasused:'12,974,406 (9%)',
    gaslimit:'140,000,000',
    reward:'0.04062 BNB',
    burntfees:'0.00406 BNB'
  },{
    block: '36949734',
    name: '5 secs ago',
    address: '153',
    validator:'Validator:Legend Il',
    gasused:'12,974,406 (9%)',
    gaslimit:'140,000,000',
    reward:'0.04062 BNB',
    burntfees:'0.00406 BNB'
  },{
    block: '36949734',
    name: '5 secs ago',
    address: '153',
    validator:'Validator:Legend Il',
    gasused:'12,974,406 (9%)',
    gaslimit:'140,000,000',
    reward:'0.04062 BNB',
    burntfees:'0.00406 BNB'
  },{
    block: '36949734',
    name: '5 secs ago',
    address: '153',
    validator:'Validator:Legend Il',
    gasused:'12,974,406 (9%)',
    gaslimit:'140,000,000',
    reward:'0.04062 BNB',
    burntfees:'0.00406 BNB'
  },{
    block: '36949734',
    name: '5 secs ago',
    address: '153',
    validator:'Validator:Legend Il',
    gasused:'12,974,406 (9%)',
    gaslimit:'140,000,000',
    reward:'0.04062 BNB',
    burntfees:'0.00406 BNB'
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
    /* 自动换行 */
    flex-wrap: wrap;
  }
}
.demonstration span{
  font-size: 10px;
  color: #6c757d;
}
.skyblue-text{
  color: #0693cc;
}
</style>