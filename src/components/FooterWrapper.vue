<template>
    <div class="footer">
  <el-row  class="footer-box">
    <el-col :span="24">
        <div class="grid-content ep-bg-purple footertop">
            <div class="footertop-left">
                <el-icon><Message /></el-icon>
                <el-icon><Filter /></el-icon>
                <el-icon><Discount /></el-icon>
            </div>
            <div>
                <el-backtop icon="Upload" :right="100" :bottom="100" />
                <!-- <el-icon><Upload /></el-icon> -->
                <!-- <span>Back to Top</span> -->
            </div>
        </div>
    </el-col>
  </el-row>
  <el-row  class="footerbox-center">
    <el-col :span="6"><div class="grid-content ep-bg-purple footer-center" >
        <el-text class="mx-1">Default</el-text>
        <el-link href="https://element-plus.org" :underline="false">About Us</el-link>
        <el-link href="https://element-plus.org" :underline="false">Brand Assets</el-link>
        <el-link href="https://element-plus.org" :underline="false">Contact Us</el-link>
        <el-link href="https://element-plus.org" :underline="false">Careers </el-link>
    </div>
    </el-col>
    <el-col :span="6"><div class="grid-content ep-bg-purple footer-center" >
        <el-text class="mx-1">Default</el-text>
        <el-link href="https://element-plus.org" :underline="false">About Us</el-link>
        <el-link href="https://element-plus.org" :underline="false">Brand Assets</el-link>
        <el-link href="https://element-plus.org" :underline="false">Contact Us</el-link>
        <el-link href="https://element-plus.org" :underline="false">Careers </el-link>
    </div>
    </el-col>
    <el-col :span="6"><div class="grid-content ep-bg-purple footer-center" >
        <el-text class="mx-1">Default</el-text>
        <el-link href="https://element-plus.org" :underline="false">About Us</el-link>
        <el-link href="https://element-plus.org" :underline="false">Brand Assets</el-link>
        <el-link href="https://element-plus.org" :underline="false">Contact Us</el-link>
        <el-link href="https://element-plus.org" :underline="false">Careers </el-link>
    </div>
        
        </el-col>
    <el-col :span="6"><div class="grid-content ep-bg-purple footer-center" >
        <el-text class="mx-1">Default</el-text>
        <el-link href="https://element-plus.org" :underline="false">About Us</el-link>
        <el-link href="https://element-plus.org" :underline="false">Brand Assets</el-link>
        <el-link href="https://element-plus.org" :underline="false">Contact Us</el-link>
        <el-link href="https://element-plus.org" :underline="false">Careers </el-link>
    </div>
    </el-col>
  </el-row>
  <el-row class="footer-box">
    <el-col :span="24"><div class="grid-content ep-bg-purple footer-bottom"  >
        <span>Etherscan © 2024 (F1)</span>
        <span>Donations: 0x71c765...d8976f </span>
    </div>
    </el-col>
  </el-row>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer{
    width: 100%;
    /* position: fixed;
  bottom: 0; */
    background-color: #f8f9fa;
}
.footer-box{
    margin-top: 1.25rem;
    margin-left: 1.25rem;
    margin-right: 1.25rem;
    /* background-color: #f8f9fa; */
}
.footertop-left .el-icon{
    margin-right: 10px;
}
.footer-center{
    display: flex;
    flex-direction: column;
}
.footer-center .el-text{
    font-weight: bold;
    font-size: large;
    color: var(--bs-heading-color,inherit);
}
.footer-center .el-link{
    margin-top: 10px;
    font-size: small;
}
.footertop{
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
    padding: 1rem 0;
    border-bottom: 1px solid #e9ecef;
}
.footerbox-center{
    padding: 3rem 0;
    border-bottom: 1px solid #e9ecef;
}
.footer-bottom{
    display: flex;
    justify-content: space-between;
}
.footer-bottom span{
    padding: 20px 0;
}
</style>