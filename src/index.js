import Button from './modules/Button.vue'
import ButtonGroup from './modules/ButtonGroup.vue'
import Badge from './modules/Badge.vue'
import Star from './modules/Star.vue'
import Icon from './modules/Icon.vue'
// import 'phoenix-styles'

const components = [
    Button,
    ButtonGroup,
    Badge,
    Star,
    Icon
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
    Button,
    ButtonGroup,
    Badge,
    Star,
    Icon
}