function recOptativo()
{ try{ 
   var Sioptativo=obtener_valor( "RECOPTA",0);
   var Nooptativo=obtener_valor( "RECOPTA",1);

   if(Sioptativo=="T")
  {  MostrarCampo("MTRECOPT");
   }
   else
   {  OcultarCampo("MTRECOPT");
   }

   if(Nooptativo=="T")
   {  OcultarCampo("MTRECOPT");
   }
   return(true);
}
catch(e)
{
return(false);
}
}

asignar_event( "onclick" ,"recOptativo()", "RECOPTA");
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
