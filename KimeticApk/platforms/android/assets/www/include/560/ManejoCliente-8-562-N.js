if (obtener_valor('COMENTVAL')!=''){
	MostrarCampo('COMENTVAL');
	MostrarCampo('MTZCOMP',3,4);
}else{
	OcultarCampo('COMENTVAL');
	OcultarCampo('MTZCOMP',3,4);
}


if (obtener_valor('M1MTZCOMV1')!=''){
	MostrarCampo("MTZCOMV");
	MostrarCampo("MONTPAVAL");
}else{
	OcultarCampo("MTZCOMV");
	OcultarCampo("MONTPAVAL");
}


MatrizEstatica('MTZCONF');
PagoDeposito();
PagoFinanciamiento();

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
		asignar_valor( "MONTPAGO" , "");
	}
	return true;
	
}


function PagoFinanciamiento(){
	if (obtener_valor('OPCFINANC')=='T'){
		MostrarGrupo('DATOS DEL FINANCIAMIENTO');

	}else{
		OcultarGrupo('DATOS DEL FINANCIAMIENTO');

	}
	return true;
}


asignar_event( "onchange" , "PagoFinanciamiento()", "OPCFINANC" );
asignar_event( "onchange" , "PagoDeposito()", "OPCDEPOSIT" );




function MontoProv(){

	if (obtener_valor('PROVOPER')=='T'){
		MostrarCampo('MONTUTOPER');
	}else{
		OcultarCampo('MONTUTOPER');
		asignar_valor('MONTUTOPER','');
	}

/*	if (obtener_valor('PROVFINIQ')=='T'){
		MostrarCampo('MONTUTFINI');
	}else{
		OcultarCampo('MONTUTFINI');
		asignar_valor('MONTUTFINI','');
	}*/

return true;

}

MontoProv();

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

RegistrarFormula(":MONTPAGO: + :MONTFINAN:","MTOPAGTOT",1);

$("#MONTPAGO").change();
$("#MONTFINAN").change();


if (obtener_valor('HUBOFIN')==1){
	asignar_valor('OPCFINANC','F',0);	
	PagoDeposito();
	MostrarGrupo('DATOS DEL FINANCIAMIENTO');
	$('input[name=OPCFINANC]').attr("disabled",true);
	$('input[name=OPSOLFIN]').attr("disabled",true);
	OcultarCampo('MONTFINAN');
	asignar_valor( "MONTFINAN" , "");

}else{
	OcultarCampo('SOLFIN');
	OcultarCampo('FCHSOLFIN');
	OcultarCampo('MOTSOLFINA');
	OcultarCampo('OPAPRFIN');
	OcultarCampo('FCHDECFIN');
	OcultarCampo('COMDECFIN');
	OcultarCampo('MONTAFIN');
	
}


CamposObligatorios(["M0MTZCOMP1","M0MTZCOMP2","M0MTZCOMP3","M0MTZCOMP7","DESFCHNOTIF","DESANEXDEP","DESOPSOLFIN","DESOPCPAGO","DESMONTPAGO","DESDESCPAGO","DESEMPRECEP", "DESMONTFINAN"]);


$("#wfrm_formulario").validate
({
  rules: { 
	FCHPAGO:{required: function(element) { return obtener_valor('OPCDEPOSIT')=='T';}},
	MONTPAGO:{required: function(element) { return obtener_valor('OPCDEPOSIT')=='T';}},
	DESCPAGO:{required: function(element) { return true ;}},
	SIANEXDEP:{required: function(element) { return obtener_valor('OPCDEPOSIT')=='T';}},
	FCHNOTIF:{required: function(element) { return obtener_valor('OPCDEPOSIT')=='T';}},
	EMPRECEP:{required: function(element) { return obtener_valor('OPCDEPOSIT')=='T';}},
	MONTFINAN:{required: function(element) { return obtener_valor('OPCFINANC')=='T';}} 
	//M1MTZCONF1:{required: function(element) { return true;}},
	//M1MTZCONF2:{required: function(element) { return true;}},
	//M1MTZCONF3:{required: function(element) { return true;}},
	//M1MTZCONF4:{required: function(element) { return  true;}}
         },
  messages: {
	FCHPAGO: "Por favor indique la fecha del pago",
	MONTPAGO:"Por favor indique el monto del pago",
	DESCPAGO:"Por favor indique la descripción del pago",
	SIANEXDEP: "Por favor indique que adjunto el comprobante de pago",
	FCHNOTIF:"Por favor indique la fecha del notificación del pago",
	EMPRECEP:"Por favor seleccione la empresa receptora",
	MONTFINAN:"Por favor indique el monto a solicitar financiamiento",
	M1MTZCONF1:"Por favor seleccione el contacto que confirmo la prenómina",
	M1MTZCONF2:"Por favor indique la fecha de confirmación",
	M1MTZCONF3:"Por favor indique la hora de confirmación",
	M1MTZCONF4: "Por favor seleccione el canal utilizado para la confirmación"
            }
});


