if (obtener_valor('OPCTPOBAJA',1) =='T')
{
   MostrarCampo( 'PROPFIN');
  OcultarCampo('MTOFINIQ');
  OcultarCampo('MONTPRE');
  OcultarCampo('MONTSERV');
  OcultarCampo('MONTPREF');
}
else
{
  OcultarCampo( 'PROPFIN' );
  MostrarCampo('MTOFINIQ');
  MostrarCampo('MONTPRE');
  MostrarCampo('MONTSERV');
  MostrarCampo('MONTPREF');
 }

MatrizEstatica('MTZCOMP');

CamposObligatorios(["M0MTZCOMP2","M0MTZCOMP4","M0MTZCOMP5","M0MTZCOMP8", "DESFCHPAGO","DESANEXVAL"]);

if(obtener_valor('PERAUTCHEQ')!=''){

MostrarCampo( 'PERAUTCHEQ');
MostrarCampo( 'OPCAUTCHEQ');
}else{

OcultarCampo( 'PERAUTCHEQ');
OcultarCampo( 'OPCAUTCHEQ');

}


//FUNCIÓN VALIDAR ENVIO
function ValidaEnvio()
{
	if ($("#wfrm_formulario").valid()!=true){
		alertmb("Por favor complete los campos obligatorios",0,1,"Aceptar");
	  	return false;
	}else
		return true;
}

$("#wfrm_formulario").validate
({
  rules: { 
	SIANEXVAL:{required: function(element) { return ValidarImagenPago();}}
         },
  messages: {

	SIANEXVAL: "Por favor indique que adjuntó la imagen de la validación"
            }
});


ValidarFilas("MTZCOMP",[
["MTZCOMP2",{required: function(element) {  return true;}}],
["MTZCOMP4",{required: function(element) {  return true;}}],
["MTZCOMP5",{required: function(element) {  return $('::MTZCOMP4::').val() ==  "Si";}}],
["MTZCOMP6",{required: function(element) {  return $('::MTZCOMP4::').val() ==  "Si" && $('::MTZCOMP8::').val() ==  "Seleccione" ;}}],
["MTZCOMP8",{required: function(element) {  return $('::MTZCOMP4::').val() ==  "Si" && $('::MTZCOMP6::').val() ==  "";}}]
]);

function ValidarImagenPago(){

fila=obtener_valor( 'filMTZCOMP' );
var mk=0;
var mark=0;
var mrk=0;
var mto_val=0;

	for(e=1;e<=fila;e++){

		//si existe un pago valido y no tiene nro referencia (debe pedir anexo)
		if(obtener_valorM('MTZCOMP', e, 6)== '' && obtener_valorM('MTZCOMP', e, 4)== 'Si' ){
			mk=1;
		}
		//si al menos un pago no es valido
		if(obtener_valorM('MTZCOMP', e, 4)== 'No'){
			mark=1;
		}
		//si aunquesea 1 es valido
		if(obtener_valorM('MTZCOMP', e, 4)== 'Si'){
			mrk=1;
			mto_val= mto_val +  obtenerFloat(obtener_valorM('MTZCOMP', e, 3), Formatodec);
		}

	}

 	var valor2 = new String(mto_val);
        	asignar_valor('MTODEPVAL', FormatNum(valor2.replace(".", Formatodec), Formatodec, 2));


	if (mark!=0){ // no todos son validos
		asignar_valor('TODOSVAL', 0);
	}else{ //todos son validos
		asignar_valor('TODOSVAL', 1);		
	}
	if (mrk!=0){ // al menos 1 es valido
		asignar_valor('UNOVAL', 1);
	}else{ //ninguno es valido
		asignar_valor('UNOVAL', 0);		
	}

	if (mk!=0){ //debe pedir anexo
		asignar_valor('CNTANEX', 1);
		return true;
	}else{ //no pide anexo
		asignar_valor('CNTANEX', 0);
		return false;
	}

}

ValidarImagenPago();
//EJECUTAR FUNCIÓN DE VALIDAR ENVIO	
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar" );
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar1" );

function validarReferenciaCP(matriz){
	var fila = get_fila(matriz);
	if (obtener_valorM( matriz, fila, 1)!=""  && obtener_valorM( matriz, fila, 6)!=""){
	var url = obtener_valor('URL');
	var idbanco = obtener_valorM(matriz,fila,1);
	var ref = obtener_valorM(matriz,fila,6);
	var inValida=false;
                var nu_doc;
		$.ajax({
			type: "GET",
			url: url + "serviciosGin/obtenerReferenciaCP/"+ref+"/"+idbanco,
			async:false,
			success: function (data) {
				if(!(data.getElementsByTagName("nu_doc")[0].childNodes[0]===undefined)){
					nu_doc= data.getElementsByTagName("nu_doc")[0].childNodes[0].nodeValue;
					inValida=true;
				}
			},
			error: function (XMLHttpRequest, textStatus, errorThrown) {
				alertmb("En este momento no hay conexión con el servidor. Por favor intente más tarde" + errorThrown,0,1,"Aceptar");
				returnValue = false;
			}
		});
		if (inValida){
			alertmb("El número de referencia asociado al Banco ha sido usado en la operación Nro. " + nu_doc,0,1,"Aceptar");
                                                asignar_valorM( matriz,"No" , fila, 4); 
                                                asignar_valor( "COMENTVAL" , obtener_valor("COMENTVAL") + " La referencia  " + ref + " fue usada en la operación " + nu_doc );
		}
	}
	return true;
}

asignar_event_matriz( "onblur" , "validarReferenciaCP('MTZCOMP') " , "MTZCOMP" , 6 );
asignar_event_matriz( "onblur" , "validarReferenciaCP('MTZCOMP') " , "MTZCOMP" , 4 );

/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
