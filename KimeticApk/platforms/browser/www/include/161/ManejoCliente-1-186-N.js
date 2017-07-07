MatrizEstatica( 'MTZ4TARE');
DeshabilitarCheck('MTZ4TARE',3);
asignar_event_matriz( "onchange" ,"validarPrecedencia('MTZ4TARE')" , "MTZ4TARE", 3);
asignar_event_matriz( "onchange" ,"validarUncheck('MTZ4TARE')" , "MTZ4TARE", 3);

RegistrarFormula(":MTZDET[{+},7]:","CNTEMP",1);

$("#M1MTZDET7").change();

/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
