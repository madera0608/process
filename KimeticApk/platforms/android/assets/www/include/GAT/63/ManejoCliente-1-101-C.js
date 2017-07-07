function TRANSAC(){

if (obtener_valor('ES_TRANSAC',1)=='T')
  {
    OcultarGrupo( "DESBLOQUEO DEL ABONO" );  
    OcultarGrupo( "ABONO DE INTERESES" ); 
    OcultarGrupo( "DEBITAR ABONO" );
  }

return true;
}

asignar_event("onclick" , "TRANSAC()" ,"ES_TRANSAC");

TRANSAC();




function DESBLOQUEO()
{
  if (obtener_valor("REC_AN",1)=='Procedente' && obtener_valor('ABONO',0)=='T' && obtener_valor('APRUEBARES',0)=='T')
  {
    //alertmb( 'Desbloquear monto abonado temporal y Depositar Intereses', 2 , 1 ,  "Aceptar");
    MostrarGrupo( "DESBLOQUEO DEL ABONO" );  
    MostrarGrupo( "ABONO DE INTERESES" ); 
    OcultarGrupo( "DEBITAR ABONO" );
    return false;
   }
  
  if (obtener_valor("REC_AN",1)=='No Procedente' && obtener_valor('ABONO',0)=='T' && obtener_valor('APRUEBARES',0)=='T')
  {
    //alertmb( 'Desbloquear monto abonado temporal y Debitar monto abonado temporal ', 2 , 1 ,  "Aceptar");
    MostrarGrupo( "DESBLOQUEO DEL ABONO" );  
    OcultarGrupo( "ABONO DE INTERESES" ); 
    MostrarGrupo( "DEBITAR ABONO" );
    return false;
   }   
 
if (obtener_valor("REC_AN",1)=='Procedente' && obtener_valor('ABONO',0)=='T' && obtener_valor('APRUEBARES',0)!='T' && obtener_valor('APRUEBARES',0)!='T')
  {
    OcultarGrupo( "DESBLOQUEO DEL ABONO" );  
    OcultarGrupo( "ABONO DE INTERESES" ); 
    OcultarGrupo( "DEBITAR ABONO" );
    return false;
  }

if (obtener_valor("REC_AN",1)=='No Procedente' && obtener_valor('ABONO',0)=='T' && obtener_valor('APRUEBARES',0)!='T' && obtener_valor('APRUEBARES',0)!='T')
  {
    OcultarGrupo( "DESBLOQUEO DEL ABONO" );  
    OcultarGrupo( "ABONO DE INTERESES" ); 
    OcultarGrupo( "DEBITAR ABONO" );
    return false;
  }

return true;
}
asignar_event("onclick" , "DESBLOQUEO()" ,"APRUEBARES");

DESBLOQUEO();

function ABONO(){

if (obtener_valor('ABONO',0)=='T')
  {
    MostrarCampo("FEABONO");
    MostrarCampo("OBSABONO");
    MostrarCampo("MTO_ABONO");
    MostrarCampo("CTA_ABONO");
    MostrarCampo("CTA_INTER");
    MostrarCampo("PORC_INTER");
    MostrarCampo("EVEN_CRE");
    MostrarCampo("MENSAJE");
    MostrarCampo("NUM_CTA1");
    MostrarCampo("EVEN_CRE2");
    MostrarCampo("MENSAJE2");
  }
if (obtener_valor('ABONO',1)=='T')
  {
    OcultarCampo("FEABONO");
    OcultarCampo("OBSABONO");   
    OcultarCampo("MTO_ABONO"); 
    OcultarCampo("CTA_ABONO");
    OcultarCampo("CTA_INTER");
    OcultarCampo("PORC_INTER");
    OcultarCampo("EVEN_CRE");
    OcultarCampo("MENSAJE");
    OcultarCampo("NUM_CTA1");
    OcultarCampo("EVEN_CRE2");
    OcultarCampo("MENSAJE2");
  }

if (obtener_valor('ABONO',0)!='T' && obtener_valor('ABONO',1)!='T' )
  {
    OcultarCampo("FEABONO");
    OcultarCampo("OBSABONO");   
    OcultarCampo("MTO_ABONO");    
    OcultarCampo("CTA_ABONO");
    OcultarCampo("CTA_INTER");
    OcultarCampo("PORC_INTER");
    OcultarCampo("EVEN_CRE");
    OcultarCampo("MENSAJE");
    OcultarCampo("NUM_CTA1");
    OcultarCampo("EVEN_CRE2");
    OcultarCampo("MENSAJE2");
  }
return true;
}

