MatrizEstatica( 'AGENREEM' );
OcultarGrupo( 'FUNCIONAL' );

MatrizEstatica( 'MTZNOM' );
OcultarCampo("IDCLIENTE"); 
OcultarCampo("PERIOC"); 

CamposObligatorios(["M0MTZANEXO1","DESANEXFORM","DESPERIOCBUSQ"]);

asignar_valor('OPCCORR','T',1);
MatrizEstatica( 'MTZANEXO' );

if ($("#M1MTZANEXO1 option").length>1)
	MostrarGrupo( 'DATOS DEL CORREO ELECTRÓNICO' );
else
	OcultarGrupo( 'DATOS DEL CORREO ELECTRÓNICO' );

HabilitaCampos("OPCCORR","SICORREO",[[1,"COMENTCORR"],[1,"MTZANEXO"]]);

$("input[name='OPCCORR']").click(function() { 
	HabilitaCampos("OPCCORR","SICORREO",[[1,"COMENTCORR"],[1,"MTZANEXO"]]);
});

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

cambio_periocidad_busqueda();

function nominasSeleccionadas(){ 
	fil=obtener_valor( 'filMTZNOM' );
	for(e=0;e<=fil;e++){
		if ($("#M"+e+"MTZNOM15").attr('checked')==true)	
			return true;
	}
	return false;
}

//FUNCIÓN VALIDAR ENVIO
function ValidaEnvio()
{  
if ( $("#CLN").val() != $("#CLNTEMP").val() ||  $("#RFC").val() != $("#RFCTEMP").val() || $("#NBCLIENTE").val() != $("#NBCLTTEMP").val() ) 
   {
    alertmb("Debe refrescar la información del cliente hacienco click en el enlace buscar, ya que fue modificado el CLN o el Nombre del cliente" ,0,1,"Aceptar");
    return false;
  }

if (obtener_valor( "M1AGENREEM6" )!="" && obtener_valor('REEMPSOL',0)=="T")
 {
    alertmb("Ya existe una solicitud generada con la misma fecha de dispersión y periodicidad con el número "+ obtener_valor( "M1AGENREEM6" ) ,0,1,"Aceptar");
    return false;
  }

	if ($("#wfrm_formulario").valid()!=true){
			alertmb("Por favor complete los campos obligatorios. Recuerde anexar el formato de empleados",0,1,"Aceptar");
	  		return false;
	}else{
		if(obtener_valor( 'M1MTZNOM1' )==''){
   			alertmb("Debe indicar la(s) nómina(s) asociada(s) a la operación",0,1,"Aceptar");
     			return false;
		}
		else{
			if (!nominasSeleccionadas()){
   				alertmb("Debe indicar la(s) nómina(s) asociada(s) a la operación",0,1,"Aceptar");
     				return false;
			}else
				return true;
		}
	}
}

$("input[name='REEMPSOL']").click(function() { HabilitaCampos("REEMPSOL","SIREEMPLAZ",[[1,"AGENREEM"],[1,"FCHDISPREE"] ]); } );


$("#wfrm_formulario").validate
({
  rules: { 
		   SIANEXFORM: {required: true},
		   M1MTZANEXO1:{required: function(element) { return obtener_valor('OPCCORR',0)=="T";}},			   
                                   M1AGENREEM1:{required: function(element) { return obtener_valor('REEMPSOL',0)=="T";}}			   
         },
  messages: { 
               SIANEXFORM: "Por favor indique que el formato de empleados fue adjuntado",
	M1MTZANEXO1: "Por favor seleccione el adjunto a incluir en el correo para el cliente",
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
