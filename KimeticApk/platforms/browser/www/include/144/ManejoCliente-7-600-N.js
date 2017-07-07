

function habApoyo()
{
  if (obtener_valor("OPCTPOBAJA",1)=='T')
    {
         MostrarCampo("SIAPOYRL");
         MostrarCampo("COMSOLAPOY");
    }
  else
   {
         OcultarCampo("SIAPOYRL");
         OcultarCampo("COMSOLAPOY");
   }

  return true;
}
habApoyo();


if (obtener_valor('OPCTPOBAJA',1) =='T')
{
   MostrarCampo( 'PROPFIN');
}
else
{
  OcultarCampo( 'PROPFIN' );
 }

if (obtener_valor('PAGOLEY') =='T')
  MostrarGrupo( 'DATOS DE CHEQUES SIN LEYENDA' );
else
  OcultarGrupo( 'DATOS DE CHEQUES SIN LEYENDA' );

//FUNCIÓN VALIDAR ENVIO
function ValidaEnvio()
{  
      asignar_valor( "PSTORESPAG" , obtener_valor("RESPRL" ));
	return true;
}

//EJECUTAR FUNCIÓN DE VALIDAR ENVIO	
asignar_event( "onclick" , "ValidaEnvio() ", "wl_baprobar" );
asignar_event( "onclick" , "ValidaEnvio() ", "wl_baprobar1" );

$("#RESPRL").change(function()  {   asignar_valor( "PSTORESPAG" , obtener_valor("RESPRL" )); } );
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
