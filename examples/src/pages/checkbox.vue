<template>
    <div>
        <sw-checkbox :checked="value == 1" label="选项一"  name="选项" value="1" @change="handleChange"/>
        <sw-checkbox :checked="value == 2" label="选项二"  name="选项" value="2" @change="handleChange"/>
        <sw-checkbox :checked="value == 3" label="选项三"  value="3" disabled @change="handleChange"/>
    </div>
</template>

<script>
    export default {
        name: 'checkbox',
        data(){
            return {
                value: ''
            }
        },
        methods: {
            handleChange(val){
                this.value = val
            }
        }
    }
</script>


