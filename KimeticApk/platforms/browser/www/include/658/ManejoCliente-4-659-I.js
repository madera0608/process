asignar_valor( 'wl_bsolicitar', 'Registrar pago');
asignar_valor( 'wl_bsolicitar1', 'Registrar pago');

OcultarGrupo( 'DATOS DE LA FACTURA' );
OcultarGrupo( 'DATOS DE LA NOTA DE CREDITO' );
OcultarGrupo( 'LISTA DE TAREAS' );
OcultarGrupo( 'PAGOS' );
OcultarGrupo( 'DATOS DEL CORREO ELECTRONICO' );
OcultarGrupo( 'RECEPCION DE SOPORTE' );
OcultarGrupo( 'COMPROBANTES DE GASTOS' );
OcultarGrupo( 'DATOS DE FACTURA' );
OcultarGrupo( 'GESTION DE NOTA DE CREDITO' );
OcultarGrupo( 'PAGO DE COMISION' );
OcultarCampo('RFCINV');
OcultarGrupo('VIATICOS');

OcultarGrupo('DATOS DEL BENEFICIARIO');
OcultarGrupo('DATOS DEL PROVEEDOR');

$("#CLABE").setMask("999999999999999999",{placeholder:""});
$("#CUENTA").setMask("99999999999999999999",{placeholder:""});

MatrizEstatica( 'MTZBENEF' );

OcultarCampo('INREPORTAR');
OcultarCampo('INSOPORTE');


$("#MOTIVO").change( function (){

		if (obtener_valor('MOTIVO') == 2){
			    MostrarCampo('INREPORTAR');
			    OcultarCampo('INSOPORTE');
			asignar_valor('INSOPORTE','F',0);
			asignar_valor('INSOPORTE','F',1);
			OcultarGrupo('DATOS DEL PROVEEDOR' );
			MostrarGrupo('DATOS DEL BENEFICIARIO');
			MostrarGrupo('VIATICOS');
				asignar_valor('RFCPROVEED','');
				asignar_valor('NB_PROVEED','');
				asignar_valor('IDPROVEED','');
				asignar_valor('PROVEEDOR','');
				asignar_valor('DIR_COMER','');
				SeleccionaFila('MTZCONTP');
				BorrarFila('MTZCONTP','TTT');
		}
		if(obtener_valor('MOTIVO') == 1){
			OcultarCampo('INREPORTAR');
			MostrarCampo('INSOPORTE');
			asignar_valor('INREPORTAR','F',0);
			asignar_valor('INREPORTAR','F',1);
				MostrarGrupo('DATOS DEL PROVEEDOR');
				OcultarGrupo('DATOS DEL BENEFICIARIO');
				OcultarGrupo('VIATICOS');
				asignar_valor('RFCBENEF','');
				asignar_valor('RFCINV','');
				asignar_valorM('MTZBENEF','',1,1);
				asignar_valorM('MTZBENEF','',1,2);
				asignar_valorM('MTZBENEF','',1,3);
				asignar_valorM('MTZBENEF','',1,4);
		}
		if(obtener_valor('MOTIVO')=='Seleccione'){
				OcultarGrupo('DATOS DEL BENEFICIARIO');
				OcultarGrupo('VIATICOS');
				OcultarGrupo('DATOS DEL PROVEEDOR');
				 OcultarCampo('INSOPORTE');
				 OcultarCampo('INREPORTAR');
				asignar_valor('INREPORTAR','F',0);
				asignar_valor('INREPORTAR','F',1);
				asignar_valor('INSOPORTE','F',0);
				asignar_valor('INSOPORTE','F',1);
				asignar_valor('RFCBENEF','');
				asignar_valor('RFCINV','');
				asignar_valorM('MTZBENEF','',1,1);
				asignar_valorM('MTZBENEF','',1,2);
				asignar_valorM('MTZBENEF','',1,3);
				asignar_valorM('MTZBENEF','',1,4);
				asignar_valor('RFCPROVEED','');
				asignar_valor('NB_PROVEED','');
				asignar_valor('IDPROVEED','');
				asignar_valor('PROVEEDOR','');
				asignar_valor('DIR_COMER','');
				SeleccionaFila('MTZCONTP');
				BorrarFila('MTZCONTP','TTT');
		}	
});
$("#MOTIVO").change();


