<script>
    const demos = [
        {
            title: '基本用法',
            desc: '',
            code: '<sw-search></sw-search>'
        },
        {
            title: '定制按钮',
            desc: 'buttonText',
            code: '<sw-search buttonText="确定"></sw-search>'
        },
        {
            title: 'click事件',
            desc: '点击取消，触发click，另外还有blur、focus事件',
            code: `
                <sw-search v-model="searchValue"
                           @click="handleClick"
                           buttonText="取消">
                </sw-search>
            `,
            options: {
                data(){
                    return {
                        searchValue: ''
                    }
                },
                methods: {
                    handleClick(){
                        this.searchValue = ''
                    }
                }
            }
        },
        {
            title: 'search事件',
            desc: '点击回车，触发search',
            code: `
                <sw-search @search="handleSearch"
                           @click="handleSearch"
                           buttonText="确定" />
            `,
            options: {
                methods: {
                    handleSearch(val){
                        alert(`点击回车或确定，搜索：${val}`)
                    }
                }
            }
        }
    ]
    import Base from '../base.vue'
    export default {
        name: 'Search',
        extends:Base,
        data(){
            return {
                demos: demos
            }
        }
    }
</script>