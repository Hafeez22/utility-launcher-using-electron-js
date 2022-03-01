const electron  = require('electron');
const url = require('url');
const path = require('path');
var child = require('child_process').execFile;
var PathPaint = "C:\\WINDOWS\\system32\\mspaint.exe";
var PathWordPad = "C:\\Program Files\\Windows NT\\Accessories\\wordpad.exe"
var PathNotePad = "C:\\WINDOWS\\system32\\notepad.exe"
const {app, BrowserWindow, Menu } = require('electron');

let mainWindow;
app.on('ready', function(){
    mainWindow = new BrowserWindow({});
    mainWindow.loadURL(url.format({
        pathname : path.join(__dirname, 'main.html'),
        protocol : 'file',
        slashes: true
    }));
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    Menu.setApplicationMenu(mainMenu);
});

const mainMenuTemplate = [
    {
        label : 'File',
        submenu :[
            {
                label : 'Paint',
                click(){
                    child(PathPaint , function(err ,data)  {
                        if(err){
                            console.error(err);
                            return;
                        }
                        console.log(data.toString());
                    });
                }
            },
            {
                label : 'NotePad',
                click(){
                    child(PathNotePad, function(err, data){
                        if(err){
                            console.error(err);
                            return;
                        }
                        console.log(data.toString());
                    });
                }
            },
            {
                label : 'WordPad',
                click(){
                    child(PathWordPad , function(err ,data){
                        if(err){
                            console.error(err);
                            return;
                        }
                        console.log(data.toString());
                    });
                }
            },
            {
                label : 'Quit',
                click(){
                    app.quit();
                }
            }
        ]
    }
];