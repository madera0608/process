MatrizEstatica( 'MTZOPC');

function ValidarAlta(colAlta,colNomina)
{
  if (obtener_valorM('MTZOPC',1,colAlta)=='T' )
  {

     fila  = obtener_valor( 'filMTZDET' );
     valido=false;
     for (i=1;fila<=i&&!valido;i++)
         if (obtener_valorM('MTZDET',i,colNomina) =='T' )
              valido=true;
    
     if (!valido)  {  
        asignar_valorM('MTZOPC','F', 1, colAlta);
        alert('No puede seleccionar una alta que no este por defecto marcada en la nómina');
       }

     return valido;
   }
   return true;

}

asignar_event_matriz("onchange", "ValidarAlta(1,12)", "MTZOPC",1);
asignar_event_matriz("onchange", "ValidarAlta(2,13)", "MTZOPC",2);
asignar_event_matriz("onchange", "ValidarAlta(3,14)", "MTZOPC",3);
asignar_event_matriz("onchange", "ValidarAlta(4,16)", "MTZOPC",4);
asignar_event_matriz("onchange", "ValidarAlta(5,18)", "MTZOPC",5);


	AsignarNroFila('MTZ2DET');
	AsignarNroFila('MTZ3DET');
	AsignarNroFila('MTZ4DET');

function validarCantNominas(){

fil=obtener_valor( 'filMTZDET' );

	if(fil > 20){
			
		alert('No puede agregar mas de 20 nóminas');
		$('#CHKBOXMATMTZDET21').attr('checked',true);
		BorrarFila('MTZDET','NTTATANAAAAVVVNVNVTNFFAN');
		return false;
	}else{	
		return true;
	}
}

asignar_event( "onclick" ,"validarCantNominas()" , "MATNVMTZDET");



function AgregarNominas(){

IngresarFila('MTZ2DET','NATAFTTATTAATT');
IngresarFila('MTZ3DET','TTTTTT');
IngresarFila('MTZ4DET','TTTTTT');

AsignarNroFila('MTZDET');
AsignarNroFila('MTZ2DET');
AsignarNroFila('MTZ3DET');
AsignarNroFila('MTZ4DET');

return true;
}

asignar_event( "onclick" ,"AgregarNominas(); AgregarFilasDetalle()" , "MATNVMTZDET");

function BorrarNominas(){

filas=obtener_valor('filMTZDET');

	for(e=1;e<=filas;e++){
		if($('#CHKBOXMATMTZDET'+e).attr('checked')==true){
			$('#CHKBOXMATMTZDET'+e).attr('checked',true);
			DesSeleccionaFila('MTZDET','CHKBOXMATMTZDET'+ e);
			$('#CHKBOXMATMTZ2DET'+e).attr('checked',true);
			DesSeleccionaFila('MTZ2DET','CHKBOXMATMTZ2DET'+ e);
		    	$('#CHKBOXMATMTZ3DET'+e).attr('checked',true);
			DesSeleccionaFila('MTZ3DET','CHKBOXMATMTZ3DET'+ e);
			$('#CHKBOXMATMTZ4DET'+e).attr('checked',true);
			DesSeleccionaFila('MTZ4DET','CHKBOXMATMTZ4DET' + e);
		}
	}
	BorrarFila('MTZDET','NTTATANAAAAVVVNVNVTNFFAN');
	BorrarFila('MTZ2DET','NATAFTTATTAATT');
	BorrarFila('MTZ3DET','TTTTTT');
	BorrarFila('MTZ4DET','TTTTTT');
	
	AsignarNroFila('MTZDET');
	AsignarNroFila('MTZ2DET');
	AsignarNroFila('MTZ3DET');
	AsignarNroFila('MTZ4DET');

	return true;

}

document.getElementById("MATBOMTZDET").onclick =BorrarNominas;



MatrizEstatica( 'MTZ1TAR');
DeshabilitarCheck('MTZ1TAR',3);
HabilitaCampos("OPCAPFIN","NOAPFIN",[[1,"MOTIVNEG"]]); 
HabilitaCampos("OPCAPFIN","SIAPFIN",[[1,"OBSFINAN"]]); 

HabilitaCampos("OPCFINFINI","NOFINFINI",[[1,"MOTNEGFINI"]]); 
HabilitaCampos("OPCFINFINI","SIFINFINI",[[1,"OBSFINANFI"]]); 

//MatrizEstatica( 'MTZDET' );
MatrizEstatica( 'MTZ2DET' );
MatrizEstatica( 'MTZ3DET' );
MatrizEstatica( 'MTZ4DET' );


function NuevoGrupo(){

var desc='';
if(obtener_valor( 'GRUPO' )==0){

MostrarCampo( 'DESCGRUPO' );
asignar_valor('GRUPODESC','');
}else{
OcultarCampo( 'DESCGRUPO' );
desc=obtener_valor( 'GRUPO', 1 );
asignar_valor('GRUPODESC',desc);

}
return true;

}

