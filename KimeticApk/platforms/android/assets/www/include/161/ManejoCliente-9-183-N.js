asignar_valor('CARGATAREA','0');
asignar_valor('CARGA','0');


HabilitaCampos("OPCREUCLI","SIREUCLI",[[1,"FCHEFRECLI"], [2,"MOTCANCLI"],[3,"Datos del contrato"]]);

$("input[name='OPCREUCLI']").click(function() { 
HabilitaCampos("OPCREUCLI","SIREUCLI",[[1,"FCHEFRECLI"], [2,"MOTCANCLI"], [3,"Datos del contrato"]]);
} );

$("input[name='OPCREUCLI']").click(function() { 

	if ($("input[name='OPCREUCLI']:checked").val() ==  "NOREUCLI****AlterT"){
		asignar_valor('FCHEFRECLI','');
		asignar_valor('FCHVENCONT','');
		asignar_valor('FCHFIRCONT','');
	}
} );

CamposObligatorios(
["DESFCHEFRECLI","DESMOTCANCLI", "DESFCHFIRCONT"]);

$("#wfrm_formulario").validate
({
 
  rules: {  

    FCHEFRECLI: { required: function(element) { return $("input[name='OPCREUCLI']:checked").val() ==  "SIREUCLI****AlterT" ;}
                       },
    MOTCANCLI: { required: function(element) { return $("input[name='OPCREUCLI']:checked").val() ==  "NOREUCLI****AlterT" ;}
                       },
    FCHFIRCONT: { required: function(element) { return $("input[name='OPCREUCLI']:checked").val() ==  "SIREUCLI****AlterT" ;}
                       }
}
});


//FUNCIÓN VALIDAR ENVIO
function ValidaEnvio()
{  
          if ($("#wfrm_formulario").valid()!=true){
   alertmb("Por favor complete los campos obligatorios",0,1,"Aceptar");
     return false;
          }else{
	 	if ($("#IN_RESP").val()==0 && $("input[name='OPCREUCLI']:checked").val() ==  "SIREUCLI****AlterT"){
		   	alertmb("No puede enviar hasta que los responsables de cada área sean asignados",0,1,"Aceptar");
			accion_coord('wl_bguardar','wl_actforma=1');
    		 	return false;
		}else{	
	
  			return true;
		}
 	}	
}

//EJECUTAR FUNCIÓN DE VALIDAR ENVIO 
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar" );
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar1" );


/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
