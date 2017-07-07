MatrizEstatica('MTZCONF');

if (obtener_valor('MTOPAGVALF')!=''){

MostrarCampo("MTOPAGVALF");
asignar_valor('OPCPROVF', 'F');
}else{
OcultarCampo("MTOPAGVALF");
}

if (obtener_valor('M1MTZCOMVF1')!=''){

MostrarCampo("MTZCOMVF");
MostrarCampo("MONTPAVALF");

}else{
OcultarCampo("MTZCOMVF");
OcultarCampo("MONTPAVALF");
}

function PagoDeposito(){
	
	if (obtener_valor('OPCDEPF')=='T'){
		MostrarCampo("FCHNOTIFF");
		MostrarCampo("FCHPAGOF");
		MostrarCampo("MONTPAGOF");
		MostrarCampo("SIANEXDEPF");
		MostrarCampo("EMPRECEPF");
		MostrarCampo("MTZCOMPR");
	}else{
		OcultarCampo("FCHNOTIFF");
		OcultarCampo("FCHPAGOF");
		OcultarCampo("MONTPAGOF");
		OcultarCampo("SIANEXDEPF");
		OcultarCampo("EMPRECEPF");
		OcultarCampo("MTZCOMPR");
	}
	return true;
	
}

if  (obtenerFloat( obtener_valor("MTOPRODISF"),Formatodec) <=0) 
    OcultarCampo( "OPCPROVF", 6);


function PagoProvision(){
	
	if (obtener_valor('OPCPROVF')=='T'){
		MostrarCampo("MONTPROVF");
		MostrarCampo("MTOPRODISF");
		MostrarCampo("PROV_OPERF");
	}else{
		OcultarCampo("MONTPROVF");
		OcultarCampo("MTOPRODISF");
		OcultarCampo("PROV_OPERF");
		asignar_valor("MONTPROVF", "");

	}
	return true;
}


PagoDeposito();
PagoProvision();

asignar_event( "onchange" , "PagoDeposito()", "OPCDEPF" );
asignar_event( "onchange" , "PagoProvision()", "OPCPROVF" );

function TipoProv(){
	
	if (obtener_valor('PROV_OPERF')=='T'){
		MostrarCampo("MONTPRONOF");
	}else{
		OcultarCampo("MONTPRONOF");
		asignar_valor("MONTPRONOF", "");
	}

	return true;

}

TipoProv();

asignar_event( "onchange" , "TipoProv()", "PROV_OPERF" );


RegistrarFormula(":MONTPRONOF: + :MONTPROFIF:","MONTPROVF",1);

$("#MONTPRONOF").change();

CamposObligatorios(["M0MTZCOMPR1","M0MTZCOMPR2","M0MTZCOMPR3","M0MTZCOMPR4","DESOPCPAGOF", "DESFCHNOTIFF", "DESDESCPAGOF", "DESFCHPAGOF", "DESMONTPAGOF", "DESANEXDEPF", "DESEMPRECEPF", "DESMONTPRONOF", "DESOPTPOPROVF"]);

$("#EMPRECEPF").change(function() { 
	asignar_valor('IDEMPF','');
	asignar_valor('IDBANCOF','');
	asignar_valor('BANCOF','');
});
if (obtener_valor('COMENTVALF')!=''){

MostrarCampo('COMENTVALF');

}else{
OcultarCampo('COMENTVALF');

}

RegistrarFormula(":MTZCOMPR[{+},3]:+0","MONTPAGOF",1);
$("#M1MTZCOMPR3").change();

RegistrarFormula(":MONTPAGOF: + :MONTPROVF: + :MTOPAGVALF:","MTOPAGTOTF",1);

$("#MONTPAGO").change();
$("#MONTPPROV").change();


$("#wfrm_formulario").validate
({
  rules: { 
	FCHPAGOF:{required: function(element) { return obtener_valor('OPCDEPF')=='T';}},
	MONTPAGOF:{required: function(element) { return obtener_valor('OPCDEPF')=='T';}},
	DESCPAGOF:{required: function(element) { return true;}},
	SIANEXDEPF:{required: function(element) { return obtener_valor('OPCDEPF')=='T';}},
	FCHNOTIFF:{required: function(element) { return obtener_valor('OPCDEPF')=='T';}},
	EMPRECEPF:{required: function(element) { return obtener_valor('OPCDEPF')=='T';}},
	//MONTPROFIF:{required: function(element) {return obtener_valor('OPCPROVF')=='T' && obtener_valor('PROV_FINIF')=='T' ;}},
	MONTPRONOF:{required: function(element) {return obtener_valor('OPCPROVF')=='T' && obtener_valor('PROV_OPERF')=='T' ;}}		
         },
  messages: {
	FCHPAGOF: "Por favor indique la fecha del pago",
	MONTPAGOF:"Por favor indique el monto del pago",
	DESCPAGOF:"Por favor indique la descripción del pago",
	SIANEXDEPF: "Por favor indique que adjunto el comprobante de pago",
	FCHNOTIFF:"Por favor indique la fecha del notificación del pago",
	EMPRECEPF:"Por favor seleccione la empresa receptora",
	//MONTPROFIF:"Por favor indique el monto a tomar de la provisión de finiquito",
	MONTPRONOF:"Por favor indique el monto a tomar de la provisión de nómina"
            }
});

