$("#MONTAFIN").change(function() { asignar_valor("MONTOCXC",$("#MONTAFIN").val());  });

asignar_valor('wl_bobjetar', 'Enviar a corregir');
asignar_valor('wl_bobjetar1', 'Enviar a corregir');

if (obtener_valor('M1MTZPAGP1')=="")
	OcultarCampo( 'MTZPAGP' );

CamposObligatorios(["DESFCHESPPAG",'DESCOMDECFIN','DESOPAPRFIN']);

HabilitaCampos("OPAPRFIN","OPSIAPRFIN",[[3,"DATOS DEL PAGO"], [1,"FCHESPPAG"]]);

$("input[name='OPAPRFIN']").click(function() {
HabilitaCampos("OPAPRFIN","OPSIAPRFIN",[[3,"DATOS DEL PAGO"], [1,"FCHESPPAG"]]);  
} );

OcultarCampo( "OPCSOLDIR");

if (obtener_valor( "OPCSOLDIR", 0 )=="T" || obtener_valor( "OPCSOLDIR", 1 )=="T" )
  MostrarCampo( "OPCSOLDIR");

if (obtener_valor( "OPCAUTDIR", 0 )=="T" || obtener_valor( "OPCAUTDIR", 1 )=="T" )
  {
   MostrarCampo( "OPCAUTDIR");
   MostrarCampo( "COMENTDIR");
   MostrarCampo( "FCHAUTOR"); 
  }
else
   {
     OcultarCampo( "OPCAUTDIR");
     OcultarCampo( "COMENTDIR");
     OcultarCampo( "FCHAUTOR");
    }


function habCorrecion()
{

	
if(obtener_valor('DESCVALFON')=='' || obtener_valor('DESVALDEUD')=='' ){

  if (obtener_valor( "OPCORSOLF", 1 )=="T" )
  {
     OcultarCampo( "wl_baprobar",2  );
     OcultarCampo( "wl_baprobar1",2  );
     alert('No puede enviar hasta que se tenga el análisis de financiamiento completo');
 }else{
	MostrarCampo( "wl_baprobar",2  );
	MostrarCampo( "wl_baprobar1",2  );
 }
}else{
  if (obtener_valor( "OPCORSOLF", 1 )=="T" )
  {
MostrarCampo( "wl_baprobar",2  );
MostrarCampo( "wl_baprobar1",2  );

  }
}
  return true;
}


function ValidaEnvio()
{  
    if ($("#wfrm_formulario").valid()!=true){
            alertmb("Por favor complete los campos obligatorios",0,1,"Aceptar");
             return false;
          }else{
  return true;
 }
}

$("#wfrm_formulario").validate({
  rules: { 
           OPAPRFIN:    {required: function(element) { return true;}},
           COMDECFIN: {required: function(element) { return true;}},
           FCHESPPAG: {required: function(element) { return obtener_valor('OPAPRFIN',0)=='T';}}      
         }
});

//EJECUTAR FUNCIÓN DE VALIDAR ENVIO 
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar" );
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar1" );

asignar_event( "onclick" , "habCorrecion()", "OPCORSOLF" );
//asignar_event( "onclick" , "habCorrecion()", "OPCORSOLF" );

habCorrecion();
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
