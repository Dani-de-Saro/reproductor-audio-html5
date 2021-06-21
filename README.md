# reproductor-audio-html5
reproductor html utilizando el objeto audio de la API de html5

En mi página web (https://www.danidesaro.com/musica) utilizo un reproductor diseñado por mi, y el objetivo de este proyecto, es compartir una versión actualizada de ese  reproductor, rediseñandolo para que cualquier desarrollador web lo pueda implementar de una manera más o menos sencilla, tratando con este proyecto de mejorarlo y añadir más características.

El reproductor hace uso de Javascript para darle más funcionalidad, se evita el uso de librerias que creen dependencias de terceros, utilizando por ello Javascript vanilla. Se trata de diseñar utilizando estándares, para que el diseño y su funcionalidad resistan el paso del tiempo.

Se utiliza tambien ajax y para ello se ha diseñado una pequeña API ad-hoc, justo con las  funciones necesarias y no más. El javascript que se utilice ha de ser respetuoso con la versión ECMAScript 6. 

Para los estilos se hace uso de Compass SASS, al ser esta una tecnología que no genera dependencias en su resultado final.

Se diseña bajo estándares, por lo que cualquier extensión propietaria de ciertos navegadores populares, queda descartada. Se requiere que sea completamente compatible con Firefox, y cualquier navegador libre y de código abierto, respetuoso con los estándares, y que accesible para cualquier usuario que tenga instalado un SO que permita ejecutar Firefox.
El reproductor debe ser compatible con Firefox 88 y superior.






