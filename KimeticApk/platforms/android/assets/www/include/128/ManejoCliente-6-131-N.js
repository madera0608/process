OcultarCampo( "wl_bobjetar", 2 );

asignar_valor('wl_baprobar', 'Enviar');
asignar_valor('wl_baprobar1', 'Enviar');

MatrizEstatica( 'MTZ4BIT');

DeshabilitarCheck('MTZ4BIT');

function ValidarEnvio(){

TareasCompletas('MTZ4BIT','FIN_BIT4');
MarcarCheck('MTZ4BIT');

return true;
}

asignar_event( 'onclick' , 'ValidarEnvio()' ,'wl_baprobar');
asignar_event( 'onclick' , 'ValidarEnvio()' ,'wl_baprobar1');
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
