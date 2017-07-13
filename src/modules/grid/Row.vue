<script>
    import SwBase from '../Base.vue'
    export default {
        name: 'SwRow',
        extends: SwBase,
        render: function(createElement){
            return createElement(
                this.componentTag,
                {
                    'class': this.classObject
                },
                this.$slots.default )
        },
        props: {
            classPrefix: {
                type: String,
                default: 'row'
            },
            align: {
                type: String,
                default: 'stretch',
                validator(val){
                    return ['top','bottom','center','stretch','baseline'].indexOf(val) >= 0
                }
            },
            componentTag: {
                type: String,
                default: 'div'
            }
        }
    }
</script>

<!--<style lang="less" src="phoenix-styles/less/public.less"></style>-->
<!--<style lang="less" src="phoenix-styles/less/modules/grid.less"></style>-->