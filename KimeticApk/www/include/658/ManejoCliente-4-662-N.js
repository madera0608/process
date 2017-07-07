OcultarCampo( "wl_bobjetar",2);
asignar_valor( "wl_baprobar","Registrar");
asignar_valor( "wl_baprobar1","Registrar");

OcultarGrupo( "DATOS DEL FINANCIAMIENTO");
OcultarGrupo( "DATOS DEL PAGO");

OcultarGrupo( 'LISTA DE TAREAS' );
OcultarGrupo( 'PAGOS' );
OcultarGrupo( 'DATOS DEL CORREO ELECTRONICO' );
OcultarGrupo( 'RECEPCION DE SOPORTE' );
OcultarGrupo( 'COMPROBANTES DE GASTOS' );
OcultarGrupo( 'DATOS DE FACTURA' );
OcultarGrupo( 'GESTION DE NOTA DE CREDITO' );
OcultarGrupo( 'PAGO DE COMISION' );
OcultarCampo('MTODISPER');


function HabilitarNC(){

	if (obtener_valor('PROVISION')=='T'){
		MostrarGrupo('DATOS DE LA NOTA DE CREDITO');
		MostrarCampo('MTODISPER');
	}else{
		OcultarGrupo('DATOS DE LA NOTA DE CREDITO');
			OcultarCampo('MTODISPER');
			asignar_valor('MTODISPER','');
	}

return true;

}
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

RegistrarFormula(":MTZNOT[{+},3]:","MONTNOT",1);

$("#M1MTZNOT3").change();

RegistrarFormula(":MTZFACT[{+},3]:","MONTFACT",1);

$("#M1MTZFACT3").change();
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
