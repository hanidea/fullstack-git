// let v = 0;
// function a(v){
//     const v2 = 100
//     v += v2;
// }

// function b(){
//     a(v);
// }

// b();
const express = require('express')
const app = express()
//command + shift + p 打开auto attach
app.get('/', (req, res) => {
    // let a = 123;
    // function b(){
    //     while(a< 10**9){
    //         a +=1;
    //     }
    // }
    // // function c(){
    // //     b();
    // // }
    // // c();
    // b();
    res.send('Hello World!')
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))