
NroFilaM('MTZFACT');

asignar_event( "onclick" , "NroFilaM('MTZFACT')" , "MATNVMTZFACT");


DeshabilitarCheck('MTZTAREA',3);
MatrizEstatica( 'MTZTAREA');
asignar_event_matriz( "onchange" ,"validarPrecedencia('MTZTAREA')" , "MTZTAREA", 3);
asignar_event_matriz( "onchange" ,"validarUncheck('MTZTAREA')" , "MTZTAREA", 3);

CamposObligatorios(["DESMONTFACT","DESANEXFACT","DESNROFACT","DESFCHFACT", "M0MTZFACT2", "M0MTZFACT3","M0MTZFACT4", "M0MTZFACT5"]);

$("#wfrm_formulario").validate
({
  rules: { 
           MONTFACT: {required: function(element) { return finTareas('MTZTAREA',3);}   },
           SIANEXFACT: {required: function(element) { return finTareas('MTZTAREA',3);}   },
           FCHFACT: {required: function(element) { return finTareas('MTZTAREA',3);}   },
           SIANEXPREF: {required: function(element) { return finTareas('MTZTAREA',3) && $("input[name='OPCFACT']:checked").val() ==  "OPCFACTSI****AlterT";}   }
         },
  messages: { 
               MONTFACT: "Por favor indique el monto de la factura",
               SIANEXFACT: "Por favor indique que la factura fue adjuntada",
               FCHFACT: "Por favor indique la fecha de envío de la factura",
               SIANEXPREF: "Por favor indique que la prefactura fue anexada"
            }
});

ValidarFilas("MTZFACT",[
["MTZFACT2",{required: function(element) { return finTareas('MTZTAREA',3);}}],
["MTZFACT3",{required: function(element) {  return finTareas('MTZTAREA',3);}}],
["MTZFACT4",{required: function(element) {  return finTareas('MTZTAREA',3);}}],
["MTZFACT5",{required: function(element) {  return finTareas('MTZTAREA',3);}}]
]);

asignar_event( "onclick" ,"AgregarFilasFactura()" , "MATNVMTZFACT");

function AgregarFilasFactura(){
	fil=obtener_valor( 'filMTZFACT' );
	ValidarFilaDinamica("MTZFACT",fil,[
["MTZFACT2",{required: function(element) { return finTareas('MTZTAREA',3);}}],
["MTZFACT3",{required: function(element) {  return finTareas('MTZTAREA',3);}}],
["MTZFACT4",{required: function(element) {  return finTareas('MTZTAREA',3);}}],
["MTZFACT5",{required: function(element) {  return finTareas('MTZTAREA',3);}}]
]);

	return true;
}


RegistrarFormula(":MTZFACT[{+},3]:","MONTFACT",1);

$("#M1MTZFACT3").change();


//FUNCIÓN VALIDAR ENVIO
function ValidaEnvio()
{  
          if ($("#wfrm_formulario").valid()!=true){
			alertmb("Por favor complete los campos obligatorios",0,1,"Aceptar");
	  		return false;
          }else{
	if(finTareas('MTZTAREA',3)){
		asignar_valor('REGBD',1);
	}
		return true;
	}
}

//EJECUTAR FUNCIÓN DE VALIDAR ENVIO	
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar" );
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar1" );
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
