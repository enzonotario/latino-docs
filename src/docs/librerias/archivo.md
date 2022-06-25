La librería **archivo** contiene las funciones principales para el manejo de archivos en Latino.

Cada uno de estos comandos puede recibir el **nombre** como también la **ruta** del archivo.

El nombre de archivo o ruta del archivo deben ser escritas entre **comillas**.

Importante

Al marcar las rutas es importante utilizar doble slash \\ \\ en MS-Windows

Y en macOS o Linux utilizar slash invertido /

**Lista de comando**


| Comando | Parámetros | Descripción |
| --- | --- | --- |
| anexar( ) | 2 | Agrega un texto o dato al final del archivo |
| borrar( ) | 1 | Elimina el archivo especificado |
| eliminar( ) |
| crear( ) | 1 | Crea un archivo con el nombre especificado |
| duplicar( ) | 2 | Hace un duplicado del archivo especificado |
| ejecutar( ) | 1 | Ejecuta el archivo especificado |
| escribir( ) | 2 | Escribe y/o Sobrescribe en el archivo |
| leer( ) | 1 | Lee el contenido de un archivo y lo convierte en cadena |
| lineas( ) | 1 | Almacena en una lista cada línea del archivo |
| renombrar( ) | 2 | Renombra un archivo por un nuevo nombre asignado |

___

## archivo.anexar( )

Este comando nos permite **agregar** texto al final del documento especificado.

A diferencia del comando [archivo.escribir( )](#archivo-escribir) que sobrescribe los datos existentes en el documento, el comando **archivo.anexar( )** añade el texto al final del documento.

___

## archivo.duplicar( )

Este comando crea un **duplicado** de un archivo especificado.

**Ejemplo de sintaxis**

```
archivo.duplicar("archivo_Original", "archivo_Copia")

```

___

## archivo.crear( )

Este comando nos permite **crear un archivo** con un nombre especificado en cualquier ruta de nuestro sistema.

> Si al especificar la ruta del archivo a crear escribimos un nombre de alguna carpeta que no existe, este no hará nada, ya que este comando solo puede crear archivos y no carpetas.

___

## archivo.ejecutar( )

Este comando nos permite la **ejecución** de un archivo que contenga código de Latino.

___

## archivo.eliminar( )

Este comando nos ayuda a **eliminar** un archivo especificado.

___

## archivo.escribir( )

Este comando nos permite **escribir** y **sobrescribe** un archivo especificado.

Importante

Si deseamos añadir más información al archivo usar el comando [archivo.anexar( )](#archivo-anexar)

Si se usa este comando en un archivo **NO vacío** este será completamente **sobrescribe** con la nueva información.

___

## archivo.leer( )

Para este comando se requiere **almacenar en una variable** el contenido del archivo que deseamos leer.

___

## archivo.lineas( )

Este comando almacena en una **lista** cada línea de código de un archivo especificado.

Para este comando es requerido asignarlo a una variable para almacenar el contenido del archivo.

___

## archivo.renombrar( )

Este comando nos permite **renombrar** el nombre de un archivo.

Este comando también adminte rutas.

**Ejecuta de sintaxis**

```
archivo.renombrar(Nombre_viejo, Nombre_nuevo)

```
