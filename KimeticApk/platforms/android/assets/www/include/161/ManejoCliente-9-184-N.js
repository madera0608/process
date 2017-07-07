function EnviarIMSS(){

alert(obtener_valor('OPCAPRALT',0));
alert(obtener_valor('OPCINDUC',0) );

	if(obtener_valor('OPCAPRALT',0)=='T' || (obtener_valor('OPCINDUC',0)=='T' && obtener_valor('OPCAPRALT',0)!='T' )){

		return true;
	}else{
		alert('No puede continuar hasta que se autoricen las altas antes de inducción  o se haga la inducción');
			OcultarCampo('wl_baprobar');
OcultarCampo('wl_baprobar1');
		return false;
	}


}

EnviarIMSS();
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
