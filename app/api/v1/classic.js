const Router = require('koa-router')
const router = new Router()
const {BaseException}  = require('../../core/base-exception')

router.get('/v1/classic/latest',(ctx,next)=>{
  if(true){
    throw new BaseException()
  }
  ctx.body = {key:'classic'}
})
module.exports = router