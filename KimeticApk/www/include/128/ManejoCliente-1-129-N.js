
MatrizEstatica( 'MTZ1TAR');
DeshabilitarCheck('MTZ1TAR',3);

asignar_event_matriz( "onchange" ,"validarPrecedencia('MTZ1TAR')" , "MTZ1TAR", 3);
asignar_event_matriz( "onchange" ,"validarUncheck('MTZ1TAR')" , "MTZ1TAR", 3);
asignar_event_matriz( "onchange" ,"ocultarAlta()" , "MTZ1TAR", 3);

CamposObligatorios(["DESANEXCOMP","DESOPCERRIMSS"]);

HabilitaCampos("OPCINDUC","SIINDUC",[[1,"OPCALTANT"]]); 
HabilitaCampos("OPCALTANT","SIALTANT",[[1,"OPCAUTO"]]); 

function ocultarAlta(){
	if (finTareas('MTZ1TAR',3))
		MostrarGrupo( 'Alta IMSS' );
	else
		OcultarGrupo( 'Alta IMSS' );
	return true;
}

ocultarAlta();

//FUNCIÓN VALIDAR ENVIO
function ValidaEnvio()
{  
          	if ($("#wfrm_formulario").valid()!=true){
		alertmb("Por favor complete los campos obligatorios",0,1,"Aceptar");
	  	return false;
          	}else{
		if (finTareas('MTZ1TAR',3) && obtener_valor('OPCERRIMSS',0)!="T" && obtener_valor('OPCERRIMSS',1)!="T"){
			alertmb("Por favor indique si ocurrió error con algún empleado",0,1,"Aceptar");
	  		return false;
		}else
			return true;
	}
}

$("#wfrm_formulario").validate
({
  rules: { 
	SIANEXCOMP: {required: function(element) { return finTareas('MTZ1TAR',3);}}	   
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
