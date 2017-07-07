
MatrizEstatica( 'MTZDET' );
MatrizEstatica( 'MTZ2DET' );
MatrizEstatica( 'MTZ3DET' );
MatrizEstatica( 'MTZ4DET' );

HabilitaCampos("OPCCAMBFAC","NOCAMBFAC",[[1,"OPCPROYESP"]]);

HabilitaCampos("OPCFINAN","NOFINAN",[[2,"OPCAPFIN"],[2,"OPCFINFINI"],[2,"MOTIVNEG"],[2,"OBSFINAN"],[2,"MOTNEGFINI"],[2,"OBSFINANFI"]]); 
	
if (obtener_valor('OPCFINAN',0)=='T'){
	HabilitaCampos("OPCAPFIN","NOAPFIN",[[1,"MOTIVNEG"]]); 
	HabilitaCampos("OPCAPFIN","SIAPFIN",[[1,"OBSFINAN"]]); 
	HabilitaCampos("OPCFINFINI","NOFINFINI",[[1,"MOTNEGFINI"]]); 
	HabilitaCampos("OPCFINFINI","SIFINFINI",[[1,"OBSFINANFI"]]); 
}
//para ocultar todaslas columnas de cant de dias de valores agregados
fil=obtener_valor( 'filMTZDET' );

   for(e=1;e<=fil;e++){

		if ($("#M"+e+"MTZDET14").attr('checked')==true){
			$("#M"+e+"MTZDET15").show();
		}else{	
			$("#M"+e+"MTZDET15").hide();
		}

		if ($("#M"+e+"MTZDET16").attr('checked')==true){
			$("#M"+e+"MTZDET17").show();
		}else{	
			$("#M"+e+"MTZDET17").hide();
		}

		if ($("#M"+e+"MTZDET12").attr('checked')==true){
			$("#M"+e+"MTZDET23").show();
		}else{	
			$("#M"+e+"MTZDET23").hide();
		}
		if ($("#M"+e+"MTZDET18").attr('checked')==true){
			$("#M"+e+"MTZDET19").show();
			$("#M"+e+"MTZDET20").show();
		}else{	
			$("#M"+e+"MTZDET19").hide();
			$("#M"+e+"MTZDET20").hide();
		}	
	$('#M'+e+'MTZDET24').attr('title','Para las periocidades semanales/catorcenales el día de la semana es representado: \n Lunes: 1 \n Martes: 2 \n Miercoles: 3 \n Jueves: 4 \n Viernes: 5');
   }

asignar_event_matriz( "onchange", "HabilitaPorCheck('MTZDET',14, 15)", "MTZDET", 14);
asignar_event_matriz( "onchange", "HabilitaPorCheck('MTZDET',16, 17)", "MTZDET", 16);
asignar_event_matriz( "onchange", "HabilitaPorCheck('MTZDET',18, 19)", "MTZDET", 18);
asignar_event_matriz( "onchange", "HabilitaPorCheck('MTZDET',18, 20)", "MTZDET", 18);
asignar_event_matriz( "onchange", "HabilitaPorCheck('MTZDET',12, 23)", "MTZDET", 12);

//para ocultar campos segunradio button
if (obtener_valor('OPCALTEMPL',0)=='T')
	mostrarAlta();
else
	ocultarAlta();

$("input[name='OPCALTEMPL']").click(function() { 
	if (obtener_valor('OPCALTEMPL',0)=='T')
		mostrarAlta();
	else
		ocultarAlta();
});

function altaSeleccionada(){
	//MOSTRAR COLUMNA DE ALTA
	fil=obtener_valor( 'filMTZDET' );
	for(e=0;e<=fil;e++){
		if ($("#M"+e+"MTZDET25").attr('checked')==true)	
			return true;
	}
	return false;
}

function mostrarAlta(){
	//MOSTRAR COLUMNA DE ALTA
	fil=obtener_valor( 'filMTZDET' );
	for(e=0;e<=fil;e++){
		$("#M"+e+"MTZDET25").show();	
	}
}
function ocultarAlta(){
	//OCULTAR COLUMNA DE ALTA
	fil=obtener_valor( 'filMTZDET' );
	$("#M0MTZDET25").hide();
	for(e=1;e<=fil;e++){
		$("#M"+e+"MTZDET25").attr('checked',false);
		$("#M"+e+"MTZDET25").hide();
	}
}

function validarDias(){
	fil=obtener_valor( 'filMTZDET' );
	for(e=1;e<=fil;e++){
		periocidad = obtener_valorM('MTZDET', e ,4);
		dia = obtener_valorM('MTZDET', e ,24);
		if ((periocidad==1 || periocidad==2) && (dia>5))	
			return false;
	}
	return true;
}

HabilitaCampos("OPCREUINI","SIREUINI",[[1,"FCHEFREUIN"], [2,"MOTCANINI"], [3,"RESPONSABLES"], [3,"DETALLE DE NÓMINAS"],[3,"CARACTERÍSTICAS DE LA OPERACIÓN"],[3,"CLASIFICACIÓN"], [1,"AGENTE_2777"]]);
HabilitaCampos("OPCREUINI","NOREUINI",[[1,"MOTCANINI"]]);

