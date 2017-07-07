OcultarCampo( "wl_bobjetar",2);
asignar_valor("wl_baprobar","Enviar");
asignar_valor("wl_baprobar1","Enviar");

OcultarGrupo('DATOS DEL FINANCIAMIENTO');
OcultarGrupo('DATOS DEL PAGO');
OcultarGrupo('DATOS DE LA FACTURA');
OcultarGrupo('DATOS DE LA NOTA DE CREDITO' );
OcultarGrupo('LISTA DE TAREAS');
OcultarGrupo('PAGOS');
OcultarGrupo('DATOS DEL CORREO ELECTRONICO');
OcultarGrupo('RECEPCION DE SOPORTE');
OcultarGrupo('COMPROBANTES DE GASTOS');
OcultarGrupo('PAGO DE COMISION');

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


if(obtener_valor('USA_PROV',0)=='T'){
	MostrarGrupo( 'PAGO DE COMISION' );
}else if(obtener_valor('USA_PROV',0)!='T'){
	OcultarGrupo( 'PAGO DE COMISION' );
}

MatrizEstatica('MTZNOTCR');
NroFilaM('MTZNOTCR');
asignar_event( "onclick" , "NroFilaM('MTZNOTCR')" , "MATNVMTZNOTCR");

CamposObligatorios(["DESADJUNOT","M0MTZNOTCR2","M0MTZNOTCR3","M0MTZNOTCR4","M0MTZNOTCR5"]);


$("#wfrm_formulario").validate({
  rules: { 

		   ADJUNOT:{required: function(element) { return true; }}
		   
         },
  messages: {
	ADJUNOT:"Por favor indique que la nota de crédito fue anexada"
            }
});


ValidarFilas("MTZNOT",[
["MTZNOTCR2",{required: function(element) { return true;}}],
["MTZNOTCR3",{required: function(element) { return true;}}],
["MTZNOTCR4",{required: function(element) { return true;}}],
["MTZNOTCR5",{required: function(element) { return true;}}]
]);

function ValidaEnvio()
{  

    if ($("#wfrm_formulario").valid()!=true){
            alertmb("Por favor complete los campos obligatorios",0,1,"Aceptar");
             return false;
    }else{
	return true;
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
