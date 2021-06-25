rama v.1.0.0.

VERSION 1.0.0

# reproductor-audio-html5

OBJETIVOS DE ESTA VERSION

-optimizar script y añadir comentarios.

-optimizar css y sass, ordenar código (comentarios, tabulaciones etc).

-añadir iconos a botones del reproductor.

QUE ES ESTE PROYECTO

Reproductor html utilizando el objeto audio de la API de html5

En mi página web (https://www.danidesaro.com/musica) utilizo un reproductor diseñado por mi, y el objetivo de este proyecto, es compartir una versión actualizada de ese  reproductor, rediseñandolo para que cualquier desarrollador web lo pueda implementar de una manera más o menos sencilla, tratando con este proyecto de mejorarlo y añadir más características.

El reproductor hace uso de Javascript para darle más funcionalidad, se evita el uso de librerias que creen dependencias de terceros, utilizando por ello Javascript vanilla. Se trata de diseñar utilizando estándares, para que el diseño y su funcionalidad resistan el paso del tiempo.

Se utiliza tambien ajax y para ello se ha diseñado una pequeña API ad-hoc, justo con las  funciones necesarias y no más. El javascript que se utilice ha de ser respetuoso con la versión ECMAScript 6.

Para los estilos se hace uso de Compass SASS, al ser esta una tecnología que no genera dependencias en su resultado final.

Se diseña bajo estándares, por lo que cualquier extensión propietaria de ciertos navegadores populares, queda descartada. Se requiere que sea completamente compatible con Firefox, y cualquier navegador libre y de código abierto, respetuoso con los estándares, y que accesible para cualquier usuario que tenga instalado un SO que permita ejecutar Firefox.
El reproductor debe ser compatible con Firefox 88 y superior.

FEATURES
El reproductor reproduce ficheros en formato mp3, que forman parte de una lista confeccionada en un json en un fichero externo. Al leer la lista rellena un control de tipo lista o combo, con los temas incluidos en dicha lista. Al seleccionar un tema en el combo, el fichero mp3 se carga en el reproductor. Hay 3 botones, play, pause y stop. Además hay un slider que va marcando el punto en el que se está reproduciendo el archivo, o sirve para situarlo en la parte de la canción que quieres que se reproduzca.

Al pulsar el botón play, se inicia la reproducción. Con el botón pausa, se interrumpe y sigue reproduciendose en el mismo punto si después se pulsa el botón play. El botón stop para la reproducción y vuelve a cargar el archivo desde el principio.

Hay un control para decidir si la reproducción es en bucle, o una sola vez.

Hay un slider que controla el volumen en el que se reproduce el tema cargado.

Existe así mismo un  slider que determina la velocidad de reproducción, pudiendo reproducir el tema más rápido o más despacio.

Además de cargarse los temas en la lista o combo, se crea un listado de enlaces para la descarga directa del tema, por si el usuario prefiere descargarse el tema a su equipo.

Cuando se reproduce un tema, se puede visualizar una miniatura (imagen) que se puede asociar a cada tema en la lista json de reproducción.
