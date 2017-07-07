function personal()
{ try{ 
   var OTRPERSI=obtener_valor( "OTROPERSON",0);

   if(OTRPERSI=="T")
  {  MostrarGrupo("Características del personal de la unidad");
   }
   else
   {  OcultarGrupo("Características del personal de la unidad");
   }
   return(true);
}
catch(e)
{
return(false);
}
}

personal();

function padre()
{ try{ 

   if(obtener_valor('CABEZAJERA',1)=="T")
  {   MostrarCampo('UNDPADRE'); 
   }
   else
   {   OcultarCampo('UNDPADRE');
       asignar_valor('UNDPADRE', '0');
   }
   return(true);
}
catch(e)
{
return(false);
}
}

padre();

function HabNombre()
{
  if (obtener_valor( 'UNDADMOD' )=='0') 
    {
      MostrarCampo('NBUNDADM');
    }
  else
    {
      OcultarCampo( 'NBUNDADM');
      asignar_valor( 'NBUNDADM', obtener_valor(  'UNDADMOD',2 ) );
    }
  return true;
}

HabNombre();


/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
