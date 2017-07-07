CamposObligatorios(["DESEMPFACT","DESOPCPROYESP","M0MTZDET25","DESCLN","M0MTZDET12","M0MTZDET13","M0MTZDET14","M0MTZDET15","M0MTZDET16","M0MTZDET17","M0MTZDET18","M0MTZDET19","M0MTZDET20"]);
$('#MATSEMTZDET').hide();
NroFilaM('MTZDET');
NroFilaM('MTZ2DET');
NroFilaM('MTZ3DET');
NroFilaM('MTZ4DET');
MatrizEstatica('MTZ2DET');
MatrizEstatica('MTZ3DET');
MatrizEstatica('MTZ4DET');
asignar_event( "onclick" , "NroFilaM('MTZDET')" , "MATNVMTZDET");// El boton que agrega una fila se llama MATNV + NOmbre

function validarCantNominas(){

fil=obtener_valor( 'filMTZDET' );

	if(fil > 20){
		alertmb("No puede agregar mas de 20 nóminas",0,1,"Aceptar");	
		$('#CHKBOXMATMTZDET21').attr('checked',true);
		BorrarFila('MTZDET','NTTAFANAAAAVVVNVNVTN')
		return false;
	}else{	
		return true;
	}
}

function AgregarFilasNominas(){
	ocultarChecks();
	fil=obtener_valor( 'filMTZDET' );
	if(fil <= 20){
		IngresarFila('MTZ2DET','NTTTFTTATTAATT');
		IngresarFila('MTZ3DET','TTTTTT');
		IngresarFila('MTZ4DET','TTTTTT');	
		var existentes=0;  	
		if (obtener_valor('NRONOMINAS')!="")
 			existentes= obtener_valor('NRONOMINAS');
		asignar_valorM('MTZ2DET', parseInt(existentes)+parseInt(fil), fil, 1);
		asignar_valorM('MTZ3DET', parseInt(existentes)+parseInt(fil), fil, 1);
		asignar_valorM('MTZ4DET', parseInt(existentes)+parseInt(fil), fil, 1);
	
		ValidarFilaDinamica("MTZDET",fil,[
		["MTZDET15",{required: function(element) { return $('::MTZDET14::').attr('checked') ==  true;}}],
		["MTZDET17",{required: function(element) { return $('::MTZDET16::').attr('checked') ==  true;}}],
		["MTZDET19",{required: function(element) { return $('::MTZDET18::').attr('checked') ==  true;}}],
		["MTZDET20",{required: function(element) { return $('::MTZDET18::').attr('checked') ==  true;}}]
		]);
		$('#M'+fil+'MTZDET24').attr('title','Para las periocidades semanales/catorcenales el día de la semana es representado: \n Lunes: 1 \n Martes: 2 \n Miercoles: 3 \n Jueves: 4 \n Viernes: 5');
	}
	return true;
}

function BorrarFilasNominas(){
	ocultarChecks();
	var fila=obtener_valor( 'filMTZDET' );
	var fila2=obtener_valor( 'filMTZ2DET' );
	var fil=parseInt(fila)+1;
	var aux=false;
	if (fila==1 && fila2==1){
		fil=parseInt(fila);
		aux=true;
	}
	if (fila2==fil){
		$('#CHKBOXMATMTZ2DET'+fil).attr('checked',true);
		$('#CHKBOXMATMTZ3DET'+fil).attr('checked',true);
		$('#CHKBOXMATMTZ4DET'+fil).attr('checked',true);
		BorrarFila('MTZ2DET','NTTTFTTATTAATT');
		BorrarFila('MTZ3DET','TTTTTT');
		BorrarFila('MTZ4DET','TTTTTT');
	}
	if (aux){
		NroFilaM('MTZDET');
		NroFilaM('MTZ2DET');	
		NroFilaM('MTZ3DET');
		NroFilaM('MTZ4DET');
	}
	return true;
}

ocultarChecks();
asignar_event( "onclick" ,"validarCantNominas()" , "MATNVMTZDET");

asignar_event( "onclick" ,"AgregarFilasNominas()" , "MATNVMTZDET");
asignar_event( "onclick" ,"BorrarFilasNominas()" , "MATBOMTZDET");


//para ocultar todaslas columnas de cant de dias de valores agregados
fil=obtener_valor( 'filMTZDET' );

