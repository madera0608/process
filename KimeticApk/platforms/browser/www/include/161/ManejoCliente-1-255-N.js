
function EnviaComprobantes(){

	if(obtener_valor('DOC_IMSS') !='0'){
		alert('No puede enviar los comprobantes hasta que se hayan hecho todas las altas de imss para este cliente');
		OcultarCampo('wl_baprobar');
		OcultarCampo('wl_baprobar1');
		return false;
	}else{
		return true;
	}

}

EnviaComprobantes();
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
