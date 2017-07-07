MatrizEstatica( 'TABLA' );

//----------------------------------------------------------------------------------------------------------
//Obtener la tabla
var tabla = document.getElementById('TABLA');
var filas=tabla.rows.length;
filas = filas*2;

//-----------------------------------------------------------------------------------------------------------
//Recorro todas las final
for (i=1;i<filas-1;i=i+2)
{ 
    //Obtengo el valor que esta en la primera  celda de la fila (escritura)
    //Para el valor de un campo de lectura: var indice =  tabla.rows[i].cells[0].children[1].value;
    var indice =  tabla.rows[i].cells[1].children[0].value;
    alert("childre");
    //El nombre de la clases el parent (El padre es sobre el que se hace click para expandir)
    document.getElementById('TABLA').rows[i].className = "parent";
    alert("parent");
    //Al id de la fila le coloco el valor del nu_doc
    document.getElementById('TABLA').rows[i].id = indice;
    alert("rows[i].id");
    //A la fila le inserto otra fila debajo que es la que va a tener la informacion que se quiere mostrar
    document.getElementById('TABLA').insertRow(i+1).html = '<td colspan="4" style="font-size:10px;" bgcolor="#D3E7F5" id="child-'+indice+'"></td>';
    alert("rinner");
    //A las filas hijas le coloco como nombre "child" y el indice de la fila padre
    document.getElementById('TABLA').rows[i+1].className = "child-"+indice;

}


//------------------------------------------------------------------------------------------------------------
//Funcion de JQUERY
var id;
$(function() {
	$('tr.parent')
		.css("cursor","pointer")
		.attr("title","Ver mas informacion")
		.click(function(){
			$(this).siblings('.child-'+this.id).toggle();
                                                 id = this.id;   
                
                                                $.ajax( { type: "GET", url: "http://localhost/kimetic/ajax/AjaxTabla.asp?seleccionado="+id, 
                                                           success:   function(data) { 
                                                                   document.getElementById('child-'+id).innerHTML = data;
                                                           }  
                                                });
		});
	$('tr[class^="child-"]').hide().children('td');

});


/******************************************************/
function K_ListasAjax()
{
K_ListasAjaxMatriz('TABLA', '3');
}
K_ListasAjax();
