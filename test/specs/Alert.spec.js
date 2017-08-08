import Vue from 'vue'
import Alert from '../../src/modules/modal/Alert.vue'
import { createVm,createVue,destroyVm } from '../util.js'

describe('Alert', function() {
    let vm

    afterEach(() => {
        destroyVm(vm)
    })

    it('title,content', function (){
         vm = createVue({
            template: `
                <sw-alert v-model="true"
                          title="这是标题"
                          content="这是内容"
                          shadowDisabled></sw-alert>
            `,
            components: {
                'sw-alert': Alert
            }
        })
        expect(vm.$el.querySelector('.ph-dialog-title').textContent).toBe('这是标题')
        expect(vm.$el.querySelector('.ph-dialog-body').textContent.trim()).toBe('这是内容')
    })

    it('buttons', function (){
         vm = createVue({
            template: `
                <sw-alert v-model="true"
                          title="这是标题"
                          content="这是内容"
                          :buttons="buttons"></sw-alert>
            `,
            data(){
                return {
                    buttons: [
                        {text: '取消', phStyle: 'gray', otherProps: {hollow: true}}
                    ]
                }
            },
            components: {
                'sw-alert': Alert
            }
        })
        expect(vm.$el.querySelector('.ph-button-inner').textContent.trim()).toBe('取消')
    })

})