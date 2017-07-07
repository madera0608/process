RegistrarFormula(":MONTPRE: + :MONTSERV:" , "MONTPREF"  );

if (obtener_valor('OPCTPOBAJA',0) =='T'||obtener_valor('OPCTPOBAJA',3) =='T')
 MostrarCampo( "PAGOTRANSF", 6 );
else
 OcultarCampo( "PAGOTRANSF", 6 );

if (obtener_valor('OPCTPOBAJA',1) =='T')
{
   MostrarCampo( 'PROPFIN');
  OcultarCampo('MTOFINIQ');
  OcultarCampo('MONTPRE');
  OcultarCampo('MONTSERV');
  OcultarCampo('MONTPREF');
}
else
{
  OcultarCampo( 'PROPFIN' );
  MostrarCampo('MTOFINIQ');
  MostrarCampo('MONTPRE');
  MostrarCampo('MONTSERV');
  MostrarCampo('MONTPREF');
 }


if (obtener_valor('OPCACEPFIN',0)=='F' && obtener_valor('OPCACEPFIN',1)=='F')
	asignar_valor('OPCACEPFIN','T',0);


/*if (obtener_valor('PAGOLEY')=='T' && obtener_valor('OPCERRFINI',1)=='T'){
	MostrarCampo('SIANEXAUTO');
}else{
	OcultarCampo('SIANEXAUTO');
	if (obtener_valor('OPCERRFINI',0)=='T')
		asignar_valor('PAGOLEY','F')
}

$("#PAGOLEY").click(function() {

if (obtener_valor('PAGOLEY')=='T'){
	MostrarCampo('SIANEXAUTO');
}else{
	OcultarCampo('SIANEXAUTO');
} });
*/

HabilitaCampos("OPCACEPFIN","NOACEPFIN",[[1,"OPCERRFINI"]]);
if (obtener_valor("OPCACEPFIN",0)=='T'){
	asignar_valor("OPCERRFINI", "T", 0);
}

HabilitaCampos("OPCERRFINI","NOERRFINI",[ [2, "COMERRFINI"], [1,"CODFACT"],[1,"CONCOB"],[1,"PERIOC"], [1,"PERIODO"], [1,"FCHDIS"],  [1,"PAGOTRANS"], [1, "PAGOHEQUE"] , [1, "PAGOLEY"] ,  [1, "MTZCONF"],   [3, "DATOS DEL CORREO ELECTRÓNICO"] ]);

$("input[name='OPCACEPFIN']").click(function() {

HabilitaCampos("OPCACEPFIN","NOACEPFIN",[[1,"OPCERRFINI"]]);

if (obtener_valor("OPCACEPFIN",0)=='T'){
	asignar_valor("OPCERRFINI", "T", 0);
}
	HabilitaCampos("OPCERRFINI","NOERRFINI",[ [2, "COMERRFINI"], [1,"CODFACT"],[1,"CONCOB"],[1,"PERIOC"], [1,"PERIODO"], [1,"FCHDIS"],  [1,"PAGOTRANS"], [1, "PAGOHEQUE"] , [1, "PAGOLEY"] ,  [1, "MTZCONF"],  [3, "DATOS DEL CORREO ELECTRÓNICO"] ]);

/*if (obtener_valor('PAGOLEY')=='T' && obtener_valor('OPCERRFINI',1)=='T'){
	MostrarCampo('SIANEXAUTO');
}else{
	OcultarCampo('SIANEXAUTO');
	if (obtener_valor('OPCERRFINI',0)=='T')
		asignar_valor('PAGOLEY','F')
}*/
} );


$("input[name='OPCERRFINI']").click(function() {
	HabilitaCampos("OPCERRFINI","NOERRFINI",[ [2, "COMERRFINI"], [1,"CODFACT"],[1,"CONCOB"],[1,"PERIOC"], [1,"PERIODO"], [1,"FCHDIS"],  [1,"PAGOTRANS"], [1, "PAGOHEQUE"] , [1, "PAGOLEY"] ,  [1, "MTZCONF"],   [3, "DATOS DEL CORREO ELECTRÓNICO"] ]);

/*if (obtener_valor('PAGOLEY')=='T' && obtener_valor('OPCERRFINI',1)=='T'){
	MostrarCampo('SIANEXAUTO');
}else{
	OcultarCampo('SIANEXAUTO');
	if (obtener_valor('OPCERRFINI',0)=='T')
		asignar_valor('PAGOLEY','F')
}*/
} );

CamposObligatorios(["DESANEXAUTO", "DESOPCERRFINI", "M0MTZCONF1","M0MTZCONF2","M0MTZCONF3","M0MTZCONF4","DESMOTSERV","DESCONCOB","DESPERIOC","DESPERIODO", "DESFCHDIS", "DESMTOFINIQ", "DESMONTPRE", "DESMONTSERV", "DESMONTPREF", "DESTPOPAGOB", "M0MTZANEXE1"]);


