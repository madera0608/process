
function EnviaComprobantes(){

	if(obtener_valor('DOC_IMSS') !='0'){
		return false;
	}else{
		return true;
	}

}

function PendientesVa(){

	if(obtener_valor('EXISTENVA') !='0'){
		return false;
	}else{
		return true;
	}

}



//FUNCIÓN VALIDAR ENVIO
function ValidaEnvio()
{  
          if (obtener_valor('OPCPREPPAQ', 0) =='T'  && EnviaComprobantes()!=true){
		
   		alertmb("No puede culminar esta actividad hasta que se hayan hecho todas las altas de imss para este cliente",0,1,"Aceptar");
    		 return false;
	
          }else{
	if (obtener_valor('OPCPREPPAQ', 0) =='T'  && PendientesVa()!=true){
		
   		alertmb("No puede culminar esta actividad hasta que hayan finalizado todas las actividades de valores agregados pendientes",0,1,"Aceptar");
    		 return false;
         	 }else{
		return true;
	}
         }
}

asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar" );
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar1" );
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
