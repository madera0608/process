CamposObligatorios(["M0MTZNOMIN20"]);
HabilitaCampos("OPCAPRUEB","NOAPRUEB",[[3,"DATOS DE LA BAJA DE NÓMINA"]]);
MatrizEstatica('MTZNOMIN');
//OCULTAR COLUMNA DE MOTIVOS Y BAJA EMPLEADO
fil=obtener_valor( 'filMTZNOMIN' );
for(e=1;e<=fil;e++){
	if ($("#M"+e+"MTZNOMIN19").attr('checked')!=true){
		$("#M"+e+"MTZNOMIN20").hide();
		$("#M"+e+"MTZNOMIN20").val("");
		$("#M"+e+"MTZNOMIN21").hide();
		$("#M"+e+"MTZNOMIN21").attr('checked',false);
	}
}

function validarBaja(){
	fil=obtener_valor( 'filMTZNOMIN' );
	for(e=1;e<=fil;e++){
		if ($("#M"+e+"MTZNOMIN19").attr('checked')==true)
			return true;
	}
	return false;
}

function validarMotivos(){
	fil=obtener_valor( 'filMTZNOMIN' );
	for(e=1;e<=fil;e++){
		var motivo= obtener_valorM('MTZNOMIN',e,20);
		if ($("#M"+e+"MTZNOMIN19").attr('checked')==true && motivo=='')
			return false;
	}
	return true;
}

//FUNCIÓN VALIDAR ENVIO
function ValidaEnvio()
{  
          	if (!validarBaja()){
		alertmb("Debe seleccionar al menos una nómina a dar de baja",0,1,"Aceptar");
	  	return false;
          	} else{
		if (!validarMotivos()){
			alertmb("Debe seleccionar un motivo por cada nomina a dar de baja",0,1,"Aceptar");
	  		return false;
		}
		else
			return true;
	}
}

asignar_event_matriz( "onchange", "HabilitaPorCheck('MTZNOMIN',19, 20)", "MTZNOMIN", 19);
//EJECUTAR FUNCIÓN DE VALIDAR ENVIO	
asignar_event( "onclick" , "ValidaEnvio()", "wl_bsolicitar" );
asignar_event( "onclick" , "ValidaEnvio()", "wl_bsolicitar1" );
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
