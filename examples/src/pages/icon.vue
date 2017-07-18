<script>
    const demos = [
        {
            title: '基本用法',
            desc: 'phIcon: 图标类型，phStyle：图标颜色',
            code: `
                <sw-icon phIcon="search"/>
                <sw-icon phIcon="search" phStyle="gray"/>
                <sw-icon phIcon="search" phStyle="info"/>
            `
        },
        {
            title: '箭头类',
            code: `
                <sw-icon phIcon="chevron-left"/>
                <sw-icon phIcon="chevron-right"/>
                &nbsp;&nbsp;
                <sw-icon phIcon="expand-less"/>
                <sw-icon phIcon="expand-more"/>
                &nbsp;&nbsp;
                <sw-icon phIcon="icon-arrow-down" />
                <sw-icon phIcon="icon-arrow-up" />
                <sw-icon phIcon="arrow-downward"/>
                <sw-icon phIcon="arrow-upward"/>
                &nbsp;&nbsp;
                <sw-icon phIcon="arrow-dropup"/>
                <sw-icon phIcon="arrow-dropdown"/>
                &nbsp;&nbsp;
                <sw-icon phIcon="upload"/>
                <sw-icon phIcon="download"/>
                <br/>
                <sw-icon phIcon="zuoxuanzhuan"/>
                <sw-icon phIcon="youxuanzhuan" />
                <sw-icon phIcon="refresh"/>
                <sw-icon phIcon="cancel" />
                <sw-icon phIcon="sort" />
            `
        },
        {
            title: '表单选择类',
            code: `
                <sw-icon phIcon="checkbox-checked-fill"/>
                <sw-icon phIcon="checkbox-checked"/>
                <sw-icon phIcon="checkbox-unchecked"/>
                &nbsp;&nbsp;
                <sw-icon phIcon="radio-unchecked"/>
                <sw-icon phIcon="success-fill" />
                <sw-icon phIcon="success" />
                &nbsp;&nbsp;
                <sw-icon phIcon="radio-checked-fill"/>
                <sw-icon phIcon="radio-checked"/>
            `
        },
        {
            title: '功能类',
            code: `
                 <sw-icon phIcon="zan-fill" />
                 <sw-icon phIcon="zan" />&nbsp;
                 <sw-icon phIcon="user-fill" />
                 <sw-icon phIcon="user" />&nbsp;
                 <sw-icon phIcon="question-fill" />
                 <sw-icon phIcon="question" />&nbsp;
                 <sw-icon phIcon="tip-fill" />
                 <sw-icon phIcon="tip" />&nbsp;
                 <sw-icon phIcon="dialogue-fill"/>
                 <sw-icon phIcon="dialogue"/>&nbsp;
                 <sw-icon phIcon="alert-fill"/>
                 <sw-icon phIcon="alert"/>&nbsp;
                 <sw-icon phIcon="message-fill"/>
                 <sw-icon phIcon="message"/>&nbsp;
                 <sw-icon phIcon="star-fill"/>
                 <sw-icon phIcon="star"/>&nbsp;
                 <sw-icon phIcon="favorite-fill"/>
                 <sw-icon phIcon="favorite"/>&nbsp;
                 <sw-icon phIcon="camera-fill"/>
                 <sw-icon phIcon="camera"/>&nbsp;
                 <sw-icon phIcon="folder-open-fill"/>
                 <sw-icon phIcon="folder-open"/>&nbsp;
                 <sw-icon phIcon="folder-fill"/>
                 <sw-icon phIcon="folder"/>&nbsp;
                 <sw-icon phIcon="home-fill"/>
                 <sw-icon phIcon="home"/>&nbsp;
                 <sw-icon phIcon="place-fill"/>
                 <sw-icon phIcon="place"/>&nbsp;
            `
        },
        {
            title: '加减乘除',
            code: `
                <sw-icon phIcon="check"/>
                <sw-icon phIcon="close"/>
                <sw-icon phIcon="minus"/>
                <sw-icon phIcon="add"/>
                <sw-icon phIcon="add-circle" />
                <sw-icon phIcon="add-circle-fill" />
                <sw-icon phIcon="fail-fill" />
                <sw-icon phIcon="fail" />
            `
        },
        {
            title: '其他',
            code:  `
            <sw-icon phIcon="search"/>
            <sw-icon phIcon="more"/>
            <sw-icon phIcon="menu"/>
            <sw-icon phIcon="clock"/>
            <sw-icon phIcon="wifi"/>
            <sw-icon phIcon="more-vertical"/>
            <sw-icon phIcon="delete"/>
            <sw-icon phIcon="list"/>
            <sw-icon phIcon="setting"/>
            <sw-icon phIcon="share"/>
            <sw-icon phIcon="map"/>
            <sw-icon phIcon="calendar"/>
            <sw-icon phIcon="location"/>
            <sw-icon phIcon="filter"/>
            <sw-icon phIcon="feedback"/>
            <sw-icon phIcon="help"/>
            <sw-icon phIcon="text" />
            <sw-icon phIcon="phone" />
            <sw-icon phIcon="loading" />
            <sw-icon phIcon="font" />
            <sw-icon phIcon="id" />
            <sw-icon phIcon="scale" />
            <sw-icon phIcon="clear" />
            <sw-icon phIcon="strategy" />
            <sw-icon phIcon="eraser" />
            <sw-icon phIcon="modify" />
            `
        }
    ]
    import Base from '../base.vue'
    export default {
        name: 'Icon',
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