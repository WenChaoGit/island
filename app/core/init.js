
const requireDirectory = require('require-directory')

class InitManager {
  static initCore(app){
    InitManager.app = app

  }

  static initLoadRouters(){
    let apiDirectory = `${__dirname}/app/api`
    requireDirectory(module,apiDirectory,{
      visit:whenLoadModule
    })

    function whenLoadModule(obj){
      if(obj instanceof Router){
        InitManager.app.use(obj.routes())
      }
    }
  }
   
}

module.exports = InitManager