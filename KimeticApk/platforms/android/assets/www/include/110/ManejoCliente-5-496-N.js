if (obtener_valor('INCAMBIO')=='1'){
	MostrarCampo( 'CAMBIOPAGO' );  
	asignar_valor( "wl_baprobar" , "Eliminar solicitud");
	asignar_valor( "wl_baprobar1" , "Eliminar solicitud");
}
else{
	OcultarCampo('CAMBIOPAGO');
}


//FUNCI�N VALIDAR ENVIO
function ValidaEnvio()
{    
	if (obtener_valorM('CHEQUES',1,1)=='' && obtener_valor('INCAMBIO')!='1'){
		alertmb("Por favor cargue la informaci�n del formato",0,1,"Aceptar");
  		return false;
	}else{
		return true;
	}
}

//EJECUTAR FUNCI�N DE VALIDAR ENVIO 
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar" );
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar1" );


/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
