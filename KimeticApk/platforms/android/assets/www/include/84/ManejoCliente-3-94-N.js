CamposObligatorios(["DESOPCFORMPAG"]);

//FUNCIÓN VALIDAR ENVIO
function ValidaEnvio()
{
	if (obtener_valor('PAGTRANSF')=="F" && obtener_valor('PAGCHEQU')=="F"){
		alertmb("Por favor indique la forma de pago",0,1,"Aceptar");
		return false;
	}else
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
