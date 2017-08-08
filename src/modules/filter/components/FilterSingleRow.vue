<template>
<div v-if='show' class="ph-filter-selector" >
    <div class="ph-list"  >
        <item 
            v-for="(item ,index) in data.panelData"
            :key="item.key"
            :itemKey="item.key"
            :label="item.value"
            :active="data.activeKey == item.key"
            @itemKey-change="onItemKeyChange">
        </item>
    </div>
</div>
</template>

<script>
import SwBase from '../../Base.vue'
import Item from './FilterItem'
export default {
    name: 'SwFilterSingleRow',
    extends: SwBase,
    components: {
        Item
    },
    props: {               
        data: {
            type: Object,
            default: {}
        },
        show: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
        }
    },
    computed: {
        
    },
    mounted () {
    },
    methods: {
        // 选中的item改变
        onItemKeyChange(activeKey, activeLabel){
            this.data.activeKey= activeKey
            this.data.activeValue= activeLabel
            this.$emit('close-shadow')
            this.$emit('valid-filter')
        }
    }
}
</script>