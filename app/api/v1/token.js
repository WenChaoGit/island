const Router = require('koa-router')
const TokenValidator = require('../../validators/TokenValidator')
const router = new Router({
    prefix:'/v1/token'
})

router.post('/', async(ctx)=>{
    console.log(ctx.request.body)
    const v = await new TokenValidator().validate(ctx)
    
})

module.exports = router