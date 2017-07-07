if (obtenerFloat(obtener_valor('MTOPROVDIS'), Formatodec)<=0)
    {
     asignar_valor('OPCPROV','F');
     OcultarCampo('OPCPROV',6);
}

if (obtener_valor('M1MTZCOMV1')!=''){
	MostrarCampo("MTZCOMV");
	MostrarCampo("MONTPAVAL");
}else{
	OcultarCampo("MTZCOMV");
	OcultarCampo("MONTPAVAL");
}


if (obtener_valor('OPCTPOBAJA',1) =='T')
{
   MostrarCampo( 'PROPFIN');
}
else
{
  OcultarCampo( 'PROPFIN' );
 }


if (obtener_valor('PAGOLEY')=='T'){
	MostrarGrupo( 'DATOS DE CHEQUES SIN LEYENDA' );  
}
else{
	OcultarGrupo( 'DATOS DE CHEQUES SIN LEYENDA' );  
}

function ValidaEnvio()
{
		if ( !(obtenerFloat(obtener_valor('MTOPAGVAL'), Formatodec) >= obtenerFloat(obtener_valor('MONTPREF'), Formatodec)  && ((obtener_valor('OPCFINANC')=='T' && obtener_valor('OPAPRFIN',0)=='T' && obtener_valor('OPCDEPOSIT')=='F')|| (obtener_valor('OPCDEPOSIT')=='T' && obtener_valor('TODOSVAL')==1 && obtener_valor('OPCFINANC')=='F') || (obtener_valor('OPCDEPOSIT')=='T' && obtener_valor('TODOSVAL')==1 && obtener_valor('OPCFINANC')=='T' && obtener_valor('OPAPRFIN',0)=='T')) || (obtener_valor('OPCPROV')=='T' && obtener_valor('OPCFINANC')=='F' && obtener_valor('OPCDEPOSIT')=='F') )){
			alertmb("No puede enviar hasta que los pagos sean válidos o el financiamiento aprobado",0,1,"Aceptar");
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
