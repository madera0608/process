CamposObligatorios(["DESOPCPAGO"]);

//Se cambian los nombres de los botones de acci�n
asignar_valor( "wl_bsolicitar" , "Cancelar documento");
asignar_valor( "wl_bsolicitar1", "Cancelar documento");

//Se ocultan objetos
OcultarCampo( "wl_bguardar", 2);

MatrizEstatica('MT_PDOC');

HabilitaCampos("OPCAPRUEB","NOAPRUEB",[[1,"OPCAPRUEB"],[1,"COMENTNOAP"]]);

CamposObligatorios(["DESNUDOCC"]);

if (obtener_valor('INPAGOS')=='1')
	MostrarCampo('OPCPAGO');
else
	OcultarCampo('OPCPAGO');

$("#M1MT_PDOC1").change(function() { 
	asignar_valor( 'NUDOCC','');
});

if (obtener_valor('INRESULT')=='1')
	alert("La consulta puede no haber arrojado resultado por alguna de las siguientes razones: \n -Ha introducido un n�mero de documento incorrecto \n -Las agendas de dispersi�n no se pueden cancelar a trav�s de este proceso \n -El documento se encuentra validando alg�n pago \n -La dispersi�n ya fue ejecutada \n Por favor revise el seguimiento para m�s detalles ");

//FUNCI�N VALIDAR ENVIO
function ValidaEnvio()
{  
	if ($("#wfrm_formulario").valid()!=true){
		alertmb("Por favor complete los campos obligatorios. ",0,1,"Aceptar");
	  	return false;
          	}else{
		if (obtener_valor('INPAGOS')=='1' && obtener_valor('OPCPAGO',0)!='T' && obtener_valor('OPCPAGO',1)!='T'){
			alertmb("Por favor indique si el cliente desea reembolso de los pagos realizados",0,1,"Aceptar");
			return false;
		}else
			return true;
	}
}

$("#wfrm_formulario").validate
({
  rules: { 
	NUDOCC: {required: true}
         }
});

//EJECUTAR FUNCI�N DE VALIDAR ENVIO	
asignar_event( "onclick" , "ValidaEnvio()", "wl_bsolicitar" );
asignar_event( "onclick" , "ValidaEnvio()", "wl_bsolicitar1" );
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
