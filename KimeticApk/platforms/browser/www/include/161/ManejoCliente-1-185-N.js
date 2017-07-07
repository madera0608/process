MatrizEstatica( 'MTZ2TARE');
DeshabilitarCheck('MTZ2TARE',3);
asignar_event_matriz( "onchange" ,"validarPrecedencia('MTZ2TARE')" , "MTZ2TARE", 3);
asignar_event_matriz( "onchange" ,"validarUncheck('MTZ2TARE')" , "MTZ2TARE", 3);


RegistrarFormula(":MTZDET[{+},7]:","CNTEMP",1);

$("#M1MTZDET7").change();

/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
