MatrizEstatica( 'MTZCNTCT' );
MatrizEstatica( 'MTZDET' );
MatrizEstatica( 'MTZ2DET' );
MatrizEstatica( 'MTZ3DET' );
MatrizEstatica( 'MTZ4DET' );



HabilitaCampos("OPCAPFIN","NOAPFIN",[[1,"MOTIVNEG"]]); 
HabilitaCampos("OPCAPFIN","SIAPFIN",[[1,"OBSFINAN"]]); 

HabilitaCampos("OPCFINFINI","NOFINFINI",[[1,"MOTNEGFINI"]]); 
HabilitaCampos("OPCFINFINI","SIFINFINI",[[1,"OBSFINANFI"]]); 

/*function GenerarFichaCompleta(){

          if ($("#wfrm_formulario").valid()!=true){
   	alertmb("Por favor complete los campos obligatorios antes de generar la ficha técnica",0,1,"Aceptar");
	window.event.returnValue = false;
	asignar_valor('INFICHADEF','');
     	return false;
          }else{
  	return true;
          }
}


asignar_event( "onclick" ,"GenerarFichaCompleta()" , "AGENTE_2658");
*/

//para ocultar todaslas columnas de cant de dias de valores agregados
fil=obtener_valor( 'filMTZDET' );

   for(e=1;e<=fil;e++){

		if ($("#M"+e+"MTZDET14").attr('checked')==true){
			$("#M"+e+"MTZDET15").show();
		}else{	
			$("#M"+e+"MTZDET15").hide();
		}

		if ($("#M"+e+"MTZDET16").attr('checked')==true){
			$("#M"+e+"MTZDET17").show();
		}else{	
			$("#M"+e+"MTZDET17").hide();
		}

		if ($("#M"+e+"MTZDET18").attr('checked')==true){
			$("#M"+e+"MTZDET19").show();
			$("#M"+e+"MTZDET20").show();
		}else{	
			$("#M"+e+"MTZDET19").hide();
			$("#M"+e+"MTZDET20").hide();
		}	
	
   }
asignar_event_matriz( "onclick", "HabilitaPorCheck('MTZDET',14, 15)", "MTZDET", 14);
asignar_event_matriz( "onclick", "HabilitaPorCheck('MTZDET',16, 17)", "MTZDET", 16);
asignar_event_matriz( "onclick", "HabilitaPorCheck('MTZDET',18, 19)", "MTZDET", 18);
asignar_event_matriz( "onclick", "HabilitaPorCheck('MTZDET',18, 20)", "MTZDET", 18);


/*HabilitaCampos("OPCREUINI","SIREUINI",[[1,"FCHEFREUIN"], [2,"MOTCANINI"], [3,"Responsables"], [1,"SIANEXFICH"], [1,"AGENTE_2658"]]);

$("input[name='OPCREUINI']").click(function() { 
HabilitaCampos("OPCREUINI","SIREUINI",[[1,"FCHEFREUIN"], [2,"MOTCANINI"], [3,"Responsables"], [1,"SIANEXFICH"], [1,"AGENTE_2658"]]);
} );
*/

CamposObligatorios(
["DESANEXIMSS", "DESFCHEFREUIN","DESMOTCANINI","DESNBIMSS","DESNBNOM","DESNBENBANC","DESNBFACT","DESNBSC","DESOPCALTAANT",
"DESNBCORTO","DESGRUPO","DESRFC","DESRZN_SOCIAL","DESDIR_FISCAL","DESNBCOORDSC",
"M0MTZCNTCT1","M0MTZCNTCT5",
"DESFCH_1_DISP","DESFCH_INDUC","DESPORCHONOR","DESOPCFACTANT","DESOPCSOLGIN","DESANALRIESG",
"M0MTZDET4","M0MTZDET6","M0MTZDET7","M0MTZDET8","M0MTZDET9","M0MTZDET12","M0MTZDET13","M0MTZDET14","M0MTZDET15","M0MTZDET16","M0MTZDET17","M0MTZDET18","M0MTZDET19","M0MTZDET20",
"DESDESC_ACT", "DESPRIM_RIESG", "DESFINAN_FINIQ","DESHONOBROK", "DESBROKER", "DESGERENCOMER","DESFCHIMPLE", "DESFCHINDUCIN","DESOPCCARTPAT", "DESOPCENTCOMP", "DESOPCMANEXT", "DESOPCPERFORA", "DESOPCRPSITIO", "DESENVCONT", "DESATENJURID",
"M0MTZDET5", "M0MTZ2DET2", "M0MTZ2DET3", "M0MTZ2DET4","M0MTZ2DET7","M0MTZ2DET8","M0MTZ2DET11","M0MTZ2DET12","M0MTZ3DET2", "M0MTZ3DET3", "M0MTZ3DET4", "M0MTZ3DET5", "M0MTZ4DET2", "M0MTZ4DET3"]);

