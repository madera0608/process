
HabilitaCampos("OPCINDUC","SIINDUC",[[1,"OPCALTANT"]]); 
HabilitaCampos("OPCALTANT","SIALTANT",[[1,"OPCAUTO"]]); 
MatrizEstatica( 'MTZ7TAR');
DeshabilitarCheck('MTZ7TAR',3);

asignar_event_matriz( "onchange" ,"validarPrecedencia('MTZ7TAR')" , "MTZ7TAR", 3);
asignar_event_matriz( "onchange" ,"validarUncheck('MTZ7TAR')" , "MTZ7TAR", 3);


/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
