const Koa = require('koa')
const init = require('./app/core/init')
const parser = require('koa-bodyparser')
const app = new Koa();
const renderException = require('./app/middlewares/exception')
app.use(renderException)
app.use(parser())
init.initCore(app)
app
  .listen(3000)
