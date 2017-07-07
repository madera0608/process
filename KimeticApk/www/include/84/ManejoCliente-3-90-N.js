CamposObligatorios(["DESCOMERRCHEQ"]);

HabilitaCampos("OPCERRCHQ","SIERRCHQ",[[1,"COMERRCHEQ"] ]);

$("input[name='OPCERRCHQ']").click(function() { HabilitaCampos("OPCERRCHQ","SIERRCHQ",[[1,"COMERRCHEQ"] ]); } );


$("#wfrm_formulario").validate
({
  rules: { 
           COMERRCHEQ:{required: function(element) { return obtener_valor('OPCERRCHQ',0)=="T";}}		   
         },
  messages: { 
               COMERRCHEQ: "Por favor indique las correcciones a aplicar"
            }
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

//EJECUTAR FUNCIÓN DE VALIDAR ENVIO	
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar" );
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar1" );
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
