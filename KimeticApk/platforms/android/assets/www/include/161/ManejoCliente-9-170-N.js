//MatrizEstatica( 'MTZDET' );
MatrizEstatica( 'MTZ2DET' );
MatrizEstatica( 'MTZ3DET' );
MatrizEstatica( 'MTZ4DET' );

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

HabilitaCampos("OPCAPFIN","NOAPFIN",[[1,"MOTIVNEG"]]); 
HabilitaCampos("OPCAPFIN","SIAPFIN",[[1,"OBSFINAN"]]); 

HabilitaCampos("OPCFINFINI","NOFINFINI",[[1,"MOTNEGFINI"]]); 
HabilitaCampos("OPCFINFINI","SIFINFINI",[[1,"OBSFINANFI"]]); 

function GenerarFichaCompleta(){
          if ($("#wfrm_formulario").valid()!=true){
   	alertmb("Por favor complete los campos obligatorios antes de generar la ficha técnica",0,1,"Aceptar");
	window.event.returnValue = false;
	asignar_valor('INFICHADEF','');
     	return false;
          }else{
  	return true;
          }
}


function NuevoGrupo(){

var desc='';
if(obtener_valor( 'GRUPO' )==0){

MostrarCampo( 'DESCGRUPO' );
asignar_valor('GRUPODESC','');
asignar_valor('CODNUEGRUP','');
}else{
OcultarCampo( 'DESCGRUPO' );
desc=obtener_valor( 'GRUPO', 1 );
asignar_valor('GRUPODESC',desc);

}
return true;

}

NuevoGrupo();


asignar_event( "onchange" ,"NuevoGrupo()" , "GRUPO");


function ValidaAnexos(){

f=obtener_valor( 'filMTZDET' );

var aux=0;
	for(t=1;t<=f;t++){
		if(obtener_valorM('MTZDET',t,12)=="T"){
			aux=1;
		}
	}


	if(aux==0){
		OcultarCampo('SIANEXIMSS');
		asignar_valor('CNTANEXVAL',1);
	}else{
		MostrarCampo('SIANEXIMSS');
		asignar_valor('CNTANEXVAL',2); //el de imss mas la ficha tecnica
	}
		
	return true;
}

ValidaAnexos();

asignar_event_matriz("onchange", "ValidaAnexos()", "MTZDET",12);




asignar_event( "onclick" ,"GenerarFichaCompleta()" , "AGENTE_2658");

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

HabilitaCampos("OPCREUINI","SIREUINI",[[1,"FCHEFREUIN"], [2,"MOTCANINI"], [3,"Responsables"], [1,"SIANEXFICH"], [1,"AGENTE_2658"]]);

$("input[name='OPCREUINI']").click(function() { 
HabilitaCampos("OPCREUINI","SIREUINI",[[1,"FCHEFREUIN"], [2,"MOTCANINI"], [3,"Responsables"], [1,"SIANEXFICH"], [1,"AGENTE_2658"]]);
} );

CamposObligatorios(
["DESDESCGRUPO", "DESEMPFACT","DESANEXIMSS", "DESFCHEFREUIN","DESMOTCANINI","DESNBNOM","DESNBENBANC","DESNBFACT","DESNBSC","DESOPCALTAANT",
"DESNBCORTO","DESGRUPO","DESRFC","DESRZN_SOCIAL","DESDIR_FISCAL","DESNBCOORDSC",
"M0MTZCNTCT1","M0MTZCNTCT5","DESNBFINIQ",
"DESFCH_1_DISP","DESFCH_INDUC","DESPORCHONOR","DESOPCFACTANT","DESOPCSOLGIN","DESANALRIESG",
"M0MTZDET3", "M0MTZDET4","M0MTZDET6","M0MTZDET7","M0MTZDET9","M0MTZDET12","M0MTZDET13","M0MTZDET14","M0MTZDET15","M0MTZDET16","M0MTZDET17","M0MTZDET18","M0MTZDET19","M0MTZDET20","M0MTZDET24",
"DESDESC_ACT", "DESPRIM_RIESG", "DESFINAN_FINIQ","DESHONOBROK", "DESBROKER", "DESGERENCOMER","DESFCHIMPLE", "DESFCHINDUCIN","DESOPCCARTPAT", "DESOPCENTCOMP", "DESOPCMANEXT", "DESOPCPERFORA", "DESOPCRPSITIO", "DESENVCONT", "DESATENJURID",
"M0MTZDET5", "M0MTZ2DET2", "M0MTZ2DET3", "M0MTZ2DET4","M0MTZ2DET7","M0MTZ2DET8","M0MTZ2DET11","M0MTZ2DET12","M0MTZ3DET2", "M0MTZ3DET3", "M0MTZ3DET4", "M0MTZ3DET5", "M0MTZ4DET2", "M0MTZ4DET3"]);

