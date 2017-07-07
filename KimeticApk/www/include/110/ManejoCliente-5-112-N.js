OcultarCampo('AUTORIZANO');
OcultarCampo('COMENTNOAU');
if (obtener_valor('AUTORIZANO',1)=="T"){
	MostrarCampo('AUTORIZANO');
	MostrarCampo('COMENTNOAU');
	asignar_valor('OPCPROC','T',0);
	asignar_valor('RAZNOPROC','Seleccione');
	HabilitaCampos("OPCPROC","SIPROCESAR",[[1,"SIANEXFORM"],[1,"OPCCORR"]]);
	$("input[name='OPCPROC']").attr("disabled",true);
}

CamposObligatorios(["M0MTZANEXO1","DESOPCANEXOS","DESOPCCORR","DESRAZNOPROC","DESCOMENNOPRO"]);
	
MatrizEstatica( 'MTZANEXO' );

asignar_valor('OPCANEXOS','T',1);
asignar_valor('OPCCORR','T',1);
asignar_valor('OPCPROC','T',0);

HabilitaCampos("OPCANEXOS","SIANEXOS",[[1,"COMENTCORR"],[1,"MTZANEXO"]]);
HabilitaCampos("OPCCORR","SICORREO",[[1,"OPCANEXOS"]]);
HabilitaCampos("OPCPROC","SIPROCESAR",[[1,"OPCCORR"]]);
HabilitaCampos("OPCPROC","NOPROCESAR",[[1,"RAZNOPROC"],[1,"COMENNOPRO"]]);
if (obtener_valor('OPCPROC',1)=="T")
	OcultarGrupo( 'DATOS DEL CORREO ELECTRÓNICO' );
else{
	MostrarGrupo( 'DATOS DEL CORREO ELECTRÓNICO' );
	asignar_valor('RAZNOPROC','Seleccione');
}
if (obtener_valor('OPCCORR',1)=="T"){
	OcultarCampo('COMENTCORR');
	OcultarCampo('MTZANEXO');
}
$("input[name='OPCPROC']").click(function() { 
	HabilitaCampos("OPCPROC","SIPROCESAR",[[1,"OPCCORR"]]);
	HabilitaCampos("OPCPROC","NOPROCESAR",[[1,"RAZNOPROC"],[1,"COMENNOPRO"]]);
	HabilitaCampos("OPCCORR","SICORREO",[[1,"OPCANEXOS"]]); 
	HabilitaCampos("OPCANEXOS","SIANEXOS",[[1,"COMENTCORR"],[1,"MTZANEXO"]]); 
	if (obtener_valor('OPCPROC',1)=="T")
		OcultarGrupo( 'DATOS DEL CORREO ELECTRÓNICO' );
	else{
		MostrarGrupo( 'DATOS DEL CORREO ELECTRÓNICO' );
		asignar_valor('RAZNOPROC','Seleccione');
	}
});
$("input[name='OPCCORR']").click(function() { 
	HabilitaCampos("OPCCORR","SICORREO",[[1,"OPCANEXOS"]]); 
	HabilitaCampos("OPCANEXOS","SIANEXOS",[[1,"COMENTCORR"],[1,"MTZANEXO"]]); 
	if (obtener_valor('OPCCORR',1)=="T"){
		OcultarCampo('COMENTCORR');
		OcultarCampo('MTZANEXO');
	}
});
$("input[name='OPCANEXOS']").click(function() { 
	HabilitaCampos("OPCANEXOS","SIANEXOS",[[1,"COMENTCORR"],[1,"MTZANEXO"]]); 
});

//FUNCIÓN VALIDAR ENVIO
function ValidaEnvio()
{  
          if ($("#wfrm_formulario").valid()!=true){
			alertmb("Por favor complete los campos obligatorios",0,1,"Aceptar");
	  		return false;
          }else{
		return true;
	}
}

$("#wfrm_formulario").validate
({
  rules: { 
		   M1MTZANEXO1:{required:  function(element) { return obtener_valor('OPCCORR',0)=="T" && obtener_valor('OPCANEXOS',0)=="T";}},
		   OPCCORR:{required: function(element) { return obtener_valor('OPCPROC',0)=="T";}},
		   OPCANEXOS:{required: function(element) { return obtener_valor('OPCPROC',0)=="T" && obtener_valor('OPCCORR',0)=="T";}},
		   COMENNOPRO:{required: function(element) { return obtener_valor('OPCPROC',1)=="T" ;}},
		   RAZNOPROC:{required: function(element) { return obtener_valor('OPCPROC',1)=="T" ;}}						   
         },
  messages: { 
	M1MTZANEXO1: "Por favor seleccione el adjunto a incluir en el correo para el cliente",
	OPCCORR: "Por favor indique si enviará correo al cliente",
	OPCANEXOS: "Por favor indique si desea adjuntar anexos al correo",
	COMENNOPRO: "Por favor indique comentarios sobre el no procesamiento de la solicitud",
	RAZNOPROC: "Por favor seleccione el motivo del no procesamiento de la solicitud"
            }
});


//EJECUTAR FUNCIÓN DE VALIDAR ENVIO	
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar" );
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar1" );
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
