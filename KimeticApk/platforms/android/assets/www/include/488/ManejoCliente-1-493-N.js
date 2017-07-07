asignar_valor("wl_baprobar","Enviar");
asignar_valor("wl_baprobar1","Enviar");
OcultarCampo( 'wl_bobjetar',2 );
OcultarCampo( 'wl_bobjetar1',2 );

function asigna_lentes () {
        var filas = obtener_valor('filRESP_INF');
        var i = 1;
        for (i = 1; i <= filas; i++) {
             if((obtener_valorM( 'RESP_INF' ,i , 9) != "")){
                 asignar_valorM('RESP_INF',"<a href=javascript:abrir_archivo(" + i + ",'"+ 'RESP_INF' +"'," +  9 + ") ><img src=images/verexp.png border=0></a>",i,7);               
             }else {
                 asignar_valorM( 'MTZDILIG' , '' , i , 9 );
             }
        }
}

asigna_lentes ();

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
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
