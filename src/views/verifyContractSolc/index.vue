<template>
    <div>
        <el-container class="container-xxl">
            <el-aside class="responsive-aside"></el-aside>
            <el-main class="verify_main">
                <el-row :gutter="10">
                    <el-col :xs="24" :sm="24" :md="24" :lg="24">
                        <div class="verify_header">
                            <h2>Verify & Publish Contract Source Code</h2>
                            <span>Compiler Type: SINGLE FILE / CONCATENANTED METHOD</span>
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="24" :lg="24">
                        <div>
                            <p style="color:#6c757d">Info: A simple and structured interface for verifying smart
                                contracts that fit in a single file</p>
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="24" :lg="24">
                        <el-button style="margin: 10px 0;" type="primary">Contract Source Code</el-button>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="24" :lg="24">
                        <div class="verity-form">
                            <div class="verity_formbox">
                                <el-row>
                                    <el-col :span="24" style="margin:15px 0"> <el-alert type="info">
                                            <p>1. If the contract compiles correctly at REMIX, it should also compile
                                                correctly
                                                here.
                                            </p>
                                            <p>2. We have limited support for verifying contracts created by another
                                                contract
                                                and there
                                                is a timeout of up to 45 seconds for each contract compiled.</p>
                                            <p>3. For programatic contract verification, check out the Contract API
                                                Endpoint</p>
                                        </el-alert>
                                    </el-col>
                                </el-row>
                                <div style="height: 30px;"></div>
                                <el-row justify="space-between">
                                    <el-col :xs="24" :sm="24" :md="24" :lg="8">
                                        <h3 style="font-size: 12px; color: #909399">Contract Address</h3>
                                        <el-input v-model="formInline.contractaddress" disabled size="large" />
                                    </el-col>
                                    <el-col :xs="24" :sm="24" :md="24" :lg="5">
                                        <h3 style="font-size: 12px; color: #909399">Contract Name</h3>
                                        <div style="position: relative;" @mouseleave="arrowShow = false">
                                            <el-input v-model="formInline.contractname" size="large" />
                                            <ul v-show="arrowShow"
                                                style="position: absolute; top: 100%; background-color: #fff; width: 100%; border-radius: 4px; padding: 8px 0; border: #ecf5ff 1px solid; box-sizing: border-box;"
                                                >
                                                <li v-for="(item, index) in contractNameArr" :key="index"
                                                    @click="handleItemClick(item)"
                                                    style="padding: 5px 0; text-align: center; color: #626266; border-radius: 5px;"
                                                    class="liStyle">
                                                    {{ item }}</li>
                                            </ul>
                                            <div style="position: absolute; right: 5%; top: 30%; width: 10%; height: 50%; text-align: right;"
                                                v-show="contractNameArr.length != 0"
                                                @click="arrowShow = !arrowShow">
                                                <el-icon>
                                                    <ArrowDown />
                                                </el-icon>
                                            </div>
                                        </div>
                                    </el-col>
                                    <el-col :xs="24" :sm="24" :md="24" :lg="5">
                                        <h3 style="font-size: 12px; color: #909399">Compiler</h3>
                                        <el-select class="demo_select" v-model="formInline.compilerversion" disabled>
                                        </el-select>
                                    </el-col>
                                    <el-col :xs="24" :sm="24" :md="24" :lg="3">
                                        <h3 style="font-size: 12px; color: #909399">Optimization</h3>
                                        <el-select v-model="formInline.optimization" clearable>
                                            <el-option label="Yes" value="1" />
                                            <el-option label="No" value="0" />
                                        </el-select>
                                    </el-col>
                                </el-row>
                                <div style="height: 30px;"></div>
                                <el-row>
                                    <el-col :span="24">
                                        <el-upload action="#" :before-upload="beforeUpload" show-file-list
                                            :http-request="uploadFiles" :before-remove="beforeRemove"
                                            :file-list="fileList" :auto-upload="true" :limit="1">
                                            <el-button size="small" type="primary">Select
                                                file
                                            </el-button>
                                            <!-- :disabled="(formInline.contractname &&
                                            formInline.optimization) ? false : true" -->
                                            <template #tip>
                                                <div class="el-upload__tip">
                                                    Only.sol files can be uploaded
                                                </div>
                                            </template>
                                        </el-upload>
                                        <div v-for="(item, index) in formInline.testfile" :key="index"
                                            class="verify_file">
                                            <span>File {{ index + 1 }} of {{ formInline.testfile.length
                                                }}:</span>
                                            <span>{{ item.fileName || item.name }}</span>
                                            <el-input v-model="item.sourceCode" type="textarea" disabled :rows="8" />
                                        </div>
                                    </el-col>
                                </el-row>
                                <div style="height: 30px;"></div>
                                <el-row>
                                    <el-col :span="24">
                                        <el-button type="primary" size="default" @click="onSubmit">Verify and
                                            Publish</el-button>
                                        <el-button type="info" size="default"
                                            @click="resetForm(formInline)">Reset</el-button>
                                        <el-button type="info" size="default" @click="returnHome">Return to
                                            main</el-button>
                                    </el-col>
                                </el-row>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </el-main>
            <el-aside class="responsive-aside"></el-aside>
        </el-container>
    </div>
</template>

