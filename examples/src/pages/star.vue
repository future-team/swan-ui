<script>
    const demos = [
        {
            title: '星级',
            desc: '属性：rate，默认：0',
            code: `
            <sw-star rate="5"/>
            <sw-star rate="15"/>
            <sw-star rate="20"/>
            <sw-star rate="25"/>
            <sw-star rate="30"/>
            <sw-star rate="35"/>`
        },
        {
            title: '大小',
            desc: '属性：phSize，默认：sm',
            code: `
            <sw-star rate="40" phSize="sm"/>
            <sw-star rate="45" phSize="md"/>
            <sw-star rate="50" phSize="lg"/>`
        }
    ]
    import Base from '../base.vue'
    export default {
        name: 'PageStar',
        extends:Base,
        data(){
            return {
                demos: demos
            }
        }
    }
</script>

<style lang="less">

</style>