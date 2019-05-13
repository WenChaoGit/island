const Router = require('koa-router')
const router = new Router()
const {ParameterException}  = require('../../core/base-exception')

router.get('/v1/classic/latest',(ctx,next)=>{
  // if(true){
  //   throw new ParameterException()
  // }
  ctx.body = {key:'classic'}
})
module.exports = router