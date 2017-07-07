OcultarCampo( 'NBPERFIL');

function mostrarPerfil(){
	if(obtener_valor('PERFILUN') == 0){
		MostrarCampo( 'NBPERFIL');
	}
	else
	{
		OcultarCampo('NBPERFIL');
	}
         return(true);
}
asignar_event( 'onchange', "mostrarPerfil()", "PERFILUN");


/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
