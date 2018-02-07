var app =angular.module('demo',[]);
app.controller('nameCtrl',function($scope){
    //$scope 我们叫做作用域
    $scope.name="张三";
});
app.controller('secondCtrl',function($scope){
    //$scope 我们叫做作用域
    $scope.name="李四";
});
app.controller('timeCtrl',function($scope){
    //$scope 我们叫做作用域
    $scope.date= new Date();
    //console.log($scope);
    // setInterval(function(){
    //     //没有触发脏检查
    //     $scope.date =new Date();
    // },1000);
    setInterval(function(){
        $scope.$apply(function(){
            //触发脏检查
            $scope.date = new Date();
        });
    },1000);

});
app.controller('watchCtrl',function($scope){
    //$scope 我们叫做作用域
    $scope.name="张三";
    $scope.count = 0;
    $scope.$watch('name',function(newValue,oldValue){
            //console.log(newValue,oldValue);
            ++$scope.count;
            if($scope.count>3)
            {
                $scope.name="已经大于3次";
            }
    });
});