ValidarFilas("MTZCOMP",[
["MTZCOMP1",{required: function(element) {  return obtener_valor('OPCDEPOSIT')=='T' ;}}],
["MTZCOMP2",{required: function(element) {  return obtener_valor('OPCDEPOSIT')=='T' ;}}],
["MTZCOMP3",{required: function(element) {  return obtener_valor('OPCDEPOSIT')=='T';}}],
["MTZCOMP7",{required: function(element) {  return obtener_valor('OPCDEPOSIT')=='T';}}]
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



//FUNCIÓN VALIDAR ENVIO
function ValidaEnvio()
{  
          if ($("#wfrm_formulario").valid()!=true){
			alertmb("Por favor complete los campos obligatorios",0,1,"Aceptar");
	  		return false;
          }else{
			if (obtener_valor('OPCDEPOSIT')=="F" && obtener_valor('OPCFINANC')=="F" ){
				alertmb("Por favor seleccione la forma de pago",0,1,"Aceptar");
				return false;
			}
			else{
				if (obtener_valor('OPCFINANC')=="T" && obtener_valor('OPSOLFIN',0)=="F"&& obtener_valor('OPSOLFIN',1)=="F"){
					alertmb("Por favor seleccione el solicitante del financiamiento",0,1,"Aceptar");
					return false;
				}
				else{
					if (obtener_valor('OPCDEPOSIT')=='T' && obtener_valor('IDEMP')==''){
						alertmb("Por favor seleccione la empresa receptora",0,1,"Aceptar");
						return false;
					}
					else{
						if (obtener_valor('OPCFINANC')=='T' && obtenerFloat(obtener_valor('MONTFINAN'), Formatodec) > (obtenerFloat(obtener_valor('MTOPAGAR'), Formatodec) - obtenerFloat(obtener_valor('MONTUTTOT'), Formatodec))){
							alertmb("El monto a solicitar de financiamiento no puede ser mayor que el monto a pagar",0,1,"Aceptar");
							return false;
						}else{

							if (obtener_valor('HUBOFIN')==0 && obtener_valor('HUBODEP')==0 && obtenerFloat(obtener_valor('MTOPAGTOT'), Formatodec) < (obtenerFloat(obtener_valor('MTOPAGAR'), Formatodec) - obtenerFloat(obtener_valor('MONTUTTOT'), Formatodec))){
								alertmb("El monto total de los pagos no cubre el monto a pagar",0,1,"Aceptar");
								return false;
							}else{
								if ((obtener_valor('HUBOFIN')!=0 || obtener_valor('HUBODEP')!=0) && (obtenerFloat(obtener_valor('MTOPAGVAL'), Formatodec) + obtenerFloat(obtener_valor('MTOPAGTOT'), Formatodec) ) < (obtenerFloat(obtener_valor('MTOPAGAR'), Formatodec) - obtenerFloat(obtener_valor('MONTUTTOT'), Formatodec))){
									alertmb("El monto total de los pagos mas los pagos validados no cubre el monto total a pagar",0,1,"Aceptar");
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

//EJECUTAR FUNCIÓN DE VALIDAR ENVIO	
asignar_event( "onclick" , "ValidaEnvio() ", "wl_baprobar" );
asignar_event( "onclick" , "ValidaEnvio() ", "wl_baprobar1" );
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
