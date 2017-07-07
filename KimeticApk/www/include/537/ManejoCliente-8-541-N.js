asignar_valor( "MTO_OPER" , obtener_valor("MONTVALID") );

	var periodo = obtener_valor('PERIODO');
	var codigo= obtener_valor('CODFACTP');
	var parte1=codigo.substring(0,15);
	var parte2=codigo.substring(17);
	var resultado=parte1+periodo+parte2;
	asignar_valor('CODFACTP', resultado);


if (obtener_valor('PAGOPER')==1 || obtener_valor('PAGOPERF')==1 ){
	OcultarCampo( 'MONTVALID' );
}else{
	MostrarCampo( 'MONTVALID' );
}

if (obtener_valor('PAGOPER')==1){

MostrarCampo( 'EXCEDENTE' );

MostrarCampo( 'FCHPAGO' );
MostrarCampo( 'FCHNOTIF' );
MostrarCampo( 'EMPRECEP' );
MostrarCampo( 'DESCPAGO' );
MostrarCampo( 'MONTPAGO' );
MostrarCampo( 'MTZCOMP' );


}else{

OcultarCampo( 'EXCEDENTE' );

OcultarCampo( 'FCHPAGO' );
OcultarCampo( 'FCHNOTIF' );
OcultarCampo( 'EMPRECEP' );
OcultarCampo( 'DESCPAGO' );
OcultarCampo( 'MONTPAGO' );
OcultarCampo( 'MTZCOMP' );
}

	if (obtener_valor('PAGOPERF')==1){
		MostrarCampo( 'EXCEDENTEF' );

		MostrarCampo( 'FCHPAGOF' );
		MostrarCampo( 'FCHNOTIFF' );
		MostrarCampo( 'EMPRECEPF' );
		MostrarCampo( 'DESCPAGOF' );
		MostrarCampo( 'MONTPAGOF' );
		MostrarCampo( 'MTZCOMPF');
		OcultarCampo( 'SIANEXDEP' );
		OcultarCampo( 'SIANEXVAL' );

	}else{
		OcultarCampo( 'EXCEDENTEF' );

		OcultarCampo( 'FCHPAGOF' );
		OcultarCampo( 'FCHNOTIFF' );
		OcultarCampo( 'EMPRECEPF' );
		OcultarCampo( 'DESCPAGOF' );
		OcultarCampo( 'MONTPAGOF' );
		OcultarCampo( 'MTZCOMPF' );
		MostrarCampo( 'SIANEXDEP' );
		MostrarCampo( 'SIANEXVAL' );
	}

	


//FUNCI�N VALIDAR ENVIO
function ValidaEnvio()
{  
		if (obtener_valor('PAGOPER')==1 && (obtenerFloat(obtener_valor('MTO_OPER'), Formatodec) + obtenerFloat(obtener_valor('MTO_FINIQ'), Formatodec)) > obtenerFloat(obtener_valor('EXCEDENTE'), Formatodec)){
			alertmb("La suma del monto de n�mina y finiquito no puede ser mayor al excedente a provisionar",0,1,"Aceptar");
			return false;
		} else{
			if (obtener_valor('PAGOPERF')==1 && (obtenerFloat(obtener_valor('MTO_OPER'), Formatodec) + obtenerFloat(obtener_valor('MTO_FINIQ'), Formatodec)) > obtenerFloat(obtener_valor('EXCEDENTEF'), Formatodec)){
				alertmb("La suma del monto de n�mina y finiquito no puede ser mayor al excedente a provisionar",0,1,"Aceptar");
				return false;
			} else{
				if (obtener_valor('PAGOPERF')!=1 && obtener_valor('PAGOPER')!=1 && (obtenerFloat(obtener_valor('MTO_OPER'), Formatodec) + obtenerFloat(obtener_valor('MTO_FINIQ'), Formatodec)) > obtenerFloat(obtener_valor('MONTVALID'), Formatodec)){
					alertmb("La suma del monto de n�mina y finiquito no puede ser mayor al monto a provisionar",0,1,"Aceptar");
					return false;
				} else{
					if (obtener_valor('PAGOPER')==1 && (obtenerFloat(obtener_valor('MTO_OPER'), Formatodec) + obtenerFloat(obtener_valor('MTO_FINIQ'), Formatodec)) < obtenerFloat(obtener_valor('EXCEDENTE'), Formatodec)){
						alertmb("La suma del monto de n�mina y finiquito no cubre el excedente a provisionar",0,1,"Aceptar");
						return false;
					} else{
						if (obtener_valor('PAGOPERF')==1 && (obtenerFloat(obtener_valor('MTO_OPER'), Formatodec) + obtenerFloat(obtener_valor('MTO_FINIQ'), Formatodec)) < obtenerFloat(obtener_valor('EXCEDENTEF'), Formatodec)){
							alertmb("La suma del monto de n�mina y finiquito no cubre el excedente a provisionar",0,1,"Aceptar");
							return false;
						} else{
							if (obtener_valor('PAGOPERF')!=1 && obtener_valor('PAGOPER')!=1 && (obtenerFloat(obtener_valor('MTO_OPER'), Formatodec) + obtenerFloat(obtener_valor('MTO_FINIQ'), Formatodec)) < obtenerFloat(obtener_valor('MONTVALID'), Formatodec)){
								alertmb("La suma del monto de n�mina y finiquito no cubre el monto a provisionar",0,1,"Aceptar");
								return false;
							} else{
								return true;
							}
						}
					}
				}
			}
		}
}

//EJECUTAR FUNCI�N DE VALIDAR ENVIO	
asignar_event( "onclick" , "ValidaEnvio() ", "wl_baprobar" );
asignar_event( "onclick" , "ValidaEnvio() ", "wl_baprobar1" );
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
