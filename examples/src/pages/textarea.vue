<template>
    <div>
        <sw-textarea placeholder="说点什么..."></sw-textarea>
        <sw-textarea :count="true"
                     :maxLength="50"
                     placeholder="说点什么...">
        </sw-textarea>
        <sw-textarea :value="content"
                     :count="true"
                     :maxLength="50"
                     placeholder="说点什么..."
                     @input="handleChange">
        </sw-textarea>
    </div>
</template>

<script>
    export default {
        name: 'Textarea',
        data(){
            return {
                content: ''
            }
        },
        methods: {
            handleChange(val){
                this.content = val
//                console.log(val)
            }
        }
    }
</script>


