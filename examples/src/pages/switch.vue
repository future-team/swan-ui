<script>
    const demos = [
        {
            title: '基本用法',
            desc: '默认关闭',
            code: '<sw-switch/>'
        },
        {
            title: '打开状态',
            desc: '属性：checked',
            code: '<sw-switch checked/>'
        },
        {
            title: 'click事件',
            code: '<sw-switch :checked="isChecked" @click="handleClick"/>',
            options: {
                data(){
                    return {
                        isChecked : true
                    }
                },
                methods: {
                    handleClick(){
                        this.isChecked = !this.isChecked
                        alert(this.isChecked ? '开~':'关~')
                    }
                }
            }
        }
    ]
    import Base from '../base.vue'
    export default {
        name: 'Switch',
        extends:Base,
        data(){
            return {
                demos: demos
            }
        }
    }
</script>