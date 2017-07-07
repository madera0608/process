MatrizEstatica('MTZCONF');
CamposObligatorios(["M0MTZCONF1","M0MTZCONF2","M0MTZCONF3","M0MTZCONF4","DESCORPREMTO"]);
////OCULTAR CAMPOS QUE DEPENDEN SI LA NÓMINA SERÁ CORREGIDA O NO
OcultarCampo('CORPREMTO');

if (obtener_valor('OPCCORRMTO',0)=='F' && obtener_valor('OPCCORRMTO',1)=='F')
	asignar_valor('OPCCORRMTO','T',1);

HabilitaCampos("OPCCORRMTO","OPCSICORMT",[[1,"CORPREMTO"] ]);
HabilitaCampos("OPCCORRMTO","OPCNOCORMT",[[1,"MTZCONF"] ]);

$("input[name='OPCCORRMTO']").click(function() {
	HabilitaCampos("OPCCORRMTO","OPCSICORMT",[[1,"CORPREMTO"] ]); 
	HabilitaCampos("OPCCORRMTO","OPCNOCORMT",[[1,"MTZCONF"] ]);
});

//FUNCIÓN VALIDAR ENVIO
function ValidaEnvio()
{  
          if ($("#wfrm_formulario").valid()!=true){
			alertmb("Por favor complete los campos obligatorios",0,1,"Aceptar");
	  		return false;
          }else
	return true;
}


$("#wfrm_formulario").validate
({
  rules: { 
           CORPREMTO:{required: function(element) { return obtener_valor('OPCCORRMTO',0)=="T";}},
	M1MTZCONF1:{required: function(element) { return obtener_valor('OPCCORRMTO',1)=="T";}},
	M1MTZCONF2:{required: function(element) { return obtener_valor('OPCCORRMTO',1)=="T";}},
	M1MTZCONF3:{required: function(element) { return obtener_valor('OPCCORRMTO',1)=="T";}},
	M1MTZCONF4:{required: function(element) { return obtener_valor('OPCCORRMTO',1)=="T";}}
         },
  messages: { 
               CORPREMTO: "Por favor indique las correcciones a aplicar",
	M1MTZCONF1:"Por favor seleccione el contacto que confirmo la prenómina",
	M1MTZCONF2:"Por favor indique la fecha de confirmación",
	M1MTZCONF3:"Por favor indique la hora de confirmación",
	M1MTZCONF4: "Por favor seleccione el canal utilizado para la confirmación"
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
