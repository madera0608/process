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


OcultarCampo( "wl_bobjetar", 2 );

asignar_valor('wl_baprobar', 'Enviar');
asignar_valor('wl_baprobar1', 'Enviar');



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


function DeshabilitarCheck(mat, col){
    var f = obtener_valor( 'fil'+mat );
    for (e = 1 ; e <= f ; e ++) {
    	if($("#M"+e+mat+col).attr('checked')== true && obtener_valorM(mat,e,5)=="1") 
        		$("#M"+e+mat+col).attr("disabled", "disabled");
    }
return true;
}



function validarPrecedencia(matriz){
	var url = obtener_valor('URL');
	var fila = get_fila(matriz);
	var idTarea = obtener_valorM(matriz,fila,4);
	var inValida=true;
	var tabla = document.getElementById(matriz); 
	var filas=tabla.rows.length;
	filas=filas-1;
	if($("#M"+fila+matriz+"3").attr('checked')== true){
		$.ajax({
			type: "GET",
			url: url + "serviciosGin/obtenerTareasPrecedentes/"+idTarea,
			async:false,
			success: function (data) {
				if(!(data.getElementsByTagName("tareas")[0].childNodes[0]===undefined)){
					var tareas= data.getElementsByTagName("tareas")[0].childNodes[0].nodeValue;
					var arreglo=tareas.split(",");
					for (var i=1;i<=filas;i++){
						for (var j=0;j<arreglo.length;j++){
							if (arreglo[j]==obtener_valorM(matriz,i,4)){
								if ( $("#M"+i+matriz+"3").attr('checked')== true && inValida)
									inValida=true;
								else
									inValida=false;
							}
						}
					}
				}
			},
			error: function (XMLHttpRequest, textStatus, errorThrown) {
							alertmb("En este momento no hay conexión con el servidor. Por favor intente más tarde" + errorThrown,0,1,"Aceptar");
							returnValue = false;
					}
		});
	}
	if (!inValida){
		$("#M"+fila+matriz+"3").attr("checked", "");
		alertmb("No puede marcar como ejecutada esta tarea, pues su ejecución esta condicionada por otras actividades aun no culminadas",0,1,"Aceptar");
	}
	return true;
}
function validarUncheck(matriz){
	var url = obtener_valor('URL');
	var fila = get_fila(matriz);
	var idTarea = obtener_valorM(matriz,fila,4);
	var inValida=true;
	var tabla = document.getElementById(matriz); 
	var filas=tabla.rows.length;
	var aux=0;
	filas=filas-1;
	if($("#M"+fila+matriz+"3").attr('checked')!= true){
		for (var i=1;i<=filas;i++){
			if($("#M"+i+matriz+"3").attr('checked')== true){
				aux=obtener_valorM(matriz,i,4);
				$.ajax({
					type: "GET",
					url: url + "serviciosGin/obtenerTareasPrecedentes/"+aux,
					async:false,
					success: function (data) {
						if(!(data.getElementsByTagName("tareas")[0].childNodes[0]===undefined)){
							var tareas= data.getElementsByTagName("tareas")[0].childNodes[0].nodeValue;
							var arreglo=tareas.split(",");
							for (var j=0;j<arreglo.length;j++){
								if (arreglo[j]==idTarea)
									inValida=false;
							}
						}
					},
					error: function (XMLHttpRequest, textStatus, errorThrown) {
									alertmb("En este momento no hay conexión con el servidor. Por favor intente más tarde" + errorThrown,0,1,"Aceptar");
									returnValue = false;
							}
				});
			}
		}
		if (!inValida){
			$("#M"+fila+matriz+"3").attr("checked", "checked");
			alertmb("No puede desmarcar esta tarea, pues otras actividades marcadas como culminadas dependen de ella ",0,1,"Aceptar");
		}
	}
	return true;
}

//FUNCION GENERICA QUE ASIGNA NUMERO DE FILA
function NroFilaM(matriz1){
  var fila = obtener_valor( 'fil'+matriz1 );
    asignar_valorM( matriz1 , fila ,  fila, 1);
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
		if ($("#M"+fila+matriz+colcheck).attr('checked')==true){
			$("#M"+fila+matriz+colhab).show();
		}else{	
			$("#M"+fila+matriz+colhab).hide();
		}	
		return true;
};



