const { BrowserWindow } = require('electron')

 module.exports =  class AppWindow extends BrowserWindow {
  constructor(config, fileLocation) {
    const bisicCofig = {
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true
      }
    }
    const finalConfig = {...bisicCofig, ...config}
    super(finalConfig)
    this.loadFile(fileLocation)
    this.once('ready-to-show', () => {
      this.show()
    })
  }
}