CamposObligatorios(["DESNUMEMPL","DESMONTPRE","DESANEXNOM","DESMONTPREF","DESANEXPREF"]);

if (obtener_valor('OPCFACT',0)=='T'){
	MostrarCampo('SIANEXPREF');
}else{
	OcultarCampo('SIANEXPREF');
}

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
           		SIANEXPREF: {required: function(element) { return $("input[name='OPCFACT']:checked").val() ==  "OPCFACTSI****AlterT";}  }		   
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
