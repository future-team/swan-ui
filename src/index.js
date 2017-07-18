import Button from './modules/button/Button.vue'
import ButtonGroup from './modules/button/ButtonGroup.vue'
import Badge from './modules/badge/Badge.vue'
import Star from './modules/star/Star.vue'
import Icon from './modules/icon/Icon.vue'
import Input from './modules/input/Input.vue'
import Grid from './modules/grid/Grid.vue'
import Row from './modules/grid/Row.vue'
import Col from './modules/grid/Col.vue'
import Checkbox from './modules/checkbox/Checkbox.vue'
import Radio from './modules/radio/Radio.vue'
import Textarea from './modules/testarea/Textarea.vue'
import Switch from './modules/switch/Switch.vue'
import List from './modules/list/List.vue'
import ListHeader from './modules/list/ListHeader.vue'
import ListItem from './modules/list/ListItem.vue'
import ListCol from './modules/list/ListCol.vue'
import Dialog from './modules/modal/Dialog.vue'
import Alert from './modules/modal/Alert.vue'
import Prompt from './modules/modal/Prompt.vue'
import Popup from './modules/popup/Popup.vue'
import Steps from './modules/steps/Steps.vue'
import Accordion from './modules/accordion/Accordion.vue'
import Drag from './modules/drag/Drag.vue'
import Slider from './modules/slider/Slider.vue'
import Swipe from './modules/swipe/Swipe.vue'
import Search from './modules/search/Search.vue'

const components = {
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
    Dialog,
    Alert,
    Prompt,
    Popup,
    Steps,
    Accordion,
    Drag,
    Slider,
    Swipe,
    Search
}


const install = function(Vue) {
    if (install.installed) return
    Object.keys(components).forEach((key)=>{
        Vue.component(components[key].name, components[key])
    })
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

module.exports = Object.assign(components,{install})