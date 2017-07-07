
CamposObligatorios(["DESOPCERRCONT"]);

HabilitaCampos("OPCINDUC","SIINDUC",[[1,"OPCALTANT"]]); 
HabilitaCampos("OPCALTANT","SIALTANT",[[1,"OPCAUTO"]]); 

MatrizEstatica( 'MTZ2TAR');
DeshabilitarCheck('MTZ2TAR',3);
asignar_event_matriz( "onchange" ,"validarPrecedencia('MTZ2TAR')" , "MTZ2TAR", 3);
asignar_event_matriz( "onchange" ,"validarUncheck('MTZ2TAR')" , "MTZ2TAR", 3);
asignar_event_matriz( "onchange" ,"ocultarAlta()" , "MTZ2TAR", 3);

function ocultarAlta(){
	if (finTareas('MTZ2TAR',3))
		MostrarGrupo( 'Alta contratos' );
	else
		OcultarGrupo( 'Alta contratos' );
	return true;
}

ocultarAlta();

//FUNCIÓN VALIDAR ENVIO
function ValidaEnvio()
{  
          if (finTareas('MTZ2TAR',3) && obtener_valor('OPCERRCONT',0)!="T" && obtener_valor('OPCERRCONT',1)!="T"){
		alertmb("Por favor indique si existen errores con algún contrato",0,1,"Aceptar");
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
