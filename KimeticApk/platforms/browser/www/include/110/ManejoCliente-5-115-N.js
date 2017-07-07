OcultarCampo('SIANEX3PRE');

if (obtener_valor('2INCORR')=='0') 
	MostrarCampo('SIANEX3PRE');

DeshabilitarCheck('MTZTAREA',3);
MatrizEstatica( 'MTZTAREA');
asignar_event_matriz( "onchange" ,"validarPrecedencia('MTZTAREA')" , "MTZTAREA", 3);
asignar_event_matriz( "onchange" ,"validarUncheck('MTZTAREA')" , "MTZTAREA", 3);
MatrizEstatica( 'MTZANEXO' );

CamposObligatorios(["M0MTZANEXO1","DESANEX3PRE","DESMONTSERV","DESMONTNOM","DESOPCCORR"]);


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
asignar_valor('OPCCORR','T',1);
HabilitaCampos("OPCCORR","SICORREO",[[1,"COMENTCORR"],[1,"MTZANEXO"]]);

$("input[name='OPCCORR']").click(function() { 
	HabilitaCampos("OPCCORR","SICORREO",[[1,"COMENTCORR"],[1,"MTZANEXO"]]);
});
$("#wfrm_formulario").validate
({
  rules: { 
		   SIANEX3PRE: {required: function(element) { return finTareas('MTZTAREA',3) && obtener_valor('2INCORR')=='0';}},
		MONTSERV: {required: function(element) { return finTareas('MTZTAREA',3);}},
		MONTNOM: {required: function(element) { return finTareas('MTZTAREA',3);}},
		   M1MTZANEXO1:{required: function(element) { return obtener_valor('OPCCORR',0)=="T" && finTareas('MTZTAREA',3);}}		   
         }
});

/*
$("#MONTNOM").blur( function() {
              if (obtener_valor('MONTNOM')!="" )
                   if ( obtenerFloat(obtener_valor('MONTNOM'), Formatodec)<obtenerFloat(obtener_valor('MONTSERV'), Formatodec) )
                     {
                              alertmb("El monto de la nómina no puede ser menor al monto de adicionales",0,1,"Aceptar");
                              asignar_valor("MONTNOM","");
                     }
} );

$("#MONTSERV").blur( function() {
              if (obtener_valor('MONTSERV')!="" )
                   if ( obtenerFloat(obtener_valor('MONTNOM'), Formatodec)<obtenerFloat(obtener_valor('MONTSERV'), Formatodec) )
                     {
                              alertmb("El monto de adicionales no puede ser mayor al monto de nómina",0,1,"Aceptar");
                              asignar_valor("MONTSERV","");
                     }
} );

*/
//EJECUTAR FUNCIÓN DE VALIDAR ENVIO	
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar" );
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar1" );
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
