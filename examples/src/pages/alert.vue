<script>
    const demos = [
        {
            title: '基本用法',
            desc: '',
            code: `
                <sw-button @click="visible1 = true">默认Alert</sw-button>
                <sw-alert v-model="visible1"
                          title="这是标题"
                          content="这是内容"
                          shadowDisabled></sw-alert>`,
            options: {
                data(){
                    return {
                        visible1: false
                    }
                }
            }
        },
        {
            title: '两个按钮的Alert',
            desc: '',
            code: `
                <sw-button @click="visible2 = true">两个按钮的Alert</sw-button>
                <sw-alert v-model="visible2"
                          title="这是标题"
                          content="这是内容"
                          :buttons="buttons"></sw-alert>`,
            options: {
                data(){
                    return {
                        visible2: false,
                        buttons: [
                            {text: '取消', phStyle: 'gray', otherProps: {hollow: true}},
                            {onHandle: this.handleConfirm}
                        ]
                    }
                },
                methods: {
                    handleConfirm(){
                        alert('我确定！！')
                        this.visible2 = false
                    }
                }
            }
        },
        {
            title: '两个以上按钮的Alert',
            desc: '',
            code: `
                <sw-button @click="visible3 = true">两个以上按钮的Alert</sw-button>
                <sw-alert v-model="visible3"
                          title="这是标题"
                          content="这是内容"
                          :buttons="buttons3"
                          closeButton></sw-alert>`,
            options: {
                data(){
                    return {
                        visible3: false,
                        buttons3: [
                            {text: '按钮1',  otherProps: {hollow: true}, onHandle:()=>{alert('我是按钮1,我会关闭');this.visible3=false}},
                            {text: '按钮2',  otherProps: {hollow: true}, onHandle:()=>{alert('我是按钮2')}},
                            {text: '按钮3',  otherProps: {hollow: true}, onHandle:()=>{alert('我是按钮3')}}
                        ]
                    }
                }
            }
        }
    ]
    import Base from '../base.vue'
    export default {
        name: 'PageAlert',
        extends:Base,
        data(){
            return {
                demos: demos
            }
        }
    }
</script>

<style>
    @import "../demo.less";
</style>
