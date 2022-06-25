La librería **lista** contiene las funciones para el manejo de [lista](/docs/sintaxis/listas) en Latino.

**Lista de comando**


| Comando | Parámetros | Descripción |
| --- | --- | --- |
| agregar( ) | 2 | Agrega un elemento al final de la lista |
| comparar( ) | 2 | Comprueba el orden y tamaño de letras de los elementos |
| concatenar( ) | 2 | Uné todos los elementos de dos listas en una sola |
| contiene( ) | 2 | Devuelve verdadero si el elemento existe en la lista |
| crear( ) | 1 | Crea una lista con el nombre especificado |
| eliminar( ) | 2 | Elimina solo la primera coincidencia de la lista |
| eliminar\_indice( ) | 2 | Elimina un elemento de la lista por posición |
| encontrar( ) | 2 | Devuelve el índice del elemento buscado |
| indice( ) |
| extender( ) | 2 | Agrega los elementos de una lista en otra lista |
| insertar( ) | 3 | Inserta un nuevo elemento a una lista |
| invertir( ) | 1 | Invierte el orden de la lista |
| longitud( ) | 1 | Devuelve la cantidad de elementos de una lista |
| separador( ) | 2 | Separa los elementos de una lista |

___

## lista.agregar( )

Para agregar un nuevo elemento a la lista usamos el comando **lista.agregar()**.

Este comando agrega un nuevo elemento al final de la lista.

___

## lista.comparar( )

Con este comando podremos **comparar la longitud** de dos listas.

Este comando devolverá los siguientes valor según el resultado:

-   \-1 si la lista original es menor.
-   1 si la lista original es mayor.
-   0 si ambas listas son iguales.

**Ejemplo de sintaxis**

```
lista.comparar(listaOriginal, listaAComparar)

```

___

## lista.concatenar( )

Con este comando podremos unir **dos listas** en una **nueva lista**.

___

## lista.contiene( )

Este comando nos permite comprobar si un elemento **existe en la lista**.

Este comando es sensible a las mayúsculas y minúsculas.

___

## lista.crear( )

Este comando nos permite crear una lista asignando la **cantidad de elementos** que esta tendrá.

Al crear una lista con este comando, cada elemento tendrá un valor **nulo** los cuales podrán ser modificados después.

Este comando admite un valor número positivo, de ser asignado cualquier número negativo, esta creará una lista vacía.

___

## lista.eliminar( )

A diferencia de **lista.eliminar\_indice( )** el comando **lista.eliminar( )** elimina la primera coincidencia de la lista.

___

## lista.eliminar\_indice( )

Este comando nos permite **eliminar** un elemento de la lista asignada por medio de su **número de índice**.

En una lista los elementos de esta están organizados por índices y estos índices inicial desde el número **cero ( 0 )** en adelante.

Este comando NO admite números negativos.

___

## lista.indice( )

El comando **lista.indice( )** también dispone de un alias el cual es **lista.encontrar( )**. Este comando nos permite **buscar** un elemento por su nombre en una lista y nos devolverá su **número de índice**.

Este comando es sensible a las mayúsculas y minúsculas.

Si NO encuentra el nombre del elemento a buscar, entonces regresara **\-1**.

___

## lista.extender( )

El comando **lista.extender( )** copiará los elementos de una lista para ser insertados al final de otra lista deseada.

**Ejemplo de sintaxis**

```
lista.extender("ListaAExtender", "ListaACopiar")

```

___

## lista.insertar( )

Con este comando podemos insertar un elementos en cualquier indice deseado de una lista.

**Ejemplo de sintaxis**

```
lista.insertar(listaOriginal, elementoNuevo, indice)

```

___

## lista.invertir( )

Para invertir el orden de una lista, utilizamos el comando **lista.invertir( )**.

___

## lista.longitud( )

Este comando devuelve la cantidad de elementos de una lista.

___

## lista.separar( )

El comando **lista.separar( )** nos permite separar cada elemento de la lista con un separador asignado.

El separador debe ser declarado dentro de comillas.

Por defecto si no se indica un separador este será sustituido por un espacio en blanco.

**Ejemplo de sintaxis**

```
lista.insertar(lista, separador)

```
