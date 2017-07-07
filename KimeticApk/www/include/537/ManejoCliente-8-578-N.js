	var periodo = obtener_valor('PERIODO');
	var codigo= obtener_valor('CODFACTP');
	var parte1=codigo.substring(0,15);
	var parte2=codigo.substring(17);
	var resultado=parte1+periodo+parte2;
	asignar_valor('CODFACTP', resultado);

RegistrarFormula(":MTZCOMP[{+},3]:","MONTPAGO",1);

$("#M1MTZCOMP3").change();




/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
