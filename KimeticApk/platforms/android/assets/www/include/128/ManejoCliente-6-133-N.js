OcultarCampo( "wl_bobjetar", 2 );

asignar_valor('wl_baprobar', 'Enviar');
asignar_valor('wl_baprobar1', 'Enviar');

MatrizEstatica( 'MTZ5BIT');

DeshabilitarCheck('MTZ5BIT');

function ValidarEnvio(){

TareasCompletas('MTZ5BIT','FIN_BIT5');
MarcarCheck('MTZ5BIT');

return true;
}

asignar_event( 'onclick' , 'ValidarEnvio()' ,'wl_baprobar');
asignar_event( 'onclick' , 'ValidarEnvio()' ,'wl_baprobar1');
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
