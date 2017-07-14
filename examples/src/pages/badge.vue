<template>
    <div class="doc">
        <div class="doc-item">
            <h5>活动类型</h5>
            <sw-badge><span>惠</span></sw-badge>
            <sw-badge phStyle="success">团</sw-badge>
            <sw-badge phStyle="info">团</sw-badge>
            <sw-badge phStyle="danger">预</sw-badge>
            <sw-badge phStyle="error">旺</sw-badge>
            <sw-badge phStyle="warning">商</sw-badge>
        </div>
        <div class="doc-item">
            <h5>数字</h5>
            <sw-badge>1</sw-badge>
            <sw-badge>2</sw-badge>
            <sw-badge>3</sw-badge>
            <sw-badge>4</sw-badge>
            <sw-badge>5</sw-badge>
        </div>
        <div class="doc-item">
            <h5>标识</h5>
            <sw-badge phStyle="danger">hot</sw-badge>
            <sw-badge phStyle="danger">new</sw-badge>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Badge'
    }

</script>
