//Se cambian los nombres de los botones de acción
asignar_valor( 'wl_bsolicitar' , 'Registrar Perfil');
asignar_valor( 'wl_bsolicitar1' , 'Registrar Perfil');

//Se cambian los nombres de los botones de la matriz
asignar_valor( 'MATNVMT_A_PP' , 'Agregar Proceso');
asignar_valor( 'MATBOMT_A_PP' , 'Eliminar Proceso');

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
asignar_event( "onclick" , "validar()" , "wl_bsolicitar" );
asignar_event( "onclick" , "validar()" , "wl_bsolicitar1" );
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
