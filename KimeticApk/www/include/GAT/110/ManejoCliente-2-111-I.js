asignar_valor('TEXTO1', "<font size='2' color='#0000FF'><B>Seleccione el grupo y los usuarios</B></font>");
asignar_valor('TEXTO2', "<font size='2' color='#0000FF'><B>Usuarios Seleccionados para la reasignación:</B></font>");
asignar_valor('TEXTO3', "<font size='2' color='#0000FF'><B>Seleccione en la columna Reasignar Expediente los expedientes a reasignar</B></font>");

MatrizEstatica( 'PST_REA' );

asignar_valor( "wl_bsolicitar", "Reasignar Expedientes");
asignar_valor( "wl_bsolicitar1", "Reasignar Expedientes");

//--------------------------------------------------------------------------------------------------------
function mostrar_ocultar(){
	if(obtener_valor("NOM_USER_P")=="" || obtener_valor("NOM_USER_A")==""){
		OcultarCampo("TEXTO2");	
                                OcultarCampo("USUARIOA");
	                OcultarCampo("NOMBREP");
		OcultarCampo("TEXTO3");
		OcultarCampo("PST_REA");				
	}else{
		MostrarCampo("TEXTO2");
                                MostrarCampo("USUARIOA");
	                MostrarCampo("NOMBREP");	
		MostrarCampo("TEXTO3");
		MostrarCampo("PST_REA");
	}
	return true;
}
mostrar_ocultar();

//--------------------------------------------------------------------------------------------------------
function validarGrupo(){
	if ( obtener_valor("GRUPO") == "" ){
		alertmb("Debe seleccionar un grupo antes de seleccionar usuarios" ,0,1,"Aceptar");
		window.event.returnValue = false;
		return false;
	}
	return true;
}
asignar_event( "onclick" , "validarGrupo()" , "evento_NOM_USER_P");

//--------------------------------------------------------------------------------------------------------
function BorrarUsuarioSeleccionado(){
	asignar_valor('NOM_USER_P', '');
	mostrar_ocultar();
	return true;
}
asignar_event( "onchange" , "BorrarUsuarioSeleccionado()" , "GRUPO");

//--------------------------------------------------------------------------------------------------------
function actualizarMatriz(){
	var valor = obtener_valor("NOM_USER_A");
	var filas = obtener_valor("filPST_REA");
	var i = 1;
	for (i = 1; i <= filas; i++) {
		asignar_valorM( "PST_REA" , valor , i , 7 );
		asignar_valorM( "PST_REA" , 'T' , i , 1 );
	}
	return true;
}
asignar_event( "onchange" , "actualizarMatriz()" , "NOM_USER_A");

//--------------------------------------------------------------------------------------------------------
function validar(opcion){
	if( opcion == 1){
		if(obtener_valor("GRUPO")==""){
			alertmb("Debe seleccionar un grupo antes de seleccionar usuarios" ,0,1,"Aceptar");
			window.event.returnValue = false;
			return false;	
		}
	}else{
		if(obtener_valor("N_USUARIO1")==""){
			alertmb("Debe seleccionar un usuario con documentos para reasignar." ,0,1,"Aceptar");
			window.event.returnValue = false;
			return false;	
		}
	}
	return true;
}
asignar_event("onclick", "validar(1)", "evento_N_USUARIO1");
asignar_event("onclick", "validar(2)", "evento_N_USUARIO2");

//--------------------------------------------------------------------------------------------------------
function validarReasignación(){
	if ( obtener_valor("NOM_USER_P") == ""){
		alertmb("Debe seleccionar un puesto para la reasignación de pendientes" ,0,1,"Aceptar");
		return false;
	}
	if ( obtener_valor("NOM_USER_A") == "" ){
		alertmb("Debe seleccionar un  puesto a quien asignar los expedientes" ,0,1,"Aceptar");
		return false;
	}
                if ( obtener_valor("NOM_USER_A") ==  obtener_valor("NOM_USER_P") ){
		alertmb("Los Usuarios seleccionados deben ser diferentes" ,0,1,"Aceptar");
		return false;
	}

	return true;
}
asignar_event( "onclick" , "validarReasignación()" , "wl_bsolicitar" );
asignar_event( "onclick" , "validarReasignación()" , "wl_bsolicitar1" );

//--------------------------------------------------------------------------------------------------------
function entregar(){
	var filas = obtener_valor('filPST_REA');
	var i = 1;
	for (i = 1; i <= filas; i++) {
		if(obtener_valor('M'+i+'PST_REA8',0)=='T'){
			return true;
		}
	}
	alertmb("Debe seleccionar al menos un expediente para reasignar. Por favor, marque algún expediente e intente de nuevo" ,0,1,"Aceptar");
return false;
}
asignar_event("onclick","entregar()","wl_bsolicitar");
asignar_event("onclick","entregar()","wl_bsolicitar1");

/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