asignar_event("onclick" , "ABONO()" ,"ABONO");

ABONO();

function ES_TRANSAC(){

if (obtener_valor('ES_TRANSAC',0)=='T')
  {
    MostrarCampo("ID_REC");
    MostrarCampo("TRANSAC");
    MostrarCampo("TRANSHIS");
    OcultarCampo("FE_OP");
    OcultarCampo("NUM_INS");
    MostrarGrupo( "ABONO TEMPORAL EN CUENTA DEL CLIENTE" );
  }
if (obtener_valor('ES_TRANSAC',1)=='T')
  {
    OcultarCampo("ID_REC");
    OcultarCampo("TRANSAC");
    OcultarCampo("TRANSHIS");
    MostrarCampo("FE_OP");
    MostrarCampo("NUM_INS");
    OcultarGrupo( "ABONO TEMPORAL EN CUENTA DEL CLIENTE" );
  }

if (obtener_valor('ES_TRANSAC',0)!='T' && obtener_valor('ES_TRANSAC',1)!='T' )
{
    OcultarCampo("ID_REC");
    OcultarCampo("TRANSAC");
    OcultarCampo("TRANSHIS"); 
    OcultarCampo("FE_OP");
    OcultarCampo("NUM_INS");
    OcultarGrupo( "ABONO TEMPORAL EN CUENTA DEL CLIENTE" );   
}
return true;
}

asignar_event("onclick" , "ES_TRANSAC()" ,"ES_TRANSAC");

ES_TRANSAC();

function mostrar_fila(){ 
    var fila = id_fila(); 
    var NUFILA = obtener_valorM( "TRANSAC" , fila , 1 , 1);
    asignar_valorM( "TRANSHIS" , NUFILA , 1 , 1 );
    
    var NUFILA = obtener_valorM( "TRANSAC" , fila , 2 , 1);
    asignar_valorM( "TRANSHIS" , NUFILA , 1 , 2 );

    var NUFILA = obtener_valorM( "TRANSAC" , fila , 3 , 1);
    asignar_valorM( "TRANSHIS" , NUFILA , 1 , 3 );

    var NUFILA = obtener_valorM( "TRANSAC" , fila , 4 , 1);
    asignar_valorM( "TRANSHIS" , NUFILA , 1 , 4 );

    var NUFILA = obtener_valorM( "TRANSAC" , fila , 5 , 1);
    asignar_valorM( "TRANSHIS" , NUFILA , 1 , 5 );

    var NUFILA = obtener_valorM( "TRANSAC" , fila , 6 , 1);
    asignar_valorM( "TRANSHIS" , NUFILA , 1 , 6 );

    var NUFILA = obtener_valorM( "TRANSAC" , fila , 7 , 1);
    asignar_valorM( "TRANSHIS" , NUFILA , 1 , 7 );

    var NUFILA = obtener_valorM( "TRANSAC" , fila , 8 , 1);
    asignar_valorM( "TRANSHIS" , NUFILA , 1 , 8 );

return(true); 
}
asignar_event_matriz("onclick" , "mostrar_fila()" ,"TRANSAC" ,9);

MatrizEstatica( "TRANSHIS");
MatrizEstatica( "TRANSAC");
MatrizEstatica( "INF_AD_P");
MatrizEstatica( "ID_REC");
OcultarGrupo("Funcional");
OcultarCampo("RECREC");
OcultarCampo("RECFAL");


MatrizEstatica('RIF');

function ValidarRIF(nbCMP)
{

   var fmtRIF = /^[0-9]+\-[0-9]{1}$/i;
   var strRIF =  document.getElementById(nbCMP).value + '';
   var st = fmtRIF.test(strRIF);
   if (!st && strRIF != '')
     {
       alertmb( 'El formato del R.I.F es 999999999-9 . Por favor introduzca de nuevo el dato del R.I.F', 2 , 1 ,  "Aceptar");
       document.getElementById(nbCMP).focus();
      }  

   return st; 
}

//asignar_event_matriz( "onblur" , "ValidarRIF('M1RIF2')" , "RIF" , 2 );

