<script>
    const demos = [
        {
            title: '基本用法',
            desc: '',
            code: `
                    <sw-steps :currentStep="currentStep"
                              :list="['申请提交','财务一级审批','支付中','支付成功']"
                              @click="handleClick"/>`,
            options: {
                data(){
                    return {
                        currentStep: 0
                    }
                },
                methods: {
                    handleClick(item,index){
                        this.currentStep=index
                        this.$info(item)
                    }
                }
            }
        },
        {
            title: '只读模式',
            desc: '属性：readOnly',
            code: `
                    <sw-steps readOnly
                              :currentStep="1"
                              :list="['申请提交','财务一级审批','支付中','支付成功']"/>`
        }
    ]
    import Base from '../base.vue'
    export default {
        name: 'PageSteps',
        extends:Base,
        data(){
            return {
                demos: demos
            }
        }
    }
</script>