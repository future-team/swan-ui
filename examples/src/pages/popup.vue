<template>
    <div>
        <sw-button @click="visibleBottom=!visibleBottom">bottom</sw-button>
        <sw-popup v-model="visibleBottom" align="bottom">
            <div class='ph-action-sheet'>
                <ul>
                    <li class='ph-popup-item ph-popup-tip'>确认 删除此作品？</li>
                    <li class='ph-popup-item ph-popup-delete' @click="hideBottomPopup">删除作品</li>
                </ul>
                <div class='ph-popup-operate' @click="hideBottomPopup">取消</div>
            </div>
        </sw-popup>

        <sw-button @click="visible=!visible">top</sw-button>
        <sw-popup v-model="visible">
            <div class='ph-action-sheet'>
                <ul>
                    <li class='ph-popup-item ph-popup-tip'>确认 删除此作品？</li>
                    <li class='ph-popup-item ph-popup-delete' @click="hideTopPopup">删除作品</li>
                </ul>
                <div class='ph-popup-operate' @click="hideTopPopup">取消</div>
            </div>
        </sw-popup>
    </div>
</template>


<script>
    export default {
        name: 'Popup',
        data(){
            return {
                visibleBottom: false,
                visible: false
            }
        },
        methods: {
            hideBottomPopup(){
                this.visibleBottom = false
            },
            hideTopPopup(){
                this.visible = false
            }
        }
    }
</script>