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
        "Filter",
        "FilterCheckbox",
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
        "Textarea",
        "Toast"
    ],
    "modules": [
        "列表组件",
        "图片",
        "基础组件",
        "弹出类组件",
        "搜索组件",
        "操作类组件",
        "栅格组件",
        "筛选控件",
        "表单组件",
        "辅助组件",
        "选项卡"
    ],
    "allModules": [
        {
            "displayName": "列表组件",
            "name": "列表组件",
            "description": "List\n- ListHeader\n- ListItem\n- ListCol",
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
            "displayName": "图片",
            "name": "图片",
            "description": "图片组件<br/>",
            "classes": [
                {
                    "name": "Image"
                },
                {
                    "name": "ImageList"
                }
            ]
        },
        {
            "displayName": "基础组件",
            "name": "基础组件",
            "classes": [
                {
                    "name": "Icon"
                },
                {
                    "name": "Star"
                },
                {
                    "name": "Badge"
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
            "displayName": "弹出类组件",
            "name": "弹出类组件",
            "classes": [
                {
                    "name": "Toast"
                },
                {
                    "name": "Alert"
                },
                {
                    "name": "Dialog"
                },
                {
                    "name": "Prompt"
                },
                {
                    "name": "Popover"
                },
                {
                    "name": "Popup"
                }
            ]
        },
        {
            "displayName": "搜索组件",
            "name": "搜索组件",
            "description": "搜索框<br/>",
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
                    "name": "Pullup"
                },
                {
                    "name": "Slider"
                },
                {
                    "name": "Steps"
                },
                {
                    "name": "Accordion"
                },
                {
                    "name": "Swipe"
                }
            ]
        },
        {
            "displayName": "栅格组件",
            "name": "栅格组件",
            "description": "Grid\n- Row\n- Col",
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
            "displayName": "筛选控件",
            "name": "筛选控件",
            "description": "筛选\n```code\n   <sw-filter-checkbox\n       :data='filterData' \n       :activeIndex='2'>\n   </sw-filter-checkbox>\n```\ndata数据结构：\n```code\n[\n  {\n      \"key\": 3,\n      \"value\": \"杭州\",\n      \"children\": [\n          {\n              \"key\": 27294361,\n               \"value\": \"杜尚发型\",\n               \"disabled\": false,\n              \"selected\": false\n           }\n      ]\n  },\n  {\n       \"key\": 11,\n       \"value\": \"宁波\",\n       \"children\": [\n          {\n              \"key\": 24890244,\n              \"value\": \"乐在（LOKA）舞蹈工作室\",\n              \"disabled\": false,\n              \"selected\": true\n          }\n      ]\n  }\n]\n```",
            "classes": [
                {
                    "name": "FilterCheckbox"
                },
                {
                    "name": "Filter"
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
                    "name": "Textarea"
                },
                {
                    "name": "Checkbox"
                }
            ]
        },
        {
            "displayName": "辅助组件",
            "name": "辅助组件",
            "description": "拖拽组件  \n- 要在移动端查看效果： https://future-team.github.io/swan-ui/examples/index.html#/drag\n\n示例:\n```code\n    <sw-drag @drag=\"handleDrag\" @drop=\"handleDrop\">\n         <div class=\"drag-demo\">拖我出去</div>\n    </sw-drag>\n```\n```code\n handleDrag(position){\n      let prePosition = position.start\n      let nowPosition = position.move\n\n      this.distanceX = this.preDistanceX + nowPosition.x - prePosition.x\n      this.distanceY = this.preDistanceY + nowPosition.y - prePosition.y\n\n      this.setBoxPosition(this.distanceX,this.distanceY)\n  },\n  handleDrop(){\n      this.preDistanceX = this.distanceX\n      this.preDistanceY = this.distanceY\n  }\n```",
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