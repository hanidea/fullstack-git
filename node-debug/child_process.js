const { exec, spawn } = require('child_process');

// exec('cat a.js',(error, stdout, stderr) => {
//     //console.log(error)
//     if(error){
//         console.log('报错了');
//         return
//     }
//
//     console.log(`stderr: ${stderr}`);
//     console.log(`stdout: ${stdout}`);
// })

const ls = spawn('ls',['-a'],{encoding:'utf8'})
ls.stdout.on('data',(data)=>{
    console.log(`stdout:${data}`);
})
ls.stderr.on('data',(data)=>{
    console.log(`stderr:${data}`);
})
ls.on('close',(code)=>{
    console.log(`close:${code}`);
})
