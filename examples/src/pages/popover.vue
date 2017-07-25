<script>
    const demos = [
        {
            title: '基本用法',
            code: `
                   <sw-popover content="我是气泡">
                        <sw-button>bottom</sw-button>
                   </sw-popover>
                   <sw-popover content="我是气泡" placement="top">
                        <sw-button>top</sw-button>
                   </sw-popover>
                   <sw-popover content="我是气泡" placement="left">
                        <sw-button>left</sw-button>
                   </sw-popover>
                   <sw-popover content="我是气泡" placement="right">
                        <sw-button>right</sw-button>
                   </sw-popover>`
        }
    ]
    import Base from '../base.vue'
    export default {
        name: 'Popover',
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
    .popover{
        margin-top: 2rem;
    }
</style>