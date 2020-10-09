
//__dirname is the location of where your html is running
async function popOut(){
    await window.open('file://'+__dirname+'/PCInfo.html');
}

async function f2popOut(){    //Failed
  await window.open('file://'+__dirname+'/form.html');
}

const { shell } = require('electron');
async function formpopOut(){
  
  document.getElementById('loading').hidden = false;
    setTimeout(function(){document.getElementById('loading').hidden = true;}, 2000);
  await shell.openExternal('https://eg9guest.github.io/');
  
}

const { exec } = require('child_process');

//Child_Process Exec Function
async function installexec(){

    document.getElementById('loading').hidden = false;
    setTimeout(function(){document.getElementById('loading').hidden = true;}, 2000);
    
    let dir = __dirname.replace(/\\/g, '//');
    dir = dir.replace('//html', '');
   //Run exec function
    exec(dir +'//script//install.bat', (err, stdout, stderr) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(stdout);
      });

}

async function benchexec(){

    document.getElementById('loading').hidden = false;
    setTimeout(function(){document.getElementById('loading').hidden = true;}, 2000);
    
    let dir = __dirname.replace(/\\/g, '//');
    dir = dir.replace('//html', '');
   //Run exec function
    exec(dir +'//script//benchmark.bat', (err, stdout, stderr) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(stdout);
      });

}

async function qcexec(){

  document.getElementById('loading').hidden = false;
  setTimeout(function(){document.getElementById('loading').hidden = true;}, 2000);
  
  let dir = __dirname.replace(/\\/g, '//');
  dir = dir.replace('//html', '');
 //Run exec function
  exec(dir +'//script//qc.bat', (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(stdout);
    });

}

async function setwallpaper(){

  document.getElementById('loading').hidden = false;
  setTimeout(function(){document.getElementById('loading').hidden = true;}, 2000);
  
  let dir = __dirname.replace(/\\/g, '//');
  
 //Run exec function
  exec(dir +'//script//setwallpaper.bat', (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(stdout);
    });

}

