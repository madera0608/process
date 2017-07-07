asignar_valor( "wl_baprobar" , "Enviar prenómina");  
asignar_valor( "wl_baprobar1" , "Enviar prenómina");

CamposObligatorios(["M0MTZANEXO1"]);
MatrizEstatica( 'MTZANEXO' );
if ($("#M1MTZANEXO1 option").length>1)
MostrarGrupo( 'DATOS DEL CORREO ELECTRÓNICO' );
else
OcultarGrupo( 'DATOS DEL CORREO ELECTRÓNICO' );

asignar_valor('OPCCORR','T',1);
HabilitaCampos("OPCCORR","SICORREO",[[1,"COMENTCORR"],[1,"MTZANEXO"]]);
$("input[name='OPCCORR']").click(function() { 
	HabilitaCampos("OPCCORR","SICORREO",[[1,"COMENTCORR"],[1,"MTZANEXO"]]);
});
$("#wfrm_formulario").validate
({
  rules: { 
		   M1MTZANEXO1:{required: function(element) { return obtener_valor('OPCCORR',0)=="T";}}			   
         },
  messages: { 
	M1MTZANEXO1: "Por favor seleccione el adjunto a incluir en el correo para el cliente"
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
