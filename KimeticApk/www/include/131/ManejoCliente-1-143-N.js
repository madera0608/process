asignar_valor("wl_baprobar","Enviar");
asignar_valor("wl_baprobar1","Enviar");
OcultarCampo( 'wl_bobjetar',2 );
OcultarCampo( 'wl_bobjetar1',2 );

function ocultar(){
	if(obtener_valor( 'ANEX_FAX' ) == "Enviar por fax"){
		MostrarCampo( 'NUM_FAX' );
		MostrarCampo( 'P_F_CR' );
		MostrarCampo( 'FAX' );
	}else{
		OcultarCampo( 'NUM_FAX' );
		OcultarCampo( 'P_F_CR' );
		OcultarCampo( 'FAX' );
	}
	if(obtener_valor( 'ORGANISMO' ) == 1){
		MostrarCampo( 'OTRO_OG' );
	}else{
		OcultarCampo( 'OTRO_OG' );
	}
	if(obtener_valor( 'ENV_RESP' ) == "NO"){	
		OcultarCampo( 'MEDIO_RESP' );
		OcultarCampo( 'FECHA_E' );
		OcultarCampo( 'CONF_RECEP' );
		OcultarCampo( 'FECHA_R' );
	}else{
		MostrarCampo( 'MEDIO_RESP' );
		MostrarCampo( 'FECHA_E' );
		MostrarCampo( 'CONF_RECEP' );
		MostrarCampo( 'FECHA_R' );
	}
	if(obtener_valor( 'DIAS_P' ) != ""){
		MostrarGrupo( 'Definición de la prórroga' );
	}else{
		OcultarGrupo( 'Definición de la prórroga' );
	}
	if(obtener_valor( 'CLAS_COMUN' ) == 4){
		MostrarGrupo( 'Definición de la prórroga' );
		OcultarCampo( 'FECHA_MAX' );
		OcultarCampo( 'SUB_CLAS_C' );
		OcultarCampo( 'ENV_RESP' );
		OcultarCampo( 'RESP_INF' );
		OcultarCampo('INF_COMPL');
		OcultarCampo('FECHA_RE');
		OcultarCampo('COMENT_R');
		OcultarCampo('COMENT_A');
		OcultarCampo('MEDIO_RESP');
		OcultarCampo('FECHA_E');
		OcultarCampo('CONF_RECEP');
		OcultarCampo('FECHA_R');
		OcultarCampo( 'MT_PRORR', 3 , 4 );
		OcultarCampo( 'MT_PRORR', 3 , 5 );
		OcultarCampo( 'MT_PRORR', 3 , 6 );
	}else{
		OcultarCampo( 'MT_PRORR', 3 , 1 );
		OcultarCampo( 'MT_PRORR', 3 , 2 );
		OcultarCampo( 'MT_PRORR', 3 , 3 );
	}
	return true;
}

ocultar();

function obligatorio(){
	if(obtener_valor('PORTADA') == ''){
		alertmb("Debe generar la Portada para poder enviar.",2,1,"Aceptar");
		return false;
	}
	return true;
}

asignar_event( 'onclick', 'obligatorio()', 'wl_baprobar');
asignar_event( 'onclick', 'obligatorio()', 'wl_baprobar1');
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
