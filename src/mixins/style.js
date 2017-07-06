import constants from '../utils/constants';
import properties from '../utils/property.config'

const PREFIX = 'ph-';

/**
 * 根据配置文件 property.config.js 生成class和style
 */
export default {
    methods: {
        getStyleObject(){
            let style = this.getStyleProps();
            return  style.styleProps
        },

        getClassObject(withPrefix=true, withConstPrefix=true){
            let _this = this;
            let style = this.getStyleProps();
            let classProps = style.classProps;
            classProps.unshift('');

            let classObject = {}
            classProps.forEach(function(item){
                if(withConstPrefix){
                    classObject[PREFIX + _this.setPrefix(item,withPrefix)] = true;
                }else{
                    classObject[_this.setPrefix(item,withPrefix)] = true;
                }
            });
            return classObject;
        },
        getStyleProps(){
            let props = this.$props
            let classProps = []
            let styleProps = {}
            for(let key in props){
                let value = props[key],
                    propConfig = properties[key];
                if(value && propConfig){
                    switch (typeof(propConfig)){
                        case 'boolean':
                            if(value){
                                classProps.push(key);
                            }
                            break;
                        case 'function':
                            let param = propConfig.call(this,value);
                            if(typeof(param) == 'string' ){
                                classProps.push(param);
                            }else{
                                styleProps.push(param);
                            }
                            break;
                        default :
                            classProps.push(propConfig);
                            break;
                    }
                }
            }
            return {
                classProps: classProps,
                styleProps: styleProps
            }
        },
        /*
         * 给className添加前缀后返回className
         * @method getClassName
         * @param name {String} 从该字符串中去查找
         * @param pre {Boolean} 是否添加Component中定义的class前缀，默认添加
         * @return {String}
         * */
        getClassName(name,pre=true,constPre=true){
            name=name?name:'';
            name = (name+'').split(' ');
            let list = [],
                _this = this;
            name.forEach(function(item){
                if(item){
                    if(constPre) list.push(PREFIX + _this.setPrefix(item,pre) );
                    else list.push(_this.setPrefix(item,pre) );
                }
            });
            return list.join(' ');
        },
        /*
         * 设置css类名前缀
         * @method setPrefix
         * @param name{String} class名字
         * @param pre{Boolean} 是否添加前缀
         * @return {String}
         * */
        setPrefix(name,pre=true){
            let props = this.$props
            var classArray=constants.classNameNamespace?[constants.classNameNamespace] :[];

            if(pre && props.classPrefix){
                classArray.push(props.classPrefix);
            }
            if(name && name != props.classPrefix){
                classArray.push(name);
            }
            return classArray.join(classArray.length>1?'-':'');
        },
        /*
         * 检查元素是否存在样式名
         * @method hasClass
         * @param obj {Object} 元素
         * @param cls {String} 需要检查的样式名
         * @return {Boolean}
         * */
        hasClass(obj,cls){
            return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
        },
        /*
         * 给元素增加一个样式名
         * @method addClass
         * @param obj {Object} 元素
         * @param cls {String} 样式名
         * */
        addClass(obj,cls){
            if (!this.hasClass(obj, cls)) obj.className += " " + cls;
        },
        /*
         * 给元素删除一个样式名
         * @method removeClass
         * @param obj {Object} 元素
         * @param cls {String} 样式名
         * */
        removeClass(obj,cls){
            if (this.hasClass(obj, cls)) {
                var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
                obj.className = obj.className.replace(reg, ' ');
            }
        }
    }
}