NuevoGrupo();


asignar_event( "onchange" ,"NuevoGrupo()" , "GRUPO");

function MostrarFichaT(){
	if (finTareas('MTZ1TAR',3)){
return true;
}else{
	alert('Debe terminar todas las tareas antes de generar la ficha técnica');
	window.event.returnValue = false;
	asignar_valor('INFICHAT','');
	return false;
}

}
asignar_event( "onclick" ,"MostrarFichaT()" , "AGENTE_5");


asignar_event_matriz( "onchange" ,"validarPrecedencia('MTZ1TAR')" , "MTZ1TAR", 3);
asignar_event_matriz( "onchange" ,"validarUncheck('MTZ1TAR')" , "MTZ1TAR", 3);


function AgregarFilasNominas(){

fil=obtener_valor( 'filMTZDET' );
fil2=obtener_valor( 'filMTZ2DET' );
if (fil!=fil2){
 for(e=1;e<fil;e++){

			asignar_valorM('MTZ2DET', e, e, 1);
			asignar_valorM('MTZ3DET', e, e, 1);
			asignar_valorM('MTZ4DET', e, e, 1);
			IngresarFila('MTZ2DET','NATAFTTATTAATT');
			IngresarFila('MTZ3DET','TTTTTT');
			IngresarFila('MTZ4DET','TTTTTT');
	}
}
			asignar_valorM('MTZ2DET', e, e, 1);
			asignar_valorM('MTZ3DET', e, e, 1);
			asignar_valorM('MTZ4DET', e, e, 1);

	return true;
}

AgregarFilasNominas();


HabilitaCampos("OPCENVMAIL","SIENVMAIL",[[3,"Datos del correo electrónico"]]);

$("input[name='OPCENVMAIL']").click(function() { 
HabilitaCampos("OPCENVMAIL","SIENVMAIL",[[3,"Datos del correo electrónico"]]); 
} );


HabilitaCampos("OPCANEXOS","SIANEXOS",[[1,"MTZANEXO"]]);

$("input[name='OPCANEXOS']").click(function() { 
HabilitaCampos("OPCANEXOS","SIANEXOS",[[1,"MTZANEXO"]]); 
} );


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


if (obtener_valor( 'IN_EMP')!='T'){

OcultarCampo( "EMPFACT");
OcultarCampo( "MTZDET", 3,9);
}

CamposObligatorios(
["M0MTZOPC","DESDESCGRUPO", "DESEMPFACT","DESNBCORTO","DESGRUPO","DESRFC","DESRZN_SOCIAL","DESDIR_FISCAL","DESANEX3PRE","DESMONTSERV",
"M0MTZCNTCT1","M0MTZCNTCT5",
"DESFCH_1_DISP","DESFCH_INDUC","DESPORCHONOR","DESOPCFACTANT","DESOPCSOLGIN","DESANALRIESG",
"M0MTZDET3", "M0MTZDET4","M0MTZDET6","M0MTZDET7","M0MTZDET8","M0MTZDET9","M0MTZDET12","M0MTZDET13","M0MTZDET14","M0MTZDET15","M0MTZDET16","M0MTZDET17","M0MTZDET18","M0MTZDET19","M0MTZDET20","M0MTZDET24",
"DESDESC_ACT", "DESPRIM_RIESG", "DESFINAN_FINIQ","DESHONOBROK", "DESBROKER", "DESGERENCOMER","DESFCHIMPLE", "DESFCHINDUCIN","DESOPCCARTPAT", "DESOPCENTCOMP", "DESOPCMANEXT", "DESOPCPERFORA", "DESOPCRPSITIO", "DESENVCONT", "DESATENJURID",
"M0MTZDET5", "M0MTZ2DET2", "M0MTZ2DET3", "M0MTZ2DET4","M0MTZ2DET7","M0MTZ2DET8","M0MTZ2DET11","M0MTZ2DET12","M0MTZ3DET2", "M0MTZ3DET3", "M0MTZ3DET4", "M0MTZ3DET5", "M0MTZ4DET2", "M0MTZ4DET3"]);


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

//FUNCIÓN VALIDAR ENVIO
function ValidaEnvio()
{  
	if ($("#wfrm_formulario").valid()!=true){
   		alertmb("Por favor complete los campos obligatorios",0,1,"Aceptar");
    		 return false;
	
          	}else{
		if (obtener_valor( 'IN_EMP')!='T'){
			alertmb("Falta por asignar la empresa pagadora y facturadora",0,1,"Aceptar");
			return false;
		}else{
			if (!validarDias()){	
				alertmb("Debe indicar un día entre el 1-5 para las nóminas con periocidad Semanal / Catorcenal ",0,1,"Aceptar");
	  			return false;
			}else{
				if (obtener_valor('INFICHAT')=='' && finTareas('MTZ1TAR',3)){
					alertmb("Debe generar la ficha técnica antes de enviar",0,1,"Aceptar");
					$("#AGENTE_5").focus();
					return false;
				}else
					return true;
			}
		}
        	}
}

