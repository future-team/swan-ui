<template>
    <div>
        <sw-checkbox :checked="selected.indexOf(1) != -1" label="选项一" value="1" name="选项" @change="handleChange"/>
        <sw-checkbox label="选项二"  value="2"  name="选项" @change="handleChange"/>
        <sw-checkbox label="选项三"  value="3" disabled @change="handleChange"/>
    </div>
</template>

<script>
    export default {
        name: 'Checkbox',
        data(){
            return {
                selected: [1]
            }
        },
        methods: {
            handleChange(val){
                let index = this.selected.indexOf(val)
                if(index == -1){
                    this.selected.push(val)
                }else{
                    this.selected.splice(index,1)
                }
            }
        }
    }
</script>


