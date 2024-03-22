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
    <el-input
      style="width: 15rem"
      placeholder="Please enter your search"
      v-model="searchText"
      prefix-icon="Search"
      @input="handleSearchInput"
    />
    </div>
    <el-table :header-cell-style="{ color: '#0784c3' }" :data="filteredData" :default-sort="{ prop: ['price','chage','volume','virculating'], order: 'descending' }" style="width: 100%" >
    <el-table-column prop="token" label="Token" width="180">
      <template v-slot="scope">
        <el-icon><Position /></el-icon>
            <router-link :to="{ path: '/token' }">{{ scope.row.token }}</router-link>
            <el-tooltip content="Cross-Chain" placement="top">
              <el-icon><InfoFilled /></el-icon>
  </el-tooltip>
        </template>
    </el-table-column>
    <el-table-column prop="price" sortable  label="Price" width="180" >
      <template #header>
        <el-tooltip content="Click for descending sort" placement="top">
          <span>Price</span>
        </el-tooltip>
      </template>
    </el-table-column>
    <el-table-column  prop="change" sortable  label="Change (%)"  >
      <template #header>
        <el-tooltip content="Click for descending sort" placement="top">
          <span>Change (%)</span>
        </el-tooltip>
      </template>
      <template #default="{ row }">
      <span v-html="formatChangeColor(row.change)" />
    </template>
    </el-table-column>
    <el-table-column prop="volume" sortable  label="Volume (24H)" >
      <template #header>
        <el-tooltip content="Click for descending sort" placement="top">
          <span>Volume (24H)</span>
        </el-tooltip>
      </template>
    </el-table-column>
    <el-table-column prop="virculating" sortable  label="Circulating Market Cap " >
      <template #header>
        <el-tooltip content="Click for descending sort" placement="top">
          <span>Circulating Market Cap</span>
        </el-tooltip>
        <el-tooltip content="Calculated by multiplying the number of tokens in
circulating supply across all chains with the current market
price per token." placement="top">
            <el-icon class="el-icon--right"><QuestionFilled /></el-icon>
        </el-tooltip>
      </template>
    </el-table-column>
    <el-table-column prop="onchain" label="Onchain Market Cap" >
      <template #header>
          <span>Onchain Market Cap</span>
        <el-tooltip content="Calculated by multiplying the token's Total Supply on BNB
Smart Chain with the current market price per token.
Numbers may be unrealistic if the onchain supply is much
larger than the reported circulating supply." placement="top">
            <el-icon class="el-icon--right"><QuestionFilled /></el-icon>
        </el-tooltip>
      </template>
    </el-table-column>
    <el-table-column prop="holders" label="Holders" >
      <template #header>
        <el-tooltip content="Click for descending sort" placement="top">
          <span>Holders</span>
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
import { ref,computed  } from 'vue'
const tableData = ref([
  {
    token: 'Binance-Peg BSC-USD',
    price: '$3,681.44',
    change: '-7.93%',
    volume:'$30,391,575,030.00',
    virculating:'$449,436,685,432.00',
    onchain:'$2,227,876,200.00',
    holders:'1,864,000',
  },{
    token: 'Binance-Peg BSC-USD',
    price: '$3,682.44',
    change: '-7.93%',
    volume:'$30,391,575,030.00',
    virculating:'$449,436,685,432.00',
    onchain:'$2,227,876,200.00',
    holders:'1,864,000',
  },
  {
    token: 'Binance-Peg BSC-USD',
    price: '$3,683.44',
    change: '-7.93%',
    volume:'$30,391,575,030.00',
    virculating:'$449,436,685,432.00',
    onchain:'$2,227,876,200.00',
    holders:'1,864,000',
  },
  {
    token: 'Binance-Peg BSC-USD',
    price: '$3,687.44',
    change: '-7.93%',
    volume:'$30,391,575,030.00',
    virculating:'$449,436,685,432.00',
    onchain:'$2,227,876,200.00',
    holders:'1,864,000',
  },
  {
    token: 'Binance-Peg BSC-USD',
    price: '$3,685.44',
    change: '-7.93%',
    volume:'$30,391,575,030.00',
    virculating:'$449,436,685,432.00',
    onchain:'$2,227,876,200.00',
    holders:'1,864,000',
  },
  {
    token: 'Binance-Peg BSC-USD',
    price: '$3,632.44',
    change: '-7.93%',
    volume:'$30,391,575,030.00',
    virculating:'$449,436,685,432.00',
    onchain:'$2,227,876,200.00',
    holders:'1,864,000',
  },
  {
    token: 'Binance-Peg BSC-USD',
    price: '$3,622.44',
    change: '-7.93%',
    volume:'$30,391,575,030.00',
    virculating:'$449,436,685,432.00',
    onchain:'$2,227,876,200.00',
    holders:'1,864,000',
  },
  {
    token: 'Binance-Peg BSC-USD',
    price: '$3,612.44',
    change: '-7.93%',
    volume:'$30,391,575,030.00',
    virculating:'$449,436,685,432.00',
    onchain:'$2,227,876,200.00',
    holders:'1,864,000',
  },
  {
    token: 'Binance-Peg BSC-USD',
    price: '$3,689.44',
    change: '-7.93%',
    volume:'$30,391,575,030.00',
    virculating:'$449,436,685,432.00',
    onchain:'$2,227,876,200.00',
    holders:'1,864,000',
  },
  
])
const currentPage4 = ref(1)
const searchText = ref('');
const pageSize4 = ref(20)
const handleSizeChange = (val) => {
  console.log(`${val} items per page`)
}
const filteredData = computed(() => {
  return tableData.value.filter(item => {
    if (item.name && searchText.value) {
      return item.name.toLowerCase().includes(searchText.value.toLowerCase());
    }
    return !searchText.value;
  });
});
const handleSearchInput = (value) => {
  searchText.value = value;
};
const formatChangeColor = (value) => {
  const color = value >= 0 ? '' : 'red';
  return `<span style="color: ${color}">${value}%</span>`;
};
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
    flex-wrap: wrap;
  }
}

</style>