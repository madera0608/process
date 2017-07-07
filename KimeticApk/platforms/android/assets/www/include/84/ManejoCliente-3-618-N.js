if (obtener_valor('M1CHEQSL3')=='' && obtener_valor('OPCAUTCHEQ',1)=='T' && (obtener_valor('TPOPAGLEY')=='T'  || obtener_valor("TPOPAGOORD")=='T')){
alert('Para enviar la solicitud debe cargar los cheques');
OcultarCampo('wl_baprobar');
OcultarCampo('wl_baprobar1');
}

//FUNCIÓN VALIDAR ENVIO
function ValidaEnvio()
{  	
		if (obtener_valor('INCHEQUES')==''  &&  (obtener_valor( "TPOPAGLEY")=='T' || obtener_valor( "TPOPAGOORD")=='T')){
			alertmb("Debe generar el listado de cheques por firmar",0,1,"Aceptar");
			$("#AGENTE_2793").focus();
			return false;
		}
			return true;
	
}

//EJECUTAR FUNCIÓN DE VALIDAR ENVIO	
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar" );
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar1" );
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
