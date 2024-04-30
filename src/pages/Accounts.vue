<template>
    <div class="box">
        <el-container class="container-xxl">
            <el-aside class="responsive-aside"></el-aside>
            <el-main>
                <el-row>
                    <el-col :span="24">
                        <div class="grid-content ep-bg-purple-dark grid-content_h3">
                            <h3 style="font-size: 18.75px; color: #212529; font-weight: 500;">Top Accounts by MNT Balance</h3>
                        </div>
                    </el-col>
                </el-row>
                <el-row class="box-table">
                    <div class="demo-pagination-block box-table_header">
                        <div class="demonstration">
                            <p style="font-size: 14.4992px; color: #212529;">More than <span style="font-size: 14.4992px; color: #0784C3;">{{ total }} accounts found</span> (24,058,964.14 MNT)</p>
                            <span style="font-size: 12.6868px; color: 6C757D">(Showing the last 10,000 top accounts only)</span>
                        </div>
                    </div>
                    <el-table :data="tableData" style="width: 100%" size="default" :row-style="{ height: '70px' }">
                        <el-table-column type="index" label="#" />
                        <el-table-column prop="address" label="Address" show-overflow-tooltip width="450">
                            <template v-slot="scope">
                                <router-link class="skyblue-text"
                                    :to="{ name: 'address', params: { address: scope.row.address } }">
                                    {{ scope.row.address }}</router-link>
                            </template>
                        </el-table-column>
                        <!-- <el-table-column prop="percentage" label="Name Tag" align="center"></el-table-column> -->
                        <el-table-column style="font-size: 100px;" prop="balance" label="Balance" >
                            <template v-slot="scope">
                                <span style="font-size: 14.4992px; color: #212529;">{{ scope.row.balance }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="percentage" label="Percentage">
                            <template v-slot="scope">
                                <span style="font-size: 14.4992px; color: #212529;">{{ scope.row.percentage }}%</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="txnCount" label="Txn Count" >
                            <template v-slot="scope">
                                <span style="font-size: 14.4992px; color: #212529;">{{ scope.row.txnCount }}</span>
                            </template>
                        </el-table-column>
                    </el-table>
                    <div class="demo-pagination-block table_header">
                        <span>Show rows:</span>
                        <el-pagination v-model:current-page="currentPage4" v-model:page-size="pageSize4"
                            :page-sizes="[10, 25, 50, 100]" background small :pager-count="5"
                            layout=" sizes,prev, pager, next" :total="total" @size-change="handleSizeChange"
                            @current-change="getBalancePageData" />
                    </div>
                </el-row>
            </el-main>
            <el-aside class="responsive-aside"></el-aside>
        </el-container>
    </div>
</template>

<script setup>
import { ref, onMounted,computed } from 'vue'
import { ElMessage } from 'element-plus';
import { getBalancePage } from '@/api/accounts';

const tableData = ref([])
const currentPage4 = ref(1)
const total = ref(0)
const pageSize4 = ref(10)
const copiedText = ref('');

const getBalancePageData = async (pager = 1) => {
    try {
        currentPage4.value = pager;
        const response = await getBalancePage(currentPage4.value, pageSize4.value)
        tableData.value = response.data.list;
        tableData.value.forEach(item => {
        const balance = item.balance || 0;
        if(!isNaN(balance)){
            const result = parseFloat(balance) / 10 ** 18;
           item.balance =  0 ? '0' : result.toFixed(6);
        }
    })
        total.value = response.data.total;
        console.log(tableData.value);
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
const handleSizeChange = (val) => {
    getBalancePageData()
}
// const handleCurrentChange = (val) => {
//   getBlockPageData()
// }
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
onMounted(() => {
    getBalancePageData()
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
    background-color: #fff;
    border-radius: 15px;
}

.box-table_header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 20px 3px 10px;
}

.table_header {
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 20px 12px 20px;
    color: #6c757d;
    font-size: 14px;
}

.table_header span {
    margin-right: 5px;
}

@media (max-width: 768px) {
    .box-table_header {
        flex-wrap: wrap;
    }

    .box-table,
    .grid-content_h3 {
        margin: 0px;
    }

    .el-main {
        --el-main-padding: 0px;
    }
}

.demonstration {
    margin-left: 12px;
}

.demonstration span {
    font-size: 12px;
    color: #6c757d;
}

.skyblue-text {
    color: #0784C3;
    font-size: 14.4992px;
}
:deep(.el-table--default .cell) {
  font-size: 12.5625px;
  color: #212529;
  font-weight: 500;
}
</style>