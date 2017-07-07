//+++++++++++++++++++ MANEJO DE ANEXOS
function AnexoArchivoIMG(matriz, dirvirtual, dirfisica, cola, colv,ruta, parametro){

asignar_valorM(matriz, "<a href=javascript:abrir_ventanaIMG('"+matriz+"',1,'"+parametro+"',"+colv+","+ruta+",'"+dirvirtual+"','"+dirfisica+"');><img src=images/anexa.gif border=0></a>" , 1, cola );

return true;
}

function AgregarAnexosIMG(matriz,sufijo,colanx,colver,colruta,dirvirtual,dirfisica){
  var fila = $( '#fil'+matriz ).val();
  var sec = '';
  valor = "<a href=javascript:abrir_ventanaIMG('"+matriz+"',"+fila+",'"+sufijo+"',"+colver+","+colruta+",'"+dirvirtual+"','"+dirfisica+"');><img src=images/anexa.gif border=0></a>" ;
  asignar_valorM( matriz , valor , fila , colanx);  
  return true;
}

function abrir_archivoIMG(sec,matriz,col){
 EjecutarInternet(obtener_valorM(matriz,sec,col));
}

function abrir_ventanaIMG(matriz,sec,sufijo,colver,colruta,dirvir,dirfis){
                showModalDialog('uploadmarca.asp?secuencia=&nudoc='+obtener_valor('IGNUDOC') + sufijo + '&dir_vir='+obtener_valor(dirvir) +'&dir_fis='+obtener_valor(dirfis),'help:0; dialogHeight:250px; dialogWidth:510px; center:1;  status:no;resizable:no');
                var a = document.cookie.substring(document.cookie.indexOf('RUTA=') + 5,document.cookie.length);
                if(a.indexOf(';') != -1)a = a.substring(0,a.indexOf(';'))
                asignar_valor("EXT" , a);

                if(a !="X"){
                 asignar_valorM(matriz,obtener_valor(dirvir)  + "marca_de_agua/"+obtener_valor('IGNUDOC')  + sufijo +  "." + a ,sec,colruta);
                 asignar_valorM(matriz,"<a href=javascript:abrir_archivoIMG(" + sec + ",'"+ matriz +"'," +  colruta + ") ><img src=" +obtener_valor(dirvir)  +  "marca_de_agua/"+obtener_valor('IGNUDOC')  + sufijo +  "." + a+" border=0 ></a>",sec,colver);
               }
}
