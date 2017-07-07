//para poner anexos en matriz de recep de doc
AnexoArchivo('MTZ1DOCA', '1DIRVIRDR','1DIRFISDR',4,5,6,'DOC');

asignar_event( "onclick" , "AnexoArchivo('MTZ1DOCA', '1DIRVIRDR','1DIRFISDR',4,5,6,'DOC')" , "MATNVMTZ1DOCA" );


/*para ocultar la matriz de recepcion de doc
HabilitaCampos("OPC1FINDOC","SI1FINDOC",[[2,"MTZ1DOCA"]]); 

$("input[name='OPC1FINDOC']").click(function() { 
LimpiarFila('MTZ1DOCA',[1,2,3,4,5,6]);
HabilitaCampos("OPC1FINDOC","SI1FINDOC",[[2,"MTZ1DOCA"]]); 
} );
*/
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
