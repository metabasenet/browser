<template>
  <div class="box">
    
    <el-container class="container-xxl">
      <el-aside class="responsive-aside" ></el-aside>
      <el-main>
        <el-row>
      <el-col :span="24">
        <div class="grid-content ep-bg-purple-dark grid-content_h3">
          <h3>Block<span class="header_span">#{{ blockNumber }}</span></h3>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="grid-content ep-bg-purple-dark grid-content_h0">
          <el-button type="primary">OverView</el-button>
        </div>
      </el-col>
    </el-row>
    <el-row class="grid-content_row">
      <el-col :span="24">
        <el-descriptions v-model="blockDetails" size="default" class="grid-content_h2 " :column="1" align="left"
          >
          <el-descriptions-item label="Block Height:"  label-align="left" label-class-name="my-label"
            class-name="my-content" label-width="30%">
            <div class="block_height"> <span style="margin-right:5px">{{ blockDetails.number }}</span>
            <el-tooltip content="View previous block" placement="top">
              <el-button icon="ArrowLeft" @click="ArrowLeft" />
            </el-tooltip><el-tooltip content="View next block" placement="top">
              <el-button icon="ArrowRight" @click="ArrowRight" />
            </el-tooltip></div>
          </el-descriptions-item>
          <el-descriptions-item label=" Timestamp:" label-align="center" align="left" label-class-name="my-label">
            <div class="block_height">
              <el-icon>
              <Timer />
            </el-icon> <span>{{ blockDetails.formattedTime }}</span>
            </div>
          </el-descriptions-item>
          <el-descriptions-item label="Transactions:" label-align="center" align="left" label-class-name="my-label">
            <div class="block_height">
              <el-tooltip :content="`${blockDetails.transactioncount}`" placement="top"><router-link class="skyblue-text" to="/txs">
                <span>{{
        blockDetails.transactioncount }}</span></router-link></el-tooltip>
            </div>
            <!-- <span>and </span>
            <el-tooltip content="Copy Address" placement="top"><router-link class="skyblue-text" to="/address">29
                contract internal transactions</router-link></el-tooltip> <span>in this block</span> -->
          </el-descriptions-item>
          <el-descriptions-item label="Validated By:" label-align="center" align="left" label-class-name="my-label">
            <!-- <div class="block_height">
              <el-tooltip content="Copy Address" placement="top"><router-link class="skyblue-text"
                to="/address">Validator: Legend II</router-link></el-tooltip>
            <el-tooltip content="Copy Address" placement="top">
              <el-button text icon="CopyDocument" @click="copyToClipboard(Validator)">
              </el-button>
            </el-tooltip>
            <span> in 3 secs</span>
            </div> -->
          </el-descriptions-item>
          <el-descriptions-item label="Block Reward:" label-align="center" align="left" label-class-name="my-label">
            <div class="block_height">
              <span>0.040627555889411223
            MNT</span>
            </div>
          </el-descriptions-item>
          <el-descriptions-item label="Difficulty:" label-align="center" align="left" label-class-name="my-label">
            <div class="block_height"> <span>2</span></div>
           
          </el-descriptions-item>
          <el-descriptions-item label="Total Difficulty:" label-align="center" align="left" label-class-name="my-label">
            <div class="block_height"><span>73,408,936</span> </div>
            
          </el-descriptions-item>
          <el-descriptions-item label="Size:" label-align="center" align="left" label-class-name="my-label">
            <div class="block_height"><span>39,635 bytes</span></div>
            
          </el-descriptions-item>
          <el-descriptions-item label="Gas Used:" label-align="center" align="left" label-class-name="my-label">
            <div class="block_height"><span>{{ blockDetails.gasUsed }}</span></div>
            
          </el-descriptions-item>
          <el-descriptions-item label="Gas Limit:" label-align="center" align="left" label-class-name="my-label">
            <div class="block_height"><span>{{ blockDetails.gasLimit }}</span></div>
            
          </el-descriptions-item>
          <el-descriptions-item label="Burnt Fees:" label-align="center" align="left" label-class-name="my-label">
            <!-- <div class="block_height"><span style="margin-right:5px">0.004062755588941122 MNT</span>
            <el-tooltip content="open fee burn transaction" placement="top"><el-button
                icon="Share"></el-button></el-tooltip></div> -->
            
          </el-descriptions-item>
          <el-descriptions-item label="Extra Data:" label-align="center" align="left" label-class-name="my-label">
            <el-input style="height:40px" type="textarea" :disabled="true" :placeholder="blockDetails.extradata">
            </el-input>
          </el-descriptions-item>
        </el-descriptions>
      </el-col>
    </el-row>
    <el-row class="grid-content_h2">
      <el-col :span="24">
        <el-collapse @change="handleChange">
          <el-collapse-item title="More Details:" name="1">
            <el-descriptions class="grid-content" :column="1" align="left" v-model="blockDetails">
              <el-descriptions-item label="Hash:" label-align="left" align="left" label-class-name="my-label"
                class-name="my-content">
                <div class="block_height"><span>{{ blockDetails.hash }}</span></div>
                </el-descriptions-item>
              <el-descriptions-item label="Parent Hash:" label-align="center" align="left" label-class-name="my-label">
                <div class="block_height">
                  <router-link
                  class="skyblue-text" to="/address">{{ blockDetails.parenthash }}</router-link>
                </div>
                </el-descriptions-item>
              <el-descriptions-item label="Sha3Uncles:" label-align="left" label-class-name="my-label"
                align="left">
                <div class="block_height">
                  <span>0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347</span>
                  </div></el-descriptions-item>
              <el-descriptions-item label="Nonce:" label-align="left" align="left" label-class-name="my-label">
                <div class="block_height">
                  <span>0x0000000000000000</span>
                </div>
               
              </el-descriptions-item>
            </el-descriptions>
          </el-collapse-item>
        </el-collapse>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24" class="grid-content_h1">
        <el-icon>
          <Loading />
        </el-icon>
        <span>
          Blocks are batches of transactions linked via cryptographic hashes. Any tampering of a block would invalidate
          all following blocks as all subsequent hashes would change. Learn more about this page in our Knowledge
          Base.</span>
      </el-col>
    </el-row>
      </el-main>
      <el-aside class="responsive-aside" ></el-aside>
    </el-container>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import { ElMessage } from 'element-plus';
