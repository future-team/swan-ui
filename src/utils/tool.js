export function warning(format){
    let _len = arguments.length
    let args = Array(_len > 1 ? _len - 1 : 0)
    for (let _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key]
    }

    if (format === undefined) {
        throw new Error('`warning(format, ...args)` requires a warning ' + 'message argument')
    }
    let argIndex = 0
    let message = 'Warning: ' + format.replace(/%s/g, function () {
            return args[argIndex++]
        })
    if (typeof console !== 'undefined') {
        console.warn(message)
    }
}


export function getClientHeight(){
    return  window.innerHeight ? window.innerHeight : document.compatMode === 'BackCompat' ? document.body.clientHeight : document.documentElement.clientHeight
}

export function getClientWidth(){
    return  window.innerWidth ? window.innerWidth : document.compatMode === 'BackCompat' ? document.body.clientWidth : document.documentElement.clientWidth
}

export function getWindowScrollTop(){
    return  window.pageYOffset ?  window.pageYOffset :  document.compatMode === 'BackCompat' ? document.body.scrollTop : document.documentElement.scrollTop
}

export function getWindowScrollLeft(){
    return  window.pageXOffset ?  window.pageXOffset :  document.compatMode === 'BackCompat' ? document.body.scrollLeft : document.documentElement.scrollLeft
}

export function getOffsetTop(elem) {
    let offsetTop = 0
    if (elem.offsetParent) {
        do {
            offsetTop += elem.offsetTop
            elem = elem.offsetParent
        } while (elem)
    }
    return offsetTop >= 0 ? offsetTop : 0
}

export function getOffset(elem) {
    let offsetTop = 0
    let offsetLeft = 0
    if (elem.offsetParent) {
        do {
            offsetTop += elem.offsetTop
            offsetLeft += elem.offsetLeft
            elem = elem.offsetParent
        } while (elem)
    }
    return {
        offsetTop: offsetTop >= 0 ? offsetTop : 0,
        offsetLeft:  offsetLeft >= 0 ? offsetLeft : 0,
    }
}

export function isElemOutViewport(elem){
    let bodyScrollTop = getWindowScrollTop()
    let elemOffsetTop = getOffsetTop(elem)
    let elemHeight = elem.offsetHeight

    let clientHeight = getClientHeight()


    return elemOffsetTop <= bodyScrollTop + elemHeight || clientHeight + bodyScrollTop <=  elemOffsetTop + elemHeight
}