////OCULTAR CAMPOS QUE DEPENDEN SI LA NÓMINA FUE CORREGIDA O NO
OcultarCampo('CORPRENOM');
OcultarCampo('NUMEMPL');
OcultarCampo('TPOPAGOTRA');
OcultarCampo('SIANEXPRE');
OcultarCampo('TPOINICIO');
OcultarCampo( 'PERIOCBUSQ' );
MatrizEstatica('MTZCONF');

	if (obtener_valor('OPCCORREG',0)=='T')
		asignar_valor('TPOPAGLEY','F')


if (obtener_valor('OPCCORREG',0)=='F' && obtener_valor('OPCCORREG',1)=='F')
	asignar_valor('OPCCORREG','T',1);

if (obtener_valor('OPCCORREG',1)=='T')
	MostrarCampo('SIANEXPRE');

HabilitaCampos("OPCCORREG","OPCNOCORRG",[[2,"CORPRENOM"], [1,"TPOPAGOTRA"], [1,"NUMEMPL"],[1,"CODFACT"], [1,"CONCOB"], [1,"PERIOC"], [1,"PERIODO"], [1,"MTZCONF"] ]);
CamposObligatorios(["M0MTZCONF1","M0MTZCONF2","M0MTZCONF3","M0MTZCONF4","DESANEXAUTO","DESCORPRENOM","DESTPOPAGO","DESANEXPRE","DESNUMEMPL","DESCONCOB","DESPERIOC","DESPERIODO"]);

$("input[name='OPCCORREG']").click(function() {
	HabilitaCampos("OPCCORREG","OPCNOCORRG",[[2,"CORPRENOM"], [1,"TPOPAGOTRA"], [1,"NUMEMPL"], [1,"CODFACT"],[1,"CONCOB"], [1,"PERIOC"], [1,"PERIODO"] , [1,"MTZCONF"] ]);
	if (obtener_valor('OPCCORREG',1)=='T')
		MostrarCampo('SIANEXPRE');
	else
		OcultarCampo('SIANEXPRE');
	if (obtener_valor('OPCCORREG',0)=='T')
		asignar_valor('TPOPAGLEY','F')
	
});

$("#PERIODO").setMask("99");
//FUNCIÓN VALIDAR ENVIO
function ValidaEnvio()
{  
          if ($("#wfrm_formulario").valid()!=true){
			alertmb("Por favor complete los campos obligatorios",0,1,"Aceptar");
	  		return false;
          }else{


			if (obtener_valor('OPCCORREG',1)=="T" && obtener_valor('TPOPAGOTRA')!="T" && obtener_valor('TPOPAGOORD')!="T"&& obtener_valor('TPOPAGLEY')!="T"){
				alertmb("Por favor seleccione la forma de pago",0,1,"Aceptar");
				return false;
			}
			else{
				if (obtener_valor('OPCCORREG',1)=="T" && obtener_valor('PERIODO').length<2){
					alertmb("El período debe estar representado por dos caracteres",0,1,"Aceptar");
					return false;
				}
				else
					return true;
			}
		  }
}

$("#wfrm_formulario").validate
({
  rules: { 
	CORPRENOM:{required: function(element) { return obtener_valor('OPCCORREG',0)=="T";}},
	NUMEMPL:{required: function(element) { return obtener_valor('OPCCORREG',1)=="T";}},
	SIANEXPRE:{required: function(element) { return obtener_valor('OPCCORREG',1)=="T";}},
	CONCOB:{required: function(element) { return obtener_valor('OPCCORREG',1)=="T";}},
	PERIOC:{required: function(element) { return obtener_valor('OPCCORREG',1)=="T";}},
	PERIODO:{required: function(element) { return obtener_valor('OPCCORREG',1)=="T";}},
	M1MTZCONF1:{required: function(element) { return obtener_valor('OPCCORREG',1)=="T";}},
	M1MTZCONF2:{required: function(element) { return obtener_valor('OPCCORREG',1)=="T";}},
	M1MTZCONF3:{required: function(element) { return obtener_valor('OPCCORREG',1)=="T";}},
	M1MTZCONF4:{required: function(element) { return obtener_valor('OPCCORREG',1)=="T";}}	   
         },
  messages: { 
               CORPRENOM: "Por favor indique las correcciones aplicadas",
	CONCOB: "Por favor indique el concepto de cobro",
	PERIOC: "Por favor indique la periocidad",
	PERIODO: "Por favor indique el periodo",
	M1MTZCONF1:"Por favor seleccione el contacto que confirmo la prenómina",
	M1MTZCONF2:"Por favor indique la fecha de confirmación",
	M1MTZCONF3:"Por favor indique la hora de confirmación",
	M1MTZCONF4: "Por favor seleccione el canal utilizado para la confirmación"
            }
});

