function _showModalDialog(url, width, height, closeCallback) {
    var modalDiv,
        dialogPrefix = window.showModalDialog ? 'dialog' : '',
        unit = 'px',
        maximized = width === true || height === true,
        w = width || 600,
        h = height || 500,
        border = 5,
        taskbar = 40, // windows taskbar
        header = 20,
        x,
        y;

    if (maximized) {
        x = 0;
        y = 0;
        w = screen.width;
        h = screen.height;
    } else {
        x = window.screenX + (screen.width / 2) - (w / 2) - (border * 2);
        y = window.screenY + (screen.height / 2) - (h / 2) - taskbar - border;
    }

    var features = [
            'toolbar=no',
            'location=no',
            'directories=no',
            'status=no',
            'menubar=no',
            'scrollbars=no',
            'resizable=no',
            'copyhistory=no',
            'center=yes',
            dialogPrefix + 'width=' + w + unit,
            dialogPrefix + 'height=' + h + unit,
            dialogPrefix + 'top=' + y + unit,
            dialogPrefix + 'left=' + x + unit
        ],
        showModal = function (context) {
            if (context) {
                modalDiv = context.document.createElement('div');
                modalDiv.style.cssText = 'top:0;right:0;bottom:0;left:0;position:absolute;z-index:50000;';
                modalDiv.onclick = function () {
                    if (context.focus) {
                        context.focus();
                    }
                    return false;
                }
                window.top.document.body.appendChild(modalDiv);
            }
        },
        removeModal = function () {
            if (modalDiv) {
                modalDiv.onclick = null;
                modalDiv.parentNode.removeChild(modalDiv);
                modalDiv = null;
            }
        };

    // IE
    if (window.showModalDialog) {
        window.showModalDialog(url, null, features.join(';') + ';');

        if (closeCallback) {
            closeCallback();
        }
    // Other browsers
    } else {
        var win = window.open(url, '', features.join(','));
        if (maximized) {
            win.moveTo(0, 0);
        }

        // When charging the window.
        var onLoadFn = function () {
                showModal(this);
            },
            // When you close the window.
            unLoadFn = function () {
                window.clearInterval(interval);
                if (closeCallback) {
                    closeCallback();
                }
                removeModal();
            },
            // When you refresh the context that caught the window.
            beforeUnloadAndCloseFn = function () {
                try {
                    unLoadFn();
                }
                finally {
                    win.close();
                }
            };

        if (win) {
            // Create a task to check if the window was closed.
            var interval = window.setInterval(function () {
                try {
                    if (win == null || win.closed) {
                        unLoadFn();
                    }
                } catch (e) { }
            }, 500);

            if (win.addEventListener) {
                win.addEventListener('load', onLoadFn, false);
            } else {
                win.attachEvent('load', onLoadFn);
            }

            window.addEventListener('beforeunload', beforeUnloadAndCloseFn, false);
        }
    }
}


/* FUNCION GENERICA QUE MUESTRA U OCULTA CAMPOS DEL FORMULARIO SEGUN LA OPCION SELECCIONADA*/
/* PARAMETROS:*/
/* e_nbgrupo: Nombre del campo padre que agrupa las opciones de tipo radio button o nombre del campo de lista de valores*/
/* e_nbopcion: Nombre de la opcion que habilita los campos o el valor de la lista de valores*/
/* e_lstcampos:  Arreglo de Arreglo de la opcion de mostrar u ocultar. 1 = Mostrar Campo 2 = Ocultar Campo 3=Mostrar Grupo 4=Ocultar Grupo y  nombre de los campos Ejemplo [[1,"CAMPOA"],[2,"CAMPOB"]]*/
/* EJEMPLOS:
    HabilitaCampos("OPCREPUSUA","SIREPUSUA",[[1,"MTZREPR"],[1,"MTZDIREP"],[1,"MTZUEREP"],[1,"MTZDIPEP"],[1,"IGUALDIREP"]]);
    HabilitaCampos("OPCUSUANO","NOUSUANO",[[1,"MTZUSUA"],[1,"MTZDIRUS"],[1,"MTZUEUS"],[1,"MTZDIPUS"],[1,"IGUALDIRUS"]]); 
    $("input[name='OPCREPUSUA']").click(function() { HabilitaCampos("OPCREPUSUA","SIREPUSUA",[[1,"MTZREPR"],[1,"MTZDIREP"],[1,"MTZUEREP"],[1,"MTZDIPEP"],[1,"IGUALDIREP"]]); } );
    $("input[name='OPCUSUANO']").click(function() { HabilitaCampos("OPCUSUANO","NOUSUANO",[[1,"MTZUSUA"],[1,"MTZDIRUS"],[1,"MTZUEUS"],[1,"MTZDIPUS"],[1,"IGUALDIRUS"]]); } );
*/
function HabilitaCampos(e_nbgrupo,e_nbopcion,e_lstcampos)
{
  if ($("input[name='" + e_nbgrupo +"']:checked").val() ==  e_nbopcion+"****AlterT" ||  $("#"+e_nbgrupo).val() == e_nbopcion || $("#"+e_nbgrupo).attr('checked') )
    {
      for (i=0;i<e_lstcampos.length;i++)
        {
          if (e_lstcampos[i][0]==1)
             MostrarCampo(e_lstcampos[i][1]);
          else if (e_lstcampos[i][0]==2)
             OcultarCampo(e_lstcampos[i][1]);
          else if (e_lstcampos[i][0]==3)
             MostrarGrupo(e_lstcampos[i][1]);
          else if (e_lstcampos[i][0]==4)
             OcultarGrupo(e_lstcampos[i][1]);
        } 
    }
  else 
    {
      for (i=0;i<e_lstcampos.length;i++)
        {
          if (e_lstcampos[i][0]==1)
             OcultarCampo(e_lstcampos[i][1]);
          else  if (e_lstcampos[i][0]==2)
             MostrarCampo(e_lstcampos[i][1]);
          else  if (e_lstcampos[i][0]==3)
             OcultarGrupo(e_lstcampos[i][1]);
          else  if (e_lstcampos[i][0]==4)
             MostrarGrupo(e_lstcampos[i][1]);
        } 
    }

  return true;
}


