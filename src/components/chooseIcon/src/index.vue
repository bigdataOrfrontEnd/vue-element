<!-- 图标子组件 -->
<template>
<el-button @click="handleClick" type="primary">
    <slot></slot>
</el-button>

<el-dialog :title="title" v-model="dialogvisible" width="890px" >
    <div class="allMain">
        <div  class="iconMain" 
        v-for="(item,index) in Object.keys(Icons)"
         :key="index"
         @click="Copyitem(item)"
         >
            <component :is="`el-icon-${toLine(item)}`"></component>
        <div class="text">
            {{item}}
        </div>
        </div>
    </div>
</el-dialog>
</template>
<script lang="ts" setup>
import {watch,ref} from 'vue'
// 针对于父组件拿过来的值，不要直接修改，要复制一份进行修改
import * as Icons from "@element-plus/icons-vue"
import { toLine } from '@/utils';
import { useCopy } from '@/hooks/usecopy';


const props=defineProps<{
    //弹出框的标题
    title:string,
    visible:boolean
}>()
const emits=defineEmits(['update:visible'])
const dialogvisible=ref(props.visible)
const handleClick=()=>{
    
    emits('update:visible',!props.visible)
}
// 复制图标
const Copyitem=(item:string)=>{
    let text=`<el-icon-${toLine(item)}/>`
    useCopy(text)
    dialogvisible.value=false
    

}
watch(()=>dialogvisible.value,val=>{
    emits('update:visible',val)
})
watch(()=>props.visible,val=>{
      dialogvisible.value=val
     console.log(val);
})


</script>
<style lang="less">
.allMain{
border-radius: 5px;
    width:100%;
    height:600px;
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
    text-align: center;
    .iconMain{
        width: 150px;
        height: 150px;
        background-color: aliceblue;
        border: 1px solid;
    }
    .text{
        font-size: 20px;
    }
    svg{
       width: 2em;
        height: 2em;  
    }
}

</style>