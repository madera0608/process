
HabilitaCampos("OPCINDUC","SIINDUC",[[1,"OPCALTANT"]]); 
HabilitaCampos("OPCALTANT","SIALTANT",[[1,"OPCAUTO"]]); 
MatrizEstatica( 'MTZ4TAR');
DeshabilitarCheck('MTZ4TAR',3);

asignar_event_matriz( "onchange" ,"validarPrecedencia('MTZ4TAR')" , "MTZ4TAR", 3);
asignar_event_matriz( "onchange" ,"validarUncheck('MTZ4TAR')" , "MTZ4TAR", 3);


/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
