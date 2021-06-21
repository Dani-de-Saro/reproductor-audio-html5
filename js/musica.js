/*
 * Diseñado y programado por Dani de Saro © 2019
 * Contenidos bajo licencia Creative Commons  *
 */
/*var textoBusqueda;
var resultBusqueda;*/

var objJson2;
var imgLoad;
var t_old;
var miPlayer;
var cadenaLista=[];
var temas=[];
var sel;
var miImg1=new Image();
//miImg1.src="../img/aniFire.png";
miImg1.src="imgs/logotipo-transp-mini.png";
var miImg2=new Image();
//miImg2.src="../img/aniFire.gif";
miImg2.src="imgs/ani-logotipo-mini.gif";
t_old=""+ document.title +"";
var sliderVol;
var slider_speed;
var loopcheck;
var panelinfomusic;
var panelinfomusic2;
var slidertime;
var listadotemasdescarga;

function eventos(){

miPlayer.addEventListener("loadeddata",function(){
    sel=document.getElementById("sel");

        if(sel.options[sel.selectedIndex].value!=undefined && sel.options[sel.selectedIndex].value!="undefined" && sel.options[sel.selectedIndex].value!=""){
        document.title="cargado con éxito "+ temas[sel.options[sel.selectedIndex].value] +"...";
        imgLoad.src=miImg1.src;
    }});
    miPlayer.addEventListener("loadstart",function(){
            if(sel.options[sel.selectedIndex].value!=undefined && sel.options[sel.selectedIndex].value!="undefined" && sel.options[sel.selectedIndex].value!=""){
            document.title="...cargando "+ temas[sel.options[sel.selectedIndex].value] +"...";
            }
        });
}
function initVariables(){
try{
miPlayer=document.getElementById("miPlayer");
imgLoad=document.getElementById("imgLoad");
sel=document.getElementById("sel");
resultBusqueda=document.getElementById('resultBusqueda');
sliderVol=document.getElementById('sliderVol');

sliderVol.addEventListener("input",function(){
    volumenChange();
    });


slider_speed=document.getElementById('sliderSpeed');

slider_speed.addEventListener("input",function(){
    speedChange();
    });

loopcheck=document.getElementById('loopcheck');

        loopcheck.addEventListener("input",function(){
        checkboxChange();
        });

panelinfomusic=document.getElementById('panelInfoMusic');
panelinfomusic2=document.getElementById('panelInfoMusic2');
slidertime=document.getElementById('sliderTime');

slidertime.addEventListener("input",function(){
    miPlayer.currentTime=slidertime.value;
    var duracion1_=Math.floor(miPlayer.currentTime);
    var duracion2_=Math.floor(duracion1_/60);
    var duracion3_=Math.floor(duracion1_ % 60);
    var duraciontotal_;
        if(duracion2_<1){
        duraciontotal_=""+ duracion1_ +" segundos";
        }else{
        duraciontotal_=""+ duracion2_ +" minutos y "+ duracion3_ +" segundos";
        }
    panelinfomusic2.innerHTML="Posición: "+ duraciontotal_ +"";
    });

    listadotemasdescarga=document.getElementById('listadoTemasDescarga');
    eventos();
    var rnd=Math.random();
    leerListaTemas(""+ rutaDepth +"js/listatemas.json?rnd="+ rnd +"");
    play_(0);
}catch(error){
alert(error);
}
}


function leerListaTemas(archivo){

var rutaHttp=location.pathname;
rutaHttp=rutaHttp.substring(0,rutaHttp.lastIndexOf("/")+1);
var ruta=""+ location.protocol +"//"+ location.host +""+ rutaHttp +""+ archivo +"";

var url=ruta;
var solicitud=new XMLHttpRequest();

solicitud.addEventListener('loadstart',initLeerListaTemas,false);
solicitud.addEventListener('progress',estado,false);
solicitud.addEventListener('load',mostrarLista,false);
solicitud.open("GET", url, true);
solicitud.send(null);
}
    function initLeerListaTemas(){
    resultBusqueda.innerHTML='<progress value="0" max="100">0%</progress>';
    }

    function mostrarLista(e){
    objJson2 = JSON.parse(e.target.responseText);

/**test**/

    cargarLista();
    rellenarListaTemas();

    return objJson2;
    }

        window.addEventListener('load', initVariables, false);

