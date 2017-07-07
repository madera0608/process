asignar_valor('CARGATAREA','0');
asignar_valor('CARGA','0');

HabilitaCampos("OPCCAMBFAC","NOCAMBFAC",[[1,"OPCPROYESP"]]);
HabilitaCampos("OPCREUCLI","SIREUCLI",[[1,"FCHEFRECLI"], [2,"MOTCANCLI"],[3,"Datos del contrato"]]);

$("input[name='OPCREUCLI']").click(function() { 
	HabilitaCampos("OPCREUCLI","SIREUCLI",[[1,"FCHEFRECLI"], [2,"MOTCANCLI"], [3,"Datos del contrato"]]);
	if (obtener_valor('OPCREUCLI',1)=='T'){
		asignar_valor('FCHEFRECLI','');
		asignar_valor('FCHVENCONT','');
		asignar_valor('FCHFIRCONT','');
	}
});


CamposObligatorios(["DESFCHEFRECLI","DESMOTCANCLI", "DESFCHFIRCONT"]);

$("#wfrm_formulario").validate
({
 
  rules: {  

    FCHEFRECLI: { required: function(element) { return obtener_valor('OPCREUCLI',0)=='T' ;}
                       },
    MOTCANCLI: { required: function(element) { return obtener_valor('OPCREUCLI',1)=='T' ;}
                       },
    FCHFIRCONT: { required: function(element) { return obtener_valor('OPCREUCLI',0)=='T';}
                       }
}
});


//FUNCIÓN VALIDAR ENVIO
function ValidaEnvio()
{  
	if ($("#wfrm_formulario").valid()!=true){
		alertmb("Por favor complete los campos obligatorios",0,1,"Aceptar");
		return false;
	}else
		return true;	
}

//EJECUTAR FUNCIÓN DE VALIDAR ENVIO 
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar" );
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar1" );


/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
