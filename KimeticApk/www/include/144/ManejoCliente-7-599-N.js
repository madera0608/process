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


/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
