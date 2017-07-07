CamposObligatorios(['DESTPOEMPRESA','DESBCOEMP','DESUSERIMSS']);

asignar_valor( 'wl_baprobar', 'Actualizar empresa');
asignar_valor( 'wl_baprobar1', 'Actualizar empresa');

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
})

/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
