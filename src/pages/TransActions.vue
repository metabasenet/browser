<template>
    <div class="box">
      <el-row>
      <el-col :span="24"><div class="grid-content ep-bg-purple-dark grid-content_h3">
        <h3>Transactions</h3>
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
      <el-table-column prop="date" label="Date" width="180" >
        <template v-slot="scope">
            <router-link :to="{ path: '/tx' }">{{ scope.row.date }}</router-link>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
      <el-table-column prop="validator" label="Validator" >
        <template v-slot="{ row }">
      <!-- 添加Tooltip组件 -->
      {{ row.validator }}
      <el-tooltip content="Copy Address" placement="top">
        <el-button  icon="CopyDocument" @click="copyToClipboard(row.validator)">
        </el-button>
      </el-tooltip>
    </template>
      </el-table-column>
      <el-table-column prop="gasused" label="Gasused" >
        <template v-slot="{ row }">
      <!-- 添加Tooltip组件 -->
      {{ row.gasused }}
      <el-tooltip content="Copy Address" placement="top">
        <el-icon><Right /></el-icon>
      </el-tooltip>
    </template>
      </el-table-column>
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
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
      validator:'Validator:Legend Il',
      gasused:'18,990,403 (14%)',
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
      validator:'Validator:Legend Il',
      gasused:'18,990,403 (14%)',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
      validator:'Validator:Legend Il',
      gasused:'18,990,403 (14%)',
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
      validator:'Validator:Legend Il',
      gasused:'18,990,403 (14%)',
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
/* 在小屏幕下减小间距 */
@media (max-width: 767px) {
  .card-ul,
  .card-li {
    padding: 5px;
  }
  
  /* 减小字体大小 */
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
  </style>