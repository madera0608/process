if ($("#M1MT_PRORR7").val()=="")
{
    OcultarCampo( "DIAS_P" ); 
    OcultarCampo( "T_DIAS_P" ); 
    OcultarCampo( "FECHA_MAXP" ); 
}
else
{
    MostrarCampo( "DIAS_P" ); 
    MostrarCampo( "T_DIAS_P" ); 
    MostrarCampo( "FECHA_MAXP" ); 
}

asignar_valor("wl_baprobar","Enviar");
asignar_valor("wl_baprobar1","Enviar");
OcultarCampo( 'wl_bobjetar',2 );
OcultarCampo( 'wl_bobjetar1',2 );

if(obtener_valorM( 'RESP_INF' , 1,1) == ""){
	asignar_valorM( 'RESP_INF' , 1 , 1 , 1 );
}

//FUNCION GENERICA QUE ASIGNA NUMERO DE FILA
function NroFilaM(matriz1){
  var fila = obtener_valor( 'fil'+matriz1 );
    asignar_valorM( matriz1 , fila ,  fila, 1);
    return true;
}

asignar_event( "onclick" , "NroFilaM('RESP_INF')" , "MATNVRESP_INF");
// El boton que agrega una fila se llama MATNV + Nombre de la matriz

function ocultar(){
	if(obtener_valor( 'ANEX_FAX' ) == "Enviar por fax"){
		MostrarCampo( 'NUM_FAX' );
		MostrarCampo( 'P_F_CR' );
		MostrarCampo( 'FAX' );
	}else{
		OcultarCampo( 'NUM_FAX' );
		OcultarCampo( 'P_F_CR' );
		OcultarCampo( 'FAX' );
	}
	if(obtener_valor( 'ORGANISMO' ) == 1){
		MostrarCampo( 'OTRO_OG' );
	}else{
		OcultarCampo( 'OTRO_OG' );
	}
	if(obtener_valor( 'CLAS_COMUN' ) == 4){
		MostrarGrupo( 'Definici�n de la pr�rroga' );
		OcultarCampo( 'DELEGA_A' );
		OcultarCampo( 'DIAS_R' );
		OcultarCampo( 'T_DIAS' );
		OcultarCampo( 'FECHA_MAX' );
		OcultarCampo( 'SUB_CLAS_C' );
		OcultarCampo( 'ENV_RESP' );
		OcultarCampo( 'R_COMUNICA' );
		OcultarCampo( 'RESP_INF' );
	}else{
		OcultarGrupo( 'Definici�n de la pr�rroga' );
		MostrarCampo( 'DELEGA_A' );
		MostrarCampo( 'DIAS_R' );
		MostrarCampo( 'T_DIAS' );
		MostrarCampo( 'FECHA_MAX' );
		MostrarCampo( 'SUB_CLAS_C' );
		MostrarCampo( 'ENV_RESP' );
		MostrarCampo( 'R_COMUNICA' );
		MostrarCampo( 'RESP_INF' );
	}
	return true;
}

ocultar();

function ocultarorg(){
	if(obtener_valor( 'ORGANISMO' ) == 1){
		MostrarCampo( 'OTRO_OG' );
	}else{
		OcultarCampo( 'OTRO_OG' );
	}
	return true;
}
asignar_event( 'onchange' , "ocultarorg()" , 'ORGANISMO' );

function ocultarprorroga(){
	if(obtener_valor( 'CLAS_COMUN' ) == 4){
		MostrarGrupo( 'Definici�n de la pr�rroga' );
		OcultarCampo( 'DELEGA_A' );
		OcultarCampo( 'DIAS_R' );
		OcultarCampo( 'T_DIAS' );
		OcultarCampo( 'FECHA_MAX' );
		OcultarCampo( 'SUB_CLAS_C' );
		OcultarCampo( 'ENV_RESP' );
		OcultarCampo( 'R_COMUNICA' );
		OcultarCampo( 'RESP_INF' );
	}else{
		OcultarGrupo( 'Definici�n de la pr�rroga' );
		MostrarCampo( 'DELEGA_A' );
		MostrarCampo( 'DIAS_R' );
		MostrarCampo( 'T_DIAS' );
		MostrarCampo( 'FECHA_MAX' );
		MostrarCampo( 'SUB_CLAS_C' );
		MostrarCampo( 'ENV_RESP' );
		MostrarCampo( 'R_COMUNICA' );
		MostrarCampo( 'RESP_INF' );
	}
	return true;
}
asignar_event( 'onclick' , "ocultarprorroga()" , 'CLAS_COMUN' );