function IndicaBeneficiario(){

	if(obtener_valor('RFCINV') != ''){
		$("#M"+1+"MTZBENEF1").attr('disabled', true);
		$("#M"+1+"MTZBENEF2").attr('disabled', true);
		$("#M"+1+"MTZBENEF3").attr('disabled', true);
		$("#M"+1+"MTZBENEF4").attr('disabled', true);
	}else{
		$("#M"+1+"MTZBENEF1").attr('disabled', false);
		$("#M"+1+"MTZBENEF2").attr('disabled', false);
		$("#M"+1+"MTZBENEF3").attr('disabled', false);
		$("#M"+1+"MTZBENEF4").attr('disabled', false);
	}
return true;
}
asignar_event( 'onchange' , 'IndicaBeneficiario()'  , 'RFCINV' );

OcultarCampo('MENSAJE');
$('#NB_PROVEED').attr("disabled",true);

function ValidarRfc() 
{ 
	var strCorrecta;
	strCorrecta = rfcStr;	
	if (rfcStr.length == 12){
		var valid = '^(([A-Z]|[a-z]){3})([0-9]{6})((([A-Z]|[a-z]|[0-9]){3}))';
	}else{
		var valid = '^(([A-Z]|[a-z]|\s){1})(([A-Z]|[a-z]){3})([0-9]{6})((([A-Z]|[a-z]|[0-9]){3}))';
	}
	var validRfc=new RegExp(valid);
	var matchArray=strCorrecta.match(validRfc);
	if (matchArray==null) {
                       alertmb('El formato del RFC es incorrecto',2,1,'Aceptar');
                       asignar_valor("RFC","");
 	       return false;
	}
	else
	{
		return true;
	}
}

asignar_event('onblur','ValidarRfc()','RFC');
asignar_event('onblur','ValidarRfc()','RFCPROVEED');


$("#RFCPROVEED").change( function (){
	asignar_valor('IDPROVEED','');
	if (obtener_valor('IDPROVEED')==''){
	MostrarCampo('MENSAJE');
	var fila = $('#filMTZCONTP').val();
	for(var i = 1; i<=fila; i++){
		$('#M'+i+'MTZCONTP1').attr("disabled",false);
		$('#M'+i+'MTZCONTP2').attr("disabled",false);
		$('#M'+i+'MTZCONTP3').attr("disabled",false);
		asignar_valor('M'+i+'MTZCONTP1','');
		asignar_valor('M'+i+'MTZCONTP2','');
		asignar_valor('M'+i+'MTZCONTP3','');
		}
		MostrarCampo('MATNVMTZCONTP',2);
		MostrarCampo('MATBOMTZCONTP',2);
		MostrarCampo('MATSEMTZCONTP',2);
		$('#NB_PROVEED').attr("disabled",false);
		$('#DIR_COMER').attr("disabled",false);
		$('#PROVEEDOR').attr("disabled",false);
		asignar_valor('NB_PROVEED','');
		asignar_valor('DIR_COMER','');
		asignar_valor('PROVEEDOR','');
	}
	else{ 
		OcultarCampo('MENSAJE');
		$('#NB_PROVEED').attr("disabled",true);
		$('#DIR_COMER').attr("disabled",true);
		$('#PROVEEDOR').attr("disabled",true);
		OcultarCampo('MATNVMTZCONTP',2);
		OcultarCampo('MATBOMTZCONTP',2);
		OcultarCampo('MATSEMTZCONTP',2);
	var fila1 = $('#filMTZCONTP').val();
	for(var m = 1; m<=fila1; m++){
		$('#M'+m+'MTZCONTP1').attr("disabled",true);
		$('#M'+m+'MTZCONTP2').attr("disabled",true);
		$('#M'+m+'MTZCONTP3').attr("disabled",true);
		}
	}
});


if (obtener_valor('IDPROVEED')==''){
	MostrarCampo('MENSAJE');
	$('#NB_PROVEED').attr("disabled",false);
	$('#DIR_COMER').attr("disabled",false);
	$('#PROVEEDOR').attr("disabled",false);
	    MostrarCampo('MATNVMTZCONTP',2);
		MostrarCampo('MATBOMTZCONTP',2);
		MostrarCampo('MATSEMTZCONTP',2);
	var fil = $('#filMTZCONTP').val();
	for(var m = 1; m<=fil; m++){
	$('#M'+m+'MTZCONTP1').attr("disabled",false);
	$('#M'+m+'MTZCONTP2').attr("disabled",false);
	$('#M'+m+'MTZCONTP3').attr("disabled",false);
	
	}
}
else{ 
	OcultarCampo('MENSAJE');
	$('#NB_PROVEED').attr("disabled",true);
	$('#DIR_COMER').attr("disabled",true);
	$('#PROVEEDOR').attr("disabled",true);
	OcultarCampo('MATNVMTZCONTP',2);
	OcultarCampo('MATBOMTZCONTP',2);
	OcultarCampo('MATSEMTZCONTP',2);
	var fil = $('#filMTZCONTP').val();
	for(var m = 1; m<=fil; m++){
	$('#M'+m+'MTZCONTP1').attr("disabled",true);
	$('#M'+m+'MTZCONTP2').attr("disabled",true);
	$('#M'+m+'MTZCONTP3').attr("disabled",true);
	}

}

