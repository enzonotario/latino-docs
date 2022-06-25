# incluir()

La función **incluir( )** nos permite importar **módulos** y **librerías** a nuestro proyecto.

Cuando escribimos el módulo o librería, este debe ser escrito entre **comillas** y no es necesario escribir su extensión.

**Ejemplo de sintaxis**

```latino
incluir("librería")              //No requieren una variable

variable = incluir("módulo")     //Requieren ser asignadas a una variable
```

> Esta función solo puede incluir archivos con extensión **.lat** o archivos de librerías que hayan sido escritas para Latino y que usen su API.

___

## Subdirectorio

Con el comando **incluir( )**, para especificar archivos en subdirectorios varia dependiendo del sistema operativo.

En MS-Windows, para especificar un archivo en un subdirectorio usamos **\\**.

En Linux y Mac, para especificar un archivo en un subdirectorio usamos **/**.

**Ejemplo**

Para añadir un archivo del siguiente subdirectorio **carpeta/modulo** lo especificamos de la siguiente manera:

```latino
incluir("carpeta\modulo")     //MS-Windows
incluir("carpeta/modulo")     //Unix

```
