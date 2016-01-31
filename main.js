const electron = require('electron');
const app = electron.app;
const Menu = electron.Menu;
const Tray = electron.Tray;
const spawn = require('child_process').spawn;

const capture = function() {
  spawn('screencapture', ['-i', 'screencapture.png'])
};

var appIcon = null;

app.on('ready', function(){
  appIcon = new Tray('./images/camera.png');
  var contextMenu = Menu.buildFromTemplate([
    { label: 'Capture', click: function() { capture(); } },
    { type: 'separator' },
    { label: 'Quit', accelerator: 'Command+Q', click: function() { app.quit(); } }
  ]);
  appIcon.setToolTip('Cammy');
  appIcon.setContextMenu(contextMenu);
});
