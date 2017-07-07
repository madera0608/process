MatrizEstatica( 'MTZ6TARE');
DeshabilitarCheck('MTZ6TARE',3);

asignar_event_matriz( "onchange" ,"validarPrecedencia('MTZ6TARE')" , "MTZ6TARE", 3);
asignar_event_matriz( "onchange" ,"validarUncheck('MTZ6TARE')" , "MTZ6TARE", 3);


RegistrarFormula(":MTZDET[{+},7]:","CNTEMP",1);

$("#M1MTZDET7").change();



/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
