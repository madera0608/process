
HabilitaCampos("OPCINDUC","SIINDUC",[[1,"OPCALTANT"]]); 
HabilitaCampos("OPCALTANT","SIALTANT",[[1,"OPCAUTO"]]); 
MatrizEstatica( 'MTZ5TAR');

DeshabilitarCheck('MTZ5TAR',3);

asignar_event_matriz( "onchange" ,"validarPrecedencia('MTZ5TAR')" , "MTZ5TAR", 3);
asignar_event_matriz( "onchange" ,"validarUncheck('MTZ5TAR')" , "MTZ5TAR", 3);


/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
