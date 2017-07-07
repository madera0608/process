	var periodo = obtener_valor('PERIODO');
	var codigo= obtener_valor('CODFACTP');
	var parte1=codigo.substring(0,15);
	var parte2=codigo.substring(17);
	var resultado=parte1+periodo+parte2;
	asignar_valor('CODFACTP', resultado);

MatrizEstatica('MTZCOMP' );

function MontoValido(){
	
fil=obtener_valor( 'filMTZCOMP' );
var sum=0;

	for(p=1;p<=fil;p++){
				
		if(obtener_valorM('MTZCOMP', p, 4)== 'Si'){
			var val = obtenerFloat(obtener_valorM("MTZCOMP", p, 3), Formatodec);
			sum= sum + val;
		}
	}
	
	var s = new String(sum);
	asignar_valor("MONTVALID",FormatNum(s.replace(".",Formatodec),Formatodec,2));
	return true;
	
}

asignar_event_matriz( "onchange" , "MontoValido()", "MTZCOMP", 4 );


CamposObligatorios(["M0MTZCOMP2","M0MTZCOMP4","M0MTZCOMP5","M0MTZCOMP8","DESANEXVAL"]);

//FUNCI�N VALIDAR ENVIO
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
	SIANEXVAL:{required: function(element) { return ValidarImagenPago() ;}}
         },
  messages: {

	SIANEXVAL: "Por favor indique que adjunt� la imagen de la validaci�n"
            }
});

ValidarFilas("MTZCOMP",[
["MTZCOMP2",{required: function(element) {  return $('::MTZCOMP4::').val() ==  "Si"  ;}}],
["MTZCOMP4",{required: function(element) {  return $('::MTZCOMP4::').val() ==  "Seleccione"  ;}}],
["MTZCOMP5",{required: function(element) {  return $('::MTZCOMP4::').val() ==  "Si"  ;}}],
["MTZCOMP6",{required: function(element) {  return $('::MTZCOMP4::').val() ==  "Si" && $('::MTZCOMP8::').val() ==  "Seleccione"  ;}}],
["MTZCOMP8",{required: function(element) {  return $('::MTZCOMP4::').val() ==  "Si" && $('::MTZCOMP6::').val() ==  "" ;}}]
]);


function ValidarImagenPago(){


fila=obtener_valor( 'filMTZCOMP' );
var mk=0;
var mark=0;

	for(e=1;e<=fila;e++){

		//si existe un pago valido y no tiene nro referencia (debe pedir anexo)
		if(obtener_valorM('MTZCOMP', e, 6)== '' && obtener_valorM('MTZCOMP', e, 4)== 'Si' ){
			mk=1;
		}
		//si al menos un pago no es valido
		if(obtener_valorM('MTZCOMP', e, 4)== 'No'){
			mark=1;
		}

	}

	/*if (mark!=0){ // no todos son validos
		asignar_valor('TODOSVAL', 0);
	}else{ //todos son validos
		asignar_valor('TODOSVAL', 1);		
	}*/

	if (mk!=0){ //debe pedir anexo
		asignar_valor('CNTANEX', 1);
		return true;
	}else{ //no pide anexo
		asignar_valor('CNTANEX', 0);
		return false;
	}

}


//EJECUTAR FUNCI�N DE VALIDAR ENVIO	
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
				alertmb("En este momento no hay conexi�n con el servidor. Por favor intente m�s tarde" + errorThrown,0,1,"Aceptar");
				returnValue = false;
			}
		});
		if (inValida){
			alertmb("El n�mero de referencia asociado al Banco ha sido usado en la operaci�n Nro. " + nu_doc,0,1,"Aceptar");
                                                asignar_valorM( matriz,"No" , fila, 4); 
                                                asignar_valor( "COMENTVAL" , obtener_valor("COMENTVAL") + " La referencia  " + ref + " fue usada en la operaci�n " + nu_doc );
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
