<template>
    <div>
        <sw-button @click="visible1 = !visible1">默认Prompt</sw-button>
        <sw-prompt v-model="visible1"
                   title="这是标题"
                   content="这是内容"
                   shadowDisabled
                   :confirmCallback="confirmCallback"></sw-prompt>
    </div>
</template>

<script>
    export default{
        name: 'Prompt',
        data(){
            return {
                visible1: false
            }
        },
        methods: {
            confirmCallback(value){
                alert(value)
            }
        }
    }
</script>