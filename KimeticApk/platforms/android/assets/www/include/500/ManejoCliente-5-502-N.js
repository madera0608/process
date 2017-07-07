CamposObligatorios(["DESCOMENTNOAP"]);

HabilitaCampos("OPCAPRUEB","NOAPRUEB",[[1,"COMENTNOAP"]]);
if (obtener_valor('OPCAPRUEB',1)=="T"){
	MostrarCampo( 'wl_bobjetar',2);
	OcultarCampo( 'wl_baprobar',2);
} else{
	OcultarCampo( 'wl_bobjetar', 2);
	MostrarCampo( 'wl_baprobar',2);
}
$("input[name='OPCAPRUEB']").click(function() { 
	HabilitaCampos("OPCAPRUEB","NOAPRUEB",[[1,"COMENTNOAP"]]);
	if (obtener_valor('OPCAPRUEB',1)=="T"){
		MostrarCampo( 'wl_bobjetar',2);
		OcultarCampo( 'wl_baprobar',2);
	} else{
		OcultarCampo( 'wl_bobjetar', 2);
		MostrarCampo( 'wl_baprobar',2);
	}
});

$("#wfrm_formulario").validate
({
  rules: { 
	COMENTNOAP:{required: function(element) { return obtener_valor('OPCAPRUEB',1)=="T";}}			   
         },
  messages: { 
               COMENTNOAP: "Por favor indique comentarios de no aprobación"
            }
});

//FUNCIÓN VALIDAR ENVIO
function ValidaEnvio(){ 
	if ($("#wfrm_formulario").valid()!=true){
		alertmb("Por favor complete los campos obligatorios.",0,1,"Aceptar");
	 	return false;
	}else{
		fil=obtener_valor( 'filMTZNOMIN' );
		var aux=0;
		for(e=1;e<=fil;e++){
			if ($("#M"+e+"MTZNOMIN19").attr('checked')==true)
				aux++;
		}
		asignar_valor('NROINACT',aux);
		return true;
	}
}

//EJECUTAR FUNCIÓN DE VALIDAR ENVIO	
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar" );
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar1" );
asignar_event( "onclick" , "ValidaEnvio()", "wl_bobjetar" );
asignar_event( "onclick" , "ValidaEnvio()", "wl_bobjetar1" );
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
