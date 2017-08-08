import Vue from 'vue'
import Prompt from '../../src/modules/modal/Prompt.vue'
import { createVm,createVue,destroyVm } from '../util.js'

Vue.component(Prompt.name,Prompt)
describe('Prompt', function() {
    let vm

    afterEach(() => {
        destroyVm(vm)
    })

    it('title,content', function (){
         vm = createVue({
            template: `
                <sw-prompt v-model="true"
                           title="这是标题"
                           content="这是内容"></sw-prompt>
            `
        })
        expect(vm.$el.querySelector('.ph-dialog-title').textContent).toBe('这是标题')
        expect(vm.$el.querySelector('.ph-dialog-body').textContent.trim()).toBe('这是内容')
    })

    it('buttons', function (){
         vm = createVue({
            template: `
                <sw-prompt v-model="true"
                           title="这是标题"
                           content="这是内容"
                           shadowDisabled closeButton
                           :buttons="buttons"></sw-prompt>
            `,
            data(){
                return {
                    buttons: [
                        {text: '取消', phStyle: 'gray', otherProps: {hollow: true}}
                    ]
                }
            }
        })
        expect(vm.$el.querySelector('.ph-button-inner').textContent.trim()).toBe('取消')
    })

})