$("#PERIODO").setMask("99");
MatrizEstatica('MTZCONF');
//FUNCIÓN VALIDAR ENVIO
function ValidaEnvio()
{        if (obtener_valor('OPCTPOBAJA',1) =='T')  
              propAltoValor();
          if ($("#wfrm_formulario").valid()!=true){
			alertmb("Por favor complete los campos obligatorios",0,1,"Aceptar");
	  		return false;
          }else{
				if (obtener_valor('OPCACEPFIN',1)=="T"  && obtener_valor('OPCERRFINI',1)=="T" && obtener_valor('PERIODO').length<2){
					alertmb("El período debe estar representado por dos caracteres",0,1,"Aceptar");
					return false;
				}else{
                                                          if (obtener_valor('OPCACEPFIN',1)=="T" && obtener_valor('OPCERRFINI',1)=="T"  && obtener_valor('PAGOTRANSF')!="T" && obtener_valor('PAGOCHEQUE')!="T" && obtener_valor('PAGOLEY')!="T" && obtener_valor('PAGOCERTIF')!="T" && obtener_valor('PAGOEFEC')!="T"){
						alertmb("Por favor seleccione la forma de pago",0,1,"Aceptar");
						return false;
					}else{
					return true;
					}
				}
	}
}

$("#wfrm_formulario").validate
({
  rules: { 
  	FCHDIS:{required: function(element) { return obtener_valor('OPCACEPFIN',1)=="T" && obtener_valor('OPCERRFINI',1)=="T";}},
	MTOFINIQ:{required: function(element) { return obtener_valor('OPCTPOBAJA',1)!='T' && obtener_valor('OPCACEPFIN',1)=="T" && obtener_valor('OPCERRFINI',1)=="T";}},
	MONTPRE:{required: function(element) { return obtener_valor('OPCTPOBAJA',1)!='T' && obtener_valor('OPCACEPFIN',1)=="T" && obtener_valor('OPCERRFINI',1)=="T";}},
	MONTSERV:{required: function(element) { return obtener_valor('OPCTPOBAJA',1)!='T' && obtener_valor('OPCACEPFIN',1)=="T" && obtener_valor('OPCERRFINI',1)=="T";}},
	MONTPREF:{required: function(element) { return obtener_valor('OPCTPOBAJA',1)!='T' && obtener_valor('OPCACEPFIN',1)=="T" && obtener_valor('OPCERRFINI',1)=="T";}},
	PERIODO:{required: function(element) { return obtener_valor('OPCACEPFIN',1)=="T" && obtener_valor('OPCERRFINI',1)=="T";}},
	M1MTZCONF1:{required: function(element) { return obtener_valor('OPCACEPFIN',1)=="T" && obtener_valor('OPCERRFINI',1)=="T";}},
	M1MTZCONF2:{required: function(element) { return obtener_valor('OPCACEPFIN',1)=="T" && obtener_valor('OPCERRFINI',1)=="T";}},
	M1MTZCONF3:{required: function(element) { return obtener_valor('OPCACEPFIN',1)=="T" && obtener_valor('OPCERRFINI',1)=="T";}},
	M1MTZCONF4:{required: function(element) { return obtener_valor('OPCACEPFIN',1)=="T" && obtener_valor('OPCERRFINI',1)=="T";}}
//	SIANEXAUTO:{required: function(element) { return obtener_valor('OPCACEPFIN',1)=="T" && obtener_valor('OPCERRFINI',1)=="T" && obtener_valor('PAGOLEY')=="T";}}		   
         },
  messages: { 
	PERIODO: "Por favor indique el periodo",
	MONTSERV: "Por favor indique el monto de los adicionales",
	M1MTZCONF1:"Por favor seleccione el contacto que confirmo la prenómina",
	M1MTZCONF2:"Por favor indique la fecha de confirmación",
	M1MTZCONF3:"Por favor indique la hora de confirmación",
	M1MTZCONF4: "Por favor seleccione el canal utilizado para la confirmación"
            }
});


ValidarFilas("MTZANEXE",[
["MTZANEXE1",{required: function(element) { return obtener_valor('OPCACEPFIN',1)=="T" && obtener_valor('OPCERRFINI',1)=="T";}}]
]);

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

if (obtener_valor('PERIODO').length==2){
	var periodo = obtener_valor('PERIODO');
	var codigo= obtener_valor('CODFACT');
	var parte1=codigo.substring(0,15);
	var parte2=codigo.substring(17);
	var resultado=parte1+periodo+parte2;
	asignar_valor('CODFACT', resultado);
}


asignar_event( "onchange", "cambio_periodo()", 'PERIODO');

//EJECUTAR FUNCIÓN DE VALIDAR ENVIO	
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar" );
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar1" );


$("#MTOFINIQ").blur( function() {
              if (obtener_valor('MONTPRE')!="" )
                   if ( obtenerFloat(obtener_valor('MTOFINIQ'), Formatodec)<obtenerFloat(obtener_valor('MONTPRE'), Formatodec) )
                     {
                              alertmb("El monto del finiquito no puede ser menor al monto de la dispersión",0,1,"Aceptar");
                              asignar_valor("MTOFINIQ","");
                     }
} );

