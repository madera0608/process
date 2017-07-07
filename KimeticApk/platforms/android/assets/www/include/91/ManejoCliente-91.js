//FUNCION GENERICA DE AGREGAR ANEXOS
function AgregarAnexos(matriz,sufijo,colanx,colver,colruta){
  var fila = obtener_valor( 'fil'+matriz );
  var sec = fila;
  valor = "<a href=javascript:abrir_ventana('" + matriz + "'," + sec + ",'" + sufijo + "'," + colver + "," + colruta  + ");><img src=images/anexa.gif border=0></a>";
  asignar_valorM( matriz , valor , fila , colanx);  
  return true;
}
function AgregarAnexosIMG(matriz,colanx,colver, colruta){
  var fila = obtener_valor( 'fil'+matriz );
  var sec = fila;
  valor = "<a href=javascript:abrir_ventanaIMG('" + matriz + "'," + sec + "," + colver + "," + colruta  + ");><img src=images/anexa.gif border=0></a>";
  asignar_valorM( matriz , valor , fila , colanx);  
  return true;
}

//FUNCION PARA VISUALIZAR EL ARCHIVO DIGITALIZADO
function abrir_archivo(sec,matriz,col){
 EjecutarInternet(obtener_valorM(matriz,sec,col));
}

function abrir_archivoIMG(sec,matriz,col){
 EjecutarInternet(obtener_valorM(matriz,sec,col));
}

//FUNCION PARA ABRIR VENTANA
function abrir_ventanaIMG(matriz,sec,colver,colruta,dirvir,dirfis){
 showModalDialog('uploadimg.asp?secuencia=' + sec + '&nudoc='+obtener_valor('IGNUDOC') + '&dir_vir='+obtener_valor(dirvir)  +'&dir_fis='+obtener_valor(dirfis),'help:0; dialogHeight:250px; dialogWidth:510px; center:1;  status:no;resizable:no');
 var a = document.cookie.substring(document.cookie.indexOf('RUTA=') + 5,document.cookie.length);
    if(a.indexOf(';') != -1)a = a.substring(0,a.indexOf(';'))
                asignar_valor("EXT" , a);

                if(a !="X"){
   asignar_valorM(matriz,obtener_valor( dirvir)  + obtener_valor('IGNUDOC')  +  "_img" + sec + "." + a ,sec,colruta);
   asignar_valorM(matriz,"<a href=javascript:abrir_archivoIMG(" + sec + ",'"+ matriz +"'," +  colruta +") ><img src=" +obtener_valorM( matriz,sec,colruta) + "  width=80 height=60  border=0></a>",sec,colver);
               }
}

function abrir_ventana(matriz,sec,sufijo,colver,colruta,dirvir,dirfis){
                showModalDialog('upload.asp?secuencia=' + sec + '&nudoc='+obtener_valor('IGNUDOC') + sufijo + '&dir_vir='+obtener_valor(dirvir) +'&dir_fis='+obtener_valor(dirfis),'help:0; dialogHeight:250px; dialogWidth:510px; center:1;  status:no;resizable:no');
                var a = document.cookie.substring(document.cookie.indexOf('RUTA=') + 5,document.cookie.length);
                if(a.indexOf(';') != -1)a = a.substring(0,a.indexOf(';'))
                asignar_valor("EXT" , a);

                if(a !="X"){
                 asignar_valorM(matriz,obtener_valor(dirvir)  + obtener_valor('IGNUDOC')  + sufijo +   "_" + sec + "." + a ,sec,colruta);
                 asignar_valorM(matriz,"<a href=javascript:abrir_archivo(" + sec + ",'"+ matriz +"'," +  colruta + ") ><img src=images/verexp.png border=0></a>",sec,colver);
               }
}