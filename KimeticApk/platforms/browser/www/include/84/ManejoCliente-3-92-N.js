CamposObligatorios(["DESANEXLAY"]);


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

		 SIANEXLAY:{required: true}	
         },
  messages: { 
	SIANEXLAY:"Por favor indique que los layouts fueron adjuntados"
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
