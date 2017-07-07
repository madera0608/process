
if (obtener_valor('OPCAUTCHEQ',0)=='F' &&  (obtener_valor('PAGOCERTIF')=="T" || obtener_valor('PAGOCHEQUE')=="T" || obtener_valor('PAGOLEY')=='T')  )){
alert('No se pueden emitir cheques hasta que se haya recibido respuesta de la autorización de los cheque(s) ');
OcultarCampo('wl_baprobar');
OcultarCampo('wl_baprobar1');

}


if (obtener_valor('COMENCORR') !=''){

MostrarCampo('COMENCORR');
MostrarCampo('FCHCORRFON');

}else{

OcultarCampo('COMENCORR');
OcultarCampo('FCHCORRFON');
}


HabilitaCampos("OPCERRFOND","SIERRFOND",[[1,"COMENFOND"] ]);

$("input[name='OPCERRFOND']").click(function() { 
HabilitaCampos("OPCERRFOND","SIERRFOND",[[1,"COMENFOND"] ]);

} );



if (obtener_valor('PAGOCERTIF')=="T" || obtener_valor('PAGOCHEQUE')=="T" || obtener_valor('PAGOLEY')=='T'){
	MostrarGrupo( 'DATOS DE CHEQUES' );  
}
else{
	OcultarGrupo( 'DATOS DE CHEQUES' );  
}


/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
