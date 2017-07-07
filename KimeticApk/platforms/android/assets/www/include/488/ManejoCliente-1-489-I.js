CamposObligatorios(['DESNUM_FAX','DESP_F_CR','DESRECEP_FAX']);

MatrizEstatica( 'SELLO_H' );

function ocultarfax(){
	if(obtener_valor( 'ANEX_FAX' ) == "Enviar por fax"){
		MostrarCampo( 'NUM_FAX' );
		MostrarCampo( 'P_F_CR' );
		MostrarCampo( 'FAX' );
	}else{
		OcultarCampo( 'NUM_FAX' );
		OcultarCampo( 'P_F_CR' );
		OcultarCampo( 'FAX' );
	}
	return true;
}
asignar_event( 'onchange' , "ocultarfax()" , 'ANEX_FAX' );

ocultarfax();

function ocultarorg(){
	if(obtener_valor( 'ORGANISMO' ) == 1){
		MostrarCampo( 'OTRO_OG' );
	}else{
		OcultarCampo( 'OTRO_OG' );
	}
	return true;
}
asignar_event( 'onchange' , "ocultarorg()" , 'ORGANISMO' );

ocultarorg();

function obligatorio(){
	if(obtener_valor('ANEX_FAX') == 'Enviar por fax'){
		if(obtener_valor('NUM_FAX') == ''){
			alertmb("Campo número de FAX no puede estar vacío.",0,1,"Aceptar");
			return false;
		}
		if(obtener_valor('P_F_CR') == ''){
			alertmb("Campo persona confirma recepción no puede estar vacío.",0,1,"Aceptar");
			return false;
		}
		if(obtener_valor('FAX') == ''){
			alertmb("Campo Confirmación de la recepción del FAX no puede estar vacío.",0,1,"Aceptar");
			return false;
		}		
	}
	if(obtener_valor('A_FAX') == ''   && obtener_valor('ANEX_FAX')  ==  'Enviar por fax'  )  {
		alertmb("Debe generar la Portada previamente para poder enviar.",0,1,"Aceptar");
		return false;
	}
	if($('a[id^="anexo_"]').length <= 0 && obtener_valor('ANEX_FAX')  !=  'Enviar por fax' ){
   		alertmb("Por favor, anexe la comunicación oficial haciendo click en Anexar",0,1,"Aceptar");
   		return false;
	}
	return true;
}

asignar_event( 'onclick', 'obligatorio()', 'wl_bsolicitar');
asignar_event( 'onclick', 'obligatorio()', 'wl_bsolicitar1');
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
