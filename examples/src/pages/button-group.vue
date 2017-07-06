<template>
    <div>
        <sw-button-group v-model="active1">
            <sw-button id="button1" v-bind:hollow="active1 == 'button1'" @click="handleClick1">justify1</sw-button>
            <sw-button id="button2" v-bind:hollow="active1 == 'button2'" @click="handleClick1">justify2</sw-button>
            <sw-button id="button3" v-bind:hollow="active1== 'button3'" @click="handleClick1">justify3</sw-button>
        </sw-button-group>

        <sw-button-group phType="tacked" v-model="active2">
            <sw-button block  id="button4" v-bind:hollow="active2 == 'button4'" @click="handleClick2">tacked1</sw-button>
            <sw-button block  id="button5" v-bind:hollow="active2 == 'button5'" @click="handleClick2">tacked2</sw-button>
            <sw-button block  id="button6" v-bind:hollow="active2 == 'button6'" @click="handleClick2">tacked3</sw-button>
        </sw-button-group>
    </div>
</template>

<script>
    export default {
        name: 'button-group',
        data: function(){
            return {
                active1: 'button1',
                active2: 'button5'
            }
        },
        methods: {
            handleClick1: function(id){
                this.active1 = id
            },
            handleClick2: function(id){
                this.active2 = id
            }
        }
    }
</script>

<style lang="css">

</style>


