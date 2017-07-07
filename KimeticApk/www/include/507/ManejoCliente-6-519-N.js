MatrizEstatica('MTZDET');
HabilitaCampos("OPCCAMBFAC","NOCAMBFAC",[[1,"OPCPROYESP"]]);

//para ocultar campos segun radio button
if (obtener_valor('OPCALTEMPL',0)=='T')
	mostrarAlta();
else
	ocultarAlta();

function mostrarAlta(){
	//MOSTRAR COLUMNA DE ALTA
	fil=obtener_valor( 'filMTZDET' );
	for(e=0;e<=fil;e++){
		$("#M"+e+"MTZDET25").show();	
	}
}
function ocultarAlta(){
	//OCULTAR COLUMNA DE ALTA
	fil=obtener_valor( 'filMTZDET' );
	$("#M0MTZDET25").hide();
	for(e=1;e<=fil;e++){
		$("#M"+e+"MTZDET25").attr('checked',false);
		$("#M"+e+"MTZDET25").hide();
	}
}
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
