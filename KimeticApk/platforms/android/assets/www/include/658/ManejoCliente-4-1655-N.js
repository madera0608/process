OcultarCampo( "wl_bobjetar",2);
asignar_valor( "wl_baprobar","Enviar");
asignar_valor( "wl_baprobar1","Enviar");

OcultarGrupo( 'DATOS DE LA FACTURA' );
OcultarGrupo( 'DATOS DE LA NOTA DE CREDITO' );
OcultarGrupo( 'DATOS DEL FINANCIAMIENTO' );
OcultarGrupo( 'DATOS DEL PAGO');
OcultarGrupo( 'LISTA DE TAREAS');
OcultarGrupo( 'PAGOS');
OcultarGrupo( 'DATOS DEL CORREO ELECTRONICO');

OcultarGrupo( 'COMPROBANTES DE GASTOS' );
OcultarGrupo( 'DATOS DE FACTURA' );
OcultarGrupo( 'GESTION DE NOTA DE CREDITO' );
OcultarGrupo( 'PAGO DE COMISION' );



OcultarCampo('SUSTITUTA');
function MostrarSust(){

	if (obtener_valor('FACTCORREC',1) == 'T'){
		MostrarCampo('SUSTITUTA');
		asignar_valor('SUSTITUTA','F',0);
		asignar_valor('SUSTITUTA','F',1);
	}else if(obtener_valor('FACTCORREC',1) != 'T'){
		OcultarCampo('SUSTITUTA');
		asignar_valor('SUSTITUTA','F',0);
		asignar_valor('SUSTITUTA','F',1);

	}
return true;
}
asignar_event( 'onclick' , 'MostrarSust()', 'FACTCORREC' );

CamposObligatorios(["DESSUSTITUTA"]);

$("#wfrm_formulario").validate
({
  rules: { 
	SISUST:{required: function(element) { return obtener_valor( 'FACTCORREC',1)=='T' ;}}

         },
  messages: {
	SISUST: "Por favor indique si requiere factura sustituta"
            }
});

//FUNCIÓN VALIDAR ENVIO
function ValidaEnvio()
{  
          if ($("#wfrm_formulario").valid()!=true){
			alertmb("Por favor complete los campos obligatorios",0,1,"Aceptar");
	  		return false;
          }
return true;
}

//EJECUTAR FUNCIÓN DE VALIDAR ENVIO	
asignar_event( "onclick" , "ValidaEnvio() ", "wl_baprobar" );
asignar_event( "onclick" , "ValidaEnvio() ", "wl_baprobar1" );
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
