import Vue from 'vue'
import ImageList from '../../src/modules/image/ImageList.vue'
import { createVm,createVue,destroyVm } from '../util.js'

describe('ImageList', function() {
    let vm

    afterEach(() => {
        destroyVm(vm)
    })

    it('init', function (){
        vm = createVm(ImageList)
        expect(vm.$el.classList.contains('ph-image-list')).toBe(true)
    })

    it('column', function (){
        vm = createVm(ImageList,{
            column: 2
        })
        expect(vm.$el.classList.contains('ph-column-2')).toBe(true)
    })

})