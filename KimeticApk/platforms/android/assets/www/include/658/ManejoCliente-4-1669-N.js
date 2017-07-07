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
//OcultarGrupo( 'DATOS DE FACTURA');
OcultarGrupo( 'GESTION DE NOTA DE CREDITO');

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

MatrizEstatica( 'MTZCOMI' );
RegistrarFormula(":MTZCOMI[{+},3]:","MTOPAGO",1);
RegistrarFormula(":MTZFACOM[{+},3]:","MTOFACT",1);

$("#M1MTZCOMI3").change();
$("#M1MTZFACOM3").change();

OcultarCampo( 'USA_PROV' );

function MostrarUsoProv(){
	if(obtener_valor('INPAGOVA',1)=='T'){
		MostrarCampo( 'USA_PROV' );
	}else if(obtener_valor('INPAGOVA',1)!='T'){
		OcultarCampo( 'USA_PROV' );
	}
return true;
}
asignar_event( 'onclick' , 'MostrarUsoProv()' , 'INPAGOVA');

CamposObligatorios(["DESUSA_PROV"]);

$("#wfrm_formulario").validate
({
  rules: { 
	USA_PROV:{required: function(element) { return obtener_valor('INPAGOVA',1)=='T';}}

         },
  messages: {
	USA_PROV: "Por favor indique si desea usar la provisión"
            }
});



//FUNCIÓN VALIDAR ENVIO
function ValidaEnvio()
{  
          if ($("#wfrm_formulario").valid()!=true){
			alertmb("Por favor complete los campos obligatorios",0,1,"Aceptar");
	  		return false;
          }
return true;
}

//EJECUTAR FUNCIÓN DE VALIDAR ENVIO	
asignar_event( "onclick" , "ValidaEnvio() ", "wl_baprobar" );
asignar_event( "onclick" , "ValidaEnvio() ", "wl_baprobar1" );

/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
