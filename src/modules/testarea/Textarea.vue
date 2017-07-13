<template>
    <div class="ph-textarea-field">
        <textarea :class="classObject"
                  :value="currentValue"
                  :maxLength="maxLength"
                  :placeholder="placeholder"
                  @input="handleChange">
        </textarea>
        <span :class="['ph-textarea-count',count? 'show':'hide']">
            <b class="ph-textarea-length">{{inputLength}}</b>/<b>{{maxLength}}</b>
        </span>
    </div>
</template>
<script>
    import SwBase from '../Base.vue'
    export default {
        name: 'SwTextarea',
        extends: SwBase,
        data(){
            return {
                currentValue : this.value
            }
        },
        computed: {
            inputLength(){
                return this.currentValue ? this.currentValue.length : 0
            }
        },
        methods: {
            handleChange(evt){
                this.currentValue = evt.target.value
                this.$emit('change',this.currentValue,evt)
            }
        },
        props: {
            classPrefix: {
                type: String,
                default: 'textarea'
            },
            value: String,
            count: Boolean,
            maxLength: Number,
            placeholder: String
        }
    }
</script>
