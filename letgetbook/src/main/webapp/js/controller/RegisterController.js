'use strict';
   angular.module('mainApp')
   .directive('fileModel', ['$parse', function ($parse) {
	   return {
           restrict: 'A',
           link: function(scope, element, attrs) {
              var model = $parse(attrs.fileModel);
              var modelSetter = model.assign;
              
              element.bind('change', function(){
                 scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                 });
              });
           }
        };
       /*function fn_link(scope, element, attrs) {
           var onChange = $parse(attrs.ngFiles);
           element.on('change', function (event) {
               onChange(scope, { $files: event.target.files });
           });
       };

       return {
           link: fn_link
       };*/
   } ])
   .service('UserService')
   .controller('RegisterController',['UserService', '$location', '$rootScope',function(UserService, $location, $rootScope){
	   var vm = this;
	   
       vm.register = register;
       vm.vendorRegister = vendorRegister;
       vm.sellerRegister = sellerRegister;
       vm.itemRegister = itemRegister;
       vm.sellerAddress = sellerAddress;
       vm.sellerInformation = sellerInformation;
       $rootScope.sellerResponse = [];
       
       function register() {
           vm.dataLoading = true;
           UserService.Create(vm.user)
               .then(function (response) {
                   if (response.success) {
                      // FlashService.Success('Registration successful', true);
                       $location.path('/signin');
                   } else {
                      // FlashService.Error(response.message);
                       vm.dataLoading = false;
                   }
               });
       }
       
       
       function vendorRegister() {
           vm.dataLoading = true;
           UserService.RegisterVendor(vm.vendor)
               .then(function (response) {
                   //if (response) {
            	   $rootScope.sellerResponse = response;
                	   debugger;
                      // FlashService.Success('Registration successful', true);
                       $location.path('/successful');
                   /*} else {
                      // FlashService.Error(response.message);
                       vm.dataLoading = false;
                   }*/
               });
       }
       
       function sellerRegister() {
           vm.dataLoading = true;
           UserService.RegisterSeller(vm.seller)
               .then(function (response) {
                 //  if (response.success) {
                	   
                	   $rootScope.sellerResponse = response;
                	   debugger;
                      // FlashService.Success('Registration successful', true);
                       $location.path('/selleraddress');
                  // } else {
                      // FlashService.Error(response.message);
                       vm.dataLoading = false;
                   //}
               });
       }
       
       function sellerAddress() {
           vm.dataLoading = true;
           UserService.SellerAddress(vm.seller)
               .then(function (response) {
            	   if(response.type = "searchResult"){
               	   	$rootScope.LoginResponse = response;
               	   	debugger;
                         // FlashService.Success('Registration successful', true);
               	   	
                          $location.path('/search');
               	   }else{
               		   $rootScope.LoginResponse = response;
               		   $location.path('/vendor');
               	   }
               });
       }
       
       
       
       function sellerInformation() {
           vm.dataLoading = true;
           UserService.SellerInformation(vm.seller)
               .then(function (response) {
            	   if(response.type = "searchResult"){
               	   	$rootScope.LoginResponse = response;
               	   	debugger;
                         // FlashService.Success('Registration successful', true);
               	   	
                          $location.path('/search');
               	   }else{
               		   $rootScope.LoginResponse = response;
               		   $location.path('/vendor');
               	   }
               });
       }
       function itemRegister() {
           vm.dataLoading = true;
           UserService.RegisterItem(vm.item)
               .then(function (response) {
                  // if (response.success) {
                	   $rootScope.sellerResponse = response;
                	   debugger;
                      // FlashService.Success('Registration successful', true);
                       $location.path('/successful');
                  // } else {
                      // FlashService.Error(response.message);
                       vm.dataLoading = false;
                  // }
               });
       }
       
	   
	   
   }]);
   
   