ValidarFilas("MTZCOMPF",[
["MTZCOMPR1",{required: function(element) {  return obtener_valor('OPCDEPF')=='T' ;}}],
["MTZCOMPR2",{required: function(element) {   return obtener_valor('OPCDEPF')=='T' ;}}],
["MTZCOMPR3",{required: function(element) {   return obtener_valor('OPCDEPF')=='T' ;}}],
["MTZCOMPR4",{required: function(element) {   return obtener_valor('OPCDEPF')=='T' ;}}]
]);


asignar_event( "onclick" ,"AgregarFilasComprobante()" , "MATNVMTZCOMPR");

function AgregarFilasComprobante(){
	fil=obtener_valor( 'filMTZCOMPR' );
	ValidarFilaDinamica("MTZCOMPR",fil,[
["MTZCOMPR1",{required: function(element) {  return obtener_valor('OPCDEPF')=='T'  ;}}],
["MTZCOMPR2",{required: function(element) { return obtener_valor('OPCDEPF')=='T' ;}}],
["MTZCOMPR3",{required: function(element) {  return obtener_valor('OPCDEPF')=='T' ;}}],
["MTZCOMPR4",{required: function(element) {  return obtener_valor('OPCDEPF')=='T'  ;}}]
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
		if (obtener_valor('OPCDEPF')=="F" && obtener_valor('OPCPROVF')=="F"){
			alertmb("Por favor seleccione la forma de pago",0,1,"Aceptar");
			return false;
		}else{
			if (obtener_valor('OPCDEPF')=='T' && obtener_valor('IDEMPF')==''){
				alertmb("Por favor seleccione la empresa receptora ",0,1,"Aceptar");
				return false;
			}else{
				if (obtener_valor('OPCPROVF')=="T" && obtener_valor('PROV_OPERF')=="F" && obtener_valor('PROV_FINIF')=="F" ){
					alertmb("Por favor seleccione el tipo de provisión a usar",0,1,"Aceptar");
					return false;
				}else{

					if (obtener_valor('OPCPROVF')=='T' && obtenerFloat(obtener_valor('MONTPROVF'), Formatodec) > obtenerFloat(obtener_valor('MTOPRODISF'), Formatodec)){
						alertmb("El monto a utilizar de provisión no puede ser mayor que el monto disponible",0,1,"Aceptar");
						return false;
					}else{
    						if (obtener_valor('PROV_OPERF')=='T' && obtenerFloat(obtener_valor('MONTPRONOF'), Formatodec) > obtenerFloat(obtener_valor('MTOPRODISF'), Formatodec)){
            							alertmb("El monto a utilizar de provisión de nómina no puede ser mayor al disponible",0,1,"Aceptar");
             							return false;
   						 }else{
    							if (obtener_valor('PROV_FINIF')=='T' && obtenerFloat(obtener_valor('MONTPROFIF'), Formatodec) > obtenerFloat(obtener_valor('MTOPROFDIS'), Formatodec)){
            								alertmb("El monto a utilizar de provisión de finiquito no puede ser mayor al disponible",0,1,"Aceptar");
             								return false;
   		 					}else{
								if (obtener_valor('MTOPAGVALF')=='' && obtener_valor('OPCPROVF')=='T' && obtenerFloat(obtener_valor('MONTPROVF'), Formatodec) > obtenerFloat(obtener_valor('MONTAFIN'), Formatodec)){
									alertmb("El monto a utilizar de provisión no puede ser mayor que el monto financiado",0,1,"Aceptar");
									return false;
								}else{								
										if (obtener_valor('MTOPAGVALF')!='' && obtener_valor('OPCPROVF')=='T' && obtenerFloat(obtener_valor('MONTPROVF'), Formatodec) > (obtenerFloat(obtener_valor('MONTAFIN'), Formatodec) - obtenerFloat(obtener_valor('MTOPAGVALF'), Formatodec)).toFixed(2)){
											alertmb("El monto a utilizar de provisión no puede ser mayor que el monto financiado",0,1,"Aceptar");
											return false;
										}else{
												return true;
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	


//EJECUTAR FUNCIÓN DE VALIDAR ENVIO	
asignar_event( "onclick" , "ValidaEnvio() ", "wl_baprobar" );
asignar_event( "onclick" , "ValidaEnvio() ", "wl_baprobar1" );
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
