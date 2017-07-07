//Asignar el valor :Ignudoc: a toda la columna 6 de una matriz llamada "MTRECOPT". 
 
//function recorrido(){ 
    //var numfilas = obtener_valor("filMTRECOPT");//obtiene el número de filas de la matriz
    //var i = 0;
    //for(i=1;i<=numfilas;i++){
               //asignar_valorM("MTRECOPT",obtener_valor("IGNUDOC"),i,6);
    //}
    //return(true); 
//} 
//asignar_event_matriz("onclick" , "recorrido()" ,'MTRECOPT' ,1);
 
MatrizEstatica('MTPLAZOS');

asignar_valor( 'MATNVMTUADMIN' , 'Agregar participación');
asignar_valor( 'MATBOMTUADMIN' , 'Eliminar  participación');

asignar_valor( 'MATNVMTRECBAS' , 'Agregar recaudo');
asignar_valor( 'MATBOMTRECBAS' , 'Eliminar recaudo'); 

asignar_valor( 'MATNVMTRECOPT' , 'Agregar característica');
asignar_valor( 'MATBOMTRECOPT' , 'Eliminar característica'); 

asignar_valor( 'MATNVMTOTRARE' , 'Agregar respuesta');
asignar_valor( 'MATBOMTOTRARE' , 'Eliminar respuesta'); 



//function AsignarCod()
//{
  //var filas = obtener_valor("filMTRECOPT");
  //var pivote = obtener_valorM("MTRECOPT",1,1);
  //var j = 1;
  //asignar_valorM("MTRECOPT",j,1,6);
  //for(var i=2;i<=filas;i++)
   //{
     //if (obtener_valorM("MTRECOPT",i,1)=='' ||obtener_valorM("MTRECOPT",i,1)==pivote) 
        //asignar_valorM("MTRECOPT",j,i,6);
     //else
      //{  pivote = obtener_valorM("MTRECOPT",i,1);
         //j=j+1;
         //asignar_valorM("MTRECOPT",j,i,6); 
      //}
   //}
//}

//AsignarCod();


/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
