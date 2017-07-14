<template>
    <div class="doc">
        <div class="doc-item">
            <h5>基本用法</h5>
            <sw-button-group >
                <sw-button hollow phStyle="gray">取消</sw-button>
                <sw-button>保存</sw-button>
            </sw-button-group>
        </div>

        <div class="doc-item">
            <h5>横向满行排列</h5>
            <sw-button-group phType="justify">
                <sw-button :hollow="active1 != 'button1'" @click="active1='button1'">美团</sw-button>
                <sw-button :hollow="active1 != 'button2'" @click="active1='button2'">点评</sw-button>
            </sw-button-group>
        </div>

        <div class="doc-item">
            <h5>横向不满行</h5>
            <sw-button-group phType="segmente" class="space">
                <sw-button id="button7" v-bind:hollow="active3 != 'button7'" @click="active3 = 'button7'">概览</sw-button>
                <sw-button id="button8" v-bind:hollow="active3 != 'button8'" @click="active3 = 'button8'">交易</sw-button>
                <sw-button id="button9" v-bind:hollow="active3 != 'button9'" @click="active3 = 'button9'">流量</sw-button>
            </sw-button-group>
        </div>

        <div class="doc-item">
            <h5>竖向排列</h5>
            <sw-button-group phType="tacked">
                <sw-button block :hollow="active2 != 'button4'" @click="active2='button4'">提交</sw-button>
                <sw-button block :hollow="active2 != 'button5'" @click="active2='button5'">保存</sw-button>
                <sw-button block :hollow="active2 != 'button6'" @click="active2='button6'">取消</sw-button>
            </sw-button-group>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ButtonGroup',
        data: function(){
            return {
                active1: 'button1',
                active2: 'button5',
                active3: 'button7'
            }
        }
    }
</script>

<style>
    .space {
        font-size: 0;
    }
</style>



