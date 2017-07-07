if (obtenerFloat(obtener_valor('MTOPROVDIS'), Formatodec)<=0)
    {
     asignar_valor('OPCPROV','F');
     OcultarCampo('OPCPROV',6);
}

if (obtener_valor('OPCTPOBAJA',1) =='T')
{
   MostrarCampo( 'PROPFIN');
}
else
{
  OcultarCampo( 'PROPFIN' );
 }

if (obtener_valor('MTOPAGVAL')!=''){
	MostrarCampo("MTOPAGVAL");
	asignar_valor('OPCPROVF', 'F');
}else{
	OcultarCampo("MTOPAGVAL");
}

if (obtener_valor('M1MTZCOMV1')!=''){
	MostrarCampo("MTZCOMV");
	MostrarCampo("MONTPAVAL");
}else{
	OcultarCampo("MTZCOMV");
	OcultarCampo("MONTPAVAL");
}

if (obtener_valor('COMENTVAL')!=''){
	MostrarCampo('COMENTVAL');
	MostrarCampo('MTZCOMP',3,4);
}else{
	OcultarCampo('COMENTVAL');
	OcultarCampo('MTZCOMP',3,4);
}

MatrizEstatica('MTZCONF');

PagoDeposito();
PagoFinanciamiento();
PagoProvision();

function PagoDeposito(){
	
	if (obtener_valor('OPCDEPOSIT')=='T'){
		MostrarCampo("FCHNOTIF");
		MostrarCampo("FCHPAGO");
		MostrarCampo("MONTPAGO");
		MostrarCampo("SIANEXDEP");
		MostrarCampo("EMPRECEP");
		MostrarCampo("MTZCOMP");
	}else{
		OcultarCampo("FCHNOTIF");
		OcultarCampo("FCHPAGO");
		OcultarCampo("MONTPAGO");
		OcultarCampo("SIANEXDEP");
		OcultarCampo("EMPRECEP");
		OcultarCampo("MTZCOMP");
		asignar_valor( "MONTPAGO" , "0");

                                           fil=obtener_valor('filMTZCOMP');
                         	for(t=1;t<=fil;t++){
		    asignar_valorM( 'MTZCOMP' , "0" , t ,3 );
	                    }
	}
	return true;
	
}

function PagoProvision(){
	
	if (obtener_valor('OPCPROV')=='T'){
		MostrarCampo("MONTPROV");
		MostrarCampo("MTOPROVDIS");
	}else{
		OcultarCampo("MONTPROV");
		OcultarCampo("MTOPROVDIS");
		asignar_valor( "MONTPROV" , "0");
	}
	return true;
	
}

function PagoFinanciamiento(){
	if (obtener_valor('OPCFINANC')=='T'){
		MostrarGrupo('DATOS DEL FINANCIAMIENTO');

	}else{
		OcultarGrupo('DATOS DEL FINANCIAMIENTO');
                                           asignar_valor( "MONTFINAN" , "0");
	}
	return true;
}


asignar_event( "onchange" , "PagoFinanciamiento()", "OPCFINANC" );
asignar_event( "onchange" , "PagoDeposito()", "OPCDEPOSIT" );
asignar_event( "onchange" , "PagoProvision()", "OPCPROV" );


function QuitarValidos(){

fil=obtener_valor('filMTZCOMP');

	for(t=1;t<=fil;t++){

		if (obtener_valorM('MTZCOMP', t, 4)=='Si'){
                                	$("#CHKBOXMATMTZCOMP"+t).attr('checked', 'checked');
                                	DesSeleccionaFila('MTZCOMP','CHKBOXMATMTZCOMP'+t);
		}
	}

BorrarFila('MTZCOMP','AFNAAQAA');
return true;

}


QuitarValidos();


RegistrarFormula(":MTZCOMP[{+},3]:","MONTPAGO",1);

$("#M1MTZCOMP3").change();

RegistrarFormula(":MONTPAGO: + :MONTPROV: + :MONTFINAN:","MTOPAGTOT",1);

$("#MONTPAGO").change();
$("#MONTPPROV").change();
$("#MONTFINAN").change();

CamposObligatorios(["DESFCHESPPAG","M0MTZCOMP1","M0MTZCOMP2","M0MTZCOMP3","M0MTZCOMP7","DESFCHNOTIF","DESEMPRECEP","DESANEXDEP","DESOPSOLFIN","DESMONTPAGO","DESDESCPAGO"]);

