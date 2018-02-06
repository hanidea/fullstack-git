var app =angular.module('demo',[]);
app.value('realname','James');
//app.value('realname','Jenny');//是可以改变值的
app.constant('http','www.baidu.com');
app.factory('Data',function(){
    return{
        msg:'很好',
        setMsg:function(){
            this.msg='很坏';
        }
    };
});
app.service('User',function(){
    this.firstname="上官";
    this.lastname="飞燕";
    this.getName=function(){
        return this.firstname+this.lastname;
    }
})
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
app.controller('MyCtrl',function($scope,realname,http,Data){
    $scope.msg="angular";
    $scope.realname=realname;
    $scope.http=http;
    $scope.Data=Data;
    Data.setMsg();
 });
// app.controller('NextCtrl',function($scope){
//             $scope.msg="hello";
//          });
