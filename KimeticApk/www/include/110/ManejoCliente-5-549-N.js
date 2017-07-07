NroFilaM('MTZNOT');

asignar_event( "onclick" , "NroFilaM('MTZNOT')" , "MATNVMTZNOT");



RegistrarFormula(":MTZNOT[{+},3]:","MONTNOT",1);

$("#M1MTZNOT3").change();



//FUNCIÓN VALIDAR ENVIO
function ValidaEnvio()
{  


	if (!(obtenerFloat(obtener_valor('MTOPAGVAL'), Formatodec) >= obtenerFloat(obtener_valor('MONTPREF'), Formatodec)  && ((obtener_valor('OPCFINANC')=='T' && obtener_valor('OPAPRFIN',0)=='T' && obtener_valor('OPCDEPOSIT')=='F')|| (obtener_valor('OPCDEPOSIT')=='T' && obtener_valor('TODOSVAL')==1 && obtener_valor('OPCFINANC')=='F') || (obtener_valor('OPCDEPOSIT')=='T' && obtener_valor('TODOSVAL')==1 && obtener_valor('OPCFINANC')=='T' && obtener_valor('OPAPRFIN',0)=='T')) || (obtener_valor('OPCPROV')=='T' && obtener_valor('OPCFINANC')=='F' && obtener_valor('OPCDEPOSIT')=='F') )){
		alertmb("No puede enviar hasta que los pagos sean válidos o el financiamiento aprobado",0,1,"Aceptar");
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
