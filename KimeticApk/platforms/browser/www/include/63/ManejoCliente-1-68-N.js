HabilitaCampos("M1OPER1","",[[2,"OPER"]]);

function TRANSAC(){

if (obtener_valor('ES_TRANSAC',1)=='T' || obtener_valor('ABONO',1)=='T') 
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
    alertmb( 'Desbloquear monto abonado temporal y Depositar Intereses', 2 , 1 ,  "Aceptar");
    MostrarGrupo( "DESBLOQUEO DEL ABONO" );  
    MostrarGrupo( "ABONO DE INTERESES" ); 
    OcultarGrupo( "DEBITAR ABONO" );
    MostrarCampo("FE_RES");  
    return false;
   }
  
  if (obtener_valor("REC_AN",1)=='No Procedente' && obtener_valor('ABONO',0)=='T' && obtener_valor('APRUEBARES',0)=='T')
  {
    alertmb( 'Desbloquear monto abonado temporal y Debitar monto abonado temporal ', 2 , 1 ,  "Aceptar");
    MostrarGrupo( "DESBLOQUEO DEL ABONO" );  
    OcultarGrupo( "ABONO DE INTERESES" ); 
    MostrarGrupo( "DEBITAR ABONO" );
    MostrarCampo("FE_RES");  
    return false;
   }   
 
if (obtener_valor("REC_AN",1)=='Procedente' && obtener_valor('ABONO',0)=='T' && obtener_valor('APRUEBARES',0)!='T')
  {
    OcultarGrupo( "DESBLOQUEO DEL ABONO" );  
    OcultarGrupo( "ABONO DE INTERESES" ); 
    OcultarGrupo( "DEBITAR ABONO" );
    OcultarCampo("FE_RES");  
    return false;
  }

if (obtener_valor("REC_AN",1)=='No Procedente' && obtener_valor('ABONO',0)=='T' && obtener_valor('APRUEBARES',0)!='T')
  {
    OcultarGrupo( "DESBLOQUEO DEL ABONO" );  
    OcultarGrupo( "ABONO DE INTERESES" ); 
    OcultarGrupo( "DEBITAR ABONO" );
    OcultarCampo("FE_RES");  
    return false;
  }

return true;
}
asignar_event("onclick" , "DESBLOQUEO()" ,"APRUEBARES");

DESBLOQUEO();

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
    MostrarCampo("SE_AB");
    MostrarCampo("SE_BL");
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
    OcultarCampo("SE_AB");
    OcultarCampo("SE_BL");
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
    OcultarCampo("SE_AB");
    OcultarCampo("SE_BL");
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

function APRUEBARES1(){

if (obtener_valor('APRUEBARES',0)!='T' && obtener_valor('APRUEBARES',1)!='T' )
{
    OcultarCampo("FE_RES");    
}
return true;
}

asignar_event("onclick" , "APRUEBARES1()" ,"APRUEBARES");

APRUEBARES1();

OcultarGrupo("Funcional");
OcultarGrupo("Datos del solicitante interno");
OcultarGrupo("Datos del contribuyente");

function Tposolicitante()
{ try{ 

   if(obtener_valor( "TPOSOLCITA",0)=="T")
  {    MostrarGrupo("Datos del solicitante interno");
       OcultarGrupo("Datos del contribuyente");
   }
   if(obtener_valor( "TPOSOLCITA",1)=="T")
   {    OcultarGrupo("Datos del solicitante interno");
        MostrarGrupo("Datos del contribuyente");
   }
   return(true);
}
catch(e)
{
return(false);
}
}

Tposolicitante();

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

OcultarCampo('wl_bobjetar', 2 );
OcultarCampo('wl_bguardar', 2 );
asignar_valor( "wl_baprobar", "Aprobar trámite");
asignar_valor( "wl_baprobar1", "Aprobar trámite");

function tpopers(){
if (obtener_valor('TPOPERS',0)=='T')
  {
    cambiar_nombre("NBSOLEXT","Apellido(s) y Nombre(s)",4);
    MostrarCampo("RIF");
    MostrarCampo("NBSOLEXT");
    MostrarCampo("TLF");
    MostrarCampo("CORELECT");
  }
if (obtener_valor('TPOPERS',1)=='T')
  {
    MostrarCampo("RIF");
    cambiar_nombre("NBSOLEXT","Razón Social",4);
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

tpopers();


/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
