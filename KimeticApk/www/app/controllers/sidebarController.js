(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('SidebarController', SidebarController);

    SidebarController.$inject = ['processEngine', 'user','$state', '$location','$scope', '$stateParams'];

    function SidebarController(processEngine, user, $state, $location, $scope, $stateParams) {
        var vm = this;

        vm.user = { name: "", pass: "", envi: "", email: "", question:"" };
        vm.isShowMenuFile = false;
        vm.isShowMenuReport = false;
        vm.isShowMenuColaborar = false;
        vm.goReport = goReport; 
        vm.goTask = goTask; 
        vm.goFiles = goFiles;
        vm.goColaboration = goColaboration;
        vm.menuFile = [];
        vm.menuColaboration = [];
        vm.response = {};
        vm.showInfo = false;
        vm.msg = $stateParams.msg;
        vm.goServices = goServices;
        vm.nuDocLect = 'N';
        
        activate();
 
        function goServices(){
        	$state.go('root.main.service',{},{reload:'root.main.service'});
        } 
        
        function goReport(wfp,wfh,name){
        	$state.go('root.main.report', { 'wfp': wfp, 'wfh': wfh, 'name': name },{reload:'root.main.report'});        	
        }
        
        function goTask(filter, serverSide){
        	$state.go('root.main.task', { 'filter': filter, 'serverSide': serverSide},{reload:'root.main.task'});        	
        }        
        
        function goFiles(wfp,wfh,name){
        	$state.go('root.main.files', { 'wfp': wfp, 'wfh': wfh, 'name': name },{reload:'root.main.files'});        	
        }        
        
        function goColaboration(wfp,wfh,name){
        	$state.go('root.main.colaboration', { 'wfp': wfp, 'wfh': wfh, 'name': name },{reload:'root.main.colaboration'});        	
        }
        
        function activate() {
        	$scope.ticketService.resetListError();
			if ($scope.ticketService.isAuthed()){
				loadContext();
			}
        }
        
        function loadContext() {
        	getMenuColaborar();
        	getMenuFile();
        	getMenuReport();
        }
        
        function getMenuColaborar() {
            return processEngine.getMenuColaborar()
            .then(function (respuesta) {
            	if (respuesta!=null){
            		if(respuesta==''){
            			vm.isShowMenuColaborar = false;
            		}else{
                		vm.isShowMenuColaborar = true;
                		vm.menuColaboration = respuesta;    		
            		}           		
            	} 
            });        	
        }
        
        function getMenuFile() {
            return processEngine.getMenuFile()
            .then(function (respuesta) {
            	if (respuesta!=null){
            		if(respuesta==''){
            			vm.isShowMenuFile = false;
            		}else{
                		vm.isShowMenuFile = true;
                		vm.menuFile = respuesta;    		
            		}           		
            	} 
            });        	
        }        
        
        function getMenuReport() {
            return processEngine.getMenuReport()
            .then(function (respuesta) {
            	if (respuesta!=null){
                   	if(respuesta==''){
            			vm.isShowMenuReport = false;
            		}else{
                		vm.isShowMenuReport = true;
                		vm.menuReport = respuesta;    		
            		}            		
            	} 
            });        	
        } 
    }
})();
