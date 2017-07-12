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
import Switch from './modules/Switch.vue'
import List from './modules/List.vue'
import ListHeader from './modules/ListHeader.vue'
import ListItem from './modules/ListItem.vue'
import ListCol from './modules/ListCol.vue'
import Dialog from './modules/Dialog.vue'


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
    Textarea,
    Switch,
    List,
    ListHeader,
    ListItem,
    ListCol,
    Dialog
]

const install = function(Vue) {
    if (install.installed) return
    components.map(component => {
        Vue.component(component.name, component)
    })
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

module.exports = {
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
    Textarea,
    Switch,
    List,
    ListHeader,
    ListItem,
    ListCol,
    Dialog
}