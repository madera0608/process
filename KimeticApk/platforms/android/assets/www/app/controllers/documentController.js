(function () {
    'use strict';

    angular
        .module('myApp')
        .directive('stMatrizForm', MatrizForm)
        .directive('stDocumentForm', DocumentForm)
        .directive('onFinishRender', onFinishRender)
        .directive('updateFieldProcess', UpdateFieldProcess)
        .controller('DocumentController', DocumentController)
    	.service('documentService', documentService);

    DocumentController.$inject = ['processEngine', '$stateParams', '$sce', '$scope', '$rootScope', '$modal', 'documentService', '$state', '$window', '$filter'];
    function DocumentController(processEngine, $stateParams, $sce, $scope, $rootScope, $modal, documentService, $state, $window, $filter) {
        var vm = this;
        //create doc
        vm.wfp = $stateParams.wfp;        
        vm.wfh =  $stateParams.wfh;
        vm.frmn = $stateParams.frmn;
        vm.name = $stateParams.name;
        //open doc
        vm.nuDoc = ($stateParams.nuDoc!=null?$stateParams.nuDoc:0);//Default 0
        vm.nuInst = $stateParams.nuInst;
        vm.wfa = $stateParams.wfa;
        //from $state
        vm.fromState = $stateParams.fromState;
    };   
    
    function onFinishRender($timeout) {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                if (scope.$last === true) {
                $timeout(function () {
                    scope.$emit(attr.broadcasteventname ? attr.broadcasteventname : 'ngRepeatFinished');
                });
                }
            }
        };    	
    };

	function DocumentForm() {
        return {
            restrict: 'E',
            scope: {
              //for create
              wfp: '=',
              wfh: '=',
              frmn: '=',
              name: '=',
              //for open
              nuDoc: '=',
              nuInst: '=',
              wfa: '=',
              lectura: '=',
              hideDoc: '&',
              fromState: '='
            },
            templateUrl: 'app/views/templates/documentForm.html',
            controller: function (processEngine, $stateParams, $sce, $scope, $rootScope, $modal, documentService, $state, $window, $filter, ticketService, $compile, $timeout, $q) {
            	
	            //event/agent 
	            $scope.eventCampo = '';
	            $scope.eventFila = 0;
	            $scope.eventXml = '';         
	            $scope.eventSelList = 0;
	            $scope.eventCtx = '';  
	            $scope.agentCodigo = '';
	            $scope.agentCtx = '';
	            $scope.eventResult = {};
	            $scope.agentMsg = [];
	            $scope.agentTipoMsg = false;
	            //listajax
	            $scope.listObjectsAjax = [];
	            $scope.selectedObjectAjax = {};
	            //Send form
	            $scope.sendObj = {};
	            $scope.optsSend = {
	            		sendComment: '',
	            		sendChkPriority : 0,
	            		sendCcMail : ''
	            };
	            $scope.sendAcc = '';
	            //Permisos
	            $scope.anular = false;
	            $scope.anexar = false;
	            $scope.desAnexar = false;
	            $scope.imprimir = false; 
	            //others
	            $scope.frmnName = ''; 
	            $scope.docData = {};
	            $scope.nuDocUser = 0;
	            $scope.ticketService = ticketService;
	            $scope.listAnexos = [];
	            //$window.formatDate = angular.lowercase($rootScope.formatDate);
	            var vm = $scope;
	            
	            $scope.backState = function() {
	            	$state.go($rootScope.fromStateToDoc, { 'filter': $rootScope.fromParamFilter, 'wfp': $rootScope.fromParamWfp, 'wfh': $rootScope.fromParamWfh, 'name': $rootScope.fromParamName },{reload:$rootScope.fromStateToDoc});
	            };	            
	            
	            $scope.getHtml = function(html) {
	            	return $sce.trustAsHtml(html);
	            };
	            
	            $scope.openDocumentRead = function() {
            	    processEngine.openDocumentRead(vm)
                    .then(function (data) {
                    	if (data!=null){                  		
                            $scope.docData = data;  
                            $scope.frmn = $scope.docData.forms[0].frmn;
                            $scope.frmnName = $scope.docData.forms[0].nombre;
                            $scope.includeClientFiles();
                           	documentService.closeRead();
                		}
                    });	
	            };
	            
	            $scope.initDocument = function() {	            	            	    
                	$scope.docData = {};
                    if ($scope.lectura=='N'){
	                    processEngine.getProfile()
	                    .then(function (data) {
	                    	if (data!=null){
	                    		//alert(JSON.stringify(data, null, 2));
	                        	$scope.nuDocUser = data.activoD;               	
	                        	if ($scope.nuDocUser==0){
	                        		if ($scope.nuDoc == 0){
	                        			//create document
	                        			$scope.createDocument();
	                        		}else{
	                        			//open document
	                        			$scope.openDocument();
	                        		}
	                        	}else{
	                        		//buscar anexos
	         	                   	processEngine.attachedDocument()
	         	                    .then(function (data) {
	         	                    	if (data!=null){
	         	                    		$scope.listAnexos = data; 
	         	                    	}
	         	                    });	                        		
	                        		//$scope.getDocument(0);
	         	                   $scope.openDocument();
	                        	}
	                    	}
	                    });	                    	
                    }else{
            			//open document in mode read
                    	$scope.openDocumentRead();
                    }
	            };	            
	            
	            $scope.initDocument();
	            
//	            $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {//para guardar temporalmente los valores
//	            	 if ((fromState.name === "root.main.documentopen")||(fromState.name === "root.main.documentcreate")) { 
//		            	 if ($scope.lectura=='N'){
//			 	             	if (!$scope.docData.lectura){
//			 	             		console.log("guardando doc temp....");
//			 	             		processEngine.saveFormDocument(vm);
//				             	}	            		 
//			            	 }	            		 
//	            	 }
//	            });	            
	            
	            $scope.$watchGroup(['nuDoc', 'nuInst'], function(newValues, oldValues, scope) {
	            	if ((newValues[0] !== oldValues[0])||(newValues[1] !== oldValues[1])){
	            		$scope.initDocument();
	            	}
	            });	 
	            
	            $scope.$on('ngRepeatBroadcast1', function(ngRepeatFinishedEvent) {
	            	setDates();
	            });
	            
	            $scope.goOpenDocument = function(nuDoc,nuInst,wfa) {
	            	 if (documentService.isOpenDoc()){
	            		 var arrayDoc = documentService.getCtxOpenDoc();
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
		         	                   documentService.saveClose('')
		         	                   .then(function (data) {
		         	                	  $state.go('root.main.documentopen', { 'nuDoc': nuDoc, 'nuInst': nuInst, 'wfa': wfa },{reload:'root.main.documentopen'});
		         	                   });
		         	               }else{
		         	                   documentService.close()
		         	                   .then(function (data) {
		         	                	  $state.go('root.main.documentopen', { 'nuDoc': nuDoc, 'nuInst': nuInst, 'wfa': wfa },{reload:'root.main.documentopen'});               	   
		         	                   });	            	   	            	  
		         	               }	               
		                       }, function() {
		                       }); 
	            		 }else{
	            			 documentService.close();
	            			 $state.go('root.main.documentopen', { 'nuDoc': nuDoc, 'nuInst': nuInst, 'wfa': wfa },{reload:'root.main.documentopen'});
	            		 }
	            	 }else{
	            		 $state.go('root.main.documentopen', { 'nuDoc': nuDoc, 'nuInst': nuInst, 'wfa': wfa },{reload:'root.main.documentopen'});	 
	            	 }	            	
	            };
	            
	            $scope.createDocument = function() {
            	     processEngine.createDocument(vm)
                     .then(function (data) {
                     	if (data!=null){
                            $scope.docData = data;   
                            $scope.frmn = $scope.docData.forms[0].frmn;
                            $scope.frmnName = $scope.docData.forms[0].nombre;
                        	documentService.saveCtxOpenDoc(data.nuDoc,0,data.wfa,data.lectura,data.nbConversacion);
                          	processEngine.getProfile()
                            .then(function (dataP) {
                            	if (dataP!=null){
                                	$scope.anular = dataP.anular;
                                    $scope.anexar = dataP.anexar;
                                    $scope.desAnexar = dataP.desanexar;
                                    $scope.imprimir = dataP.imprimir; 
                                    $scope.includeClientFiles();
                               	}
                            });
                          	//al iniciar no hay anexos
                 		}
                     });	            	
	            };
	            
	            $scope.includeClientFiles = function() {
	            	$(".clientFiles").html("");
                	var link = '';  
                	if ($scope.docData.fileClientGeneral!=''){
                		link = '<script src="' + $scope.docData.fileClientGeneral + '" type="text/javascript"></script>';
               		} 		                	
                	if ($scope.docData.fileClient!=''){
                	  link = link + '<script src="' + $scope.docData.fileClient + '" type="text/javascript"></script>';                         		 
                	}                    		
        		    $(".clientFiles").append( $compile(link)($scope) ); 	            	
	            };
	            
	            $scope.openDocument = function() {	
            	    processEngine.openDocument(vm)
                    .then(function (data) {
                    if (data!=null){                  		
                            $scope.docData = data;  
                            $scope.frmn = $scope.docData.forms[0].frmn;
                            $scope.frmnName = $scope.docData.forms[0].nombre;
                            documentService.saveCtxOpenDoc(data.nuDoc,$scope.nuInst,vm.wfa,data.lectura,data.nbConversacion);
     	                   	//buscar anexos
     	                   	processEngine.attachedDocument()
     	                    .then(function (data) {
     	                    	if (data!=null){
     	                    		$scope.listAnexos = data;   
     	     	                   	processEngine.getProfile()
     	     	                    .then(function (dataP) {
     	     	                    	if (dataP!=null){
     	     	                        	$scope.anular = dataP.anular;
     	     	                            $scope.anexar = dataP.anexar;
     	     	                            $scope.desAnexar = dataP.desanexar;
     	     	                            $scope.imprimir = dataP.imprimir; 
     	     	                            $scope.includeClientFiles();
     	     	                    	}
     	     	                    });     	                    		
     	                    	}
     	                    });      	                   	
                		}
                    });	            	
	            };	            
	             
	            $scope.loadFormDocument = function(frmn) {
	                processEngine.saveFormDocument(vm)
	                .then(function (data) {
	                    $('.formularioContent').scrollTop(0);
	                    $scope.getDocument(frmn);        	   
	                }); 
	            };

	            $scope.getDocument = function(frmn) {
	            	$scope.frmn = frmn;
	            	$scope.loadDoc = false;
            	    processEngine.getDocument(vm)
                    .then(function (data) {
                 	if (data!=null){
                            $scope.docData = data; 
                            $scope.frmn = $scope.docData.forms[0].frmn;
                            $scope.frmnName = $scope.docData.forms[0].nombre;
                		}
                    });	            	
	            };
      
	            $scope.setChangeValue = function(field) {
	            	field.change = true;	            	
	            };
	            
	            $scope.actionsDocument = function(sendAcc) {
	             	$scope.sendObj = {};
	             	$scope.sendAcc = sendAcc;
	             	if (sendAcc=='A'){//avanzar
	             		if (!$scope.docData.lectura){
	                         processEngine.saveFormDocument(vm)
	                         .then(function (data) {
	                         	processEngine.destinationsDocument()
	                         	.then(function (data) {
	                         		if (data!=null){
	                         			//alert(JSON.stringify(data, null, 2));
	                         			if (data.msgObligatorios!=''){    
	                         				var listMessage = ticketService.getMessageError();
	                         				listMessage.push(data.msgObligatorios);
	                         				ticketService.setMessageError(listMessage);
	                         				$('#'+data.focus).focus();
	                         			}else{
	                         				//open modal send
	                         				$scope.sendObj = data;            				
	                         				$scope.openSendModal();
	                         			}            			
	                         		}
	                             });       	   
	                         });         			
	             		}else{
	                     	processEngine.destinationsDocument()
	                     	.then(function (data) {
	                     		if (data!=null){
	                     			//alert(JSON.stringify(data, null, 2));
	                     			if (data.msgObligatorios!=''){    
	                     				var listMessage = ticketService.getMessageError();
	                     				listMessage.push(data.msgObligatorios);
	                     				ticketService.setMessageError(listMessage);
	                     				$('#'+data.focus).focus();
	                     			}else{
	                     				//open modal send
	                     				$scope.sendObj = data;            				
	                     				$scope.openSendModal();
	                     			}            			
	                     		}
	                         });        			
	             		}        		
	             	}else if (sendAcc=='R'){//rechazar
	             		if (!$scope.docData.lectura){
	                         processEngine.saveFormDocument(vm)
	                         .then(function (data) {
	                         	processEngine.objectDocument($scope.sendComment,$scope.sendChkPriority,true,$scope.sendCcMail,0)
	                             .then(function (data) {
	                         		if (data!=null){
	                         			//alert(JSON.stringify(data, null, 2));
	                         			if (data.msgObligatorios!=''){    
	                         				var listMessage = ticketService.getMessageError();
	                         				listMessage.push(data.msgObligatorios);
	                         				ticketService.setMessageError(listMessage);
	                         				$('#'+data.focus).focus();
	                         			}else{
	                         				//open modal send
	                         				$scope.sendObj = data;            				
	                         				$scope.openSendModal();
	                         			}            			
	                         		}           	
	                             });                        	
	                         });
	             		}else{
	             			processEngine.objectDocument($scope.sendComment,$scope.sendChkPriority,true,$scope.sendCcMail,0)
	                         .then(function (data) {
	                     		if (data!=null){
	                     			//alert(JSON.stringify(data, null, 2));
	                     			if (data.msgObligatorios!=''){    
	                     				var listMessage = ticketService.getMessageError();
	                     				listMessage.push(data.msgObligatorios);
	                     				ticketService.setMessageError(listMessage);
	                     				$('#'+data.focus).focus();
	                     			}else{
	                     				//open modal send
	                     				$scope.sendObj = data;            				
	                     				$scope.openSendModal();
	                     			}            			
	                     		}           	
	                         }); 
	             		}
	             	}else if (sendAcc=='C'){//anular
	             		if (!$scope.docData.lectura){
	                         processEngine.saveFormDocument(vm)
	                         .then(function (data) {
	                         	processEngine.cancelDocument($scope.sendComment,true)
	                             .then(function (data) {
	                         		if (data!=null){
	                         			//alert(JSON.stringify(data, null, 2));
	                         			if (data.msgObligatorios!=''){    
	                         				var listMessage = ticketService.getMessageError();
	                         				listMessage.push(data.msgObligatorios);
	                         				ticketService.setMessageError(listMessage);
	                         				$('#'+data.focus).focus();
	                         			}else{
	                         				//open modal send
	                         				$scope.sendObj = data;            				
	                         				$scope.openSendModal();
	                         			}            			
	                         		}           	
	                             });                        	
	                         });
	             		}else{
	             			processEngine.cancelDocument($scope.sendComment,true)
	                         .then(function (data) {
	                     		if (data!=null){
	                     			//alert(JSON.stringify(data, null, 2));
	                     			if (data.msgObligatorios!=''){    
	                     				var listMessage = ticketService.getMessageError();
	                     				listMessage.push(data.msgObligatorios);
	                     				ticketService.setMessageError(listMessage);
	                     				$('#'+data.focus).focus();
	                     			}else{
	                     				//open modal send
	                     				$scope.sendObj = data;            				
	                     				$scope.openSendModal();
	                     			}            			
	                     		}           	
	                         });
	             		}
	             	}else if (sendAcc=='V'){//adquirir
	         			processEngine.acquireDocument($scope.sendComment,true)
	                     .then(function (data) {
	                 		if (data!=null){
	                 			//alert(JSON.stringify(data, null, 2));
	                 			if (data.msgObligatorios!=''){    
	                 				var listMessage = ticketService.getMessageError();
	                 				listMessage.push(data.msgObligatorios);
	                 				ticketService.setMessageError(listMessage);
	                 				$('#'+data.focus).focus();
	                 			}else{
	                 				//open modal send
	                 				$scope.sendObj = data; 
	                 				$scope.nuInst = data.destinos[0].puestos[0].nuInstn;
	                 				$scope.openSendModal();
	                 			}            			
	                 		}           	
	                     });
	             	}else if (sendAcc=='O'){//recuperar
	         			processEngine.recoverDocument()
	                     .then(function (data) {
	                 		if (data!=null){
	             				//open modal send
	             				$scope.sendObj = data;            				
	             				$scope.openSendModal();
	                 		}           	
	                     });        		
	             	}	            	
	            };
	            
	            $scope.saveform = function(sendAcc) {
	                 processEngine.saveFormDocument(vm)
	                 .then(function (data) {
	                 });	            	
	            };
	            
	            $scope.saveDocument = function(sendAcc) {
	             	processEngine.saveFormDocument(vm)
	                 .then(function (data) {
	                     processEngine.saveDocument($scope.optsSend.sendComment)
	                     .then(function (data) {	                     	
	                     });            	
	                 });	            	
	            };
	            
	            $scope.ejecEventAgent = function(campo,fila) {
	             	//saveform TODO
	             	processEngine.saveFormDocument(vm)
	                 .then(function (data) {
	                     $scope.eventResult = {};
	                     $scope.eventCampo = campo;
	                     $scope.eventFila = fila;
	                     $scope.eventCtx = '';
	                     $scope.agentMsg = [];
	                     $scope.agentTipoMsg = false;                
	                     processEngine.ejecEventAgent(vm)
	                     .then(function (data) {
	                     	if (data!=null){                		
	                     		$scope.eventResult = data;
	                     		$scope.eventXml = data.xmlData; 
	                     		//console.log(JSON.stringify(data, null, 2));            		
	                     		if (data.filas.length>0){
	                     			//openmodal agent            			
	                     			$scope.openAgentModal();            			
	                     		}else{
	                     			if (data.xmlData!='' && data.xmlData!=null){
		                     			if (data.messages.length==0){
		                     				data.messages.push($filter('translate')(ticketService.getDescriptionError('70070'))); 
		                     			}	                     				
	                     			}else{
	                     				$scope.getDocument($scope.frmn);
	                     			}	                     	        
	                     		}
	                     		$scope.agentMsg = data.messages;
	                     		$scope.agentTipoMsg = data.msgError; 
	                     	}
	                     });            	
	                 });	            	
	            };
	            
	            $scope.ejecAgent = function(codigo,ctx) {
	             	//saveform TODO
	             	processEngine.saveFormDocument(vm)
	                 .then(function (data) {
	                     $scope.eventResult = {};
	                     $scope.agentCodigo = '';
	                     $scope.agentCtx = '';
	                     $scope.agentMsg = [];
	                     $scope.agentTipoMsg = false;                
	                     processEngine.ejecAgent(vm)
	                     .then(function (data) {
	                     	if (data!=null){
	                     		$scope.eventResult = data;
	                     		$scope.eventXml = data.xmlData; 
	                     		//console.log(JSON.stringify(data, null, 2));            		
	                     		if (data.filas.length>0){
	                     			//TODO validar si es posible abrir lista de valores aqui?????            			
	                     			//openAgentModal();            			
	                     		}else{
	                     			if (data.xmlData!='' && data.xmlData!=null){
		                     			if (data.messages.length==0){
		                     				data.messages.push($filter('translate')(ticketService.getDescriptionError('70070'))); 
		                     			}	                     				
	                     			}else{
	                     				$scope.getDocument($scope.frmn);
	                     			}	                     			
	                     		}
	                     		$scope.agentMsg = data.messages;
	                     		$scope.agentTipoMsg = data.msgError;                 		
	                     	}
	                     });            	
	                 }); 	            	
	            };
      
	            $scope.eventAjaxChanged = function (id,identField,fila) {
	            	if (identField){
	            		var idFieldObj = identField;
	            	}else{
	            		var idFieldObj = this.$parent.$$childHead.id;
	            	}	 
	            	if (fila){
	            		var idField = 'M' + fila + idFieldObj.substring(0,idFieldObj.indexOf("_Ajax"));
	            	}else{
	            		var idField = idFieldObj.substring(0,idFieldObj.indexOf("_Ajax"));
	            	}	            		
				  	var optionObj = $("#" + idField);
				    $timeout(function () {
				    	optionObj.val(id).trigger('change');
				    });				  	
	    	    };	    	    
	    	    
	    	    $scope.selectedAjax = function(selected) {
	    	        if (selected) {
                 	  //resolver lista de valores
                 	  $scope.eventSelList = selected.originalObject.numeroFila;
                       processEngine.resolveListEventAgent(vm)
                       .then(function (data) {
                       	if (data!=null){                       		
                       		$scope.getDocument($scope.frmn);
                       	}
                       });	    	         
	    	        }
	    	    };	    	    
	    	    
	            $scope.searchEventAjax = function(userInputString, timeoutPromise, identField, fila) {
                    $scope.eventResult = {};
	            	if (identField){
	            		var idFieldObj = identField;
	            	}else{
	            		var idFieldObj = this.$parent.$$childHead.id;
	            	}
	            	var idField = idFieldObj.substring(0,idFieldObj.indexOf("_Ajax"));	                    
                    $scope.eventCampo = idField;
	            	if (fila){
	            		$scope.eventFila = fila;
	            	}else{
	            		$scope.eventFila = $("#" + this.$parent.$$childHead.id).attr('fila');
	            	}                    
                    $scope.eventCtx = '';
                    $scope.agentMsg = [];
                    $scope.agentTipoMsg = false;
                    
                    return processEngine.saveFormDocument(vm).then(function (data) {
                    	return processEngine.ejecEventAgent(vm);
                    }).then(function (data) {
                    	if (data!=null){         
                    		$scope.eventResult = data;
                    		$scope.eventXml = data.xmlData;                    		
                    		$scope.agentMsg = data.messages;
                    		$scope.agentTipoMsg = data.msgError;
        				    var camposBuscar = { 
        							"data" : []
        						};
                        	for(var i in data.filas) {
                        	    var item = data.filas[i];
        						camposBuscar.data.push({ 
        							"valor" : item.valores[1],
        							"titulo"  : item.valores[2],
        							"descripcion"       : item.valores[3],
        							"numeroFila"       : item.numero
        						});						
                        	}                    		
                    		return camposBuscar;
                    	}
                    });          
	            };	            
	            
	            $scope.concatFieldList = function(list) {
	             	var keyVoid = false;
	             	for(var opt in list) {
	             		if (opt.key==""){
	             			keyVoid = true;
	             			break;
	             		}
	             	}
	             	if (keyVoid){
	             		 return list.map(function(elem){
	                          return elem.value;
	                      }).join("|");
	             	}else{
	             		 return list.map(function(elem){
	                          return elem.key;
	                      }).join("|");        		
	             	}	            	
	            };

	            $scope.openLink = function(link) {
	            	 $window.open(link, '_blank');
	            };
	            
	            $scope.openInstModal = function(link) {
	             	if (!$scope.docData.lectura){
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
	         	                   documentService.saveClose($scope.optsSend.sendComment)
	         	                   .then(function (data) {
	         	                	  $scope.backState();
	         	                	  //$state.go('root.main',{},{reload:'root.main'});
	         	                   });
	         	               }else{
	         	                   documentService.close()
	         	                   .then(function (data) {
	         	                	  $scope.backState();
	         	                	  //$state.go('root.main',{},{reload:'root.main'});                	   
	         	                   });	            	   	            	  
	         	               }	               
	                       }, function() {
	                       });        		
	             	}else{
	             		documentService.close()
	                     .then(function (data) {
	                    	 $scope.backState();
	                    	 //$state.go('root.main',{},{reload:'root.main'});                	   
	                     });	  
	             	} 	            	
	            };

	            $scope.openAgentModal = function(campo,fila,context,xmlResul) {
	                 var modalInstance = $modal.open({
	                     templateUrl: 'app/views/templates/modalAgentDocument.html',
	                     keyboard: false,
	                     backdrop: 'static',
	                     windowClass: 'modal-fit',
	                     controller: ModalAgentController,
	                     resolve: {
	                         items: function () {
	                             return $scope.eventResult;
	                           }                     
	                     }
	                   });

	                   modalInstance.result.then(function(selection) {
	                 	  //resolver lista de valores
	                 	  $scope.eventSelList = selection;
	                       processEngine.resolveListEventAgent(vm)
	                       .then(function (data) {
	                       	if (data!=null){
	                       		//alert(JSON.stringify(data, null, 2));
	                       		$scope.getDocument($scope.frmn);
	                       	}
	                       });            	  
	                   }, function() {
	                   });  	            	
	            };
	             
	            $scope.openAnexoModal = function() {
	                 var modalInstance = $modal.open({
	                     templateUrl: 'app/views/templates/modalUploadDocument.html',
	                     keyboard: false,
	                     backdrop: 'static',
	                     controller: ModalUploadController,
	                     resolve: {
	                     	 anexar: function () {
	                             return $scope.anexar;
	                           }, 
	                         desAnexar: function () {
	                             return $scope.desAnexar; 
	                           },                      
	                         listAnexos: function () {
	                             return $scope.listAnexos;
	                           }	                    	 
	                     }
	                   });

	                   modalInstance.result.then(function() {	                	  
	                 	  documentService.save($scope.sendComment)
	                       .then(function (data) {
		                       	processEngine.attachedDocument()
		                        .then(function (data) {
		                        	if (data!=null){
		                        		$scope.listAnexos = data; 
		                        		$scope.getDocument($scope.frmn);//para actualizar luego de anexar
		                        	}
		                        }); 	                    	   
	                       });            	  
	                   }, function(listAnexos) {
	                	   $scope.listAnexos = listAnexos;
	                   }); 	            	
	            };
	            
	            $scope.openSendModal = function() {
	                 var modalInstance = $modal.open({
	                     templateUrl: 'app/views/templates/modalSendDocument.html',
	                     keyboard: false,
	                     backdrop: 'static',
	                     //windowClass: 'modal-fit',
	                     controller: ModalSendController,
	                     resolve: {
	                     	 sendObj: function () {
	                             return $scope.sendObj;
	                           }, 
	                         sendAcc: function () {
	                             return $scope.sendAcc; 
	                           },                      
	                         sendChkPriority: function () {
	                             return $scope.sendChkPriority;
	                           }, 
	                         sendComment: function () {
	                             return $scope.sendComment;
	                           },
	                         sendCcMail: function () {
	                             return $scope.sendCcMail;
	                           }
	                     }
	                   });

	                   modalInstance.result.then(function(selection) {	                	  
	                   }, function() {
//		                   //TODO si es adquirir leer el doc nuevamente.
//	                	   vm.wfa = 0;
//	                	   if ($scope.sendAcc=='V'){
//         	                   documentService.close()
//         	                   .then(function (data) {
//         	                	  $scope.initDocument();                	   
//         	                   });	                		   
//	                	   }	                	   
	                   });	            	
	            };             
	            
            }//fin controller
            
          };//fin return
    };    
    
    function UpdateFieldProcess() {
	   return {
	        restrict: 'AE', //attribute or element
	        scope: {},
	        replace: true,
	        require: 'ngModel',
	        link: function ($scope, elem, attr, ngModel) {
	            $scope.$watch(ngModel, function (nv) {
	                elem.val(nv);
	            });
	            elem.change(function () { //bind the change event to hidden input
	                $scope.$apply(function () {
	                    ngModel.$setViewValue(  elem.val());
	                });
	            });
	        }
	    };    	
    }
    
    function MatrizForm($sce) {
        return {
            restrict: 'E',
            scope: {
              srcData: '=',
              descriptionMatriz: '=',
              nameMatriz: '=',
              formDocument: '=',
              ejecEventAgent: '&',
              eventAjaxChanged: '&',
              selectedAjax: '&',
              searchEventAjax: '&'
            },
            templateUrl: 'app/views/templates/matrizform.html',
            //link: function(scope, element, attr) {
            controller: function ($scope) {
              
              $scope.display = $scope.srcData.files;
              $scope.itemsM = 10;
              $scope.tableState;
              
              $scope.getHtml = function(html) {
	            	return $sce.trustAsHtml(html);
	          };            	
            	
	          $scope.setChangeValue = function(field) {
                	field.change =true;
              }; 

              $scope.initList = function(list,field) {
            	  for(var i in list) {            		  
              		var item =  list[i];
              		var seleted = false;
              		if ((item.key==field.value) || (item.value==field.value)){
                    		seleted = true;                		
                    }
                  	if (seleted && (item.key!=field.value)){
                  		field.value = item.key;
                  		break;
                  	}
              	  }             	  
              };  
              
              $scope.initListMultiple = function(list,field) {
            	  for(var i in list) {            		  
            		var item =  list[i];
            		var seleted = false;
                	if ((field.value.includes(item.key)) || (field.value.includes(item.value))){
                  		seleted = true;                		
                  	}
                	if (seleted && (!field.value.includes(item.key))){
                		field.valueM.push(item.key);
                	}else if (seleted){
                		field.valueM.push(item.value);
                	}
            	  } 
                };              
              
                $scope.paginationTable = function(tableState) {
                	$scope.tableState = tableState;
                	$scope.display = $scope.srcData.files.slice(tableState.pagination.start, tableState.pagination.start + $scope.itemsM);                    
              		 tableState.pagination.numberOfPages = Math.ceil($scope.srcData.files.length / $scope.itemsM);
               		 tableState.pagination.totalItemCount = $scope.srcData.files.length; 
                }
                
                $scope.addRow = function($event) {
            	  var newRow = angular.copy($scope.srcData.files[0]);
            	  //limpiar data del obj
            	  for(var i in newRow.fileItems) {
            		  newRow.selChk = false;
            		  var val =  newRow.fileItems[i];
            		  for(var j in val){
                		  if (j=="value"){
                			  val[j] = "";
                		  }
            		  }
            	  }
            	  $scope.srcData.files.push(newRow);
            	  $scope.tableState.pagination.start = (Math.ceil($scope.srcData.files.length / $scope.itemsM) -1) * $scope.itemsM;
            	  $scope.paginationTable($scope.tableState);
              };
              
              $scope.removeRows = function() {
            	var i;
            	for(i = $scope.display.length; i--;){
            		var item = $scope.display[i];
            		if (item.selChk){
                		var itemDelete = $scope.srcData.files.indexOf(item);
                		if (itemDelete>=0){
                	    	if ($scope.srcData.files.length==1){
	   	           	    		 var newRow = angular.copy($scope.srcData.files[0]);
	   	           	    		 newRow.selChk = false;
	   		                   	  //limpiar data del obj
	   		                   	  for(var j in newRow.fileItems) {
	   		                   		  var val =  newRow.fileItems[j];
	   		                   		  for(var k in val){
	   		                       		  if (k=="value"){
	   		                       			  val[k] = "";
	   		                       		  }
	   		                   		  }
	   		                   	  }	           	    		 
	   		                   	$scope.srcData.files.splice(itemDelete,1);
	   		                   	$scope.srcData.files.push(newRow);
	               	    	}else{
	               	    		$scope.srcData.files.splice(itemDelete,1);
	               	    	}                 			
                		}           			
            		} 
            	} 
            	if ($scope.tableState.pagination.start<=$scope.srcData.files.length){
            		$scope.tableState.pagination.start = (Math.ceil($scope.srcData.files.length / $scope.itemsM) -1) * $scope.itemsM;
            	}
            	$scope.paginationTable($scope.tableState);
              }; 
              
              $scope.markAlleRows = function() {
              	for(var i in $scope.display) {
            	    var item = $scope.display[i];
            	    if (!item.selChk){
            	    	item.selChk = true;
            	    }
            	}                	  
              }; 
              
              $scope.eventAjaxChangedM = function (idM) {
            	  var idFieldObj = this.$parent.$$childHead.id;
            	  $scope.eventAjaxChanged({id : idM, identField: idFieldObj.substring(idFieldObj.indexOf("_")+1), fila: idFieldObj.substring(1,idFieldObj.indexOf("_")) });
    	      };              
              
    	      $scope.selectedAjaxM = function(selectedM) {
    	    	  $scope.selectedAjax({selected : selectedM});
	    	  };	    	    
	    	    
	    	  $scope.searchEventAjaxM = function(userInputStringM, timeoutPromiseM) {
	        	  var idFieldObj = this.$parent.$$childHead.id;
	        	  return $scope.searchEventAjax({userInputString : userInputStringM, timeoutPromise: timeoutPromiseM, identField: idFieldObj.substring(idFieldObj.indexOf("_")+1), fila: idFieldObj.substring(1,idFieldObj.indexOf("_")) });         
	          };	      	      
            }
          }
    }
    
    //Service document
    function documentService($window,processEngine,$rootScope) {
    	var self = this;
    	
    	self.saveCtxOpenDoc = saveCtxOpenDoc;
    	self.getCtxOpenDoc = getCtxOpenDoc;
    	self.delCtxOpenDoc = delCtxOpenDoc;
    	self.isOpenDoc = isOpenDoc;
    	self.saveClose = saveClose;
    	self.close = close;
    	self.save = save;
    	self.closeRead = closeRead;
    	//helper ambiente
    	self.saveCtxAmb = saveCtxAmb;
    	self.getCtxAmb = getCtxAmb;
    	self.delCtxAmb = delCtxAmb;    	
    	
        function saveCtxAmb(formaDate,formatMiles,formatDecimal,idioma) {
        	var arrayDoc = [];
        	arrayDoc.push(formaDate);
        	arrayDoc.push(formatMiles);
        	arrayDoc.push(formatDecimal);
        	arrayDoc.push(idioma);
            $window.localStorage['ctxAmb'] = JSON.stringify(arrayDoc);        	
        }    	
        
        function getCtxAmb() {
        	var arrayDoc = JSON.parse($window.localStorage['ctxAmb']);  
            return arrayDoc;
        }

        function delCtxAmb() {
        	 $window.localStorage.removeItem('ctxAmb'); 
        }         
    	
        function saveCtxOpenDoc(nuDoc,nuInst,wfa,read,name) {
        	var arrayDoc = [];
        	arrayDoc.push(nuDoc);
        	arrayDoc.push(nuInst);
        	arrayDoc.push(wfa);
        	arrayDoc.push(read);
        	arrayDoc.push(name);
            $window.localStorage['ctxDoc'] = JSON.stringify(arrayDoc);        	
        }

        function getCtxOpenDoc() {
        	var arrayDoc = JSON.parse($window.localStorage['ctxDoc']);  
            return arrayDoc;
        }

        function delCtxOpenDoc() {
        	 $window.localStorage.removeItem('ctxDoc'); 
        } 
        
        function isOpenDoc() {
            var ctx = $window.localStorage['ctxDoc'];
            if (ctx) {
                return true;
            } else {
                return false;
            }
        }        
        
        function saveClose(observation) {
        	return processEngine.saveDocument(observation)
            .then(function (data) {
            	delCtxOpenDoc();
            	processEngine.closeDocument();
            });
        } 
        
        function save(observation) {
        	return processEngine.saveDocument(observation)
            .then(function (data) {
            });
        }        
        
        function close() {
            return processEngine.closeDocument()
            .then(function (data) {   
            	delCtxOpenDoc();
            }); 
        } 
        
        function closeRead() {
            return processEngine.closeDocumentRead()
            .then(function (data) {
            	
            }); 
        }        
    }
    
})();

