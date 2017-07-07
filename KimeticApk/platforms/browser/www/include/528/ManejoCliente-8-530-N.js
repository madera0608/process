
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
	SIANEXVAL:{required: function(element) { return ValidarImagenPago() ;}}
         },
  messages: {

	SIANEXVAL: "Por favor indique que adjuntó la imagen de la validación"
            }
});

ValidarFilas("MTZCOMP",[
["MTZCOMP2",{required: function(element) {  return $("input[name='OPCCORRPAG']:checked").val() ==  "NOCORRPAG****AlterT" ;}}],
["MTZCOMP4",{required: function(element) {  return $("input[name='OPCCORRPAG']:checked").val() ==  "NOCORRPAG****AlterT" ;}}],
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


//EJECUTAR FUNCIÓN DE VALIDAR ENVIO	
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar" );
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar1" );
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