function obligatorio(){
	if(obtener_valor('CLAS_COMUN') == 4){
		asignar_valor('DELEGA_A' , 'NO');
		asignar_valor('EVLOAD' , '2');
		if(obtener_valor('DIAS_P') == ''){
			alertmb("Campo D�as de pr�rroga no puede estar vac�o.",2,1,"Aceptar");
			return false;
		}
		if(obtener_valor('T_DIAS_P') == ''){
			alertmb("Campo Tipo de d�a no puede estar vac�o.",2,1,"Aceptar");
			return false;
		}
		if(obtener_valor('P_COMENTA') == ''){
			alertmb("Campo Comentario no puede estar vac�o.",2,1,"Aceptar");
			return false;
		}
		if(obtener_valorM('MT_PRORR',1,1) == ''){
			alertmb("Debe asociar la pr�rroga a un expediente activo.",2,1,"Aceptar");
			return false;
		}
	}
	if(obtener_valor('DELEGA_A') == 'NO' && obtener_valor('CLAS_COMUN') != 4){
		asignar_valor('EVLOAD' , '1');
		if(obtener_valor('DIAS_R') == ''){
			alertmb("Campo d�as para dar respuesta no puede estar vac�o.",2,1,"Aceptar");
			return false;
		}
		if(obtener_valor('T_DIAS') == ''){
			alertmb("Campo tipo de d�a no puede estar vac�o.",2,1,"Aceptar");
			return false;
		}
		if(obtener_valor('CLAS_COMUN') == ''){
			alertmb("Campo clasificaci�n de la comunicaci�n no puede estar vac�o.",2,1,"Aceptar");
			return false;
		}
		if(obtener_valor('R_COMUNICA') == ''){
			alertmb("Campo resumen comunicaci�n no puede estar vac�o.",2,1,"Aceptar");
			return false;
		}
		if(obtener_valor('ENV_RESP') == ''){
			alertmb("Campo Requiere env�o respuesta no puede estar vac�o.",2,1,"Aceptar");
			return false;
		}
		var fila = obtener_valor( 'filRESP_INF' );
		for (var x=1;x<=fila;x++) {
			if(obtener_valorM( 'RESP_INF' , x , 1) == ''){
				alertmb("Campo unidad responsable no puede estar vac�o.",2,1,"Aceptar");
				return false;
			}
			if(obtener_valorM( 'RESP_INF' , x , 2) == ''){
				alertmb("Campo fecha no puede estar vac�o.",2,1,"Aceptar");
				return false;
			}
			if(obtener_valorM( 'RESP_INF' , x , 3) == ''){
				alertmb("Campo acci�n o informaci�n solicitada no puede estar vac�o.",2,1,"Aceptar");
				return false;
			}
		}
	}

                                 if ($("#DELEGA_A").val()=='SI'  && $("#DELEGADO").val()=="")
                                          {
 		             alertmb("Por favor indique la persona a delegar la comunicaci�n.",2,1,"Aceptar");
		             return false;
                                          }

	return true;
}

asignar_event( 'onclick', 'obligatorio()', 'wl_baprobar');
asignar_event( 'onclick', 'obligatorio()', 'wl_baprobar1');

$("#T_DIAS").change(function(){

    tipo = $("#T_DIAS").val();
	fecha = $("#M1SELLO_H1").val();
	dias = $("#DIAS_R").val();
	
	$.ajax({ type:"GET",
	url:"AJAX/AjaxFecha.asp",
	data:"tipo="+tipo+"&fecha="+fecha+"&dias="+dias,
	success: function(data){
		asignar_valor( 'FECHA_MAX' , data );
		//$("#SPAN_FECHA_MAX").html(data);
		}
	}); 
	
	return true;});

$("#DIAS_R").blur(function(){

    tipo = $("#T_DIAS").val();
	fecha = $("#M1SELLO_H1").val();
	dias = $("#DIAS_R").val();
	
	$.ajax({ type:"GET",
	url:"AJAX/AjaxFecha.asp",
	data:"tipo="+tipo+"&fecha="+fecha+"&dias="+dias,
	success: function(data){
		asignar_valor( 'FECHA_MAX' , data );
		//$("#SPAN_FECHA_MAX").html(data);
		}
	}); 
	
	return true;});

$("#T_DIAS_P").change(function(){

    tipo = $("#T_DIAS_P").val();
	fecha = $("#M1MT_PRORR7").val();
	dias = $("#DIAS_P").val();
	
	$.ajax({ type:"GET",
	url:"AJAX/AjaxFecha.asp",
	data:"tipo="+tipo+"&fecha="+fecha+"&dias="+dias,
	success: function(data){
		asignar_valor( 'FECHA_MAXP' , data );
		//$("#SPAN_FECHA_MAXP").html(data);
		}
	}); 
	
	return true;});

$("#DIAS_P").blur(function(){

    tipo = $("#T_DIAS_P").val();
	fecha = $("#M1MT_PRORR7").val();
	dias = $("#DIAS_P").val();
	
	$.ajax({ type:"GET",
	url:"AJAX/AjaxFecha.asp",
	data:"tipo="+tipo+"&fecha="+fecha+"&dias="+dias,
	success: function(data){
		asignar_valor( 'FECHA_MAXP' , data );
		//$("#SPAN_FECHA_MAXP").html(data);
		}
	}); 
	
	return true;});


/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
