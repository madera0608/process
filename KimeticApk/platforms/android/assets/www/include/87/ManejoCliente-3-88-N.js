function aCtividad()
{ try{ 
   var RECADEF=obtener_valor( "ACTREAL",0);
   var CARACDEF=obtener_valor( "ACTREAL",1);

   if(RECADEF=="T")
  {  MostrarGrupo("Recaudos a definir o actualizar");
     OcultarGrupo("Definici�n o actualizaci�n de caracteristicas");
   }
   else
   {  OcultarGrupo("Recaudos a definir o actualizar");
      OcultarGrupo("Definici�n o actualizaci�n de caracteristicas");
   }

   if(CARACDEF=="T")
  {  MostrarGrupo("Definici�n o actualizaci�n de caracteristicas");
     OcultarGrupo("Recaudos a definir o actualizar");
   }
   else
   {  OcultarGrupo("Definici�n o actualizaci�n de caracteristicas");
   }
   return(true);
}
catch(e)
{
return(false);
}
}

asignar_event( "onclick" ,"aCtividad()", "ACTREAL");

aCtividad();
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
