// 项目入口

const { app, ipcMain, dialog } = require('electron')

const AppWindow = require('./AppWindow')

app.on('ready', () => {

  //主窗口
  const mainWindow = new AppWindow({ }, './renderer/index.html')
  mainWindow.webContents.openDevTools({mode:'left'})

  ipcMain.on('add-music-window', () => {
    //添加音乐的窗口
    const addWindow = new AppWindow({
      width: 500,
      height:400,
      parent: mainWindow
    }, './renderer/add.html')
    mainWindow.webContents.send('ping', 'whoooooooh!')
  })

  ipcMain.on('open-music-file', (event) => {
    dialog.showOpenDialog({
      properties: ['openFile', 'multiSelections'],
      filters: [{'name': 'Music', extensions: ['mp3']}]
    }, (files) => {
      if(files) {
        console.log(typeof event.sender.send)
        event.sender.send('hehe')
      }
    })
  })
})