$("#MONTPRE").blur( function() {
              if (obtener_valor('MTOFINIQ')!="" )
                   if ( obtenerFloat(obtener_valor('MTOFINIQ'), Formatodec)<obtenerFloat(obtener_valor('MONTPRE'), Formatodec) )
                           {
                              alertmb("El monto de la dipersión no puede ser mayor al monto del finiquito",0,1,"Aceptar");
                              asignar_valor("MONTPRE","");
                           }

              if (obtener_valor('MONTSERV')!="" )
                   if ( obtenerFloat(obtener_valor('MONTPRE'), Formatodec)<obtenerFloat(obtener_valor('MONTSERV'), Formatodec) )
                            {
                               alertmb("El monto de la dispersión no puede ser menor al monto de los adicionales",0,1,"Aceptar");
                               asignar_valor("MONTPRE","");
                            }

} );

$("#MONTSERV").blur( function() {
              if (obtener_valor('MONTPRE')!="" )
                   if ( obtenerFloat(obtener_valor('MONTPRE'), Formatodec)<obtenerFloat(obtener_valor('MONTSERV'), Formatodec) )
                        {
                              alertmb("El monto de adicionales no puede ser mayor al monto de la dispersión",0,1,"Aceptar");
                              asignar_valor("MONTSERV","");
                         }  
} );

RegistrarFormula( ":PROPFIN[*,3]: + :PROPFIN[*,4]: + 0 ", "PROPFIN[*,5]" , 1 );

function propAltoValor()
{
   filas = obtener_valor('filPROPFIN');
   filAltoValor = 1;

     for(i=2;i<=filas;i++)
    { 
         if (obtenerFloat(obtener_valorM('PROPFIN',filAltoValor,2),Formatodec)<obtenerFloat(obtener_valorM('PROPFIN',i,2),Formatodec))
	        filAltoValor=i; 
   }
     asignar_valor( 'MTOFINIQ' , obtener_valorM('PROPFIN',filAltoValor,2));
     asignar_valor( 'MONTPRE' ,  obtener_valorM('PROPFIN',filAltoValor,3));
     asignar_valor( 'MONTSERV' , obtener_valorM('PROPFIN',filAltoValor,4));
     asignar_valor( 'MONTPREF' , obtener_valorM('PROPFIN',filAltoValor,5))
 }

        function valFiniquito()
	       {
              fila= get_fila("PROPFIN");
			  if (obtener_valorM('PROPFIN',fila,2)!="" )
                   if ( obtenerFloat(obtener_valorM('PROPFIN',fila,2), Formatodec)<obtenerFloat(obtener_valorM('PROPFIN',fila,2), Formatodec) )
                     {
                              alertmb("El monto del finiquito no puede ser menor al monto de la dispersión",0,1,"Aceptar");
                              asignar_valorM("PROPFIN","",fila,2);
							  return false;
                     }
			   return true;		 
            }
			
		function valDispersion()
           {  
              fila= get_fila("PROPFIN");		   
              if (obtener_valorM('PROPFIN',fila,2)!="" )
                   if ( obtenerFloat(obtener_valorM('PROPFIN',fila,2), Formatodec)<obtenerFloat(obtener_valorM('PROPFIN',fila,3), Formatodec) )
                           {
                              alertmb("El monto de la dipersión no puede ser mayor al monto del finiquito",0,1,"Aceptar");
                              asignar_valorM("PROPFIN","",fila,3);
							  return false;
                           }

              if (obtener_valorM('PROPFIN',fila,3)!="" )
                   if ( obtenerFloat(obtener_valorM('PROPFIN',fila,3), Formatodec)<obtenerFloat(obtener_valorM('PROPFIN',fila,4), Formatodec) )
                            {
                              alertmb("El monto de la dispersión no puede ser menor al monto de los adicionales",0,1,"Aceptar");
                              asignar_valorM("PROPFIN","",fila,3);
							  return false;
                            }
			  return true;				
           } 

        function valAdicionales()
		   {
		      fila= get_fila("PROPFIN");		   
              if (obtener_valorM('PROPFIN',fila,3)!="" )
                   if ( obtenerFloat(obtener_valorM('PROPFIN',fila,3), Formatodec)<obtenerFloat(obtener_valorM('PROPFIN',fila,4), Formatodec) )
                        {
                              alertmb("El monto de adicionales no puede ser mayor al monto de la dispersión",0,1,"Aceptar");
                              asignar_valorM("PROPFIN","",fila,4);
							  return false;
                         }  
			  return true; 			 
           } 

asignar_event_matriz( "onblur" , "valFiniquito()" , "PROPFIN" , 2 );
asignar_event_matriz( "onblur" , "valDispersion()" , "PROPFIN" , 3 );
asignar_event_matriz( "onblur" , "valAdicionales()" , "PROPFIN" , 4 );

if (obtener_valorM('PROPFIN',1,1)=="")
   asignar_valorM('PROPFIN','No',1,7);
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
