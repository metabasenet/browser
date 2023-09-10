<template>
    <div class="head">
        BNB Price: $<span class="price">{{price}}</span>(<span class="price-scale">{{ price_scale }}</span>%)  
        <el-icon color="#409EFC" class="no-inherit gas-text">  <share /></el-icon><span >Gas: </span> <span class="gas">{{ gas }}</span>

    </div>
 
  </template>
  <script  setup lang="ts">
   import { Share } from '../../node_modules/@element-plus/icons-vue'
  const price:string="214.86";
  const price_scale:string ="1.29";
  const gas:string="3 Gwei"
 
  </script>
  <style>

.head{
    text-align: left;
   display: flex;
   justify-content: flex-start;
   margin-top: 20px;

}
.price{
    color:blue;
}
.price-scale{
    color:red;
}
.gas-text{
    margin-left: 20px;
    margin-top: 5px;
}
.gas{
    color:blue;
}
</style>
  