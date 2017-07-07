
MatrizEstatica( 'MTZ1TARE');
DeshabilitarCheck('MTZ1TARE',3);
asignar_event_matriz( "onchange" ,"validarPrecedencia('MTZ1TARE')" , "MTZ1TARE", 3);
asignar_event_matriz( "onchange" ,"validarUncheck('MTZ1TARE')" , "MTZ1TARE", 3);




RegistrarFormula(":MTZDET[{+},7]:","CNTEMP",1);

$("#M1MTZDET7").change();
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
