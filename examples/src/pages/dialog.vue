<template>
    <div>
        <sw-button @click="visible = !visible">打开对话框</sw-button>
        <sw-dialog title="对话框" v-model="visible" shadowDisabled>
            <div>这里是内容</div>
            <div slot="footer">
                <sw-button-group>
                    <sw-button @click="visible = !visible">取消</sw-button>
                    <sw-button>确定</sw-button>
                </sw-button-group>
            </div>
        </sw-dialog>
    </div>
</template>

<script>
   export default{
       name: 'Dialog',
       data(){
           return {
               visible: false
           }
       }
   }
</script>