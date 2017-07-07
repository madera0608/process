NroFilaM('MTZFACT');

asignar_event( "onclick" , "NroFilaM('MTZFACT')" , "MATNVMTZFACT");

MatrizEstatica( 'MTZ3TAR');
DeshabilitarCheck('MTZ3TAR',3);

asignar_event_matriz( "onchange" ,"validarPrecedencia('MTZ3TAR')" , "MTZ3TAR", 3);
asignar_event_matriz( "onchange" ,"validarUncheck('MTZ3TAR')" , "MTZ3TAR", 3);

CamposObligatorios(["DESANEXFACT","DESFCHFACT","M0MTZFACT2", "M0MTZFACT3", "M0MTZFACT4", "M0MTZFACT5"]);

RegistrarFormula(":MTZFACT[{+},3]:","MONTFACT",1);

$("#M1MTZFACT3").change();

$("#wfrm_formulario").validate
({
  rules: { 
           SIANEXFACT: {required: function(element) { return finTareas('MTZ3TAR',3);}   },
           FCHFACT: {required: function(element) { return finTareas('MTZ3TAR',3);}   }
         },
  messages: { 
               SIANEXFACT: "Por favor indique que la factura fue adjuntada",
               FCHFACT: "Por favor indique que la fecha de envío de la factura"
            }
});

ValidarFilas("MTZFACT",[
["MTZFACT2",{required: function(element) { return finTareas('MTZ3TAR',3);}}],
["MTZFACT3",{required: function(element) {  return finTareas('MTZ3TAR',3);}}],
["MTZFACT4",{required: function(element) {  return finTareas('MTZ3TAR',3);}}],
["MTZFACT5",{required: function(element) {  return finTareas('MTZ3TAR',3);}}]
]);


asignar_event( "onclick" ,"AgregarFilasFactura()" , "MATNVMTZFACT");

function AgregarFilasFactura(){
	fil=obtener_valor( 'filMTZFACT' );
	ValidarFilaDinamica("MTZFACT",fil,[
["MTZFACT2",{required: function(element) { return finTareas('MTZ3TAR',3);}}],
["MTZFACT3",{required: function(element) {  return finTareas('MTZ3TAR',3);}}],
["MTZFACT4",{required: function(element) {  return finTareas('MTZ3TAR',3);}}],
["MTZFACT5",{required: function(element) {  return finTareas('MTZ3TAR',3);}}]
]);

	return true;
}

//FUNCIÓN VALIDAR ENVIO
function ValidaEnvio()
{  
          if ($("#wfrm_formulario").valid()!=true){
			alertmb("Por favor complete los campos obligatorios",0,1,"Aceptar");
	  		return false;
          }else{
	if(finTareas('MTZ3TAR',3)){
		asignar_valor('REGBD',1);
	}

              if (obtener_valor('MONTFACT')!="" )
                   if ( obtenerFloat(obtener_valor('MONTFACT'), Formatodec)<obtenerFloat(obtener_valor('MONTPREF'), Formatodec) )
                        {
                              alertmb("El monto de la factura no puede ser menor al monto de la pre-factura",0,1,"Aceptar");
                              return false;
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
