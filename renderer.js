const { ipcRenderer } = require('electron')


window.addEventListener('DOMContentLoaded', () => {
    ipcRenderer.send('message', 'hello from render')
    ipcRenderer.on('reply', (e, arg) => {
        document.getElementById('reply').innerHTML = arg
    })
})