<script>
    const demos = [
        {
            title: '活动类型',
            code: `
            <sw-badge><span>惠</span></sw-badge>
            <sw-badge phStyle="success">团</sw-badge>
            <sw-badge phStyle="info">团</sw-badge>
            <sw-badge phStyle="danger">预</sw-badge>
            <sw-badge phStyle="error">旺</sw-badge>
            <sw-badge phStyle="warning">商</sw-badge>`
        },
        {
            title: '数字',
            code: `
            <sw-badge>1</sw-badge>
            <sw-badge>2</sw-badge>
            <sw-badge>3</sw-badge>
            <sw-badge>4</sw-badge>
            <sw-badge>5</sw-badge>`
        },
        {
            title: '标识',
            code: `
            <sw-badge phStyle="danger">hot</sw-badge>
            <sw-badge phStyle="danger">new</sw-badge>`
        }
    ]

    import Base from '../base.vue'
    export default {
        name: 'Badge',
        extends:Base,
        data(){
            return {
                demos: demos
            }
        }
    }
</script>
