if (obtener_valorM( "MTZEMPDE", 1 , 1)=="")
    OcultarGrupo( "DATOS DE LA DEMANDA" );

if (obtener_valorM( "MTZEMPNE", 1 , 1)=="")
    OcultarGrupo( "DATOS DE LA NEGOCIACION" );

if (obtener_valor('OPCTPOBAJA', 2)=='T'){
	OcultarGrupo( 'DATOS DEL FINIQUITO' );
}else{
	MostrarGrupo( 'DATOS DEL FINIQUITO' );
}
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
