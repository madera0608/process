//FUNCIÓN VALIDAR ENVIO
function ValidaEnvio()
{  
if (obtener_valor('TPOPAGOTRA')!="T" && obtener_valor('TPOPAGOORD')!="T" && obtener_valor('TPOPAGLEY')!="T"){
	alertmb("Por favor seleccione la nueva forma de pago",0,1,"Aceptar");
	return false;
}
else
	return true;
								
}

//EJECUTAR FUNCIÓN DE VALIDAR ENVIO	
asignar_event( "onclick" , "ValidaEnvio()", "wl_bsolicitar" );
asignar_event( "onclick" , "ValidaEnvio()", "wl_bsolicitar1" );
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
