OcultarGrupo('Tareas y Reglas de negocio');
OcultarCampo('MTZTAREA');
OcultarCampo('MTZFLAG');
OcultarCampo('ACTIVIDAD');
document.getElementById('evento_ACTIVIDAD').style.visibility = "hidden";
CamposObligatorios(["M0MTZFLAG3"]);
MatrizEstatica('MTZFLAG');

if (obtener_valor('M1MTZFLAG1')!="")
MostrarCampo('MTZFLAG');
else
OcultarCampo('MTZFLAG');

if (obtener_valor('INCARGA')=="1"){
	MostrarGrupo('Tareas y Reglas de negocio');
	MostrarCampo('MTZTAREA');
	MostrarCampo('ACTIVIDAD');
	if (obtener_valor('ACTIVIDAD')!="Seleccione")
		document.getElementById('evento_ACTIVIDAD').style.visibility = "";
}


//FUNCIÓN VALIDAR ENVIO
function ValidaEnvio()
{  
	var tam = obtener_valor( 'filMTZFLAG' );
	var k = 1;
	var aux=0;
    	for (k = 1 ; k <= tam ; k ++) {
		aux=obtener_valorM( "MTZFLAG" , k , 3);
		aux1=obtener_valorM( "MTZFLAG" , k , 1);
		if (aux=='' && aux1!=''){
			alertmb("Indique las actividades que activan la regla de negocio",0,1,"Aceptar");
	  		return false;
		}
    	}
	return true;
}

//EVENTO DE ACTIVIDAD
asignar_event( "onchange", "cambio_actividad()", 'ACTIVIDAD');
function cambio_actividad(){ 
    OcultarGrupo('Tareas y Reglas de negocio');
	asignar_valor( 'INCARGA', '' );
	borrarMatriz('MTZTAREA','TTTT');
	borrarMatriz('MTZFLAG','TTT');
	if (obtener_valor('ACTIVIDAD')!="Seleccione")
		document.getElementById('evento_ACTIVIDAD').style.visibility = "";
	else
		document.getElementById('evento_ACTIVIDAD').style.visibility = "hidden";
    return true;
}

//EVENTO DE PROCESO
asignar_event( "onchange", "cambio_proceso()", 'PROCESO');
function cambio_proceso(){ 
    OcultarGrupo('Tareas y Reglas de negocio');
	OcultarCampo('ACTIVIDAD');
	document.getElementById('evento_ACTIVIDAD').style.visibility = "hidden";
	select = document.getElementById('ACTIVIDAD');
	var idProceso = obtener_valor('PROCESO');
	document.getElementById('ACTIVIDAD').options.length = 0;
	var opt = document.createElement('option');
	opt.value = "";
	opt.innerHTML = "Seleccione";
    select.appendChild(opt);
	var url = obtener_valor('URL');
	if (idProceso!='Seleccione'){
		MostrarCampo('ACTIVIDAD');
		$.ajax({
				type: "GET",
				url: url + "serviciosGin/obtenerActividades/"+idProceso,
				async:false,
				success: function (data) {
					if(!(data.getElementsByTagName("descripcion")[0].childNodes[0]===undefined)){
						var descripciones= data.getElementsByTagName("descripcion");
						for (var j=0;j<descripciones.length;j++){
							var opt = document.createElement('option');
							opt.value = data.getElementsByTagName("id")[j].childNodes[0].nodeValue;
							opt.innerHTML = data.getElementsByTagName("descripcion")[j].childNodes[0].nodeValue;
							select.appendChild(opt);
						}
						document.getElementById('evento_ACTIVIDAD').style.visibility = "hidden";
					}
				},
				error: function (XMLHttpRequest, textStatus, errorThrown) {
								alertmb("En este momento no hay conexión con el servidor. Por favor intente más tarde: " + errorThrown,0,1,"Aceptar");
								returnValue = false;
				}
		});
	}
    return true;
}

function validarOrden(){
	var fila = get_fila('MTZTAREA'); 
	var tam = obtener_valor( 'filMTZTAREA' );
	var k = 1;
	var aux=0;
	var orden= obtener_valorM( "MTZTAREA" , fila , 2);
    	for (k = 1 ; k <= tam ; k ++) {
			aux=obtener_valorM( "MTZTAREA" , k , 2);
			if (aux==orden && fila!=k){
				alertmb("Recuerde que el orden de ejecución debe ser único",0,1,"Aceptar");
				asignar_valorM( 'MTZTAREA', '', fila ,2 );
				return false;
			}
    	}
	return true;
}

function borrarMatriz(matriz,tipos){
	SeleccionaFila(matriz);
	BorrarFila(matriz,tipos);
}

asignar_event_matriz("onblur" , "validarOrden()" , "MTZTAREA", 2);

//EJECUTAR FUNCIÓN DE VALIDAR ENVIO	
asignar_event( "onclick" , "ValidaEnvio()", "wl_bsolicitar" );
asignar_event( "onclick" , "ValidaEnvio()", "wl_bsolicitar1" );
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
