OcultarGrupo("FUNCIONAL");
asignar_valor("wl_bsolicitar","Registrar Datos");
asignar_valor("wl_bsolicitar1","Registrar Datos");
asignar_valor("wl_bguardar","Guardar Temporalmente");
asignar_valor("wl_bguardar1","Guardar Temporalmente");

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//Colocar la estrella de obligatoridad a un campo
cambiar_nombre('NB_CLASE1',"Nombre de la Clasificación",4,1);
cambiar_nombre('CLASE2',"Nombre de la Clasificación",4,1);
cambiar_nombre('TIPO',"Tipo de clasificación",4,1);

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
function formatear(){
	asignar_valor('ID_CLASE1',obtener_valor("CLASE1"));
	asignar_valor('NB_CLASE1',obtener_valor("CLASE1",1));
	
	document.getElementById("MATSEMT_PARAM").click();
	document.getElementById("MATBOMT_PARAM").click();
	document.getElementById("MATSEMT_PARA").click();
	document.getElementById("MATBOMT_PARA").click();
	OcultarCampo( 'TEXTO4');
	OcultarCampo( 'NEW_PARAM');
	OcultarCampo( 'NEW_VALOR');

	ocultar();
	return true;
}

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
function ocultar(){
	if(obtener_valor("CLASE1",1)=="(Nueva Clasificación)"){
		OcultarCampo('CLASE_PARA');
		OcultarCampo( 'MT_PARAM');
		OcultarCampo( 'TEXTO3');
		MostrarCampo('TEXTO5');
		MostrarCampo( 'CLASE2');
		MostrarCampo( 'TIPO');
		OcultarCampo( 'TX_TIPO');
		MostrarCampo("MT_PARA");
		OcultarCampo( 'TEXTO4');
		OcultarCampo( 'NEW_PARAM');
		OcultarCampo( 'NEW_VALOR');
		OcultarCampo('CLASE_PARA');
		OcultarCampo('ID_CLASE1');
		OcultarCampo('NB_CLASE1');
		asignar_valor("NUEVO","T");
		asignar_valor("EDITAR","F");
	}else{
		if(obtener_valor("CLASE1")==""){
			OcultarCampo('TEXTO5' );
			OcultarCampo( 'CLASE2');
			OcultarCampo( 'TEXTO3');
			OcultarCampo( 'MT_PARAM');
			OcultarCampo( 'TEXTO6');
			OcultarCampo( 'MT_PARA');
			OcultarCampo( 'SEPARADOR2');
			OcultarCampo( 'TEXTO4');
			OcultarCampo( 'NEW_PARAM');
			OcultarCampo( 'NEW_VALOR');
			OcultarCampo('ID_CLASE1');
			OcultarCampo('NB_CLASE1');
			OcultarCampo('TIPO');
			OcultarCampo( 'TX_TIPO');
			asignar_valor("NUEVO","F");
			asignar_valor("EDITAR","F");
		}else{
			if(obtener_valorM("MT_PARAM",1,1)!=""){
				MostrarCampo( 'MT_PARAM');
				MostrarCampo( 'TEXTO3');
				MostrarCampo('ID_CLASE1');
				MostrarCampo('NB_CLASE1');
				MostrarCampo("TX_TIPO");
			}else{
				OcultarCampo( 'MT_PARAM');
				OcultarCampo( 'TEXTO3');
				OcultarCampo('ID_CLASE1');
				OcultarCampo('NB_CLASE1');
				OcultarCampo("TX_TIPO");
			}
			MostrarCampo('CLASE_PARA');
			OcultarCampo('TEXTO5');
			OcultarCampo('TEXTO6');
			OcultarCampo('CLASE2');
			OcultarCampo('TIPO');
			OcultarCampo('MT_PARA');
			asignar_valor("NUEVO","F");
			asignar_valor("EDITAR","T");
		}

	}
	return true;
}
ocultar();

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
function enumerar(){
	var valor;
	var i;
	var filas = obtener_valor("filMT_PARA");
	for(i = 1; i <= filas;i++){
		asignar_valorM("MT_PARA",i,i,1);
	}
	return true;
}
enumerar();

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
asignar_event("onclick","enumerar()","MATNVMT_PARA");
asignar_event("onclick","enumerar()","MATBOMT_PARA");
asignar_event("onchange" , "formatear()","CLASE1");
MatrizEstatica( 'MT_PARAM');
asignar_valor( 'TEXTO1' ,"<font size='2' color='#0000FF'><B>" + obtener_valor("TEXTO1") + "</B></font>");
asignar_valor( 'TEXTO2' ,"<font size='2' color='#0000FF'><B>" + obtener_valor("TEXTO2") + "</B></font>");
asignar_valor( 'TEXTO3' ,"<font size='2' color='#0000FF'><B>" + obtener_valor("TEXTO3") + "</B></font>");
asignar_valor( 'TEXTO4' ,"<font size='2' color='#0000FF'><B>" + obtener_valor("TEXTO4") + "</B></font>");
asignar_valor( 'TEXTO5' ,"<font size='2' color='#0000FF'><B>" + obtener_valor("TEXTO5") + "</B></font>");
asignar_valor( 'TEXTO6' ,"<font size='2' color='#0000FF'><B>" + obtener_valor("TEXTO6") + "</B></font>");


