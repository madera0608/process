NroFilaM('MTZNOTF');

asignar_event( "onclick" , "NroFilaM('MTZNOTF')" , "MATNVMTZNOTF");



function PagoDeposito(){
	
	if (obtener_valor('OPCDEPF')=='T'){
		MostrarCampo("FCHNOTIFF");
		MostrarCampo("FCHPAGOF");
		MostrarCampo("MONTPAGOF");
		MostrarCampo("SIANEXDEPF");
		MostrarCampo("EMPRECEPF");
		MostrarCampo("MTZCOMPF");
	}else{
		OcultarCampo("FCHNOTIFF");
		OcultarCampo("FCHPAGOF");
		OcultarCampo("MONTPAGOF");
		OcultarCampo("SIANEXDEPF");
		OcultarCampo("EMPRECEPF");
		OcultarCampo("MTZCOMPF");
	}
	return true;
	
}

function PagoProvision(){
	
	if (obtener_valor('OPCPROVF')=='T'){
		MostrarCampo("MONTPROVF");
		MostrarCampo("MTOPRODISF");
		MostrarCampo("MTOPROFDIS");
		MostrarCampo("PROV_OPERF");
		MostrarCampo("PROV_FINIF");
	}else{
		OcultarCampo("MONTPROVF");
		OcultarCampo("MTOPRODISF");
		OcultarCampo("MTOPROFDIS");
		OcultarCampo("PROV_OPERF");
		OcultarCampo("PROV_FINIF");
		asignar_valor("MONTPROVF", "");

	}
	return true;
	
}


PagoDeposito();
PagoProvision();

RegistrarFormula(":MTZNOTF[{+},3]:","MONTNOTF",1);

$("#M1MTZNOTF3").change();



//FUNCIÓN VALIDAR ENVIO
function ValidaEnvio()
{  

	if ((obtenerFloat(obtener_valor('MTOPAGVALF'), Formatodec) < obtenerFloat(obtener_valor('MONTAFIN'), Formatodec)) || (obtener_valor('OPCDEPF')=='T' && obtener_valor('TODOSVALF')!=1)){
		alertmb("No puede enviar hasta que todos los pagos sean válidos",0,1,"Aceptar");
		return false;
	} else{
		return true;		
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
