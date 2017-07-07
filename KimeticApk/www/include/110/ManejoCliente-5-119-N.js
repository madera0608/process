
DeshabilitarCheck('MTZTAREA',3);
MatrizEstatica( 'MTZTAREA');
asignar_event_matriz( "onchange" ,"validarPrecedencia('MTZTAREA')" , "MTZTAREA", 3);
asignar_event_matriz( "onchange" ,"validarUncheck('MTZTAREA')" , "MTZTAREA", 3);

MatrizEstatica( 'MTZANEXO' );

CamposObligatorios(["M0MTZANEXO1","DESOPCCORR"]);

asignar_valor('OPCCORR','T',1);
HabilitaCampos("OPCCORR","SICORREO",[[1,"COMENTCORR"],[1,"MTZANEXO"]]);

$("input[name='OPCCORR']").click(function() { 
	HabilitaCampos("OPCCORR","SICORREO",[[1,"COMENTCORR"],[1,"MTZANEXO"]]);
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
		   M1MTZANEXO1:{required: function(element) { return obtener_valor('OPCCORR',0)=="T" && finTareas('MTZTAREA',3);}}		   
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
