if (obtener_valor('M1MTZCOMVF1')!=''){

MostrarCampo("MTZCOMVF");
MostrarCampo("MONTPAVALF");

}else{
OcultarCampo("MTZCOMVF");
OcultarCampo("MONTPAVALF");
}
/*
function QuitarValidos(){

fil=obtener_valor('filMTZCOMPF');


	for(t=1;t<=fil;t++){

		if (obtener_valorM('MTZCOMPF', t, 4)=='Si'){
			$('#CHKBOXMATMTZCOMPF'+t).attr('checked',true);
			BorrarFila('MTZCOMPF','AFNAAQAA');
		}
	}
alert('viene guardar');
accion_coord('wl_bguardar','wl_actforma=1');
return true;


fil=obtener_valor('filMTZCOMPF');


	for(t=1;t<=fil;t++){

		if (obtener_valorM('MTZCOMPF', t, 4)=='Si'){
			
			
		$("#M"+t+"MTZCOMPF1").attr("disabled",true);
		$("#M"+t+"imgFecMTZCOMPF2").attr("disabled",true);
		$("#M"+t+"MTZCOMPF3").attr("readonly", true);
		$("#M"+t+"MTZCOMPF4").attr("disabled",true);
		$("#M"+t+"MTZCOMPF5").attr("disabled",true);
		$("#M"+t+"MTZCOMPF6").attr("disabled",true);
		$("#M"+t+"MTZCOMPF7").attr("disabled",true);
		$("#M"+t+"MTZCOMPF8").attr("disabled",true);
			$('#CHKBOXMATMTZCOMPF'+t).attr("disabled",true);
			
		}
	}
return true;

}
*/

//QuitarValidos();



function calcularExcedente(){
	asignar_valor('EXCEDENTEF',0);
	mtopagval=obtenerFloat(obtener_valor('MTOPAGVALF'), Formatodec);
	mtodepval=obtenerFloat(obtener_valor('MTODEPVALF'), Formatodec);
	mtofin=obtenerFloat(obtener_valor('MONTAFIN'), Formatodec);
	excedente=mtopagval+mtodepval-mtofin;
 	var valor2 = new String(excedente);
	asignar_valor('EXCEDENTEF', FormatNum(valor2.replace(".", Formatodec), Formatodec, 2));
	if (excedente>0)
		asignar_valor('PAGOPERF',1);
	return true;
}

MatrizEstatica('MTZCOMPF');

CamposObligatorios(["M0MTZCOMPF5","M0MTZCOMPF8","DESANEXVALF"]);
//FUNCIÓN VALIDAR ENVIO

function ValidaEnvio()
{  
	if ($("#wfrm_formulario").valid()!=true){
		alertmb("Por favor complete los campos obligatorios",0,1,"Aceptar");
		return false;
	}else{
		calcularExcedente();
		if (obtenerFloat(obtener_valor('EXCEDENTEF'), Formatodec) >0  && obtener_valor('PROVPENDF') >0 ){
			alertmb("No puede enviar hasta que se registre la provisión pendiente por enviar",0,1,"Aceptar");
			return false;
    		}else{
			return true;
		}
	}
}

$("#wfrm_formulario").validate
({
  rules: { 
	SIANEXVALF:{required: function(element) { return ValidarImagenPago();}},
	COMENTVALF:{required: function(element) { return true ;}}
         },
  messages: {

	SIANEXVALF: "Por favor indique que adjuntó la imagen de la validación"
            }
});

ValidarFilas("MTZCOMPF",[
["MTZCOMPF2",{required: function(element) {  return true;}}],
["MTZCOMPF4",{required: function(element) {  return true;}}],
["MTZCOMPF5",{required: function(element) {  return $('::MTZCOMPF4::').val() ==  "Si";}}],
["MTZCOMPF6",{required: function(element) {  return $('::MTZCOMPF4::').val() ==  "Si" && $('::MTZCOMPF8::').val() ==  "Seleccione" ;}}],
["MTZCOMPF8",{required: function(element) {  return $('::MTZCOMPF4::').val() ==  "Si" && $('::MTZCOMPF6::').val() ==  "";}}]
]);

function ValidarImagenPago(){


fila=obtener_valor( 'filMTZCOMPF' );
var mk=0;
var mark=0;
var mrk=0;
var mto_val=0;

	for(e=1;e<=fila;e++){

		//si existe un pago valido y no tiene nro referencia (debe pedir anexo)
		if(obtener_valorM('MTZCOMPF', e, 6)== '' && obtener_valorM('MTZCOMPF', e, 4)== 'Si' ){
			mk=1;
		}
		//si al menos un pago no es valido
		if(obtener_valorM('MTZCOMPF', e, 4)== 'No'){
			mark=1;
		}
		//si aunquesea 1 es valido
		if(obtener_valorM('MTZCOMPF', e, 4)== 'Si'){
			mrk=1;
			mto_val= mto_val +  obtenerFloat(obtener_valorM('MTZCOMPF', e, 3), Formatodec);
		}

	}

 	var valor2 = new String(mto_val);
        	asignar_valor('MTODEPVALF', FormatNum(valor2.replace(".", Formatodec), Formatodec, 2));

	if (mark!=0){ // no todos son validos
		asignar_valor('TODOSVALF', 0);
	}else{ //todos son validos
		asignar_valor('TODOSVALF', 1);		
	}
	if (mrk!=0){ // al menos 1 es valido
		asignar_valor('UNOVALF', 1);
	}else{ //ninguno es valido
		asignar_valor('UNOVALF', 0);		
	}

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
