CamposObligatorios(["DESCOMENTNOAP"]);

//Se cambian los nombres de los botones de acción
asignar_valor( "wl_baprobar" , "Cancelar documento");
asignar_valor( "wl_baprobar1", "Cancelar documento");

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
	}else
		return true;
}

if (obtener_valor('INPAGOS')=='1')
	MostrarCampo('OPCPAGO');
else
	OcultarCampo('OPCPAGO');

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
