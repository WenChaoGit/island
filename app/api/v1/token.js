const Router = require('koa-router')
const {TokenValidator} = require('../../validators')
const router = new Router({
    prefix:'/v1/token'
})

router.post('/', async(ctx,next)=>{
    const v = new TokenValidator().validate(ctx)
})

module.exports = router