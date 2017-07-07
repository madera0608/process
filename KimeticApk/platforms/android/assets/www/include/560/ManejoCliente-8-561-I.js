
function MontoProv(){

	if (obtener_valor('PROVOPER')=='T'){
		MostrarCampo('MONTUTOPER');
	}else{
		OcultarCampo('MONTUTOPER');
		asignar_valor('MONTUTOPER','');
	}

	
/*	if (obtener_valor('PROVFINIQ')=='T'){
		MostrarCampo('MONTUTFINI');
	}else{
		OcultarCampo('MONTUTFINI');
		asignar_valor('MONTUTFINI','');
	}*/


return true;

}

MontoProv();


asignar_event( "onchange" , "MontoProv()", "PROVOPER" );
asignar_event( "onchange" , "MontoProv()", "PROVFINIQ" );


function HabilitarFactura(){

	if (obtener_valor('OPCEXFACT',0)=='T'){
		MostrarGrupo('DATOS DE LA FACTURA');
	}else{
		OcultarGrupo('DATOS DE LA FACTURA');
	}

return true;

}

HabilitarFactura();

asignar_event( "onclick" , "HabilitarFactura()", "OPCEXFACT" );

RegistrarFormula(":PROV_OPER: + :PROV_FINIQ:","PROV_TOTAL",1);

$("#PROV_OPER").change();
//$("#PROV_FINIQ").change();

RegistrarFormula(":MONTUTOPER: + :MONTUTFINI:","MONTUTTOT",1);

$("#MONTUTOPER").change();
//$("#MONTUTFINI").change();


CamposObligatorios(["DESMONTUTOPER","DESMONTUTFINI", "DESPROVOPER","DESPROVFINIQ", "DESCODFACTU", "DESOPCTPOPROV"]);

function ValidaEnvio()
{  
    if ($("#wfrm_formulario").valid()!=true){
            alertmb("Por favor complete los campos obligatorios",0,1,"Aceptar");
             return false;
    }else{
    	if (obtener_valor('PROVOPER')=='F' && obtener_valor('PROVFINIQ')=='F'){
            		alertmb("Debe seleccionar que tipo de provisión va a utilizar",0,1,"Aceptar");
             		return false;
   	 }else{
    		if (obtener_valor('PROVOPER')=='T' && obtenerFloat(obtener_valor('MONTUTOPER'), Formatodec) > obtenerFloat(obtener_valor('PROV_OPER'), Formatodec)){
            			alertmb("El monto a utilizar de provisión de nómina no puede ser mayor al disponible",0,1,"Aceptar");
             			return false;
   		 }else{
    			if (obtener_valor('PROVFINIQ')=='T' && obtenerFloat(obtener_valor('MONTUTFINI'), Formatodec) > obtenerFloat(obtener_valor('PROV_FINIQ'), Formatodec)){
            				alertmb("El monto a utilizar de provisión de finiquito no puede ser mayor al disponible",0,1,"Aceptar");
             				return false;
   		 	}else{
    				if (obtenerFloat(obtener_valor('MONTUTTOT'), Formatodec) > obtenerFloat(obtener_valor('MTOPAGAR'), Formatodec)){
            					alertmb("El monto total a utilizar de provisión no puede ser mayor al monto a pagar",0,1,"Aceptar");
             					return false;
   		 		}else{
  					return true;
				}
			}
		}
	}
   }
}

$("#wfrm_formulario").validate({
  rules: { 
           MONTUTOPER:    {required: function(element) { return obtener_valor('PROVOPER')=='T';}},
           MONTUTFINI: {required: function(element) { return obtener_valor('PROVFINIQ')=='T';}},
           CODFACTU: {required: function(element) { return obtener_valor('OPCEXFACT',0)=='T';}}   
         },
  messages: {
	MONTUTOPER: "Por favor indique el monto a utilizar de provisión de nómina",
	MONTUTFINI:"Por favor indique el monto a utilizar de provisión de finiquito",
	CODFACTU:"Por favor indique el código de facturación de la factura a pagar"
            }
});

//EJECUTAR FUNCIÓN DE VALIDAR ENVIO 
asignar_event( "onclick" , "ValidaEnvio()", "wl_bsolicitar" );
asignar_event( "onclick" , "ValidaEnvio()", "wl_bsolicitar1" );
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
