<template>
    <div>
        <sw-button phStyle="primary">primary</sw-button>
        <sw-button phStyle="warning">warning</sw-button>
        <sw-button phStyle="danger">danger</sw-button>
        <sw-button phStyle="info">info</sw-button>
        <sw-button phStyle="error">error</sw-button>
        <sw-button phStyle="success">success</sw-button>
        <sw-button phStyle="link">link</sw-button>
        <sw-button phStyle="gray">gray</sw-button>
        <sw-button v-on:click="handleClick">点我</sw-button>
        <sw-button phSize="sm">sm</sw-button>
        <sw-button phSize="md">md</sw-button>
        <sw-button phSize="lg">lg</sw-button>
    </div>
</template>

<script>
    export default {
        name: 'button-page',
        methods: {
            handleClick: function(){
                alert('啊！我被点击了！')
            }
        }
    }
</script>


