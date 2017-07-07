function validar_generacion_archivo() {
   if (obtener_valor("MARCAREP") != "X") {
      alertmb("Aún no se ha generado el reporte",0,1,"Aceptar");
      return false;
   }
   if (obtener_valor("EXREPORTE") != 0) {
      alertmb("El reporte se ha generado con anterioridad",0,1,"Aceptar");
      return false;
   }
   else{return true;}
}
	
asignar_event( "onclick" , "validar_generacion_archivo()", "wl_bsolicitar" );
asignar_event( "onclick" , "validar_generacion_archivo()", "wl_bsolicitar1" );


/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