for(e=1;e<=fil;e++){
	if ($("#M"+e+"MTZDET14").attr('checked')!=true){
		$("#M"+e+"MTZDET15").hide();
	}
	if ($("#M"+e+"MTZDET16").attr('checked')!=true){
		$("#M"+e+"MTZDET17").hide();
	}
	if ($("#M"+e+"MTZDET18").attr('checked')!=true){
		$("#M"+e+"MTZDET19").hide();
		$("#M"+e+"MTZDET20").hide();
	}
	$('#M'+e+'MTZDET24').attr('title','Para las periocidades semanales/catorcenales el día de la semana es representado: \n Lunes: 1 \n Martes: 2 \n Miercoles: 3 \n Jueves: 4 \n Viernes: 5');
}

asignar_event_matriz( "onchange", "HabilitaPorCheck('MTZDET',14, 15)", "MTZDET", 14);
asignar_event_matriz( "onchange", "HabilitaPorCheck('MTZDET',16, 17)", "MTZDET", 16);
asignar_event_matriz( "onchange", "HabilitaPorCheck('MTZDET',18, 19)", "MTZDET", 18);
asignar_event_matriz( "onchange", "HabilitaPorCheck('MTZDET',18, 20)", "MTZDET", 18);

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


function ocultarChecks(){
	fil=obtener_valor( 'filMTZDET' );
	for(e=1;e<fil;e++){
		$('#CHKBOXMATMTZDET'+e).attr('checked',false);
		$("#CHKBOXMATMTZDET"+e).hide();	
	}
	if (fil==1){
		$('#CHKBOXMATMTZDET'+e).attr('checked',true);
		$("#CHKBOXMATMTZDET"+e).hide();	
	}
	else
		$("#CHKBOXMATMTZDET"+e).show();	
}

function habilitarContactos(){
	//HABILITAR CONTACTOS
	fil=obtener_valor( 'filMTZCNTCT' );
	for(e=1;e<=fil;e++){
		$("#M"+e+"MTZCNTCT1").attr("disabled",false);
		$("#M"+e+"MTZCNTCT2").attr("disabled",false);	
		$("#M"+e+"MTZCNTCT3").attr("disabled",false);	
		$("#M"+e+"MTZCNTCT4").attr("disabled",false);	
		$("#M"+e+"MTZCNTCT5").attr("disabled",false);	
		$("#M"+e+"MTZCNTCT6").attr("disabled",false);	
		$("#M"+e+"MTZCNTCT7").attr("disabled",false);		
	}
	MostrarCampo('MTZCNTCT',1);
  	MostrarCampo('MTZCNTCT',3,0);
}


