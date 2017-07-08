<template>
    <div>
        <sw-button-group >
            <sw-button>default</sw-button>
            <sw-button>default</sw-button>
        </sw-button-group>

        <sw-button-group phType="justify" v-model="active1">
            <sw-button id="button1" v-bind:hollow="active1 == 'button1'" @click="handleClick1">justify1</sw-button>
            <sw-button id="button2" v-bind:hollow="active1 == 'button2'" @click="handleClick1">justify2</sw-button>
            <sw-button id="button3" v-bind:hollow="active1== 'button3'" @click="handleClick1">justify3</sw-button>
        </sw-button-group>

        <sw-button-group phType="tacked" v-model="active2">
            <sw-button block  id="button4" v-bind:hollow="active2 == 'button4'" @click="handleClick2">tacked1</sw-button>
            <sw-button block  id="button5" v-bind:hollow="active2 == 'button5'" @click="handleClick2">tacked2</sw-button>
            <sw-button block  id="button6" v-bind:hollow="active2 == 'button6'" @click="handleClick2">tacked3</sw-button>
        </sw-button-group>

        <sw-button-group phType="tacked" v-model="active3">
            <sw-button block  id="button7" v-bind:hollow="active3 == 'button7'" @click="handleClick3">segmente</sw-button>
            <sw-button block  id="button8" v-bind:hollow="active3 == 'button8'" @click="handleClick3">segmente</sw-button>
            <sw-button block  id="button9" v-bind:hollow="active3 == 'button9'" @click="handleClick3">segmente</sw-button>
        </sw-button-group>
    </div>
</template>

<script>
    export default {
        name: 'ButtonGroup',
        data: function(){
            return {
                active1: 'button1',
                active2: 'button5',
                active3: ''
            }
        },
        methods: {
            handleClick1: function(id){
                this.active1 = id
            },
            handleClick2: function(id){
                this.active2 = id
            },
            handleClick3: function(id){
                this.active3 = id
            }
        }
    }
</script>

<style lang="css">

</style>