var ModalUploadController = function($scope, $modalInstance, FileUploader, anexar, desAnexar, listAnexos, processEngine) {
	
    $scope.anexar = anexar;
    $scope.desAnexar = desAnexar;
    $scope.listAnexos = listAnexos;    
	$scope.descriptionAnx = '';
	$scope.requiredDescriptionAnx = false;
	$scope.changeAnexos = false;

    var uploader = $scope.uploader = new FileUploader({        
    });	
    
    $scope.save = function () {
        //save form
    	$modalInstance.close();
    };
    
    uploader.removeItem = function(fileItem) {
    	fileItem.remove();
    };
    
    $scope.cancel = function () {
      $modalInstance.dismiss($scope.listAnexos);
    };
    
    $scope.markAllFiles = function() {    	
      	for(var i in $scope.listAnexos) {
    	    var item = $scope.listAnexos[i];
    	    if (!item.selected){
    	    	item.selected = true;
    	    }
    	}                	  
    };    
    
    $scope.openLink = function(link) {
   	 $window.open(link, '_blank');
    };
    
    $scope.deleteFiles = function() {
    	processEngine.marckAttachedDocument($scope.listAnexos,true)
        .then(function (data) {
        	processEngine.attachedDocument()
             .then(function (data) {
             	if (data!=null){
             		$scope.listAnexos = data; 
             		$scope.changeAnexos = true;
             	}
             });
        });
    };    
   
    $scope.recoverFiles = function() {
    	processEngine.marckAttachedDocument($scope.listAnexos,false)
        .then(function (data) {
        	processEngine.attachedDocument()
             .then(function (data) {
             	if (data!=null){
             		$scope.listAnexos = data;
             		$scope.changeAnexos = true;
             	}
             });
        });
   };    
    
    // CALLBACKS
    uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
        console.info('onWhenAddingFileFailed', item, filter, options);
    };
    uploader.onAfterAddingFile = function(fileItem) {
        console.info('onAfterAddingFile', fileItem);
    };
    uploader.onAfterAddingAll = function(addedFileItems) {
        console.info('onAfterAddingAll', addedFileItems);
    };
    uploader.onBeforeUploadItem = function(item) {   
    	if ($scope.descriptionAnx!=''){
    		$scope.requiredDescriptionAnx = false;
        	var ticket = 'Bearer ' + $scope.ticketService.getTicket();
        	var urlService = 'http://131.255.104.36:9092/process/api/document/upload?amb=' + $scope.nbAmbiente + '&descripcion=' + $scope.descriptionAnx;
        	item.url = urlService;
        	item.headers = {
        			Authorization: ticket
        	};
    	}else{
    		$scope.requiredDescriptionAnx = true;
    	}  
        //item.withCredentials = true;
        console.info('onBeforeUploadItem', item);
    };
    uploader.onProgressItem = function(fileItem, progress) {
        console.info('onProgressItem', fileItem, progress);
    };
    uploader.onProgressAll = function(progress) {
        console.info('onProgressAll', progress);
    };
    uploader.onSuccessItem = function(fileItem, response, status, headers) {
        console.info('onSuccessItem', fileItem, response, status, headers);
    };
    uploader.onErrorItem = function(fileItem, response, status, headers) {
        console.info('onErrorItem', fileItem, response, status, headers);
    };
    uploader.onCancelItem = function(fileItem, response, status, headers) {
        console.info('onCancelItem', fileItem, response, status, headers);
    };
    uploader.onCompleteItem = function(fileItem, response, status, headers) {
    	if (status == 200){
        	processEngine.attachedDocument()
            .then(function (data) {
            	if (data!=null){
            		$scope.listAnexos = data; 
            		 uploader.removeItem(fileItem);
            		 $scope.descriptionAnx = '';
            		 $scope.changeAnexos = true;
            	}
            });
    	}    	
        console.info('onCompleteItem', fileItem, response, status, headers);
    };
    uploader.onCompleteAll = function() {
        console.info('onCompleteAll');
    };    
};
var ModalAgentController = function($scope, $modalInstance, items) {
	
	$scope.items = items;
	
    $scope.ejecEvent = function (selList) {
       //TODO llamar servicio para rsolver lista de valores
    	$modalInstance.close(selList);
    };
    
    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
};
var ModalInstController = function($scope, $modalInstance, documentService) {
	
	$scope.nbConversacionOpen = '';
	$scope.nuDocOpen = ''; 
	
    activate();

    function activate() { 
    	if (documentService.isOpenDoc()){
			var arrayDoc = documentService.getCtxOpenDoc();
			$scope.nbConversacionOpen = arrayDoc[4];
			$scope.nuDocOpen = arrayDoc[0];    		
    	}
    }	
    
    $scope.ok = function () {
      $modalInstance.close('1');
    };
    
    $scope.noOk = function () {
	    $modalInstance.close('2');
	  };	      
    
    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
};
var ModalSendController = function($scope, $modalInstance, processEngine, sendObj, sendAcc, sendChkPriority, sendComment, sendCcMail, $state, documentService) {
	
	//send form
	$scope.sign = '';
	$scope.question = '';
	$scope.answer = '';
	$scope.sendComment = sendComment;
	$scope.comment = '';
	$scope.sendChkPriority = sendChkPriority;	
	$scope.opinion = 0;
	$scope.sendCcMail = sendCcMail;	
	$scope.sendObj = sendObj;
	$scope.sendBoolPriority = false;
	$scope.sendMsg = {};
	$scope.sendBoolMsg = false;
	$scope.sendAcc = sendAcc;
	$scope.nbAcc = '';
	
	activate();
	
	function activate() {
		
		if (sendAcc=='A'){//avanzar
			$scope.nbAcc = 'AccEnviar';
			if (!$scope.sendObj.firma && !$scope.sendObj.evalua && $scope.sendObj.allSelected){
	          	if ($scope.comment!=''){
	          		$scope.sendComment = $scope.comment;
	          	}
	          	if ($scope.sendChkPriority=='1'){
	          		$scope.sendBoolPriority = true;
	          	}else{
	          		$scope.sendBoolPriority = false;
	          	} 
	            processEngine.sendDocument($scope.sign,$scope.question,$scope.answer,$scope.sendComment,$scope.sendBoolPriority,true,$scope.opinion,$scope.sendCcMail,0,$scope.sendObj.destinos)
	            .then(function (data) {
	          	  if (data!=null){
	          		//alert(JSON.stringify(data, null, 2));
	          		$scope.sendMsg = data; 
	          		$scope.sendBoolMsg = true;
	          	  }            	
	           });				
			}else if ($scope.sendObj.firma){
	            processEngine.getProfile()
	            .then(function (data) {
	            	if (data!=null){
	            		$scope.question = data.pregunta;            		                	
	            	}
	            });			
			}			
		}else if (sendAcc=='R'){//rechazar
			$scope.nbAcc = 'AccObjetar';
			$scope.sendMsg = $scope.sendObj;
			$scope.sendBoolMsg = true;			
		}else if (sendAcc=='C'){//anular
			$scope.nbAcc = 'AccAnular';
			$scope.sendMsg = $scope.sendObj;
			$scope.sendBoolMsg = true;			
		}else if (sendAcc=='V'){//adquirir
			$scope.nbAcc = 'AccAdquirir';
			$scope.sendMsg = $scope.sendObj;
			$scope.sendBoolMsg = true;	
		}else if (sendAcc=='O'){//recuperar
			$scope.nbAcc = 'AccRecuperar';
			$scope.sendMsg = $scope.sendObj;
			$scope.sendBoolMsg = true;			
		}

	}
	
    $scope.selPlace = function (dest, place) {
    	dest.valueSelected = place;
    };
     
	$scope.send = function () {
	  $scope.sendMsg = {};	 
	  if (!$scope.sendObj.allSelected){
    	  if ($scope.comment!=''){
      		$scope.sendComment = $scope.comment;
      	  }
      	  if ($scope.sendChkPriority=='1'){
      		$scope.sendBoolPriority = true;
      	  }else{
      		$scope.sendBoolPriority = false;
      	  } 		  
          processEngine.sendDocument($scope.sign,$scope.question,$scope.answer,$scope.sendComment,$scope.sendBoolPriority,true,$scope.opinion,$scope.sendCcMail,0,$scope.sendObj.destinos)
          .then(function (data) {
          	if (data!=null){
          		//alert(JSON.stringify(data, null, 2));
          		$scope.sendMsg = data; 
          		$scope.sendBoolMsg = true;
          	}            	
          });
	  }	
    };
    
    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
    
    $scope.goTask = function () {    	
        $modalInstance.dismiss('cancel');
    	if ($scope.sendAcc!='V'){//si no es Adquirir
    		documentService.delCtxOpenDoc();
    		$state.go('root.main',{},{reload:'root.main'});	
    	}
        
    };    
};