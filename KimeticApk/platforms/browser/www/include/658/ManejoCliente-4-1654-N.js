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

MatrizEstatica( 'MTZSOPOR' );

OcultarCampo('COMENTFACT');

if(obtener_valor('INCOMENT')==1){
	MostrarCampo('COMENTFACT');
}else{
	OcultarCampo('COMENTFACT');
}

CamposObligatorios(["M0MTZSOPOR1","M0MTZSOPOR2","M0MTZSOPOR3","DESINFACTURA"]);

$("#wfrm_formulario").validate
({
  rules: { 
	SIFACTURA:{required: function(element) { return true;}}

         },
  messages: {
	SIFACTURA: "Por favor indique que adjunto el soporte"
            }
});

ValidarFilas("MTZSOPOR",[
["MTZSOPOR1",{required: function(element) {  return true ;}}],
["MTZSOPOR2",{required: function(element) {  return true ;}}],
["MTZSOPOR3",{required: function(element) {  return true ;}}]
]);

asignar_event( "onclick" ,"AgregarFilasComprobante()" , "MATNVMTZSOPOR");


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
