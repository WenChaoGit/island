
class BaseException extends Error {
    constructor(msg='服务器错误',errCode=1000,code=400){
        super()
        this.msg = msg
        this.errCode = errCode
        this.code = code
    }
}

module.exports ={
    BaseException
}