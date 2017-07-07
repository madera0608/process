CamposObligatorios(["DESANEXCOMP"]);

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

		 SIANEXCOMP:{required: true}
         },
  messages: { 
	SIANEXCOMP:"Por favor indique que los comprobantes de pago fueron adjuntados"
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
