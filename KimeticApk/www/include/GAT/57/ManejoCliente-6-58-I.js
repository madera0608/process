function mailtest(nb){
	if ( obtener_valor( nb ) == "" ){
		return true;
	}else{
		if (!checkEmail(obtener_valor( nb ))){
			alertmb("Falla con el formato del correo",2,1,"Aceptar");
			document.getElementById(nb).focus();
			return(false);
		}else{ 
			return(true);
		}
	}
}

function mailtestM(nb,col){
                var fila=id_fila()
	if ( obtener_valorM( nb , parseInt(fila) , col ) == "" ){
		return true;
	}else{
		if (!checkEmail(obtener_valorM( nb , parseInt(fila) , col ))){
			alertmb("Falla con el formato del correo",2,1,"Aceptar");
			document.getElementById(nb).focus();
			return(false);
		}else{ 
			return(true);
		}
	}
}

asignar_event("onblur" , "mailtest('EMAILUSRAC')","EMAILUSRAC");

asignar_event_matriz("onblur", "mailtestM('MTPERSON',4)" , "MTPERSON" , 4);

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

asignar_event( "onclick" ,"personal()", "OTROPERSON");
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

asignar_event( "onclick" ,"padre()", "CABEZAJERA");
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

asignar_event('onchange' , 'HabNombre()' ,  'UNDADMOD');
HabNombre();

asignar_valor( 'MATNVCARADIC' , 'Crear atributo');
asignar_valor( 'MATBOCARADIC' , 'Eliminar  atributo');

asignar_valor( 'MATNVMTPERSON' , 'Agregar personal');
asignar_valor( 'MATBOMTPERSON' , 'Eliminar personal'); 

asignar_valor( 'MATNVMTELEFON' , 'Agregar teléfono');
asignar_valor( 'MATBOMTELEFON' , 'Eliminar teléfono'); 

/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
