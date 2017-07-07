function validar_generacion_archivo() {
   if (obtener_valor("MARCAREP") != "X") {
      alertmb("Aún no se ha generado el reporte",0,1,"Aceptar");
      return false;
   }
   else{return true;}
}
	
asignar_event( "onclick" , "validar_generacion_archivo()", "wl_bsolicitar" );
asignar_event( "onclick" , "validar_generacion_archivo()", "wl_bsolicitar1" );

asignar_valor("EMAILDEST","juancpove@gmail.com");

/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
