<template>
    <div class="box">
        <el-container class="container-xxl">
            <!-- <el-aside class="responsive-aside"></el-aside> -->
            <el-main>
                <el-row>
                    <el-col :span="24">
                        <div class="grid-content_h3">
                            <h3 style="font-size: 18.75px; color: #212529; font-weight: 500;">Token Transfers (ERC-20)</h3>
                        </div>
                    </el-col>
                </el-row>
                <el-row class="box-table">
                    <div class="demo-pagination-block box-table_header">
                        <div>
                            <p style="font-size: 14.4992px; color: #000; font-weight: 440;">More than {{ total }} transactions found</p>
                            <span style="font-size: 12.6868px; color: #6C757D;">(Showing the last 10,000 records only)</span>
                        </div>
                        <el-pagination background v-model:current-page="currentPage4" v-model:page-size="pageSize4"
                            :page-sizes="[10, 25, 50, 100]" :pager-count="5" layout="sizes,prev, pager, next"
                            :total="total" small @size-change="handleSizeChange" @current-change="getTransAction" />
                    </div>
                    <el-table v-loading="loading" :data="tableData" style="width: 100%" size="default" :row-style="{ height: '70px' }">
                        <el-table-column prop="transactionHash " label="Txn Hash" width="150">
                            <template v-slot="scope">
                                <router-link class="skyblue-text ellipsis-text"
                                    :to="{ name: 'tx', params: { hash: scope.row.transactionHash } }">
                                    {{ scope.row.transactionHash }}
                                </router-link>
                            </template>
                        </el-table-column>
                        <el-table-column prop="method" label="Method">
                            <template v-slot="scope">
                                <el-tooltip :content="scope.row.method" placement="top">
                                    <el-button style="width: 4rem; height: 1.5rem; font-size: 10.8744px; color: #000; background-color: #F8F9FA; border-radius: 8px;" >{{ scope.row.method }}</el-button>
                                </el-tooltip>
                            </template>
                        </el-table-column>
                        <el-table-column prop="blockNumber" label="Block" width="82">
                            <template v-slot="scope">
                                <router-link class="skyblue-text"
                                    :to="{ name: 'block', params: { blockNumber: scope.row.blockNumber } }">{{
                                        scope.row.blockNumber
                                    }}</router-link>
                            </template>
                        </el-table-column>
                        <el-table-column prop="formattedTime" label="Age" width="150">
                            <template v-slot="scope">
                                <span style="font-size: 14.4992px; color: #212529;">{{ scope.row.formattedTime }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="from" label="From" width="250" align="center">
                            <template v-slot="scope">
                                <el-tooltip :content="scope.row.from" placement="top">
                                    <router-link class="skyblue-text"
                                        :to="{ name: 'address', params: { address: scope.row.from } }">{{ scope.row.from
                                        }}</router-link>
                                </el-tooltip>
                                <el-tooltip v-if="!scope.row.isCopied" content="Copy Address" placement="top">
                                    <el-button text icon="CopyDocument"
                                        @click="copyFormClipboard(scope.row.from, scope.row)">
                                    </el-button>
                                </el-tooltip>
                                <el-tooltip v-else content="Copied!" placement="top">
                                    <el-button text icon="Check" @click="copyFormClipboard(scope.row.from, scope.row)">
                                    </el-button>
                                </el-tooltip>
                                <el-button style="margin-left:2.5rem" type="success" icon="right" circle plain />
                            </template>
                        </el-table-column>
                        <el-table-column prop="to" label="To" width="160">
                            <template v-slot="scope">
                                <!-- <el-tooltip v-if="scope.row.to" content="Contract" placement="top">
                            <el-button style="margin-right:5px" icon="Document">
                            </el-button>
                        </el-tooltip> -->
                                <el-tooltip :content="scope.row.to" placement="top">
                                    <router-link class="skyblue-text"
                                        :to="{ name: 'address', params: { address: scope.row.to } }">{{ scope.row.to
                                        }}</router-link>
                                </el-tooltip>
                                <el-tooltip v-if="!scope.row.istoCopied" content="Copy Address" placement="top">
                                    <el-button text icon="CopyDocument"
                                        @click="copyToClipboard(scope.row.to, scope.row)">
                                    </el-button>
                                </el-tooltip>
                                <el-tooltip v-else content="Copied!" placement="top">
                                    <el-button text icon="Check" @click="copyToClipboard(scope.row.to, scope.row)">
                                    </el-button>
                                </el-tooltip>
                            </template>
                        </el-table-column>
                        <el-table-column prop="value" label="Value">
                            <template v-slot="scope">
                                <el-tooltip :content="`${scope.row.value}`" placement="top">
                                    <span class="ellipsis-text">{{ scope.row.value }}</span>
                                </el-tooltip>
                            </template>
                        </el-table-column>
                        <el-table-column prop="ercName" label="Token" />
                    </el-table>
                    <div class="demo-pagination-block table_header">
                        <span>Show rows:</span>
                        <el-pagination background v-model:current-page="currentPage4" v-model:page-size="pageSize4"
                            :page-sizes="[10, 25, 50, 100]" :pager-count="5" small layout="sizes,prev, pager, next"
                            :total="total" @size-change="handleSizeChange" @current-change="getTransAction" />
                    </div>
                </el-row>
            </el-main>
            <!-- <el-aside class="responsive-aside"></el-aside> -->
        </el-container>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { ElMessage } from 'element-plus';
import { getAllContact } from '@/api/toTokens';
import { ethers } from "ethers";
const tableData = ref([])
const currentPage4 = ref(1)
const pageSize4 = ref(10)
const total = ref(0)
const copiedText = ref('');
let loading = ref(false)
const handleSizeChange = (val) => {
    getTransAction()
}
const getTransAction = async (pager = 1) => {
    try {
        loading.value = true
        currentPage4.value = pager;
        const response = await getAllContact(currentPage4.value, pageSize4.value)
        tableData.value = response.data.list;
        tableData.value.forEach(item => {
            item.method = item.method ||item.methodHash;
            const decimals = item.decimals || 0;
            const values = item.value || 0;
            item.value = ethers.formatUnits(parseInt(values, 16).toString(), decimals);
        })
        total.value = response.data.total;
        timestamps();
        loading.value = false
    } catch (error) {
        console.error('Error fetching data:', error)
    }
}
const timestamps = () => {
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
}
function copyFormClipboard(text, row) {
    row.isCopied = true;
    setTimeout(() => { row.isCopied = false; }, 2000);
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
function copyToClipboard(text, row) {
    row.istoCopied = true;
    setTimeout(() => { row.istoCopied = false; }, 2000);
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
    getTransAction();
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
    padding: 30px 12px 20px;
}

.table_header {
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 30px 12px 30px;
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
}

.ContentPlaceHolder1_mainboxes {
    width: 100%;
    border-radius: 15px;
    margin-bottom: 1.25rem;
    background-color: #fff;
    border: 1px solid #dee2e6;
}

.ContentPlaceHolder1 {
    margin-right: 5.75rem;
}

@media (max-width: 767px) {

    .card-ul,
    .card-li {
        padding: 5px;
    }

    .card_p {
        font-size: 10px;
    }
}

.card-left {
    display: flex;
}

.card_p {
    font-size: 12px;
}

.card {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding: 15px;
}

.card-right {
    margin-top: 13px;
}

.card-box {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
    margin-right: 10px;
    margin-left: 10px;
}

.skyblue-text {
    color: #0784C3;
    font-size: 14.4992px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

:deep(.cell) {
    display: flex;
    justify-content: center;
}

.ellipsis-text {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14.4992px;
    color: #212529;
}
:deep(.el-table--default .cell) {
  font-size: 12.5625px;
  color: #212529;
  font-weight: 500;
}
</style>