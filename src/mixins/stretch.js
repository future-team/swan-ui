export default {
    methods:{
        handleClick(){
            this.currentVisible = !this.currentVisible
            this.$emit('click',this.currentVisible)
        },
        setHeight(){
            this.$refs.stretchBodyParent.style.height = this.currentVisible ? this.height : 0
        }
    },
    data(){
        return {
            currentVisible:this.visible,
            height: 0
        }
    },
    props: {
        visible: {
            type: Boolean,
            default: false
        }
    },
    mounted(){
        this.height = this.$refs.stretchBody.offsetHeight+'px'
        this.setHeight()

    },
    watch: {
        currentVisible(){
            this.setHeight()
        }
    }
}