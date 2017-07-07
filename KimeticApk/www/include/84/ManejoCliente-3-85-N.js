CamposObligatorios(["DESFCHCOORD","DESCOMCOORD"]);


if (obtener_valor('INCAMBIO')=='1'){
	MostrarCampo( 'CAMBIOPAGO' );  
	OcultarCampo( 'FCHCOORD');
	OcultarCampo( 'COMCOORD');
	asignar_valor( "wl_baprobar" , "Modificar solicitud");  
	asignar_valor( "wl_baprobar1" , "Modificar solicitud");
}
else{
	OcultarCampo('CAMBIOPAGO');
	MostrarCampo( 'FCHCOORD' );  
	MostrarCampo( 'COMCOORD' );  
}

if (obtener_valor('TPOPAGLEY')=='T')
	MostrarCampo( 'OPCAUTCHEQ' );  

else
	OcultarCampo( 'OPCAUTCHEQ' );  


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
           FCHCOORD:{required: function(element) { return obtener_valor('INCAMBIO')=='0';}}	,
           COMCOORD:{required: function(element) { return obtener_valor('INCAMBIO')=='0';}}	   
         },
  messages: { 
             FCHCOORD: "Por favor indique la fecha fin de coordinación",
             COMCOORD: "Por favor indique comentarios de coordinación"
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
