RegistrarFormula(":MONTPRE: + :MONTSERV:" , "MONTPREF"  );

DeshabilitarCheck('MTZ1TAR',3);
MatrizEstatica( 'MTZ1TAR');
asignar_event_matriz( "onchange" ,"validarPrecedencia('MTZ1TAR')" , "MTZ1TAR", 3);
asignar_event_matriz( "onchange" ,"validarUncheck('MTZ1TAR')" , "MTZ1TAR", 3);

CamposObligatorios(["DESFCHELAB","DESANEXNOM","DESANEXHOJ", "DESMTOFINIQ", "DESMONTPRE", "DESMONTSERV", "DESMONTPREF"]);

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
     SIANEXNOM: {required: function(element) { return finTareas('MTZ1TAR',3);}},
      SIANEXHOJ: {required: function(element) { return finTareas('MTZ1TAR',3);}}  ,
      FCHELAB: {required: function(element) { return finTareas('MTZ1TAR',3);}},
      MTOFINIQ: {required: function(element) { return finTareas('MTZ1TAR',3);}} ,
      MONTPRE: {required: function(element) { return finTareas('MTZ1TAR',3);}} ,
      MONTSERV: {required: function(element) { return finTareas('MTZ1TAR',3);}} ,
      MONTPREF: {required: function(element) { return finTareas('MTZ1TAR',3);}}       
         },
  messages: { 
               SIANEXNOM:"Por favor indique que anexó la nómina",
	SIANEXHOJ:"Por favor indique que anexó la hoja de fondeo",
	FCHELAB:"Por favor indique la fecha de elaboración de la nómina",
	MTOFINIQ:"Por favor indique el monto del finiquito",
	MONTPRE:"Por favor indique el monto de dispersión",
	MONTSERV:"Por favor indique el monto de los adicionales",
	MONTPREF:"Por favor indique el monto de la pre-factura"
            }
});

$("#MTOFINIQ").blur( function() {
              if (obtener_valor('MONTPRE')!="" )
                   if ( obtenerFloat(obtener_valor('MTOFINIQ'), Formatodec)<obtenerFloat(obtener_valor('MONTPRE'), Formatodec) )
                     {
                              alertmb("El monto del finiquito no puede ser menor al monto de la dispersión",0,1,"Aceptar");
                              asignar_valor("MTOFINIQ","");
                     }
} );

$("#MONTPRE").blur( function() {
              if (obtener_valor('MTOFINIQ')!="" )
                   if ( obtenerFloat(obtener_valor('MTOFINIQ'), Formatodec)<obtenerFloat(obtener_valor('MONTPRE'), Formatodec) )
                           {
                              alertmb("El monto de la dipersión no puede ser mayor al monto del finiquito",0,1,"Aceptar");
                              asignar_valor("MONTPRE","");
                           }

              if (obtener_valor('MONTSERV')!="" )
                   if ( obtenerFloat(obtener_valor('MONTPRE'), Formatodec)<obtenerFloat(obtener_valor('MONTSERV'), Formatodec) )
                            {
                               alertmb("El monto de la dispersión no puede ser menor al monto de los adicionales",0,1,"Aceptar");
                               asignar_valor("MONTPRE","");
                            }

} );

$("#MONTSERV").blur( function() {
              if (obtener_valor('MONTPRE')!="" )
                   if ( obtenerFloat(obtener_valor('MONTPRE'), Formatodec)<obtenerFloat(obtener_valor('MONTSERV'), Formatodec) )
                        {
                              alertmb("El monto de adicionales no puede ser mayor al monto de la dispersión",0,1,"Aceptar");
                              asignar_valor("MONTSERV","");
                         }  
} );

//EJECUTAR FUNCIÓN DE VALIDAR ENVIO 
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar" );
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar1" );
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
