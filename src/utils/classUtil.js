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
            propConfig = properties[key]
        if(value && propConfig){
            switch (typeof(propConfig)){
                case 'boolean':
                    if(value){
                        classProps.push(filterClass(props,key))
                    }
                    break
                case 'function':
                    let param = propConfig.call(this,value)
                    if(typeof(param) == 'string' ){
                        classProps.push(filterClass(props,param))
                    }else{
                        styleProps.push(filterClass(props,param))
                    }
                    break
                default :
                    classProps.push(filterClass(props,propConfig))
                    break
            }
        }
    }
    return {
        classProps: classProps,
        styleObject: styleProps
    }
}
/*
 * 设置css类名前缀
 * @method setPrefix
 * @param name{String} class名字
 * @param pre{Boolean} 是否添加前缀
 * @return {String}
 * */
export function setPrefix(name,classPrefix,pre=true){
    var classArray=[]

    if(pre && classPrefix){
        classArray.push(classPrefix)
    }
    if(name && name != classPrefix){
        classArray.push(name)
    }
    return classArray.join(classArray.length>1?'-':'')
}

export function setPhPrefix(val){
    return 'ph-' + val
}

function filterClass(props,key){
    if(!props.classMapping){
        return key
    }
    let value =typeof(key)=='string'?props.classMapping[key]:key

    return value ? value : key
}