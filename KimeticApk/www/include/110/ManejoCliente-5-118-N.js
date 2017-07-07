DeshabilitarCheck('MTZTAREA',3);
MatrizEstatica( 'MTZTAREA');
MatrizEstatica( 'MTZANEXE');
asignar_event_matriz( "onchange" ,"validarPrecedencia('MTZTAREA')" , "MTZTAREA", 3);
asignar_event_matriz( "onchange" ,"validarUncheck('MTZTAREA')" , "MTZTAREA", 3);

CamposObligatorios(["DESNUMEMPL","DESMONTPRE","DESANEXNOM","DESMONTPREF","DESANEXPREF","M0MTZANEXE2"]);

if (obtener_valor('OPCFACT',0)=='T'){
	MostrarCampo('SIANEXPREF');
}else{
	OcultarCampo('SIANEXPREF');
                OcultarGrupo( 'DATOS DEL CORREO ELECTRÓNICO' );
}

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
		   NUMEMPL: {required: function(element) { return finTareas('MTZTAREA',3);}},
		MONTPRE: {required: function(element) { return finTareas('MTZTAREA',3);}},
		SIANEXNOM: {required: function(element) { return finTareas('MTZTAREA',3);}},
		MONTPREF: {required: function(element) { return finTareas('MTZTAREA',3);}},
           		SIANEXPREF: {required: function(element) { return finTareas('MTZTAREA',3) && $("input[name='OPCFACT']:checked").val() ==  "OPCFACTSI****AlterT";}  }		   
         }
});


RegistrarFormula(":MONTPRE: + :MONTSERV:" , "MONTPREF"  );

/*$("#MONTNOM").blur( function() {
              if (obtener_valor('MONTNOM')!="" )
                   if ( obtenerFloat(obtener_valor('MONTNOM'), Formatodec)<obtenerFloat(obtener_valor('MONTSERV'), Formatodec) )
                     {
                              alertmb("El monto de la nómina no puede ser menor al monto de adicionales",0,1,"Aceptar");
                              asignar_valor("MONTNOM","");
                     }
} );

$("#MONTPRE").blur( function() {
              if (obtener_valor('MTOFINIQ')!="" )
                   if ( obtenerFloat(obtener_valor('MONTNOM'), Formatodec)<obtenerFloat(obtener_valor('MONTPRE'), Formatodec) )
                           {
                              alertmb("El monto de la dipersión no puede ser mayor al monto del finiquito",0,1,"Aceptar");
                              asignar_valor("MONTPRE","");
                           }
} ); */



ValidarFilas("MTZANEXE",[
["MTZANEXE2",{required: function(element) { return obtener_valor('OPCFACT',0)=='T' && finTareas('MTZTAREA',3);}}]
]);


//EJECUTAR FUNCIÓN DE VALIDAR ENVIO	
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar" );
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar1" );
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
