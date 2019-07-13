// 添加localStorage
window.localStorage.setItem('name','James');
window.localStorage.setItem('name',JSON.stringify({name:'Rosen'}))
//查看localStorage
window.localStorage.getItem('name');

//删除localStorage
window.localStorage.removeItem('name');
