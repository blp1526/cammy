const electron = require('electron');
const app      = electron.app;
const Menu     = electron.Menu;
const Tray     = electron.Tray;
const spawn    = require('child_process').spawn;

const capture = function() {
  const timestamp = parseInt((new Date) / 1000);
  const dir       = `${app.getPath('home')}/Desktop/`;
  const filePath  = `${dir}${timestamp}.png`;
  spawn('screencapture', ['-i', filePath]);
};

var appIcon = null;

app.on('ready', function(){
  appIcon = new Tray(`${__dirname}/images/tray_icon.png`);
  var contextMenu = Menu.buildFromTemplate([
    { label: 'Capture', click: function() { capture(); } },
    { type: 'separator' },
    { label: 'Quit', accelerator: 'Command+Q', click: function() { app.quit(); } }
  ]);
  appIcon.setToolTip('Cammy');
  appIcon.setContextMenu(contextMenu);
});
