<template>
    <div>
        <el-container class="container-xxl">
            <el-aside class="responsive-aside"></el-aside>
            <el-main class="verify_main">
                <el-row :gutter="10" style="margin:0 2.25rem">
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
                                        <el-form :inline="true" :rules="rules" :model="formInline" class="demo-form-inline"
                                            label-position="top">
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
                                                        <!-- <el-option label="Zone one" value="shanghai" />
                                            <el-option label="Zone two" value="beijing" /> -->
                                                    </el-select>
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
                                                        <el-upload action="#" :before-upload="beforeUpload"
                                                            :on-success="handleUploadSuccess" 
                                                            :on-error="handleUploadError" :file-list="fileList"
                                                            :auto-upload="false" :limit="1"  @change="handleFileChange"><el-button
                                                                size="small" type="primary">Select file</el-button>
                                                            <div class="el-upload__tip">Only.sol files can be uploaded</div>
                                                        </el-upload>
                                                        <el-button type="primary" @click="submitForm">UPLOAD</el-button>
                                                        <el-button type="primary" @click="deleteUploaded">Delete server files</el-button>
                                                    </template>
                                                    <el-input v-model="formInline.testfile" type="textarea" :rows="8" />
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="24" class="verify_button">
                                                <el-form-item>
                                                    <el-button type="primary" size="large" @click="onSubmit">Verify and
                                                        Publish</el-button>
                                                    <el-button type="info" size="large">Reset</el-button>
                                                    <el-button type="info" size="large"
                                                        @click="resetForm(formRef)">Return to main</el-button>
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
import { useRouter } from 'vue-router';
import { getContractDetail } from "@/api/verifyContract";
import { getVertityUpload, getFileInfo,deleteFile,submissionContract } from "@/api/upload";
import { ElUpload, ElButton, ElMessage } from 'element-plus';
const { address } = defineProps({
    address: {
        type: [String],
        required: true,
    },
});
const router = useRouter();
const formInline = ref({
    contractaddress: '',
    contractname: '',
    compilerversion: '',
    optimization: '1',
    desc: '',
    files: {},
    testfile:'',
    fileName:'',
    compiletype:'',
})
const fileList = ref([])
const rules =ref({
    files:[
        { required: true, message: 'Required', trigger: 'change' },
    ],
})
const resetForm = (formEl) => {
    if (!formEl) return
    formInline.value.resetFields()
}
const getContactDetail = async () => {
    try {
        if (address !== null) {
            const response = await getContractDetail(
                address
            );
            formInline.value = response.data
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
            formInline.value.testfile = response[0].sourceCode
            formInline.value.fileName = response[0].fileName
        }
    } catch (error) {
        console.error("Error fetching block details:", error);
    }
};
const onSubmit =  async()=> {
    console.log(formInline.value);
    if (formInline.value.contractname && formInline.value.contractaddress && formInline.value.compilerversion && formInline.value.optimization) {
        try {
            let data = {
                contractaddress:formInline.value.contractaddress,
                contractname:formInline.value.contractname,
                compilerversion:formInline.value.compilerversion,
                optimization:formInline.value.optimization,
                compiletype:formInline.value.compiletype,
            }
            const submitSponse = await submissionContract(data);
            ElMessage.success('Submit successfully');
            router.push({ name: 'home' })
        } catch (error) {
        }
    } else {
        ElMessage.warning('Please fill in the contract name, contract address, and select File!');
    }
}
const beforeUpload = (files) => {
    console.log(files);
    const isSol = files.name.endsWith('.sol');
    if (!isSol) {
        ElMessage.error('You can only upload.sol files!');
        return false;
    }
    return true;
};
const handleFileChange = (file, fileList) => {
    fileList= fileList;
    formInline.value.files = fileList[0];

};
const handleUploadSuccess = (response, file, fileList) => {
    ElMessage.success('Upload successfully');
    getFileInfos();
};

const handleUploadError = (err, file, fileList) => {
    ElMessage.error('Upload failure');
};
const submitForm = async () => {
    if (formInline.value.contractname && formInline.value.contractaddress) {
        try {
            const uploadResponse = await getVertityUpload(formInline.value.contractname, formInline.value.contractaddress, formInline.value.files);
            if (uploadResponse.data === 'upload success') {
                getFileInfos();
            } else {
                handleUploadError(uploadResponse.error, file, fileList);
            }
        } catch (error) {

        }
    } else {
        ElMessage.warning('Please fill in the contract name, contract address, and select File!');
    }
};
const deleteUploaded = async()=>{
    try {
        if (address !== null & formInline.value.fileName !== null) {
            const response = await deleteFile(address,formInline.value.fileName);
            ElMessage.error('Successfully deleted');
        }
    } catch (error) {
        console.error("Error fetching block details:", error);
    }
}
onMounted(() => {
    getContactDetail();
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
</style>