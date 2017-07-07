MatrizEstatica( 'MTZDET' );


function ValidaEnvio(){
	asignar_valor('IN_EMP' , 'T');
	if (obtener_valor('OPCACEPNUE',0)=='T'){

		fil=obtener_valor( 'filMTZDET');

   		for(e=1;e<=fil;e++){
   			pag=obtener_valorM('MTZDET' , e , 11);
			asignar_valorM('MTZDET' , pag, e , 9);
  		}
   		fact=obtener_valor("NVEMPFACT");
		asignar_valor( "EMPFACT" ,fact); 
	}		
	return true;
}
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar1" );
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar" );
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
