asignar_valor( 'wl_baprobar', 'Enviar');
asignar_valor( 'wl_baprobar1', 'Enviar');

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

OcultarCampo( 'wl_bobjetar',2 );
OcultarCampo( 'wl_bobjetar1',2 );

$("#MOTIVO").change( function (){

		if (obtener_valor('MOTIVO') == 2){
			    MostrarCampo('INREPORTAR');
			    OcultarCampo('INSOPORTE');
			OcultarGrupo('DATOS DEL PROVEEDOR' );
			MostrarGrupo('DATOS DEL BENEFICIARIO');
			MostrarGrupo('VIATICOS');

		}
		if(obtener_valor('MOTIVO') == 1){
			OcultarCampo('INREPORTAR');
			MostrarCampo('INSOPORTE');
				MostrarGrupo('DATOS DEL PROVEEDOR');
				OcultarGrupo('DATOS DEL BENEFICIARIO');
				OcultarGrupo('VIATICOS');
	
		}
	
});
$("#MOTIVO").change();

OcultarCampo('MTODISPER');
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



if(obtener_valor('FINAN')== 'F'){
	OcultarGrupo( 'DATOS DEL FINANCIAMIENTO');
}
else{

if(obtener_valor('SOLFIN')== ''){
	OcultarCampo( 'SOLFIN');
}

if(obtener_valor('FCHSOLFIN')== ''){
	OcultarCampo( 'FCHSOLFIN');
}

if(obtener_valor('MOTSOLFINA')== ''){
	OcultarCampo( 'MOTSOLFINA');
}

if(obtener_valor('TPOFINANC')== 'F'){
	OcultarCampo( 'TPOFINANC');
}

if(obtener_valor('OPAPRFIN')== 'F'){
	OcultarCampo( 'OPAPRFIN');
}

if(obtener_valor('FCHDECFIN')== ''){
	OcultarCampo( 'FCHDECFIN');
}

if(obtener_valor('COMDECFIN')== ''){
	OcultarCampo( 'COMDECFIN');
}

if(obtener_valor('MONTAFIN')== ''){
	OcultarCampo( 'MONTAFIN');
}

if(obtener_valor('FCHESPPAG')== ''){
	OcultarCampo( 'FCHESPPAG');
}
}

//
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

function PagoDeposito(){
	
	if (obtener_valor('DEPOSITO')=='T'){
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

CamposObligatorios(["M0MTZCOMP1","M0MTZCOMP2","M0MTZCOMP3","M0MTZCOMP7","DESFCHNOTIF","DESANEXDEP","DESOPSOLFIN","DESMONTPAGO","DESDESCPAGO","DESEMPRECEP", "DESMONTFINAN"]);

$("#wfrm_formulario").validate
({
  rules: { 
	FCHPAGO:{required: function(element) { return obtener_valor('DEPOSITO')=='T';}},
	MONTPAGO:{required: function(element) { return obtener_valor('DEPOSITO')=='T';}},
	DESCPAGO:{required: function(element) { return true ;}},
	SIANEXDEP:{required: function(element) { return obtener_valor('DEPOSITO')=='T';}},
	FCHNOTIF:{required: function(element) { return obtener_valor('DEPOSITO')=='T';}},
	EMPRECEP:{required: function(element) { return obtener_valor('DEPOSITO')=='T';}},
	MONTFINAN:{required: function(element) { return obtener_valor('FINAN')=='T';}} 

         },
  messages: {
	FCHPAGO: "Por favor indique la fecha del pago",
	MONTPAGO:"Por favor indique el monto del pago",
	DESCPAGO:"Por favor indique la descripción del pago",
	SIANEXDEP: "Por favor indique que adjunto el comprobante de pago",
	FCHNOTIF:"Por favor indique la fecha del notificación del pago",
	EMPRECEP:"Por favor seleccione la empresa receptora",
	MONTFINAN:"Por favor indique el monto a solicitar financiamiento",

            }
});

ValidarFilas("MTZCOMP",[
["MTZCOMP1",{required: function(element) {  return obtener_valor('DEPOSITO')=='T' ;}}],
["MTZCOMP2",{required: function(element) {  return obtener_valor('DEPOSITO')=='T' ;}}],
["MTZCOMP3",{required: function(element) {  return obtener_valor('DEPOSITO')=='T';}}],
["MTZCOMP7",{required: function(element) {  return obtener_valor('DEPOSITO')=='T';}}]
]);

asignar_event( "onclick" ,"AgregarFilasComprobante()" , "MATNVMTZCOMP");

function AgregarFilasComprobante(){
	fil=obtener_valor( 'filMTZCOMP' );
	ValidarFilaDinamica("MTZCOMP",fil,[
["MTZCOMP1",{required: function(element) {  return obtener_valor('DEPOSITO')=='T' ;}}],
["MTZCOMP2",{required: function(element) {  return obtener_valor('DEPOSITO')=='T' ;}}],
["MTZCOMP3",{required: function(element) {  return obtener_valor('DEPOSITO')=='T';}}],
["MTZCOMP7",{required: function(element) {  return obtener_valor('DEPOSITO')=='T';}}]
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
			if (obtener_valor('DEPOSITO')=="F" && obtener_valor('FINAN')=="F" ){
				alertmb("Por favor seleccione la forma de pago",0,1,"Aceptar");
				return false;
			}
			else{
				if (obtener_valor('FINAN')=="T" && obtener_valor('OPSOLFIN',0)=="F"&& obtener_valor('OPSOLFIN',1)=="F"){
					alertmb("Por favor seleccione el solicitante del financiamiento",0,1,"Aceptar");
					return false;
				}
				else{
					if (obtener_valor('DEPOSITO')=='T' && obtener_valor('IDEMP')==''){
						alertmb("Por favor seleccione la empresa receptora",0,1,"Aceptar");
						return false;
					}
					else{
						if (obtener_valor('FINAN')=='T' && obtenerFloat(obtener_valor('MONTFINAN'), Formatodec) > (obtenerFloat(obtener_valor('MTO_PAGO'), Formatodec) - obtenerFloat(obtener_valor('MTODISPER'), Formatodec))){
							alertmb("El monto a solicitar de financiamiento no puede ser mayor que el monto a pagar",0,1,"Aceptar");
							return false;
						}else{

							if (obtener_valor('HUBOFIN')==0 && obtener_valor('HUBODEP')==0 && obtenerFloat(obtener_valor('MTOPAGTOT'), Formatodec) < (obtenerFloat(obtener_valor('MTO_PAGO'), Formatodec) - obtenerFloat(obtener_valor('MTODISPER'), Formatodec))){
								alertmb("El monto total de los pagos no cubre el monto a pagar",0,1,"Aceptar");
								return false;
							}else{
								if ((obtener_valor('HUBOFIN')!=0 || obtener_valor('HUBODEP')!=0) && (obtenerFloat(obtener_valor('MTOPAGVAL'), Formatodec) + obtenerFloat(obtener_valor('MTOPAGTOT'), Formatodec) ) < (obtenerFloat(obtener_valor('MTO_PAGO'), Formatodec) - obtenerFloat(obtener_valor('MTODISPER'), Formatodec))){
									alertmb("El monto total de los pagos mas los pagos validados no cubre el monto total a pagar",0,1,"Aceptar");
									return false;
								}/*else{

									if (obtener_valor('VALPEND')!=0 ){
										alertmb("No puede enviar hasta que el pago sea validado o se haya tomado la decisión de financiamiento",0,1,"Aceptar");
										return false;
									}*/else{
										return true;
									}
								//}
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
