//Se cambian los nombres de los botones de acción
asignar_valor( 'wl_bentregar' , 'Actualizar Usuario');
asignar_valor( 'wl_bentregar1' , 'Actualizar Usuario');
asignar_valor( 'wl_banular' , 'Eliminar Puesto');
asignar_valor( 'wl_banular1' , 'Eliminar Puesto');

//Se cambian los nombres de los botones de la matriz
asignar_valor( 'MATNVMT_PROCE' , 'Agregar Perfil');
asignar_valor( 'MATBOMT_PROCE' , 'Eliminar Perfil');

//Se ocultan los botones de objetar
OcultarCampo( 'wl_bobjetar', 2 );
OcultarCampo( 'wl_bobjetar1', 2 );

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//Al cargar el formulario
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
function cargar()
{
	if (obtener_valor('ADMIN')=='T')
	{
		//Los usuarios administradores no se pueden eliminar
		OcultarCampo('ELIMUSER');

		//El puesto del primer administrador no se puede eliminar. Un administrador no se puede eliminar a si mismo
		if (obtener_valor('USRPRIADM')=='T' || obtener_valor('CD_USUARIO')==obtener_valor('USERACT'))
		{
			OcultarCampo( 'wl_banular', 2 );
			OcultarCampo( 'wl_banular1', 2 );
		}
	}

	return true;
}
cargar();

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Pasa a mayúsculas el texto del campo indicado (Función definida en el manejo cliente general al modelo)
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
asignar_event( "onblur" , "mayuscula_campo('CD_USUARIO')", "CD_USUARIO" );
asignar_event( "onblur" , "mayuscula_campo('CD_PUESTO')", "CD_PUESTO" );
asignar_event( "onblur" , "mayuscula_campo('P_JEFE')", "P_JEFE" );

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Valida que el formato de la dirección de correo electrónica sea correcto (Función definida en el manejo cliente general al modelo)
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
asignar_event("onblur" , "mailtest('EMAIL')", "EMAIL");

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//Se elimina el evento onclick del botón de Anular (Eliminar Puesto) y se asigna un nuevo evento
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
function validaAnular()
{
	var cant_docs = obtener_valor('DOCACTIVOS');
	if (cant_docs != '' && cant_docs != 0)
	{	
		alertmb("No se puede eliminar el puesto porque posee documentos activos", 2, 1, "Aceptar");
		return false;			
	}

	var cant_reemp = obtener_valor('REEMPLAZAN');
	if (cant_reemp != '' && cant_reemp != 0)
	{
		var opcion = alertmb("El usuario actualmente está reemplazando a alguien ¿Está seguro que desea eliminarlo?", 1, 2, "Si", "No");
		if ((opcion == 2)||(opcion == -1))
		{	
			return false;
		}
	}

	var opcion = alertmb("Al ejecutar esta acción se eliminará el puesto ¿Está seguro que desea continuar?", 1, 2, "Si", "No");
	if ((opcion == 2)||(opcion == -1))
	{	
		return false;
	}
	else 
	{	
		Conectarlink1('Envio.asp?wl_anular=1');
	}

	return true;
}
if (document.getElementById('wl_banular') != null)
{
	document.getElementById('wl_banular').onclick = "";
	document.getElementById('wl_banular1').onclick = "";
	asignar_event("onclick" , "validaAnular()","wl_banular");
	asignar_event("onclick" , "validaAnular()","wl_banular1");
}

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//Validaciones previas al envío
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
function validar()
{
	//Se valida la matriz de procesos
	var filas = obtener_valor("filMT_PROCE");
	var columnas = obtener_valor("colMT_PROCE");
	
	//Se verifica si la matriz está vacía (tiene una sóla línea y todas las columnas en blanco)
	MatrizVacia = true;
	if (filas == 1)
	{
		for (var i = 1; i <= columnas; i++)
		{
			if (obtener_valorM("MT_PROCE", 1, i) != '')
			{
				MatrizVacia = false;
				break;
			}
		}
	}
	else
	{
		MatrizVacia = false;
	}
	
	//Se valida la matriz
	if (! MatrizVacia)
	{
		for (var i = 1; i <= filas; i++)
		{
			//Se valida que se haya seleccionado el Proceso Padre
			if (obtener_valorM("MT_PROCE", i, 1) == '') 
			{	
				alertmb("Debe ejecutar el evento para buscar el Perfil en la fila " + i, 2, 1, "Aceptar");
				return false;				
			}

			//Se valida que se haya seleccionado el Proceso
			if (obtener_valorM('MT_PROCE',  i, 3) == '') 
			{	
				alertmb("Debe ejecutar el evento para buscar el Grupo en la fila " + i, 2, 1, "Aceptar");
				return false;				
			}

			//Se valida que se haya seleccionado la Fecha desde
			if (obtener_valorM('MT_PROCE',  i, 5) == '') 
			{	
				alertmb("Debe indicar la fecha desde en la fila " + i, 2, 1, "Aceptar");
				return false;				
			}
			
			//Se valida que se haya seleccionado el Estatus
			if (obtener_valorM('MT_PROCE',  i, 7) == '') 
			{	
				alertmb("Debe indicar el estatus de activo en la fila " + i, 2, 1, "Aceptar");
				return false;
			}				
			
			//Se valida que no existan definiciones repetidas		
			for (var j = i + 1;j <= filas; j++)
			{	
				if ((obtener_valorM('MT_PROCE', i, 1) == obtener_valorM('MT_PROCE', j, 1)) &&
				    (obtener_valorM('MT_PROCE', i, 3) == obtener_valorM('MT_PROCE', j, 3)))	
				{	
					alertmb("La definición de la fila " + i + " se repite en la fila " + j, 2, 1, "Aceptar");				
					return false;
				}
			}
		}
	}

	//Se quiere eliminar el usuario
	if (obtener_valor('ELIMUSER') == 'T')
	{
		var cant_docs = obtener_valor('DOCACTIVOS');
		if (cant_docs != '' && cant_docs != 0)
		{	
			alertmb("No se puede eliminar el usuario porque posee documentos activos", 2, 1, "Aceptar");
			return false;			
		}

		var cant_reemp = obtener_valor('REEMPLAZAN');
		if (cant_reemp != '' && cant_reemp != 0)
		{
			var opcion = alertmb("El usuario actualmente está reemplazando a alguien ¿Está seguro que desea eliminarlo?", 1, 2, "Si", "No");
			if ((opcion == 2)||(opcion == -1))
			{	
				return false;
			}
		}

		var opcion = alertmb("Al ejecutar esta acción se eliminará al usuario del puesto ¿Está seguro que desea continuar?", 1, 2, "Si", "No");
		if ((opcion == 2)||(opcion == -1))
		{	
			return false;
		}
	}

	return true;
}
asignar_event( "onclick" , "validar()" , "wl_bentregar");
asignar_event( "onclick" , "validar()" , "wl_bentregar1");
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
