<script>
    import { getStyleProps,getClassObject } from '../utils/classUtil'

    export default {
        name: 'SwBase',
        computed: {
            styleProps: function(){
                return getStyleProps(this.$props)
            },
            classObject: function(){
                return getClassObject(this.styleProps.classProps,this.$props.classPrefix)
            },
            styleObject: function(){
                return this.styleProps.styleObject
            }
        }
    }
</script>