$("input[name='OPCREUINI']").click(function() { 
	HabilitaCampos("OPCREUINI","SIREUINI",[[1,"FCHEFREUIN"], [2,"MOTCANINI"], [3,"RESPONSABLES"], [3,"DETALLE DE NÓMINAS"],[3,"CARACTERÍSTICAS DE LA OPERACIÓN"],[3,"CLASIFICACIÓN"], [1,"AGENTE_2777"]]);
	HabilitaCampos("OPCREUINI","NOREUINI",[[1,"MOTCANINI"]]);
});

CamposObligatorios(
["DESFCHEFREUIN","DESMOTCANINI","DESNBNOM","DESNBENBANC","DESNBFACT","DESNBSC","DESNBFINIQ",
"DESNBCOORDSC","M0MTZCNTCT1","M0MTZCNTCT5",
"DESFCH_1_DISP","DESPORCHONOR","DESOPCFACTANT","DESOPCSOLGIN",
"M0MTZDET4","M0MTZDET6","M0MTZDET7","DESEMPFACT","M0MTZDET9","M0MTZDET12","M0MTZDET13","M0MTZDET14","M0MTZDET15","M0MTZDET16","M0MTZDET17","M0MTZDET18","M0MTZDET19","M0MTZDET20","M0MTZDET24","M0MTZDET25",
"M0MTZDET5", "M0MTZ2DET2", "M0MTZ2DET3", "M0MTZ2DET4","M0MTZ2DET7","M0MTZ2DET8","M0MTZ2DET11","M0MTZ2DET12","M0MTZ3DET2", "M0MTZ3DET3", "M0MTZ3DET4", "M0MTZ3DET5", "M0MTZ4DET2", "M0MTZ4DET3",
"DESDESC_ACT", "DESPRIM_RIESG","DESHONOBROK", "DESBROKER", "DESGERENCOMER","DESOPCCARTPAT", "DESOPCENTCOMP", "DESOPCMANEXT", "DESOPCPERFORA", "DESOPCRPSITIO", "DESENVCONT", "DESATENJURID"]);

$("#wfrm_formulario").validate
({
 
  rules: {  
    	EMPFACT:{required: function(element) { return obtener_valor('OPCREUINI',0)=='T';}},
    	FCHEFREUIN: { required: function(element) { return obtener_valor('OPCREUINI',0)=='T';}},
    	MOTCANINI: { required: function(element) { return obtener_valor('OPCREUINI',1)=='T';}},
    	NBNOM: { required: function(element) { return obtener_valor('OPCREUINI',0)=='T';} },
    	NBENBANC: { required: function(element) { return obtener_valor('OPCREUINI',0)=='T';} },
    	NBFACT: { required: function(element) { return obtener_valor('OPCREUINI',0)=='T';} },
    	NBFINIQ: { required: function(element) { return obtener_valor('OPCREUINI',0)=='T';} },
    	NBSC: { required: function(element) { return obtener_valor('OPCREUINI',0)=='T';} },
    	NBCOORDSC: { required: function(element) { return obtener_valor('OPCREUINI',0)=='T';} },
	FCH_1_DISP: {required: function(element) { return obtener_valor('OPCREUINI',0)=='T';}},    
	PORCHONOR: {required: function(element) { return obtener_valor('OPCREUINI',0)=='T';}},  
	OPCFACTANT: {required: function(element) { return obtener_valor('OPCREUINI',0)=='T';}},
	OPCSOLGIN: {required: function(element)  { return obtener_valor('OPCREUINI',0)=='T';}},
	ATENJURID: {required: function(element)  { return obtener_valor('OPCREUINI',0)=='T';}},
	DESC_ACT: {required: function(element)  { return obtener_valor('OPCREUINI',0)=='T';}},
	PRIM_RIESG: {required: function(element)  { return obtener_valor('OPCREUINI',0)=='T';}},
	ENVCONT: {required: function(element)  { return obtener_valor('OPCREUINI',0)=='T';}},
	GERENCOMER: {required: function(element)  { return obtener_valor('OPCREUINI',0)=='T';}},
	BROKER: {required: function(element)  { return obtener_valor('OPCREUINI',0)=='T';}},
	HONOBROK: {required: function(element)  { return obtener_valor('OPCREUINI',0)=='T';}}
}
});



ValidarFilas("MTZDET",[
["MTZDET4",{required: function(element) { return obtener_valor('OPCREUINI',0)=='T';}}],
["MTZDET5",{required: function(element) { return obtener_valor('OPCREUINI',0)=='T' ;}}],
["MTZDET6",{required: function(element) { return obtener_valor('OPCREUINI',0)=='T';}}],
["MTZDET7",{required: function(element) { return obtener_valor('OPCREUINI',0)=='T';}}],
["MTZDET9",{required: function(element) { return obtener_valor('OPCREUINI',0)=='T';}}],
["MTZDET24",{required: function(element) { return obtener_valor('OPCREUINI',0)=='T';}}],
["MTZDET15",{required: function(element) { return $('::MTZDET14::').attr('checked') ==  true && obtener_valor('OPCREUINI',0)=='T';}}],
["MTZDET17",{required: function(element) { return $('::MTZDET16::').attr('checked') ==  true && obtener_valor('OPCREUINI',0)=='T';}}],
["MTZDET19",{required: function(element) { return $('::MTZDET18::').attr('checked') ==  true && obtener_valor('OPCREUINI',0)=='T';}}],
["MTZDET20",{required: function(element) { return $('::MTZDET18::').attr('checked') ==  true && obtener_valor('OPCREUINI',0)=='T';}}]
]);



