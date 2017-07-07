CamposObligatorios(["DESANEX3PRE"]);


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
		   SIANEX3PRE: {required: true}	   
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
