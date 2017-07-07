
MatrizEstatica( 'MTZ3TAR');
DeshabilitarCheck('MTZ3TAR',3);
asignar_event_matriz( "onchange" ,"validarPrecedencia('MTZ3TAR')" , "MTZ3TAR", 3);
asignar_event_matriz( "onchange" ,"validarUncheck('MTZ3TAR')" , "MTZ3TAR", 3);


HabilitaCampos("OPCENTREP","SIENTREP",[[1,"FCHEFENTRE"], [2,"MOTCANENT"],[3,"Tareas a ejecutar"]]);

$("input[name='OPCENTREP']").click(function() { 

HabilitaCampos("OPCENTREP","SIENTREP",[[1,"FCHEFENTRE"], [2,"MOTCANENT"],[3,"Tareas a ejecutar"]]);

	if ($("input[name='OPCENTREP']:checked").val() ==  "NOENTREP****AlterT"){
		asignar_valor('FCHEFENTRE','');
		asignar_valor('MOTCANENT','Seleccione');
	}


} );


CamposObligatorios(
["DESFCHEFENTRE","DESMOTCANENT"]);

$("#wfrm_formulario").validate
({
 
  rules: {  

    FCHEFENTRE: { required: function(element) { return $("input[name='OPCENTREP']:checked").val() ==  "SIENTREP****AlterT" ;}
                       },
    MOTCANENT: { required: function(element) { return $("input[name='OPCENTREP']:checked").val() ==  "NOENTREP****AlterT" ;}
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