/*FUNCIONES PARA EL MANEJO DE ARCHIVOS*/
function AnexoArchivo(matriz, dirvirtual, dirfisica, cola, colv,ruta, parametro){

var fila = obtener_valor('fil'+matriz);

asignar_valorM(matriz, "<a href=javascript:abrir_ventana('"+matriz+"',"+fila+",'"+parametro+"',"+colv+","+ruta+",'"+dirvirtual+"','"+dirfisica+"');><img src=images/anexa.gif border=0></a>" , fila, cola );
asignar_event( "onclick" , "AgregarAnexos('"+matriz+"','"+parametro+"',"+cola+","+colv+","+ruta+")" , "'MATNV"+matriz+"'" );
return true;
}

//FUNCION GENERICA DE AGREGAR ANEXOS
function AgregarAnexos(matriz,sufijo,colanx,colver,colruta){
  var fila = obtener_valor( 'fil'+matriz );
  var sec = fila;
  valor = "<a href=javascript:abrir_ventana('" + matriz + "'," + sec + ",'" + sufijo + "'," + colver + "," + colruta  + ");><img src=images/anexa.gif border=0></a>";
  asignar_valorM( matriz , valor , fila , colanx); 
  return true;
}


//FUNCION PARA VISUALIZAR EL ARCHIVO DIGITALIZADO
function abrir_archivo(sec,matriz,col){
 EjecutarInternet(obtener_valorM(matriz,sec,col));
}


//FUNCION PARA ABRIR VENTANA

function abrir_ventana(matriz,sec,sufijo,colver,colruta,dirvir,dirfis){
                showModalDialog('upload.asp?secuencia=' + sec + '&nudoc='+obtener_valor('IGNUDOC') + sufijo + '&dir_vir='+obtener_valor(dirvir) +'&dir_fis='+obtener_valor(dirfis),'help:0; dialogHeight:250px; dialogWidth:510px; center:1;  status:no;resizable:no');
                var a = document.cookie.substring(document.cookie.indexOf('RUTA=') + 5,document.cookie.length);
                if(a.indexOf(';') != -1)a = a.substring(0,a.indexOf(';'))
                asignar_valor("EXT" , a);
                //if (event != null)
                  //  event.returnValue = false;
                if(a !="X"){
                 asignar_valorM(matriz,obtener_valor(dirvir) +"/"+ obtener_valor('IGNUDOC')  + sufijo +   "_" + sec + "." + a ,sec,colruta);
                 asignar_valorM(matriz,"<a href=javascript:abrir_archivo(" + sec + ",'"+ matriz +"'," +  colruta +  ") ><img src=images/verexp.png border=0></a>",sec,colver);
				 
               }
}

//// FUNCION PARA DETERMINAR QUE SE CULMINARON LAS TAREAS DE UNA ACTIVIDAD
function finTareas(mat,col){
	var f = obtener_valor( 'fil'+mat );
	var k = 1;
	for (k = 1 ; k <= f ; k ++) {
		if($("#M"+k+mat+col).attr('checked')!= true) 
			return false;
	}
	return true;
}

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


/*FUNCION PARA LIMPIAR LOS CAMPOS DE LA MATRIZ CUANDO HAY UN CAMBIO */ 
function LimpiarFila(matriz,lstcolumnas, fil){

	if (fil==undefined){
		var fin=obtener_valor('fil'+matriz);
		var inicio=1;
	}else{
		var fin=fil;
		var inicio= fil;
	}	
    for(fila=inicio;fila<=fin;fila++){
       for (col=0; col<lstcolumnas.length;col++){

	   if (document.getElementById("M"+fila+matriz+lstcolumnas[col]).tagName == "SELECT"){
				asignar_valorM( matriz , "Seleccione" , fila, lstcolumnas[col]); 
	   
	   }else{

				asignar_valorM( matriz , "" , fila, lstcolumnas[col]); 
		}           
		} 
	}
  return true;
}