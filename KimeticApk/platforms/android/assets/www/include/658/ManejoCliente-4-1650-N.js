OcultarCampo( "wl_bobjetar",2);
asignar_valor( "wl_baprobar","Enviar");
asignar_valor( "wl_baprobar1","Enviar");

OcultarGrupo( 'DATOS DE LA FACTURA' );
OcultarGrupo( 'DATOS DE LA NOTA DE CREDITO' );
OcultarGrupo( 'DATOS DEL FINANCIAMIENTO' );
OcultarGrupo( 'DATOS DEL PAGO');
OcultarGrupo( 'LISTA DE TAREAS');

OcultarGrupo( 'DATOS DEL CORREO ELECTRONICO' );
OcultarGrupo( 'RECEPCION DE SOPORTE' );
OcultarGrupo( 'COMPROBANTES DE GASTOS' );
OcultarGrupo( 'DATOS DE FACTURA' );
OcultarGrupo( 'GESTION DE NOTA DE CREDITO' );
OcultarGrupo( 'PAGO DE COMISION' );

OcultarGrupo('VIATICOS');
OcultarGrupo('DATOS DEL BENEFICIARIO');
OcultarGrupo('DATOS DEL PROVEEDOR');

OcultarCampo('INREPORTAR');
OcultarCampo('INSOPORTE');

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

function AsignarNroFila(mat){
  var fil = obtener_valor( 'fil'+mat );
  for(e=1;e<=fil;e++){
	asignar_valorM('MTZPAGOS',e,e,5);
  }
    return true;
}

AsignarNroFila('MTZPAGOS');

asignar_event( "onclick" , "AsignarNroFila('MTZPAGOS')" , "MATNVMTZDETA");
asignar_event( "onclick" ,"AsignarNroFila('MTZPAGOS')" , "MATBOMTZDETA");

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

/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
