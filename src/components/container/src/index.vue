<template>
 <el-container>
 <el-aside width="auto">
  <nav-side v-model:collapse="collapse"/>
  </el-aside>
    
      <el-container>
        <el-header>
        <nav-header v-model:collapse="collapse"/>
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import NavSide from './navSide/index.vue';
import NavHeader from './navHeader/index.vue';
const collapse=ref<boolean>(false)

</script>
<style lang="less">

.el-header{
    padding: 0;
}
</style>