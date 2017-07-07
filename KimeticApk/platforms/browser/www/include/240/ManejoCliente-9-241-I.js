MatrizEstatica( 'MTZDET' );
MatrizEstatica( 'MTZ2DET' );
MatrizEstatica( 'MTZ3DET' );
MatrizEstatica( 'MTZ4DET' );
//MatrizEstatica( 'MTZCONT' );
OcultarCampo('MTZCNTCT');
asignar_event( "onclick" ,"AgregarFilasContactos()" , "MATNVMTZNVCON");

function AgregarFilasContactos(){
	fil=obtener_valor( 'filMTZNVCON' );
	ValidarFilaDinamica("MTZNVCON",fil,[
	["MTZNVCON1",{required: function(element) { return obtener_valor('OPCNVCONT',0)=='T';}}],
	["MTZNVCON5",{email: true, required: function(element) {return obtener_valor('OPCNVCONT',0)=='T';}}]
	]);
	return true;
}

//Agregar tooltip
fil=obtener_valor( 'filMTZNOM' );
for(e=1;e<=fil;e++){
	$('#M'+e+'MTZNOM18').attr('title','Para las periocidades semanales/catorcenales el día de la semana es representado: \n Lunes: 1 \n Martes: 2 \n Miercoles: 3 \n Jueves: 4 \n Viernes: 5');
}

HabilitaCampos("OPCFINAN","SIAPFIN",[[1,"OBSFINAN"]]); 
HabilitaCampos("OPCFINFINI","SIFINFINI",[[1,"OBSFINANFI"]]); 

HabilitaCampos("OPCNVCONT","SINVCONT",[[1,"MTZNVCON"]]); 

$("input[name='OPCFINAN']").click(function() { 
	HabilitaCampos("OPCFINAN","SIAPFIN",[[1,"OBSFINAN"]]); 
});


$("input[name='OPCFINFINI']").click(function() { 
	HabilitaCampos("OPCFINFINI","SIFINFINI",[[1,"OBSFINANFI"]]); 
});

$("input[name='OPCNVCONT']").click(function() { 
	HabilitaCampos("OPCNVCONT","SINVCONT",[[1,"MTZNVCON"]]); 
});

if (obtener_valor( "COMENT")!='')
	MostrarGrupo( "Aprobación");
else
	OcultarGrupo( "Aprobación");



CamposObligatorios(["M0MTZNVCON1","M0MTZNVCON5","M0MTZCONT1","M0MTZCONT5","M0MTZNOM17"]);


function TieneRespIMSS(){
	fil=obtener_valor( 'filMTZNOM' );
	var c=0;
	for(e=1;e<=fil;e++){	
		if  ($("#M"+e+"MTZNOM10").attr('checked')==true && $("#M"+e+"MTZNOM17").val()=="" ){	
			c=1;
		}
   	}
	if(c!=0){
		return false;
	}else{
		return true;
	}
   
}

function validarDias(){
	fil=obtener_valor( 'filMTZNOM' );
	for(e=1;e<=fil;e++){
		periocidad = obtener_valorM('MTZDET', e ,4);
		dia = obtener_valorM('MTZDET', e ,18);
		if ((periocidad==1 || periocidad==2) && (dia>5))	
			return false;
	}
	return true;
}

