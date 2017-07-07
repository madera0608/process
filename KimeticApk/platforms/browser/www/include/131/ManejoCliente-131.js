OcultarGrupo( 'Funcional' );

//FUNCION GENERICA QUE COLOCA LA IMAGEN DE OBLIGATORIO A LOS CAMPOS QUE NO SON DEFINIDOS POR DISENO
/* PARAMETROS:*/
/* e_lstcampos:  Arreglo de nombres de campos a quien se le coloca la imagen de obligatorio Ejemplo ["CAMPOA","CAMPOB"]*/

function CamposObligatorios(e_lstcampos)
 {
   for (i=0;i<e_lstcampos.length;i++)
      $("#"+e_lstcampos[i]).html('<img src="images/obligatorio.gif" alt="" hspace="3">' + $("#"+e_lstcampos[i]).html());

   return true;
 }


//FUNCION GENERICA QUE APLICA LA REGLA DE VALIDACION A LAS COLUMNAS DE UNA TABLA
/* PARAMETROS:*/
//matriz: Nombre de la matriz a aplicar las reglas de negocio
//reglas: un arreglo de arreglo , constituido por el nombre de la columna y la regla a aplicar
// Ejemplo: [["MTZUSUA3",{required: true ,messages: { required: "Por favor indique el numero de identificacion"}}],["MTZUSUA4",{required: true}]]

//FUNCION GENERICA QUE APLICA LA REGLA DE VALIDACION A LAS COLUMNAS DE UNA TABLA
/* PARAMETROS:*/
//matriz: Nombre de la matriz a aplicar las reglas de negocio
//reglas: un arreglo de arreglo , constituido por el nombre de la columna y la regla a aplicar
// Ejemplo: [["MTZUSUA3",{required: true ,messages: { required: "Por favor indique el numero de identificacion"}}],["MTZUSUA4",{required: true}]]

function ValidarFilas(matriz,reglas) {              
 var filas = $("#fil"+matriz).val(); //$('#'+matriz+' >tbody >tr').length -1;
 var celda,strRegla,strColumna,objRegla;

 for (fila=1;fila<=filas;fila++)
  {
    for(col=0;col<reglas.length;col++)
     { celda = $("#M"+fila+reglas[col][0]);
           if (celda.rules.length>2)
           celda.rules('remove');
       // Se pregunta si en la regla hacen referencia a una columna para convertila en celda e incorporarlo
       // La columna se identifica por que esta encerrado entre ::
      strRegla = objectToString(reglas[col][1]);
      while (strRegla.indexOf("::") > 0 )
              {  
                  strColumna = strRegla.substring(strRegla.indexOf("::")+2,strRegla.indexOf("::",strRegla.indexOf("::") +1));
                  strRegla = strRegla.replace("::"+strColumna+"::","#M"+fila+strColumna);
              }
       eval("celda.rules('add',"+ strRegla + ")");      
     }
   }
}

function objectToString(o){
   
   var parse = function(_o){
   
       var a = [], t;
       
       for(var p in _o){
       
           if(_o.hasOwnProperty(p)){
           
               t = _o[p];
               
               if(t && typeof t == "object"){
               
                   a[a.length]= p + ":{ " + arguments.callee(t).join(", ") + "}";
                   
               }
               else {
                   
                   if(typeof t == "string"){
                   
                       a[a.length] = [ p+ ": \"" + t.toString() + "\"" ];
                   }
                   else{
                       a[a.length] = [ p+ ": " + t.toString()];
                   }
                   
               }
           }
       }
       
       return a;
       
   }
   
   return "{" + parse(o).join(", ") + "}";
   
}

/* FUNCION GENERICA QUE MUESTRA U OCULTA CAMPOS DEL FORMULARIO SEGUN LA OPCION SELECCIONADA*/
/* PARAMETROS:*/
/* e_nbgrupo: Nombre del campo padre que agrupa las opciones de tipo radio button o nombre del campo de lista de valores*/
/* e_nbopcion: Nombre de la opcion que habilita los campos o el valor de la lista de valores*/
/* e_lstcampos:  Arreglo de Arreglo de la opcion de mostrar u ocultar. 1 = Mostrar Campo 2 = Ocultar Campo 3=Mostrar Grupo 4=Ocultar Grupo y  nombre de los campos Ejemplo [[1,"CAMPOA"],[2,"CAMPOB"]]*/
function HabilitaCampos(e_nbgrupo,e_nbopcion,e_lstcampos)
{
  if ($("input[name='" + e_nbgrupo +"']:checked").val() ==  e_nbopcion+"****AlterT" ||  $("#"+e_nbgrupo).val() == e_nbopcion)
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
/* e_lstcampos:  Arreglo de nombres de campos a quien se le coloca la imagen de obligatorio Ejemplo ["CAMPOA","CAMPOB"]*/

function CamposObligatorios(e_lstcampos)
 {
   for (i=0;i<e_lstcampos.length;i++)
      $("#"+e_lstcampos[i]).html('<img src="images/obligatorio.gif" alt="" hspace="3">' + $("#"+e_lstcampos[i]).html());

   return true;
 }

/*ASIGNACION DE LA FUNCION PARA MOSTRAR LA IMAGEN DE CAMPO OBLIGATORIO EN LOS CAMPOS DEL FORM*/



//FUNCION GENERICA QUE ASIGNA NUMERO DE FILA
function NroFilaM(matriz1){
  var fila = obtener_valor( 'fil'+matriz1 );
    asignar_valorM( matriz1 , fila ,  fila, 1);
    return true;
}

//asignar_event( "onclick" , "NroFilaM('MZTSEACC')" , "MATNVMZTSEACC");
// El boton que agrega una fila se llama MATNV + Nombre de la matriz

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