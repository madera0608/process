MatrizEstatica( 'MTZEMPF' );

if (obtener_valor('OPCTPOBAJA',1) =='T')
{
   MostrarCampo( 'PROPFIN');
}
else
{
  OcultarCampo( 'PROPFIN' );
 }

/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
