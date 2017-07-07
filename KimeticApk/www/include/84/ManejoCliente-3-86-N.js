if (obtener_valor('INCAMBIO')=='1'){
	MostrarCampo( 'CAMBIOPAGO' );  
	OcultarCampo( 'OPCERRHJA');
	asignar_valor( "wl_baprobar" , "Modificar solicitud");  
	asignar_valor( "wl_baprobar1" , "Modificar solicitud");
}
else{
	OcultarCampo('CAMBIOPAGO');
	MostrarCampo( 'OPCERRHJA' );  
}

if (obtener_valor('TPOPAGLEY')=='T')
	MostrarCampo( 'OPCAUTCHEQ' );  

else
	OcultarCampo( 'OPCAUTCHEQ' );  



CamposObligatorios(["DESCOMERROR","DESOPCERRHJA"]);

//HabilitaCampos("OPCERRHJA","SIERRHJA",[[1,"COMERROR"] ]);

//$("input[name='OPCERRHJA']").click(function() { HabilitaCampos("OPCERRHJA","SIERRHJA",[[1,"COMERROR"] ]); } );


//FUNCIÓN VALIDAR ENVIO
function ValidaEnvio()
{  
          if ($("#wfrm_formulario").valid()!=true){
			alertmb("Por favor complete los campos obligatorios",0,1,"Aceptar");
	  		return false;
          }else{
	if (obtener_valor('INCAMBIO')=='0' && obtener_valor('OPCERRHJA',0)!="T" && obtener_valor('OPCERRHJA',1)!="T"){
		alertmb("Debe seleccionar la forma de pago",0,1,"Aceptar");
		return false;
	}
	else
		return true;
          }
}

$("#wfrm_formulario").validate
({
  rules: { 
           COMERROR:{required: function(element) { return obtener_valor('OPCERRHJA',0)=="T";}}	   
         },
  messages: { 
              COMERROR: "Por favor indique las correcciones  a aplicar"
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
