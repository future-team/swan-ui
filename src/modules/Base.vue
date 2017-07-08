<script>
    import { getStyleProps,getClassObject } from '../utils/classUtil'
    import classnames from 'classnames'

    export default {
        name: 'SwBase',
        props: ['id'],
        computed: {
            styleProps: function(){
                return getStyleProps(this.$props);
            },
            classObject: function(){
                return getClassObject(this.styleProps.classProps,this.$props.classPrefix);
            },
            styleObject: function(){
                return this.styleProps.styleObject;
            }
        }
    }
</script>