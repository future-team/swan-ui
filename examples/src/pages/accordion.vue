<template>
    <div>
        <sw-accordion>
            <template slot="header">标题一(收起状态)</template>
            <sw-list>
                <sw-list-item>
                    <sw-list-col>未上线单店</sw-list-col>
                </sw-list-item>
                <sw-list-item>
                    <sw-list-col>未上线连锁店</sw-list-col>
                </sw-list-item>
            </sw-list>
        </sw-accordion>

        <sw-accordion hideIcon>
            <template slot="header">标题一(展开状态)</template>
            <sw-list>
                <sw-list-item>
                    <sw-list-col>未上线单店</sw-list-col>
                </sw-list-item>
                <sw-list-item>
                    <sw-list-col>未上线连锁店</sw-list-col>
                </sw-list-item>
            </sw-list>
        </sw-accordion>

        <sw-accordion visible>
            <template slot="header">标题一(展开状态)</template>
            <sw-list>
                <sw-list-item>
                    <sw-list-col>未上线单店</sw-list-col>
                </sw-list-item>
                <sw-list-item>
                    <sw-list-col>未上线连锁店</sw-list-col>
                </sw-list-item>
            </sw-list>
        </sw-accordion>
    </div>
</template>

<script>
    export default {
        name: 'accordion'
    }
</script>