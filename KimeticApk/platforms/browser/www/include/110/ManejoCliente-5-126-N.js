RegistrarFormula(":MONTPRE: + :MONTSERV:" , "MONTPREF"  );
/*
$("#MONTNOM").blur( function() {
              if (obtener_valor('MONTNOM')!="" )
                   if ( obtenerFloat(obtener_valor('MONTNOM'), Formatodec)<obtenerFloat(obtener_valor('MONTSERV'), Formatodec) )
                     {
                              alertmb("El monto de la n�mina no puede ser menor al monto de adicionales",0,1,"Aceptar");
                              asignar_valor("MONTNOM","");
                     }
} );

$("#MONTPRE").blur( function() {
              if (obtener_valor('MTOFINIQ')!="" )
                   if ( obtenerFloat(obtener_valor('MONTNOM'), Formatodec)<obtenerFloat(obtener_valor('MONTPRE'), Formatodec) )
                           {
                              alertmb("El monto de la dipersi�n no puede ser mayor al monto del finiquito",0,1,"Aceptar");
                              asignar_valor("MONTPRE","");
                           }

} );

*/
CamposObligatorios(["DESANEXNOM"]);

//FUNCI�N VALIDAR ENVIO
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
               SIANEXNOM: "Por favor indique que la n�mina corregida fue adjuntada"
            }
});

//EJECUTAR FUNCI�N DE VALIDAR ENVIO	
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar" );
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar1" );
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
