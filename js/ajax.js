/* 
 * Diseñado y programado por Dani de Saro © 2019
 * Contenidos bajo licencia Creative Commons  * 
 */


var nav;
var activoX=null;
		if(navigator.userAgent.indexOf("MSIE")!=-1 || navigator.userAgent.indexOf(".NET CLR")!=-1){
	nav="IE";

	}else if(navigator.userAgent.indexOf("Edge")!=-1){
	nav="Edge";

	}else if(navigator.userAgent.indexOf("Firefox")!=-1){
	nav="Firefox";	

	}else if(navigator.userAgent.indexOf("Chrome")!=-1 && navigator.userAgent.indexOf("OPR")==-1){
	nav="Chrome";	

	}else if(navigator.userAgent.indexOf("Safari")!=-1  && navigator.userAgent.indexOf("OPR")==-1){
	nav="Safari";	

	}else if(navigator.userAgent.indexOf("Opera")!=-1 || navigator.userAgent.indexOf("OPR")!=-1){
	nav="Opera";	

	}else{
	nav="Desconocido";
	}

var textoBusqueda;
var resultBusqueda;
function iniciar(){
resultBusqueda=document.getElementById('resultBusqueda');
textoBusqueda=document.getElementById('textoBusqueda');
var btnBuscar=document.getElementById('btnBuscar');
btnBuscar.addEventListener('click', function(){
    
    leer(""+rutaDepth +"js/busquedas.json");
}, false);

}
function leer(archivo){
    
    var rutaHttp=location.pathname;
    rutaHttp=rutaHttp.substring(0,rutaHttp.lastIndexOf("/")+1);
    

    var ruta=""+ location.protocol +"//"+ location.host +""+ rutaHttp +""+ archivo +"";
    //alert(ruta)
var url=ruta;
var solicitud=new XMLHttpRequest();

solicitud.addEventListener('loadstart',comenzar,false);
solicitud.addEventListener('progress',estado,false);
solicitud.addEventListener('load',mostrar,false);
solicitud.open("GET", url, true);
solicitud.send(null);
}
function mostrar(e){

objJson = JSON.parse(e.target.responseText);
resultBusqueda.innerHTML=objJson.listaTemas[6].img_;

}
function comenzar(){
resultBusqueda.innerHTML='<progress value="0" max="100">0%</progress>';
}
function estado(e){
if(e.lengthComputable){
var por=parseInt(e.loaded/e.total*100);
var barraprogreso=resultBusqueda.querySelector("progress");
barraprogreso.value=por;
barraprogreso.innerHTML=por+'%';
}
}
//window.addEventListener('load', iniciar, false);
