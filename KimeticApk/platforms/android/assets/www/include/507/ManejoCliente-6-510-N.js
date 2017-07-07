MatrizEstatica( 'MTZDET' );
HabilitaCampos("OPCCAMBFAC","NOCAMBFAC",[[1,"OPCPROYESP"]]);
$("#EMPFACT").attr("disabled",true);

if (obtener_valor('OPCCAMBFAC',0)=='T'){
	$("#EMPFACT").attr("disabled",false);
	$("#EMPFACT").val('');	
}

$("#EMPFACT").change(function() { 
	empselec=$("#EMPFACT").val();
	fil=obtener_valor( 'filMTZEMP' );
	for(e=1;e<=fil;e++){
		aux=$("#M"+e+"MTZEMP3").val();	
		if (empselec==aux){
			alertmb("No puede seleccionar una empresa facturadora existente",0,1,"Aceptar");
			$("#EMPFACT").val('');		
		}
	}
});

asignar_event_matriz( "onchange" ,"validarResponsableIMSS(9)" , "MTZDET", 9);
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
