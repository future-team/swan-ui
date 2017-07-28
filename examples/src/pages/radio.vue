<script>
    const demos = [
        {
            title: '基本用法',
            desc: '',
            code: `
                        <sw-radio name='radio'
                                  label="选项一"
                                  value="1" />
                        <sw-radio name='radio'
                                  label="选项二"
                                  value="2"
                                  checked/>`
        },
        {
            title: '禁用状态',
            desc: '属性：disabled',
            code: `
                        <sw-radio name='radio1'
                                  label="选项三"
                                  value="3"
                                  disabled />
                        <sw-radio name='radio1'
                                  label="选项四"
                                  value="4"
                                  disabled />`
        },
        {
            title: 'change事件',
            desc: '',
            code: `
                        <sw-radio  name='radio2'
                                   label="选项一"  value="1"
                                   :checked="selected == 1"
                                   @change="handleChange" />
                        <sw-radio  name='radio2'
                                   label="选项二"
                                   value="2"
                                   @change="handleChange"/>`,
            options: {
                data(){
                    return {
                        selected: 1
                    }
                },
                methods: {
                    handleChange(val){
                        this.selected = val
                        alert(val)
                    }
                }
            }

        }
    ]
    import Base from '../base.vue'
    export default {
        name: 'PageRadio',
        extends:Base,
        data(){
            return {
                demos: demos
            }
        }
    }
</script>