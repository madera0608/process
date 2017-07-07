asignar_valor("wl_baprobar","Enviar");
asignar_valor("wl_baprobar1","Enviar");
OcultarCampo( 'wl_bobjetar',2 );
OcultarCampo( 'wl_bobjetar1',2 );

MatrizEstatica( 'MT_SI' );

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
	if(obtener_valor( 'DIAS_P' ) != ""){
		MostrarGrupo( 'Definición de la prórroga' );
	}else{
		OcultarGrupo( 'Definición de la prórroga' );
	}
	return true;
}

ocultar();

function obligatorio(){
	if(obtener_valor('DELEGAR_AC') == 'NO'){
		if(obtener_valor('FINAL_T') == ''){
			alertmb("Campo Listo y anexada respuesta no puede ser vacio.",2,1,"Aceptar");
			return false;
		}else{
			if(obtener_valor('FINAL_T') == 'SI'){
				if(obtener_valorM('MT_SI',1,3) < 4){
					alertmb("El status de la tarea no puede ser diferente a Terminado o No corresponde para poder finalizar la tarea.",2,1,"Aceptar");
					return false;
				}
			}
		}
	}
	return true;
}

asignar_event( 'onclick', 'obligatorio()', 'wl_baprobar');
asignar_event( 'onclick', 'obligatorio()', 'wl_baprobar1');


function AnexoArchivo(matriz, dirvirtual, dirfisica, cola, colv,ruta, parametro){
      var fila =obtener_valor( "filMT_SI" );
      var id_diligencia = obtener_valorM( 'RESP_INF', 1 , 1);
      asignar_valorM( 'MT_SI' ,  id_diligencia , fila , 7 );
      asignar_valorM(matriz, "<a href=javascript:previo_abrir_ventana('"+matriz+"',"+fila+",'"+parametro+"',"+colv+","+ruta+",'"+dirvirtual+"','"+dirfisica+"');><img src=images/anexa.gif border=0></a>" , fila, cola );     
      //---------------------------------------------------------------------------------    

      return true;
}

function previo_abrir_ventana(matriz,sec,sufijo,colver,colruta,dirvir,dirfis){
       abrir_ventana(matriz,sec,sufijo,colver,colruta,dirvir,dirfis);
       asigna_lentes ("MT_SI",colruta,5);
}

//Para la primera fila
var param = '_' + obtener_valor( 'PADRE' ) + 'DOC';
//alert(param);
AnexoArchivo('MT_SI', 'DIREC_VIR','DIREC_FIS',4,5,8,param);

//Para las nuevas filas
//asignar_event( "onclick" , "AnexoArchivo('MT_SI', 'DIRVIROFI','DIRFISOFI',9,10,22,'OFICIO')" , "MATNVMT_SI" );

//$(document).ready(function(){ 
//      $("#M1MT_SI7").setMask("99/99/9999",{placeholder:""});
//});

/* NOMBRE DEL ARCHIVO A ADJUNTAR */
//CAPTURAR ARCHIVO
function capt_nom_archivo() {
       var ruta_archivo = obtener_valorM("MT_SI",get_fila('MT_SI'),8);
       nombre_archivo = ruta_archivo.split('/');
       asignar_valorM("MT_SI",nombre_archivo[4],get_fila('MT_SI'),5);
       return true;
}
asignar_event_matriz( "onchange", "capt_nom_archivo()", "MT_SI", 8);

function asigna_lentes (matriz, ruta, archivo) {
//Funcion para mostrar la imagen de lentes de visualizar archivos
        var filas = obtener_valor('fil'+matriz);

        for (i = 1; i <= filas; i++) {
                 var indice = i;
                 var ruta_archivo = obtener_valorM( matriz, i , ruta);
                 if(obtener_valorM( matriz, i , ruta) != undefined){
                       asignar_valorM(matriz,"<a href=javascript:abrir_archivo(" + i + ",'"+ matriz +"'," +  ruta + ") ><img src=images/verexp.png border=0></a>",i,6);                                     
                       nombre_archivo = ruta_archivo.split('/');
                       asignar_valorM(matriz,nombre_archivo[4],indice,archivo);  
                 }
       }
return true;
}

//asigna_lentes ("MT_SI",9,8);

/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
