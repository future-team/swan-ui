import Logger from 'pmlogger'

let opt = {}
opt.id = '84344732'
opt.url = 'http://future.sankuai.com/monitor/logstore/log/'
opt.repeat = 1
opt.combo = true
opt.delay = 1000
let pmlogger = null

if(!pmlogger){
    pmlogger = new Logger(opt)
}

export default class PmLogger{
    constructor(msg){
        try{
            pmlogger.info({
                msg: msg,
                type: 8
            })
        }catch(err){
            pmlogger.error({
                msg: err.toString(),
                type: 2
            })
        }
    }
}