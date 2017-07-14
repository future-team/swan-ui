<template>
    <div :class="classObject">
        <div class="ph-accordion-header clearfix" @click="handleClick">
            <slot name="header"></slot>
            <sw-icon v-if="!hideIcon" phIcon="expand-more" :class="currentVisible ? 'active':''"></sw-icon>
        </div>
        <div class="ph-accordion-body animated" ref="accordionBodyParent">
            <div ref="accordionBody">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    import SwBase from '../Base.vue'
    import SwIcon from '../icon/Icon.vue'
    export default {
        name: 'SwAccordion',
        extends: SwBase,
        components: {SwIcon},
        methods:{
            handleClick(){
                this.currentVisible = !this.currentVisible
                this.$emit('click',this.currentVisible)
            },
            setHeight(){
                this.$refs.accordionBodyParent.style.height = this.currentVisible ? this.height : 0
            }
        },
        data(){
            return {
                currentVisible:this.visible,
                height: 0
            }
        },
        props: {
            classPrefix: {
                type: String,
                default: 'accordion'
            },
            visible: {
                type: Boolean,
                default: false
            },
            hideIcon : {
                type: Boolean,
                default: false
            }
        },
        mounted(){
            this.height = this.$refs.accordionBody.offsetHeight+'px'
            this.setHeight()

        },
        watch: {
            currentVisible(){
                this.setHeight()
            }
        }
    }
</script>
