HabilitaCampos("M1OPER1","",[[2,"OPER"]]);

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

function AP(){

if (obtener_valor('AP',0)=='T')
  {
    MostrarCampo("FEABONO1");
    MostrarCampo("OBSABONO1");
    MostrarCampo("MTO_ABONO1");
    MostrarCampo("CTA_ABONO1");
    MostrarCampo("CTA_INTER1");
    MostrarCampo("PORC_INTE1");
    MostrarCampo("EVEN_CRE1");
    MostrarCampo("MENSAJE1");
    MostrarCampo("NUM_CTA2");

    MostrarCampo("EVEN_CRE6");
    MostrarCampo("MENSAJE6");
    MostrarCampo("MONTO_INT2");

  }
if (obtener_valor('AP',1)=='T')
  {
    OcultarCampo("FEABONO1");
    OcultarCampo("OBSABONO1");   
    OcultarCampo("MTO_ABONO1"); 
    OcultarCampo("CTA_ABONO1");
    OcultarCampo("CTA_INTER1");
    OcultarCampo("PORC_INTE1");
    OcultarCampo("EVEN_CRE1");
    OcultarCampo("MENSAJE1");
    OcultarCampo("NUM_CTA2");

    OcultarCampo("EVEN_CRE6");
    OcultarCampo("MENSAJE6");
    OcultarCampo("MONTO_INT2");

  }

if (obtener_valor('AP',0)!='T' && obtener_valor('AP',1)!='T' )
  {
    OcultarCampo("FEABONO1");
    OcultarCampo("OBSABONO1");   
    OcultarCampo("MTO_ABONO1");    
    OcultarCampo("CTA_ABONO1");
    OcultarCampo("CTA_INTER1");
    OcultarCampo("PORC_INTE1");
    OcultarCampo("EVEN_CRE1");
    OcultarCampo("MENSAJE1");
    OcultarCampo("NUM_CTA2");

    OcultarCampo("EVEN_CRE6");
    OcultarCampo("MENSAJE6");
    OcultarCampo("MONTO_INT2");
  }
return true;
}

asignar_event("onclick" , "AP()" ,"AP");

AP();

function mostrar_fila(){ 
if (obtener_valor('AP',0)=='T')
{
var NUFILA = obtener_valor( "CTA_ABONO" );
asignar_valor( "CTA_ABONO1" , NUFILA );

var NUFILA1 = obtener_valor( "CTA_INTER" );
asignar_valor( "CTA_INTER1" , NUFILA1 );

var NUFILA2 = obtener_valor( "MTO_ABONO" );
asignar_valor( "MTO_ABONO1" , NUFILA2 );

var NUFILA3 = obtener_valor( "PORC_INTER" );
asignar_valor( "PORC_INTE1" , NUFILA3 );

var NUFILAXY = obtener_valor( "NUM_CTA" );
asignar_valor( "NUM_CTA2" , NUFILAXY );

}
return(true); 
}
asignar_event("onclick" , "mostrar_fila()" ,"AP");


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

function ValidaEnvioDEF()
{
  if (obtener_valor('INDIDEF')!='X')
  {
    alertmb( 'Debe generar veredicto de la reconsideración', 2 , 1 ,  "Aceptar");   
    return false;
  }
     return true;
}

asignar_event("onclick" , "ValidaEnvioDEF()", "wl_bentregar");
asignar_event("onclick" , "ValidaEnvioDEF()", "wl_bentregar1");



OcultarCampo('wl_bobjetar', 2 );
OcultarCampo('wl_bguardar', 2 );
asignar_valor( "wl_bentregar", "Enviar trámite");
asignar_valor( "wl_bentregar1", "Enviar trámite");

function RECON(){

if (obtener_valor('RECON',0)=='T')
  {
    MostrarCampo("FE_REC");
    MostrarCampo("RA_REC");
    MostrarCampo("REC_RE");
    MostrarCampo("SU_AG");
    MostrarCampo("PRTOR");
  }
if (obtener_valor('RECON',1)=='T')
  {
    OcultarCampo("FE_REC");
    OcultarCampo("RA_REC");
    OcultarCampo("REC_RE");
    OcultarCampo("SU_AG");
    OcultarCampo("PRTOR");
  }

if (obtener_valor('RECON',0)!='T' && obtener_valor('RECON',1)!='T' )
{
    OcultarCampo("FE_REC");
    OcultarCampo("RA_REC");
    OcultarCampo("REC_RE");
    OcultarCampo("SU_AG");
    OcultarCampo("PRTOR");
}
return true;
}

asignar_event("onclick" , "RECON()" ,"RECON");

RECON();

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

OcultarGrupo("Funcional");
OcultarGrupo("Datos del solicitante interno");
OcultarGrupo("Datos del contribuyente");

/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
