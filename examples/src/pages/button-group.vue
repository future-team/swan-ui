<script>
    const demos = [
        {
            title: '基本用法',
            desc: '',
            code: `
            <sw-button-group>
                <sw-button hollow phStyle="gray">取消</sw-button>
                <sw-button>保存</sw-button>
            </sw-button-group>`
        },
        {
            title: '横向满行排列',
            desc: '属性：phType，属性值：justify',
            code: `
            <sw-button-group phType="justify">
                <sw-button :hollow="active1 != 'button1'" @click="active1='button1'">美团</sw-button>
                <sw-button :hollow="active1 != 'button2'" @click="active1='button2'">点评</sw-button>
            </sw-button-group>`,
            options: {
                data(){
                    return { active1: 'button1'}
                }
            }
        },
        {
            title: '横向不满行',
            desc: '属性：phType，属性值：segmente',
            code: `
             <sw-button-group phType="segmente" class="space">
                <sw-button id="button7" v-bind:hollow="active3 != 'button7'" @click="active3 = 'button7'">概览</sw-button>
                <sw-button id="button8" v-bind:hollow="active3 != 'button8'" @click="active3 = 'button8'">交易</sw-button>
                <sw-button id="button9" v-bind:hollow="active3 != 'button9'" @click="active3 = 'button9'">流量</sw-button>
             </sw-button-group>`,
            options: {
                data(){
                    return { active3: 'button7'}
                }
            }
        },
        {
            title: '竖向排列',
            desc: '属性：phType， 属性值：tacked',
            code: `
             <sw-button-group phType="tacked">
                <sw-button block :hollow="active2 != 'button4'" @click="active2='button4'">提交</sw-button>
                <sw-button block :hollow="active2 != 'button5'" @click="active2='button5'">保存</sw-button>
                <sw-button block :hollow="active2 != 'button6'" @click="active2='button6'">取消</sw-button>
             </sw-button-group>`,
            options: {
                data(){
                    return { active2: 'button5'}
                }
            }
        }
    ]
    import Base from '../base.vue'
    export default {
        name: 'PageButtonGroup',
        extends:Base,
        data(){
            return {
                demos: demos
            }
        }
    }
</script>

<style>
    .space {
        font-size: 0;
    }
</style>



