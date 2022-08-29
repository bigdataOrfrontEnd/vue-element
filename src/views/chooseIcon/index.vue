<template>
    <choose-icon title="选择图标" v-model:visible="visible">图标选择</choose-icon>
</template>
<script lang="ts" setup>
import ChooseIcon from '../../components/chooseIcon/src/index.vue'
import {ref} from 'vue'
const visible=ref<boolean>(false)

</script>
<style lang="less">

</style>