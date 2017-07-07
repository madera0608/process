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

CamposObligatorios(["M0MTZANEXO1","DESANEXFORM","DESOPCCORR","DESRAZNOPROC","DESCOMENNOPRO"]);
asignar_valor('OPCCORR','T',1);
HabilitaCampos("OPCCORR","SICORREO",[[1,"COMENTCORR"],[1,"MTZANEXO"]]);

$("input[name='OPCCORR']").click(function() { 
	HabilitaCampos("OPCCORR","SICORREO",[[1,"COMENTCORR"],[1,"MTZANEXO"]]);
});
MatrizEstatica( 'MTZANEXO' );

asignar_valor('OPCPROC','T',0);
HabilitaCampos("OPCPROC","SIPROCESAR",[[1,"SIANEXFORM"],[1,"OPCCORR"]]);
HabilitaCampos("OPCPROC","NOPROCESAR",[[1,"RAZNOPROC"],[1,"COMENNOPRO"]]);
if (obtener_valor('OPCPROC',1)=="T")
	OcultarGrupo( 'DATOS DEL CORREO ELECTRÓNICO' );
else{
	MostrarGrupo( 'DATOS DEL CORREO ELECTRÓNICO' );
	asignar_valor('RAZNOPROC','Seleccione');
}
$("input[name='OPCPROC']").click(function() { 
	HabilitaCampos("OPCPROC","SIPROCESAR",[[1,"SIANEXFORM"],[1,"OPCCORR"]]);
	HabilitaCampos("OPCPROC","NOPROCESAR",[[1,"RAZNOPROC"],[1,"COMENNOPRO"]]);
	if (obtener_valor('OPCPROC',1)=="T")
		OcultarGrupo( 'DATOS DEL CORREO ELECTRÓNICO' );
	else{
		MostrarGrupo( 'DATOS DEL CORREO ELECTRÓNICO' );
		asignar_valor('RAZNOPROC','Seleccione');
	}
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
		   SIANEXFORM: {required: function(element) { return obtener_valor('OPCPROC',0)=="T" ;}},
		   M1MTZANEXO1:{required: function(element) { return obtener_valor('OPCPROC',0)=="T" && obtener_valor('OPCCORR',0)=="T";}},
		   OPCCORR:{required: function(element) { return obtener_valor('OPCPROC',0)=="T" ;}},
		   COMENNOPRO:{required: function(element) { return obtener_valor('OPCPROC',1)=="T" ;}},
		   RAZNOPROC:{required: function(element) { return obtener_valor('OPCPROC',1)=="T" ;}}			   
         },
  messages: { 
               SIANEXFORM: "Por favor indique que el formato de empleados fue adjuntado",
	M1MTZANEXO1: "Por favor seleccione el adjunto a incluir en el correo para el cliente",
	OPCCORR: "Por favor indique si enviará correo al cliente",
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
