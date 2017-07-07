if (obtener_valor('INCAMBIO')=='1'){
	MostrarCampo( 'CAMBIOPAGO' );  
	asignar_valor( "wl_baprobar" , "Eliminar solicitud");
	asignar_valor( "wl_baprobar1" , "Eliminar solicitud");
}
else{
	OcultarCampo('CAMBIOPAGO');
}

/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
