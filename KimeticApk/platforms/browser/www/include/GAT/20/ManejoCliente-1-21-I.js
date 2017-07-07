//Se cambian los nombres de los botones de acción
asignar_valor( "wl_bsolicitar" , "Eliminar sesiones seleccionadas");
asignar_valor( "wl_bsolicitar1", "Eliminar sesiones seleccionadas");

//Se ocultan objetos
OcultarCampo( 'wl_bguardar', 2);
OcultarCampo( "MT_ELIM" );
OcultarCampo( "MT_SESIO", 3, 6);
OcultarCampo( "MATSEMT_SESIO", 2);
OcultarCampo( "MATNVMT_SESIO", 2);
OcultarCampo( "MATBOMT_SESIO", 2);

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
function SeleccionarSesiones(){
  SeleccionaFila("MT_SESIO");
  return true;
};
asignar_event( "onclick" , "SeleccionarSesiones()" , "CHK_TODOS" );

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
function MoverSesiones(){
  var aFila;
  var aFilas;
  var aFilasNuevas;
  var aChecked;
  var aForzar;
  
  if (alertmb("¿Desea eliminar las sesiones seleccionadas?", 1, 2, "Si", "No")==1){
      aFilas  = obtener_valor("filMT_SESIO");
      aForzar = obtener_valor("CHK_FORZAR");
      for(aFila = 1; aFila <= aFilas; aFila ++){
          aChecked = obtener_valor("CHKBOXMATMT_SESIO" + aFila);
          if (aChecked=="T"){
              if (obtener_valorM("MT_ELIM", 1, 1) != ''){          
                  IngresarFila("MT_ELIM","TTTTFT");
                }
              aFilasNuevas = obtener_valor("filMT_ELIM");
              asignar_valorM("MT_ELIM", obtener_valorM("MT_SESIO", aFila, 1), aFilasNuevas, 1);
              asignar_valorM("MT_ELIM", obtener_valorM("MT_SESIO", aFila, 2), aFilasNuevas, 2);
            }            
        }
      return true;  
    }
  else{
      return false;
    }
};
asignar_event( "onclick" , "MoverSesiones()"       , "wl_bsolicitar" );
asignar_event( "onclick" , "MoverSesiones()"       , "wl_bsolicitar1" );
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
