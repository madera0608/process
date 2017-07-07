OcultarCampo( "wl_bobjetar",2);
asignar_valor( "wl_baprobar","Enviar");
asignar_valor( "wl_baprobar1","Enviar");

OcultarGrupo( 'DATOS DE LA FACTURA' );
OcultarGrupo( 'DATOS DE LA NOTA DE CREDITO' );
OcultarGrupo( 'DATOS DEL FINANCIAMIENTO' );
OcultarGrupo( 'DATOS DEL PAGO');
OcultarGrupo( 'LISTA DE TAREAS');

OcultarGrupo( 'RECEPCION DE SOPORTE' );
OcultarGrupo( 'COMPROBANTES DE GASTOS' );
OcultarGrupo( 'DATOS DE FACTURA' );
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



CamposObligatorios(["M0MTZANEXO1","DESFCHENTREG","DESCOMENTCOMP"]);

//FUNCIÓN VALIDAR ENVIO
function ValidaEnvio()
{  
          if ($("#wfrm_formulario").valid()!=true){
			alertmb("Por favor complete los campos obligatorios",0,1,"Aceptar");
	  		return false;
          }else{
		return true;
	}
}

if (obtener_valor( "ENVIAEMAIL", 0 )!= 'T' && obtener_valor( "ENVIAEMAIL", 1 )!='T'){
  asignar_valor('ENVIAEMAIL','T',1);
  }
 
HabilitaCampos("COMPAGO","SIENTREG",[[1,"ENVIAEMAIL"],[1,"FCHENTREG"]]);
HabilitaCampos("ENVIAEMAIL","SIENVIAR",[[3,"DATOS DEL CORREO ELECTRONICO"]]);


//OcularGrupo('DATOS DEL CORREO ELECTRÓNICO');

$("input[name='ENVIAEMAIL']").click(function() { 
   HabilitaCampos("ENVIAEMAIL","SIENVIAR",[[3,"DATOS DEL CORREO ELECTRONICO"]]);
});

$("input[name='COMPAGO']").click(function() { 
   HabilitaCampos("COMPAGO","SIENTREG",[[1,"ENVIAEMAIL"],[1,"FCHENTREG"]]);
});

$("#wfrm_formulario").validate
({
  rules: { 
		FCHENTREG:  {required: function(element) { return obtener_valor('COMPAGO',0)=="T" ;}},
		COMPAGO: {required: function(element) { return obtener_valor('COMPAGO',0)=="T" ;}},
	    M1MTZANEXO1:{required: function(element) { return obtener_valor('COMPAGO',0)=="T" ;}}
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
