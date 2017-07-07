RegistrarFormula(":MONTPRE: + :MONTSERV:" , "MONTPREF"  );

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


/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
