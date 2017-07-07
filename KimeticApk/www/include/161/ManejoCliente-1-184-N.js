OcultarGrupo('Funcional');

MatrizEstatica( 'MTZ8TARE');
DeshabilitarCheck('MTZ8TARE',3);
asignar_event_matriz( "onchange" ,"validarPrecedencia('MTZ8TARE')" , "MTZ8TARE", 3);
asignar_event_matriz( "onchange" ,"validarUncheck('MTZ8TARE')" , "MTZ8TARE", 3);


RegistrarFormula(":MTZDET[{+},7]:","CNTEMP",1);

$("#M1MTZDET7").change();

CamposObligatorios(["DESANEXCOMP","DESOPCERRIMSS"]);


//FUNCIÓN VALIDAR ENVIO
function ValidaEnvio()
{  
          if ($("#wfrm_formulario").valid()!=true){
			alertmb("Por favor complete los campos obligatorios",0,1,"Aceptar");
	  		return false;
          }else{
	if (obtener_valor('OPCERRIMSS',0)=='F' && obtener_valor('OPCERRIMSS',1)=='F' && finTareas('MTZ8TARE',3)){
			alertmb("Por favor complete los campos obligatorios",0,1,"Aceptar");
	  		return false;
	}
	else
		return true;
	}
}

$("#wfrm_formulario").validate
({
  rules: { 
		SIANEXCOMP: {required: function(element) { return finTareas('MTZ8TARE',3);}}	   
         }
});

/*ValidarFilas("MTZ3ANEX",[
["MTZ3ANEX1",{required: function(element) { return finTareas('MTZ8TARE',3) ;}}]
]);*/

function EnviarIMSS(){


	if(obtener_valor('OPCAPRALT',0)=='T' || (obtener_valor('OPCINDUC',0)=='T' && obtener_valor('OPCAPRALT',0)!='T' )){

		return true;
	}else{
		alert('No puede continuar hasta que se autoricen las altas antes de inducción  o se haga la inducción');
			OcultarCampo('wl_baprobar');
OcultarCampo('wl_baprobar1');
		return false;
	}


}

EnviarIMSS();




//EJECUTAR FUNCIÓN DE VALIDAR ENVIO	
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar" );
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar1" );
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