ValidarFilas("MTZ2DET",[
["MTZ2DET2",{required: function(element) { return obtener_valor('OPCREUINI',0)=='T' ;}}],
["MTZ2DET3",{required: function(element) { return obtener_valor('OPCREUINI',0)=='T';}}],
["MTZ2DET4",{required: function(element) { return obtener_valor('OPCREUINI',0)=='T';}}],
["MTZ2DET7",{required: function(element) { return obtener_valor('OPCREUINI',0)=='T';}}],
["MTZ2DET8",{required: function(element) { return obtener_valor('OPCREUINI',0)=='T' ;}}],
["MTZ2DET11",{required: function(element) { return obtener_valor('OPCREUINI',0)=='T';}}],
["MTZ2DET12",{required: function(element) { return obtener_valor('OPCREUINI',0)=='T';}}]
]);

ValidarFilas("MTZ3DET",[
["MTZ3DET2",{required: function(element) { return obtener_valor('OPCREUINI',0)=='T' ;}}],
["MTZ3DET3",{required: function(element) { return obtener_valor('OPCREUINI',0)=='T' ;}}],
["MTZ3DET4",{required: function(element) { return obtener_valor('OPCREUINI',0)=='T';}}],
["MTZ3DET5",{required: function(element) { return obtener_valor('OPCREUINI',0)=='T';}}]
]);

ValidarFilas("MTZ4DET",[
["MTZ4DET2",{required: function(element) { return obtener_valor('OPCREUINI',0)=='T';}}],
["MTZ4DET3",{required: function(element) {return obtener_valor('OPCREUINI',0)=='T';}}]
]);

ValidarFilas("MTZCNTCT",[
["MTZCNTCT1",{required: function(element) { return obtener_valor('OPCREUINI',0)=='T';}}],
["MTZCNTCT5",{email: true, required: function(element) {return obtener_valor('OPCREUINI',0)=='T';}}]
]);

asignar_event( "onclick" ,"AgregarFilasContactos()" , "MATNVMTZCNTCT");

function AgregarFilasContactos(){
	fil=obtener_valor( 'filMTZCNTCT' );
	ValidarFilaDinamica("MTZCNTCT",fil,[
	["MTZCNTCT1",{required: function(element) { return obtener_valor('OPCREUINI',0)=='T';}}],
	["MTZCNTCT5",{email: true, required: function(element) {return obtener_valor('OPCREUINI',0)=='T';}}]
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
		if (!validarDias()){
			alertmb("Debe indicar un día entre el 1-5 para las nóminas con periocidad Semanal / Catorcenal ",0,1,"Aceptar");
	  		return false;
		}
		else {
			if (obtener_valor('OPCALTEMPL',0)=='T' && !altaSeleccionada()){
				alertmb("Por favor indique las nóminas a dar alta de empleado.",0,1,"Aceptar");
				return false;
			}
			else{
				if (obtener_valor('INFICHADEF')=='' && obtener_valor('OPCREUINI',0)=='T'){
					alertmb("Debe generar la ficha técnica antes de enviar",0,1,"Aceptar");
					$("#AGENTE_2777").focus();
					return false;
				}
				else
					return true;
			}
		}
	}
}

$("#EMPFACT").attr("disabled",true);

if (obtener_valor('OPCCAMBFAC',0)=='T')
	$("#EMPFACT").attr("disabled",false);

$("#EMPFACT").change(function() { 
	empselec=$("#EMPFACT").val();
	fil=obtener_valor( 'filMTZEMP' );
	for(e=1;e<=fil;e++){
		aux=$("#M"+e+"MTZEMP3").val();	
		if (empselec==aux){
			alertmb("No puede seleccionar una empresa facturadora existente",0,1,"Aceptar");
			$("#EMPFACT").val('');		
		}
	}
});

asignar_event_matriz( "onchange" ,"validarResponsableIMSS2()" , "MTZDET", 12);
asignar_event_matriz( "onchange" ,"validarResponsableIMSS2()" , "MTZDET", 9);

//EJECUTAR FUNCIÓN DE VALIDAR ENVIO 
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar" );
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar1" );

function GenerarFichaCompleta(){
          if ($("#wfrm_formulario").valid()!=true){
   	alertmb("Por favor complete los campos obligatorios antes de generar la ficha técnica",0,1,"Aceptar");
	window.event.returnValue = false;
	asignar_valor('INFICHADEF','');
	event.preventDefault(); 
     	return false;
          }else{
  	return true;
          }
}

asignar_event( "onclick" ,"GenerarFichaCompleta()" , "AGENTE_2777");
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
