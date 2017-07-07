MatrizEstatica( 'MTZEMPC');
MatrizEstatica( 'MTZ1TAR');
DeshabilitarCheck('MTZ1TAR',3);

asignar_event_matriz( "onchange" ,"validarPrecedencia('MTZ1TAR')" , "MTZ1TAR", 3);
asignar_event_matriz( "onchange" ,"validarUncheck('MTZ1TAR')" , "MTZ1TAR", 3);



/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
