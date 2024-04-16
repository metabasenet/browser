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
                                        </el-alert></el-col>
                                    <el-col :xs="24" :sm="24" :md="24" :lg="24">
                                        <el-form :inline="true" :rules="rules" :model="formInline"
                                            class="demo-form-inline" label-position="top">
                                            <el-col :xs="24" :sm="24" :md="24" :lg="7">
                                                <el-form-item label="Contract Address">
                                                    <el-input v-model="formInline.contractaddress" disabled />
                                                </el-form-item>
                                            </el-col>
                                            <el-col :xs="24" :sm="24" :md="24" :lg="7">
                                                <el-form-item label="contractname">
                                                    <el-input v-model="formInline.contractname" />
                                                </el-form-item>
                                            </el-col>
                                            <el-col :xs="24" :sm="24" :md="24" :lg="7">
                                                <el-form-item label="Compiler">
                                                    <el-select class="demo_select" v-model="formInline.compilerversion"
                                                        disabled>

                                                    </el-select>
                                                    <!-- <el-select v-model="formInline.compilerversion"
                                                        placeholder="[please select]" style="width: 28rem;">
                                                        <el-option label="v0.8.25+commit.b61c2a91" value="0.8.25" />
                                                        <el-option label="v0.8.24+commit.e11b9ed9" value="0.8.24" />
                                                        <el-option label="v0.8.23+commit.f704f362" value="0.8.23" />
                                                        <el-option label="v0.8.22+commit.4fc1097e" value="0.8.22" />
                                                        <el-option label="v0.8.21+commit.d9974bed" value="0.8.21" />
                                                        <el-option label="v0.8.20+commit.a1b79de6" value="0.8.20" />
                                                        <el-option label="v0.8.19+commit.7dd6d404" value="0.8.19" />
                                                        <el-option label="v0.8.18+commit.87f61d96" value="0.8.18" />
                                                        <el-option label="v0.8.17+commit.8df45f5f" value="0.8.17" />
                                                        <el-option label="v0.8.16+commit..07a7930e" value="0.8.16" />
                                                        <el-option label="v0.8.15+commit..e14f2714" value="0.8.15" />
                                                        <el-option label="v0.8.14+commit.80d49f37" value="0.8.14" />
                                                        <el-option label="v0.8.13+commit.abaa5c0e" value="0.8.13" />
                                                        <el-option label="v0.8.12+commit..f00d7308" value="0.8.12" />
                                                        <el-option label="v0.8.11+commit.d7f03943" value="0.8.11" />
                                                        <el-option label="v0.8.10+commit..fc410830" value="0.8.10" />
                                                        <el-option label="v0.8.9+commit.e5eed63a" value="0.8.9" />
                                                        <el-option label="v0.8.8+commit.dddeac2f" value="0.8.8" />
                                                        <el-option label="v0.8.7+commit.e28d00a7" value="0.8.7" />
                                                        <el-option label="v0.8.6+commit.11564f7e" value="0.8.6" />
                                                        <el-option label="v0.8.5+commit.a4f2e591" value="0.8.5" />
                                                        <el-option label="v0.8.4+commit.c7e474f2" value="0.8.4" />
                                                        <el-option label="v0.8.3+commit.8d00100c" value="0.8.3" />
                                                        <el-option label="v0.8.2+commit..661d1103" value="0.8.2" />
                                                        <el-option label="v0.8.1+commit.df193b15" value="0.8.1" />
                                                        <el-option label="v0.8.0+commit.c7dfd78e" value="0.8.0" />
                                                        <el-option label="v0.7.6+commit..7338295f" value="0.7.6" />
                                                        <el-option label="v0.7.5+commit.eb77ed08" value="0.7.5" />
                                                        <el-option label="v0.7.4+commit.3f05b770" value="0.7.4" />
                                                        <el-option label="v0.7.3+commit.9bfce1f6" value="0.7.3" />
                                                        <el-option label="v0.7.2+commit.51b20bc0" value="0.7.2" />
                                                        <el-option label="v0.7.1+commit.f4a555be" value="0.7.1" />
                                                        <el-option label="v0.7.0+commit.9e61f92b" value="0.7.0" />
                                                        <el-option label="v0.6.12+commit.27d51765" value="0.6.12" />
                                                        <el-option label="v0.6.11+commit.5ef660b1" value="0.6.11" />
                                                        <el-option label="v0.6.10+commit.00c0fcaf" value="0.6.10" />
                                                        <el-option label="v0.6.9+commit.3e3065ac" value="0.6.9" />
                                                        <el-option label="v0.6.8+commit.0bbfe453" value="0.6.8" />
                                                        <el-option label="v0.6.7+commit.b8d736ae" value="0.6.7" />
                                                        <el-option label="v0.6.6+commit.6c089d02" value="0.6.6" />
                                                        <el-option label="v0.6.5+commit.f956cc89" value="0.6.5" />
                                                        <el-option label="v0.6.4+commit.1dca32f3" value="0.6.4" />
                                                        <el-option label="v0.6.3+commit.8dda9521" value="0.6.3" />
                                                        <el-option label="v0.6.2+commit.bacdbe57" value="0.6.2" />
                                                        <el-option label="v0.6.1+commit.e6f7d5a4" value="0.6.1" />
                                                        <el-option label="v0.6.0+commit..26b70077" value="0.6.0" />
                                                        <el-option label="v0.5.17+commit.d19bba13" value="0.5.17" />
                                                        <el-option label="v0.5.16+commit.9c3226ce" value="0.5.16" />
                                                        <el-option label="v0.5.15+commit.6a57276f" value="0.5.15" />
                                                        <el-option label="v0.5.14+commit.01f1aaa4" value="0.5.14" />
                                                        <el-option label="v0.5.13+commit.5b0b510c" value="0.5.13" />
                                                        <el-option label="v0.5.12+commit.7709ece9" value="0.5.12" />
                                                        <el-option label="v0.5.11+commit.22be8592" value="0.5.11" />
                                                        <el-option label="v0.5.11+commit.c082d0b4" value="0.5.11" />
                                                        <el-option label="v0.5.10+commit.5a6ea5b1" value="0.5.10" />
                                                        <el-option label="v0.5.9+commit.c68bc34e" value="0.5.9" />
                                                        <el-option label="v0.5.9+commit.e560f70d" value="0.5.9" />
                                                        <el-option label="v0.5.8+commit.23d335f2" value="0.5.8" />
                                                        <el-option label="v0.5.7+commit.6da8b019" value="0.5.7" />
                                                        <el-option label="v0.5.6+commit.b259423e" value="0.5.6" />
                                                        <el-option label="v0.5.5+commit.47a71e8f" value="0.5.5" />
                                                        <el-option label="v0.5.4+commit.9549d8ff" value="0.5.4" />
                                                        <el-option label="v0.5.3+commit.10d17f24" value="0.5.3" />
                                                        <el-option label="v0.5.2+commit.1df8f40c" value="0.5.2" />
                                                        <el-option label="v0.5.1+commit.c8a2cb62" value="0.5.1" />
                                                        <el-option label="v0.5.0+commit.1d4f565a" value="0.5.0" />
                                                        <el-option label="v0.4.26+commit.4563c3fc" value="0.4.26" />
                                                        <el-option label="v0.4.25+commit.59dbf8f1" value="0.4.25" />
                                                        <el-option label="v0.4.24+commit.e67f0147" value="0.4.24" />
                                                        <el-option label="v0.4.23+commit.124ca40d" value="0.4.23" />
                                                        <el-option label="v0.4.22+commit.4cb486ee" value="0.4.22" />
                                                        <el-option label="v0.4.21+commit.dfe3193c" value="0.4.21" />
                                                        <el-option label="v0.4.20+commit.3155dd80" value="0.4.20" />
                                                        <el-option label="v0.4.19+commit.c4cbbb05" value="0.4.19" />
                                                        <el-option label="v0.4.18+commit.9cf6e910" value="0.4.18" />
                                                        <el-option label="v0.4.17+commit.bdeb9e52" value="0.4.17" />
                                                        <el-option label="v0.4.16+commit.d7661dd9" value="0.4.16" />
                                                        <el-option label="v0.4.15+commit.8b45bddb" value="0.4.15" />
                                                        <el-option label="v0.4.15+commit.bbb8e64f" value="0.4.14" />
                                                        <el-option label="v0.4.14+commit..c2215d46" value="0.4.14" />
                                                        <el-option label="v0.4.13+commit.0fb4cb1a" value="0.4.13" />
                                                        <el-option label="v0.4.12+commit.194ff033" value="0.4.12" />
                                                        <el-option label="v0.4.11+commit.68ef5810" value="0.4.11" />
                                                    </el-select> -->
                                                </el-form-item>
                                            </el-col>
                                            <el-col :xs="24" :sm="24" :md="24" :lg="3">
                                                <el-form-item label="Optimization">
                                                    <el-select v-model="formInline.optimization" clearable>
                                                        <el-option label="Yes" value="1" />
                                                        <el-option label="No" value="0" />
                                                    </el-select>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="24">
                                                <el-form-item prop="files">
                                                    <template #label>
                                                        <!-- :auto-upload="false" -->
                                                        <el-upload action="#" :before-upload="beforeUpload" show-file-list :http-request="uploadFiles"
                                                            :file-list="fileList" :before-remove="beforeRemove" :auto-upload="true"><el-button
                                                                size="small" type="primary">Select file</el-button>
                                                            <div class="el-upload__tip">Only.sol files can be uploaded
                                                            </div>
                                                        </el-upload>
                                                        <!-- <el-button type="primary" @click="submitForm">UPLOAD</el-button> -->
                                                        <!-- <el-button type="primary" @click="deleteUploaded">Delete server
                                                            files</el-button> -->
                                                    </template>
                                                    <div v-for="(item, index) in formInline.testfile" :key="index"
                                                        class="verify_file">
                                                        <span>File {{ index + 1 }} of {{
                                                            formInline.testfile.length }}:</span> <span>{{ item.fileName
                                                                ||
                                                                item.name }}</span>
                                                        <el-input v-model="item.sourceCode" type="textarea" disabled :rows="8" />
                                                    </div>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="24" class="verify_button">
                                                <el-form-item>
                                                    <el-button type="primary" size="large" @click="onSubmit">Verify and
                                                        Publish</el-button>
                                                    <el-button type="info" size="large" @click="resetForm(formInline)">Reset</el-button>
                                                    <el-button type="info" size="large"
                                                    @click="returnHome">Return to main</el-button>
                                                </el-form-item>
                                            </el-col>
                                        </el-form>
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
import { ref, onMounted } from 'vue'
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
const uploadFiles=async(file)=>{
    console.log(file)
    submitForm(file, fileList);

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
const getFileInfos = async () => {
    try {
        if (address !== null) {
            const response = await getFileInfo(
                address
            );
            console.log(response);
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
    } else if (formInline.value.contractname && formInline.value.contractaddress && formInline.value.compilerversion && formInline.value.optimization) {
        formInline.value.files = file;
        return true;

    } else {
        ElMessage.warning('Please fill in the contract name, contract address, and choose whether to file!');
        return false
    }

};

const handleUploadError = (err, file, fileList) => {
    ElMessage.error('Upload failure');
};
const submitForm = async (file, fileList) => {
        try {
            const uploadResponse = await getVertityUpload(formInline.value.contractname, formInline.value.contractaddress, file);
            if (uploadResponse.data === 'upload success') {
                getFileInfos();
                ElMessage.success('Upload successfully');
            } else {
                handleUploadError(uploadResponse.error, file, fileList);
            }
        } catch (error) {

        }
};
const beforeRemove = (file, fileList) => {
    deleteUploaded(file.name, fileList)
    // return ElMessage.success('Successfully deleted');
};
const deleteUploaded = async (fileName, fileList) => {
    try {
        if (address !== null & fileName !== null) {
            const response = await deleteFile(address, fileName);
            ElMessage.success('Successfully deleted');
            formInline.value.testfile = fileList
            // formInline.value.testfile = '';
            // formInline.value.fileName = '';
        }
    } catch (error) {
        console.error("Error fetching block details:", error);
    }
}
onMounted(() => {
    // getContactDetail();
});
</script>

<style scoped>
.el-row {
    /* margin: 0 0.75rem; */
}

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
        width: 10rem;
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
</style>