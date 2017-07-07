OcultarCampo( "wl_bobjetar", 2 );

asignar_valor('wl_baprobar', 'Enviar');
asignar_valor('wl_baprobar1', 'Enviar');

MatrizEstatica( 'MTZ2BIT');

DeshabilitarCheck('MTZ2BIT');


function ValidarEnvio(){

TareasCompletas('MTZ2BIT','FIN_BIT2');
MarcarCheck('MTZ2BIT');

return true;
}


asignar_event( 'onclick' , 'ValidarEnvio()' ,'wl_baprobar');
asignar_event( 'onclick' , 'ValidarEnvio()' ,'wl_baprobar1');
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