if (obtener_valor('HUBOFIN')==1){
	PagoDeposito();
	PagoProvision();
	MostrarGrupo('DATOS DEL FINANCIAMIENTO');
	$('input[name=OPCFINANC]').attr("disabled",true);
	$('input[name=OPSOLFIN]').attr("disabled",true);
	OcultarCampo('MONTFINAN');
                      if (obtener_valor('OPAPRFIN',0)=='T' && obtenerFloat(obtener_valor('MONTFINAN'), Formatodec).toFixed(2) > obtenerFloat(obtener_valor('MONTAFIN'), Formatodec).toFixed(2) && (obtenerFloat(obtener_valor('MONTAFIN'), Formatodec) + obtenerFloat(obtener_valor('MONTPROV'), Formatodec) + obtenerFloat(obtener_valor('MONTPAGO'), Formatodec)).toFixed(2) < obtenerFloat(obtener_valor('MONTPREF'), Formatodec).toFixed(2) ) 
                         alertmb("El monto aprobado del financiamiento es menor al solicitado y se debe completar el pago",0,1,"Aceptar");                          
}else{
	OcultarCampo('SOLFIN');
	OcultarCampo('FCHSOLFIN');
	OcultarCampo('MOTSOLFINA');
	OcultarCampo('OPAPRFIN');
	OcultarCampo('FCHDECFIN');
	OcultarCampo('COMDECFIN');
	OcultarCampo('MONTAFIN');
}

