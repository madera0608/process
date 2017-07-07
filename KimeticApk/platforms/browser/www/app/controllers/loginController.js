(function () {
    'use strict';

    angular
        .module('myApp')        
        .controller('LoginController', LoginController);        

    LoginController.$inject = ['processEngine', 'user','$state', '$location','$scope', '$stateParams', '$rootScope'];

    function LoginController(processEngine, user, $state, $location, $scope, $stateParams, $rootScope) {
        var vm = this;

        vm.user = { name: "", pass: "", envi: "", email: "", question:"" };
        vm.login = login;
        vm.showChangePass = false;
        vm.loginRecover = loginRecover;
        vm.loginRenew = loginRenew;
        vm.back = back;
        vm.forgot = forgot;
        vm.forgot_step1 = forgot_step1;
        vm.forgot_step2 = forgot_step2;
        vm.forgot_send = forgot_send;
        vm.environments = [];
        vm.showInfo = false;
        vm.selectedOption = null;
        vm.msg = $stateParams.msg;
        activate(); 
        
        function login() {
        	vm.msg = "";
            $scope.ticketService.delStatusCode();
            $scope.ticketService.resetListError();         	
			if (vm.user.envi!=""){
				vm.selectedOption.name = vm.user.envi;
			}
			$scope.documentService.delCtxOpenDoc();
            processEngine.postSession(vm)
                .then(function (data) {
                	if (!$scope.ticketService.isShowError()){
                        user.name = vm.user.name;
                        user.pass = vm.user.pass;
                        user.envi = vm.user.envi;
                        vm.isLogged = true;                       
                        $state.go('root.main');                        	
                	}else{              		
                		if ($scope.ticketService.getStatusCode() == "15140") {   
                            user.name = vm.user.name;
                            user.pass = vm.user.pass;
                            user.envi = vm.selectedOption.name; 
                            user.sc = data.sessionCaida;
                            vm.isLogged = true; 
                            $scope.ticketService.delStatusCode();
                            $scope.ticketService.resetListError();  
                            // Preguntar al usuario si elimina o recupera la session
                            $state.go('root.login.recuperate');
                        }else if ($scope.ticketService.getStatusCode() == "15300") {
                        	
                        }else if ($scope.ticketService.getStatusCode() == "15330") {
                        	
                        } 
                	}
                });
        }
        
        function loginRecover() {
            processEngine.getSession(user)
                .then(function (data) {
                	if (data.statusCode == "0"){
                        vm.response = data;
                        user.name = vm.user.name;
                        user.pass = vm.user.pass;                        
                        
                        $state.go('root.main');                		
                	}
                    return vm.response;
                })
        }

        function loginRenew() {
            processEngine.putSession(user)
                .then(function (data) {
                	if (data.statusCode == "0"){
                        vm.response = data
                        user.name = vm.user.name;
                        user.pass = vm.user.pass;
                        $state.go('root.main');
                	}                    
                    return vm.response;
                })
        }
        
        function back() {
        	 $state.go('root.login',{},{reload:'root.login'});
        }
        
        function activate() {
        	$scope.ticketService.resetListError();
            if (!!$state.params.environmentName) {
               verifyEnvironment();
            }

    		if (($state.current.name=="root.login") || ($state.current.name=="root.login.environment") || ($state.current.name=="root.login.forgot")){
    			$scope.ticketService.delTicket(); 
    			$scope.ticketService.resetListError();
    			if (vm.user.envi==""){    				
    				getEnvironments();
    			}									
			} else if ($scope.ticketService.isAuthed()){
        	    /*if($state.current.name=="root.main.profile"){
        		}else if($state.current.name=="root.main.changepass"){
        		}else if($state.current.name=="root.main.changepassapro"){
        		}else if($state.current.name=="root.main.changesecquest"){
        		}else if ($state.current.name!="root.main"){*/
        		
        		/*if (($state.current.name!="root.main")){
        			$scope.ticketService.delTicket();
					$state.go('root.login');
				}*/
				if ($state.current.name=="root.login.forgotsend"){
        			forgot_step2();
        		}            	    
        	}
        }

        function verifyEnvironment() {
            /*processEngine.verifyEnvironment($state.params.environmentName)
                .then(function (isVerified) {
                    if (isVerified) {
                        vm.user.envi = $state.params.environmentName;
                    }
                });*/
        	vm.user.envi = $state.params.environmentName;
        }
        
        function getEnvironments() {        	
            processEngine.getEnvironments()
                .then(function(data) {
            		if (!$scope.ticketService.isShowError()){
                        vm.environments = data;
                        if (vm.environments.length==1){//validar si es un solo ambiente
                        	vm.user.envi = vm.environments[0].name;
                        }
                        return vm.environments;
            		}
                });
        }
        
        function setEnvironment(environment) {
        	user.server = environment;
        }        
        
        function forgot() {
        	$state.go('root.login.forgot',{},{reload:'root.login.forgot'});
        }
        
        function forgot_step1() {
        	vm.user.pass = "";
        	$scope.ticketService.resetListError(); 
            processEngine.postSessionRc(vm)
            .then(function (data) {
            	if (!$scope.ticketService.isShowError()){
                    user.name = vm.user.name;
                    user.envi = vm.selectedOption.name; 
                    user.email = vm.user.email;            		
                    $state.go('root.login.forgotsend',{},{reload:'root.login.forgotsend'});                        	
                    vm.response = data;
            	}else{ 
					if ($scope.ticketService.getStatusCode() == "15140") {
	                    user.name = vm.user.name;
	                    user.envi = vm.selectedOption.name; 
	                    user.email = vm.user.email; 						
						$scope.ticketService.delStatusCode();	
						$state.go('root.login.forgotsend',{},{reload:'root.login.forgotsend'});
					}else if ($scope.ticketService.getStatusCode() == "15300") {
                    	
                    }else if ($scope.ticketService.getStatusCode() == "15330") {
                    	
                    }               		
            	}
            });
        }
            
        function forgot_step2() {
        	vm.user.name = user.name;
        	vm.user.envi = user.envi;
        	vm.user.email = user.email;  
        	$scope.ticketService.resetListError(); 
            processEngine.getProfile()
            .then(function (data) {
            	if (!$scope.ticketService.isShowError()){
                	vm.user.question = data.pregunta;                	
            	}
            });         
        }
        
        function forgot_send() {
            processEngine.recoverPass(vm)
            .then(function (data) {
            	if (!$scope.ticketService.isShowError()){
            		vm.showInfo = true;
                	vm.messageInfo = "SendPasswordEmail";
            	}
            });            
        }        
        
        function profile(){
        	$state.go('root.main.profile',{},{reload:'root.main.profile'});
        }
    }    
    
})();
