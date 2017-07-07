CamposObligatorios(["DESANEXRFC","DESANEXCUES","DESANEXEST"]);

NroFilaM('MTZDET');

//asignar_valor('MSG','Por favor recuerde anexar RFC, Cuestionario de Actividades y Estudio de Nómina');

asignar_event( "onclick" , "AsignarNroFila('MTZDET')" , "MATNVMTZDET");// El boton que agrega una fila se llama MATNV + NOmbre

function validarCantNominas(){

fil=obtener_valor( 'filMTZDET' );

	if(fil > 20){
			
		alert('No puede agregar mas de 20 nóminas');
		$('#CHKBOXMATMTZDET21').attr('checked',true);
		BorrarFila('MTZDET','NTTATANAAAAVVVNVNVTNFFAN');
		return false;
	}else{	
		return true;
	}
}

asignar_event( "onclick" ,"validarCantNominas()" , "MATNVMTZDET");

asignar_event( "onclick" ,"AsignarNroFila('MTZDET')" , "MATBOMTZDET");

//para ocultar campos segunradio button

OcultarCampo( "DETFIN");
HabilitaCampos("OPCFINAN","SIFINAN",[[1,"DETFIN"]]); 

$("input[name='OPCFINAN']").click(function() { 
HabilitaCampos("OPCFINAN","SIFINAN",[[1,"DETFIN"]]); 
} );

HabilitaCampos("OPC1ENVCOR","SI1ENVCOR",[[1,"MTZ1ANEX"]]);

$("input[name='OPC1ENVCOR']").click(function() { 
HabilitaCampos("OPC1ENVCOR","SI1ENVCOR",[[1,"MTZ1ANEX"]]);
} );

HabilitaCampos("OPC2ENVCOR","SI2ENVCOR",[[1,"MTZ2ANEX"]]);

$("input[name='OPC2ENVCOR']").click(function() { 
HabilitaCampos("OPC2ENVCOR","SI2ENVCOR",[[1,"MTZ2ANEX"]]);
} );


//FUNCIÓN VALIDAR ENVIO
function ValidaEnvio()
{  
          if ($("#wfrm_formulario").valid()!=true){
			alertmb("Por favor complete los campos obligatorios. ",0,1,"Aceptar");
	  		return false;
          }else{
			return true;
	}
}

$("#wfrm_formulario").validate
({
  rules: { 
		   SIANEXRFC: {required: true},
		   SIANEXCUES: {required: true},
		   SIANEXEST: {required: true}	   
         }
});

//EJECUTAR FUNCIÓN DE VALIDAR ENVIO	
asignar_event( "onclick" , "ValidaEnvio()", "wl_bsolicitar" );
asignar_event( "onclick" , "ValidaEnvio()", "wl_bsolicitar1" );


/*function ValidaEnvio(){
alert("Por favor recuerde anexar RFC, Cuestionario de Actividades y Estudio de Nómina");
return true;

}
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar" );
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar1" );
*/



function validarCliente(){
	var nbcliente = obtener_valor('NBCLIENT');
	var nbcorto = obtener_valor('NBCORTO');
	var url = obtener_valor('URL');

				$.ajax({
					type: "GET",
					url: url + "serviciosGin/obtenerCantidadClientes/"+nbcliente,
					async:false,
					success: function (data) {
						if(data.getElementsByTagName("cant")[0].childNodes[0].nodeValue>0){
	
	
							$.ajax({
								type: "GET",
								url: url + "serviciosGin/obtenerCLNSiClienteExiste/"+nbcliente,
								async:false,
								success: function (data) {
			
									var x = data.getElementsByTagName("cln");
									var xLen = x.length;
									var txt='';
									for (i = 0; i <xLen; i++) {
										txt = txt + x[i].childNodes[0].nodeValue + " - " ;
									}
	
									alert('El nombre de este cliente ya existe con el/los CLN(s):  '+ txt + ' . Por favor verifique que es el cliente que quiere registrar');		
								},
								error: function (XMLHttpRequest, textStatus, errorThrown) {
									alertmb("Ha ocurrido un error con el servicio web. Por favor notifique al administrador" + errorThrown,0,1,"Aceptar");
									returnValue = false;
								}
							});
						}			
					},
					error: function (XMLHttpRequest, textStatus, errorThrown) {
									alertmb("Ha ocurrido un error con el servicio web. Por favor notifique al administrador" + errorThrown,0,1,"Aceptar");
									returnValue = false;
					}
				});
					return true;
}

asignar_event( "onblur" ," validarCliente()" , "NBCLIENT");


/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
