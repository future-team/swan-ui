<script>
    const demos = [
        {
            title: '',
            code: '<sw-pullup :status="4"/>'
        }
    ]
    import Base from '../base.vue'
    export default {
        name: 'Pullup',
        extends:Base,
        data(){
            return {
                demos: demos
            }
        }
    }
</script>