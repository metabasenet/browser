<template>
  <div class="box">
    <el-row>
    <el-col :span="24"><div class="grid-content ep-bg-purple-dark grid-content_h3">
      <h3>Transaction Details</h3>
      </div>
      </el-col>
  </el-row>
  <el-row>
    <el-col :span="24"><div class="grid-content ep-bg-purple-dark grid-content_h1">
        <el-button type="primary" round>OverView</el-button>
      </div>
      </el-col>
  </el-row>
  <el-row class="grid-content_row">
  <el-col :span="24">
    <el-descriptions  class="grid-content_h2" :column="1" align="center" border>
      <el-descriptions-item
      label="Username"
      label-align="center"
      align="center"
      label-class-name="my-label"
      class-name="my-content"
     label-width="30%"
      >kooriookami</el-descriptions-item
    >
    <el-descriptions-item label="Telephone" label-align="center" align="center"
      >18100000000</el-descriptions-item
    >
    <el-descriptions-item label="From" label-align="center" align="center">
      <div style="display: flex; justify-content: center; align-items: center;">
    <router-link to="/address">0xB1b8a9FfB31F9475b7f1A0b3d0525348a6E9F184</router-link>
  </div>
        </el-descriptions-item>
    <el-descriptions-item label="Transaction Action:" label-align="center" align="center">
      <el-tag size="small">School</el-tag>
    </el-descriptions-item>
    <el-descriptions-item label="Address" label-align="center" align="center"
      >No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu
      Province</el-descriptions-item
    >
    </el-descriptions>
  </el-col>
</el-row>
    <el-row>
        <el-col :span="24" class="grid-content_h1">
            <span>
              A transaction is a cryptographically signed instruction that changes the blockchain state. Block explorers track the details of all transactions in the network. Learn more about transactions in our Knowledge Base.</span>
        </el-col>
    </el-row>
  </div>
</template>

<script>
export default {

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



</style>