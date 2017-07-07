CamposObligatorios(["M0MTZANEXO1"]);
HabilitaCampos("OPCANEXOS","SIANEXOS",[[1,"MTZANEXO"]]);
HabilitaCampos("OPCCAMBFAC","NOCAMBFAC",[[1,"OPCPROYESP"]]);
$("input[name='OPCANEXOS']").click(function() { 
HabilitaCampos("OPCANEXOS","SIANEXOS",[[1,"MTZANEXO"]]); 
} );

//FUNCIÓN VALIDAR ENVIO
function ValidaEnvio(){ 
	if ($("#wfrm_formulario").valid()!=true){
		alertmb("Por favor complete los campos obligatorios",0,1,"Aceptar");
	  	return false;
          	}else
		return true;							
}

$("#wfrm_formulario").validate
({
  rules: { 

		 M1MTZANEXO1:{required: function(element) { return obtener_valor('OPCANEXOS',0)=="T";}}
         },
  messages: { 
	M1MTZANEXO1:"Por favor seleccione el anexo a adjuntar en el correo"
            }
});

ValidarFilas("MTZANEXO",[
["MTZANEXO1",{required: function(element) { return obtener_valor('OPCANEXOS',0)=="T";}}]
]);


//EJECUTAR FUNCIÓN DE VALIDAR ENVIO	
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar" );
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar1" );
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
