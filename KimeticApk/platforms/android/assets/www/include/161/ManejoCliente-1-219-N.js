MatrizEstatica( 'MTZ7TARE');
DeshabilitarCheck('MTZ7TARE',3);

asignar_event_matriz( "onchange" ,"validarPrecedencia('MTZ7TARE')" , "MTZ7TARE", 3);
asignar_event_matriz( "onchange" ,"validarUncheck('MTZ7TARE')" , "MTZ7TARE", 3);

RegistrarFormula(":MTZDET[{+},7]:","CNTEMP",1);

$("#M1MTZDET7").change();
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
