HabilitaCampos("OPCAPFIN","NOAPFIN",[[1,"MOTIVNEG"]]); 
HabilitaCampos("OPCFINFINI","NOFINFINI",[[1,"MOTNEGFINI"]]); 

HabilitaCampos("OPCAPFIN","SIAPFIN",[[1,"OBSFINAN"]]); 
HabilitaCampos("OPCFINFINI","SIFINFINI",[[1,"OBSFINANFI"]]); 


$("input[name='OPCAPFIN']").click(function() { 
HabilitaCampos("OPCAPFIN","NOAPFIN",[[1,"MOTIVNEG"]]); 
HabilitaCampos("OPCAPFIN","SIAPFIN",[[1,"OBSFINAN"]]); 
} );


$("input[name='OPCFINFINI']").click(function() { 
HabilitaCampos("OPCFINFINI","NOFINFINI",[[1,"MOTNEGFINI"]]); 
HabilitaCampos("OPCFINFINI","SIFINFINI",[[1,"OBSFINANFI"]]); 
} );
/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
