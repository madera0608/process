//Se cambian los nombres de los botones de acción
asignar_valor('wl_bsolicitar', 'Reasignar expedientes');
asignar_valor('wl_bsolicitar1', 'Reasignar expedientes');

MatrizEstatica('DOCUMENT');
MatrizEstatica('CRITERIO');

OcultarCampo( 'ADM_USR2' );
OcultarCampo( 'N_USUARIO2' );

if (obtener_valor( 'OPASIGNA' , 0)=='T') {
	OcultarCampo( 'DOCUMENT', 3 , 8);
	OcultarCampo( 'DOCUMENT', 3 , 7);  
	OcultarCampo( 'DOCUMENT', 3 , 10);
} else {
	if (obtener_valor('IN_ADM_USR')=='N') {
		MostrarCampo( 'DOCUMENT', 3 , 8);
		MostrarCampo( 'DOCUMENT', 3 , 7);
		OcultarCampo( 'DOCUMENT', 3 , 10);
	} else {
		MostrarCampo( 'DOCUMENT', 3 , 10);
		MostrarCampo( 'DOCUMENT', 3 , 7);
		OcultarCampo( 'DOCUMENT', 3 , 8);
	}
}

//Seleccionar la lista de valores SQL para el usuario que posee los documentos
if (obtener_valor('IN_ADM_USR')=='N') {
	OcultarCampo( 'ADM_USR1' ); 
	MostrarCampo( 'N_USUARIO1' );
} else {
	MostrarCampo( 'ADM_USR1' ); 
	OcultarCampo( 'N_USUARIO1' );
}

//Ocultar o mostrar segun la opcion de asignación
if (obtener_valor('IN_ADM_USR')=='N') {
	HabilitaCampos('OPASIGNA','LOTE',[[1,'N_USUARIO2'],[1,'USR_ASI_NB']]);
} else {
	HabilitaCampos('OPASIGNA','LOTE',[[1,'ADM_USR2'],[1,'USR_ASI_NB']]);
}

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
$("input[name='OPASIGNA']").click(function() { 
	if (obtener_valor( 'OPASIGNA' , 1)=='T') {
		asignar_valor( 'USR_ASIG' , '');
		asignar_valor( 'USR_ASI_NB' , '');

		if (obtener_valor('IN_ADM_USR')=='N') {
			MostrarCampo( 'DOCUMENT', 3 , 8);
			MostrarCampo( 'DOCUMENT', 3 , 7);
			OcultarCampo( 'DOCUMENT', 3 , 10);
		} else {
			MostrarCampo( 'DOCUMENT', 3 , 10);
			MostrarCampo( 'DOCUMENT', 3 , 7);
			OcultarCampo( 'DOCUMENT', 3 , 8);
       }
	} else {
		OcultarCampo( 'DOCUMENT', 3 , 8);
		OcultarCampo( 'DOCUMENT', 3 , 7);
		OcultarCampo( 'DOCUMENT', 3 , 10);
	}

	if (obtener_valor('IN_ADM_USR')=='N') {
		HabilitaCampos('OPASIGNA','LOTE',[[1,'N_USUARIO2'],[1,'USR_ASI_NB']]);
	} else {
		HabilitaCampos('OPASIGNA','LOTE',[[1,'ADM_USR2'],[1,'USR_ASI_NB']]);
	}
} );

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//Validar los campos obligatorios
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
CamposObligatorios(['DESUSR_ASI_NB', 'DESGRUPO','DESUSR_SEL_NB']);

$("#wfrm_formulario").validate({
	rules: { 
		GRUPO: { required: true },
		USR_SEL_NB: { required: true },
		USR_ASI_NB: { required: function(element) { return $("input[name='OPASIGNA']:checked").val() ==  "LOTE****AlterT" ;}}
	}
});

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//Criterios de busqueda
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
function busqueda() {
	var querys = '';

	if (obtener_valorM( 'CRITERIO' , 1 , 1)!='' && obtener_valorM( 'CRITERIO' , 1 , 2)!=''){
		querys = querys + 'AND NU_DOC = '+ obtener_valorM( 'CRITERIO' , 1 , 1) + "AND NB_WF = '" + obtener_valorM( 'CRITERIO' , 1 , 2) +"'";
	}

	if (obtener_valorM( 'CRITERIO' , 1 , 1)=='' && obtener_valorM( 'CRITERIO' , 1 , 2)!=''){
		querys = querys + "AND NB_WF = '" + obtener_valorM( 'CRITERIO' , 1 , 2) + "'";
	}

	if (obtener_valorM( 'CRITERIO' , 1 , 1)!='' && obtener_valorM( 'CRITERIO' , 1 , 2)==''){
		querys = querys + 'AND NU_DOC = '+ obtener_valorM( 'CRITERIO' , 1 , 1);
	}
	
	asignar_valor( 'CRITERIA', querys);

	//link de busqueda
	generico_link("evento_BUSCAR","Conectarlink1('Agente.asp?wl_eventoagente=true&wl_campof=BUSCAR&wl_filaf=0')")
	return true;
}
asignar_event( "onclick" ,  'busqueda()'  , "evento_BUSCAR" );

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//Validaciones previas al envío
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
function ValidaEnvio() {
	if (obtener_valorM( 'DOCUMENT' , 1 , 2 ) == '') {
		alertmb("No hay documentos para reasignar",0,1,"Aceptar");
	}
      
	if ($("#wfrm_formulario").valid()!=true) {
		alertmb("Por favor complete los campos obligatorios",0,1,"Aceptar");
		return false;
	} else {
		return true;
	}
}
asignar_event( "onclick" , "ValidaEnvio()", "wl_bsolicitar" );
asignar_event( "onclick" , "ValidaEnvio()", "wl_bsolicitar1" );
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
