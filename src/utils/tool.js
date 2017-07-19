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
    return document.compatMode === 'BackCompat' ? document.body.clientHeight : document.documentElement.clientHeight
}

export function getOffsetTop( elem ) {
    let location = 0
    if (elem.offsetParent) {
        do {
            location += elem.offsetTop
            elem = elem.offsetParent
        } while (elem)
    }
    return location >= 0 ? location : 0
}