$("#IDPROVEED").change( function (){
	if (obtener_valor('RFCPROVEED')!='' && obtener_valor('IDPROVEED')==''){
		MostrarCampo('MENSAJE');
		$('#NB_PROVEED').attr("disabled",false);
		$('#DIR_COMER').attr("disabled",false);
		$('#PROVEEDOR').attr("disabled",false);
		asignar_valor('NB_PROVEED','');
		asignar_valor('DIR_COMER','');
		MostrarCampo('MATNVMTZCONTP',2);
		MostrarCampo('MATBOMTZCONTP',2);
		MostrarCampo('MATSEMTZCONTP',2);
	var fil = $('#filMTZCONTP').val();
	for(var m = 1; m<=fil; m++){		
		$('#M'+m+'MTZCONTP1').attr("disabled",false);
		$('#M'+m+'MTZCONTP2').attr("disabled",false);
		$('#M'+m+'MTZCONTP3').attr("disabled",false);
		asignar_valor('M'+m+'MTZCONTP1','');
		asignar_valor('M'+m+'MTZCONTP2','');
		asignar_valor('M'+m+'MTZCONTP3','');
		}
	}
	else{ 
		OcultarCampor('MENSAJE');
		$('#NB_PROVEED').attr("disabled",true);
		$('#DIR_COMER').attr("disabled",true);
		$('#PROVEEDOR').attr("disabled",true);
		OcultarCampo('MATNVMTZCONTP',2);
		OcultarCampo('MATBOMTZCONTP',2);
		OcultarCampo('MATSEMTZCONTP',2);
	var fil = $('#filMTZCONTP').val();
	for(var m = 1; m<=fil; m++){		
		$('#M'+m+'MTZCONTP1').attr("disabled",true);
		$('#M'+m+'MTZCONTP2').attr("disabled",true);
		$('#M'+m+'MTZCONTP3').attr("disabled",true);
		}
	}
});


function RevisarMTZContactos() {
  var filaC =get_fila('MTZCONTP');
  var AEnviar = obtener_valorM( 'MTZCONTP' , filaC , 3);
  var re = /^[a-z0-9\-\_\.]+@[a-z0-9\-\.]+\.[a-z]{2,}$/i
  if (AEnviar!="") {
     if (!re.test(AEnviar))
     {
         alertmb('El formato de correo electrónico es incorrecto. Ejemplo correcto: agarza@direccion.com',2,1,'Aceptar');    
         asignar_valorM( "MTZCONTP" , "" , filaC , 3);
	return(false);
     }
  }
  return true;
}

asignar_event_matriz("onblur", "RevisarMTZContactos()" , "MTZCONTP" , 3);

OcultarCampo('MTODISPER');
//OcultarCampo('MOTIVO');
OcultarGrupo('DATOS DEL FINANCIAMIENTO');
OcultarGrupo('DATOS DEL PAGO');

$("#FINAN").click( function (){

		if (obtener_valor('FINAN') == 'T'){
			MostrarGrupo('DATOS DEL FINANCIAMIENTO');
		}
		else if(obtener_valor('FINAN') == 'F'){
			OcultarGrupo('DATOS DEL FINANCIAMIENTO');
			asignar_valor('OPSOLFIN','F',0);
			asignar_valor('OPSOLFIN','F',1);
			asignar_valor('TPOFINANC','F',0);
			asignar_valor('TPOFINANC','F',1);			
			asignar_valor('MONTFINAN','');
		}
	
});
$("#FINAN").change();

$("#PROVISION").click( function (){

		if (obtener_valor('PROVISION') == 'T'){
			MostrarCampo('MTODISPER');
		}
		else if(obtener_valor('PROVISION') == 'F'){
			OcultarCampo('MTODISPER');
			asignar_valor('MTODISPER','');
		}
	
});
$("#PROVISION").change();


