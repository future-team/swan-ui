<template>
    <div>
        <sw-radio  :checked="selected == 1" label="选项一"  value="1" name='radio' @change="handleChange"/>
        <sw-radio  label="选项二"  value="2" name='radio' @change="handleChange"/>
        <sw-radio  label="选项三"  value="3"  @change="handleChange" disabled/>
    </div>
</template>

<script>
    export default {
        name: 'Radio',
        data(){
            return {
                selected: 1
            }
        },
        methods: {
            handleChange(val){
                this.selected = val
            }
        }
    }
</script>