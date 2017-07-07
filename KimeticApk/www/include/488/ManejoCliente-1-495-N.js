asignar_valor("wl_baprobar","Enviar");
asignar_valor("wl_baprobar1","Enviar");

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
	if(obtener_valor( 'DIAS_P' ) != ""){
		MostrarGrupo( 'Definición de la prórroga' );
	}else{
		OcultarGrupo( 'Definición de la prórroga' );
	}
	return true;
}

ocultar();
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