CamposObligatorios(["DESINREPORTAR","DESINSOPORTE","DESTPOPAGO","DESMTODISPER","DESOPSOLFIN","DESMONTFINAN","DESTPOFINANC","DESRFCPROVEED","DESNB_PROVEED","DESPROVEEDOR","DESDIR_COMER","M0MTZCONTP1","M0MTZCONTP2","M0MTZCONTP3","DESRFCBENEF","M0MTZBENEF1","M0MTZBENEF2","M0MTZBENEF3","M0MTZBENEF4","DESDEST","DESFCHINIVIA","DESFCHFINVIA","DESMOTIVOVIA"]);

 $("#wfrm_formulario").validate
({
 rules: { 
                INREPORTAR:{required: function(element) { return obtener_valor('MOTIVO')=='2';}},
				DEST:{required: function(element) { return obtener_valor('MOTIVO')=='2';}},
				FCHINIVIA:{required: function(element) { return obtener_valor('MOTIVO')=='2';}},
				FCHFINVIA:{required: function(element) { return obtener_valor('MOTIVO')=='2';}},
				MOTIVOVIA:{required: function(element) { return obtener_valor('MOTIVO')=='2';}},
				//PROVISION:{required: function(element) { return obtener_valor('PROVISION')=='F' && obtener_valor('DEPOSITO')=='F' && obtener_valor('FINAN')=='F';}},
				MTODISPER:{required: function(element) { return obtener_valor('PROVISION')=='T';}},
				OPSOLFIN:{required: function(element) { return obtener_valor('FINAN')=='T';}},
				TPOFINANC:{required: function(element) { return obtener_valor('FINAN')=='T';}},
				MONTFINAN:{required: function(element) { return obtener_valor('FINAN')=='T';}},
				RFCPROVEED:{required: function(element) { return obtener_valor('MOTIVO')== 1;}},
				NB_PROVEED:{required: function(element) { return obtener_valor('MOTIVO')== 1;}},
				PROVEEDOR:{required: function(element) { return obtener_valor('MOTIVO')== 1;}},
				DIR_COMER:{required: function(element) { return obtener_valor('MOTIVO')== 1;}},
				RFCBENEF: {required: function(element) { return obtener_valor('MOTIVO')== 2;}},
				INSOPORTE:{required: function(element) { return obtener_valor('MOTIVO')== 1;}}
				
        },
 messages: { 
			  INREPORTAR:"Debe indicar si requiere reportar gastos",
			  DEST:"Debe indicar el destino de los viaticos",
			  FCHINIVIA:"Debe indicar la fecha de inicio de los viaticos",
			  FCHFINVIA:"Debe indicar la fecha fin de los viaticos",
			  MOTIVOVIA:"Debe indicar el motivo de los viaticos",
              INSOPORTE: "Debe indicar si requiere esperar soporte",
			//  PROVISION: "Debe indicar la forma de pago",
			  MTODISPER: "Debe indicar monto a utilizar de la provisión",
			  OPSOLFIN: "Debe indicar quien solicita el financiamiento",
			  TPOFINANC: "Debe indicar el tipo de financiamiento",
			  MONTFINAN: "Debe indicar el monto a solicitar del financiamiento",
			  RFCPROVEED:"Debe indicar el RFC del proveedor ",
			  NB_PROVEED:"Debe indicar el nombre del proveedor",
			  PROVEEDOR:"Debe indicar el origen de proveedor",
			  DIR_COMER:"Debe indicar la dirección comercial del proveedor",
			  RFCBENEF: "Debe indicar el RFC del beneficiario"
           }
});

ValidarFilas("MTZBENEF",[
["MTZBENEF1",{required: function(element) { return obtener_valor('MOTIVO')== 2;}}],
["MTZBENEF2",{required: function(element) { return obtener_valor('MOTIVO')== 2;}}],
["MTZBENEF3",{required: function(element) { return obtener_valor('MOTIVO')== 2;}}],
["MTZBENEF4",{required: function(element) { return obtener_valor('MOTIVO')== 2;}}]
]);

ValidarFilas("MTZCONTP",[
["MTZCONTP1",{required: function(element) { return obtener_valor('MOTIVO')== 1;}}],
["MTZCONTP2",{required: function(element) { return obtener_valor('MOTIVO')== 1;}}],
["MTZCONTP3",{required: function(element) { return obtener_valor('MOTIVO')== 1;}}]
]);

asignar_event( "onclick" ,"AgregarFilasContacto()" , "MATNVMTZCONTP");

function AgregarFilasContacto(){
	fil=obtener_valor( 'filMTZCONTP' );
	ValidarFilaDinamica("MTZCONTP",fil,[
["MTZCONTP1",{required: function(element) { return obtener_valor('MOTIVO')== 1;}}],
["MTZCONTP2",{required: function(element) { return obtener_valor('MOTIVO')== 1;}}],
["MTZCONTP3",{required: function(element) { return obtener_valor('MOTIVO')== 1;}}]
]);

	return true;
}