$("#wfrm_formulario").validate
({
 
  rules: {  
    SIANEXIMSS:{required: function(element) { return (obtener_valor('OPCREUINI',0)=='T');}},	
    FCHEFREUIN: { required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
                       },
    MOTCANINI: { required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "NOREUINI****AlterT" ;}
                       },
    NBIMSS: { required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
                       },
    NBNOM: { required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
                       },
    NBENBANC: { required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
                       },
    NBFACT: { required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
                       },
    NBSC: { required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
                       },
    NBCOORDSC: { required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
                       },
    OPCALTAANT: { required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
                       },
    NBCORTO: {required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
	 },
	GRUPO: {required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
					},
	RFC: {required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
	},
	RZN_SOCIAL: {required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
	},
	DIR_FISCAL: {required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
	},
	FCH_1_DISP: {required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
	},      
	FCH_INDUC: {required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
	},  
	ANALRIESG: {required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
	},  
	PORCHONOR: {required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
	},  
	OPCFACTANT: {required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
         	},
	OPCSOLGIN: {required: function(element)  { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
	},
	OPCRPSITIO: {required: function(element) {return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
	},
	OPCPERFORA: {required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
	},
	OPCMANEXT: {required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
	},
	OPCCARTPAT: {required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
	},
	ENVCONT: {required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
	},
	ATENJURID: {required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
	},
	FCHINDUCIN: {required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
	},
	FCHIMPLE: {required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
	},
	GERENCOMER: {required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
	},
	BROKER: {required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
	},
	HONOBROK: {required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
	},
	FINAN_FINIQ: {required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
	},
	PRIM_RIESG: {required: function(element) {return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
	},
	DESC_ACT: {required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
	},
	M1MTZCNTCT5: {email: true, required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
	},
	M1MTZCNTCT1: {required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
	}  
         
}
});





ValidarFilas("MTZDET",[
["MTZDET4",{required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}}],
["MTZDET5",{required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}}],
["MTZDET6",{required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}}],
["MTZDET7",{required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}}],
["MTZDET8",{required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}}],
["MTZDET9",{required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}}],
["MTZDET15",{required: function(element) { return $('::MTZDET14::').attr('checked') ==  'True' && finTareas('MTZ1TAR',3);}}],
["MTZDET17",{required: function(element) { return $('::MTZDET14::').attr('checked') ==  'True' && finTareas('MTZ1TAR',3);}}],
["MTZDET19",{required: function(element) { return $('::MTZDET14::').attr('checked') ==  'True' && finTareas('MTZ1TAR',3);}}],
["MTZDET20",{required: function(element) { return $('::MTZDET14::').attr('checked') ==  'True' && finTareas('MTZ1TAR',3);}}]
]);

ValidarFilas("MTZ2DET",[
["MTZ2DET2",{required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}}],
["MTZ2DET3",{required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}}],
["MTZ2DET4",{required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}}],
["MTZ2DET7",{required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}}],
["MTZ2DET8",{required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}}],
["MTZ2DET11",{required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}}],
["MTZ2DET12",{required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}}]
]);

ValidarFilas("MTZ3DET",[
["MTZ3DET2",{required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}}],
["MTZ3DET3",{required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}}],
["MTZ3DET4",{required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}}],
["MTZ3DET5",{required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}}]
]);

ValidarFilas("MTZ4DET",[
["MTZ4DET2",{required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}}],
["MTZ4DET3",{required: function(element) {return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}}]
]);


//FUNCIÓN VALIDAR ENVIO
function ValidaEnvio()
{  
          if ($("#wfrm_formulario").valid()!=true){
   alertmb("Por favor complete los campos obligatorios",0,1,"Aceptar");
     return false;
          }else{
	/*if (obtener_valor('INFICHADEF')=='' && $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ){
		alertmb("Debe generar la ficha técnica antes de enviar",0,1,"Aceptar");
		$("#AGENTE_2658").focus();
		return false;
	}else{
		return true;
	}*/
		return true;
 }
}

//EJECUTAR FUNCIÓN DE VALIDAR ENVIO 
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar" );
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar1" );


/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
