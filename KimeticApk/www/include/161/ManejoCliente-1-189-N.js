MatrizEstatica( 'MTZ5TARE');
DeshabilitarCheck('MTZ5TARE',3);
asignar_event_matriz( "onchange" ,"validarPrecedencia('MTZ5TARE')" , "MTZ5TARE", 3);
asignar_event_matriz( "onchange" ,"validarUncheck('MTZ5TARE')" , "MTZ5TARE", 3);

RegistrarFormula(":MTZDET[{+},7]:","CNTEMP",1);

$("#M1MTZDET7").change();
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
