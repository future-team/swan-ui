<template>
    <div>
        <sw-grid>
            <sw-row align="stretch">
                <sw-col><div class="col-demo">stretch</div></sw-col>
                <sw-col><div class="col-demo">stretch<br/>stretch</div></sw-col>
                <sw-col><div class="col-demo">stretch<br/>stretch<br/>stretch</div></sw-col>
            </sw-row>
            <sw-row align="top">
                <sw-col><div class="col-demo">top</div></sw-col>
                <sw-col><div class="col-demo">top<br/>top</div></sw-col>
                <sw-col><div class="col-demo">top<br/>top<br/>top</div></sw-col>
            </sw-row>
            <sw-row align="bottom">
                <sw-col><div class="col-demo">bottom</div></sw-col>
                <sw-col><div class="col-demo">bottom<br/>bottom</div></sw-col>
                <sw-col><div class="col-demo">bottom<br/>bottom<br/>bottom</div></sw-col>
            </sw-row>
        </sw-grid>
    </div>
</template>

<script>
    export default {
        name: 'Grid'
    }
</script>

<style lang="less">
    .col-demo{
        padding: .08rem;
        width: 100%;
        border: 1PX solid #ddd;
        border-radius: 2PX;
        background: #f1f1f1;
        text-align: center;
    }
</style>
