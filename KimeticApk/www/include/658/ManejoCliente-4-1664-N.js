OcultarCampo( "wl_bobjetar",2);
asignar_valor( "wl_baprobar","Enviar");
asignar_valor( "wl_baprobar1","Enviar");

OcultarGrupo( 'DATOS DEL FINANCIAMIENTO' );
OcultarGrupo( 'DATOS DEL PAGO');
OcultarGrupo( 'DATOS DE LA FACTURA' );
OcultarGrupo( 'DATOS DE LA NOTA DE CREDITO' );
OcultarGrupo( 'LISTA DE TAREAS');
OcultarGrupo( 'PAGOS');
OcultarGrupo( 'DATOS DEL CORREO ELECTRONICO');
OcultarGrupo( 'RECEPCION DE SOPORTE');
OcultarGrupo( 'COMPROBANTES DE GASTOS');

OcultarGrupo( 'GESTION DE NOTA DE CREDITO' );
OcultarGrupo( 'PAGO DE COMISION' );

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


RegistrarFormula(":MTZFACOM[{+},3]:","MTOFACT",1);

MatrizEstatica( 'MTZFACOM' );

//OcultarCampo('USARPROV');


NroFilaM('MTZFACOM');
asignar_event( "onclick" , "NroFilaM('MTZFACOM')" , "MATNVMTZFACOM");

NroFilaM('MTZNOT');
asignar_event( "onclick" , "NroFilaM('MTZNOT')" , "MATNVMTZNOT");



function ValidaEnvio()
{  

    if ($("#wfrm_formulario").valid()!=true){
            alertmb("Por favor complete los campos obligatorios",0,1,"Aceptar");
             return false;
    }else{
	return true;
   }
}

CamposObligatorios(["DESADJUNTOFAC","M0MTZFACOM5", "M0MTZFACOM2", "M0MTZFACOM3", "M0MTZFACOM4"]);


$("#wfrm_formulario").validate({
  rules: { 
           SIADJUNTFA: {required: function(element) { return true;}}//,
          // SIUSAR:{required: function(element) {return obtener_valor('SALDOCUBRE',1) == 'T' ;}}

		   
         },
  messages: {
	SIADJUNTFA: "Por favor indique que si anexo la factura"//,
	//SIUSAR: "Por favor indique si desea usar la provisión"
            }
});


ValidarFilas("MTZFACOM",[
["MTZFACOM2",{required: function(element) { return true;}}],
["MTZFACOM3",{required: function(element) {  return true;}}],
["MTZFACOM4",{required: function(element) {  return true;}}],
["MTZFACOM5",{required: function(element) {  return true;}}]
]);

asignar_event( "onclick" ,"AgregarFilasFactura()" , "MATNVMTZFACOM");



//EJECUTAR FUNCIÓN DE VALIDAR ENVIO 
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar" );
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar1" );

/*MostrarProv();
function MostrarProv(){

	if(obtener_valor('SALDOCUBRE',1)== 'T'){
		MostrarCampo('USARPROV');

}	else if(obtener_valor('SALDOCUBRE',1)!= 'T'){

		OcultarCampo( 'USARPROV');
	}
return true;
}

asignar_event( 'onclick' ,'MostrarProv()', 'SALDOCUBRE');*/
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