$("#wfrm_formulario").validate
({
 
  rules: {
    	EMPFACT:{required: function(element) { return obtener_valor('OPCREUINI',0)=='T';}},  
    	SIANEXIMSS:{required: function(element) { return (obtener_valor('OPCREUINI',0)=='T' && obtener_valor('CNTANEXVAL')==2);}},	
    FCHEFREUIN: { required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
                       },
    MOTCANINI: { required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "NOREUINI****AlterT" ;}
                       },
    NBNOM: { required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
                       },
    NBENBANC: { required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
                       },
    NBFACT: { required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
                       },
    NBFINIQ: { required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
                       },
    NBSC: { required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
                       },
    NBCOORDSC: { required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
                       },
    OPCALTAANT: { required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
                       },
    NBCORTO: {required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
	 },
	GRUPO: {required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
					},
	RFC: {required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
	},
	RZN_SOCIAL: {required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
	},
	DIR_FISCAL: {required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
	},
	FCH_1_DISP: {required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
	},      
	FCH_INDUC: {required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
	},  
	ANALRIESG: {required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
	},  
	PORCHONOR: {required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
	},  
	OPCFACTANT: {required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
         	},
	OPCSOLGIN: {required: function(element)  { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
	},
	OPCRPSITIO: {required: function(element) {return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
	},
	OPCPERFORA: {required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
	},
	OPCMANEXT: {required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
	},
	OPCCARTPAT: {required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
	},
	ENVCONT: {required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
	},
	ATENJURID: {required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
	},
	FCHINDUCIN: {required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
	},
	FCHIMPLE: {required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
	},
	GERENCOMER: {required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
	},
	BROKER: {required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
	},
	HONOBROK: {required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
	},
	FINAN_FINIQ: {required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
	},
	PRIM_RIESG: {required: function(element) {return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
	},
	DESC_ACT: {required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}
	}   ,
	DESC_GRUPO: {required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" && obtener_valor( 'GRUPO' )==0 ;}
	}                 

}
});


ValidarFilas("MTZCNTCT",[
["MTZCNTCT1",{required: function(element) { return obtener_valor('OPCREUINI',0)=='T';}}],
["MTZCNTCT5",{email: true, required: function(element) {return obtener_valor('OPCREUINI',0)=='T';}}]
]);


function AgregarFilasContacto(){
	fil=obtener_valor( 'filMTZCNTCT' );
	ValidarFilaDinamica("MTZCNTCT",fil,[
["MTZCNTCT1",{required: function(element) { return obtener_valor('OPCREUINI',0)=='T';}}],
["MTZCNTCT5",{email: true, required: function(element) {return obtener_valor('OPCREUINI',0)=='T';}}]
]);

	return true;
}

asignar_event( "onclick" ,"AgregarFilasContacto()" , "MATNVMTZCNTCT");


ValidarFilas("MTZDET",[
["MTZDET3",{required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}}],
["MTZDET4",{required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}}],
["MTZDET5",{required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}}],
["MTZDET6",{required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}}],
["MTZDET7",{required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}}],
["MTZDET9",{required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}}],
["MTZDET15",{required: function(element) { return $('::MTZDET14::').attr('checked') ==  true && obtener_valor('OPCREUINI',0)=='T';}}],
["MTZDET17",{required: function(element) { return $('::MTZDET16::').attr('checked') ==  true && obtener_valor('OPCREUINI',0)=='T';}}],
["MTZDET19",{required: function(element) { return $('::MTZDET18::').attr('checked') ==  true && obtener_valor('OPCREUINI',0)=='T';}}],
["MTZDET20",{required: function(element) { return $('::MTZDET18::').attr('checked') ==  true && obtener_valor('OPCREUINI',0)=='T';}}],
["MTZDET24",{required: function(element) { return obtener_valor('OPCREUINI',0)=='T';}}]
]);


