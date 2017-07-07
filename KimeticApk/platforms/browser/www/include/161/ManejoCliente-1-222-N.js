//para poner anexos en matriz de recep de doc
AnexoArchivo('MTZ3DOCA', '1DIRVIRDR','1DIRFISDR',4,5,6,'DOC');

asignar_event( "onclick" , "AnexoArchivo('MTZ3DOCA', '1DIRVIRDR','1DIRFISDR',4,5,6,'DOC')" , "MATNVMTZ3DOCA" );


/*para ocultar la matriz de recepcion de doc
HabilitaCampos("OPC3FINDOC","SI3FINDOC",[[2,"MTZ3DOCA"]]); 

$("input[name='OPC3FINDOC']").click(function() { 
LimpiarFila('MTZ3DOCA',[1,2,3,4,5,6]);
HabilitaCampos("OPC3FINDOC","SI3FINDOC",[[2,"MTZ3DOCA"]]); 
} );

*/
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
