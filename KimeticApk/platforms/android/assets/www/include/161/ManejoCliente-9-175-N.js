
MatrizEstatica( 'MTZ2TAR');
DeshabilitarCheck('MTZ2TAR',3);
asignar_event_matriz( "onchange" ,"validarPrecedencia('MTZ2TAR')" , "MTZ2TAR", 3);
asignar_event_matriz( "onchange" ,"validarUncheck('MTZ2TAR')" , "MTZ2TAR", 3);


HabilitaCampos("OPCINDUC","SIINDUC",[[1,"FCHEFINDUC"], [2,"MOTCANIND"],[3,"Tareas a ejecutar"]]);

$("input[name='OPCINDUC']").click(function() { 
HabilitaCampos("OPCINDUC","SIINDUC",[[1,"FCHEFINDUC"], [2,"MOTCANIND"],[3,"Tareas a ejecutar"]]);

	if ($("input[name='OPCINDUC']:checked").val() ==  "NOINDUC****AlterT"){
		asignar_valor('FCHEFINDUC','');
		asignar_valor('MOTCANIND','Seleccione');
	}
} );



CamposObligatorios(["DESFCHEFINDUC","DESMOTCANIND"]);

$("#wfrm_formulario").validate
({
 
  rules: {  

    FCHEFINDUC: { required: function(element) { return $("input[name='OPCINDUC']:checked").val() ==  "SIINDUC****AlterT" ;}
                       },
    MOTCANIND: { required: function(element) { return $("input[name='OPCINDUC']:checked").val() ==  "NOINDUC****AlterT" ;}
                       }
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

//EJECUTAR FUNCIÓN DE VALIDAR ENVIO 
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar" );
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar1" );

/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