function ValidarTlf(nbCMP)
{
   var fila = id_fila();
   nbCMP = "M" + fila + nbCMP;
   var fmtNro = /^[0-9]{7}$/;
   var strNro =  document.getElementById(nbCMP).value + '';
   var st = fmtNro.test(strNro);
   if (!st && strNro!='')
     {
       alertmb( 'El formato del número es 9999999 . Por favor introduzca de nuevo el dato del telefóno', 2 , 1 ,  "Aceptar");
       document.getElementById(nbCMP).focus();
      }  
   return st; 
}

asignar_event_matriz( "onblur" , "ValidarTlf('TLF3')" , "TLF" , 3 );
asignar_event_matriz( "onblur" , "ValidarTlf('TLFREPLE3')" , "TLFREPLE" , 3 );

function ValidaEmail(cmpEmail)
  {
   var strEmail = obtener_valor( cmpEmail ) + '';
    if (!checkEmail (strEmail) && strEmail != '') 
       {
         alertmb( 'El correo electrónico no es valido', 2 , 1,"Aceptar");
         document.getElementById(cmpEmail).focus();
       }
    return true;
  }

asignar_event( "onblur" , "ValidaEmail( 'CORELECT' )" , "CORELECT" );


OcultarCampo('wl_bguardar', 2 );
asignar_valor( "wl_bsolicitar", "Enviar trámite");
asignar_valor( "wl_bsolicitar1", "Enviar trámite");

function tpopers(){
if (obtener_valor('TPOPERS',0)=='T')
  {
    cambiar_nombre("NBSOLEXT","Apellido(s) y Nombre(s)",4);
    cambiar_nombre("RIF","Cédula",4);
    MostrarCampo("RIF");
    MostrarCampo("NBSOLEXT");
    MostrarCampo("TLF");
    MostrarCampo("CORELECT");
  }
if (obtener_valor('TPOPERS',1)=='T')
  {
    MostrarCampo("RIF");
    cambiar_nombre("NBSOLEXT","Razón Social",4);
    cambiar_nombre("RIF","RIF",4);
    MostrarCampo("NBSOLEXT");
    MostrarCampo("TLF");
    MostrarCampo("CORELECT");
  }

if (obtener_valor('TPOPERS',0)!='T' && obtener_valor('TPOPERS',1)!='T' )
{
    OcultarCampo("RIF");
    OcultarCampo("NBSOLEXT");
    OcultarCampo("TLF");
    OcultarCampo("CORELECT");
}
return true;
}

asignar_event("onclick" , "tpopers()" ,"TPOPERS");

tpopers();

MatrizEstatica('MTRECBAS');
MatrizEstatica('MTCARAC');




function HabAgente(matriz,matrizrec,matrizfalt,colMand,colRec,colRechist,nbAgente,nbAgente1)
{
  var filas = obtener_valor("fil"+matriz);
  var salir = false;


  OcultarCampo(nbAgente);
  OcultarCampo(nbAgente1);

  SeleccionaFila(matrizrec);
  BorrarFila(matrizrec,'TT');
   
  SeleccionaFila(matrizfalt);
  BorrarFila(matrizfalt,'TT');


  //Controla los recaudos
  var k =1;
  var j =1;
  for(var i=1;i<=filas;i++)
   { 
     if (obtener_valorM(matriz,i,colRec)=='No' && !salir)
        {  salir = true;
           MostrarCampo(nbAgente1)
           asignar_valor('GENREQ','X'); 
           MostrarCampo(nbAgente1);
        }

     //Guarda informacion de lo recibido
     
     if (obtener_valorM(matriz,i,colRec)=='Si' && obtener_valorM(matriz,i,colRechist)=='')
      {
       asignar_valorM( matrizrec , obtener_valorM( matriz , i , 1) , k , 1 ); 
       asignar_valorM( matrizrec , obtener_valorM( matriz , i , 4) , k , 2 );
       k=k+1; 
       MostrarCampo(nbAgente);
       IngresarFila(matrizrec,'TT');   
      } 

     //Guarda informacion en la matriz de recaudos faltantes

     if (obtener_valorM(matriz,i,colRec)=='No')
       { 
         asignar_valorM( matrizfalt , obtener_valorM( matriz , i , 1) , j , 1 );
         asignar_valorM( matrizfalt , obtener_valorM( matriz , i , 4) , j , 2 );
         j=j+1;
         IngresarFila(matrizfalt,'TT');   
       }

   }

 return true;
}

asignar_event_matriz( "onblur" , "HabAgente('MTRECBAS','RECREC','RECFAL',4,6,8,'agente_12','agente_9')" ,"MTRECBAS", 6 );

