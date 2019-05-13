const {LinValidator} = require('../core/lin-validator-v2')
const {loginType} = require('../lib/enum')

class TokenValidator extends LinValidator {
    constructor() {
        super()
        this.account = [
            new Rule('isLength', '不符合账号规则', { min: 3, max: 32 })
        ]
        this.secret = [
            new Rule('isOptional'),
            new Rule('isLength','至少6个字符',{min:6,max:128})
        ]
        
    }

    validatorLoginType(values){
        if(!values.body.type) throw new Error('type是必须参数')
        if(!loginType.isInLoginType(values.body.type)) throw new Error('type参数不合法')
    }
}

module.exports = TokenValidator