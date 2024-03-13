<template>
    <div>
        <el-menu
    :default-active="$route.path"
    router
    class="el-menu-demo"
    mode="horizontal"
  >
    <el-menu-item index="/home">Home</el-menu-item>
    <el-sub-menu index="2">
      <template #title>Blockchain</template>
      <el-menu-item index="/blocks">View Blocks</el-menu-item>
      <el-menu-item index="/txs">Transactions</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="3">
      <template #title>Tokens</template>
      <el-menu-item index="/tokens">Top Tokens</el-menu-item>
      <el-menu-item index="3-2">item two</el-menu-item>
      <el-menu-item index="3-3">item three</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="4">
      <template #title>Blockchain</template>
      <el-menu-item index="4-1">View Blocks</el-menu-item>
      <el-menu-item index="4-2">item two</el-menu-item>
      <el-menu-item index="4-3">item three</el-menu-item>
    </el-sub-menu>
    <el-link><el-icon><User /></el-icon> Sign In</el-link>
  </el-menu>
    </div>
</template>

<script setup>
// import { ref } from 'vue'
</script>

<style>

</style>