<template>
    <label :class="classObject">
        <input type="checkbox"
               :checked="checked"
               @click="handleClick"/>
        <div class="ph-checkbox"></div>
    </label>
</template>

<script>
    import SwBase from '../Base.vue'
    export default {
        name: 'SwSwitch',
        extends: SwBase,
        methods: {
            handleClick(evt){
                this.$emit('click',this.checked,evt)
            }
        },
        props: {
            /**
             * 样式前缀
             * @property classPrefix
             * @type String
             * @default 'switch'
             * */
            classPrefix: {
                type: String,
                default: 'switch'
            },
            /**
             * 开关值
             * @property checked
             * @type Boolean
             * */
            checked: {
                type: Boolean,
                default: false
            }
        }
    }
</script>