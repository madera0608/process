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

	

RegistrarFormula(":MTZFACTP[{+},3]:","MONTFACTP",1);

$("#M1MTZFACTP3").change();


NroFilaM('MTZFACTP');

asignar_event( "onclick" , "NroFilaM('MTZFACTP')" , "MATNVMTZFACTP");


//FUNCIÓN VALIDAR ENVIO
function ValidaEnvio()
{  
	asignar_valor('PAGOPER',0);
	asignar_valor('PAGOPERF',0);

	return true;
}

//EJECUTAR FUNCIÓN DE VALIDAR ENVIO	
asignar_event( "onclick" , "ValidaEnvio() ", "wl_baprobar" );
asignar_event( "onclick" , "ValidaEnvio() ", "wl_baprobar1" );
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