function obtenerCambios(){
	var str = obtener_valor('wl_campos_onchange');
	var str2 = obtener_valor('wl_camposm_onchange');
	var res = str.split(",");
	var res2 = str2.split(",");
	for (var i=0;i<res.length; i++){
		if (obtener_valor("MODIFIC").indexOf($('#DES'+res[i]).text()) == -1){
			if (res[i]=="ATENJURID" || res[i]=="OPCACTIVO" || res[i]=="RZN_SOCIAL" || res[i]=="PORCHONOR" || res[i]=="OPCFINAN" || res[i]=="OPCFINFINI" || res[i]=="OBSFINAN" || res[i]=="OBSFINANFI")
				asignar_valor('INCORREO','1');
			if (obtener_valor("MODIFIC")!="")
				asignar_valor("MODIFIC",obtener_valor("MODIFIC")+", "+$('#DES'+res[i]).text());
			else
				asignar_valor("MODIFIC",$('#DES'+res[i]).text());
		}
	}
	for (var j=0;j<res2.length; j++){
		if (res2[j]!=""){
			if (obtener_valor("MODIFIC").indexOf($('#'+res2[j]).parent().siblings().text()) == -1){
				if (obtener_valor("MODIFIC")!="")
					asignar_valor("MODIFIC",obtener_valor("MODIFIC")+", "+$('#'+res2[j]).parent().siblings().text());
				else
					asignar_valor("MODIFIC",$('#'+res2[j]).parent().siblings().text());
			}
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
		if (!validarDias()){
			alertmb("Debe indicar un día entre el 1-5 para las nóminas con periocidad Semanal / Catorcenal ",0,1,"Aceptar");
	  		return false;
		}
		else{
			if (obtener_valor('INFICHADEF')==''){
				alertmb("Debe generar la ficha técnica antes de enviar",0,1,"Aceptar");
				$("#AGENTE_2781").focus();
				return false;
			}
			else{
				if(obtener_valorM('MTZCNTCT', 1 ,1)==""){
					alertmb("El contrato debe poseer al menos un contacto activo ",0,1,"Aceptar");
					asignar_valor('INFICHADEF','');
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
M1MTZCONT5: {email: true, required: function(element) { return true;}}
         }
});


ValidarFilas("MTZCONT",[
["MTZCONT1",{required: true}],
["MTZCONT5",{email: true, required: true}]
]);


ValidarFilas("MTZNVCON",[
["MTZNVCON1",{required: function(element) { return obtener_valor('OPCNVCONT',0)=='T';}}],
["MTZNVCON5",{email: true, required: function(element) {return obtener_valor('OPCNVCONT',0)=='T';}}]
]);

asignar_event_matriz( "onchange" ,"validarResponsableIMSS()" , "MTZDET", 9);
asignar_event_matriz( "onchange" ,"validarResponsableIMSS()" , "MTZDET", 10);

asignar_event( "onclick" , "ValidaEnvio()", "wl_bsolicitar" );
asignar_event( "onclick" , "ValidaEnvio()", "wl_bsolicitar1" );


function copiarContactos(){
	SeleccionaFila('MTZCNTCT');
	BorrarFila('MTZCNTCT','TTTTTTQ');
	fil=obtener_valor( 'filMTZCONT' );
	for(e=1;e<=fil;e++){
		if (obtener_valorM('MTZCONT', e ,9)=="Si"){
			if (obtener_valorM('MTZCNTCT', 1 ,1)!="")
				IngresarFila('MTZCNTCT','TTTTTTQ');
			f=obtener_valor( 'filMTZCNTCT' );
			asignar_valorM('MTZCNTCT', obtener_valorM('MTZCONT', e ,1), f, 1);
			asignar_valorM('MTZCNTCT',obtener_valorM('MTZCONT', e ,2) , f, 2);
			asignar_valorM('MTZCNTCT', obtener_valorM('MTZCONT', e ,3), f, 3);
			asignar_valorM('MTZCNTCT',obtener_valorM('MTZCONT', e ,4) , f, 4);
			asignar_valorM('MTZCNTCT', obtener_valorM('MTZCONT', e ,5), f, 5);
			asignar_valorM('MTZCNTCT', obtener_valorM('MTZCONT', e ,6), f, 6);
			asignar_valorM('MTZCNTCT',obtener_valorM('MTZCONT', e ,7) , f, 7);
		}
	}
	if (obtener_valor('OPCNVCONT',0)=='T'){
	fila=obtener_valor( 'filMTZNVCON' );
		for(e=1;e<=fila;e++){
			if (obtener_valorM('MTZCNTCT', 1 ,1)!="")
				IngresarFila('MTZCNTCT','TTTTTTQ');
			f=obtener_valor( 'filMTZCNTCT' );
			asignar_valorM('MTZCNTCT', obtener_valorM('MTZNVCON', e ,1), f, 1);
			asignar_valorM('MTZCNTCT',obtener_valorM('MTZNVCON', e ,2) , f, 2);
			asignar_valorM('MTZCNTCT', obtener_valorM('MTZNVCON', e ,3), f, 3);
			asignar_valorM('MTZCNTCT',obtener_valorM('MTZNVCON', e ,4) , f, 4);
			asignar_valorM('MTZCNTCT', obtener_valorM('MTZNVCON', e ,5), f, 5);
			asignar_valorM('MTZCNTCT', obtener_valorM('MTZNVCON', e ,6), f, 6);
			asignar_valorM('MTZCNTCT',obtener_valorM('MTZNVCON', e ,7) , f, 7);
		
		}
	}
}

function GenerarFichaCompleta(){
          if ($("#wfrm_formulario").valid()!=true){
   	alertmb("Por favor complete los campos obligatorios antes de generar la ficha técnica",0,1,"Aceptar");
	window.event.returnValue = false;
	asignar_valor('INFICHADEF','');
	event.preventDefault(); 
     	return false;
          }else{
	obtenerCambios();
	copiarContactos();
  	return true;
          }
}

asignar_event( "onclick" ,"GenerarFichaCompleta()" , "AGENTE_2781");
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
