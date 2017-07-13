<template>
    <div>
        <sw-button @click="visible1 = !visible1">默认Alert</sw-button>
        <sw-alert v-model="visible1"
                  title="这是标题"
                  content="这是内容"
                  shadowDisabled></sw-alert>

        <sw-button @click="visible2 = !visible2">两个按钮的Alert</sw-button>
        <sw-alert v-model="visible2"
                  title="这是标题"
                  content="这是内容"
                  :buttons="buttons"></sw-alert>

        <sw-button @click="visible3 = !visible3">两个以上按钮的Alert</sw-button>
        <sw-alert v-model="visible3"
                  title="这是标题"
                  content="这是内容"
                  :buttons="buttons3"
                  closeButton></sw-alert>
    </div>
</template>

<script>
    export default {
        name: 'Alert',
        data(){
            return {
                visible1: false,
                visible2: false,
                visible3: false,
                buttons: [
                    {text: '取消', phStyle: 'gray', otherProps: {hollow: true}},
                    {onHandle: this.handleComfirm}
                ],
                buttons3: [
                    {text: '按钮1',  otherProps: {hollow: true}, onHandle:()=>{alert('我是按钮1')}},
                    {text: '按钮2',  otherProps: {hollow: true}, onHandle:()=>{alert('我是按钮2')}},
                    {text: '按钮3',  otherProps: {hollow: true}, onHandle:()=>{alert('我是按钮3')}}
                ],
            }
        },
        methods: {
            handleComfirm(){
                alert('我确定！！')
                this.visible = false
            }
        }
    }
</script>
