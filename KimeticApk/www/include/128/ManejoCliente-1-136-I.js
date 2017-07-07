MatrizEstatica( 'MTZNOM');
MatrizEstatica( 'MTZOPC');

CamposObligatorios(["M0MTZOPC","M0MTZNOM15","DESOPCALTANT","DESANEXBASE","DESANEXIMSS","DESANEX2IMSS","DESANEXBANC","DESANEXXTI","DESANEXGMM","DESANEXVA"]);

HabilitaCampos("OPCINDUC","SIINDUC",[[1,"OPCALTANT"]]); 

function ValidaAnexos(){
		if(obtener_valorM('MTZOPC',1,1)!="T"){
			OcultarCampo('SIANEXIMSS');
			OcultarCampo('SIANEX2IMS');
		}else{
			MostrarCampo('SIANEXIMSS');
			MostrarCampo('SIANEX2IMS');
		}
		if(obtener_valorM('MTZOPC',1,2)!="T")
			OcultarCampo('SIANEXBANC');
		else
			MostrarCampo('SIANEXBANC');
		if(obtener_valorM('MTZOPC',1,3)!="T")
			OcultarCampo('SIANEXXTI');
		else
			MostrarCampo('SIANEXXTI');
		if(obtener_valorM('MTZOPC',1,4)!="T")
			OcultarCampo('SIANEXGMM');
		else
			MostrarCampo('SIANEXGMM');
		if(obtener_valorM('MTZOPC',1,5)!="T")
			OcultarCampo('SIANEXVA');
		else
			MostrarCampo('SIANEXVA');
	return true;
}

ValidaAnexos();


$("input[name='OPCINDUC']").click(function() { 
	HabilitaCampos("OPCINDUC","SIINDUC",[[1,"OPCALTANT"]]); 
});
asignar_event_matriz("onchange", "ValidaAnexos()", "MTZOPC",1);
asignar_event_matriz("onchange", "ValidaAnexos()", "MTZOPC",2);
asignar_event_matriz("onchange", "ValidaAnexos()", "MTZOPC",3);
asignar_event_matriz("onchange", "ValidaAnexos()", "MTZOPC",4);
asignar_event_matriz("onchange", "ValidaAnexos()", "MTZOPC",5);

function ValidaCheckAltas(){	
	var fila= obtener_valor('FILA');
	var mk=0;
	for(e=9;e<=13;e++){
		var d=e-8;
				if (obtener_valorM('MTZNOM', fila,e)!= 'T' && obtener_valorM('MTZOPC',1,d)=='T'){
					mk=1;
				}
	}
	if (mk!=0){
		alert('No puede seleccionar una alta que no este por defecto marcada en la nómina');
		asignar_valorM('MTZOPC',obtener_valorM('MTZNOM',fila,9), 1, 1);
		asignar_valorM('MTZOPC',obtener_valorM('MTZNOM',fila,10), 1, 2);
		asignar_valorM('MTZOPC',obtener_valorM('MTZNOM',fila,11), 1, 3);
		asignar_valorM('MTZOPC',obtener_valorM('MTZNOM',fila,12), 1, 4);
		asignar_valorM('MTZOPC',obtener_valorM('MTZNOM',fila,13), 1, 5);
		ValidaAnexos();
		return false;
	}else{
		return true;
	}
	
}


function ValidarCheckNomina(){
var mark=0;
 fil=obtener_valor( 'filMTZNOM' );

	for(e=1;e<=fil;e++){
		if ($("#M"+e+"MTZNOM15").attr('checked')==true){
			mark=1;
		}
   	}

	if(mark!=1){

		alert('Debe seleccionar una nómina para dar de alta a los empleados');
		return false;
	}else{

		if(ValidaCheckAltas()){
			return true;
		}else{
			return false;
		}
	}

}


