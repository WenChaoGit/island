const requireDirectory = require('require-directory')
const Router = require('koa-router')
const config = require('../config')
class InitManager {
  static initCore(app){
    InitManager.app = app
    InitManager.initLoadRouters()
    InitManager.initConfig()
  }

  static initLoadRouters(){
    let apiDirectory = `${process.cwd()}/app/api`
    requireDirectory(module,apiDirectory,{
      visit:whenLoadModule
    })

    function whenLoadModule(obj){
      if(obj instanceof Router){
        InitManager.app.use(obj.routes())
      }
    }
  }

  static initConfig(){
    global.config = config
  }
   
}

module.exports = InitManager