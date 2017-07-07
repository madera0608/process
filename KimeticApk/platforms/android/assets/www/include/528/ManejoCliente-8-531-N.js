if (obtener_valor('PAGOPER')==1){

MostrarCampo( 'EXCEDENTE' );
OcultarCampo( 'MONTVALID' );

}else{
OcultarCampo( 'EXCEDENTE' );
MostrarCampo( 'MONTVALID' );
}



RegistrarFormula(":MTZFACT[{+},3]:","MONTFACT",1);

$("#M1MTZFACT3").change();


NroFilaM('MTZFACT');

asignar_event( "onclick" , "NroFilaM('MTZFACT')" , "MATNVMTZFACT");
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
