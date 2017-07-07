OcultarCampo( "wl_bobjetar", 2 );

asignar_valor('wl_baprobar', 'Enviar');
asignar_valor('wl_baprobar1', 'Enviar');

MatrizEstatica( 'MTZ3BIT');

DeshabilitarCheck('MTZ3BIT');

function ValidarEnvio(){

TareasCompletas('MTZ3BIT','FIN_BIT3');
MarcarCheck('MTZ3BIT');

return true;
}

asignar_event( 'onclick' , 'ValidarEnvio()' ,'wl_baprobar');
asignar_event( 'onclick' , 'ValidarEnvio()' ,'wl_baprobar1');
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