HabAgente('MTRECBAS','RECREC','RECFAL',4,6,8,'agente_12','agente_9');

function ValidaEnvio()
{
  if (obtener_valor('INGENREC')!='X')
  {
    alertmb( 'Debe generar el acta de recepción', 2 , 1 ,  "Aceptar");   
    document.getElementById('AGENTE_12').focus();
    return false;
  }
     return true;
}

asignar_event("onclick" , "ValidaEnvio()", "wl_bsolicitar");
asignar_event("onclick" , "ValidaEnvio()", "wl_bsolicitar1");



function MostrarGruposTramite()
  {
if(obtener_valor("TPOSOLCITU")=="")
{
    OcultarGrupo("Características aplicadas al trámite");
    OcultarGrupo("Información de los recaudos");
    OcultarGrupo("Asignar unidad administratica responsable de la gestión");
    OcultarGrupo("Información adicional al reclamo");
    //OcultarCampo("TPOSOLCITA");
    OcultarCampo("DSCTRAMITE");
//    OcultarCampo("PRODUCTO");
    OcultarCampo("DESCRIP");
}
else{
    MostrarGrupo("Características aplicadas al trámite");
    MostrarGrupo("Información de los recaudos");
    MostrarGrupo("Asignar unidad administratica responsable de la gestión");
    MostrarGrupo("Información adicional al reclamo");
    //MostrarCampo("TPOSOLCITA");
    MostrarCampo("DSCTRAMITE");
//    MostrarCampo("PRODUCTO");
    MostrarCampo("DESCRIP");
}

    return true;
  }

asignar_event("onblur" , "MostrarGruposTramite()", "evento_TPOSOLCITU");
MostrarGruposTramite();

//VALIDACION DEL TIPO DE DATO INGRESADO SOBRE LA MATRIZ EN LA COLUMNA PARTICULAR
function ValidarCampo(){
	var Campo;
	var EvCampo;
	var FeCampo;
	var aux;
	var aux2;
	//el campo es numérico
	if(obtener_valorM("INF_AD_P",id_fila(),2) == "Número"){
		Campo = "M" + id_fila() + "INF_AD_P3";
		OcultarCampo("evento_M2INF_AD_P3", 4);
		aux = ValidarNumero(Campo,0,0.00,999999999.00,',','Introduzca un valor numérico válido ','El valor ingresado no se encuentra dentro del rango ','Aceptar','');

	}else{
	//el campo es fecha
		if(obtener_valorM("INF_AD_P",id_fila(),2) == "Fecha"){
			Campo = "M" + id_fila() + "INF_AD_P3";
			EvCampo = "evento_" + Campo;
			FeCampo = "imgFec" + Campo;
			cambiar_nombre(EvCampo,aux2,3);
			aux = ValidarFecha(Campo,'DD/MM/YYYY','01/01/1900','31/12/2099','Introduzca fecha válida con el formato ','El valor ingresado no se encuentra dentro del rango ','Aceptar','INF_AD_P');
		}	
	}
return true;
}

//LLAMADA A VALIDAR EL CAMPO CADA VEZ QUE SE INGRESE EL VALOR EN LA MATRIZ
asignar_event_matriz("onchange","ValidarCampo()","INF_AD_P", 3);

//LLAMA AL CALENDARIO PARA SELCCIONAR UNA FECHA VALIDA
function Calendario(fila){
	var aux;
	aux = "M" +fila+"INF_AD_P3";	
	gocalendar(aux,'140px','235px');
	window.event.returnValue = false;
	return false;
}

//OCULTA LA IMAGEN DEL CALENDARIO CUANDO EL CAMPO SOLICITADO NO SE FECHA 
//Y ASIGNA LOS EVENTOS  DE LLAMADA AL CALENDARIO
function eventos(){
	var valor, Campo;
	var i;
i=0;
	var filas = obtener_valor("filINF_AD_P");
	for(i = 1; i <= filas;i++){
		Campo = "'M" + i + "INF_AD_P3'";
		valor = "evento_M" + i + "INF_AD_P3"
		if(obtener_valorM("INF_AD_P",i,2) != "Fecha"){
			OcultarCampo(valor, 4);
		}else{
			asignar_event("onclick","Calendario("+ i +")",valor);
		}
	}
return true;
}

//SE EJECUTA CADA VEZ QUE SE REFRESQUE EL FORMULARIO.
eventos();