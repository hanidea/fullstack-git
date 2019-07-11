new Promise((resolve,reject)=>{
    //异步函数
    $.ajax({
        url:'http://happymmall.com/user/get_user_info.do',
        type: 'post',
        success(res){
            resolve(res);
        },
        error(err){
            reject(err); 
        }
    });
}).then(()=>{

},()=>{

});