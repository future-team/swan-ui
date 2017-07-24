<template>
    <div class="demo">
        <sw-button @click="handleClick(true)">打开</sw-button>
    </div>
</template>

<script>
    import Base from '../base.vue'
    export default {
        name: 'Toast',
        extends:Base,
        data(){
            return {
                visible: false
            }
        },
        methods: {
            handleClick(){
                this.$toast.success({
                    content:'保存成功',
                    callback: ()=>{
                        console.log('已提交')
                    }
                })
//                setTimeout(()=>{
//                    Toast.remove()
//                },2000)
            }
        }
    }
</script>