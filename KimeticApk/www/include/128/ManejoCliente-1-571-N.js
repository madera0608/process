CamposObligatorios(["DESFCHEFINDUC","DESMOTCANIND"]);

HabilitaCampos("OPCINDUC","SIINDUC",[[1,"OPCALTANT"]]); 
HabilitaCampos("OPCALTANT","SIALTANT",[[1,"OPCAUTO"]]);

MatrizEstatica( 'MTZ8TAR');
DeshabilitarCheck('MTZ8TAR',3);

asignar_event_matriz( "onchange" ,"validarPrecedencia('MTZ8TAR')" , "MTZ8TAR", 3);
asignar_event_matriz( "onchange" ,"validarUncheck('MTZ8TAR')" , "MTZ8TAR", 3);

HabilitaCampos("OPCREU","SIREU",[[1,"FCHEFINDUC"], [2,"MOTCANIND"],[3,"Tareas a ejecutar"]]);

$("input[name='OPCREU']").click(function() { 
	HabilitaCampos("OPCREU","SIREU",[[1,"FCHEFINDUC"], [2,"MOTCANIND"],[3,"Tareas a ejecutar"]]);

	if (obtener_valor('OPCREU',1)=='T'){
		asignar_valor('FCHEFINDUC','');
		asignar_valor('MOTCANIND','Seleccione');
	}
});

$("#wfrm_formulario").validate
({
	rules: {  
		FCHEFINDUC: { required: function(element) { return obtener_valor('OPCREU',0)=='T';}},
		MOTCANIND: { required: function(element) { return obtener_valor('OPCREU',1)=='T';}}
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
