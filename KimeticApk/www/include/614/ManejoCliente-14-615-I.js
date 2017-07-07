MatrizEstatica( 'CHEQUES');

if (obtener_valor('NUMCHEQ')==0){
	OcultarCampo('CHEQUES');
	OcultarCampo('AGENTE_2791');
}
else
	OcultarCampo('MENSAJE');

CamposObligatorios(
["M0CHEQUES7","M0CHEQUES8"]);

$("#wfrm_formulario").validate
({
 
  rules: {  
    	MCHEQUES7:{required: function(element) { return obtener_valor('NUMCHEQ')>0;}},
    	MCHEQUES8: { required: function(element) { return obtener_valor('NUMCHEQ')>0;}}
}
});

ValidarFilas("CHEQUES",[
["CHEQUES7",{required: function(element) { return obtener_valor('NUMCHEQ')>0;}}],
["CHEQUES8",{required: function(element) { return obtener_valor('NUMCHEQ')>0;}}]
]);

//FUNCIÓN VALIDAR ENVIO
function ValidaEnvio()
{  	if ($("#wfrm_formulario").valid()!=true){
		alertmb("Por favor complete los campos obligatorios",0,1,"Aceptar");
		asignar_valor('INCHEQUES','');
		return false;
	}else{
		if (obtener_valor('INCHEQUES')=='' && obtener_valor('NUMCHEQ')>0){
			alertmb("Debe generar el listado de cheques por firmar",0,1,"Aceptar");
			$("#AGENTE_2791").focus();
			return false;
		}else{
			return true;
		}
	}
}

//EJECUTAR FUNCIÓN DE VALIDAR ENVIO	
asignar_event( "onclick" , "ValidaEnvio()", "wl_bsolicitar" );
asignar_event( "onclick" , "ValidaEnvio()", "wl_bsolicitar1" );


function GenerarFichaCompleta(){
          if ($("#wfrm_formulario").valid()!=true){
   	alertmb("Por favor complete los campos obligatorios antes de generar el listado de cheques",0,1,"Aceptar");
	window.event.returnValue = false;
	asignar_valor('INCHEQUES','');
	event.preventDefault(); 
     	return false;
          }else{
  	return true;
          }
}

asignar_event( "onclick" ,"GenerarFichaCompleta()" , "AGENTE_2791");
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
