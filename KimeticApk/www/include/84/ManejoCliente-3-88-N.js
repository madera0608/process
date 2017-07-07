CamposObligatorios(["DESFCHDISP","DESOPCERRCTA","DESCOMERRLAY","DESCOMERRTRAN"]);

HabilitaCampos("OPCERRLAY","NOERRLAY",[[1,"FCHDISP"],[1,"OPCERRCTA"] ]);

HabilitaCampos("OPCERRLAY","SIERRLAY",[[1,"COMERRLAY"] ]);

HabilitaCampos("OPCERRCTA","SIERRCTA",[[1,"COMERRTRAN"] ]);

$("input[name='OPCERRLAY']").click(function() { 
	HabilitaCampos("OPCERRLAY","NOERRLAY",[[1,"FCHDISP"],[1,"OPCERRCTA"]  ]); 
	HabilitaCampos("OPCERRLAY","SIERRLAY",[[1,"COMERRLAY"] ]);
	if (obtener_valor('OPCERRLAY',0)=='T'){
		asignar_valor('OPCERRCTA','F',0);
		HabilitaCampos("OPCERRCTA","SIERRCTA",[[1,"COMERRTRAN"] ]);
	}
} );

$("input[name='OPCERRCTA']").click(function() { HabilitaCampos("OPCERRCTA","SIERRCTA",[[1,"COMERRTRAN"] ]); } );

//FUNCIÓN VALIDAR ENVIO
function ValidaEnvio()
{  
          if ($("#wfrm_formulario").valid()!=true){
			alertmb("Por favor complete los campos obligatorios",0,1,"Aceptar");
	  		return false;
          }else{
	if (obtener_valor('OPCERRLAY',1)=="T" && obtener_valor('OPCERRCTA',0)=="F" && obtener_valor('OPCERRCTA',1)=="F"){
			alertmb("Por favor complete los campos obligatorios",0,1,"Aceptar");
	  		return false;
	}
	else
		return true;
          }
}

$("#wfrm_formulario").validate
({
  rules: { 
           FCHDISP:{required: function(element) { return obtener_valor('OPCERRLAY',1)=="T";}},
           COMERRLAY:{required: function(element) { return obtener_valor('OPCERRLAY',0)=="T";}},
           COMERRTRAN:{required: function(element) { return obtener_valor('OPCERRCTA',0)=="T";}}			   
         },
  messages: { 
             FCHDISP: "Por favor indique la fecha de la dispersión",
             COMERRLAY: "Por favor indique los comentarios de corrección",
             COMERRTRAN: "Por favor indique los comentarios de corrección"
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
