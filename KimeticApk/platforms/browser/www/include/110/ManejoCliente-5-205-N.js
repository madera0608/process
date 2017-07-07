MatrizEstatica( 'MTZTAREA');
MatrizEstatica( 'MTZANEXE');

if (obtener_valor('OPCFACT',0)=='T')
{   OcultarCampo('OPCFACT');
     OcultarCampo('MTZANEXE',3,2);
}
   
if (obtener_valor('INCAMBIO')=='1'){
	MostrarCampo( 'CAMBIOPAGO' );  
}
else{
	OcultarCampo('CAMBIOPAGO');
	$('#TPOPAGOTRA').attr("disabled",true);
	$('#TPOPAGOORD').attr("disabled",true);
	$('#TPOPAGLEY').attr("disabled",true);
	$('#COMENTPAGO').attr("disabled",true);
}

DeshabilitarCheck('MTZTAREA',3);
asignar_event_matriz( "onchange" ,"validarPrecedencia('MTZTAREA')" , "MTZTAREA", 3);
asignar_event_matriz( "onchange" ,"validarUncheck('MTZTAREA')" , "MTZTAREA", 3);

function PagoDeposito(){
	
	if (obtener_valor('OPCDEPOSIT')=='T'){
		MostrarCampo("FCHNOTIF");
		MostrarCampo("FCHPAGO");
		MostrarCampo("MONTPAVAL");
		MostrarCampo("EMPRECEP");
		MostrarCampo("MTZCOMV");
	}else{
		OcultarCampo("FCHNOTIF");
		OcultarCampo("FCHPAGO");
		OcultarCampo("MONTPAVAL");
		OcultarCampo("EMPRECEP");
		OcultarCampo("MTZCOMV");
	}
	return true;
	
}

function PagoProvision(){
	
	if (obtener_valor('OPCPROV')=='T'){
		MostrarCampo("MONTPROV");
		MostrarCampo("MTOPROVDIS");
	}else{
		OcultarCampo("MONTPROV");
		OcultarCampo("MTOPROVDIS");
	}
	return true;
	
}

function PagoFinanciamiento(){
	if (obtener_valor('OPCFINANC')=='T'){
		MostrarGrupo('DATOS DEL FINANCIAMIENTO');

	}else{
		OcultarGrupo('DATOS DEL FINANCIAMIENTO');

	}
	return true;
}


PagoDeposito();
PagoFinanciamiento();
PagoProvision();

CamposObligatorios(["M0MTZANEXE1","M0MTZANEXE2","DESANEXLAY","DESANEXHOJ","DESANEXPREF"]);

//FUNCIÓN VALIDAR ENVIO
function ValidaEnvio(){ 
	if ($("#wfrm_formulario").valid()!=true){
		alertmb("Por favor complete los campos obligatorios",0,1,"Aceptar");
	  	return false;
          	}else{

                                if (finTareas('MTZTAREA',3))
                                 {   alertmb("Por favor indique la completitud de la lista de tareas",0,1,"Aceptar");
		      return false;
                                  }

		if (finTareas('MTZTAREA',3) && !(obtenerFloat(obtener_valor('MTOPAGVAL'), Formatodec) >= obtenerFloat(obtener_valor('MONTPREF'), Formatodec)  && ( (obtener_valor('OPCDEPOSIT')=='T' && obtener_valor('TODOSVAL')==1 && obtener_valor('OPCFINANC')=='T' && obtener_valor('OPAPRFIN',1)=='T') ||   (obtener_valor('OPCFINANC')=='T' && obtener_valor('OPAPRFIN',0)=='T' && obtener_valor('OPCDEPOSIT')=='F')  ||  (obtener_valor('OPCDEPOSIT')=='T' && obtener_valor('TODOSVAL')==1 && obtener_valor('OPCFINANC')=='F') || (obtener_valor('OPCDEPOSIT')=='T' && obtener_valor('TODOSVAL')==1 && obtener_valor('OPCFINANC')=='T' && obtener_valor('OPAPRFIN',0)=='T')) || (obtener_valor('OPCPROV')=='T' && obtener_valor('OPCFINANC')=='F' && obtener_valor('OPCDEPOSIT')=='F') )){
			alertmb("No puede enviar hasta que los pagos sean válidos o el financiamiento aprobado",0,1,"Aceptar");
			return false;
		} else{
			if (finTareas('MTZTAREA',3) && obtenerFloat(obtener_valor('EXCEDENTE'), Formatodec) > 0 && obtener_valor('PROVPEND') > 0 ){
				alertmb("No puede enviar hasta que se registre la provisión pendiente",0,1,"Aceptar");
				return false;
			} else{
				if (finTareas('MTZTAREA',3) && obtener_valor('TPOPAGOTRA')!="T" && obtener_valor('TPOPAGOORD')!="T" && obtener_valor('TPOPAGLEY')!="T"){
					alertmb("Por favor seleccione la forma de pago",0,1,"Aceptar");
					return false;
				} else{
					if (finTareas('MTZTAREA',3) && obtener_valor('M1MTZANEXE1')=="Seleccione"){
						alertmb("Por favor seleccione la hoja de fondeo como anexo para mesa de control",0,1,"Aceptar");
						return false;
					} else{
					if (finTareas('MTZTAREA',3) && obtener_valor('OPCFACT',1)=='T' && obtener_valor('M1MTZANEXE2')=="Seleccione"){
						alertmb("Por favor seleccione la prefactura como anexo para facturación",0,1,"Aceptar");
						return false;
					} 
                                                                                        else{
						return true;
					               }
				}
			} }
		}
	}								
}

$("#wfrm_formulario").validate
({
  rules: { 

		 SIANEXLAY:{required: function(element) { return finTareas('MTZTAREA',3);}},	
		 SIANEXHOJ:{required: function(element) { return finTareas('MTZTAREA',3);}},
                                 SIANEXPREF:{required: function(element) { return obtener_valor('OPCFACT',1)=='T' && finTareas('MTZTAREA',3);}}	   	   
         },
  messages: { 
	SIANEXLAY:"Por favor indique que los layouts fueron adjuntados",
	SIANEXHOJ: "Por favor indique que la hoja de fondeo fue adjuntada",
                SIANEXPREF: "Por favor indique que la prefactura fue adjuntada"
            }
});

ValidarFilas("MTZANEXE",[
["MTZANEXE1",{required: function(element) { return finTareas('MTZTAREA',3);}}],
["MTZANEXE2",{required: function(element) { return obtener_valor('OPCFACT',1)=='T' && finTareas('MTZTAREA',3);}}]
]);

//EJECUTAR FUNCIÓN DE VALIDAR ENVIO	
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar" );
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar1" );
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
