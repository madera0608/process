RegistrarFormula(":MONTPRE: + :MONTSERV:" , "MONTPREF"  );
/*
$("#MONTNOM").blur( function() {
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

} );

*/
CamposObligatorios(["DESANEXNOM"]);

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
		SIANEXNOM: {required: true}	   
         },
  messages: { 
               SIANEXNOM: "Por favor indique que la nómina corregida fue adjuntada"
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