import { getBlockDetail } from '@/api/block';
const blockDetails = ref({});
const copiedText = ref('');
const router = useRouter();
const route = useRouter();
const { blockNumber } = defineProps({
  blockNumber: {
    type: [Number, String],
    required: true,
  }
});
const blockNumberAsNumber = computed(() => {
  const num = parseFloat(blockNumber);
  return isNaN(num) ? null : num;
});
const fetchBlockDetails = async () => {
  try {
    if (blockNumberAsNumber.value !== null) {
      const response = await getBlockDetail(blockNumberAsNumber.value);
      blockDetails.value = response.data;
    }
    timestamps()
  } catch (error) {
    console.error('Error fetching block details:', error);
  }
}
const timestamps = () => {
  const currentTime = Math.floor(Date.now() / 1000);
  const timestamp = blockDetails.value.timestamp;
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
  blockDetails.value.formattedTime = formattedTime;
}
const handleChange = (val) => {
  console.log(val)
}
const ArrowLeft = async () => {
  try {
    let paramsNumber = route.currentRoute.value.params.blockNumber;
    const leftNumber = paramsNumber - 1;
    const response = await getBlockDetail(leftNumber);
    blockDetails.value = response.data;
    timestamps()
    router.push({ name: 'block', params: { blockNumber: blockDetails.value.number } });
  } catch (error) {
    console.error('Error fetching block details:', error);
  }
}
const ArrowRight = async () => {
  try {
    let paramsNumber = route.currentRoute.value.params.blockNumber;
    const leftNumber = Number(paramsNumber) + 1;
    const response = await getBlockDetail(leftNumber);
    blockDetails.value = response.data;
    timestamps()
    router.push({ name: 'block', params: { blockNumber: blockDetails.value.number } });
  } catch (error) {
    console.error('Error fetching block details:', error);
  }
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
onMounted(() => {
  fetchBlockDetails();
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

.grid-content_h1 {
  /* margin: 0 2rem; */
  padding: 19px 20px;
}
.grid-content_h0 {
  margin: 0 2rem;
  padding: 19px 0;
}
.grid-content_h1 span {
  font-size: 14px;
  color: #6c757d;
}
.grid-content span{
  font-size: 14px;
  color: #6c757d;
}
.grid-content_h3 {
  margin: 0 2rem;
  padding: 19px 0;
  border-bottom: 1px solid #dcdfe6;
}

.grid-content_h2 {
  margin: 5px 1rem;
  padding: 19px 20px;
  background-color: #fff;
  border: 1px solid #dcdfe6;
  border-radius: 10px;
}

.grid-content_span {
  margin-left: 6rem;
}

.grid-content_row {
  background-color: #f9fafc;
}
/* .my-label{
  width: 120px; 
  display: flex;
  align-items: center; 
  justify-content: center; 
  overflow: hidden;
  text-overflow: ellipsis; 
  white-space: nowrap;
} */
:deep(.my-label) {
  width: 120px;
  display: inline-block;
}

.header_span {
  margin-left: 8px;
  font-size: 13px;
  color: #6c7589;
}

.skyblue-text {
  color: #0693cc;
  margin-right: 5px;
}

.block_height{
  display: inline-block;
  margin-left: 5rem;
}
@media (max-width: 768px){
  .block_height{
  display: block;
  margin-left: 0;
}
.el-main{
  --el-main-padding: 0px
}
.grid-content_h1{
  margin: 0px;
}
.grid-content_h3,.grid-content_h0{
  margin: 5px 1rem;
}
}
</style>