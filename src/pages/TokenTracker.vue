<template>
  <div class="box">
    <el-row>
    <el-col :span="24"><div class="grid-content ep-bg-purple-dark grid-content_h3">
      <h3>Token Tracker(BEP-20)</h3>
      </div>
      </el-col>
  </el-row>
  <el-row class="box-table">
    <div class="demo-pagination-block box-table_header">
    <div class="demonstration">A total of 1,363 Token Contracts found</div>
  </div>
    <el-table :data="tableData" style="width: 100%" >
    <el-table-column prop="date" label="Token" width="180">
      <template v-slot="scope">
            <router-link :to="{ path: '/token' }">{{ scope.row.date }}</router-link>
        </template>
    </el-table-column>
    <el-table-column prop="name" label="Price" width="180" />
    <el-table-column prop="address" label="Change (%)" />
    <el-table-column prop="validator" label="Volume (24H)" />
    <el-table-column prop="gasused" label="Circulating Market Cap" />
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
const handleSizeChange = (val) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val) => {
  console.log(`current page: ${val}`)
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
 
</style>