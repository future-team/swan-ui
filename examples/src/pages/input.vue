<script>
    const demos = [
        {
            title: '基本用法',
            desc: '',
            code: `<sw-input placeholder='请输入...'/>`
        },
        {
            title: '禁用状态',
            desc: '属性：disabled',
            code: `
                    <sw-input placeholder='请输入...'
                              disabled />`
        },
        {
            title: '带图标',
            desc: '属性：phIcon',
            code: `
                    <sw-input placeholder='请输入...'
                              phIcon="search"/>`
        },
        {
            title: '是否可见',
            desc: '属性：visible，是否可见，只适用于password类型',
            code: `
                    <sw-input type="password"
                              placeholder="请输入密码..."
                              visible/>`
        },
        {
            title: '一键清除',
            desc: '属性：clear',
            code: `
                    <sw-input type="number"
                              :value="123"
                              placeholder='请输入...'
                              clear/>`
        },
        {
            title: '错误提示',
            desc: '属性：error，此例输入值大于200会有错误提示',
            code: `
                    <sw-input   type="number"
                                placeholder="请输入..."
                                :value="errorValue"
                                :error="isError"
                                @input="handleInput"/>`,
            options: {
                data(){
                    return {
                        isError: false,
                        errorValue: ''
                    }
                },
                methods: {
                    handleInput(value){
                        if(value > 200){
                            this.isError = true
                        }else{
                            this.isError = false
                        }
                    }
                }
            }
        },
        {
            title: '原生属性',
            desc: 'maxlength',
            code: `
                    <sw-input type="text"
                              placeholder='请输入...'
                              :maxlength="3"/>`
        },
        {
            title: '双向绑定',
            code: `
                    输入值：<span>{{value}}</span>
                    <sw-input type="text"
                              placeholder='请输入...'
                              v-model="value"/>`,
            options: {
                data(){
                    return {
                        value : ''
                    }
                }
            }
        }
    ]
    import Base from '../base.vue'
    export default {
        name: 'PageInput',
        extends:Base,
        data(){
            return {
                demos: demos
            }
        }
    }
</script>
