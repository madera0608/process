MatrizEstatica('MTZFILTR');
OcultarGrupo('INFORMACIÓN DE CLIENTES');
CamposObligatorios(["M0MTZREASI6","DESREASIGNADO"]);
OcultarCampo( 'MATNVMTZREASI',2);
OcultarCampo( 'MATSEMTZREASI',2);
OcultarCampo("MTZREASI",3,6); 
document.getElementById('evento_EVENTO').style.visibility = "hidden";

if (obtener_valor('INCARGA')=="1"){
	document.getElementById('evento_EVENTO').style.visibility = "";
	if (obtener_valor('TPOREASIG',0)=='T' ){
		MostrarCampo("MTZREASI",3,6);
		OcultarCampo('REASIGNADO');
	} 
	if (obtener_valor('TPOREASIG',1)=='T' ){
		OcultarCampo("MTZREASI",3,6); 
		MostrarCampo('REASIGNADO');
	} 
	if (obtener_valor('M1MTZREASI1')!='')
		MostrarGrupo('INFORMACIÓN DE CLIENTES');
	else
		OcultarGrupo('INFORMACIÓN DE CLIENTES');
}

$("input[name='TPOREASIG']").click(function() {
	if (obtener_valor('TPOREASIG',0)=='T' ){
		MostrarCampo("MTZREASI",3,6);
		OcultarCampo('REASIGNADO');
	} 
	if (obtener_valor('TPOREASIG',1)=='T' ){
		OcultarCampo("MTZREASI",3,6); 
		MostrarCampo('REASIGNADO');
	} 
	var ejecutivo = obtener_valor('EJECUTIVO');
	if ((obtener_valor('TPOREASIG',0)!='F' || obtener_valor('TPOREASIG',1)!='F') && ejecutivo!='Seleccione' )
		document.getElementById('evento_EVENTO').style.visibility = "";
	else
		document.getElementById('evento_EVENTO').style.visibility = "hidden";
} );

//EVENTO DE PERFIL
asignar_event( "onchange", "cambio_perfil()", 'PERFIL');
function cambio_perfil(){ 
	asignar_valor( 'INCARGA', '' );
	select = document.getElementById('EJECUTIVO');
	OcultarGrupo('INFORMACIÓN DE CLIENTES');
	borrarMatriz('MTZREASI','TTTTTL');
	var idPerfil = obtener_valor('PERFIL');
	document.getElementById('EJECUTIVO').options.length = 0;
	var opt = document.createElement('option');
	opt.value = "";
	opt.innerHTML = "Seleccione";
    	select.appendChild(opt);
	var ejecutivo = obtener_valor('EJECUTIVO');		
	if ((obtener_valor('TPOREASIG',0)!='F' || obtener_valor('TPOREASIG',1)!='F') && ejecutivo!='Seleccione' )
		document.getElementById('evento_EVENTO').style.visibility = "";
	else
		document.getElementById('evento_EVENTO').style.visibility = "hidden";
	var url = obtener_valor('URL');
	if (idPerfil!='Seleccione'){
		$.ajax({
				type: "GET",
				url: url + "serviciosGin/obtenerEjecutivos/"+idPerfil,
				async:false,
				success: function (data) {
					if(!(data.getElementsByTagName("nb_usr_act")[0].childNodes[0]===undefined)){
						var descripciones= data.getElementsByTagName("nb_usr_act");
						for (var j=0;j<descripciones.length;j++){
							var opt = document.createElement('option');
							opt.value = data.getElementsByTagName("cd_usr_act")[j].childNodes[0].nodeValue;
							opt.innerHTML = data.getElementsByTagName("nb_usr_act")[j].childNodes[0].nodeValue;
							select.appendChild(opt);
						}
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

//EVENTO DE EJECUTIVO
asignar_event( "onchange", "cambio_ejecutivo()", 'EJECUTIVO');
function cambio_ejecutivo(){ 
	OcultarGrupo('INFORMACIÓN DE CLIENTES');
	asignar_valor( 'INCARGA', '' );
	borrarMatriz('MTZREASI','TTTTTL');
	var ejecutivo = obtener_valor('EJECUTIVO');	
	if ((obtener_valor('TPOREASIG',0)!='F' || obtener_valor('TPOREASIG',1)!='F') && ejecutivo!='Seleccione' )
		document.getElementById('evento_EVENTO').style.visibility = "";
	else
		document.getElementById('evento_EVENTO').style.visibility = "hidden";
    return true;
}

function borrarMatriz(matriz,tipos){
	SeleccionaFila(matriz);
	BorrarFila(matriz,tipos);
}

//FUNCIÓN VALIDAR ENVIO
function ValidaEnvio()
{
	if (obtener_valor('M1MTZREASI1')==''){
   		alertmb("Debe reasignar al menos un cliente",0,1,"Aceptar");
     		return false;
	}
	else{
		if ($("#wfrm_formulario").valid()!=true){
   			alertmb("Por favor complete los campos obligatorios",0,1,"Aceptar");
    		 	return false;
	
         		}else
			return true;
	
	}
}

$("#wfrm_formulario").validate
({
  rules: { 
		   REASIGNADO:{required: function(element) { return obtener_valor('TPOREASIG',1)=="T";}}			   
         },
  messages: { 
	REASIGNADO: "Por favor seleccione el nuevo responsable"
            }
});

ValidarFilas("MTZREASI",[
["MTZREASI6",{required: function(element) { return obtener_valor('TPOREASIG',0)=="T";}}]
]);

//EJECUTAR FUNCIÓN DE VALIDAR ENVIO	
asignar_event( "onclick" , "ValidaEnvio()", "wl_bsolicitar" );
asignar_event( "onclick" , "ValidaEnvio()", "wl_bsolicitar1" );
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