//FUNCIÓN VALIDAR ENVIO
function ValidaEnvio()
{  
          if ($("#wfrm_formulario").valid()!=true){
			alertmb("Por favor complete los campos obligatorios",0,1,"Aceptar");
	  		return false;
          }else{
			if (obtener_valor('OPCPROV')=="F" && obtener_valor('OPCDEPOSIT')=="F" && obtener_valor('OPCFINANC')=="F" ){
				alertmb("Por favor seleccione la forma de pago",0,1,"Aceptar");
				return false;
			}
			else{
				if (obtener_valor('PAGOTRANSF')!="T" && obtener_valor('PAGOCHEQUE')!="T" && obtener_valor('PAGOLEY')!="T" && obtener_valor('PAGOCERTIF')!="T" && obtener_valor('PAGOEFEC')!="T"){
					alertmb("Por favor seleccione la forma de pago a los trabajadores",0,1,"Aceptar");
					return false;
				} else{
					if ( obtener_valor('OPCFINANC')=="T" && obtener_valor('OPSOLFIN',0)=="F"&& obtener_valor('OPSOLFIN',1)=="F"){
						alertmb("Por favor seleccione el solicitante del financiamiento",0,1,"Aceptar");
						return false;
					}
					else{
						if ( obtener_valor('OPCDEPOSIT')=='T' && obtener_valor('IDEMP')==''){
							alertmb("Por favor seleccione la empresa receptora y el banco",0,1,"Aceptar");
							return false;
						}
						else{
							if (obtener_valor('OPCPROV')=='T' && obtenerFloat(obtener_valor('MONTPROV'), Formatodec) > obtenerFloat(obtener_valor('MTOPROVDIS'), Formatodec)){
								alertmb("El monto a utilizar de provisión no puede ser mayor que el monto disponible",0,1,"Aceptar");
								return false;
							}
							else{
								if (obtener_valor('OPCPROV')=='T' && obtenerFloat(obtener_valor('MONTPROV'), Formatodec) > obtenerFloat(obtener_valor('MONTPREF'), Formatodec)){
									alertmb("El monto a utilizar de provisión no puede ser mayor que el monto de la prefactura",0,1,"Aceptar");
									return false;
								}else{
									if (obtener_valor('OPCFINANC')=='T' && obtenerFloat(obtener_valor('MONTFINAN'), Formatodec) > obtenerFloat(obtener_valor('MONTPREF'), Formatodec)){
										alertmb("El monto a solicitar de financiamiento no puede ser mayor que el monto de la prefactura",0,1,"Aceptar");
										return false;
									}else{
										if ( obtener_valor('HUBOFIN')==0 && obtener_valor('HUBODEP')==0 && obtenerFloat(obtener_valor('MTOPAGTOT'), Formatodec) < obtenerFloat(obtener_valor('MONTPREF'), Formatodec)){
											alertmb("El monto total de los pagos no cubre el monto de la factura",0,1,"Aceptar");
											return false;
										}else{
											if ( (obtener_valor('HUBOFIN')!=0 || obtener_valor('HUBODEP')!=0) && (obtenerFloat(obtener_valor('MTOPAGVAL'), Formatodec) + obtenerFloat(obtener_valor('MTOPAGTOT'), Formatodec)).toFixed(2) < obtenerFloat(obtener_valor('MONTPREF'), Formatodec).toFixed(2)){
												alertmb("El monto total de los pagos mas los pagos validados no cubre el monto de la factura",0,1,"Aceptar");
												return false;
											}else{
												if (obtener_valor('VALPEND')!=0 ){
													alertmb("No puede enviar hasta que el pago sea validado o se haya tomado la decisión de financiamiento",0,1,"Aceptar");
													return false;
												}else{
													return true;
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}	
	}
}


function ValidarBanco(){

filas=obtener_valor('filMTZCOMP');
var mrk=0;
var mrka=0;
	for(e=1;e<=filas;e++){
		if (obtener_valorM('MTZCOMP', e, 1)==''){
			mrk=1;
		}
		
		if (obtener_valorM('MTZCOMP', e, 2)==''){
			mrka=1;
		}
	}
	if(mrk!=0  && obtener_valor('OPCDEPOSIT')=='T'){
		alert('Debe seleccionar el banco para la matriz de comprobantes');
		return false;
	}else{
		if(mrka!=0 && obtener_valor('OPCDEPOSIT')=='T'){
			alert('Debe seleccionar la fecha para la matriz de comprobantes');
			return false;
		}else{
			return true;
		}	
		
	}

}


$("#wfrm_formulario").validate
({
  rules: { 
	FCHPAGO:{required: function(element) { return obtener_valor('OPCDEPOSIT')=='T';}},
	MONTPAGO:{required: function(element) { return obtener_valor('OPCDEPOSIT')=='T';}},
	DESCPAGO:{required: function(element) { return obtener_valor('OPCDEPOSIT')=='T';}},
	SIANEXDEP:{required: function(element) { return obtener_valor('OPCDEPOSIT')=='T';}},
	FCHNOTIF:{required: function(element) { return obtener_valor('OPCDEPOSIT')=='T';}},
	EMPRECEP:{required: function(element) { return obtener_valor('OPCDEPOSIT')=='T';}},
	MONTPROV:{required: function(element) { return obtener_valor('OPCPROV')=='T';}} ,
	MONTFINAN:{required: function(element) { return obtener_valor('OPCFINANC')=='T';}},
                     FCHESPPAG:{required: function(element) { return obtener_valor('OPCFINANC')=='T';}}
         },
  messages: {
	FCHPAGO: "Por favor indique la fecha del pago",
	MONTPAGO:"Por favor indique el monto del pago",
	DESCPAGO:"Por favor indique la descripción del pago",
	SIANEXDEP:"Por favor indique que adjuntó el comprobante de pago",
	FCHNOTIF:"Por favor indique la fecha del notificación del pago",
	EMPRECEP:"Por favor seleccione la empresa receptora",
	MONTPROV:"Por favor indique el monto a tomar de la provisión",
	MONTFINAN:"Por favor indique el monto a solicitar financiamiento",
                     FCHESPPAG:"Por favor indique la fecha de compromiso de pago del financiamiento"
            }
});

ValidarFilas("MTZCOMP",[
["MTZCOMP1",{required: function(element) { return obtener_valor('OPCDEPOSIT')=='T' ;}}],
["MTZCOMP2",{required: function(element) {  return obtener_valor('OPCDEPOSIT')=='T' ;}}],
["MTZCOMP3",{required: function(element) {  return obtener_valor('OPCDEPOSIT')=='T' ;}}],
["MTZCOMP7",{required: function(element) {  return obtener_valor('OPCDEPOSIT')=='T' ;}}]
]);

asignar_event( "onclick" ,"AgregarFilasComprobante()" , "MATNVMTZCOMP");

function AgregarFilasComprobante(){
	fil=obtener_valor( 'filMTZCOMP' );
	ValidarFilaDinamica("MTZCOMP",fil,[
["MTZCOMP1",{required: function(element) {  return obtener_valor('OPCDEPOSIT')=='T' ;}}],
["MTZCOMP2",{required: function(element) {  return obtener_valor('OPCDEPOSIT')=='T' ;}}],
["MTZCOMP3",{required: function(element) {  return obtener_valor('OPCDEPOSIT')=='T';}}],
["MTZCOMP7",{required: function(element) {  return obtener_valor('OPCDEPOSIT')=='T';}}]
]);

	return true;
}

$("#MONTPROV").blur(function() {
 if (obtener_valor('OPCPROV')=='T' && obtenerFloat(obtener_valor('MONTPROV'), Formatodec) > obtenerFloat(obtener_valor('MTOPROVDIS'), Formatodec)){
       alertmb("El monto a utilizar de provisión no puede ser mayor que el monto disponible",0,1,"Aceptar");
       asignar_valor("MONTPROV","");
}
});


//EJECUTAR FUNCIÓN DE VALIDAR ENVIO	
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar" );
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar1" );
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
