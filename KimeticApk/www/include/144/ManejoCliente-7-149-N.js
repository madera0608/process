CamposObligatorios(["DESFCHAGENDA","DESCOMAGEPAGO"]);
MatrizEstatica( 'MTZ1TAR');
DeshabilitarCheck('MTZ1TAR',3);

asignar_event_matriz( "onchange" ,"validarPrecedencia('MTZ1TAR')" , "MTZ1TAR", 3);
asignar_event_matriz( "onchange" ,"validarUncheck('MTZ1TAR')" , "MTZ1TAR", 3);

if (obtener_valor('OPCTPOBAJA',1) =='T')
{
   MostrarCampo( 'PROPFIN');
}
else
{
  OcultarCampo( 'PROPFIN' );
 }

if (obtener_valor('PAGOLEY') =='T')
  MostrarGrupo( 'DATOS DE CHEQUES SIN LEYENDA' );
else
  OcultarGrupo( 'DATOS DE CHEQUES SIN LEYENDA' );

$("#wfrm_formulario").validate
({
  rules: { 
    FCHAGENDA: {required: function(element) { return finTareas('MTZ1TAR',3);}},
    COMAGEPAGO: {required: function(element) { return finTareas('MTZ1TAR',3);}}  ,
         },
  messages: { 
	FCHAGENDA:"Por favor indique la fecha agendada para entregar el pago",
	COMAGEPAGO:"Por favor indique los comentarios de la recepción y agenda del pago"
            }
});

function ValidaEnvio()
{  
          if ($("#wfrm_formulario").valid()!=true){
   alertmb("Por favor complete los campos obligatorios",0,1,"Aceptar");
     return false;
          }else{
  		return true;
 }
}

asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar" );
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar1" );
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
