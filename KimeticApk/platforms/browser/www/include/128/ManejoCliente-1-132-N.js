CamposObligatorios(["DESINFOCUENTA","DESINFOBANC"]);

HabilitaCampos("OPCINDUC","SIINDUC",[[1,"OPCALTANT"]]); 
HabilitaCampos("OPCALTANT","SIALTANT",[[1,"OPCAUTO"]]); 
MatrizEstatica( 'MTZ3TAR');
DeshabilitarCheck('MTZ3TAR',3);
asignar_event_matriz( "onchange" ,"validarPrecedencia('MTZ3TAR')" , "MTZ3TAR", 3);
asignar_event_matriz( "onchange" ,"validarUncheck('MTZ3TAR')" , "MTZ3TAR", 3);
asignar_event_matriz( "onchange" ,"ocultarAlta()" , "MTZ3TAR", 3);

function ocultarAlta(){
	if (finTareas('MTZ3TAR',3))
		MostrarGrupo( 'Alta cuentas' );
	else
		OcultarGrupo( 'Alta cuentas' );
	return true;
}

ocultarAlta();

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
	INFOCUENTA: {required: function(element) { return finTareas('MTZ3TAR',3);}},
	INFOBANC: {required: function(element) { return finTareas('MTZ3TAR',3);}}	   
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
