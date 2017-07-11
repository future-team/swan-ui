<template>
    <div>
        <sw-switch />
        <sw-switch :checked="true"/>

        <sw-switch :checked="isChecked" @click="handleClick"/>
    </div>
</template>

<script>
    export default {
        name: 'switch',
        data(){
            return {
                isChecked : true
            }
        },
        methods: {
            handleClick(){
                this.isChecked = !this.isChecked
                alert(this.isChecked ? '开~':'关~')
            }
        }
    }
</script>