function rellenarListaTemas(){
try{
    sel.options.length=0;
/*test**/

var opcionnew1=document.createElement("option");
        opcionnew1.setAttribute("value","");
        opcionnew1.text="Selecciona un tema";
        sel.append(opcionnew1);
/**fin test**/
    for(var x=0;x<temas.length;x++){
        var opcionnew=document.createElement("option");
        opcionnew.setAttribute("value",x);
        opcionnew.text=temas[x];
        sel.append(opcionnew);

        var capaTema=document.createElement("div");
        var tema=document.createElement("a");
var rutaHttp=location.pathname;
rutaHttp=rutaHttp.substring(0,rutaHttp.lastIndexOf("/")+1);
//alert(""+ location.protocol +"//"+ location.host +""+ rutaHttp +"../"+ temas[x] +"")
        tema.setAttribute("href",""+ location.protocol +"//"+ location.host +""+ rutaHttp +"../public/mus/"+ temas[x] +"");
        tema.setAttribute("class","enlaces-temas");
        tema.innerHTML=temas[x];
        listadotemasdescarga.append(capaTema);
        capaTema.append(tema);
        }

}catch(error){
console.error(error);
}
}


function cargarLista(){
cadenaLista=objJson2.listaTemas;
    for(var i=0;i<cadenaLista.length;i++){
    temas[temas.length]=cadenaLista[i].arch.replace(String.fromCharCode(32),"");
    }
}


function play_(numero){

    if(numero=="undefined" || numero==undefined || numero==""){
    return;
    }
var cadena="public/mus/"+ temas[numero] +"";

miPlayer.src=cadena;
imgLoad.src=miImg2.src;
miPlayer.oncanplay=function(){
var duracion1=Math.floor(miPlayer.duration);
var duracion2=Math.floor(duracion1/60);
var duracion3=Math.floor(duracion1 % 60);
var duraciontotal;
    if(duracion2<1){
    duraciontotal=""+ duracion1 +" segundos";
    }else{
    duraciontotal=""+ duracion2 +" minutos y "+ duracion3 +" segundos";
    }

panelinfomusic.innerHTML="Duración: "+ duraciontotal +"";
slidertime.min=0;
slidertime.max=duracion1;
}

setTimeout(function(){
    document.title=t_old;
    },2000);
}

function playGo(){
var volumen=sliderVol.value;

var volumencadena="0."+ volumen +"";
    if(volumen==10){
    volumencadena="1.0";
    }

var speed=sliderSpeed.value;

var speedplay=""+ speed +".0";

    if(speed>=5){

    var re_speed;
        if(speed==5){
        re_speed=1;
        }
        if(speed==6){
        re_speed=2;
        }
        if(speed==7){
        re_speed=3;
        }
        if(speed==8){
        re_speed=4;
        }
        if(speed>8){
        re_speed=4;
        }
    speedplay=""+ re_speed +".0";
    }
    if(speed<=4){

    var re_speed2;
        if(speed==4){
        re_speed=4;
        }
        if(speed==3){
        re_speed=3;
        }
        if(speed<3){
        re_speed=3;
        }

    speedplay="0."+ re_speed +"";

    }

miPlayer.volume=volumencadena;
miPlayer.playbackRate=speedplay;
    if(loopcheck.checked){
    miPlayer.loop=true;
    }else{
    miPlayer.loop=false;

    }

miPlayer.ontimeupdate=function(){
var duracion1_=Math.floor(miPlayer.currentTime);
var duracion2_=Math.floor(duracion1_/60);
var duracion3_=Math.floor(duracion1_ % 60);
var duraciontotal_;
    if(duracion2_<1){
    duraciontotal_=""+ duracion1_ +" segundos";
    }else{
    duraciontotal_=""+ duracion2_ +" minutos y "+ duracion3_ +" segundos";
    }
panelinfomusic2.innerHTML="Posición: "+ duraciontotal_ +"";

slidertime.value=duracion1_;
}

miPlayer.play();
imgLoad.src=miImg2.src;
document.title="Reproduciendo "+ temas[sel.options[sel.selectedIndex].value];
}

function volumenChange(){
var volumen=sliderVol.value;

var volumencadena="0."+ volumen +"";
    if(volumen==10){
    volumencadena="1.0";
    }
miPlayer.volume=volumencadena;
}
function speedChange(){
var speed=sliderSpeed.value;

var speedplay=""+ speed +".0";

    if(speed>=5){

    var re_speed;
        if(speed==5){
        re_speed=1;
        }
        if(speed==6){
        re_speed=2;
        }
        if(speed==7){
        re_speed=3;
        }
        if(speed==8){
        re_speed=4;
        }
        if(speed>8){
        re_speed=4;
        }
    speedplay=""+ re_speed +".0";
    }
    if(speed<=4){

    var re_speed2;
        if(speed==4){
        re_speed=4;
        }
        if(speed==3){
        re_speed=3;
        }
        if(speed<3){
        re_speed=3;
        }

    speedplay="0."+ re_speed +"";


    }


miPlayer.playbackRate=speedplay;
}
function checkboxChange(){
    if(loopcheck.checked){
    miPlayer.loop=true;
    }else{
    miPlayer.loop=false;

    }
}

function pauseGo(){
miPlayer.pause();
imgLoad.src=miImg1.src;
document.title="...pausando "+ temas[sel.options[sel.selectedIndex].value] +"";
}
