<script>
    const demos = [
        {
            title: '基本用法',
            code: '<sw-textarea placeholder="说点什么..." />'
        },
        {
            title: '显示和限制输入字符数',
            desc: '属性：count 和 maxlength 配合使用',
            code: `
                   <sw-textarea count
                                :maxlength="10"
                                placeholder="说点什么..." />`
        },
        {
            title: 'change事件',
            desc: '属性：count 和 maxlength 配合使用',
            code: `
                   <sw-textarea :value="content"
                                :count="true"
                                :maxlength="10"
                                placeholder="说点什么..."
                                @change="handleChange" />`,
            options: {
                data(){
                    return {
                        content: ''
                    }
                },
                methods: {
                    handleChange(val){
                        this.content = val
                        alert(val)
                    }
                }
            }
        },
        {
            title: '双向绑定',
            code: `
                   {{content}}
                   <sw-textarea v-model="content"
                                :count="true"
                                :maxlength="10"
                                placeholder="说点什么..."/>`,
            options: {
                data(){
                    return {
                        content: ''
                    }
                }
            }
        }
    ]
    import Base from '../base.vue'
    export default {
        name: 'PageTextarea',
        extends:Base,
        data(){
            return {
                demos: demos
            }
        }
    }
</script>


