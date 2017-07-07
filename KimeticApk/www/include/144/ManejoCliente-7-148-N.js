if (obtener_valor('PAGOLEY')=='T'){
	MostrarGrupo( 'DATOS DE CHEQUES SIN LEYENDA' );  
}
else{
	OcultarGrupo( 'DATOS DE CHEQUES SIN LEYENDA' );  
}


function ValidaEnvio()
{  
	if (obtener_valor('OPCFIRMA',0)=='F' && obtener_valor('TPOPAGLEY')=='T'){
		alertmb("No puede avanzar esta actividad hasta que se hayan firmado los cheques sin leyenda",0,1,"Aceptar");
		return false;
	}else{
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
