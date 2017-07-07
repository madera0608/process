fil=obtener_valor('filMTZNOM');
asignar_valor("CNTNOM" , fil);

if( $("input[name='OPCACTIVO']:checked").val() ==  "INACTIVO****AlterT" ) {
	alert('El cliente se encuentra inactivo por lo tanto no se puede agendar ninguna fecha hasta que cambie su estatus');
	OcultarCampo('wl_baprobar');
	OcultarCampo('wl_baprobar1');
}

function ValidarFechas(){

var fila = get_fila('MTZFCHS');

fe_disp= new Date($('#M' + fila + 'MTZFCHS2').val().split(/\//).reverse().join('/'));
fe_op=new Date($('#M' + fila + 'MTZFCHS3').val().split(/\//).reverse().join('/'));
fe_cont=new Date($('#FCHVENCONT').val().split(/\//).reverse().join('/'));
var cnt= obtener_valor('CNTDIASNOT');

                  if ( fe_disp.getDay() == 0 || fe_disp.getDay() == 6 ) {
			alert('La fecha de inicio de operación no puede ser sabado o domingo.' );
			asignar_valorM('MTZFCHS', '',fila , 2);
}
                  if ( fe_op.getDay() == 0 || fe_op.getDay() == 6 ){
			alert('La fecha de dispersión no puede ser sabado o domingo.' );
			asignar_valorM('MTZFCHS', '',fila , 3);
}

 	if (fe_disp  > fe_cont){
		alert('La fecha de dispersión no puede ser mayor a la fecha de vencimiento del contrato.');
		asignar_valorM('MTZFCHS', '',fila , 2);

		return false;
	}else{
 		if (fe_disp  < fe_op){

			alert('La fecha de dispersión no puede ser menor a la fecha en la que inicia la operación.Lo recomendado es ' + cnt+ ' días antes de la dispersión.');
			asignar_valorM('MTZFCHS', '',fila , 3);
			return false;
		}else{
			return true;
		}
	}
}

function actcantfilas()
{
   asignar_valor( "CNTAGD" , obtener_valor("filMTZFCHS"));
   return true;
}

asignar_event( "onclick" , "actcantfilas()" , "MATNVMTZFCHS"  );
asignar_event( "onclick" , "actcantfilas()" , "MATBOMTZFCHS"  );
asignar_event_matriz( "onchange", "ValidarFechas()", "MTZFCHS", 2);
asignar_event_matriz( "onchange", "ValidarFechas()", "MTZFCHS", 3);
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
