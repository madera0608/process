//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Pasa a may�sculas el texto de la columna de la matriz indicada
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
function mayuscula_columna(matriz, columna)
{	var i;
	var res_m;
	var filas = obtener_valor('fil' + matriz);
	for(i = 1; i <= filas; i++)
	{	res_m = document.getElementById('M' + i + matriz + columna).value.toUpperCase();
		asignar_valorM( matriz, res_m, i, columna);
	}
	return true;
}

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Pasa a may�sculas el texto del campo indicado
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
function mayuscula_campo(campo) 
{	var res;
	res = document.getElementById(campo).value.toUpperCase();
	asignar_valor( campo, res);
	return true;
}

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Valida que la direcci�n de correo electr�nica ingresada en el campo sea correcta
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
function mailtest(campo)
{	if (obtener_valor(campo) == "" )
	{	return true;
	}
	else
	{	if (!checkEmail(obtener_valor(campo)))
		{	alertmb("El correo electr�nico ingresado tiene un formato err�neo",2,1,"Aceptar");
			document.getElementById(campo).focus();			
			asignar_valor(campo, "");
			return(false);
		}
		else
		{	return(true);
		}
	}
}