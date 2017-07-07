if (obtenerFloat(obtener_valor('MTOPROVDIS'), Formatodec)<=0)
    {
     asignar_valor('OPCPROV','F');
     OcultarCampo('OPCPROV',6);
}

if (obtener_valor('OPCTPOBAJA',1) =='T')
{
   MostrarCampo( 'PROPFIN');
}
else
{
  OcultarCampo( 'PROPFIN' );
 }


if (obtener_valor('PAGOLEY')=='T'){
	MostrarGrupo( 'DATOS DE CHEQUES SIN LEYENDA' );  
}
else{
	OcultarGrupo( 'DATOS DE CHEQUES SIN LEYENDA' );  
}

CamposObligatorios(["DESCOMERROR"]);

HabilitaCampos("OPCERRHJA","SIERRHJA",[[1,"COMERROR"] ]);

$("input[name='OPCERRHJA']").click(function() { HabilitaCampos("OPCERRHJA","SIERRHJA",[[1,"COMERROR"] ]); } );


if (obtener_valor('COMERRHJA') !=''){


MostrarCampo('COMERRHJA');
MostrarCampo('FCHERRHJA');

}else{

OcultarCampo('COMERRHJA');
OcultarCampo('FCHERRHJA');
}


if (obtener_valor('PAGOLEY')=='T'){
	MostrarCampo( 'OPCAUTCHEQ' );  
}
else{
	OcultarCampo( 'OPCAUTCHEQ' );  
}



//FUNCIÓN VALIDAR ENVIO
function ValidaEnvio()
{  
          if ($("#wfrm_formulario").valid()!=true){
			alertmb("Por favor complete los campos obligatorios",0,1,"Aceptar");
	  		return false;
          }else
	return true;
}

$("#wfrm_formulario").validate
({
  rules: { 
           COMERROR:{required: function(element) { return obtener_valor('OPCERRHJA',0)=="T";}}	   
         },
  messages: { 
              COMERROR: "Por favor indique las correcciones  a aplicar"
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
