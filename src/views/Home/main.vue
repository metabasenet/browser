<template>
  <div class="app-container">
    <div class="the-container">
      <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
        <el-radio-button label="top">top</el-radio-button>
        <el-radio-button label="right">right</el-radio-button>
        <el-radio-button label="bottom">bottom</el-radio-button>
        <el-radio-button label="left">left</el-radio-button>
      </el-radio-group>
      <el-tabs v-model="usable" :tab-position="tabPosition" @tab-click="handleClick">
        <el-tab-pane v-for="(tab,index) in tabs" :key="index" :name="tab.name" :label="tab.label">
          <div v-show="usable==='1'">
            <h1>用户管理</h1>
          </div>
          <div v-show="usable==='2'">
            <h1>配置管理</h1>
          </div>
          <div v-show="usable==='3'">
            <h1>角色管理</h1>
          </div>
          <div v-show="usable==='4'">
            <h1>部门管理</h1>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabPosition: 'top',
      usable: '1',
      tabs: [
        { name: '1', label: '用户管理' },
        { name: '2', label: '配置管理' },
        { name: '3', label: '角色管理' },
        { name: '4', label: '部门管理' }
      ]
    }
  },
  methods: {
    handleClick(tab) {
      console.log(tab)
    }
  }
}
</script>

<style >
  .app-container{
    height: 100%;
    background-color: #f1f1f1;
  }
  .the-container{
    padding: 20px;
    height: 100%;
    background-color: #fff;
  }
</style>