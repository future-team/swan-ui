<template>
    <div>
        <sw-button phStyle="primary">primary</sw-button>
        <sw-button phStyle="warning">warning</sw-button>
        <sw-button phStyle="danger" :hollow="true">danger</sw-button>
        <sw-button phStyle="error" :radius="true">error</sw-button>
        <sw-button phStyle="success" :disabled="true">success</sw-button>
        <sw-button phStyle="link">link</sw-button>
        <sw-button phStyle="gray" class="customClass">gray</sw-button>
        <sw-button phSize="md">md</sw-button>
        <sw-button phSize="lg">lg</sw-button>
        <sw-button :phSize="size" v-on:click="handleClick">{{text}}</sw-button>
        <sw-button phSize="sm">sm</sw-button>
        <sw-button phStyle="info" :block="true">info</sw-button>

    </div>
</template>

<script>
    export default {
        name: 'button',
        data: function(){
            return {
                size: 'sm',
                text: '点我变大'
            }
        },
        methods: {
            handleClick: function(){
                if(this.size == 'lg'){
                    this.size = 'sm';
                    this.text = '点我变大';
                }else{
                    this.size = 'lg';
                    this.text = '点我变小';
                }
                console.log(this.text)
            }
        }
    }
</script>

<style lang="css">
    .customClass{
        color: #000000;
    }
</style>