$("#wfrm_formulario").validate
({
  rules: { 
     NBCORTO: {required: function(element) { return finTareas('MTZ1TAR',3);}},
  GRUPO: {required: function(element) { return finTareas('MTZ1TAR',3);}},
RFC: {required: function(element) { return finTareas('MTZ1TAR',3);}},
RZN_SOCIAL: {required: function(element) { return finTareas('MTZ1TAR',3);}},
DIR_FISCAL: {required: function(element) { return finTareas('MTZ1TAR',3);}},
FCH_1_DISP: {required: function(element) { return finTareas('MTZ1TAR',3);}},     
FCH_INDUC: {required: function(element) { return finTareas('MTZ1TAR',3);}}, 
ANALRIESG: {required: function(element) { return finTareas('MTZ1TAR',3) ;}},   
PORCHONOR: {required: function(element) { return finTareas('MTZ1TAR',3);}},  
OPCFACTANT: {required: function(element) { return finTareas('MTZ1TAR',3);}} ,
OPCSOLGIN: {required: function(element) { return finTareas('MTZ1TAR',3);}},
OPCRPSITIO: {required: function(element) { return finTareas('MTZ1TAR',3);}},
OPCPERFORA: {required: function(element) { return finTareas('MTZ1TAR',3);}},
OPCMANEXT: {required: function(element) { return finTareas('MTZ1TAR',3);}},
OPCCARTPAT: {required: function(element) { return finTareas('MTZ1TAR',3);}},
ENVCONT: {required: function(element) { return finTareas('MTZ1TAR',3);}},
ATENJURID: {required: function(element) { return finTareas('MTZ1TAR',3);}},
FCHINDUCIN: {required: function(element) { return finTareas('MTZ1TAR',3);}},
FCHIMPLE: {required: function(element) { return finTareas('MTZ1TAR',3);}},
GERENCOMER: {required: function(element) { return finTareas('MTZ1TAR',3);}},
BROKER: {required: function(element) { return finTareas('MTZ1TAR',3);}},
HONOBROK: {required: function(element) { return finTareas('MTZ1TAR',3);}},
FINAN_FINIQ: {required: function(element) { return finTareas('MTZ1TAR',3);}},
PRIM_RIESG: {required: function(element) { return finTareas('MTZ1TAR',3);}},
DESC_ACT: {required: function(element) { return finTareas('MTZ1TAR',3);}},
DESCGRUPO: {required: function(element) { return finTareas('MTZ1TAR',3) && obtener_valor( 'GRUPO' )==0;}}
         }
});

ValidarFilas("MTZCNTCT",[
["MTZCNTCT1",{required: function(element) { return finTareas('MTZ1TAR',3);}}],
["MTZCNTCT5",{email: true, required: function(element) {return finTareas('MTZ1TAR',3);}}]
]);

function AgregarFilasContacto(){
	fil=obtener_valor( 'filMTZCNTCT' );
	ValidarFilaDinamica("MTZCNTCT",fil,[
["MTZCNTCT1",{required: function(element) { return finTareas('MTZ1TAR',3);}}],
["MTZCNTCT5",{email: true, required: function(element) {return finTareas('MTZ1TAR',3);}}]
]);

	return true;
}

asignar_event( "onclick" ,"AgregarFilasContacto()" , "MATNVMTZCNTCT");

ValidarFilas("MTZDET",[
["MTZDET3",{required: function(element) { return finTareas('MTZ1TAR',3) ;}}],
["MTZDET4",{required: function(element) { return finTareas('MTZ1TAR',3) ;}}],
["MTZDET5",{required: function(element) { return finTareas('MTZ1TAR',3) ;}}],
["MTZDET6",{required: function(element) { return finTareas('MTZ1TAR',3);}}],
["MTZDET7",{required: function(element) { return finTareas('MTZ1TAR',3) ;}}],
["MTZDET15",{required: function(element) { return $('::MTZDET14::').attr('checked') ==  true && finTareas('MTZ1TAR',3);}}],
["MTZDET17",{required: function(element) { return $('::MTZDET16::').attr('checked') ==  true && finTareas('MTZ1TAR',3);}}],
["MTZDET19",{required: function(element) { return $('::MTZDET18::').attr('checked') ==  true && finTareas('MTZ1TAR',3);}}],
["MTZDET20",{required: function(element) { return $('::MTZDET18::').attr('checked') ==  true && finTareas('MTZ1TAR',3);}}],
["MTZDET24",{required: function(element) { return finTareas('MTZ1TAR',3) ;}}]
]);


