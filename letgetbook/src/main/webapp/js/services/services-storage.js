
    'use strict';
 
    angular
        .module('mainApp')
        .factory('UserService', UserService);
 
    UserService.$inject = ['$rootScope','$timeout', '$filter', '$q','$http','$location'];
    function UserService($rootScope,$timeout, $filter, $q,$http,$location) {
 
        var service = {};
 
        service.GetAll = GetAll;
        service.GetRegisterVendorById = GetById;
        service.GetByUsername = GetByUsername;
        service.Create = Create;
        service.RegisterVendor = RegisterVendor;
        service.RegisterSeller = RegisterSeller;
        service.LogInUser = LogInUser;
        service.Update = Update;
        service.Delete = Delete;
        service.RegisterItem = RegisterItem;
        service.DisplayItems = DisplayItems;
        service.SearchResult = SearchResult;
        service.SellerAddress = SellerAddress;
        service.SellerInformation = SellerInformation;
 
        return service;
 
        function GetAll() {
            var deferred = $q.defer();
            deferred.resolve(getUsers());
            return deferred.promise;
        }
 
        function GetById(id) {
            var deferred = $q.defer();
            var filtered = $filter('filter')(getUsers(), { id: id });
            var user = filtered.length ? filtered[0] : null;
            deferred.resolve(user);
            return deferred.promise;
        }
 
        function GetByUsername(username) {
            var deferred = $q.defer();
            var filtered = $filter('filter')(getUsers(), { username: username });
            var user = filtered.length ? filtered[0] : null;
            deferred.resolve(user);
            return deferred.promise;
        }
 
        function Create(user) {
            var deferred = $q.defer();
 
            // simulate api call with $timeout
            $timeout(function () {
                /*GetByUsername(user.username)
                    .then(function (duplicateUser) {
                        if (duplicateUser !== null) {
                            deferred.resolve({ success: false, message: 'Username "' + user.username + '" is already taken' });
                        } else */{
                         //   var users = getUsers();
                        	  // var users = user.username;
                            // assign id
                           // var lastUser = users[users.length - 1] || { id: 0 };
                           // user.id = lastUser.id + 1;
                        	
                        	{
                        		debugger;
                        		var method ="";
                            	var url ="rest/countries/users";
                            	method ="POST";
                            	
                            	
                                $http({
                                	method:method,
                                	url:url,
                                	data: angular.toJson(user),
                                	headers : {  
                                        'Content-Type' : 'application/json'  
                                    } 
                                }).then(handleSuccess, handleError('Error creating user'));
                        		
                        		
                                //debugger;
                            //deferred.resolve({ success: true });
                        }
                        }//});
            }, 1000);
 
            return deferred.promise;
        }
        
        function RegisterVendor(vendor) {
            var deferred = $q.defer();
 
            // simulate api call with $timeout
          //  $timeout(
            		//function () {
                          		debugger;
                        		var method ="";
                            	var url ="rest/registration/vendorRegistration";
                            	method ="POST";
                            	
                            	
                          return      $http({
                                	method:method,
                                	url:url,
                                	data: angular.toJson(vendor),
                                	headers : {  
                                        'Content-Type' : 'application/json'  
                                    } 
                                }).then(handleSuccess, handleError('Error creating user'));
                        		
                        		
                                debugger;
                          //  deferred.resolve(handleSuccess);
                        
                       
           // }
            		//, 1000);
 
         //   return deferred.promise;
        }
        
        function RegisterSeller(seller) {
 
            // simulate api call with $timeout
          // $timeout(function () {
                          		debugger;
                        		var method ="";
                            	var url ="rest/registration/sellerRegistration";
                            	method ="POST";
                            	
                            	
                        return        $http({
                                	method:method,
                                	url:url,
                                	data: angular.toJson(seller),
                                	headers : {  
                                        'Content-Type' : 'application/json'  
                                    } 
                                }).then(handleSuccess, handleError('Error creating user'));
                        		
                    //    		var successful = handleSuccess;
                                debugger;
                   //             deferred.resolve(successful);
                            
                           
           //     }, 1000);
     
            //    return deferred.promise;
 
            
        }
        
        function SellerAddress(seller) {
        	 
       
                          		debugger;
                        		var method ="";
                            	var url ="rest/registration/sellerRegistration";
                            	method ="POST";
                            	
                            	
                        return        $http({
                                	method:method,
                                	url:url,
                                	data: angular.toJson(seller),
                                	headers : {  
                                        'Content-Type' : 'application/json'  
                                    } 
                                }).then(handleSuccess, handleError('Error creating user'));
                   
 
            
        }
        
        function SellerInformation(seller) {
       	 
            
      		debugger;
    		var method ="";
        	var url ="rest/registration/sellerRegistration";
        	method ="POST";
        	
        	
    return        $http({
            	method:method,
            	url:url,
            	data: angular.toJson(seller),
            	headers : {  
                    'Content-Type' : 'application/json'  
                } 
            }).then(handleSuccess, handleError('Error creating user'));



}
 
        function RegisterItem(item) {
        	 
            // simulate api call with $timeout
    //      return  $timeout(function () {
                          		debugger;
                        		var method ="";
                            	var url ="rest/registration/itemRegistration";
                            	method ="POST";
                            	
                            	var fd = new FormData();
                                fd.append('file', item.myFile);
                                delete item.myFile;
                                fd.append("item",angular.toJson(item));
                            	/*var formdata = new FormData();
                                $rootScope.getTheFiles = function ($files) {
                                    angular.forEach($files, function (value, key) {
                                        formdata.append(key, value);
                                    });
                                };
                                formdata.append("item",angular.toJson(item));*/
                            	
                       return       $http({
                                	method:method,
                                	url:url,
                                	data:fd,
                                	transformRequest: angular.identity,
                                    headers: {'Content-Type': undefined}
                                }).then(handleSuccessBack, handleError('Error creating user'));
                        		
                        		
                                debugger;
                //                deferred.resolve(handleSuccessBack);
                            
                           
           //     }, 1000);
     
          //      return deferred.promise;
            
        }
        
        
        function LogInUser(login) {
            var deferred = $q.defer();
 
                          		debugger;
                        		var method ="";
                            	var url ="rest/login/loginUser";
                            	method ="POST";
                            	
                            	
                          return      $http({
                                	method:method,
                                	url:url,
                                	data: angular.toJson(login),
                                	headers : {  
                                        'Content-Type' : 'application/json'  
                                    } 
                                	
                                }).then(handleSuccess, handleError('Error creating user'));
                        		
                        		
                                debugger;
         
        }
        
        function SearchResult(search){          
        	  var deferred = $q.defer();
		debugger;
		var method = "";
		var url = "rest/search/service";
		method = "POST";

		return $http({
			method : method,
			url : url,
			data : angular.toJson(search),
			headers : {
				'Content-Type' : 'application/json'
			}

		}).then(handleSuccess, handleError('Error creating user'));

		debugger;
        	
        	
        }
        
        function DisplayItems(){
        	 var deferred = $q.defer();
        	 
       		debugger;
     		var method ="";
         	var url ="rest/search/display";
         	method ="GET";
         	
         	
       var promise = $http({
             	method:method,
             	url:url,
             	 
             	
             });
             promise.success(function(data,status){
            	 return data;
             });
             return promise;
            // .then(handleSuccess, handleError('Error creating user'));
     		
     		
             debugger;
        }
        
        
        function Update(user) {
            var deferred = $q.defer();
 
            var users = getUsers();
            for (var i = 0; i < users.length; i++) {
                if (users[i].id === user.id) {
                    users[i] = user;
                    break;
                }
            }
            setUsers(users);
            deferred.resolve();
 
            return deferred.promise;
        }
 
        function Delete(id) {
            var deferred = $q.defer();
 
            var users = getUsers();
            for (var i = 0; i < users.length; i++) {
                var user = users[i];
                if (user.id === id) {
                    users.splice(i, 1);
                    break;
                }
            }
            setUsers(users);
            deferred.resolve();
 
            return deferred.promise;
        }
 
        // private functions
 
        function getUsers() {
            if(!localStorage.users){
                localStorage.users = JSON.stringify([]);
            }
 
            return JSON.parse(localStorage.users);
        }
 
        function setUsers(users) {
            localStorage.users = JSON.stringify(users);
        }
        
        function handleSuccess(res) {
            return res.data;
        }
        function handleSuccessBack(res) {
            return res;
        }
 
        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }
    }
