//Se cambian los nombres de los botones de acción
asignar_valor( 'wl_bentregar' , 'Actualizar Perfil');
asignar_valor( 'wl_bentregar1' , 'Actualizar Perfil');
asignar_valor( 'wl_banular' , 'Eliminar Perfil');
asignar_valor( 'wl_banular1' , 'Eliminar Perfil');

//Se cambian los nombres de los botones de la matriz
asignar_valor( 'MATNVMT_A_PP' , 'Agregar Proceso');
asignar_valor( 'MATBOMT_A_PP' , 'Eliminar Proceso');

//Se ocultan los botones de objetar
OcultarCampo( 'wl_bobjetar', 2 );
OcultarCampo( 'wl_bobjetar1', 2 );

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//Se elimina el evento onclick del botón de Anular (Eliminar Perfil) y se asigna un nuevo evento
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
function validaAnular()
{
	var cant_puestos = obtener_valor('NUMPUESTOS');
	var Mensaje = "";
	if (cant_puestos != '' && cant_puestos != 0)
	{	
		Mensaje = "No puede eliminarse el Perfil " + obtener_valor('NB_PERFIL') + " porque está siendo empleado por " + cant_puestos + " puesto";
		if (cant_puestos > 1)
		{
			Mensaje += "s";
		}
		alertmb(Mensaje, 2, 1, "Aceptar");
		return false;			
	}

	var opcion = alertmb("Al ejecutar esta acción se eliminará el Perfil ¿Está seguro que desea continuar?", 1, 2, "Si", "No");
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
// Validaciones previas al envío
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
function validar()
{	var filas = obtener_valor('filMT_A_PP');
	for (var i = 1; i <= filas; i++)
	{	
		//Se valida que se haya seleccionado el Proceso Padre
		if (obtener_valorM('MT_A_PP', i, 1) == '') 
		{	
			alertmb("Debe ejecutar el evento para buscar el Proceso Padre en la fila " + i, 2, 1, "Aceptar");
			return false;				
		}

		//Se valida que se haya seleccionado el Proceso
		if (obtener_valorM('MT_A_PP',  i, 3) == '') 
		{	
			alertmb("Debe ejecutar el evento para buscar el Proceso en la fila " + i, 2, 1, "Aceptar");
			return false;				
		}

		//Se valida que se haya selecciando el Rol
		if (obtener_valorM('MT_A_PP',  i, 5) == '') 
		{	
			alertmb("Debe ejecutar el evento para buscar el Rol en la fila " + i, 2, 1, "Aceptar");
			return false;				
		}	

		//Se valida que no existan definicianes repetidas
		for (var j = i + 1; j <= filas; j++) 
		{	
			if ((obtener_valorM('MT_A_PP', i, 1) == obtener_valorM('MT_A_PP', j, 1)) && 
			    (obtener_valorM('MT_A_PP', i, 3) == obtener_valorM('MT_A_PP', j, 3)) &&
			    (obtener_valorM('MT_A_PP', i, 5) == obtener_valorM('MT_A_PP', j, 5))) 
			{	
				alertmb("La definición de la fila " + i + " se repite en la fila " + j, 2, 1, "Aceptar");
				return false;
			}
		}
	}
	return true;
}
asignar_event( "onclick" , "validar()" , "wl_bentregar" );
asignar_event( "onclick" , "validar()" , "wl_bentregar1" );
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
