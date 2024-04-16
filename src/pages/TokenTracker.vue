<template>
  <div class="box">
    
    <el-container class="container-xxl">
      <el-aside class="responsive-aside" ></el-aside>
      <el-main>
        <el-row>
      <el-col :span="24">
        <div class="grid-content ep-bg-purple-dark grid-content_h3">
          <h3>Token Tracker(ERC-20)</h3>
        </div>
      </el-col>
    </el-row>
    <el-row class="box-table">
      <div class="demo-pagination-block box-table_header">
        <div class="demonstration">A total of {{total}} Token Contracts found</div>
        <el-input style="width: 15rem" placeholder="Please enter your search" v-model="searchText" prefix-icon="Search"
          @input="handleSearchInput" />
      </div>
      <el-table size="default" :header-cell-style="{ color: '#0784c3' }" :data="filteredData"
        :default-sort="{ prop: ['price', 'chage', 'volume', 'virculating'], order: 'descending' }" style="width: 100%">
        <el-table-column prop="contractaddress" label="Token" width="200" >
          <template v-slot="scope">
           <div class="token_div">
            <el-icon>
              <Position />
            </el-icon>
            <router-link class="skyblue-text" :to="{ name:'token',params:{address:scope.row.contractaddress} }">{{ scope.row.contractaddress }}</router-link>
            <el-tooltip content="Cross-Chain" placement="top">
              <el-icon>
                <InfoFilled />
              </el-icon>
            </el-tooltip>
           </div>
          </template>
        </el-table-column>
        <el-table-column
          header-align="center"
          align="center"
          prop="ercname"
          label="Token name" >
        </el-table-column>
        <el-table-column
          header-align="center"
          align="center"
          prop="ercsymbol"
          label="Token symbol" >
        </el-table-column>
        <el-table-column
          header-align="center"
          align="center"
          prop="totalsupply"
          label="totalsupply" >
        </el-table-column>
        <el-table-column
          header-align="center"
          align="center"
          prop="decimals"
          label="decimals" >
        </el-table-column>
        <el-table-column prop="price" sortable label="Price" >
          <template #header>
            <el-tooltip content="Click for descending sort" placement="top">
              <span>Price</span>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column prop="change" sortable label="Change (%)" width="180">
          <template #header>
            <el-tooltip content="Click for descending sort" placement="top">
              <span>Change (%)</span>
            </el-tooltip>
          </template>
          <!-- <template #default="{ row }">
            <span v-html="formatChangeColor(row.change)" />
          </template> -->
        </el-table-column>
        <el-table-column prop="volume" sortable label="Volume (24H)">
          <template #header>
            <el-tooltip content="Click for descending sort" placement="top">
              <span>Volume (24H)</span>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column prop="virculating" sortable label="Circulating Market Cap ">
          <template #header>
            <el-tooltip content="Click for descending sort" placement="top">
              <span>Circulating Market Cap</span>
            </el-tooltip>
            <el-tooltip content="Calculated by multiplying the number of tokens in
circulating supply across all chains with the current market
price per token." placement="top">
              <el-icon class="el-icon--right">
                <QuestionFilled />
              </el-icon>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column prop="onchain" label="Onchain Market Cap">
          <template #header>
            <span>Onchain Market Cap</span>
            <el-tooltip content="Calculated by multiplying the token's Total Supply on MNT
Smart Chain with the current market price per token.
Numbers may be unrealistic if the onchain supply is much
larger than the reported circulating supply." placement="top">
              <el-icon class="el-icon--right">
                <QuestionFilled />
              </el-icon>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column prop="holders" label="Holders">
          <template #header>
            <el-tooltip content="Click for descending sort" placement="top">
              <span>Holders</span>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
      <div class="demo-pagination-block box-table_header">
        <el-pagination background v-model:current-page="currentPage4" v-model:page-size="pageSize4" :page-sizes="[10, 25, 50, 100]"
          small layout=" sizes, prev, pager, next" :total="total" @size-change="handleSizeChange"
          @current-change="getTokenList" />
      </div>
    </el-row>
      </el-main>
      <el-aside class="responsive-aside" ></el-aside>
    </el-container>
  </div>
</template>

<script setup>
import { ref, computed,onMounted } from 'vue'
import { getTokenPage } from '@/api/toTokens';
const tableData = ref([])
const currentPage4 = ref(1)
const total = ref(0)
const searchText = ref('');
const pageSize4 = ref(10)
const handleSizeChange = (val) => {
  getTokenList()
}
const getTokenList = async (pager = 1) => {
  try {
    currentPage4.value = pager;
    const response = await getTokenPage(currentPage4.value, pageSize4.value)
    tableData.value = response.data.list;
    total.value = response.data.total;
    console.log(tableData.value);
  } catch (error) {
    console.error('Error fetching data:', error)
  }
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
onMounted(() => {
  getTokenList();
})
</script>

<style scoped>
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
.box {
  background-color: #f9fafc;
}

.grid-content_h3 {
  margin: 0 2rem;
  padding: 19px 0;
  border-bottom: 1px solid #dcdfe6;
}

.blocks_heade {
  margin: 20px 2rem;
}

.blocks_header {
  background-color: #fff;
  padding: 10px 10px;
  border: 1px solid #dcdfe6;
  border-radius: 10px;
  margin-right: 10px;
  margin-top: 10px;
}

.blocks_header p {
  font-size: 12px;
  color: #88877d;
}

.blocks_header .el-link {
  font-weight: bold;
}

.box-table {
  margin: 10px 2rem;
}

.box-table_header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}

@media (max-width: 768px) {
  .box-table_header {
    flex-wrap: wrap;
  }
  .box-table,.grid-content_h3{
        margin: 0px;
    }
}
.skyblue-text {
  width: 7.5rem;
  color: #0693cc;
  margin-right: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.token_div{
display: flex;
align-items: center;
}
</style>