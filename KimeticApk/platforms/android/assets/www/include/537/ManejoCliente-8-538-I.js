
RegistrarFormula(":MTZCOMP[{+},3]:","MONTPAGO",1);

$("#M1MTZCOMP3").change();


////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$("#PERIODO").setMask("99");


asignar_event( "onchange", "cambio_concepto()", 'CONCOB');
asignar_event( "onchange", "cambio_periocidad()", 'PERIOC');

function cambio_concepto(){ 
if (obtener_valor('CONCOB')!="Seleccione"){
	var concepto = obtener_valor('CONCOB');
	var codigo= obtener_valor('CODFACTP');
	var parte1=codigo.substring(0,12);
	var parte2=codigo.substring(14);
	var resultado=parte1+concepto+parte2;
	asignar_valor('CODFACTP', resultado);
}
	return true;
}

//////---------------------------------

function cambio_periocidad(){ 

if (obtener_valor('PERIOC')!="Seleccione"){
	var periocidad= obtener_valor('PERIOC');
	var codigo= obtener_valor('CODFACTP');
	var parte1=codigo.substring(0,14);
	var parte2=codigo.substring(15);
	var resultado=parte1+periocidad+parte2;
	asignar_valor('CODFACTP', resultado);
}
    return true;
}

//////-----------------------------------------------------------------------------------

if (obtener_valor('PERIOC')!="Seleccione"){
	var periocidad= obtener_valor('PERIOC');
	var codigo= obtener_valor('CODFACTP');
	var parte1=codigo.substring(0,14);
	var parte2=codigo.substring(15);
	var resultado=parte1+periocidad+parte2;
	asignar_valor('CODFACTP', resultado);
}

if (obtener_valor('CONCOB')!="Seleccione"){
	var concepto = obtener_valor('CONCOB');
	var codigo= obtener_valor('CODFACTP');
	var parte1=codigo.substring(0,12);
	var parte2=codigo.substring(14);
	var resultado=parte1+concepto+parte2;
	asignar_valor('CODFACTP', resultado);
}
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