function deshabilitarContactos(){
	//DESHABILITAR CONTACTOS
	fil=obtener_valor( 'filMTZCNTCT' );
	for(e=1;e<=fil;e++){
		$("#M"+e+"MTZCNTCT1").attr("disabled",true);	
		$("#M"+e+"MTZCNTCT2").attr("disabled",true);
		$("#M"+e+"MTZCNTCT3").attr("disabled",true);
		$("#M"+e+"MTZCNTCT4").attr("disabled",true);
		$("#M"+e+"MTZCNTCT5").attr("disabled",true);
		$("#M"+e+"MTZCNTCT6").attr("disabled",true);
		$("#M"+e+"MTZCNTCT7").attr("disabled",true);
	}
	OcultarCampo('MTZCNTCT',1);
	OcultarCampo('MTZCNTCT',3,0);
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

function altaSeleccionada(){
	//MOSTRAR COLUMNA DE ALTA
	fil=obtener_valor( 'filMTZDET' );
	for(e=0;e<=fil;e++){
		if ($("#M"+e+"MTZDET25").attr('checked')==true)	
			return true;
	}
	return false;
}
HabilitaCampos("OPCCAMBFAC","SICAMBFAC",[[1,"NUEVOCLN"]]); 
HabilitaCampos("OPCCAMBFAC","NOCAMBFAC",[[1,"OPCPROYESP"],[1,"MSGPROYESP"]]);
if (obtener_valor('OPCCAMBFAC',0)=='T'){
	asignar_valor('OPCPROYESP','F',0);
	asignar_valor('OPCPROYESP','F',1);
	OcultarCampo( 'CLNOPER' );
	OcultarCampo( 'EMPFACT' );
	OcultarCampo( 'NUEVASUB' );
} else{
	HabilitaCampos("OPCPROYESP","SIPROYESP",[[1,"NUEVASUB"],[1,"EMPFACT"]]);
	HabilitaCampos("OPCPROYESP","NOPROYESP",[[1,"CLNOPER"]]);
}

if (obtener_valor('OPCCAMBFAC',0)=='T' || obtener_valor('OPCPROYESP',0)=='T' || obtener_valor('OPCPROYESP',1)=='T')
	MostrarGrupo( 'DATOS DEL CONTRATO' );
else
	OcultarGrupo('DATOS DEL CONTRATO');

if (obtener_valor('OPCPROYESP',1)=='T'){
	deshabilitarContactos();
	$("#FCHIMSS").attr("disabled",true);
	$("#PORCHONOR").attr("disabled",true);
	$("#DETFIN").attr("disabled",true);
	$("input[name='OPCFACTANT']").attr("disabled",true);
	$("#FCHVENCONT").attr("disabled",true);
	$("input[name='OPCSOLGIN']").attr("disabled",true);
	$("input[name='OPCFINAN']").attr("disabled",true);
	$("#FCH_1_DISP").attr("disabled",true);
	$("#imgFecFCHIMSS").hide();
	$("#imgFecFCHVENCONT").hide();
	$("#imgFecFCH_1_DISP").hide();
	$("#FCH_INDUC").attr("disabled",true);
	$("#imgFecFCH_INDUC").hide();
	OcultarGrupo( 'CARACTERÍSTICAS DE LA OPERACIÓN');
	OcultarGrupo( 'CLASIFICACIÓN');
}else{
	habilitarContactos();
	$("#FCHIMSS").attr("disabled",false);
	$("#PORCHONOR").attr("disabled",false);
	$("#DETFIN").attr("disabled",false);
	$("input[name='OPCFACTANT']").attr("disabled",false);
	$("#FCHVENCONT").attr("disabled",false);
	$("input[name='OPCSOLGIN']").attr("disabled",false);
	$("input[name='OPCFINAN']").attr("disabled",false);
	$("#FCH_1_DISP").attr("disabled",false);
	$("#imgFecFCHIMSS").show();
	$("#imgFecFCHVENCONT").show();
	$("#imgFecFCH_1_DISP").show();
	$("#FCH_INDUC").attr("disabled",false);
	$("#imgFecFCH_INDUC").show();
	MostrarGrupo( 'CARACTERÍSTICAS DE LA OPERACIÓN');
	MostrarGrupo( 'CLASIFICACIÓN');
}

$("input[name='OPCCAMBFAC']").click(function() { 
	asignar_valor( 'CLN','');
	HabilitaCampos("OPCCAMBFAC","SICAMBFAC",[[1,"NUEVOCLN"]]); 
	HabilitaCampos("OPCCAMBFAC","NOCAMBFAC",[[1,"OPCPROYESP"],[1,"MSGPROYESP"]]);
	if (obtener_valor('OPCCAMBFAC',0)=='T'){
		asignar_valor('OPCPROYESP','F',0);
		asignar_valor('OPCPROYESP','F',1);
		OcultarCampo( 'CLNOPER' );
		OcultarCampo( 'EMPFACT' );
		OcultarCampo( 'NUEVASUB' );
	}
	if (obtener_valor('OPCCAMBFAC',0)=='T')
		MostrarGrupo( 'DATOS DEL CONTRATO' );
	else
		OcultarGrupo('DATOS DEL CONTRATO');

	if (obtener_valor('OPCPROYESP',1)=='T'){
		deshabilitarContactos();
		$("#FCHIMSS").attr("disabled",true);
		$("#PORCHONOR").attr("disabled",true);
		$("#DETFIN").attr("disabled",true);
		$("input[name='OPCFACTANT']").attr("disabled",true);
		$("#FCHVENCONT").attr("disabled",true);
		$("input[name='OPCSOLGIN']").attr("disabled",true);
		$("input[name='OPCFINAN']").attr("disabled",true);
		$("#FCH_1_DISP").attr("disabled",true);
		$("#imgFecFCHIMSS").hide();
		$("#imgFecFCHVENCONT").hide();
		$("#imgFecFCH_1_DISP").hide();
		$("#FCH_INDUC").attr("disabled",true);
		$("#imgFecFCH_INDUC").hide();
		OcultarGrupo( 'CARACTERÍSTICAS DE LA OPERACIÓN');
		OcultarGrupo( 'CLASIFICACIÓN');
	}else{
		habilitarContactos();
		$("#FCHIMSS").attr("disabled",false);
		$("#PORCHONOR").attr("disabled",false);
		$("#DETFIN").attr("disabled",false);
		$("input[name='OPCFACTANT']").attr("disabled",false);
		$("#FCHVENCONT").attr("disabled",false);
		$("input[name='OPCSOLGIN']").attr("disabled",false);
		$("input[name='OPCFINAN']").attr("disabled",false);
		$("#FCH_1_DISP").attr("disabled",false);
		$("#imgFecFCHIMSS").show();
		$("#imgFecFCHVENCONT").show();
		$("#imgFecFCH_1_DISP").show();
		$("#FCH_INDUC").attr("disabled",false);
		$("#imgFecFCH_INDUC").show();
		MostrarGrupo( 'CARACTERÍSTICAS DE LA OPERACIÓN');
		MostrarGrupo( 'CLASIFICACIÓN');
	}
});

$("input[name='OPCPROYESP']").click(function() { 
	asignar_valor( 'CLN','');
	HabilitaCampos("OPCPROYESP","SIPROYESP",[[1,"NUEVASUB"],[1,"MSGPROYESP"],[1,"EMPFACT"]]);
	HabilitaCampos("OPCPROYESP","NOPROYESP",[[1,"CLNOPER"]]);
	MostrarGrupo( 'DATOS DEL CONTRATO' );
	if (obtener_valor('OPCPROYESP',1)=='T'){
		deshabilitarContactos();	
		$("#FCHIMSS").attr("disabled",true);
		$("#PORCHONOR").attr("disabled",true);
		$("#DETFIN").attr("disabled",true);
		$("input[name='OPCFACTANT']").attr("disabled",true);
		$("#FCHVENCONT").attr("disabled",true);
		$("input[name='OPCSOLGIN']").attr("disabled",true);
		$("input[name='OPCFINAN']").attr("disabled",true);
		$("#FCH_1_DISP").attr("disabled",true);
		$("#imgFecFCHIMSS").hide();
		$("#imgFecFCHVENCONT").hide();
		$("#imgFecFCH_1_DISP").hide();
		$("#FCH_INDUC").attr("disabled",true);
		$("#imgFecFCH_INDUC").hide();
		OcultarGrupo( 'CARACTERÍSTICAS DE LA OPERACIÓN');
		OcultarGrupo( 'CLASIFICACIÓN');
	}else{
		habilitarContactos();
		$("#FCHIMSS").attr("disabled",false);
		$("#PORCHONOR").attr("disabled",false);
		$("#DETFIN").attr("disabled",false);
		$("input[name='OPCFACTANT']").attr("disabled",false);
		$("#FCHVENCONT").attr("disabled",false);
		$("input[name='OPCSOLGIN']").attr("disabled",false);
		$("input[name='OPCFINAN']").attr("disabled",false);
		$("#FCH_1_DISP").attr("disabled",false);
		$("#imgFecFCHIMSS").show();
		$("#imgFecFCHVENCONT").show();
		$("#imgFecFCH_1_DISP").show();
		$("#FCH_INDUC").attr("disabled",false);
		$("#imgFecFCH_INDUC").show();
		MostrarGrupo( 'CARACTERÍSTICAS DE LA OPERACIÓN');
		MostrarGrupo( 'CLASIFICACIÓN');
	}
});


//para ocultar campos segunradio button

HabilitaCampos("OPCFINAN","SIFINAN",[[1,"DETFIN"]]); 

$("input[name='OPCFINAN']").click(function() { 
	HabilitaCampos("OPCFINAN","SIFINAN",[[1,"DETFIN"]]); 
});


//FUNCIÓN VALIDAR ENVIO
function ValidaEnvio()
{  
	if ($("#wfrm_formulario").valid()!=true){
		alertmb("Por favor complete los campos obligatorios. ",0,1,"Aceptar");
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
			}else{
				if (obtener_valor('OPCCAMBFAC',1)=="T" && obtener_valor('OPCPROYESP',0)!="T" && obtener_valor('OPCPROYESP',1)!="T"){
					alertmb("Por favor indique si se trata de un proyecto especial",0,1,"Aceptar");
					return false;
				}
				else
					return true;
			}
		}
	}
}

$("#wfrm_formulario").validate
({
  rules: { 
	CLN: {required: true},
	EMPFACT: {required: function(element) { return obtener_valor('OPCPROYESP',0)=='T';}}
         }
});

ValidarFilaDinamica("MTZDET","1",[
["MTZDET15",{required: function(element) { return $('::MTZDET14::').attr('checked') ==  true;}}],
["MTZDET17",{required: function(element) { return $('::MTZDET16::').attr('checked') ==  true;}}],
["MTZDET19",{required: function(element) { return $('::MTZDET18::').attr('checked') ==  true;}}],
["MTZDET20",{required: function(element) { return $('::MTZDET18::').attr('checked') ==  true;}}]
]);


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

//EJECUTAR FUNCIÓN DE VALIDAR ENVIO	
asignar_event( "onclick" , "ValidaEnvio()", "wl_bsolicitar" );
asignar_event( "onclick" , "ValidaEnvio()", "wl_bsolicitar1" );


/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
