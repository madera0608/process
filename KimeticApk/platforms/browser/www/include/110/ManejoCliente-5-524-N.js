CamposObligatorios(["DESCOMENTNOAU"]);

HabilitaCampos("AUTORIZANO","NOAUTORIZA",[[1,"COMENTNOAU"]]);

$("input[name='AUTORIZANO']").click(function() { 
	HabilitaCampos("AUTORIZANO","NOAUTORIZA",[[1,"COMENTNOAU"]]);
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
		   COMENTNOAU:{required:  function(element) { return obtener_valor('AUTORIZANO',1)=="T";}}					   
         },
  messages: { 
	COMENTNOAU: "Por favor indique comentarios de no aprobación"
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
