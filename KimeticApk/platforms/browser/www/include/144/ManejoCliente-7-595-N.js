RegistrarFormula( ":PROPFIN[*,3]: + :PROPFIN[*,4]: + 0 ", "PROPFIN[*,5]" , 1 );

function propAltoValor()
{
   filas = obtener_valor('filPROPFIN');
   filAltoValor = 1;

     for(i=2;i<=filas;i++)
    { 
         if (obtenerFloat(obtener_valorM('PROPFIN',filAltoValor,2),Formatodec)<obtenerFloat(obtener_valorM('PROPFIN',i,2),Formatodec))
	        filAltoValor=i; 
   }
     asignar_valor( 'MTOFINIQ' , obtener_valorM('PROPFIN',filAltoValor,2));
     asignar_valor( 'MONTPRE' ,  obtener_valorM('PROPFIN',filAltoValor,3));
     asignar_valor( 'MONTSERV' , obtener_valorM('PROPFIN',filAltoValor,4));
     asignar_valor( 'MONTPREF' , obtener_valorM('PROPFIN',filAltoValor,5))
 }

        function valFiniquito()
	       {
              fila= get_fila("PROPFIN");
			  if (obtener_valorM('PROPFIN',fila,2)!="" )
                   if ( obtenerFloat(obtener_valorM('PROPFIN',fila,2), Formatodec)<obtenerFloat(obtener_valorM('PROPFIN',fila,2), Formatodec) )
                     {
                              alertmb("El monto del finiquito no puede ser menor al monto de la dispersión",0,1,"Aceptar");
                              asignar_valorM("PROPFIN","",fila,2);
							  return false;
                     }
			   return true;		 
            }
			
		function valDispersion()
           {  
              fila= get_fila("PROPFIN");		   
              if (obtener_valorM('PROPFIN',fila,2)!="" )
                   if ( obtenerFloat(obtener_valorM('PROPFIN',fila,2), Formatodec)<obtenerFloat(obtener_valorM('PROPFIN',fila,3), Formatodec) )
                           {
                              alertmb("El monto de la dipersión no puede ser mayor al monto del finiquito",0,1,"Aceptar");
                              asignar_valorM("PROPFIN","",fila,3);
							  return false;
                           }

              if (obtener_valorM('PROPFIN',fila,3)!="" )
                   if ( obtenerFloat(obtener_valorM('PROPFIN',fila,3), Formatodec)<obtenerFloat(obtener_valorM('PROPFIN',fila,4), Formatodec) )
                            {
                              alertmb("El monto de la dispersión no puede ser menor al monto de los adicionales",0,1,"Aceptar");
                              asignar_valorM("PROPFIN","",fila,3);
							  return false;
                            }
			  return true;				
           } 

        function valAdicionales()
		   {
		      fila= get_fila("PROPFIN");		   
              if (obtener_valorM('PROPFIN',fila,3)!="" )
                   if ( obtenerFloat(obtener_valorM('PROPFIN',fila,3), Formatodec)<obtenerFloat(obtener_valorM('PROPFIN',fila,4), Formatodec) )
                        {
                              alertmb("El monto de adicionales no puede ser mayor al monto de la dispersión",0,1,"Aceptar");
                              asignar_valorM("PROPFIN","",fila,4);
							  return false;
                         }  
			  return true; 			 
           } 

asignar_event_matriz( "onblur" , "valFiniquito()" , "PROPFIN" , 2 );
asignar_event_matriz( "onblur" , "valDispersion()" , "PROPFIN" , 3 );
asignar_event_matriz( "onblur" , "valAdicionales()" , "PROPFIN" , 4 );


DeshabilitarCheck('MTZ1TAR',3);
MatrizEstatica( 'MTZ1TAR');
asignar_event_matriz( "onchange" ,"validarPrecedencia('MTZ1TAR')" , "MTZ1TAR", 3);
asignar_event_matriz( "onchange" ,"validarUncheck('MTZ1TAR')" , "MTZ1TAR", 3);

CamposObligatorios(["DESFCHELAB","DESANEXNOM","DESANEXHOJ"]);

//FUNCIÓN VALIDAR ENVIO
function ValidaEnvio()
{  
   propAltoValor();
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
      SIANEXHOJ: {required: function(element) { return finTareas('MTZ1TAR',3);}}  
         },
  messages: { 
               SIANEXNOM:"Por favor indique que anexó la nómina",
	SIANEXHOJ:"Por favor indique que anexó la hoja de fondeo",
	FCHELAB:"Por favor indique la fecha de elaboración de la nómina"
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
