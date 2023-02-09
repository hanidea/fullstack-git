const cluster = require('cluster')
const http = require('http')
const os = require('os');

const cpus = os.cpus().length;
//console.log(cpus)

if (cluster.isMaster){
    console.log(`主进程 ${process.pid} 正在运行`);
    for (let index = 0; index<cpus; index++){
        cluster.fork();
    }
}else{
    http.createServer((req,res)=>{
        res.writeHead(200,{'Content-type':'text/html;charset=utf-8'})
        res.write('hello');
        res.end();
    }).listen(8000)

    console.log(`工作进程 ${process.pid} 已经启动`)
}

