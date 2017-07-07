//Asignar el valor :IGHORA: a toda la columna 2 de una matriz llamada "BIT_SE". 
 
function recorrido(){ 
    var numfilas = obtener_valor("filBIT_SE");//obtiene el número de filas de la matriz
    var i = 0;
    for(i=1;i<=numfilas;i++){
               asignar_valorM("BIT_SE",obtener_valor("HORA_BIT"),i,2);
    }
    return(true); 
} 
asignar_event_matriz("onclick" , "recorrido()" ,'BIT_SE' ,2);

function ValidaBUS()
{
  if (obtener_valorM('GENPLANT',1,1)=='' && obtener_valor('ANFIN',0)=='T' )
  {
    alertmb( 'Debe indicar el tipo de respuesta a generar', 2 , 1 ,  "Aceptar");   
    return false;
   }  
 return true;
}

asignar_event("onclick" , "ValidaBUS()", "wl_bentregar");
asignar_event("onclick" , "ValidaBUS()", "wl_bentregar1");

function ValidaEnviover()
{
  if (obtener_valor('INDICA')!='X' && obtener_valor('ANFIN',0)=='T' )
  {
    alertmb( 'Debe generar el documento de modelo de respuesta', 2 , 1 ,  "Aceptar");   
    return false;
   }  
 return true;
}

asignar_event("onclick" , "ValidaEnviover()", "wl_bentregar");
asignar_event("onclick" , "ValidaEnviover()", "wl_bentregar1");

function ANFIN(){

if (obtener_valor('ANFIN',0)=='T')
  {
    MostrarGrupo( "RECOMENDACIONES" );
    MostrarGrupo( "Categorización de la respuesta del trámite" );
  }
if (obtener_valor('ANFIN',1)=='T')
  {
    OcultarGrupo( "RECOMENDACIONES" );    
    OcultarGrupo( "Categorización de la respuesta del trámite" );
  }
if (obtener_valor('ANFIN',0)!='T' && obtener_valor('ANFIN',1)!='T' )
  {
    OcultarGrupo( "RECOMENDACIONES" );
    OcultarGrupo( "Categorización de la respuesta del trámite" );
  }
return true;
}
asignar_event("onclick" , "ANFIN()" ,"ANFIN");

ANFIN();



function mostrar_cuenta(){ 
if (obtener_valor('ABONO',0)=='T')
  {
    var NUFILAX = obtener_valor( "NUM_CTA" );
    asignar_valor( "NUM_CTA1" , NUFILAX );
  }
    return(true); 
}
asignar_event("onclick" , "mostrar_cuenta()" ,"ABONO");

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

OcultarCampo('wl_bobjetar', 2 );
OcultarCampo('wl_bguardar', 2 );
asignar_valor( "wl_bentregar", "Enviar trámite");
asignar_valor( "wl_bentregar1", "Enviar trámite");

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



function APRUEBARES(){

if (obtener_valor('APRUEBARES',0)=='T')
  {
    OcultarGrupo("Información de la aprobación por parte de la unidad competente");
  }
if (obtener_valor('APRUEBARES',1)=='T')
  {
    MostrarGrupo("Información de la aprobación por parte de la unidad competente");
  }

if (obtener_valor('APRUEBARES',0)!='T' && obtener_valor('APRUEBARES',1)!='T' )
{
    OcultarGrupo("Información de la aprobación por parte de la unidad competente");
}
return true;
}

asignar_event("onclick" , "APRUEBARES()" ,"APRUEBARES");

APRUEBARES();

OcultarGrupo("Funcional");

function TpOsolicitante()
{ try{ 
   var SOLINTERNO=obtener_valor( "TPOSOLCITA",0);
   var SOLEXTERNO=obtener_valor( "TPOSOLCITA",1);

   if(SOLINTERNO=="T")
  {  MostrarGrupo("Datos del solicitante interno");
     OcultarGrupo("Datos del solicitante externo");
   }
   else
   {  OcultarGrupo("Datos del solicitante interno");
   }

   if(SOLEXTERNO=="T")
  {  MostrarGrupo("Datos del solicitante externo");
     OcultarGrupo("Datos del solicitante interno");
   }
   else
   {  OcultarGrupo("Datos del solicitante externo");
   }
   return(true);
}
catch(e)
{
return(false);
}
}

asignar_event( "onclick" ,"TpOsolicitante()", "TPOSOLCITA");
TpOsolicitante();
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
