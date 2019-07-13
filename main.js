// 项目入口

const { app, ipcMain } = require('electron')

const AppWindow = require('./AppWindow')

app.on('ready', () => {

  //主窗口
  const mainWindow = new AppWindow({ }, './renderer/index.html')

  ipcMain.on('add-music-window', () => {
    //添加音乐的窗口
    const addWindow = new AppWindow({
      width: 500,
      height:400,
      parent: mainWindow
    }, './renderer/add.html')
  })
})