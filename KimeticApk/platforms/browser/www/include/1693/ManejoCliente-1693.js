//FUNCION GENERICA QUE MUESTRA U OCULTA CAMPOS DEL FORMULARIO SEGUN LA OPCION SELECCIONADA
/* PARAMETROS:*/
/* e_nbgrupo: Nombre del campo padre que agrupa las opciones de tipo radio button */
/* e_nbopcion: Nombre de la opcion que habilita los campos */
/* e_lstcampos:  Arreglo de Arreglo de la opcion de mostrar u ocultar. 1 = Mostrar Campo 2 = Ocultar Campo 3=Mostrar Grupo 4=Ocultar Grupo 5=Mostrar boton 6= ocultar boton*/
/* y  nombre de los campos Ejemplo [[1,"CAMPOA"],[2,"CAMPOB"]]*/

function HabilitaCampos(e_nbgrupo,e_nbopcion,e_lstcampos){
    if (($("input[name='" + e_nbgrupo +"']:checked").val() ==  e_nbopcion+"****AlterT") || (($("input[name='" + e_nbgrupo +"']:checked").val() ==  e_nbopcion))){
        for (i=0;i<e_lstcampos.length;i++){
            if (e_lstcampos[i][0]==1)
                MostrarCampo(e_lstcampos[i][1]);
            else if (e_lstcampos[i][0]==2)
                OcultarCampo(e_lstcampos[i][1]);
            else if (e_lstcampos[i][0]==3)
                MostrarGrupo(e_lstcampos[i][1]);
            else if (e_lstcampos[i][0]==4)
                OcultarGrupo(e_lstcampos[i][1]);
            else if (e_lstcampos[i][0]==5)
                MostrarCampo(e_lstcampos[i][1],2);
            else if (e_lstcampos[i][0]==6)
                OcultarCampo(e_lstcampos[i][1],2);
        } 

    } else {
        for (i=0;i<e_lstcampos.length;i++) {
            if (e_lstcampos[i][0]==1)
                OcultarCampo(e_lstcampos[i][1]);
            else  if (e_lstcampos[i][0]==2)
                MostrarCampo(e_lstcampos[i][1]);
            else  if (e_lstcampos[i][0]==3)
                OcultarGrupo(e_lstcampos[i][1]);
            else  if (e_lstcampos[i][0]==4)
                MostrarGrupo(e_lstcampos[i][1]);
            else if (e_lstcampos[i][0]==5)
                OcultarCampo(e_lstcampos[i][1],2);
            else if (e_lstcampos[i][0]==6)
                MostrarCampo(e_lstcampos[i][1],2);
        } 

    }
    return true;
}

//FUNCION GENERICA QUE COLOCA LA IMAGEN DE OBLIGATORIO A LOS CAMPOS QUE NO SON DEFINIDOS POR DISENO
/* PARAMETROS:*/
/* e_lstcampos:  Arreglo de nombres de campos a quien se le coloca la imagen de obligatorio Ejemplo ["CAMPOA","CAMPOB"]*/
function CamposObligatorios(e_lstcampos){
   for (i=0;i<e_lstcampos.length;i++)
      $("#"+e_lstcampos[i]).html('<img src="images/obligatorio.gif" alt="" hspace="3">' + $("#"+e_lstcampos[i]).html());

   return true;
}
