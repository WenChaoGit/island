// 中间件是一个函数
const {BaseException} = require('../core/base-exception')
const renderException  = async (ctx,next) => {
    try {
        await next()
    } catch (error) {

        const isBaseException = error instanceof BaseException
        const isDev = global.config.environment === 'dev'
        
        if(isDev && !isBaseException){
            throw error
        }
        if(isBaseException){
            ctx.body = {
                msg:error.msg,
                errCode:error.errCode,
                request:`${ctx.method} ${ctx.path}`
            }
            ctx.status = error.code
        }else{
            ctx.body = {
                msg: 'we made a mistake O(∩_∩)O~~',
                error_code: 999,
                request:`${ctx.method} ${ctx.path}`
            }
            ctx.status = 500
        }
        // ctx.status = error.code
    }
}

module.exports = renderException