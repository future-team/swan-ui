import Vue from 'vue'
import List from '../../src/modules/list/List.vue'
import ListHeader from '../../src/modules/list/ListHeader.vue'
import ListItem from '../../src/modules/list/ListItem.vue'
import ListCol from '../../src/modules/list/ListCol.vue'
import Row from '../../src/modules/grid/Row.vue'

import { createVm,createVue,destroyVm } from '../util.js'
Vue.component(Row.name,Row)
describe('List', function() {
    let vm

    afterEach(() => {
        destroyVm(vm)
    })

    it('init', function (){
        vm = createVm(List)
        expect(vm.$el.classList.contains('ph-list')).toBe(true)
    })

    it('column', function (){
        vm = createVue({
            template: `
                <sw-list>
                    <sw-list-header>列表标题</sw-list-header>
                    <sw-list-item disabled>
                        <sw-list-col heading style="background: #ff6633">
                            <label>heading</label>
                        </sw-list-col>
                        <sw-list-col tail style="background: #bbb">
                                <label>tail</label>
                        </sw-list-col>
                    </sw-list-item>
                </sw-list>
            `,
            components: {
                'sw-list': List,
                'sw-list-item': ListItem,
                'sw-list-col': ListCol,
                'sw-list-header': ListHeader,
                'sw-row': Row
            }
        })
        expect(vm.$el.querySelector('.ph-list-header')).toBeTruthy()
        expect(vm.$el.querySelector('.ph-list-item').classList.contains('ph-list-item-disabled')).toBe(true)
        expect(vm.$el.querySelector('.ph-list-col').classList.contains('ph-list-col-heading')).toBe(true)
    })
})