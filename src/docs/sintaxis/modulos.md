# Módulos

Un [módulo](https://es.wikipedia.org/wiki/M%C3%B3dulo_%28inform%C3%A1tica%29) es cualquier archivo o directorio en donde se divide el programa en muchos componentes o bloques de códigos autónomos que pueden ser utilizados en diferentes partes del programa.

## Creación de módulos

Un módulo no es más que otro archivo en Latino, el cual puede contener desde _variables_, _funciones_, _listas_, _diccionarios_, etc.

Para crear un módulo en Latino necesitamos guardar el código deseado en un archivo con extensión **.lat**.

Además es necesario definir en un [diccionario](/docs/sintaxis/diccionarios) las variables y funciones que serán exportadas desde el módulo con el comando **retornar**.

## Sintaxis de un módulo

```latino
variableMensaje = "Hola mundo"

retornar {"comandoAExportar":variableMensaje}
```

## Uso de módulos

Para usar un módulo necesitamos utilizar el comando [incluir( )](/docs/funciones/incluir).

Cuando se importan un módulo en Latino es necesario asignarlo a una variable, de esta manera el programa sabrá en cuál módulo buscar la función deseada.

### Ejemplo con módulo

Para este ejemplo usaremos dos archivos los cuales deben de estar en la misma ubicación de carpeta.

#### Código principal

El primer archivo será nuestro código principal en el cual utilizaremos el comando **incluir( )** y después usaremos las funciones importadas del módulo.

```latino
/*
En este ejemplo escribiremos en pantalla
el resultado de nuestra función en nuestro módulo.
*/

m = incluir("moduloPersona")

escribir(m.hola)                   //Devolverá Hola mundo, Latino

escribir(m.persona_completo)       //Devolverá Melvin Guerrero

n = m.persona.edad
escribir("edad: "..n)              //Devolverá edad: 50

escribir(m.suma(2,3))              //Devolverá 5
```

#### Código del módulo

El segundo archivo será el código de nuestro módulo, el cual guardaremos con el nombre de **moduloPersona.lat**.

> Es necesario especificar en el comando **retornar** las funciones y variables que deseamos que se exporten de este módulo, de lo contrario el módulo no funcionara.

```latino
/*
Como se puede ver,
un módulo no es más que un archivo en el cual este
será importado en otro archivo para ser usado.
*/

hola = "Hola mundo, Latino"

persona = {
  "nombre"   : "Melvin",
  "apellido" : "Guerrero",
  "edad"     : 50,
  "completo" : funcion()
      retornar persona.nombre.." "..persona.apellido
   fin
}

funcion suma(m,n)
  retornar m + n
fin

/*
**Importante**
Se deben de regresar las funciones y variables
que se quieran exponer del modulo.
*/
retornar {
  "hola"             : hola,
  "persona"          : persona,
  "persona_completo" : persona.completo(),
  "suma"             : suma
}
```

## Subdirectorio

Con el comando **incluir( )**, para especificar archivos en subdirectorios varia dependiendo del sistema operativo.

En MS-Windows, para especificar un archivo en un subdirectorio usamos **\\**.

En Linux y Mac, para especificar un archivo en un subdirectorio usamos **/**.

**Ejemplo**

Para añadir un archivo del siguiente subdirectorio **carpeta/modulo** lo especificamos de la siguiente manera:

```latino
incluir('carpetamodulo'); //MS-Windows
incluir('carpeta/modulo'); //Unix
```
