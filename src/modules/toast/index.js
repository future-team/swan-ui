import Vue from 'vue'
import toast from './Toast.vue'

let ToastConstructor = Vue.extend(toast)

let instance = null

var Toast = (options)=>{
    instance = new ToastConstructor({
        data: options
    })
    let component = instance.$mount()
    document.body.appendChild(component.$el)
    return component
}

let toastMap = {
    'info' : '',
    'success' : 'success-circle',
    'fail': 'fail-circle',
    'tip': 'warning-circle',
    'loading': 'loading-white'
}

Object.keys(toastMap).forEach((type)=>{
    Toast[type] = (options)=>{
        if(typeof options === 'string'){
            options = {
                content: options
            }
        }
        options.phIcon = toastMap[type]
        Toast(options)
    }
})

Toast.remove = ()=>{
    instance.remove()
    instance = null
}

export default Toast