//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Validaciones previas al envío
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
function validar(){
	//Nueva Clasificación de Parámetros
	if(obtener_valor("CLASE1",1)=="(Nueva Clasificación)"){
		//se valida que se haya ingresado un nombre para la clasificación
		if(obtener_valor("CLASE2")==""){
			alertmb("Debe ingresar un nombre para la clasificación que se dispone a crear ", 2, 1, "Aceptar");
			return false;
		}
		var filas = obtener_valor('filMT_PARA');
		for (var i = 1; i <= filas; i++){
			if (obtener_valorM('MT_PARA', i, 2) == ''){	
				alertmb("Debe ingresar un nombre para el parámetro de la fila " + i, 2, 1, "Aceptar");
				return false;				
			}
			if (obtener_valorM('MT_PARA', i, 3) == ''){	
				alertmb("Debe ingresar un valor para el parámetro de la fila " + i, 2, 1, "Aceptar");
				return false;				
			}
			if (obtener_valorM('MT_PARA', i, 4) == ''){	
				alertmb("Debe indicar si el parámetro estará 'Activo' ó 'Inactivo' en la fila " + i, 2, 1, "Aceptar");
				return false;				
			}
			if ((obtener_valorM('MT_PARA', i, 8) == '') && (obtener_valorM('MT_PARA', i, 5) != '')){	
				alertmb("Debe ejecutar el evento para buscar la clasificación padre en la fila " + i, 2, 1, "Aceptar");
				return false;				
			}
			if ((obtener_valorM('MT_PARA', i, 9) == '') && (obtener_valorM('MT_PARA', i, 6) != '')){	
				alertmb("Debe ejecutar el evento para buscar el parámetro padre en la fila " + i, 2, 1, "Aceptar");
				return false;				
			}
		}	
	}else{
		if(obtener_valor("CLASE1")==""){
			alertmb("Debe seleccionar una clasificación y presionar el enlace 'Obtener Parámetros'", 2, 1, "Aceptar");
			return false;
		}else{
			//se valida que se haya ingresado un nombre para la clasificación
			if(obtener_valorM('MT_PARAM', 1, 1) == ''){
				alertmb("Debe seleccionar una clasificación y presionar el enalce 'Obtener Parámetros'", 2, 1, "Aceptar");
				return false;
			}
			if(obtener_valor("NB_CLASE1")==""){
				alertmb("Debe ingresar un nombre para la clasificación", 2, 1, "Aceptar");
				return false;
			}else{
				var filas = obtener_valor('filMT_PARAM');
				for (var i = 1; i <= filas; i++){
					if (obtener_valorM('MT_PARAM', i, 2) == ''){	
						alertmb("Debe ingresar un nombre para el parámetro de la fila " + i, 2, 1, "Aceptar");
						return false;				
					}
					if (obtener_valorM('MT_PARAM', i, 3) == ''){	
						alertmb("Debe ingresar un valor para el parámetro de la fila " + i, 2, 1, "Aceptar");
						return false;				
					}
					if (obtener_valorM('MT_PARAM', i, 4) == ''){	
						alertmb("Debe indicar si el parámetro estará 'Activo' ó 'Inactivo' en la fila " + i, 2, 1, "Aceptar");
						return false;				
					}
					if ((obtener_valorM('MT_PARAM', i, 8) == '') && (obtener_valorM('MT_PARAM', i, 5) != '')){	
						alertmb("Debe ejecutar el evento para buscar la clasificación padre en la fila " + i, 2, 1, "Aceptar");
						return false;				
					}
					if ((obtener_valorM('MT_PARAM', i, 9) == '') && (obtener_valorM('MT_PARAM', i, 6) != '')){	
						alertmb("Debe ejecutar el evento para buscar el parámetro padre en la fila " + i, 2, 1, "Aceptar");
						return false;				
					}
				}
			}
		}
	}
	return true;
}
asignar_event( "onclick" , "validar()" , "wl_bsolicitar" );
asignar_event( "onclick" , "validar()" , "wl_bsolicitar1" );

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
function consulta(){
	var opcion = alertmb("Está apunto de registrar un nuevo parámetro a esta clasificación. ¿Está usted de acuerdo?",1,2,"Continuar","Cancelar");
		if ((opcion != 1)&&(opcion != -1)){
			window.event.returnValue = false;
	     	return false;
		}
return true;
}
asignar_event( "onclick" , "consulta()" , "evento_NEW_VALOR" );

/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
