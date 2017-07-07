(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('HeaderDerController', HeaderDerController);

    HeaderDerController.$inject = ['processEngine', 'user','$state', '$location','$scope', '$stateParams', '$modal', '$rootScope', '$window'];

    function HeaderDerController(processEngine, user, $state, $location, $scope, $stateParams, $modal, $rootScope, $window) {
        var vm = this;

        vm.user = { name: "", pass: "", envi: "", email: "", question:"" };
        vm.isShowBarEmails = false;        
        vm.barEmails = [];
        vm.agents = [];
        vm.profileNombre = "";
        vm.logout = logout;
        vm.profile = profile;
        vm.showInfo = false;
        vm.msg = $stateParams.msg;
        vm.openModal = openModal;
        vm.openLink = openLink;   
        vm.nbConversacionOpen = '';
        vm.nuDocOpen = '';
        vm.goOpenDocument = goOpenDocument;
        vm.openModal = openModal;        
        
        activate();

        function logout() {
        	if ($scope.ticketService.isAuthed()){        		
                processEngine.deleteSession()
                .then(function (data) {
                	if (data!=null){
            			$scope.ticketService.delTicket();
            			$scope.ticketService.delStatusCode();
                        $state.go('root.login');
            		}               	
                    vm.response = data;                    
                    return vm.response;
                });
        	}
        }       
        
        function activate() {
			if ($scope.ticketService.isAuthed()){
				loadContext();
			}
			if ($scope.documentService.isOpenDoc()){
				var arrayDoc = $scope.documentService.getCtxOpenDoc();
		        vm.nbConversacionOpen = arrayDoc[4];
		        vm.nuDocOpen = arrayDoc[0];
			}			
        }
 
        function loadContext() {
        	getEmails();
        	getAgentsGenerals();
        	loadProfile();
        } 
        
        function getEmails() {
        	return processEngine.getEmails()
        	.then(function (respuesta) {
        		if (respuesta!=null){
                   	if(respuesta==''){
            			vm.isShowBarEmails = false;
            		}else{
                		vm.isShowBarEmails = true;
                		vm.barEmails = respuesta;    		
            		}        			
        		}
            });
        }        
        
        function getAgentsGenerals() {
        	processEngine.getAgentsGenerals()
        	.then(function (data) {
        		if (data!=null){
        			vm.agents = data;
        		}
            });
        } 
        
        function loadProfile() {
            var prof = processEngine.getProfile()
            .then(function (data) {
            	if (data!=null){
                	vm.profileNombre = data.nombre;
                	$rootScope.nbAmbiente = data.ambiente;
	        		processEngine.loadEnvironment($rootScope.nbAmbiente)
	                .then(function(data) {
	                	if (data!=null){
	                		$scope.documentService.saveCtxAmb(angular.lowercase(data.matriz.formatoFecha),data.matriz.FormatoMiles,data.matriz.FormatoDecimal,data.matriz.idioma);
	                		if (data.matriz.idioma=='2'){
	                			$.fn.datepicker.defaults.language = 'es';
	                		}
	                		$window.formatDate = angular.lowercase(data.matriz.formatoFecha);
	                	}
	                });	                	
            	}
            });
        } 
        
        function profile(){
        	$state.go('root.main.profile',{},{reload:'root.main.profile'});
        }
        
        function openLink(link){
        	$window.open(link, '_blank');
        }
       
        function openModal(){
	    		 var arrayDoc = $scope.documentService.getCtxOpenDoc();
	    		 if (!arrayDoc[3]){//no read
	    			 //open modal
	    	            var modalInstance = $modal.open({
	    	                templateUrl: 'app/views/templates/modalDocument.html',
	    	                keyboard: false,
	    	                backdrop: 'static',                
	    	                controller: ModalInstController,
	    	                resolve: {
	    	                }
	    	              });

	    	              modalInstance.result.then(function(option) {
	    		               if (option=='1'){
	    		                   $scope.documentService.saveClose('')
	    		                   .then(function (data) {
	    		                	   logout();
	    		                   });
	    		               }else{
	    		                   $scope.documentService.close()
	    		                   .then(function (data) {
	    		                	   logout();
	    		                   });	            	   	            	  
	    		               }	               
	    	              }, function() {
	    	                
	    	              });
	    		 }else{
	    			 logout();
	    		 }
        }  
        
        function goOpenDocument(){
        	var arrayDoc = $scope.documentService.getCtxOpenDoc();
        	$state.go('root.main.documentopen', { 'nuDoc': arrayDoc[0], 'nuInst': arrayDoc[1], 'wfa': arrayDoc[2] },{reload:'root.main.documentopen'});        	
        }   
      
    }
})();