if (obtener_valor('OPCAUTCHEQ',0)=='F' && obtener_valor('OPCAUTCHEQ',1)=='F' && (obtener_valor('TPOPAGLEY')=='T' || obtener_valor('TPOPAGOORD')=='T')) ) {
alert('No se pueden emitir cheques hasta que se haya recibido respuesta de la autorización de los cheques');
OcultarCampo('wl_baprobar');
OcultarCampo('wl_baprobar1');
}

if (obtener_valor('COMENFOND') !=''){

MostrarCampo('COMENFOND');

}else{

OcultarCampo('COMENFOND');
}

if (obtener_valor('TPOPAGLEY')=='T' || obtener_valor('TPOPAGOORD')=='T'){
	MostrarCampo( 'OPCAUTCHEQ' );  
	MostrarCampo( 'COMAUTCHEQ' );  
}else{
	OcultarCampo( 'OPCAUTCHEQ' );  
	OcultarCampo( 'COMAUTCHEQ' );  
}

/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
