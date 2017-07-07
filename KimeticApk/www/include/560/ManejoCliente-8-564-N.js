NroFilaM('MTZFACT');
asignar_event( "onclick" , "NroFilaM('MTZFACT')" , "MATNVMTZFACT");


NroFilaM('MTZNOT');
asignar_event( "onclick" , "NroFilaM('MTZNOT')" , "MATNVMTZNOT");


function MontoProv(){

	if (obtener_valor('PROVOPER')=='T'){
		MostrarCampo('MONTUTOPER');
	}else{
		OcultarCampo('MONTUTOPER');
		asignar_valor('MONTUTOPER','');
	}

	if (obtener_valor('PROVFINIQ')=='T'){
		MostrarCampo('MONTUTFINI');
	}else{
		OcultarCampo('MONTUTFINI');
		asignar_valor('MONTUTFINI','');
	}

return true;

}

//MontoProv();

function HabilitarFactura(){

	if (obtener_valor('OPCEXFACT',1)=='T'){
		MostrarGrupo('DATOS DE LA FACTURA');
	}else{
		OcultarGrupo('DATOS DE LA FACTURA');
		MostrarCampo('CODFACTU');
	}

return true;

}

//HabilitarFactura();


RegistrarFormula(":MTZNOT[{+},3]:","MONTNOT",1);

$("#M1MTZNOT3").change();

RegistrarFormula(":MTZFACT[{+},3]:","MONTFACT",1);

$("#M1MTZFACT3").change();

$("#CODFACTU").blur(function() {  var a = $("#CODFACTU").val();

   if (a.substring(12,14)!="17"   &&  a.substring(12,14)!="18"  &&  a.substring(12,14)!="22") {
            alertmb("Por favor corregir el código de facturación, ya que no contiene en su código el valor 17 que representa los Viaticos o el 18 que representa pago a terceros",0,1,"Aceptar");
             return false;
    }
return true;});

CamposObligatorios(["DESCODFACTU","DESFCHFACT", "DESANEXFACT","M0MTZFACT5", "M0MTZFACT2", "M0MTZFACT3", "M0MTZFACT4"]);

function ValidaEnvio()
{  

  var a = $("#CODFACTU").val();

   if (a.substring(12,14)!="17"   &&  a.substring(12,14)!="18") {
            alertmb("Por favor corregir el código de facturación, ya que no contiene en su código el valor 17 que representa los Viaticos o el 18 que representa pago a terceros",0,1,"Aceptar");
             return false;
    }

    if ($("#wfrm_formulario").valid()!=true){
            alertmb("Por favor complete los campos obligatorios",0,1,"Aceptar");
             return false;
    }else{
	return true;
   }
}

$("#wfrm_formulario").validate({
  rules: { 
           FCHFACT:    {required: function(element) { return obtener_valor('OPCEXFACT',1)=='T';}},
           SIANEXFACT: {required: function(element) { return obtener_valor('OPCEXFACT',1)=='T';}},
           CODFACTU: {required: function(element) { return obtener_valor('OPCEXFACT',1)=='T';}}   
         },
  messages: {
	FCHFACT: "Por favor indique la fecha de la factura",
	SIANEXFACT:"Por favor indique si anexo la factura",
	CODFACTU:"Por favor indique el código de facturación de la factura a pagar"
            }
});


ValidarFilas("MTZFACT",[
["MTZFACT2",{required: function(element) { return obtener_valor('OPCEXFACT',1)=='T';}}],
["MTZFACT3",{required: function(element) {  return obtener_valor('OPCEXFACT',1)=='T';}}],
["MTZFACT4",{required: function(element) {  return obtener_valor('OPCEXFACT',1)=='T';}}],
["MTZFACT5",{required: function(element) {  return obtener_valor('OPCEXFACT',1)=='T';}}]
]);

asignar_event( "onclick" ,"AgregarFilasFactura()" , "MATNVMTZFACT");

function AgregarFilasFactura(){
	fil=obtener_valor( 'filMTZFACT' );
	ValidarFilaDinamica("MTZFACT",fil,[
["MTZFACT2",{required: function(element) { return obtener_valor('OPCEXFACT',1)=='T';}}],
["MTZFACT3",{required: function(element) {  return obtener_valor('OPCEXFACT',1)=='T';}}],
["MTZFACT4",{required: function(element) {  return obtener_valor('OPCEXFACT',1)=='T';}}],
["MTZFACT5",{required: function(element) {  return obtener_valor('OPCEXFACT',1)=='T';}}]
]);

	return true;
}

//EJECUTAR FUNCIÓN DE VALIDAR ENVIO 
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar" );
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar1" );
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