//FUNCION GENERICA QUE COLOCA LA IMAGEN DE OBLIGATORIO A LOS CAMPOS QUE NO SON DEFINIDOS POR DISENO
/* PARAMETROS:*/
/* e_lstcampos:  Arreglo de nombres de campos a quien se le coloca la imagen de obligatorio Ejemplo ["DESCCAMPOA","DESCCAMPOB"]*/

function CamposObligatorios(e_lstcampos)
 {
   for (i=0;i<e_lstcampos.length;i++)
      $("#"+e_lstcampos[i]).html('<img src="images/obligatorio.gif" alt="" hspace="3">' + $("#"+e_lstcampos[i]).html());

   return true;
 }


//+++++++++++++++++++ MANEJO DE ANEXOS
function AnexoArchivo(matriz, dirvirtual, dirfisica, cola, colv,ruta, parametro,fila){

asignar_valorM(matriz, "<a href=javascript:abrir_ventana('"+matriz+"',"+fila+",'"+parametro+"',"+colv+","+ruta+",'"+dirvirtual+"','"+dirfisica+"');><img src=images/anexa.gif border=0></a>" , fila, cola );
$("#MATNV"+matriz).click(function() { AgregarAnexos(matriz,parametro,cola,colv,ruta,dirvirtual,dirfisica); } );

return true;
}

function AnexoArchivoIMG(matriz, dirvirtual, dirfisica, cola, colv,ruta, parametro){
var fila = obtener_valor('fil'+matriz);

asignar_valorM(matriz, "<a href=javascript:abrir_ventanaIMG('"+matriz+"',"+fila+",'"+parametro+"',"+colv+","+ruta+",'"+dirvirtual+"','"+dirfisica+"');><img src=images/anexa.gif border=0></a>" , fila, cola );
$("#MATNV"+matriz).click(function() { AgregarAnexosIMG(matriz,parametro,cola,colv,ruta,dirvirtual,dirfisica); } );

return true;
}

function AgregarAnexos(matriz,sufijo,colanx,colver,colruta,dirvirtual,dirfisica){
  var fila = $( '#fil'+matriz ).val();
  var sec = fila;
  valor = "<a href=javascript:abrir_ventana('"+matriz+"',"+fila+",'"+sufijo+"',"+colver+","+colruta+",'"+dirvirtual+"','"+dirfisica+"');><img src=images/anexa.gif border=0></a>" ;
  asignar_valorM( matriz , valor , fila , colanx);  
  return true;
}

function AgregarAnexosIMG(matriz,sufijo,colanx,colver,colruta,dirvirtual,dirfisica){
  var fila = $( '#fil'+matriz ).val();
  var sec = fila;
  valor = "<a href=javascript:abrir_ventanaIMG('"+matriz+"',"+fila+",'"+sufijo+"',"+colver+","+colruta+",'"+dirvirtual+"','"+dirfisica+"');><img src=images/anexa.gif border=0></a>" ;
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

function abrir_ventana(matriz,sec,sufijo,colver,colruta,dirvir,dirfis){
                _showModalDialog('upload.asp?secuencia=' + sec + '&nudoc='+obtener_valor('IGNUDOC') + sufijo + '&dir_vir='+obtener_valor(dirvir) +'&dir_fis='+obtener_valor(dirfis),'help:0; dialogHeight:250px; dialogWidth:510px; center:1;  status:no;resizable:no');
                var a = document.cookie.substring(document.cookie.indexOf('RUTA=') + 5,document.cookie.length);
                if(a.indexOf(';') != -1)a = a.substring(0,a.indexOf(';'))
                asignar_valor("EXT" , a);

                if(a !="X"){
                 asignar_valorM(matriz,obtener_valor(dirvir)  + obtener_valor('IGNUDOC')  + sufijo +   "_" + sec + "." + a ,sec,colruta);
                 asignar_valorM(matriz,"<a href=javascript:abrir_archivo(" + sec + ",'"+ matriz +"'," +  colruta + ") ><img src=images/verexp.png border=0></a>",sec,colver);
               }
}

function abrir_ventanaIMG(matriz,sec,sufijo,colver,colruta,dirvir,dirfis){
                _showModalDialog('uploadimg.asp?secuencia=' + sec + '&nudoc='+obtener_valor('IGNUDOC') + sufijo + '&dir_vir='+obtener_valor(dirvir) +'&dir_fis='+obtener_valor(dirfis),'help:0; dialogHeight:250px; dialogWidth:510px; center:1;  status:no;resizable:no');
                var a = document.cookie.substring(document.cookie.indexOf('RUTA=') + 5,document.cookie.length);
                if(a.indexOf(';') != -1)a = a.substring(0,a.indexOf(';'))
                asignar_valor("EXT" , a);

                if(a !="X"){
                 asignar_valorM(matriz,obtener_valor(dirvir)  + obtener_valor('IGNUDOC')  + sufijo +   "_img" +sec + "." + a ,sec,colruta);
                 asignar_valorM(matriz,"<a href=javascript:abrir_archivoIMG(" + sec + ",'"+ matriz +"'," +  colruta + ") ><img src=" +obtener_valor(dirvir)  + obtener_valor('IGNUDOC')  + sufijo +   "_img" +sec + "." + a+" border=0 width=40 height=30></a>",sec,colver);
               }
}

