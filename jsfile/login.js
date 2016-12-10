var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {

  $scope.myBind="";

  $scope.myfunction=function(){
    var un=$scope.username;
    var ps=$scope.password;
    var locals=window.localStorage;
          $http.post('json/login.json',un,ps).success(function(data,headers,config,status){
            if(data.username == un && data.password == ps)
            {

              $http.get('json/products.json').success(function(data,headers,config,status){
                     //console.log(data);
                     console.log("login success..");
                       console.log("product data:" +data);
                       $scope.myWelcome=data;


                   });
                    console.log(data);



                  }

                        });
                      }
                        });
