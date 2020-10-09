const si = require('systeminformation');
const Shell = require('node-powershell');
const { exec } = require('child_process');


//The main Function of Getting PC info with 'systeminformation' package
async function returnCPU(){
    
    document.getElementById('loading').hidden = false;
    const system = await si.system();
    document.getElementById('system').innerHTML = `${system.manufacturer} ${system.model} ${system.version} (S/N: ${system.serial})`;
    const result = await si.cpu();
    document.getElementById("cpu").innerHTML = result.manufacturer + ' ' + result.brand+ ' ' + result.speed + ' GHz';
    const memory = (await si.mem()).total *0.000000001;
    document.getElementById('memory').innerHTML = `${memory.toFixed(2)} GB`
    const bios = await si.bios();
    document.getElementById('bios').innerHTML = bios.vendor +'  ,  '+ bios.version + '('+bios.releaseDate+')';
    const motherboard = await si.baseboard();
    document.getElementById('motherboard').innerHTML = `${motherboard.manufacturer} ${motherboard.model} (S/N: ${motherboard.serial})`;
    const graphics = (await si.graphics()).controllers;
    let allgraphics;
    for(j=0;j<graphics.length;j++){
        allgraphics = allgraphics + `<br>${j+1}) ${graphics[j].vendor} ${graphics[j].model} (VRAM: ${graphics[j].vram} MB)`;
    }
    document.getElementById('graphics').innerHTML = allgraphics;
    const battery = await si.battery();
    document.getElementById('batterypresence').innerHTML = battery.hasbattery;
    document.getElementById('ischarging').innerHTML = battery.ischarging;
    document.getElementById('percent').innerHTML = battery.percent + ' %';
    const partition = await si.blockDevices();
    let allpartition;
    for(i=0;i<partition.length;i++){
        allpartition = allpartition + `<br> ${partition[i].name} (${(partition[i].size *0.000000001).toFixed(2)} GB ${partition[i].physical})`;
    }
    document.getElementById('partition').innerHTML = allpartition;
    
    document.getElementById('loading').hidden = true;
    document.getElementById('infodiv').hidden = false;
    if(memory<4) alert("Attention!\n\nThe Memory of this PC is under standard (4GB)\n\n#Suggestion: Please try to manually change the Memory.");
}

//Run Powershell command by using 'node-powershell' package
async function runpowershell(){

    document.getElementById('loading').hidden = false;
    setTimeout(function(){document.getElementById('loading').hidden = true;}, 2000);
    
    //Powershell settings
    const ps = new Shell({
        executionPolicy: 'Bypass', 
        noProfile: true
    });

    //Command to put here 
    await ps.addCommand('slmgr /xpr');

    //Run the powershell
    ps.invoke()
    .then(output => {
        console.log(output);
    })

    
}

 
//Child_Process Exec Function
async function runexec(){

    document.getElementById('loading').hidden = false;
    setTimeout(function(){document.getElementById('loading').hidden = true;}, 2000);
    
    let dir = __dirname.replace(/\\/g, '//');
    dir = dir.replace('//html', '');
   //Run exec function
    exec(dir +'//script//info.bat', (err, stdout, stderr) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(stdout);
      });

}