PagoDeposito();
PagoFinanciamiento();

function PagoDeposito(){
	
	if (obtener_valor('OPCDEPOSIT')=='T'){
		MostrarCampo("FCHNOTIF");
		MostrarCampo("FCHPAGO");
		MostrarCampo("MONTPAGO");
		MostrarCampo("SIANEXDEP");
		MostrarCampo("EMPRECEP");
		MostrarCampo("MTZCOMP");
	}else{
		OcultarCampo("FCHNOTIF");
		OcultarCampo("FCHPAGO");
		OcultarCampo("MONTPAGO");
		OcultarCampo("SIANEXDEP");
		OcultarCampo("EMPRECEP");
		OcultarCampo("MTZCOMP");
		asignar_valor( "MONTPAGO" , "");
	}
	return true;
	
}


function PagoFinanciamiento(){
	if (obtener_valor('OPCFINANC')=='T'){
		MostrarGrupo('DATOS DEL FINANCIAMIENTO');

	}else{
		OcultarGrupo('DATOS DEL FINANCIAMIENTO');

	}
	return true;
}


//FUNCIÓN VALIDAR ENVIO
function ValidaEnvio()
{  
	if (obtener_valor('VALPEND') > 0 || (!(obtenerFloat(obtener_valor('MTOPAGVAL'), Formatodec) >=  (obtenerFloat(obtener_valor('MTOPAGAR'), Formatodec) - obtenerFloat(obtener_valor('MONTUTTOT'), Formatodec)) && ((obtener_valor('OPCFINANC')=='T' && obtener_valor('OPAPRFIN',0)=='T' && obtener_valor('OPCDEPOSIT')=='F')|| (obtener_valor('OPCDEPOSIT')=='T' && obtener_valor('TODOSVAL')==1 && obtener_valor('OPCFINANC')=='F') || (obtener_valor('OPCDEPOSIT')=='T' && obtener_valor('TODOSVAL')==1 && obtener_valor('OPCFINANC')=='T' && obtener_valor('OPAPRFIN',0)=='T'))))){
		alertmb("No puede enviar hasta que los pagos sean válidos o el financiamiento aprobado",0,1,"Aceptar");
		return false;
    	}else{
		if (obtenerFloat(obtener_valor('EXCEDENTE'), Formatodec) >0  && obtener_valor('PROVPEND') >0 ){
			alertmb("No puede enviar hasta que se registre la provisión pendiente por enviar",0,1,"Aceptar");
			return false;
    		}else{
			return true;
		}
	}	
}

//EJECUTAR FUNCIÓN DE VALIDAR ENVIO	
asignar_event( "onclick" , "ValidaEnvio() ", "wl_baprobar" );
asignar_event( "onclick" , "ValidaEnvio() ", "wl_baprobar1" );
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
