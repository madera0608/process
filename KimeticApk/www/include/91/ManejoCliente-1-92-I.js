//---MATRIZ ESTATICA PARA AGREGAR LAS PLATILLAS INDIVIDUALMENTE
MatrizEstatica( 'PLANT' );

//---CAMBIAR EL NOMBRE DE LOS BOTONES
OcultarCampo( 'wl_bobjetar',2);
OcultarCampo( 'wl_bobjetar1',2);

asignar_valor( 'wl_baprobar', 'Enviar');
asignar_valor( 'wl_baprobar1', 'Enviar');

//---FUNCION PARA CAPTURAR EL NOMBRE DEL ARCHIVO
function capt_nom_archivo() {
       var ruta_archivo = obtener_valorM('PLANT',1,6);
       nombre_archivo = ruta_archivo.split('/');
       asignar_valorM('PLANT',nombre_archivo[4],1,7);
       return true;
}
asignar_event_matriz( "onchange", "capt_nom_archivo()", 'PLANT', 6);

//---FUNCION PARA HACER QUE APAREZCA LA IMAGEN PARA VISUALIZAR EL ARCHIVO ADJUNTO
function asigna_lentes () {
        var filas = obtener_valor('filPLANT');
        var i = 1;
        for (i = 1; i <= filas; i++) {
                 asignar_valorM('PLANT',"<a href=javascript:abrir_archivo(" + i + ",'"+ 'PLANT' +"'," +  6 + ") ><img src=images/verexp.png border=0></a>",i,5);               
        }
}

asigna_lentes ();

//---FUNCION PARA QUE APAREZCA LA IMAGEN PARA ADJUNTAR ARCHIVOS

//------PARA LA PRIMERA FILA
AnexoArchivo('PLANT', 'DIRVIRPLAN', 'DIRFISPLAN' ,4,5,6,'PLANTILLA');

//------PARA LAS NUEVAS FILAS
asignar_event( "onclick" , "AnexoArchivo('PLANT', 'DIRVIRPLAN','DIRFISPLAN',4,5,6,'PLANTILLA')" , "MATNVPLANT" );

//-----FUNCION PARA ANEXAR ARCHIVOS
function AnexoArchivo(matriz, dirvirtual, dirfisica, cola, colv,ruta, parametro){
      asignar_valorM(matriz, "<a href=javascript:abrir_ventana('"+matriz+"',"+1+",'"+parametro+"',"+colv+","+ruta+",'"+dirvirtual+"','"+dirfisica+"');><img src=images/anexa.gif border=0></a>" , 1, cola );     
      return true;
}


//---FUNCION PARA LIMPIAR EL FORMULARIO SI SE TRATA DE UNA PLATILLA NUEVA
function LimpiarFormulario(){

    if(obtener_valor( 'PLANTILLA' ) == '0'){
         OcultarCampo( 'BUSCARPL', 0 );
         asignar_valor( 'NB_PLANT' , '');
         asignar_valor( 'ID_PLANT' , '');
         asignar_valorM( 'PLANT' , '' , 1 , 1 );
         asignar_valorM( 'PLANT' , '' , 1 , 2 );
         asignar_valorM( 'PLANT' , '' , 1 , 3 );
         asignar_valorM( 'PLANT' , '' , 1 , 7 );
    }else{
         MostrarCampo( 'BUSCARPL', 0 );
    }

       return true;
}

asignar_event( "onchange" , 'LimpiarFormulario()' , 'PLANTILLA');
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
