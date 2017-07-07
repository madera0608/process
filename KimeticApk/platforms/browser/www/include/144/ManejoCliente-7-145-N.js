MatrizEstatica( 'MTZANEXO' );
MatrizEstatica( 'MTZNOM');
MatrizEstatica( 'MTZOPC');

function habApoyo()
{
  if (obtener_valor("OPCTPOBAJA",1)=='T')
    {
         MostrarCampo("SIAPOYRL");
         MostrarCampo("COMSOLAPOY");
    }
  else
   {
         OcultarCampo("SIAPOYRL");
         OcultarCampo("COMSOLAPOY");
   }

  return true;
}
habApoyo();

asignar_event( "onclick" , "habApoyo()" , "OPCTPOBAJA");

if ($("#M1MTZANEXO1 option").length>1)
MostrarGrupo( 'DATOS DEL CORREO ELECTRÓNICO' );
else
OcultarGrupo( 'DATOS DEL CORREO ELECTRÓNICO' );

OcultarCampo( 'MATNVMTZNOM',2);
OcultarCampo( 'MATSEMTZNOM',2);

CamposObligatorios(["M0MTZNOM15", "M0MTZOPC"]);

//FUNCIÓN VALIDAR ENVIO
function ValidaEnvio()
  {  
                    if (obtener_valor("PSTOIMSS")=="" &&(obtener_valor("OPCTPOBAJA",0)=='T' || obtener_valor("OPCTPOBAJA",1)=='T' || obtener_valor("OPCTPOBAJA",3)=='T' ) )
                         {
	       alertmb("Por favor seleccione una nómina que tenga ejecutivo de IMSS asignado",0,1,"Aceptar");
	       return false;
                         }
                    if (obtener_valor("PSTOIMSS")=="" && obtener_valorM('MTZOPC',1,1)=='T' )
                         {
	       alertmb("Por favor seleccione una nómina que tenga ejecutivo de IMSS asignado o deshabilite la opción de dar baja de IMSS",0,1,"Aceptar");
	       return false;
                         }

                    if (obtener_valorM("LSTEMPLE",1,1)=="" || obtenerFloat(obtener_valor("CNTEMP"))==0 )
                         {
	       alertmb("Por favor  cargar el listado de los empleados a dar de baja",0,1,"Aceptar");
	       return false;
                         }
	if(ValidarCheckNomina()){
		if ($("#wfrm_formulario").valid()!=true){
			alertmb("Por favor complete los campos obligatorios. Recuerde anexar el finiquito",0,1,"Aceptar");
			return false;
        		}else{
			return true;
			
         		}
	}else{
		return false;
	}
}


function ValidaCheckBajas(){
	
	var fila= obtener_valor('FILA');
	var mk=0;
	for(e=9;e<=13;e++){
		var d=e-8;
				if (obtener_valorM('MTZNOM', fila,e)!= 'T' && obtener_valorM('MTZOPC',1,d)=='T'){
					mk=1;
				}
	}
	
	if (mk!=0){
		alert('No puede seleccionar una baja que no este por defecto marcada en la nómina');
				asignar_valorM('MTZOPC',obtener_valorM('MTZNOM',fila,9), 1, 1);
				asignar_valorM('MTZOPC',obtener_valorM('MTZNOM',fila,10), 1, 2);
				asignar_valorM('MTZOPC',obtener_valorM('MTZNOM',fila,11), 1, 3);
				asignar_valorM('MTZOPC',obtener_valorM('MTZNOM',fila,12), 1, 4);
				asignar_valorM('MTZOPC',obtener_valorM('MTZNOM',fila,13), 1, 5);
		return false;
	}else{
		return true;
	}
	
}


function ValidarUnCheck(){

var m=0;
 fil=obtener_valor( 'filMTZNOM' );

	for(e=1;e<=fil;e++){
		if ($("#M"+e+"MTZNOM15").attr('checked')==true){
			m=m+1;
			if(m>1){
				alert('No puede seleccionar mas de una nómina');
				$("#M"+e+"MTZNOM15").attr('checked', false);
				return false;
			}else{
				asignar_valor('FILA',e);
				var resp= obtener_valorM('MTZNOM', e , 16);
				asignar_valor('PSTOIMSS',resp);
                                                                                     asignar_valor('IDNOMINA',obtener_valorM('MTZNOM', e , 17));
				asignar_valor('CANTACTUAL',obtener_valorM('MTZNOM', e , 6));
				asignar_valorM('MTZOPC',obtener_valorM('MTZNOM',e,9), 1, 1);
				asignar_valorM('MTZOPC',obtener_valorM('MTZNOM',e,10), 1, 2);
				asignar_valorM('MTZOPC',obtener_valorM('MTZNOM',e,11), 1, 3);
				asignar_valorM('MTZOPC',obtener_valorM('MTZNOM',e,12), 1, 4);
				asignar_valorM('MTZOPC',obtener_valorM('MTZNOM',e,13), 1, 5);
			}
		}
   	}
return true;

}

function ValidarCheckNomina(){
var mark=0;
 fil=obtener_valor( 'filMTZNOM' );

	for(e=1;e<=fil;e++){
		if ($("#M"+e+"MTZNOM15").attr('checked')==true){
			mark=1;
		}
   	}

	if(mark!=1){

		alert('Debe seleccionar una nómina para dar de baja a los empleados');
		return false;
	}else{
		
		if(ValidaCheckBajas()){
			return true;
		}else{
			return false;
		}
	}

}

 
asignar_event_matriz('onchange' ,  'ValidarUnCheck()' ,'MTZNOM' , 15);


//EJECUTAR FUNCIÓN DE VALIDAR ENVIO 
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar" );
asignar_event( "onclick" , "ValidaEnvio()", "wl_baprobar1" );

/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
