var app =angular.module('demo',[]);
app.controller('AddressCtrl',function($scope){
    $scope.list=[{id:1,address:'莲花小区14'},
    {id:2,address:'莲花小区15'},{id:3,address:'莲花小区16'},
    {id:4,address:'莲花小区17'},];
})
app.factory('Data',function(){
    return{
        msg:'我来自factory',
        shopcart:['1','2']
    }
})
app.controller('FCtrl',function($scope,Data){
    $scope.data=Data;
})
app.controller('SCtrl',function($scope,Data){
    $scope.data=Data;
})
// app.value('realname','James');
// //app.value('realname','Jenny');//是可以改变值的
// app.constant('http','www.baidu.com');
// app.factory('Data',function(){
//     return{
//         msg:'很好',
//         setMsg:function(){
//             this.msg='很坏';
//         }
//     };
// });
// app.service('User',function(){
//     this.firstname="上官";
//     this.lastname="飞燕";
//     this.getName=function(){
//         return this.firstname+this.lastname;
//     }
// })
// app.controller('MyCtrl',function($scope){
//            $scope.msg="angular";
//            $scope.user={name:'',pwd:''};
//            $scope.errormsg="";
//            $scope.login=function()
//            {
//                //console.log($scope.user);
//                if($scope.user.name=="admin" && $scope.user.pwd=="123"){
//                     alert("登录成功");
//                }else{
//                    $scope.errormsg="用户名或密码错误";
//                }
//            }
//            $scope.reverse=function()
//            {
//                return $scope.msg.split("").reverse().join("");
//            };
//         });
// app.controller('MyCtrl',function($scope,realname,http,Data){
//     $scope.msg="angular";
//     $scope.realname=realname;
//     $scope.http=http;
//     $scope.Data=Data;
//     Data.setMsg();
//  });
// app.controller('NextCtrl',function($scope){
//             $scope.msg="hello";
//          });

