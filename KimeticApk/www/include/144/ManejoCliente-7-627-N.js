if (obtener_valor('PAGOLEY')=='T' || obtener_valor('PAGOCHEQUE')=='T' || obtener_valor("PAGOCERTIF")=='T'  ){
	MostrarGrupo( 'DATOS DE CHEQUES' );  
                $("#AGENTE_2798").show(); 
}
else{
	OcultarGrupo( 'DATOS DE CHEQUES' ); 
                $("#AGENTE_2798").hide(); 
}

//FUNCIÓN VALIDAR ENVIO
function ValidaEnvio()
{  	
		if (obtener_valor('INCHEQUES')=='' && (obtener_valor('PAGOLEY')=='T' || obtener_valor('PAGOCHEQUE')=='T' || obtener_valor("PAGOCERTIF")=='T' )) {
			alertmb("Debe generar el listado de cheques por firmar",0,1,"Aceptar");
			$("#AGENTE_2798").focus();
			return false;
		}
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
