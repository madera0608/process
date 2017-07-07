(function () {
    'use strict';

    angular
        .module('myApp')
        .config(uiRouteProviders);

    function uiRouteProviders($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
        .state('root', {
            abstract: true,
            url: '/',
            views: {
                '': {
                	templateUrl: 'app/views/dashboard/main.html'
                }
            }
        })
        .state('root.main', {
            url: 'main',
            views: {
                'headerIzq@root': {
                	templateUrl: 'app/views/assets/headerIzq.html',
                	controller: 'HeaderIzqController',
                    controllerAs: 'vm'
                },
                'headerDer@root': {
                	templateUrl: 'app/views/assets/headerDer.html',
                	controller: 'HeaderDerController',
                    controllerAs: 'vm'
                },                
                'sideBar@root': {
                	templateUrl: 'app/views/assets/sidebar.html',
                	controller: 'SidebarController',
                    controllerAs: 'vm'
                },
                'container@root':{
                    templateUrl: 'app/views/tasks.html',
                    controller: 'TasksController',
                    controllerAs: 'vm'
                }
            }
        })
        .state('root.main.task', {        	
            views: {
                'container@root':{
                    templateUrl: 'app/views/tasks.html',                    
                    controller: 'TasksController',
                    controllerAs: 'vm'
                }
            },
            params: {'filter': ''}
        })         
        .state('root.main.report', {        	
            views: {
                'container@root':{
                    templateUrl: 'app/views/report/index.html',                    
                    controller: 'ReportController',
                    controllerAs: 'vm'
                }
            },
            params: {'wfp': '', 'wfh': '', 'name': '', 'from':'', 'order':'' }
        })   
        .state('root.main.files', {        	
            views: {
                'container@root':{
                    templateUrl: 'app/views/files/index.html',                    
                    controller: 'ReportController',
                    controllerAs: 'vm'
                }
            },
            params: {'wfp': '', 'wfh': '', 'name': '', 'from':'', 'order':'' }
        })  
        .state('root.main.colaboration', {        	
            views: {
                'container@root':{
                    templateUrl: 'app/views/colaboration/index.html',                    
                    controller: 'ReportController',
                    controllerAs: 'vm'
                }
            },
            params: {'wfp': '', 'wfh': '', 'name': '', 'from':'', 'order':'' }
        })        
        .state('root.main.service', {
            views: {   
                'container@root':{
                    templateUrl: 'app/views/service.html',
                    controller: 'ServiceController',
                    controllerAs: 'vm'
                }
            }
        })
        .state('root.main.documentcreate', {
            views: {
                'headerDer@root': {
                	templateUrl: 'app/views/assets/headerDer.html',
                	controller: 'HeaderDerController',
                    controllerAs: 'vm'
                },                            	
                'container@root':{
                    templateUrl: 'app/views/document/index.html',
                    controller: 'DocumentController',
                    controllerAs: 'vm'
                }
            },
            params: {'wfp': '', 'name': '', 'frmn': ''}
        })
        .state('root.main.documentopen', {
            views: {
                'headerDer@root': {
                	templateUrl: 'app/views/assets/headerDer.html',
                	controller: 'HeaderDerController',
                    controllerAs: 'vm'
                },                            	
                'container@root':{
                    templateUrl: 'app/views/document/index.html',
                    controller: 'DocumentController',
                    controllerAs: 'vm'
                }
            },
            params: {'nuDoc': '', 'nuInst': '', 'wfa': '', 'fromState':''}
        })        
        .state('root.main.profile', {
            views: {
                'container@root':{
                    templateUrl: 'app/views/sessions/profile/profile.html',
                    controller: 'ProfileController',
                    controllerAs: 'vm'
                }
            }
        }) 
        .state('root.main.changeinfo', {
            views: {
                'container@root':{
                    templateUrl: 'app/views/sessions/profile/change_info.html',
                    controller: 'ProfileController',
                    controllerAs: 'vm'
                }
            }
        })        
        .state('root.main.changepass', {
            views: {
                'container@root':{
                    templateUrl: 'app/views/sessions/profile/change_pass.html',
                    controller: 'ProfileController',
                    controllerAs: 'vm'
                }
            }
        }) 
        .state('root.main.changepassapro', {
            views: {
                'container@root':{
                    templateUrl: 'app/views/sessions/profile/change_pass_apro.html',
                    controller: 'ProfileController',
                    controllerAs: 'vm'
                }
            }
        }) 
        .state('root.main.changesecquest', {
            views: {
                'container@root':{
                    templateUrl: 'app/views/sessions/profile/questions.html',
                    controller: 'ProfileController',
                    controllerAs: 'vm'
                }
            }
        })
        .state('root.login', {
            url: '',
            views:{
                'login@root':{
                    templateUrl: 'app/views/sessions/login.html',
                    controller: 'LoginController',
                    controllerAs: 'vm'
                }
            },
            params: {'msg': ''}
        })
        .state('root.login.environment', {
            url: ':environmentName',
            views:{
                'login@root':{
                    templateUrl: 'app/views/sessions/login.html',
                    controller: 'LoginController',
                    controllerAs: 'vm'
                }
            }
        })        
        .state('root.login.forgot', {
            views:{
                'login@root':{
                    templateUrl: 'app/views/sessions/forgot.html',
                    controller: 'LoginController',
                    controllerAs: 'vm'
                }
            }
        })
        .state('root.login.forgotsend', {
            views:{
                'login@root':{
                    templateUrl: 'app/views/sessions/forgotSend.html',
                    controller: 'LoginController',
                    controllerAs: 'vm'
                }
            }
        })        
        .state('root.login.question', {
            views:{
                'login@root':{
                    templateUrl: 'app/views/sessions/question.html',
                    controller: 'LoginController',
                    controllerAs: 'vm'
                }
            }
        })
        .state('root.login.recuperate', {
            views:{
                'login@root':{
                    templateUrl: 'app/views/sessions/recuperate.html',
                    controller: 'LoginController',
                    controllerAs: 'vm'
                }
            }
        });         
      }


})();
