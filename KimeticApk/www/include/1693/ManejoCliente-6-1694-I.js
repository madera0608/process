CamposObligatorios(['DESTPOEMPRESA','DESBCOEMP','DESUSERIMSS']);

asignar_valor( 'wl_bsolicitar', 'Registrar empresa');
asignar_valor( 'wl_bsolicitar1', 'Registrar empresa');

asignar_valor( 'MATNVBCOEMP','Agregar Banco');
asignar_valor( 'MATBOBCOEMP','Eliminar Banco');

HabilitaCampos('FACT','FACT',[[1,'BCOEMP']]);
HabilitaCampos('PAGA','PAGA',[[1,'USERIMSS']]);

$("#FACT").click(function() {HabilitaCampos('FACT','FACT',[[1,'BCOEMP']]);});
$("#PAGA").click(function() {HabilitaCampos('PAGA','PAGA',[[1,'USERIMSS']]); });

$("#RFCEMPGIN").blur(function() { 
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
                       asignar_valor("RFCEMPGIN","");
 	       return false;
	}
	else
	{
		return true;
	}
});

function ExisteDuplicado(matriz,columna)
{
  var tam= parseInt(obtener_valor("fil"+matriz));
  if (tam>1)
  {
   var filactual = get_fila(matriz);
   var verif = obtener_valorM(matriz,filactual,columna,1); 

   for (var i =1; i <=tam ;i++) 
     if (verif ==obtener_valorM(matriz,i,columna,1) && filactual!=i)
        {
           alertmb("El Banco " + verif + " existe en la fila " + i, 0, 1, "Aceptar");
           asignar_valorM( matriz , "Seleccione" , filactual, columna );
           return false;
        }
   }
   return true;
}

asignar_event_matriz( "onblur" , "ExisteDuplicado('BCOEMP',1)" , "BCOEMP" , 1);

function ValidaEnvio()
{
   if (obtener_valor( "FACT")=='F' && obtener_valor( "PAGA")=='F') 
   {
      alertmb("Por favor indique el tipo de empresa", 0, 1, "Aceptar");
      return false;
  }
 return true;
}

asignar_event( "onclick" , "ValidaEnvio()" , "wl_bsolicitar");
asignar_event( "onclick" , "ValidaEnvio()" , "wl_bsolicitar1");


/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
