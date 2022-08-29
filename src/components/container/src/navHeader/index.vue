         <template>
             <div class="header">
                 <span @click="onclick">
                     <el-icon-expand v-if="collapse"/>
                     <el-icon-fold v-else/>
                 </span>
             </div>    
         </template>
         <script lang="ts" setup>
         interface Props{
             collapse:boolean
         }
         let props:Props=defineProps<{
             collapse:boolean
         }>()
         let emits=defineEmits(['update:collapse'])
         const onclick=()=>{
            emits('update:collapse',!props.collapse)
            console.log(props.collapse);
         }
         </script>
         <style lang="less">
         
         .header{
            height: 60px;
            padding: 0 20px;
            display: flex;
            align-items: center;
         }
         
         </style>