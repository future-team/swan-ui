<script>
    const demos = [
        {
            title: '基本用法',
            desc: '属性：align,默认值：top，顶部弹出',
            code: `
                <sw-button @click="visible=true">top</sw-button>
                <sw-popup v-model="visible">
                    <sw-list>
                        <sw-list-item>
                            <sw-list-col>未上线单店</sw-list-col>
                        </sw-list-item>
                        <sw-list-item active>
                            <sw-list-col>未上线连锁店</sw-list-col>
                        </sw-list-item>
                        <sw-list-item >
                            <sw-list-col>在线单店</sw-list-col>
                        </sw-list-item>
                        <sw-list-item >
                            <sw-list-col>在线连锁店</sw-list-col>
                        </sw-list-item>
                    </sw-list>
                </sw-popup>`,
            options: {
                data(){
                    return {
                        visible: false
                    }
                }
            }
        },
        {
            title: '低部弹出',
            desc: '属性：align,属性值：bottom',
            code: `
                <sw-button @click="visibleBottom=true">bottom</sw-button>
                <sw-popup v-model="visibleBottom" align="bottom">
                    <div class='ph-action-sheet'>
                        <ul>
                            <li class='ph-popup-item ph-popup-tip'>确认 删除此作品？</li>
                            <li class='ph-popup-item ph-popup-delete' @click="visibleBottom = false">删除作品</li>
                        </ul>
                        <div class='ph-popup-operate' @click="visibleBottom = false">取消</div>
                    </div>
                </sw-popup>`,
            options: {
                data(){
                    return {
                        visibleBottom: false
                    }
                }
            }
        }
    ]
    import Base from '../base.vue'
    export default {
        name: 'PagePopup',
        extends:Base,
        data(){
            return {
                demos: demos
            }
        }
    }
</script>

<style>
    .demo .ph-popup-main{
        margin-top: 1rem;
    }
</style>