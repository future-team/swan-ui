import Search from '../../src/modules/search/Search.vue'
import { createVm ,createVue,destroyVm } from '../util'

describe('Search', function() {
    let vm

    afterEach(() => {
        destroyVm(vm)
    })

    it('init', function (){
        vm = createVm(Search)
        expect(vm.$el.classList.contains('ph-search-bar')).toBe(true)
    })

    it('placeholder', function (){
        vm = createVm(Search,{
            placeholder: '测试',
            value: '123'
        })        
        expect(vm.$el.querySelector('.ph-input-placeholder-text').innerHTML).toBe('测试')
    })
})