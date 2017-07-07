MatrizEstatica( 'MTZDET' );
HabilitaCampos("OPCCAMBFAC","NOCAMBFAC",[[1,"OPCPROYESP"]]);
CamposObligatorios(["M0MTZDET11","DESNVEMPFACT"]);

if (obtener_valor('OPCAPRUEBA',0)!='T'){
		OcultarCampo('NVEMPFACT');
		OcultarCampo( 'MTZDET',3,11);
	}else{

		fil=obtener_valor( 'filMTZDET' );

  		for(e=1;e<=fil;e++){
			pag=obtener_valorM("MTZDET" , e , 9);
			asignar_valorM( "MTZDET" ,pag , e, 11); 

		}
		fact=obtener_valor("EMPFACT");
		asignar_valor( "NVEMPFACT" ,fact); 
		if (obtener_valor('OPCCAMBFAC',0)=='T')
			MostrarCampo('NVEMPFACT');
		MostrarCampo( 'MTZDET',3,11);
	}
//para ocultar las nuevas empresas fact y pag
$("input[name='OPCAPRUEBA']").click(function() { 

	if (obtener_valor('OPCAPRUEBA',1)=='T'){
		OcultarCampo('NVEMPFACT');
		OcultarCampo( 'MTZDET',3,11);
	}else{

		fil=obtener_valor( 'filMTZDET' );

  		for(e=1;e<=fil;e++){
			pag=obtener_valorM("MTZDET" , e , 9);
			asignar_valorM( "MTZDET" ,pag , e, 11); 

		}
		fact=obtener_valor("EMPFACT");
		asignar_valor( "NVEMPFACT" ,fact); 
		if (obtener_valor('OPCCAMBFAC',0)=='T')
			MostrarCampo('NVEMPFACT');
		MostrarCampo( 'MTZDET',3,11);
	}

} );

$("#NVEMPFACT").change(function() { 
	empselec=$("#NVEMPFACT").val();
	fil=obtener_valor( 'filMTZEMP' );
	for(e=1;e<=fil;e++){
		aux=$("#M"+e+"MTZEMP3").val();	
		if (empselec==aux){
			alertmb("No puede seleccionar una empresa facturadora existente",0,1,"Aceptar");
			$("#NVEMPFACT").val('');		
		}
	}
});

function ValidarEnvio(){
	if ($("#wfrm_formulario").valid()!=true){
		alertmb("Por favor complete los campos obligatorios",0,1,"Aceptar");
	  	return false;
          	}else
		return true;
}

$("#wfrm_formulario").validate
({
  rules: { 
           NVEMPFACT:{required: function(element) { return obtener_valor('OPCAPRUEBA',0)=='T' && obtener_valor('OPCCAMBFAC',0)=='T';}}	   
         },
  messages: { 
               NVEMPFACT: "Por favor indique la nueva propuesta de empresa facturadora"
            }
});

ValidarFilas("MTZDET",[
["MTZDET11",{required: function(element) { return obtener_valor('OPCAPRUEBA',0)=='T';}}]
]);

asignar_event_matriz( "onchange" ,"validarResponsableIMSS(11)" , "MTZDET", 11);

asignar_event( "onclick" , "ValidarEnvio()", "wl_baprobar1" );
asignar_event( "onclick" , "ValidarEnvio()", "wl_baprobar" );
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
