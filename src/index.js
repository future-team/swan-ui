import 'phoenix-styles/css/reset.css'
import 'phoenix-styles/css/global.css'

import Button from './modules/Button.vue'
import ButtonGroup from './modules/ButtonGroup.vue'
import Badge from './modules/Badge.vue'
import Star from './modules/Star.vue'
import Icon from './modules/Icon.vue'
import Input from './modules/Input.vue'
import Grid from './modules/Grid.vue'
import Row from './modules/Row.vue'
import Col from './modules/Col.vue'
import Checkbox from './modules/Checkbox.vue'
import Radio from './modules/Radio.vue'
import Textarea from './modules/Textarea.vue'

const components = [
    Button,
    ButtonGroup,
    Badge,
    Star,
    Icon,
    Input,
    Grid,
    Row,
    Col,
    Checkbox,
    Radio,
    Textarea
]

const install = function(Vue, config = {}) {
    if (install.installed) return

    components.map(component => {
        Vue.component(component.name, component);
    })
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
    Icon,
    Input,
    Grid,
    Row,
    Col,
    Checkbox,
    Radio,
    Textarea
}