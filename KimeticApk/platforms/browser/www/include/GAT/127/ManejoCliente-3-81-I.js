OcultarCampo('wl_bguardar', 2);
asignar_valor( 'wl_bsolicitar' , 'Guardar caracteristica' );
asignar_valor( 'wl_bsolicitar1' , 'Guardar caracteristica' );
asignar_valor( 'MATNVRECARACT' , 'Nuevo recaudo');
asignar_valor( 'MATBORECARACT' , 'Borrar  recaudo');

function HabNombre()
{
  if (obtener_valor( 'CARACMOD' )=='0') 
    {
      MostrarCampo( 'NBCARAC');
    }
  else
    {
      OcultarCampo( 'NBCARAC');
      asignar_valor( 'NBCARAC', obtener_valor( 'CARACMOD',2 ) );
    }
  return true;
}

asignar_event('onchange' , 'HabNombre()' , 'CARACMOD' );
HabNombre();
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
