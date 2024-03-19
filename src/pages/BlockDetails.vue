<template>
  <div class="box">
    <el-row>
    <el-col :span="24"><div class="grid-content ep-bg-purple-dark grid-content_h3">
      <h3>Block<span class="header_span">#36901236</span></h3>
      </div>
      </el-col>
  </el-row>
  <el-row>
    <el-col :span="24"><div class="grid-content ep-bg-purple-dark grid-content_h1">
        <el-button type="primary">OverView</el-button>
      </div>
      </el-col>
  </el-row>
  <el-row class="grid-content_row">
      <el-col :span="24">
             <el-descriptions  class="grid-content_h2" :column="1" align="center" border>
                  <el-descriptions-item
                  label="Block Height:"
                  label-align="center"
                  align="center"
                  label-class-name="my-label"
                  class-name="my-content"
                label-width="30%"
                  > 36949734 <el-tooltip content="View previous block" placement="top">
                    <el-button icon="ArrowLeft" />
                      </el-tooltip><el-tooltip content="View next block" placement="top">
                        <el-button icon="ArrowRight" />
                      </el-tooltip>
                  </el-descriptions-item>
                <el-descriptions-item label=" Timestamp:" label-align="center" align="center"
                  ><el-icon><Timer /></el-icon> 4 hrs ago (Mar-14-2024 02:24:33 AM +UTC)</el-descriptions-item
                >
                <el-descriptions-item label="Transactions:" label-align="center" align="center" >
                  <el-tooltip content="Copy Address" placement="top"><router-link class="skyblue-text" to="/txs" >153 transactions</router-link></el-tooltip><span>and </span>
                  <el-tooltip content="Copy Address" placement="top"><router-link class="skyblue-text" to="/address" >29 contract internal transactions</router-link></el-tooltip> <span>in this block</span>
                  </el-descriptions-item
                >
                <el-descriptions-item label="Validated By:" label-align="center" align="center">
                  <el-tooltip content="Copy Address" placement="top"><router-link class="skyblue-text" to="/address" >Validator: Legend II</router-link></el-tooltip>
                      <el-tooltip content="Copy Address" placement="top">
                        <el-button  icon="CopyDocument" @click="copyToClipboard(Validator)">
                        </el-button>
                      </el-tooltip>
                      <span> in 3 secs</span>
                </el-descriptions-item>
                <el-descriptions-item label="Block Reward:" label-align="center" align="center"
                  >0.040627555889411223 BNB</el-descriptions-item>
                  <el-descriptions-item label="Difficulty:" label-align="center" align="center">
                    2
                </el-descriptions-item>
                <el-descriptions-item label="Total Difficulty:" label-align="center" align="center">
                  73,408,936
                </el-descriptions-item>
                <el-descriptions-item label="Size:" label-align="center" align="center">
                  39,635 bytes
                </el-descriptions-item>
                <el-descriptions-item label="Gas Used:" label-align="center" align="center">
                  12,974,406(9.27%)
                </el-descriptions-item>
                <el-descriptions-item label="Gas Limit:" label-align="center" align="center">
                  140,000,000
                </el-descriptions-item>
                <el-descriptions-item label="Burnt Fees:" label-align="center" align="center">
                  0.004062755588941122 BNB
                  <el-tooltip content="open fee burn transaction" placement="top"><el-button  icon="Share"></el-button></el-tooltip>
                </el-descriptions-item>
                <el-descriptions-item label="Extra Data:" label-align="center" align="center">
                  <el-input  type="textarea" :disabled="true">
                    <!-- v-model="form.desc" -->
                  123
                  </el-input>
                </el-descriptions-item>
    </el-descriptions>
      </el-col>
    </el-row>
    <el-row class="grid-content_h2">
      <el-col :span="24" >
        <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="More Details:" name="1">
        <el-descriptions :column="1" align="center" border>
          <el-descriptions-item
                  label="Hash:"
                  label-align="center"
                  align="center"
                  label-class-name="my-label"
                  class-name="my-content"
                
                  >0xe4f16a6a903e2eec260ad9ebb59050d31facc5539ead98a1369bc9f362c9329e</el-descriptions-item
                >
                <el-descriptions-item label="Parent Hash:" label-align="center" align="center"
                  ><router-link class="skyblue-text" to="/address" >0x8f8f449f8da2ac8aec59975bd3a1e9369fd76d3a36028ef31ab38866c801174f</router-link></el-descriptions-item
                >
                <el-descriptions-item label="Sha3Uncles:" label-align="center" align="center"
                  >0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347</el-descriptions-item
                >
                <el-descriptions-item label="Nonce:" label-align="center" align="center">
                  0x0000000000000000
                </el-descriptions-item>
    </el-descriptions>
      </el-collapse-item>
        </el-collapse>
      </el-col>
    </el-row>
    <el-row>
        <el-col :span="24" class="grid-content_h1">
          <el-icon><Loading /></el-icon>
            <span>
Blocks are batches of transactions linked via cryptographic hashes. Any tampering of a block would invalidate all following blocks as all subsequent hashes would change. Learn more about this page in our Knowledge Base.</span>
        </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from "vue";
const activeNames = ref([])
const handleChange = (val) => {
  console.log(val)
}
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
</script>

<style scoped>
.box{
  background-color: #f9fafc;
}
.grid-content_h1 {
  margin: 0 2rem;
  padding: 19px 0;
}
.grid-content_h1  span{
  font-size: 10px;
  color: #6c757d;
}
.grid-content_h3 {
  margin: 0 2rem;
  padding: 19px 0;
  border-bottom: 1px solid #dcdfe6;
}
.grid-content_h2{
  margin: 5px 1rem;
  padding: 19px 20px;
  background-color: #fff;
  border: 1px solid #dcdfe6;
  border-radius: 10px;
}
.grid-content_span{
    margin-left: 6rem;
}
.grid-content_row{
    background-color: #f9fafc;
}
:deep(.my-label){
  width: 24%;
}
.header_span{
  margin-left: 8px;
  font-size: 11px;
  color: #6c7589;
}
.skyblue-text{
  color: #0693cc;
  margin-right: 5px;
}

</style>