function AgregarFilasDetalle(){
	fil=obtener_valor( 'filMTZDET' );
	ValidarFilaDinamica("MTZDET",fil,[
["MTZDET3",{required: function(element) { return finTareas('MTZ1TAR',3) ;}}],
["MTZDET4",{required: function(element) { return finTareas('MTZ1TAR',3) ;}}],
["MTZDET5",{required: function(element) { return finTareas('MTZ1TAR',3) ;}}],
["MTZDET6",{required: function(element) { return finTareas('MTZ1TAR',3);}}],
["MTZDET7",{required: function(element) { return finTareas('MTZ1TAR',3) ;}}],
["MTZDET15",{required: function(element) { return $('::MTZDET14::').attr('checked') ==  true && finTareas('MTZ1TAR',3);}}],
["MTZDET17",{required: function(element) { return $('::MTZDET16::').attr('checked') ==  true && finTareas('MTZ1TAR',3);}}],
["MTZDET19",{required: function(element) { return $('::MTZDET18::').attr('checked') ==  true && finTareas('MTZ1TAR',3);}}],
["MTZDET20",{required: function(element) { return $('::MTZDET18::').attr('checked') ==  true && finTareas('MTZ1TAR',3);}}],
["MTZDET24",{required: function(element) { return finTareas('MTZ1TAR',3) ;}}]
]);


	ValidarFilaDinamica("MTZ2DET",fil,[
["MTZ2DET2",{required: function(element) { return finTareas('MTZ1TAR',3) ;}}],
["MTZ2DET3",{required: function(element) { return finTareas('MTZ1TAR',3) ;}}],
["MTZ2DET4",{required: function(element) { return finTareas('MTZ1TAR',3);}}],
["MTZ2DET7",{required: function(element) { return finTareas('MTZ1TAR',3) ;}}],
["MTZ2DET8",{required: function(element) { return finTareas('MTZ1TAR',3) ;}}],
["MTZ2DET11",{required: function(element) { return finTareas('MTZ1TAR',3) ;}}],
["MTZ2DET12",{required: function(element) { return finTareas('MTZ1TAR',3);}}]
]);


	ValidarFilaDinamica("MTZ3DET",fil,[
["MTZ3DET2",{required: function(element) { return finTareas('MTZ1TAR',3) ;}}],
["MTZ3DET3",{required: function(element) { return finTareas('MTZ1TAR',3);}}],
["MTZ3DET4",{required: function(element) { return finTareas('MTZ1TAR',3) ;}}],
["MTZ3DET5",{required: function(element) { return finTareas('MTZ1TAR',3) ;}}]
]);


	ValidarFilaDinamica("MTZ4DET",fil,[
["MTZ4DET2",{required: function(element) { return finTareas('MTZ1TAR',3) ;}}],
["MTZ4DET3",{required: function(element) { return finTareas('MTZ1TAR',3) ;}}]
]);

	return true;
}


ValidarFilas("MTZ2DET",[
["MTZ2DET2",{required: function(element) { return finTareas('MTZ1TAR',3) ;}}],
["MTZ2DET3",{required: function(element) { return finTareas('MTZ1TAR',3) ;}}],
["MTZ2DET4",{required: function(element) { return finTareas('MTZ1TAR',3);}}],
["MTZ2DET7",{required: function(element) { return finTareas('MTZ1TAR',3) ;}}],
["MTZ2DET8",{required: function(element) { return finTareas('MTZ1TAR',3) ;}}],
["MTZ2DET11",{required: function(element) { return finTareas('MTZ1TAR',3) ;}}],
["MTZ2DET12",{required: function(element) { return finTareas('MTZ1TAR',3);}}]
]);

ValidarFilas("MTZ3DET",[
["MTZ3DET2",{required: function(element) { return finTareas('MTZ1TAR',3) ;}}],
["MTZ3DET3",{required: function(element) { return finTareas('MTZ1TAR',3);}}],
["MTZ3DET4",{required: function(element) { return finTareas('MTZ1TAR',3) ;}}],
["MTZ3DET5",{required: function(element) { return finTareas('MTZ1TAR',3) ;}}]
]);

ValidarFilas("MTZ4DET",[
["MTZ4DET2",{required: function(element) { return finTareas('MTZ1TAR',3) ;}}],
["MTZ4DET3",{required: function(element) { return finTareas('MTZ1TAR',3) ;}}]
]);

asignar_event_matriz( "onchange" ,"validarResponsableIMSS(9)" , "MTZDET", 12);
//EJECUTAR FUNCIÓN DE VALIDAR ENVIO 
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar" );
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar1" );

/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
