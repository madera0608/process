MatrizEstatica('LSTEMPLE');
MatrizEstatica('MTZCONF');

if (obtener_valor('OPCTPOBAJA',1) =='T')
{
   MostrarCampo( 'PROPFIN');
}
else
{
  OcultarCampo( 'PROPFIN' );
 }

function resulReunion()
{
    if (obtener_valor("RESULREUNI",0)=='T')
      {
        if (obtener_valor("TPOPAGOB",1)=='T' || obtener_valor("TPOPAGOB",2)=='T' || obtener_valor("TPOPAGOB",3)=='T')
            MostrarCampo( 'CANCECHQ',5);
        else 
          {
            OcultarCampo( 'CANCECHQ',5);             
            asignar_valor( "NOCAN" ,"T"); 
          }
        MostrarCampo( "LSTEMPLE");
      }
    else
      {
        OcultarCampo( "LSTEMPLE");
        OcultarCampo( 'CANCECHQ');
        asignar_valor( "NOCAN" ,"T"); 
      }


    return true;
}

resulReunion();
asignar_event("onclick","resulReunion()","RESULREUNI");

CamposObligatorios(["M0MTZCONF1","M0MTZCONF2","M0MTZCONF3","M0MTZCONF4"]);

HabilitaCampos("OPCFIRFINI","SIFIRFINI",[[1,"MTZCONF"] ]);

$("input[name='OPCFIRFINI']").click(function() {
	HabilitaCampos("OPCFIRFINI","SIFIRFINI",[[1,"MTZCONF"]]);
});


$("#wfrm_formulario").validate
({
  rules: { 
	M1MTZCONF1:{required: function(element) { return obtener_valor('OPCFIRFINI',0)=="T";}},
	M1MTZCONF2:{required: function(element) { return obtener_valor('OPCFIRFINI',0)=="T";}},
	M1MTZCONF3:{required: function(element) { return obtener_valor('OPCFIRFINI',0)=="T";}},
	M1MTZCONF4:{required: function(element) { return obtener_valor('OPCFIRFINI',0)=="T";}}
         },
  messages: {
	
	M1MTZCONF1:"Por favor seleccione el contacto que confirmo la prenómina",
	M1MTZCONF2:"Por favor indique la fecha de confirmación",
	M1MTZCONF3:"Por favor indique la hora de confirmación",
	M1MTZCONF4: "Por favor seleccione el canal utilizado para la confirmación"
            }
});

ValidarFilas("LSTEMPLE",[
["LSTEMPLE11",{required:true}]
]);

//FUNCIÓN VALIDAR ENVIO
function ValidaEnvio()
{      var existe = false;
        if (obtener_valor("TPOPAGOB",0)=='T' && obtener_valor( "JUNTAEJECU")=='T')  
          {
              var filas = obtener_valor("filLSTEMPLE");
              for(var i=1;i<=filas&&!existe;i++)
                  {
                        if  (obtener_valorM( "LSTEMPLE" , i , 11)==1)
                             existe=true;                 
                  }
               if (!existe)
               {
	  alertmb("Por favor debe confirmar la firma de al menos de un empleado ",0,1,"Aceptar");
  	  return false;
               }                        
          }

          if ($("#wfrm_formulario").valid()!=true){
		alertmb("Por favor complete los campos obligatorios",0,1,"Aceptar");
	  	return false;
          }else
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
