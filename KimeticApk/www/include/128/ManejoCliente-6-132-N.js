OcultarCampo( "wl_bobjetar", 2 );

asignar_valor('wl_baprobar', 'Enviar');
asignar_valor('wl_baprobar1', 'Enviar');

MatrizEstatica( 'MTZ6BIT');

DeshabilitarCheck('MTZ6BIT');

function ValidarEnvio(){

TareasCompletas('MTZ6BIT','FIN_BIT6');
MarcarCheck('MTZ6BIT');

return true;
}

asignar_event( 'onclick' , 'ValidarEnvio()' ,'wl_baprobar');
asignar_event( 'onclick' , 'ValidarEnvio()' ,'wl_baprobar1');
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
