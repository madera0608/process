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

//FUNCION PARA HABILITAR UNA COLUMNA DE UNA MATRIZ EN BASE A UNA CON UN CHECK
function HabilitaPorCheck(matriz, colcheck, colhab){
	var fila = get_fila(matriz);
	if ($("#M"+fila+"MTZNOMIN18").val()!=""){
		alertmb("No puede dar de baja a una n�mina que posea solicitudes activas",0,1,"Aceptar");
		$("#M"+fila+"MTZNOMIN19").attr('checked',false);
	}
	if ($("#M"+fila+matriz+colcheck).attr('checked')==true){
		$("#M"+fila+matriz+colhab).show();
		$("#M"+fila+matriz+"21").show();
	}else{	
		$("#M"+fila+matriz+colhab).hide();
		$("#M"+fila+matriz+colhab).val("");
		$("#M"+fila+matriz+"21").hide();
		$("#M"+fila+matriz+"21").attr('checked',false);
	}	
	return true;
};


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
