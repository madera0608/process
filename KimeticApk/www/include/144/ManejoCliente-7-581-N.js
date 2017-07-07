RegistrarFormula(":MONTPRE: + :MONTSERV:" , "MONTPREF"  );

MatrizEstatica( 'PROPFIN' );
if (obtener_valor('OPCTPOBAJA',1) =='T')
{
   MostrarCampo( 'PROPFIN');
  OcultarCampo('MTOFINIQ');
  OcultarCampo('MONTPRE');
  OcultarCampo('MONTSERV');
  OcultarCampo('MONTPREF');
}
else
{
  OcultarCampo( 'PROPFIN' );
  MostrarCampo('MTOFINIQ');
  MostrarCampo('MONTPRE');
  MostrarCampo('MONTSERV');
  MostrarCampo('MONTPREF');
 }

asignar_valor('OPCERRFINI','T',1);
asignar_valor('OPCCORREO','T',1);

HabilitaCampos("OPCERRFINI","SIERRFINI",[[1,"COMERRFINI"], [2,"OPCCORREO"]]);


$("input[name='OPCERRFINI']").click(function() { 
HabilitaCampos("OPCERRFINI","SIERRFINI",[[1,"COMERRFINI"], [2,"OPCCORREO"]]);
} );



HabilitaCampos("OPCCORREO","SICORREO",[[1,"MTZANEXO"]]);

$("input[name='OPCCORREO']").click(function() { 
	HabilitaCampos("OPCCORREO","SICORREO",[[1,"MTZANEXO"]]);
});



CamposObligatorios(["M0MTZANEXO1"]);

//FUNCIÓN VALIDAR ENVIO
function ValidaEnvio()
{        if (obtener_valor('OPCTPOBAJA',1) =='T') 
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
		   M1MTZANEXO1:{required: function(element) { return obtener_valor('OPCCORREO',0)=="T" && obtener_valor('OPCERRFINI',1)=="T"}}		   
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


//EJECUTAR FUNCIÓN DE VALIDAR ENVIO	
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar" );
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar1" );
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
