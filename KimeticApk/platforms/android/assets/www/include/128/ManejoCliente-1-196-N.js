CamposObligatorios(["M0MTZ3ANEX1"]);

HabilitaCampos("OPCINDUC","SIINDUC",[[1,"OPCALTANT"]]); 
HabilitaCampos("OPCALTANT","SIALTANT",[[1,"OPCAUTO"]]); 
HabilitaCampos("OPCENTRTOD","SIENTRTOD",[[1,"MTZ3ANEX"]]);

$("input[name='OPCENTRTOD']").click(function() { 
	HabilitaCampos("OPCENTRTOD","SIENTRTOD",[[1,"MTZ3ANEX"]]);
});

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

$("#wfrm_formulario").validate
({
  rules: { 
		M1MTZ3ANEX1:{required: function(element) { return $("input[name='OPCENTRTOD']:checked").val() ==  "SSIENTRTOD****AlterT" ;}}	   
         }
});

ValidarFilas("MTZ3ANEX",[
["MTZ3ANEX1",{required: function(element) { return $("input[name='OPCENTRTOD']:checked").val() ==  "SIENTRTOD****AlterT" ;}}]
]);

//EJECUTAR FUNCIÓN DE VALIDAR ENVIO	
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar" );
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar1" );
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
