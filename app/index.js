const { app, BrowserWindow } = require('electron');

function start() {
  const win = new BrowserWindow({
    width: 1200,
    height: 1000
  })

  win.loadURL("http://localhost:3000/")
}

app.on('ready', start);