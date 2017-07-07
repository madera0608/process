OcultarCampo('wl_bguardar', 2);
asignar_valor( 'wl_bsolicitar' , 'Guardar recaudos' );
asignar_valor( 'wl_bsolicitar1' , 'Guardar recaudos' );
asignar_valor( 'MATNVRECAGRE' , 'Nuevo recaudo');
asignar_valor( 'MATBORECAGRE' , 'Borrar nuevo recaudo');
OcultarCampo('MATNVMTRECAUD', 2);
asignar_valor( 'MATBOMTRECAUD' , 'Eliminar recaudo');

asignar_valor( 'MATNVMTCARACT' , 'Nueva caracteristica');
asignar_valor( 'MATBOMTCARACT' , 'Borrar caracteristica');

MatrizEstatica('RECARACT');

function ElimProd()
{
   var CantFilas = obtener_valor("filMTRECAUD");
   var mat = document.getElementById("MTRECAUD");
   var NroFila; 
   for(var t = 1;t<=CantFilas;t++)
    {
      if (mat.rows[t].cells[0].childNodes[0].checked )
       {
         if (obtener_valorM("MTRECAUD",  t , 5 ) == '0')
           {
              if (obtener_valorM("RECELIM",  1 , 1 ) != '')
                 IngresarFila('RECELIM','TTT');          

             NroFila = obtener_valor("filRECELIM" );
             asignar_valorM("RECELIM", obtener_valorM("MTRECAUD" , t , 1 ), NroFila , 1);
             asignar_valorM("RECELIM", obtener_valorM("MTRECAUD" , t , 3 ) , NroFila , 2);
           }
         else
              {  
                asignar_valor("CHKBOXMATMTRECAUD" +t ,'F');   
                alertmb("El recaudo " + obtener_valorM("MTRECAUD" , t , 1 ) + " no puede ser eliminado ya que esta asignado a uno o mas tipos de solicitudes",2,1,"Aceptar");
              }  
       }
    }

  return true;
}

MatrizEstatica('RECELIM');

OcultarCampo( 'RECELIM', 3 ,3 );

asignar_event( "onclick" , "ElimProd()" , "MATBOMTRECAUD" , 1);

/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
