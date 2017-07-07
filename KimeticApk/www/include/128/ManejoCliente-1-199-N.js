
HabilitaCampos("OPCINDUC","SIINDUC",[[1,"OPCALTANT"]]); 
HabilitaCampos("OPCALTANT","SIALTANT",[[1,"OPCAUTO"]]); 
MatrizEstatica( 'MTZ6TAR');
DeshabilitarCheck('MTZ6TAR',3);

asignar_event_matriz( "onchange" ,"validarPrecedencia('MTZ6TAR')" , "MTZ6TAR", 3);
asignar_event_matriz( "onchange" ,"validarUncheck('MTZ6TAR')" , "MTZ6TAR", 3);


/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
