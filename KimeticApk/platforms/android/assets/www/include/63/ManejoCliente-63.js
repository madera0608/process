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