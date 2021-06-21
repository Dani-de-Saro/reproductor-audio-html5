"use strict";
var loc1;
var loc2;
var loc3;
var loc4;
var loc5;
var loc6;
var loc7;
var loc8;
var loc9;

function iniciarRoutes(){
loc1=window.location;
loc2=loc1.href;
loc3=loc1.hostname;
loc4=loc1.pathname;
loc5=loc1.protocol;
loc6=loc1.origin;
loc7=loc1.port;
loc8=loc1.search;
loc9=loc1.hash;
var multiline1=`
loc1: ${loc1}
loc2: ${loc2}
loc3: ${loc3}
loc4: ${loc4}
loc5: ${loc5}
loc6: ${loc6}
loc7: ${loc7}
loc8: ${loc8}
loc9: ${loc9}
`;
//alert(loc4);
var rutaActual=""+ loc5 +"//"+ loc3 +""+ loc4 +""+ loc8 +"";
    //alert(Object.keys(Object));
//alert(Object.keys(window));
//alert(Object.keys(window.location));
}
window.addEventListener("load",function(){
    iniciarRoutes();
    },false);
