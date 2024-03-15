<template>
  <div class="box">
    <el-row>
      <el-col :span="24">
        <div class="grid-content ep-bg-purple-dark grid-content_h3 darkb_button">
          <h3>Transaction Details</h3>
          <div >
      <el-dropdown style="margin-right:5px">
      <el-button type="primary">
        <el-icon class="el-icon--left"><Basketball /></el-icon>
        Buy<el-icon class="el-icon--right"><arrow-down /></el-icon>
      </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>Action 1</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
          <el-dropdown-item>Action 3</el-dropdown-item>
          <el-dropdown-item>Action 4</el-dropdown-item>
          <el-dropdown-item>Action 5</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <el-dropdown style="margin-right:5px">
      <el-button type="primary">
        Play<el-icon class="el-icon--right"><arrow-down /></el-icon>
      </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>Action 1</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <el-dropdown>
      <el-button type="primary">
        Gaming<el-icon class="el-icon--right"><arrow-down /></el-icon>
      </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>Action 1</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    </div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="grid-content ep-bg-purple-dark grid-content_h1">
          <el-button type="primary" round>OverView</el-button>
        </div>
      </el-col>
    </el-row>
    <el-row class="grid-content_row">
      <el-col :span="24" :xs="24">
        <el-descriptions class="grid-content_h2" :column="1"  align="center" border>
          <el-descriptions-item label="Transaction Hash:" label-align="center" align="center"
            label-class-name="my-label"  class-name="my-content" label-width="30%">
            0x17c4ed9a8196e44747cecb
            <el-tooltip content="Copy TxHash to clipboard" placement="top"><el-button icon="CopyDocument"
                @click="copyToClipboard(Validator)">
              </el-button>
            </el-tooltip></el-descriptions-item>
          <el-descriptions-item label="Status:" label-align="center" align="center"><el-button type="success"
              plain><el-icon>
                <CircleCheckFilled />
              </el-icon>Success</el-button>
          </el-descriptions-item>
          <el-descriptions-item label="Block:" label-align="center" align="center">
            <div style="display: flex; justify-content: center; align-items: center;">
              <router-link class="skyblue-text" to="/block">
                <div class=" mb-2 truncate">
                  36957745
                </div>
              </router-link>
              <el-tooltip content="Number of blocks validated since" placement="top">
                <el-button size="small">10 Block Confirmations</el-button>
              </el-tooltip>
            </div>
          </el-descriptions-item>
          <el-descriptions-item label="Timestamp:" label-align="center" align="center">
            <el-icon>
              <Timer />
            </el-icon>
            32 secs ago (Mar-14-2024 09:05:46 AM +UTC)
          </el-descriptions-item>
          <el-descriptions-item  label="Transaction Action:" label-align="center" align="center">
            <div class="TransactionAction">
              <el-icon>
              <CaretRight />
            </el-icon>
            Call<el-tooltip content="0xf340fa01 l Deposit" placement="top">
              <el-button style="margin-left:5px;margin-right:5px">Deposit</el-button>
            </el-tooltip>Function by<el-tooltip content="Validator: Certik" placement="top">
              <router-link class="skyblue-text" to="/address">
                <div class=" mb-2 truncate">Validator: Certik</div>
              </router-link>
            </el-tooltip>on<el-tooltip content="0xf340fa01 l Deposit" placement="top">
              <el-icon class="el-icon--right el-icon--left">
                <Document />
              </el-icon>
            </el-tooltip>
            <el-tooltip content=" 0x0000000000000000000000000000000000001000" placement="top">
              <router-link class="skyblue-text" to="/address">
                <div class=" mb-2 truncate">BSC: Validator Set</div>
              </router-link>
            </el-tooltip>
              <el-tooltip content="Please login to your BscScan account to submit Transaction Action" placement="top">
                <el-icon><Promotion /></el-icon>
              </el-tooltip>
            </div>
          </el-descriptions-item>
          <el-descriptions-item label="From:" label-align="center" align="center">
           <div class="TransactionAction">
            <router-link class="skyblue-text ellipsis-text" to="/address">0xBe807Dddb074639cD9fA61b47676c064fc50D62C
              </router-link><span class="text-muted">(Validator: Certik)</span><el-tooltip content="Copy Address" placement="top"><el-button style="margin-left:5px" icon="CopyDocument"
                @click="copyToClipboard(Validator)">
              </el-button>
            </el-tooltip>
           </div>
          </el-descriptions-item>
          <el-descriptions-item label="To:" label-align="center" align="center">
            <div class="TransactionAction">
              <el-tooltip content="Contract" placement="top">
                <el-icon>
                  <Document />
                </el-icon>
              </el-tooltip>
              <router-link class="skyblue-text ellipsis-text" to="/address">
                <div class=" mb-2 truncate">0x0000000000000000000000000000000000001000</div>
              </router-link>
              (BSC: Validator Set)
              <el-tooltip content="Copy Address" placement="top">
                <el-button style="margin-left:5px" icon="CopyDocument" @click="copyToClipboard(Validator)">
                </el-button>
              </el-tooltip>
    <el-tooltip content="Copy Address" placement="top">
      <el-button type="success" icon="Check" circle />
    </el-tooltip>
  </div>
  <div class="TransactionAction">
    <el-icon><Money /></el-icon>Transfer 0.004435244050238826 BNB <span>From</span>
    <el-tooltip content="BSC: Validator Set" placement="top">
      <router-link class="skyblue-text" to="/address">
        <div class=" mb-2 truncate">BSC: Validator Set</div>
      </router-link>
    </el-tooltip><span>To</span>
    <el-tooltip content="BSC: System Reward" placement="top">
      <router-link class="skyblue-text" to="/address">
        <div class=" mb-2 truncate">BSC: System Reward</div>
      </router-link>
    </el-tooltip>
  </div>
  <div class="TransactionAction">
    <el-icon><Money /></el-icon>Transfer 0.007096390480382122 BNB <span>From</span>
    <el-tooltip content="BSC: Validator Set" placement="top">
      <router-link class="skyblue-text" to="/address">
        <div class=" mb-2 truncate">BSC: Validator Set</div>
      </router-link>
    </el-tooltip><span>To</span>
    <el-tooltip content="Null: 0x000...dEaD" placement="top">
      <router-link class="skyblue-text" to="/address">
        <div class=" mb-2 truncate">Null: 0x000...dEaD</div>
      </router-link>
    </el-tooltip>
  </div>
          </el-descriptions-item>
          <el-descriptions-item label="Value:" label-align="center" align="center">
            <el-icon>
              <Timer />
            </el-icon>
            0.070963904803821224 BNB <span>($43.24)</span>
          </el-descriptions-item>
          <el-descriptions-item label="Transaction Fee::" label-align="center" align="center">
            0 BNB <span>($0.00)</span>
          </el-descriptions-item>
          <el-descriptions-item label="Gas Price:" label-align="center" align="center">
            0 BNB <span> (0 BNB)</span>
          </el-descriptions-item>
        </el-descriptions>
      </el-col>
    </el-row>
    <el-row class="grid-content_h2">
      <el-col :span="24" :xs="24">
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="More Details:" name="1">
            <el-descriptions :column="1" align="center" border>
              <el-descriptions-item label="Gas Limit & Usage by Txn:" label-align="center" align="center" label-class-name="my-label"
                class-name="my-content">9,223,372,036,854,775,807 | 51,008 (0%)</el-descriptions-item>
              <el-descriptions-item label="Burnt Fees:" label-align="center"
                align="center"> 0.005224500901272524 BNB ($3.15)</el-descriptions-item>
              <el-descriptions-item label="Other Attributes:" label-align="center" align="center">
                <el-button>Nonce: 1607650</el-button><el-button>Position In Block: 208</el-button>
              </el-descriptions-item>
              <el-descriptions-item label="Input Data:" label-align="center" align="center">
                <el-input
                    v-model="textarea"
                    style="width: 100%"
                    :rows="2"
                    type="textarea"
                    disabled
                    placeholder="Please input"
                  />
                  <el-select v-model="value" placeholder="View Input As" style="width: 150px">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                  <el-button icon="Menu">Decode Input Data</el-button>
                  <el-button icon="Position">Advanced Filter</el-button>
              </el-descriptions-item>
            </el-descriptions>
          </el-collapse-item>
        </el-collapse>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24" :xs="24">
        <el-descriptions class="grid-content_h2" :column="1" align="center" border>
          <el-descriptions-item label="Private Note:" label-align="center" align="center"
            label-class-name="my-label" class-name="my-content" label-width="30%">
            To access the Private Note feature, you must be Logged In
            </el-descriptions-item>
          
        </el-descriptions>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24" :xs="24" class="grid-content_h1">
        <span>
          <el-icon><Loading /></el-icon>
          A transaction is a cryptographically signed instruction that changes the blockchain state. Block explorers
          track the details of all transactions in the network. Learn more about transactions in our Knowledge
          Base.</span>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const activeNames = ref([])
const value = ref('')
const textarea = ref('Function: deposit(address valAddr)')
const options = [
  {
    value: 'Default View',
    label: 'Default View',
  },
  {
    value: 'UTF-8',
    label: 'UTF-8',
  },
  {
    value: 'Original',
    label: 'Original',
  },
]
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

body {
  font-size: 16px;
}

@media (max-width: 768px) {
  body {
    font-size: 12px;
  }
  .grid-content_row {
    flex-direction: column; 
  }
}

.box {
  background-color: #f9fafc;
}

.grid-content_h1 {
  margin: 0 2rem;
  padding: 19px 0;
}

.grid-content_h1 span {
  font-size: 10px;
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

:deep().my-label {
  width: 24%;
}

.truncate {
  word-break: break-all;
}

.skyblue-text {
  color: #0693cc;
  margin-right: 5px;
}
.TransactionAction{
  display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
  @media (max-width: 768px) {
    width: 100%;
  }
}
.ellipsis-text{
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* 限制显示的行数 */
  -webkit-box-orient: vertical;
  word-break: break-word; /* 或者 overflow-wrap: break-word; */
}
.darkb_button{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>