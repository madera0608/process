//para poner anexos en matriz de recep de doc
AnexoArchivo('MTZ2DOCA', '1DIRVIRDR','1DIRFISDR',4,5,6,'DOC');

asignar_event( "onclick" , "AnexoArchivo('MTZ2DOCA', '1DIRVIRDR','1DIRFISDR',4,5,6,'DOC')" , "MATNVMTZ2DOCA" );


/*para ocultar la matriz de recepcion de doc
HabilitaCampos("OPC2FINDOC","SI2FINDOC",[[2,"MTZ2DOCA"]]); 

$("input[name='OPC2FINDOC']").click(function() { 
LimpiarFila('MTZ2DOCA',[1,2,3,4,5,6]);
HabilitaCampos("OPC2FINDOC","SI2FINDOC",[[2,"MTZ2DOCA"]]); 
} );

*/
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