function cambio_concepto(){ 
if (obtener_valor('CONCOB')!="Seleccione"){
	var concepto = obtener_valor('CONCOB');
	var codigo= obtener_valor('CODFACT');
	var parte1=codigo.substring(0,12);
	var parte2=codigo.substring(14);
	var resultado=parte1+concepto+parte2;
	asignar_valor('CODFACT', resultado);
}
	return true;
}

function cambio_periocidad(){ 
if (obtener_valor('PERIOCBUSQ')!="Seleccione"){	
	var periocidad= obtener_valor('PERIOC');
	var perioc_nombre= $("#PERIOCBUSQ option:selected").text();
	var periocidad_nombre= $("#PERIOC option:selected").text();
	var periocidad_original= obtener_valor('PERIOCORIG');
	if (periocidad!='U' && periocidad_nombre!=perioc_nombre){
		alertmb("Solo puede seleccionar periocidad única o la indicada en la matriz de nóminas",0,1,"Aceptar");
		asignar_valor('PERIOC', periocidad_original);
	} else{
		var codigo= obtener_valor('CODFACT');
		var parte1=codigo.substring(0,14);
		var parte2=codigo.substring(15);
		var resultado=parte1+periocidad+parte2;
		asignar_valor('CODFACT', resultado);
	}
}
if (obtener_valor('PERIOCBUSQ')=="Seleccione" && obtener_valor('PERIOC')!="Seleccione"){
	var periocidad= obtener_valor('PERIOC');
	var codigo= obtener_valor('CODFACT');
	var parte1=codigo.substring(0,14);
	var parte2=codigo.substring(15);
	var resultado=parte1+periocidad+parte2;
	asignar_valor('CODFACT', resultado);
}
    return true;
}

function cambio_periodo(){ 
if (obtener_valor('PERIODO').length==2){
	var periodo = obtener_valor('PERIODO');
	var codigo= obtener_valor('CODFACT');
	var parte1=codigo.substring(0,15);
	var parte2=codigo.substring(17);
	var resultado=parte1+periodo+parte2;
	asignar_valor('CODFACT', resultado);
}
    return true;
}

if (obtener_valor('PERIOCBUSQ')=="Seleccione")
	$("#PERIOC").attr('disabled',true);

if (obtener_valor('PERIOC')!="Seleccione"){
	var periocidad= obtener_valor('PERIOC');
	var codigo= obtener_valor('CODFACT');
	var parte1=codigo.substring(0,14);
	var parte2=codigo.substring(15);
	var resultado=parte1+periocidad+parte2;
	asignar_valor('CODFACT', resultado);
}

if (obtener_valor('PERIODO').length==2){
	var periodo = obtener_valor('PERIODO');
	var codigo= obtener_valor('CODFACT');
	var parte1=codigo.substring(0,15);
	var parte2=codigo.substring(17);
	var resultado=parte1+periodo+parte2;
	asignar_valor('CODFACT', resultado);
}

if (obtener_valor('CONCOB')!="Seleccione"){
	var concepto = obtener_valor('CONCOB');
	var codigo= obtener_valor('CODFACT');
	var parte1=codigo.substring(0,12);
	var parte2=codigo.substring(14);
	var resultado=parte1+concepto+parte2;
	asignar_valor('CODFACT', resultado);
}
asignar_event( "onchange", "cambio_concepto()", 'CONCOB');
asignar_event( "onchange", "cambio_periocidad()", 'PERIOC');
asignar_event( "onchange", "cambio_periodo()", 'PERIODO');

//EJECUTAR FUNCIÓN DE VALIDAR ENVIO	
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar" );
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar1" );
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
