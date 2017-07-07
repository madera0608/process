CamposObligatorios(["DESANEXINC"]);
MatrizEstatica('MTZCONF');
HabilitaCampos("OPCINCI","SIINCI",[[1,"SIANEXINC"]]);

$("input[name='OPCINCI']").click(function() { 
	HabilitaCampos("OPCINCI","SIINCI",[[1,"SIANEXINC"]]);
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
		   SIANEXINC:{required: function () { return obtener_valor('OPCINCI',0)=="T";}}	
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
