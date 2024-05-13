<template>
  <div class="box">
    <el-container class="container-xxl">
      <!-- <el-aside class="responsive-aside" ></el-aside> -->
      <el-main>
        <el-row>
          <el-col :span="24">
            <div class="grid-content_h3">
              <h3 style="font-size: 18.75px; color: #212529; font-weight: 500;">Token Tracker(ERC-20)</h3>
            </div>
          </el-col>
        </el-row>
        <el-row class="box-table">
          <div class="demo-pagination-block box-table_header">
            <div class="demonstration" style="font-size: 14.4992px; color: #000;">A total of <span style="font-weight: 700">{{total}}</span> Token Contracts found</div>
            <el-input style="width: 15rem" placeholder="Please enter your search" v-model="searchText" prefix-icon="Search"
              @input="handleSearchInput" />
          </div>
          <el-table v-loading="loading" size="default" :header-cell-style="{ color: '#0784c3', fontSize: '12.5625px' }" :data="filteredData"
            :default-sort="{ prop: ['price', 'chage', 'volume', 'virculating'], order: 'descending' }" style="width: 100%" :row-style="{ height: '70px' }">
            <el-table-column prop="contractaddress" label="Token" width="470">
              <template v-slot="scope">
              <div class="token_div">
                <el-icon>
                  <Position />
                </el-icon>
                <router-link class="skyblue-text" :to="{ name:'token',params:{address:scope.row.contractAddress} }">{{ scope.row.contractAddress }}</router-link>
                <el-tooltip content="Cross-Chain" placement="top">
                  <el-icon>
                    <InfoFilled />
                  </el-icon>
                </el-tooltip>
              </div>
              </template>
            </el-table-column>
            <el-table-column
              prop="ercName"
              label="Token name" >
              <template v-slot="scope"><span style="font-size: 14.4992px; color: #212529;">{{ scope.row.ercName }}</span></template>
            </el-table-column>
            <el-table-column
              prop="ercSymbol"
              label="Token symbol" >
              <template v-slot="scope"><span style="font-size: 14.4992px; color: #212529;">{{ scope.row.ercSymbol }}</span></template>
            </el-table-column>
            <el-table-column
              prop="totalSupply"
              label="totalsupply" >
              <template v-slot="scope"><span style="font-size: 14.4992px; color: #212529;">{{ scope.row.totalSupply }}</span></template>
            </el-table-column>
            <el-table-column
              prop="decimals"
              label="decimals" >
              <template v-slot="scope"><span style="font-size: 14.4992px; color: #212529;">{{ scope.row.decimals }}</span></template>
            </el-table-column>
            <el-table-column prop="holders" label="Holders">
              <template v-slot="scope"><span style="font-size: 14.4992px; color: #212529;">{{ scope.row.holders }}</span></template>
            </el-table-column>
          </el-table>
          <div class="demo-pagination-block box-table_header">
            <el-pagination background v-model:current-page="currentPage4" v-model:page-size="pageSize4" :page-sizes="[10, 25, 50, 100]"
              small layout=" sizes, prev, pager, next" :total="total" @size-change="handleSizeChange"
              @current-change="getTokenList" />
          </div>
        </el-row>
      </el-main>
      <!-- <el-aside class="responsive-aside" ></el-aside> -->
    </el-container>
  </div>
</template>

<script setup>
import { ref, computed,onMounted } from 'vue'
import { getTokenPage } from '@/api/toTokens';
import { ethers } from 'ethers';
const tableData = ref([])
const currentPage4 = ref(1)
const total = ref(0)
const searchText = ref('');
const pageSize4 = ref(10)
let loading = ref(false)
const handleSizeChange = (val) => {
  // getTokenList()
}
const getTokenList = async (pager = 1) => {
  try {
    loading.value = true
    currentPage4.value = pager;
    const response = await getTokenPage(currentPage4.value, pageSize4.value)
    tableData.value = response.data.list;
    console.log('111111',tableData.value);
    total.value = response.data.total;
    loading.value = false
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}
const filteredData = computed(() => {
  return tableData.value.filter(item => {
    const decimals = item.decimals || 0;
    const values = item.totalSupply
    item.totalSupply= ethers.formatUnits(values.toLocaleString('en-US').replace(/,/g, ''), decimals);
    if (item.ercName && searchText.value) {
      return item.name.toLowerCase().includes(searchText.value.toLowerCase());
    }
    return !searchText.value;
  });
});
const handleSearchInput = (value) => {
  console.log(value);
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
    /* width: 10rem; */
    width: 3vw;
    opacity: 0.5;
    /* background-color: #fff;  */
  }
}
.box {
  background-color: #f9fafc;
}

.grid-content_h3 {
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
  margin: 10px 0;
  background-color: #fff;
  border-radius: 15px;
}

.box-table_header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 30px 15px 30px;
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
  /* width: 7.5rem; */
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