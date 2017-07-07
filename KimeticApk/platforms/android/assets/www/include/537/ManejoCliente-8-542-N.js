
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
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
