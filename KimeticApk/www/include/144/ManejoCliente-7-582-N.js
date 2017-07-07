if (obtener_valor('OPCTPOBAJA',1) =='T')
{
   MostrarCampo( 'PROPFIN');
}
else
{
  OcultarCampo( 'PROPFIN' );
 }


function propAltoValor()
{
   filas = obtener_valor('filPROPFIN');
   filAltoValor = 1;

     for(i=2;i<=filas;i++)
    { 
         if (obtenerFloat(obtener_valorM('PROPFIN',filAltoValor,2),Formatodec)<obtenerFloat(obtener_valorM('PROPFIN',i,2),Formatodec))
	        filAltoValor=i; 
   }
     asignar_valor( 'MTOFINIQ' , obtener_valorM('PROPFIN',filAltoValor,2));
     asignar_valor( 'MONTPRE' ,  obtener_valorM('PROPFIN',filAltoValor,3));
     asignar_valor( 'MONTSERV' , obtener_valorM('PROPFIN',filAltoValor,4));
     asignar_valor( 'MONTPREF' , obtener_valorM('PROPFIN',filAltoValor,5))
 }

if (obtener_valor('OPCTPOBAJA',1) =='T')
   propAltoValor();
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
