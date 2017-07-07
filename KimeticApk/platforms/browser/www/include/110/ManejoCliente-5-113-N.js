CamposObligatorios(["DESANEX4PRE"]);

HabilitaCampos("OPCPRE","SIPRE",[[1,"SIANEX4PRE"]]);

$("input[name='OPCPRE']").click(function() { 
	HabilitaCampos("OPCPRE","SIPRE",[[1,"SIANEX4PRE"]]);
});


//FUNCIÓN VALIDAR ENVIO
function ValidaEnvio()
{  
          if ($("#wfrm_formulario").valid()!=true){
			alertmb("Por favor complete los campos obligatorios",0,1,"Aceptar");
	  		return false;
          }else
	return true;	  
}

$("#wfrm_formulario").validate
({
  rules: { 
		   SIANEX4PRE:{required: function () { return obtener_valor('OPCPRE',0)=="T";}}	
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
