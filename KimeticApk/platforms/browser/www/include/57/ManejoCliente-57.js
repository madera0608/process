////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//FUNCION GENERICA QUE COLOCA LA IMAGEN DE OBLIGATORIO A LOS CAMPOS QUE NO SON DEFINIDOS POR DISENO
/* PARAMETROS:*/
/* e_lstcampos:  Arreglo de nombres de campos a quien se le coloca la imagen de obligatorio Ejemplo ["CAMPOA","CAMPOB"]*/

function CamposObligatorios(e_lstcampos)
 {
   for (i=0;i<e_lstcampos.length;i++)
      $("#"+e_lstcampos[i]).html('<img src="images/obligatorio.gif" alt="" hspace="3">' + $("#"+e_lstcampos[i]).html());

   return true;
 }
 
 
