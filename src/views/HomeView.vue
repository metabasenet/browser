<script setup lang="ts">
 import TopBar from '../components/TopBar.vue';
 import FooterBar from '../components/FooterBar.vue';
 import { Share } from '../../node_modules/@element-plus/icons-vue'
import FooterBarVue from '../components/FooterBar.vue';
    const latestBlocks:Array=[
          {
            id:31581437,
            second:1,
            validatedBy:'Validator: Tranchess',
            block:'100 txns',
            BNB:'0.02071 BNB'
          },
          {
            id:31581437,
            second:2,
            validatedBy:'Validator: Tranchess',
            block:'100 txns',
            BNB:'0.02071 BNB'
          },
          {
            id:31581437,
            second:3,
            validatedBy:'Validator: Tranchess',
            block:'100 txns',
            BNB:'0.02071 BNB'
          },
          {
            id:31581437,
            second:4,
            validatedBy:'Validator: Tranchess',
            block:'100 txns',
            BNB:'0.02071 BNB'
          },
          {
            id:31581437,
            second:5,
            validatedBy:'Validator: Tranchess',
            block:'100 txns',
            BNB:'0.02071 BNB'
          },
          {
            id:31581437,
            second:6,
            validatedBy:'Validator: Tranchess',
            block:'100 txns',
            BNB:'0.02071 BNB'
          },
          {
            id:31581437,
            second:7,
            validatedBy:'Validator: Tranchess',
            block:'100 txns',
            BNB:'0.02071 BNB'
          },
          {
            id:31581437,
            second:8,
            validatedBy:'Validator: Tranchess',
            block:'100 txns',
            BNB:'0.02071 BNB'
          },
          {
            id:31581437,
            second:9,
            validatedBy:'Validator: Tranchess',
            block:'100 txns',
            BNB:'0.02071 BNB'
          },
          {
            id:31581437,
            second:10,
            validatedBy:'Validator: Tranchess',
            block:'100 txns',
            BNB:'0.02071 BNB'
          }

    ]

    const latestTransactions:Array=[
      { 
        address:"0x7576a9b7142d...",
        second:10,
        from:'0xEF0274...4E66a1Cd',
        to:'0x000000...00001002',
        BNB:'0.02071 BNB'
      },
      { 
        address:"0x7576a9b7142d...",
        second:10,
        from:'0xEF0274...4E66a1Cd',
        to:'0x000000...00001002',
        BNB:'0.02071 BNB'
      },
      { 
        address:"0x7576a9b7142d...",
        second:10,
        from:'0xEF0274...4E66a1Cd',
        to:'0x000000...00001002',
        BNB:'0.02071 BNB'
      },
      { 
        address:"0x7576a9b7142d...",
        second:10,
        from:'0xEF0274...4E66a1Cd',
        to:'0x000000...00001002',
        BNB:'0.02071 BNB'
      },
      { 
        address:"0x7576a9b7142d...",
        second:10,
        from:'0xEF0274...4E66a1Cd',
        to:'0x000000...00001002',
        BNB:'0.02071 BNB'
      },
      { 
        address:"0x7576a9b7142d...",
        second:10,
        from:'0xEF0274...4E66a1Cd',
        to:'0x000000...00001002',
        BNB:'0.02071 BNB'
      },
      { 
        address:"0x7576a9b7142d...",
        second:10,
        from:'0xEF0274...4E66a1Cd',
        to:'0x000000...00001002',
        BNB:'0.02071 BNB'
      },
      { 
        address:"0x7576a9b7142d...",
        second:10,
        from:'0xEF0274...4E66a1Cd',
        to:'0x000000...00001002',
        BNB:'0.02071 BNB'
      },
      { 
        address:"0x7576a9b7142d...",
        second:10,
        from:'0xEF0274...4E66a1Cd',
        to:'0x000000...00001002',
        BNB:'0.02071 BNB'
      },
      { 
        address:"0x7576a9b7142d...",
        second:10,
        from:'0xEF0274...4E66a1Cd',
        to:'0x000000...00001002',
        BNB:'0.02071 BNB'
      },
    ]


</script>

<template>
  <div class="common-layout">
  <el-container>
    <el-header>
      <top-bar/>
    </el-header>
    <el-main>
      <el-row :gutter="20">
      <el-col :lg="12" :xs="24" :sm="24" :md="24">
        <div class="block-name">Latest Blocks</div>
        <div class="grid-content bg-purple">
          <el-table :data="latestBlocks" stripe style="width: 100%">
            <el-table-column  label="" width="40"> 
              <template #default="scope">
                <el-icon style="vertical-align: middle;">
                  <share />
                </el-icon>
              </template>
            </el-table-column>

            <el-table-column  label="" width="100">
              <template #default="scope">
                <div class="blue">{{ scope.row.id }}</div>
                <div>{{ scope.row.second }} secs ago</div>
              
              </template>              
            </el-table-column>
            <el-table-column   label="" width="240">
              <template #default="scope">
                <div >Validated By <span class="blue">{{ scope.row.validatedBy }}</span></div>
                <div><span class="blue">{{ scope.row.block }}</span> in 3 secs</div>              
              </template> 
              
              
            </el-table-column>
            <el-table-column prop="BNB"  label="">

            </el-table-column>
          </el-table>
        </div>
      </el-col>
      <el-col :lg="12" :xs="24" :sm="24" :md="24">
        <div class="grid-content bg-purple-light">
          <div class="block-name">Latest Transactions</div>
        <div class="grid-content bg-purple">
          <el-table :data="latestTransactions" stripe style="width: 100%">
            <el-table-column  label="" width="40"> 
              <template #default="scope">
                <el-icon style="vertical-align: middle;">
                  <share />
                </el-icon>
              </template>
            </el-table-column>

            <el-table-column  label="" width="180">
              <template #default="scope">
                <div class="blue">{{ scope.row.address }}</div>
                <div>{{ scope.row.second }} secs ago</div>
              
              </template>              
            </el-table-column>
            <el-table-column   label="" width="240">
              <template #default="scope">
                <div >From <span class="blue">{{ scope.row.from }}</span></div>
                <div>To <span class="blue">{{ scope.row.to }}</span> </div>              
              </template> 
              
              
            </el-table-column>
            <el-table-column prop="BNB"  label="">

            </el-table-column>
          </el-table>
        </div>

        </div>
      </el-col>
    </el-row>



    </el-main>
    <el-footer class="footer"><FooterBar/></el-footer>
  </el-container>
</div>
</template>


<style>
.el-header,  .el-footer {
    
    color: var(--el-text-color-primary);
    text-align: center;
 
  }

  .el-aside {
    background-color: #d3dce6;
    color: var(--el-text-color-primary);
    text-align: center;
 
  }

  .blue{
    color:blue;
  }
.block-name{
  font-weight: 700;
}
.bg-purple{

  box-shadow: 0 2px 4px rgba(0,0,0,0.12),0 0 6px rgba(0,0,0,0.04)
}
.footer{
  margin-bottom: 20px;
}


 

  
</style>