OcultarCampo("wl_bobjetar",2);

asignar_valor( 'wl_baprobar', 'Modificar Proveedor');
asignar_valor( 'wl_baprobar1', 'Modificar Proveedor');

$("#RFC").blur(function() { 
var strCorrecta;
	strCorrecta = rfcStr;	
	if (rfcStr.length == 12){
	var valid = '^(([A-Z]|[a-z]){3})([0-9]{6})((([A-Z]|[a-z]|[0-9]){3}))';
	}else{
	var valid = '^(([A-Z]|[a-z]|\s){1})(([A-Z]|[a-z]){3})([0-9]{6})((([A-Z]|[a-z]|[0-9]){3}))';
	}
	var validRfc=new RegExp(valid);
	var matchArray=strCorrecta.match(validRfc);
	if (matchArray==null) {
                       alertmb('El formato del RFC es incorrecto',2,1,'Aceptar');
                       asignar_valor("RFC","");
 	       return false;
	}
	else
	{
		return true;
	}
})



function RevisarMTZContactos() {
  var filaC = 1;
  var AEnviar = obtener_valorM( 'CONTAC' , filaC , 3);
  var re = /^[a-z0-9\-\_\.]+@[a-z0-9\-\.]+\.[a-z]{2,}$/i
  if (AEnviar!="") {
     if (!re.test(AEnviar))
     {
         alertmb('El formato de correo electr�nico es incorrecto. Ejemplo correcto: agarza@direccion.com',2,1,'Aceptar');    
         asignar_valorM( "CONTAC" , "" , filaC , 3);
	return(false);
     }
  }
  return true;
}

asignar_event_matriz("onblur", "RevisarMTZContactos()" , "CONTAC" , 3);
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();