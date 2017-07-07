HabilitaCampos("OPCNVCONT","SINVCONT",[[1,"MTZNVCON"]]); 
HabilitaCampos("OPCFINAN","SIFINAN",[[1,"DETFIN"]]); 
HabilitaCampos("OPCFINFINI","SIFINFINI",[[1,"DETFINFINI"]]); 


$("input[name='OPCAPRUEB']").click(function() { 


if ($("input[name='OPCAPRUEB']:checked").val() ==  "NOAPRUEB****AlterT"){

	MostrarCampo( 'wl_bobjetar',2);
	OcultarCampo( 'wl_baprobar',2);
}else{
	OcultarCampo( 'wl_bobjetar', 2);
	MostrarCampo( 'wl_baprobar',2);
}

} );

if ($("input[name='OPCAPRUEB']:checked").val() ==  "NOAPRUEB****AlterT"){

	MostrarCampo( 'wl_bobjetar',2);
	OcultarCampo( 'wl_baprobar',2);
}else{
	OcultarCampo( 'wl_bobjetar',2);
	MostrarCampo( 'wl_baprobar',2);
}
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
