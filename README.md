# test-oqo
Test Técnico OQO
El proyecto consistia, en obtener datos de unos concesionarios a través de un end point enviado y mostrar los concecionarios en un listado de checkbox y los marker de ubicación de cada elemento en el mapa, los checkbox deben activar un cambio de color en el respectivo marker de cada uno en el mapa de google.

El proyecto se abordó a través de ajax para obtener el listado de los concesionarios, luego de realizar un each para recorrer todo el array de objetos y así obtener solo los datos necesarios para utilizar en el mapa y en el listado de checkbox, en el each creó un nuevo arreglo con los objetos para utilizarlos.

Para la visualización del mapa ocupa la api de maps, y creo una funcion para pintar el mapa y con un for a los marcadores creamos el llamado para todos los respectivos markers en el mapa para su correcto funcionamiento. 

Actualmente la api de google maps cobra por su uso, se debe ingresar una cta cte, por eso en el proyecto aparecen unas mensajes 'solo uso para desarrollo'.

En el armado del proyecto se utilizó boostrap 4, jquery y un llamado a google fonts para la fuente utilizada en el proyecto 'Lato'.
