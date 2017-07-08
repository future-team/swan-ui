import properties from './propertyConfig'

const PREFIX = 'ph-';

/**
 * 给class属性值添加前缀
 * @param classProps {Array} 如： [primary,sm]
 * @param withPrefix {String}  如： button
 * @param withConstPrefix {String} 如：'ph-'
 * @returns {Object} 如：{'ph-button-primary':true,'ph-button-sm':true}
 */
export function getClassObject(classProps=[],classPrefix,withPrefix=true, withConstPrefix=true){
    classProps.unshift('');
    let classObject = {}
    classProps.forEach(function(item){
        if(withConstPrefix){
            classObject[PREFIX + setPrefix(item,classPrefix,withPrefix)] = true;
        }else{
            classObject[setPrefix(item,withPrefix)] = true;
        }
    });
    return classObject;
}
/**
 * 根据配置文件 propertyConfig.js 获取props中的class和style属性
 * @method getStyleProps
 * @param props {Object}
 * @returns {{classProps: Array, styleObject: {}}}
 */
export function getStyleProps(props){
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
        styleObject: styleProps
    }
}
/*
 * 给className添加前缀后返回className
 * @method getClassName
 * @param name {String} 从该字符串中去查找
 * @param pre {Boolean} 是否添加Component中定义的class前缀，默认添加
 * @return {String}
 * */
export function getClassName(name,pre=true,constPre=true){
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
}
/*
 * 设置css类名前缀
 * @method setPrefix
 * @param name{String} class名字
 * @param pre{Boolean} 是否添加前缀
 * @return {String}
 * */
export function setPrefix(name,classPrefix,pre=true){
    var classArray=[];

    if(pre && classPrefix){
        classArray.push(classPrefix);
    }
    if(name && name != classPrefix){
        classArray.push(name);
    }
    return classArray.join(classArray.length>1?'-':'');
}
/*
 * 检查元素是否存在样式名
 * @method hasClass
 * @param obj {Object} 元素
 * @param cls {String} 需要检查的样式名
 * @return {Boolean}
 * */
export function hasClass(obj,cls){
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}
/*
 * 给元素增加一个样式名
 * @method addClass
 * @param obj {Object} 元素
 * @param cls {String} 样式名
 * */
export function addClass(obj,cls){
    if (!this.hasClass(obj, cls)) obj.className += " " + cls;
}
/*
 * 给元素删除一个样式名
 * @method removeClass
 * @param obj {Object} 元素
 * @param cls {String} 样式名
 * */
export function removeClass(obj,cls){
    if (this.hasClass(obj, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        obj.className = obj.className.replace(reg, ' ');
    }
}
export function setPhPrefix(val){
    return 'ph-' + val;
}