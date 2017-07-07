
//para poner anexos en matriz de recep de doc
AnexoArchivo('MTZDOCA', '1DIRVIRDR','1DIRFISDR',4,5,6,'DOC');

asignar_event( "onclick" , "AnexoArchivo('MTZDOCA', '1DIRVIRDR','1DIRFISDR',4,5,6,'DOC')" , "MATNVMTZDOCA" );


/*para ocultar la matriz de recepcion de doc
HabilitaCampos("OPCFINREC","SIFINREC",[[2,"MTZDOCA"]]); 

$("input[name='OPCFINREC']").click(function() { 
LimpiarFila('MTZDOCA',[1,2,3,4,5,6]);
HabilitaCampos("OPCFINREC","SIFINREC",[[2,"MTZDOCA"]]); 
} );

*/

/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
