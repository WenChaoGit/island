const Koa = require('koa')
const Router = require('koa-router')
const init = require('./app/core/init')
const app = new Koa()
const router = new Router()

init.initCore(app)

app
  .use(router.routes())
  .listen(3000)