function ValidaEnvio(){
if ($("#wfrm_formulario").valid()!=true){
       alertmb("Por favor complete los campos obligatorios",0,1,"Aceptar");
       return false;
		}
if (obtener_valor('PROVISION')== 'F' && obtener_valor('DEPOSITO')=='F' && obtener_valor('FINAN')=='F') {
	   alertmb("Debe indicar la forma de pago",0,1,"Aceptar");
       return false;
		}
		
if (obtener_valor('PROVISION')== 'T' && obtener_valor('DEPOSITO')=='F' && obtener_valor('FINAN')=='F' && obtener_valor('PROV_OPER') < obtener_valor('MTO_PAGO')) {
	   alertmb("El monto de la provisión disponible es menor al monto de pago, debe agregar una forma de pago",0,1,"Aceptar");
       return false;
		}
if (obtener_valor('PROV_OPER') < obtener_valor('MTODISPER')) {
	   alertmb("El monto a utilizar de provisión es mayor al monto de provisión disponible",0,1,"Aceptar");
	   asignar_valor('MTODISPER','');
       return false;
		}
if(obtener_valor('IDGASTO')=='' )	{
	   alertmb("Debe presionar el enlace de buscar en el campo código de gasto ",0,1,"Aceptar");
       return false;
}
if(obtener_valor('IDGASTO')!= '' && obtener_valor('CODGAST') != obtener_valor('CODGAST1')){
	   alertmb("El código de gasto ha sido cambiado debe presionar el enlace para cargar sus valores",0,1,"Aceptar");
       return false;

}
return true;
}
asignar_event( "onclick" , "ValidaEnvio()", "wl_bsolicitar" );
asignar_event( "onclick" , "ValidaEnvio()", "wl_bsolicitar1" );

//////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////
/*function LlenarGatos()
{
  var Gasto = obtener_valor('CODGAST');
  var url = obtener_valor( "URL" ); 
  $.ajax({
	type: "GET",
	url: url + "serviciosGin/ObtenerGastos/"+Gasto,
			async:false,
				success: function (data) {
				 if(!(data.getElementsByTagName("DESC_CENTRO_COSTO_FINAN")[0].childNodes[0]===undefined)){				
					var id = data.getElementsByTagName("DESC_CENTRO_COSTO_FINAN")[0].childNodes[0].nodeValue;
					if (id!='')	{	
						asignar_valor('CENTCOST',id);
					}
				}else {				
						asignar_valor('CENTCOST','');
				}
				if(!(data.getElementsByTagName("desc_concepto_finan")[0].childNodes[0]===undefined)){
					var concepto = data.getElementsByTagName("desc_concepto_finan")[0].childNodes[0].nodeValue;
					if (concepto!=''){
						asignar_valor('CONCEPFINA',concepto);
						}
				}else{
						asignar_valor('CONCEPFINA','');
				}
				if(!(data.getElementsByTagName("DESC_TPO_GASTO")[0].childNodes[0]===undefined)){
					var tpo_gast = data.getElementsByTagName("DESC_TPO_GASTO")[0].childNodes[0].nodeValue;
					if (tpo_gast!=''){
						asignar_valor('TPOGAST',tpo_gast);
						}
				}else{
						asignar_valor('TPOGAST','');
				}
				if(!(data.getElementsByTagName("DESC_CLASIFICACION_FINAN")[0].childNodes[0]===undefined)){
					var clasificacion = data.getElementsByTagName("DESC_CLASIFICACION_FINAN")[0].childNodes[0].nodeValue;
					if (clasificacion!=''){
						asignar_valor('CLASIFINAN',clasificacion);
						}
				}else{
						asignar_valor('CLASIFINAN','');				
				}
				if(!(data.getElementsByTagName("codigo_gasto")[0].childNodes[0]===undefined)){
					var codgast = data.getElementsByTagName("codigo_gasto")[0].childNodes[0].nodeValue;
					if (codgast!=''){
						asignar_valor('CODOPER',codgast);
						}
				}else{
					asignar_valor('CODOPER','');
				}
			},
			error: function (XMLHttpRequest, textStatus, errorThrown) {
				//alertmb("En este momento no hay conexión con el servidor. Por favor intente más tarde" + errorThrown,0,1,"Aceptar");
				returnValue = false;
			}
		});
  return true;
}
asignar_event("onchange","LlenarGatos()","CODGAST" );*/
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
