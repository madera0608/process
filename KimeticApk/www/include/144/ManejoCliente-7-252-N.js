if (obtener_valor('OPCTPOBAJA',1) =='T')
{
   MostrarCampo( 'PROPFIN');
}
else
{
  OcultarCampo( 'PROPFIN' );
 }
CamposObligatorios(["DESANEXHOJ"]);

if (obtener_valor('PAGOLEY')=='T'){
	MostrarGrupo( 'DATOS DE CHEQUES SIN LEYENDA' );  
}
else{
	OcultarGrupo( 'DATOS DE CHEQUES SIN LEYENDA' );  
}

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
		 SIANEXHOJ:{required: true}	   
         },
  messages: { 
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
