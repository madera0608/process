OcultarCampo( "wl_bobjetar",2);
asignar_valor( "wl_baprobar","Enviar");
asignar_valor( "wl_baprobar1","Enviar");

OcultarGrupo( 'LISTA DE TAREAS' );
OcultarGrupo( 'PAGOS' );
OcultarGrupo( 'DATOS DEL CORREO ELECTRONICO' );
OcultarGrupo( 'RECEPCION DE SOPORTE' );
OcultarGrupo( 'COMPROBANTES DE GASTOS' );
OcultarGrupo( 'DATOS DE FACTURA' );
OcultarGrupo( 'GESTION DE NOTA DE CREDITO' );
OcultarGrupo( 'PAGO DE COMISION' );

OcultarGrupo('DATOS DEL BENEFICIARIO');
OcultarGrupo('VIATICOS');
OcultarGrupo('DATOS DEL PROVEEDOR');

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


NroFilaM('MTZFACT');
asignar_event( "onclick" , "NroFilaM('MTZFACT')" , "MATNVMTZFACT");

NroFilaM('MTZNOT');
asignar_event( "onclick" , "NroFilaM('MTZNOT')" , "MATNVMTZNOT");


function HabilitarNC(){

	if (obtener_valor('PROVISION')=='T'){
		MostrarGrupo('DATOS DE LA NOTA DE CREDITO');
	}else{
		OcultarGrupo('DATOS DE LA NOTA DE CREDITO');
	}

return true;

}
HabilitarNC();

RegistrarFormula(":MTZNOT[{+},3]:","MONTNOT",1);

$("#M1MTZNOT3").change();

RegistrarFormula(":MTZFACT[{+},3]:","MONTFACT",1);

$("#M1MTZFACT3").change();

/*$("#CODFACTU").blur(function() {  

var a = $("#CODFACTU").val();
   if (a.substring(12,14)!="17"   &&  a.substring(12,14)!="18"  &&  a.substring(12,14)!="22") {
            alertmb("Por favor corregir el código de facturación, ya que no contiene en su código el valor 17 que representa los Viaticos o el 18 que representa pago a terceros",0,1,"Aceptar");
             return false;
    }
return true;});*/




function ValidaEnvio()
{  

  //var a = $("#CODFACTU").val();

   /*if (a.substring(12,14)!="17"   &&  a.substring(12,14)!="18") {
            alertmb("Por favor corregir el código de facturación, ya que no contiene en su código el valor 17 que representa los Viaticos o el 18 que representa pago a terceros",0,1,"Aceptar");
             return false;
    }*/

    if ($("#wfrm_formulario").valid()!=true){
            alertmb("Por favor complete los campos obligatorios",0,1,"Aceptar");
             return false;
    }else{
	return true;
   }
}

CamposObligatorios(["DESCODFACTU","DESFCHFACT", "DESANEXFACT","M0MTZFACT5", "M0MTZFACT2", "M0MTZFACT3", "M0MTZFACT4","DESFCHNOT","DESANEXNOT","M0MTZNOT2","M0MTZNOT3","M0MTZNOT4","M0MTZNOT5"]);


$("#wfrm_formulario").validate({
  rules: { 
           FCHFACT:    {required: function(element) { return true;}},
           SIANEXFACT: {required: function(element) { return true;}},
           CODFACTU: {required: function(element) { return true;}},
		   FCHNOT:{required: function(element) { return obtener_valor('PROVISION')== 'T';}},
		  SIANEXNOT:{required: function(element) { return obtener_valor('PROVISION')== 'T';}}
		   
         },
  messages: {
	FCHFACT: "Por favor indique la fecha de la factura",
	SIANEXFACT:"Por favor indique si anexo la factura",
	CODFACTU:"Por favor indique el código de facturación de la factura a pagar",
	FCHNOT:"Por favor indique la fecha de la nota de crédito",
	SIANEXNOT:"Por favor indique que la(s) nota(s) de crédito fueron anexadas"
            }
});


ValidarFilas("MTZNOT",[
["MTZNOT2",{required: function(element) { return obtener_valor('PROVISION')== 'T';}}],
["MTZNOT3",{required: function(element) { return obtener_valor('PROVISION')== 'T';}}],
["MTZNOT4",{required: function(element) { return obtener_valor('PROVISION')== 'T';}}],
["MTZNOT5",{required: function(element) { return obtener_valor('PROVISION')== 'T';}}]
]);

ValidarFilas("MTZFACT",[
["MTZFACT2",{required: function(element) { return true;}}],
["MTZFACT3",{required: function(element) {  return true;}}],
["MTZFACT4",{required: function(element) {  return true;}}],
["MTZFACT5",{required: function(element) {  return true;}}]
]);

asignar_event( "onclick" ,"AgregarFilasFactura()" , "MATNVMTZFACT");

function AgregarFilasFactura(){
	fil=obtener_valor( 'filMTZFACT' );
	ValidarFilaDinamica("MTZFACT",fil,[
["MTZFACT2",{required: function(element) { return true;}}],
["MTZFACT3",{required: function(element) {  return true;}}],
["MTZFACT4",{required: function(element) {  return true;}}],
["MTZFACT5",{required: function(element) {  return true;}}]
]);

	return true;
}

asignar_event( "onclick" ,"AgregarFilasNota()" , "MATNVMTZNOT");

function AgregarFilasNota(){
	fil=obtener_valor( 'filMTZNOT' );
	ValidarFilaDinamica("MTZNOT",fil,[
["MTZNOT2",{required: function(element) { return obtener_valor('PROVISION')== 'T';}}],
["MTZNOT3",{required: function(element) { return obtener_valor('PROVISION')== 'T';}}],
["MTZNOT4",{required: function(element) { return obtener_valor('PROVISION')== 'T';}}],
["MTZNOT5",{required: function(element) { return obtener_valor('PROVISION')== 'T';}}]
]);

	return true;
}


//EJECUTAR FUNCIÓN DE VALIDAR ENVIO 
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar" );
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar1" );


OcultarCampo('INREPORTAR');
$("#MOTIVO").change( function (){

		if (obtener_valor('MOTIVO') == 2){
			MostrarCampo('INREPORTAR');

		}
		else if(obtener_valor('MOTIVO') != 2){
			OcultarCampo('INREPORTAR');
			asignar_valor('INREPORTAR','F',0);
			asignar_valor('INREPORTAR','F',1);

		}
	
});
$("#MOTIVO").change();

$("#PROVISION").click( function (){

		if (obtener_valor('PROVISION') == 'T'){
			MostrarCampo('MTODISPER');
		}
		if(obtener_valor('PROVISION') == 'F'){
			OcultarCampo('MTODISPER');
			asignar_valor('MTODISPER','');
		}
	
});
$("#PROVISION").change();
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
