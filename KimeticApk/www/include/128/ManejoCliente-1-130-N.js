
MatrizEstatica( 'MTZ2TAR');
DeshabilitarCheck('MTZ2TAR',3);
asignar_event_matriz( "onchange" ,"validarPrecedencia('MTZ2TAR')" , "MTZ2TAR", 3);
asignar_event_matriz( "onchange" ,"validarUncheck('MTZ2TAR')" , "MTZ2TAR", 3);


HabilitaCampos("OPCINDUC","SIINDUC",[[1,"OPCALTANT"]]); 
HabilitaCampos("OPCALTANT","SIALTANT",[[1,"OPCAUTO"]]);
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
