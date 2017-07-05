import Button from './Button.vue'

const components = [
    Button
]

const install = function(Vue, config = {}) {
    if (install.installed) return

    components.map(component => {
        Vue.component(component.name, component);
    });
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    Button
}