<script setup>
import { ref, onMounted, computed, watch, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router';
import { getContractDetail } from "@/api/verifyContract";
import { getVertityUpload, getFileInfo, deleteFile, submissionContract } from "@/api/upload";
import { ElUpload, ElButton, ElMessage } from 'element-plus';
const { address } = defineProps({
    address: {
        type: [String],
        required: true,
    }
});
const router = useRouter();
const route = useRoute();
const compilerversion = route.query.compilerversion;
const compiletype = route.query.compiletype;
const formInline = ref({
    contractaddress: address,
    contractname: '',
    compilerversion: compilerversion,
    optimization: '',
    desc: '',
    files: {},
    testfile: [],
    fileName: '',
    compiletype: compiletype,
})

const fileList = ref([])
let arrowShow = ref(false)
const rules = ref({
    files: [
        { required: true, message: 'Required', trigger: 'change' },
    ],
})
const resetForm = (formEl) => {
    formEl.contractname ='';
    formEl.optimization ='';
    ElMessage.success('Reset successfully')
}
const returnHome = ()=>{
    router.push({ name: 'home' });
}
const uploadFiles = async (file) => {
    console.log(file)
    await submitForm(file, fileList);

}
const getContactDetail = async () => {
    console.log(route);
    try {
        if (address !== null) {
            const response = await getContractDetail(
                address
            );
            if (response.data && response.data.contractaddress) {
                formInline.value = response.data;
            } else {


                formInline.value = {
                    contractaddress: address,
                    compilerversion: compilerversion

                };
            }

        }
    } catch (error) {
        console.error("Error fetching block details:", error);
    }
};
let contractNameArr = ref([])
const getFileInfos = async () => {
    try {
        if (address !== null) {
            const response = await getFileInfo(
                address
            );
            if (response) {
                contractNameArr.value = response[0].contractName || []
            }
            formInline.value.testfile = response
            fileList.value = response.map((item) => {
                return {
                    name: item.fileName,
                    sourceCode: item.sourceCode
                }
            })
            console.log(formInline.value);
            formInline.value.fileName = response[0].fileName
        }
    } catch (error) {
        console.error("Error fetching block details:", error);
    }
};
const onSubmit = async () => {
    if (formInline.value.contractname && formInline.value.contractaddress && formInline.value.compilerversion && formInline.value.optimization) {
        try {
            let data = {
                contractaddress: formInline.value.contractaddress,
                contractname: formInline.value.contractname,
                compilerversion: formInline.value.compilerversion,
                optimization: formInline.value.optimization,
                compiletype: formInline.value.compiletype,
            }
            const submitSponse = await submissionContract(data);
            console.log(submitSponse);
            ElMessage.success('Submit successfully');
            router.push({ name: 'home' })
        } catch (error) {
        }
    } else {
        ElMessage.warning('Please fill in the contract name, contract address, and choose whether to file!');
    }
}
const beforeUpload = (file) => {
    const isSol = file.name.endsWith('.sol');
    if (!isSol) {
        ElMessage.error('You can only upload.sol files!');
        return false;
    } else {
        return true
    }
};

const handleUploadError = (err, file, fileList) => {
    ElMessage.error('Upload failure');
};
const submitForm = async (file, fileList) => {
        try {
            const uploadResponse = await getVertityUpload(formInline.value.contractname, formInline.value.contractaddress, file);
            console.log(uploadResponse,'[[[[[[[[[[[[[[]]]]]]]]]]]]]]');
            if (uploadResponse.data === 'upload success') {
                getFileInfos();
                ElMessage.success('Upload successfully');
            } else {
                handleUploadError(uploadResponse.error, file, fileList);
            }
        } catch (error) {
            console.error(error);
        }
};
const beforeRemove = async (file, fileList) => {
    // deleteUploaded(file.name, fileList)
    try {
        if (address !== null & file.name !== null) {
            const response = await deleteFile(address, file.name);
            ElMessage.success('Successfully deleted');
            contractNameArr.value = []
            formInline.value.testfile = fileList
            // formInline.value.testfile = '';
            // formInline.value.fileName = '';
        }
    } catch (error) {
        console.error("Error fetching block details:", error);
    }
    // return ElMessage.success('Successfully deleted');
};

function handleItemClick(option) {
    formInline.value.contractname = option
    arrowShow.value = false
}

onMounted(() => {

});
</script>

<style scoped>

.container-xxl {
    background-color: #fafbfc;
}

.verify_button {
    display: flex;
    flex-flow: wrap;
}

.demo-form-inline .el-input {
    --el-input-height: 40px;
}

:deep(.el-select--small .el-select__wrapper) {
    height: 2.6rem;
}

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

.verify_header {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    text-align: center;
    align-content: center;
    padding: 10px 0;

    border-bottom: 1px solid #ccc;
}

.verify_header span {
    margin: 10px 0;
    font-size: .875em;
    padding: 3px 0;
    color: #00a186;
    border: 1px solid #00a186;
    border-radius: 10px;
    background-color: #E1F1f1;
}

.verity-form {
    background-color: #fff;
    border-radius: 15px;
}

.verity_formbox {
    margin: 10px;
}

.verify_file {
    width: 100%;
    margin-top: 20px;
}

.verify_file p {
    font-size: 14px;
    color: #6c757d;

}
.liStyle:hover {
    background-color: #f5f7fa;
}
</style>