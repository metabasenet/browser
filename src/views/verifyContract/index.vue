<template>
    <div>
        <el-container class="container-xxl">
            <el-aside class="responsive-aside"></el-aside>
            <el-main>
                <el-row :gutter="10">
                    <el-col :span="24">
                        <div class="verify_header">
                            <h2>Verify & Publish Contract Source Code</h2>
                            <p>COMPILER TYPE AND VERSION SELECTION</p>
                        </div>
                    </el-col>
                    <el-col :span="24">
                        <div class="verity-box">
                            <div class="verity_img">
                                <img src="./img/verity_img.png" alt="">
                            </div>
                            <div>
                                <p style="margin-bottom:20px">Source code verification provides transparency for users
                                    interacting with smart contracts. By uploading the source code, BscScan will match
                                    the compiled code with that on the blockchain. Just like contracts, a "smart
                                    contract" should provide end users with more information on what they are "digitally
                                    signing" for and give users an opportunity to audit the code to independently verify
                                    that it actually does what it is supposed to do.</p>
                                <p>Please be informed that advanced settings (e.g. bytecodeHash: "none" or viaIR:
                                    "true") can be accessed via Solidity (Standard-Json-Input) verification method. More
                                    information can be found under Solidity's "Compiler Input and Output JSON
                                    Description" documentation section.</p>
                            </div>
                        </div>
                        <div class="verity-form">
                            <el-form ref="form" :rules="rules" style="max-width: 600px;margin:auto;" :model="sizeForm" label-width="auto"
                            label-position="top">
                            <el-form-item prop="contractaddress" label="Please enter the Contract Address you would like to verify">
                                <el-input v-model="sizeForm.contractaddress" maxlength="42" style="width: 28rem;height:2.6rem"/>
                            </el-form-item>
                            <el-form-item prop="compiletype" label="Please select Compiler Type">
                                <el-select v-model="sizeForm.compiletype" placeholder="[please select]" style="width: 28rem;">
                                    <el-option label="Solidity(Single file)" value="1" />
                                    <el-option label="Solidity (Multi-Part files)" value="2" />
                                </el-select>
                            </el-form-item>
                            <el-form-item prop="compilerversion" label="Please select Compiler Version">
                                <el-select v-model="sizeForm.compilerversion" placeholder="[please select]" style="width: 28rem;">
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
                                </el-select>
                            </el-form-item>
                            <el-form-item prop="licensetype" label="Please select Open Source License Type">
                                <el-select v-model="sizeForm.licensetype" placeholder="[please select]" style="width: 28rem;">
                                    <el-option label="I)No License (None)" value="None" />
                                    <el-option label="2)The Unlicense(Unlicense)" value="Unlicense" />
                                    <el-option label="3)MIT License(MIT)" value="MIT" />
                                    <el-option label="4)GNU General Public License v2.0(GNU GPLV2)" value="GNU GPLV2" />
                                    <el-option label="5)GNU General Public License v3.0(GNU GPLV3)" value="GNU GPLV3" />
                                    <el-option label="6)GNU Lesser General Public License v2.1 (GNU LGPLv2.1)" value="GNU LGPLv2.1" />
                                    <el-option label="7)GNU Lesser General Public License v3.0(GNU LGPLV3)" value="GNU LGPLV3" />
                                    <el-option label="8)BSD 2-clause 'Simplified'license(BSD-2-Clause)" value="BSD-2-Clause" />
                                    <el-option label="9)BSD 3-clause 'New'Or 'Revised'license(BSD-3-Clause)" value="BSD-3-Clause" />
                                    <el-option label="10)Mozilla Public License 2.0(MPL-2.0)" value="MPL-2.0" />
                                    <el-option label="11)Open Software License 3.0(OSL-3.0)" value="OSL-3.0" />
                                    <el-option label="12)Apache 2.0 (Apache-2.0)" value="Apache-2.0" />
                                    <el-option label="13)GNU Affero General Public License(GNU AGPLV3)" value="GNU AGPLV3" />
                                    <el-option label="14)Business Source License(BSL 1.1)" value="BSL 1.1" />
                                </el-select>
                            </el-form-item>
                            <el-form-item>
                                <el-checkbox v-model="rememberMe">I agree to the terms of service</el-checkbox>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="onSubmit(sizeForm)">Continue</el-button>
                                <el-button>Reset</el-button>
                            </el-form-item>
                        </el-form>
                        </div>
                    </el-col>
                </el-row>
            </el-main>
            <el-aside class="responsive-aside"></el-aside>
        </el-container>
    </div>

</template>
    
<script setup>
import { reactive,ref,onMounted } from 'vue'
import { useRouter } from 'vue-router';
import { getContractDetail } from "@/api/verifyContract";
const { address } = defineProps({
  address: {
    type: [String],
    required: true,
  },
});

const form = ref()
const router = useRouter();
const rememberMe = ref(true)
const sizeForm = ref({
    contractaddress:address,
    compiletype:'',
    compilerversion:'',
    licensetype:''
})
const rules =ref({
    contractaddress:[
        { required: true, message: 'Required', trigger: 'blur' },
        { min: 42, max: 42, message: 'Invalid Length', trigger: 'blur' },
    ],
    compiletype:[
        { required: true, message: 'This field is required.', trigger: 'change' },
    ],
    compilerversion:[
        { required: true, message: 'Required', trigger: 'change' },
    ],
    licensetype:[
        { required: true, message: 'Required', trigger: 'change' },
    ],
})
const onSubmit = async (formEl) => {
    console.log(formEl);
    console.log(formEl.compilerversion);
    const compilerversion = formEl.compilerversion;
    const compiletype = formEl.compiletype;
    console.log(compiletype);
    if (!formEl) return
    if (formEl && formEl.contractaddress) {
        router.push({ name: 'verifyContractSolc', params: { address: formEl.contractaddress },query:{compilerversion,compiletype} });
        
    } 
}
const getContactDetail = async () => {
    try {
        if (address !== null) {
            const response = await getContractDetail(
                address
            );
            if (response.data && response.data.contractaddress) {
                sizeForm.value.contractaddress = response.data.contractaddress;
            } else {
                // sizeForm.value.contractaddress =address
            }
        
        }
    } catch (error) {
        console.error("Error fetching block details:", error);
    }
};
onMounted(() => {
    getContactDetail();
});
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
@media (max-width: 768px) {
    
}
.verify_header{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    text-align: center;
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
}
.verify_header p{
    font-size: .875em;
    color: #6c757d;
}
.verity_img{
    width:3.875rem;
    height: 3.875rem;
}
.verity_img img{
    height: 100%;
}
.verity-box{
    display: flex;
    margin:2rem 0;
}
.verity-form{
    /* display: flex; */
        flex-wrap: wrap;
    /* align-content: center; */
    /* flex-direction: column; */
    /* margin: 0 2.25rem; */
    margin-top: 20px;
}
:deep(.el-select--small .el-select__wrapper){
    height: 2.6rem;
}
</style>