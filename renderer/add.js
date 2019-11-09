const { ipcRenderer } = require('electron')
const path = require('path')
document.getElementById('select-music').addEventListener('click', () => {
  ipcRenderer.send('open-music-file')
})

const renderListHTML = (pathes) => {
  const musicList = document.getElementById('musicList')
  const musicItemsHTML = pathes.reduce((html, musicPath) => {
    html += `<li class="list-group-item">${path.basename(musicPath)}</li>`
    return html
  }, '')
  musicList.innerHTML = `<ul class="list-group">${musicItemsHTML}</ul>`
}

ipcRenderer.on('hehe', () => {
  console.log(111)
})
ipcRenderer.on('ping', (event, message) => {
  console.log(message) // Prints 'whoooooooh!'
})