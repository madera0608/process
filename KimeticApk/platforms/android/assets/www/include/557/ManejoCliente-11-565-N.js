//Se cambian los nombres de los botones de acción
asignar_valor( "wl_baprobar" , "Enviar");
asignar_valor( "wl_baprobar1", "Enviar");

OcultarCampo( 'wl_bobjetar', 2);
RegistrarFormula(":MTZNOT[{+},3]:","MONTNOT",1);

CamposObligatorios(["DESANEXNOT"]);

MatrizEstatica( 'MTZNOT' );

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
		   SIANEXNOT: {required: true}		   
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
