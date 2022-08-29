<template>
<el-aside width="auto">
        <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
       :collapse="collapse" 
      >
      <el-menu-item index="1">
         <el-icon><el-icon-menu /></el-icon>
          <span>首页</span>
      </el-menu-item>
      <el-menu-item index="2">
         <el-icon><el-icon-menu /></el-icon>
          <span>图标选择器</span>
      </el-menu-item>
      <el-menu-item index="3">
         <el-icon-menu />
          <span>省市区选择</span>
      </el-menu-item>
      </el-menu>
      </el-aside>
</template>
<script lang="ts" setup>
let props=defineProps<{
    collapse:boolean
}>()

</script>
<style>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>