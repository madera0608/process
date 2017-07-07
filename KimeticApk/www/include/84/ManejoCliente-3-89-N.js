if (obtener_valor('TPOPAGLEY')=='T' || obtener_valor('TPOPAGOORD')=='T'){
	MostrarCampo( 'OPCAUTCHEQ' );  
	MostrarCampo( 'CHEQSL' );  
	MostrarCampo( 'OPCFIRMA' );   
	MostrarCampo( 'COMAUTCHEQ' ); 
}
else{
	OcultarCampo( 'OPCAUTCHEQ' );
	OcultarCampo( 'CHEQSL' );
	OcultarCampo( 'OPCFIRMA' );
	OcultarCampo( 'COMAUTCHEQ' );
}


function ValidaEnvio()
{  
	if (obtener_valor('OPCAUTCHEQ',0)=='F' && (obtener_valor('TPOPAGLEY')=='T' || obtener_valor('TPOPAGOORD')=='T')){
		alertmb("No puede avanzar esta actividad hasta que se hayan firmado los cheques",0,1,"Aceptar");
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
