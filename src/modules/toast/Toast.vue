<template>
    <div :class="classObject">
        <div class="ph-toast-shadow"></div>
        <div class="ph-toast-main">
            <div :class="['ph-toast-content',phIcon?'ph-toast-rect':'']">
                <div v-if="phIcon" class="ph-toast-body">
                    <sw-icon :phIcon="phIcon" :phSize="isLoading ? 'sm':'lg'"></sw-icon>
                    <slot></slot>
                </div>
                <slot v-else></slot>
            </div>
        </div>
    </div>
</template>

<script>
    import SwBase from '../Base.vue'
    import SwIcon from '../icon/Icon.vue'
    export default {
        name: 'SwToast',
        extends: SwBase,
        components: {SwIcon},
        computed: {
            isLoading(){
                return this.phIcon.indexOf('loading') != -1
            }
        },
        props: {
            classPrefix: {
                type: String,
                default: 'toast'
            },
            phIcon: {
                type: String,
                default: ''
            }
        }
    }
</script>