YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "Accordion",
        "Alert",
        "Badge",
        "Button",
        "ButtonGroup",
        "Checkbox",
        "Col",
        "Dialog",
        "Drag",
        "Grid",
        "Icon",
        "Image",
        "ImageList",
        "Input",
        "List",
        "ListCol",
        "ListHeader",
        "ListItem",
        "Popover",
        "Popup",
        "Prompt",
        "Pullup",
        "Radio",
        "Row",
        "SearchBar",
        "Slider",
        "Star",
        "Steps",
        "Swipe",
        "Switch",
        "Tab",
        "Tabset",
        "TextArea",
        "Toast"
    ],
    "modules": [
        "列表组件",
        "基础组件",
        "布局组件",
        "弹出框组件",
        "提示组件",
        "搜索组件",
        "操作类组件",
        "标签组件",
        "表单组件",
        "辅助组件",
        "选项卡"
    ],
    "allModules": [
        {
            "displayName": "列表组件",
            "name": "列表组件",
            "description": "List",
            "classes": [
                {
                    "name": "List"
                },
                {
                    "name": "ListCol"
                },
                {
                    "name": "ListHeader"
                },
                {
                    "name": "ListItem"
                }
            ]
        },
        {
            "displayName": "基础组件",
            "name": "基础组件",
            "classes": [
                {
                    "name": "Image"
                },
                {
                    "name": "Star"
                },
                {
                    "name": "Button"
                },
                {
                    "name": "ButtonGroup"
                }
            ]
        },
        {
            "displayName": "布局组件",
            "name": "布局组件",
            "description": "列组件",
            "classes": [
                {
                    "name": "Col"
                },
                {
                    "name": "Grid"
                },
                {
                    "name": "Row"
                }
            ]
        },
        {
            "displayName": "弹出框组件",
            "name": "弹出框组件",
            "classes": [
                {
                    "name": "Alert"
                },
                {
                    "name": "Dialog"
                },
                {
                    "name": "Prompt"
                }
            ]
        },
        {
            "displayName": "提示组件",
            "name": "提示组件",
            "classes": [
                {
                    "name": "Popover"
                }
            ]
        },
        {
            "displayName": "搜索组件",
            "name": "搜索组件",
            "description": "SearchBar<br/>\n- 可通过buttonText设置按钮的文字\n\n属性：\n- buttonText: 按钮文字 <br/>\n- placeholder: 输入提示\n\n事件：\n- input／change: 回调参数(value,evt)，输入时触发 <br/>\n- focus: 聚焦时触发 <br/>\n- blur: 失去焦点时触发 <br/>\n- search: 回调参数(value,evt)，按下回车时触发 <br/>\n- click: 回调参数(value,evt)，按钮被点击时触发",
            "classes": [
                {
                    "name": "SearchBar"
                }
            ]
        },
        {
            "displayName": "操作类组件",
            "name": "操作类组件",
            "classes": [
                {
                    "name": "ImageList"
                },
                {
                    "name": "Popup"
                },
                {
                    "name": "Slider"
                },
                {
                    "name": "Steps"
                },
                {
                    "name": "Toast"
                },
                {
                    "name": "Accordion"
                },
                {
                    "name": "Pullup"
                },
                {
                    "name": "Swipe"
                }
            ]
        },
        {
            "displayName": "标签组件",
            "name": "标签组件",
            "description": "Icon https://future-team.github.io/gfs-icons/index.html",
            "classes": [
                {
                    "name": "Icon"
                },
                {
                    "name": "Badge"
                }
            ]
        },
        {
            "displayName": "表单组件",
            "name": "表单组件",
            "classes": [
                {
                    "name": "Input"
                },
                {
                    "name": "Radio"
                },
                {
                    "name": "Switch"
                },
                {
                    "name": "TextArea"
                },
                {
                    "name": "Checkbox"
                }
            ]
        },
        {
            "displayName": "辅助组件",
            "name": "辅助组件",
            "description": "拖拽组件<br/>\n\n事件\n- drag：回调参数(position,evt)，拖动时时触发<br/>position: {start:{x:12,y:312},move:{x:12,y:312}}\n- drop：回调参数(position,evt)，松开时触发<br/><br/>position: {start:{x:12,y:312},end:{x:12,y:312}}\n\n示例:\n```code\n    <sw-drag @drag=\"handleDrag\" @drop=\"handleDrop\">\n         <div class=\"drag-demo\">拖我出去</div>\n    </sw-drag>\n```\n```code\n handleDrag(position){\n      let prePosition = position.start\n      let nowPosition = position.move\n\n      this.distanceX = this.preDistanceX + nowPosition.x - prePosition.x\n      this.distanceY = this.preDistanceY + nowPosition.y - prePosition.y\n\n      this.setBoxPosition(this.distanceX,this.distanceY)\n  },\n  handleDrop(){\n      this.preDistanceX = this.distanceX\n      this.preDistanceY = this.distanceY\n  }\n```",
            "classes": [
                {
                    "name": "Drag"
                }
            ]
        },
        {
            "displayName": "选项卡",
            "name": "选项卡",
            "classes": [
                {
                    "name": "Tab"
                },
                {
                    "name": "Tabset"
                }
            ]
        }
    ]
} };
});