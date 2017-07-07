$("#EMPFACT").change(function() { 
	asignar_valor('IDEMP','');
	asignar_valor('SALDO','');
	OcultarGrupo( 'DATOS DE LOS MOVIMIENTOS'  );
});

function sumaEgresos(){
	fil=obtener_valor( 'filMTZMOV' );
	var egresos=0;
	for(i=1;i<=fil;i++){
		if (obtener_valorM('MTZMOV', i,1)== 'Egreso'){
			egresos=egresos+obtenerFloat(obtener_valorM('MTZMOV',i,4), Formatodec) ;
		}
	}
	if (egresos>0)
		MostrarCampo('TOTALEGR');
	else
		OcultarCampo('TOTALEGR');
	asignar_valor('TOTALEGR',egresos);
	return true;
}

OcultarCampo('TOTALEGR');

asignar_event_matriz( "onchange", "sumaEgresos()", "MTZMOV", 1);
asignar_event_matriz( "onchange", "sumaEgresos()", "MTZMOV", 4);

if (obtener_valor('SALDO')!='')
	MostrarGrupo( 'DATOS DE LOS MOVIMIENTOS' );
else
	OcultarGrupo( 'DATOS DE LOS MOVIMIENTOS'  );

//FUNCIÓN VALIDAR ENVIO
function ValidaEnvio()
{  
	if (obtener_valor('IDEMP')==''){
		alertmb("Debe seleccionar una empresa de la lista",0,1,"Aceptar");
	 	return false;
	}else{
		if (obtenerFloat(obtener_valor('SALDO'), Formatodec)<=0 && obtenerFloat(obtener_valor('TOTALEGR'), Formatodec)>0 ){
			alertmb("No puede registrar un movimiento de egreso mientras el saldo de la empresa sea menor o igual a cero",0,1,"Aceptar");
	 		return false;
		}else{
          			if (obtenerFloat(obtener_valor('TOTALEGR'), Formatodec)>obtenerFloat(obtener_valor('SALDO'), Formatodec) && obtenerFloat(obtener_valor('SALDO'), Formatodec)>0 ){
				alertmb("El monto de los egresos no puede superar el saldo de los adicionales",0,1,"Aceptar");
	 			return false;
			}else
				return true;
		}
	}
}
//EJECUTAR FUNCIÓN DE VALIDAR ENVIO	
asignar_event( "onclick" , "ValidaEnvio()", "wl_bsolicitar" );
asignar_event( "onclick" , "ValidaEnvio()", "wl_bsolicitar1" );
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
