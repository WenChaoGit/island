const Koa = require('koa')
const Router = require('koa-router')
const init = require('./app/core/init')
const app = new Koa();
const renderException = require('./app/middlewares/exception')
app.use(renderException)
init.initCore(app)
app
  .listen(3000)
