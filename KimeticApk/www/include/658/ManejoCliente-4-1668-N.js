OcultarCampo( "wl_bobjetar",2);
asignar_valor( "wl_baprobar","Enviar");
asignar_valor( "wl_baprobar1","Enviar");

OcultarGrupo( 'DATOS DEL FINANCIAMIENTO' );
OcultarGrupo( 'DATOS DEL PAGO');
OcultarGrupo( 'DATOS DE LA FACTURA' );
OcultarGrupo( 'DATOS DE LA NOTA DE CREDITO' );
OcultarGrupo( 'LISTA DE TAREAS');
OcultarGrupo( 'PAGOS');
OcultarGrupo( 'DATOS DEL CORREO ELECTRONICO');
OcultarGrupo( 'RECEPCION DE SOPORTE');
OcultarGrupo( 'COMPROBANTES DE GASTOS');
//OcultarGrupo( 'DATOS DE FACTURA');
OcultarGrupo( 'GESTION DE NOTA DE CREDITO');

$("#MOTIVO").change( function (){

		if (obtener_valor('MOTIVO') == 2){
			    MostrarCampo('INREPORTAR');
			    OcultarCampo('INSOPORTE');
			OcultarGrupo('DATOS DEL PROVEEDOR' );
			MostrarGrupo('DATOS DEL BENEFICIARIO');
			MostrarGrupo('VIATICOS');

		}
		if(obtener_valor('MOTIVO') == 1){
			OcultarCampo('INREPORTAR');
			MostrarCampo('INSOPORTE');
				MostrarGrupo('DATOS DEL PROVEEDOR');
				OcultarGrupo('DATOS DEL BENEFICIARIO');
				OcultarGrupo('VIATICOS');
	
		}
	
});
$("#MOTIVO").change();

OcultarCampo('MTODISPER');
$("#PROVISION").click( function (){

		if (obtener_valor('PROVISION') == 'T'){
			MostrarCampo('MTODISPER');
		}
		else if(obtener_valor('PROVISION') == 'F'){
			OcultarCampo('MTODISPER');
			asignar_valor('MTODISPER','');
		}
	
});
$("#PROVISION").change();


RegistrarFormula(":MTZCOMI[{+},3]:","MTOPAGO",1);

CamposObligatorios(["M0MTZCOMI1","M0MTZCOMI2","M0MTZCOMI3","M0MTZCOMI4",,"M0MTZCOMI6",,"M0MTZCOMI7","DESINCOMISION"]);

$("#wfrm_formulario").validate
({
  rules: { 
	SICOMISION:{required: function(element) { return true;}}

         },
  messages: {
	SICOMISION: "Por favor indique que adjunto el pago"
            }
});

ValidarFilas("MTZCOMI",[
["MTZCOMI1",{required: function(element) {  return true ;}}],
["MTZCOMI2",{required: function(element) {  return true ;}}],
["MTZCOMI3",{required: function(element) {  return true ;}}],
["MTZCOMI4",{required: function(element) {  return true ;}}],
["MTZCOMI6",{required: function(element) {  return true ;}}],
["MTZCOMI7",{required: function(element) {  return true ;}}]
]);

asignar_event( "onclick" ,"AgregarFilasComprobante()" , "MATNVMTZCOMI");

function AgregarFilasComprobante(){
	fil=obtener_valor( 'filMTZCOMI' );
	ValidarFilaDinamica("MTZCOMI",fil,[
["MTZCOMI1",{required: function(element) {  return true ;}}],
["MTZCOMI2",{required: function(element) {  return true ;}}],
["MTZCOMI3",{required: function(element) {  return true ;}}],
["MTZCOMI4",{required: function(element) {  return true ;}}],
["MTZCOMI6",{required: function(element) {  return true ;}}],
["MTZCOMI7",{required: function(element) {  return true ;}}]
]);

	return true;
}

//FUNCI�N VALIDAR ENVIO
function ValidaEnvio()
{  
          if ($("#wfrm_formulario").valid()!=true){
			alertmb("Por favor complete los campos obligatorios",0,1,"Aceptar");
	  		return false;
          }
return true;
}

//EJECUTAR FUNCI�N DE VALIDAR ENVIO	
asignar_event( "onclick" , "ValidaEnvio() ", "wl_baprobar" );
asignar_event( "onclick" , "ValidaEnvio() ", "wl_baprobar1" );


/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
