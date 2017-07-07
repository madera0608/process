restaFechas = function(f1,f2)
 {
 var aFecha1 = f1.split('/'); 
 var aFecha2 = f2.split('/'); 
 var fFecha1 = Date.UTC(aFecha1[2],aFecha1[1]-1,aFecha1[0]); 
 var fFecha2 = Date.UTC(aFecha2[2],aFecha2[1]-1,aFecha2[0]); 
 var dif = fFecha2 - fFecha1;
 var dias = Math.floor(dif / (1000 * 60 * 60 * 24)); 
 return dias;
 }

$("#FCHESPPAG").blur(function ()  { 
  if ( $("#FCHESPPAG").val() != "" )
     {
         if (restaFechas($("#FCHSOL").val(),$("#FCHESPPAG").val())  > 1)
             asignar_valor("TPOFINANC","T",1);
         else
             asignar_valor("TPOFINANC","T",0);
     }

});

if (obtener_valor('OPCORSOLF',0)=='T'){

MostrarGrupo( 'DECISION DE FINANCIAMIENTO' );

}else{

OcultarGrupo( 'DECISION DE FINANCIAMIENTO' );

}

if (obtener_valor('FCHDIS')!=''){
	MostrarCampo( 'FCHDIS' );
	MostrarCampo( 'FCHEFEC' );
}
else{
	OcultarCampo( 'FCHDIS' );
	OcultarCampo( 'FCHEFEC' );
}


/******************************************************/
function K_ListasAjax()
{
}
K_ListasAjax();
