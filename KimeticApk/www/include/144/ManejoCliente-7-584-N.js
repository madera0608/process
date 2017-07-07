NroFilaM('MTZNOT');

asignar_event( "onclick" , "NroFilaM('MTZNOT')" , "MATNVMTZNOT");

RegistrarFormula(":MTZNOT[{+},3]:","MONTNOT",1);

$("#M1MTZNOT3").change();

//FUNCIÓN VALIDAR ENVIO
function ValidaEnvio()
{  
                   if ( obtenerFloat(obtener_valor('MONTNOT'), Formatodec).toFixed(2)!=obtenerFloat(obtener_valor('MONTPROV'), Formatodec).toFixed(2) )
                         {  alertmb("El monto de las nota(s) de crédito debe ser igual al monto de la provisión usada para el pago",0,1,"Aceptar"); 
                             return false;
                          }
                           else{
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
