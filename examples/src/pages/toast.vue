<script>
    const demos = [
        {
            title: '基本用法',
            desc: '默认停留时间：2s，两种参数传递方式',
            code: `
                       <sw-button @click="$info('请至少选择一项')">传递字符串</sw-button>
                       <sw-button @click="$success({
                            content:'保存成功',
                            callback: ()=>{
                                console.log('已提交')
                            }
                        })">传递参数对象</sw-button>`
        },
        {
            title: '提示成功',
            desc: '',
            code: `<sw-button @click="$success('保存成功')">打开</sw-button>`
        },
        {
            title: '提示失败',
            desc: '',
            code: `<sw-button @click="$fail('保存失败')">打开</sw-button>`
        },
        {
            title: '警告',
            desc: '',
            code: `<sw-button @click="$tip('操作危险')">打开</sw-button>`
        },
        {
            title: '加载中',
            desc: '',
            code: `<sw-button @click="$loading('加载中')">打开</sw-button>`
        }
    ]
    import Base from '../base.vue'
    export default {
        name: 'Toast',
        extends:Base,
        data(){
            return {
                demos: demos
            }
        }
    }
</script>