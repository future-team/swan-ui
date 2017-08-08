import Vue from 'vue'
import Swipe from '../../src/modules/swipe/Swipe.vue'
import { createVm,createVue,destroyVm } from '../util.js'

Vue.component(Swipe.name,Swipe)
describe('Swipe', function() {
    let vm

    afterEach(() => {
        destroyVm(vm)
    })

    it('buttons', function (){
         vm = createVue({
            template: `
                <sw-swipe :buttons="buttons">
                   <div>向左滑</div>
                </sw-swipe>
            `,
            data:{
                buttons: [
                            {text: '置顶',  phStyle: 'gray', onHandle:()=>{console.log('置顶')}}
                        ]
            }
        })
        expect(vm.$el.querySelector('.ph-button-inner').textContent.trim()).toBe('置顶')
    })
})