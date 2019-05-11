// 中间件是一个函数
const {BaseException} = require('../core/base-exception')
const renderException  = async (ctx,next) => {
    try {
        await next()
    } catch (error) {
        if(error instanceof BaseException){
            ctx.body = {
                msg:error.msg,
                errCode:error.errCode,
                request:`${ctx.method} ${ctx.path}`
            }
        }
        ctx.status = error.code
    }
}

module.exports = renderException