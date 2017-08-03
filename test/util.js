import Vue from 'vue'

const createElem = ()=>{
    const elm = document.createElement('div')
    document.body.appendChild(elm)
}

/**
 * 清除挂载的dom
 * @param vm
 */
exports.destroyVm = (vm)=>{
    vm.$el &&
    vm.$el.parentNode &&
    vm.$el.parentNode.removeChild(vm.$el)
}

/**
 * 获取单文件组件实例
 * @param Component 组件
 * @param propsData props数据
 * @returns {Vue} 组件实例
 */
exports.createVm = (Component,propsData)=>{
    const Ctor = Vue.extend(Component)
    return new Ctor({ propsData: propsData }).$mount(createElem())
}


/**
 * 获取自定义标签的vue实例
 * @param Component 组件
 * @returns {Vue} vue实例
 */
exports.createVue = (Component)=>{
    if (Object.prototype.toString.call(Component) === '[object String]') {
        Component = { template: Component }
    }
    return new Vue(Component).$mount()
}