function ValidarUnCheck(){

var m=0;
 fil=obtener_valor( 'filMTZNOM' );

	for(e=1;e<=fil;e++){
		if ($("#M"+e+"MTZNOM15").attr('checked')==true){
			m=m+1;
			if(m>1){
				alert('No puede seleccionar mas de una nómina');
				$("#M"+e+"MTZNOM15").attr('checked', false);
				return false;
			}else{
				asignar_valor('FILA',e);
				var resp= obtener_valorM('MTZNOM', e , 17);
				asignar_valor('NBIMSS',resp);
				asignar_valorM('MTZOPC',obtener_valorM('MTZNOM',e,9), 1, 1);
				asignar_valorM('MTZOPC',obtener_valorM('MTZNOM',e,10), 1, 2);
				asignar_valorM('MTZOPC',obtener_valorM('MTZNOM',e,11), 1, 3);
				asignar_valorM('MTZOPC',obtener_valorM('MTZNOM',e,12), 1, 4);
				asignar_valorM('MTZOPC',obtener_valorM('MTZNOM',e,13), 1, 5);
				ValidaAnexos();
			}
		}
   	}
return true;

}


function ValidarUserIMSS(){

var m=0;
 fil=obtener_valor( 'filMTZNOM' );

	for(e=1;e<=fil;e++){
		if ($("#M"+e+"MTZNOM15").attr('checked')==true){

				var resp= obtener_valorM('MTZNOM', e , 17);
				asignar_valor('NBIMSS',resp);
		}
   	}
return true;

}


asignar_event_matriz('onchange' ,  'ValidarUnCheck()' ,'MTZNOM' , 15);

function actualizarContador(){
	var cont=1;
	if (obtener_valorM('MTZOPC',1,1)=="T")
		cont=cont+2;
	if (obtener_valorM('MTZOPC',1,2)=="T")
		cont=cont+1;
	if (obtener_valorM('MTZOPC',1,3)=="T")
		cont=cont+1;
	if (obtener_valorM('MTZOPC',1,4)=="T")
		cont=cont+1;
	if (obtener_valorM('MTZOPC',1,5)=="T")
		cont=cont+1;
	asignar_valor('CONTANEX',cont);
	return true;
}

function ValidaEnvio(){  
	if ($("#wfrm_formulario").valid()!=true){
		alertmb("Por favor complete los campos obligatorios",0,1,"Aceptar");
		return false;
	}else{
		if (obtener_valor('OPCINDUC',0)=="T" && obtener_valor('OPCALTANT',0)!="T" && obtener_valor('OPCALTANT',1)!="T"){
			alertmb("Por favor seleccione si requiere relizar altas antes de la inducción",0,1,"Aceptar");
			return false;
		}else{
			actualizarContador();
			return true;
		}
	}
}

$("#wfrm_formulario").validate
({
  rules: { 
           SIANEXBASE:{required: true},
           SIANEXIMSS:{required: function(element) { return obtener_valorM('MTZOPC',1,1)=="T";}},
           SIANEX2IMS:{required: function(element) { return obtener_valorM('MTZOPC',1,1)=="T";}},
           SIANEXBANC:{required: function(element) { return obtener_valorM('MTZOPC',1,2)=="T";}},
           SIANEXXTI:{required: function(element) { return obtener_valorM('MTZOPC',1,3)=="T";}},
           SIANEXGMM:{required: function(element) { return obtener_valorM('MTZOPC',1,4)=="T";}},
           SIANEXVA:{required: function(element) { return obtener_valorM('MTZOPC',1,5)=="T";}}
         },
  messages: { 
           SIANEXBASE: "Indique que anexó la base de empleados",
           SIANEXIMSS: "Indique que anexó formato de altas de IMSS",
           SIANEX2IMS: "Indique que anexó validación de IMSS",
           SIANEXBANC: "Indique que anexó layout bancario",
           SIANEXXTI: "Indique que anexó layout X-ti",
           SIANEXGMM: "Indique que anexó layout GMM",
           SIANEXVA: "Indique que anexó layout de valores agregados"
            }
});

asignar_event( "onclick" , "ValidarUserIMSS();ValidaEnvio();ValidarCheckNomina()", "wl_bsolicitar" );
asignar_event( "onclick" , "ValidarUserIMSS();ValidaEnvio();ValidarCheckNomina()", "wl_bsolicitar1" );


/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
