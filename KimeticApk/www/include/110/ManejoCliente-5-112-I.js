MatrizEstatica( 'AGENREEM' );

OcultarGrupo( 'FUNCIONAL' );

OcultarCampo( 'IDCLIENTE');
//OcultarCampo( 'MATNVMTZNOM',2);
//OcultarCampo( 'MATSEMTZNOM',2);
//OcultarCampo("MTZNOM",3,15); 

MatrizEstatica( 'MTZNOM' );
OcultarCampo("PERIOC"); 
CamposObligatorios(["M0MTZANEXO1","DESPERIOCBUSQ","DESOPCANEXOS"]);

MatrizEstatica( 'MTZANEXO' );

asignar_event( "onchange", "cambio_periocidad_busqueda()", 'PERIOCBUSQ');

function cambio_periocidad_busqueda(){ 
	var perioc= obtener_valor('PERIOCBUSQ');
	if (perioc!='Seleccione' ){
		document.getElementById('evento_CLN').style.visibility = "";
		document.getElementById('evento_NBCLIENTE').style.visibility = "";
	}
	else{
		document.getElementById('evento_CLN').style.visibility = "hidden";
		document.getElementById('evento_NBCLIENTE').style.visibility = "hidden";
	}
    	return true;
}

cambio_periocidad_busqueda()

function nominasSeleccionadas(){ 
	fil=obtener_valor( 'filMTZNOM' );
	for(e=0;e<=fil;e++){
		if ($("#M"+e+"MTZNOM15").attr('checked')==true)	
			return true;
	}
	return false;
}

asignar_valor('OPCANEXOS','T',1);
asignar_valor('OPCCORR','T',1);
HabilitaCampos("OPCANEXOS","SIANEXOS",[[1,"COMENTCORR"],[1,"MTZANEXO"]]);
HabilitaCampos("OPCCORR","SICORREO",[[1,"OPCANEXOS"]]);
if (obtener_valor('OPCCORR',1)=="T"){
	OcultarCampo('COMENTCORR');
	OcultarCampo('MTZANEXO');
}
$("input[name='OPCCORR']").click(function() { 
	HabilitaCampos("OPCCORR","SICORREO",[[1,"OPCANEXOS"]]); 
	HabilitaCampos("OPCANEXOS","SIANEXOS",[[1,"COMENTCORR"],[1,"MTZANEXO"]]); 
	if (obtener_valor('OPCCORR',1)=="T"){
		OcultarCampo('COMENTCORR');
		OcultarCampo('MTZANEXO');
	}
});

$("input[name='OPCANEXOS']").click(function() { 
	HabilitaCampos("OPCANEXOS","SIANEXOS",[[1,"COMENTCORR"],[1,"MTZANEXO"]]); 
});

//FUNCIÓN VALIDAR ENVIO
function ValidaEnvio()
{  
if ($("#CLN").val() != $("#CLNTEMP").val() ||  $("#RFC").val() != $("#RFCTEMP").val() || $("#NBCLIENTE").val() != $("#NBCLTTEMP").val() ) 
   {
    alertmb("Debe refrescar la información del cliente hacienco click en el enlace buscar, ya que fue modificado el CLN o el Nombre del cliente"  ,0,1,"Aceptar");
    return false;
  }


   if (obtener_valor( "M1AGENREEM6" )!="" && obtener_valor('REEMPSOL',0)=="T") 
 {
    alertmb("Ya existe una solicitud generada con la misma fecha de dispersión y periodicidad con el número "+ obtener_valor( "M1AGENREEM6" ) ,0,1,"Aceptar");
    return false;
  }


          if ($("#wfrm_formulario").valid()!=true){
			alertmb("Por favor complete los campos obligatorios",0,1,"Aceptar");
	  		return false;
          }else{
		if(obtener_valor( 'M1MTZNOM1' )==''){
   			alertmb("Debe indicar la(s) nómina(s) asociada(s) a la operación",0,1,"Aceptar");
     			return false;
		}
		else{
			if(!nominasSeleccionadas()){
   				alertmb("Debe indicar la(s) nómina(s) asociada(s) a la operación",0,1,"Aceptar");
     				return false;
			}
			else
				return true;
		}
	}
}


$("input[name='REEMPSOL']").click(function() { HabilitaCampos("REEMPSOL","SIREEMPLAZ",[[1,"AGENREEM"] ]); } );


$("#wfrm_formulario").validate
({
  rules: { 
		   M1MTZANEXO1:{required:  function(element) { return obtener_valor('OPCCORR',0)=="T" && obtener_valor('OPCANEXOS',0)=="T";}},
		   OPCANEXOS:{required: function(element) { return obtener_valor('OPCCORR',0)=="T" ;}},
                                   M1AGENREEM1:{required: function(element) { return obtener_valor('REEMPSOL',0)=="T";}}			   				   
         },
  messages: { 
	M1MTZANEXO1: "Por favor seleccione el adjunto a incluir en el correo para el cliente",
	OPCANEXOS: "Por favor indique si adjuntara algún documento al correo",
                M1AGENREEM1: "Por favor indique la agenda a reemplazar"
            }
});

//EJECUTAR FUNCIÓN DE VALIDAR ENVIO	
asignar_event( "onclick" , "ValidaEnvio()", "wl_bsolicitar" );
asignar_event( "onclick" , "ValidaEnvio()", "wl_bsolicitar1" );

if (obtener_valor( "M1AGENREEM6" )!="" && obtener_valor('REEMPSOL',0)=="T") 
 {
    alertmb("Ya existe una solicitud generada con la misma fecha de dispersión y periodicidad con el número "+ obtener_valor( "M1AGENREEM6" ) ,0,1,"Aceptar");
  }
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
