<script>
    import ClassName from './mixins/style'
    import classnames from 'classnames'

    export default {
        name: 'SwBase',
        mixins: [ClassName],
        computed: {
            classObject: function(){
                return this.getClassObject()
            },
            styleObject: function(){
                return this.getStyleObject();
            }
        }
    }
</script>