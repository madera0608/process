CamposObligatorios(["M0MTZANEXO1","DESCOMENENTRE","DESFCHENTREGA","DESCOMENTENT"]);

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

if (obtener_valor( "ENVCORREO", 0 )!='T' && obtener_valor( "ENVCORREO", 1 )!='T')
  asignar_valor('ENVCORREO','T',1);

HabilitaCampos("OPCTODOCOM","SIENTREG",[[2,"COMENENTRE"],[1,"ENVCORREO"],[1,"COMENTENT"],[1,"FCHENTREGA"]]);
HabilitaCampos("ENVCORREO","SIENV",[[3,"DATOS DEL CORREO ELECTRÓNICO"]]);

$("input[name='ENVCORREO']").click(function() { 
   HabilitaCampos("ENVCORREO","SIENV",[[3,"DATOS DEL CORREO ELECTRÓNICO"]]);
});

$("input[name='OPCTODOCOM']").click(function() { 
   HabilitaCampos("OPCTODOCOM","SIENTREG",[[2,"COMENENTRE"],[1,"ENVCORREO"],[1,"COMENTENT"],[1,"FCHENTREGA"]]);
});

$("#wfrm_formulario").validate
({
  rules: { 
		FCHENTREGA:  {required: function(element) { return obtener_valor('OPCTODOCOM',0)=="T" ;}},
		COMENTENT:    {required: function(element) { return obtener_valor('OPCTODOCOM',0)=="T" ;}},
	                M1MTZANEXO1:{required: function(element) { return obtener_valor('OPCTODOCOM',0)=="T" ;}},
                                COMENENTRE:{required: function(element) { return obtener_valor('OPCTODOCOM',1)=="T" ;}}
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
