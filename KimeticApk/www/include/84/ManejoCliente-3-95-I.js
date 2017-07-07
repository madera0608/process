CamposObligatorios(["DESANEXLAY","DESANEXHOJ","DESTPOPAGO"]);

if (obtener_valor('INCAMBIO')=='1'){
	MostrarCampo( 'CAMBIOPAGO' );  
}
else{
	OcultarCampo('CAMBIOPAGO');
	$('#TPOPAGOTRA').attr("disabled",true);
	$('#TPOPAGOORD').attr("disabled",true);
	$('#TPOPAGLEY').attr("disabled",true);
}

//FUNCIÓN VALIDAR ENVIO
function ValidaEnvio()
{  
          if ($("#wfrm_formulario").valid()!=true){
			alertmb("Por favor complete los campos obligatorios",0,1,"Aceptar");
	  		return false;
          }else{
	if (obtener_valor('TPOPAGOTRA')!="T" && obtener_valor('TPOPAGOORD')!="T" && obtener_valor('TPOPAGLEY')!="T"){
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

		 SIANEXLAY:{required: true},	
		 SIANEXHOJ:{required: true}	   
         },
  messages: { 
	SIANEXLAY:"Por favor indique que los layouts fueron adjuntados",
	SIANEXHOJ: "Por favor indique que la hoja de fondeo fue adjuntada"
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