function AgregarFilasDetalle(){
	fil=obtener_valor( 'filMTZDET' );
	ValidarFilaDinamica("MTZDET",fil,[
["MTZDET3",{required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}}],
["MTZDET4",{required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}}],
["MTZDET5",{required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}}],
["MTZDET6",{required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}}],
["MTZDET7",{required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}}],
["MTZDET9",{required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}}],
["MTZDET15",{required: function(element) { return $('::MTZDET14::').attr('checked') ==  true && obtener_valor('OPCREUINI',0)=='T';}}],
["MTZDET17",{required: function(element) { return $('::MTZDET16::').attr('checked') ==  true && obtener_valor('OPCREUINI',0)=='T';}}],
["MTZDET19",{required: function(element) { return $('::MTZDET18::').attr('checked') ==  true && obtener_valor('OPCREUINI',0)=='T';}}],
["MTZDET20",{required: function(element) { return $('::MTZDET18::').attr('checked') ==  true && obtener_valor('OPCREUINI',0)=='T';}}],
["MTZDET24",{required: function(element) { return obtener_valor('OPCREUINI',0)=='T';}}]
]);

	ValidarFilaDinamica("MTZ2DET",fil,[
["MTZ2DET2",{required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}}],
["MTZ2DET3",{required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}}],
["MTZ2DET4",{required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}}],
["MTZ2DET7",{required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}}],
["MTZ2DET8",{required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}}],
["MTZ2DET11",{required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}}],
["MTZ2DET12",{required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}}]
]);


	ValidarFilaDinamica("MTZ3DET",fil,[
["MTZ3DET2",{required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}}],
["MTZ3DET3",{required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}}],
["MTZ3DET4",{required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}}],
["MTZ3DET5",{required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}}]
]);


	ValidarFilaDinamica("MTZ4DET",fil,[
["MTZ4DET2",{required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}}],
["MTZ4DET3",{required: function(element) {return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}}]
]);
	return true;
}


ValidarFilas("MTZ2DET",[
["MTZ2DET2",{required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}}],
["MTZ2DET3",{required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}}],
["MTZ2DET4",{required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}}],
["MTZ2DET7",{required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}}],
["MTZ2DET8",{required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}}],
["MTZ2DET11",{required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}}],
["MTZ2DET12",{required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}}]
]);

ValidarFilas("MTZ3DET",[
["MTZ3DET2",{required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}}],
["MTZ3DET3",{required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}}],
["MTZ3DET4",{required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}}],
["MTZ3DET5",{required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}}]
]);

ValidarFilas("MTZ4DET",[
["MTZ4DET2",{required: function(element) { return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}}],
["MTZ4DET3",{required: function(element) {return $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ;}}]
]);


function TieneRespIMSS(){

fil=obtener_valor( 'filMTZDET' );
var c=0;
   for(e=1;e<=fil&&c==0;e++){	

	if  ($("#M"+e+"MTZDET12").attr('checked')==true && $("#M"+e+"MTZDET23").val()=="" && $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT" ){
		
	c=1;
	}
   }
	if(c!=0){
		return false;
	}else{
		return true;
	}
   
}

function TieneIMSS(){

fil=obtener_valor( 'filMTZDET' );
var t=0;
   for(e=1;e<=fil&&t==0;e++){	

	if  ($("#M"+e+"MTZDET12").attr('checked')==true){
		
	t=1;
	}
   }
	if(t==1){
		return true;
	}else{
		return false;
	}
   
}

//FUNCIÓN VALIDAR ENVIO
function ValidaEnvio()
{  
      if (!TieneIMSS() && $("#M1MTZOPC1").attr('checked') ) 
           { alertmb("Por favor debe indicar que la nomina manejara IMSS, dado que en la opcion de Alta de Empleado esta marcada",0,1,"Aceptar");  
              return false;
            }

                if ($("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT") 
                  {                               
	    fil=obtener_valor( 'filMTZDET' );
  	    for(e=1;e<=fil;e++){
		if (obtener_valorM('MTZDET', e ,24)=="" || obtenerFloat( obtener_valorM('MTZDET', e ,24),Formatodec) ==0)
                                    {
                                                alertmb("Debe indicar el dia de pago de la nómina de la fila "+e,0,1,"Aceptar");  
			return false;
                                    }
                       }   
	   }

                   if (!validarDias()){
		alertmb("Debe indicar un día entre el 1-5 para las nóminas con periocidad Semanal / Catorcenal ",0,1,"Aceptar");
		return false;
	  }

	if ($("#wfrm_formulario").valid()!=true){
   		alertmb("Por favor complete los campos obligatorios",0,1,"Aceptar");
     		return false;
          	}else{
	      if (obtener_valor('INFICHADEF')=='' && $("input[name='OPCREUINI']:checked").val() ==  "SIREUINI****AlterT"){
		alertmb("Debe generar la ficha técnica antes de enviar",0,1,"Aceptar");
		$("#AGENTE_2658").focus();
		return false;
	     }
                    else
	            return true;
	}
		
}


asignar_event_matriz( "onchange" ,"validarResponsableIMSS(9)" , "MTZDET", 12);
asignar_event_matriz( "onchange" ,"validarResponsableIMSS(9)" , "MTZDET", 9);

//EJECUTAR FUNCIÓN DE VALIDAR ENVIO 
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar" );
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar1" );


/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
