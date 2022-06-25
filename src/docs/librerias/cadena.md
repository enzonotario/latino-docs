La librería **cadena** nos permite trabajar y manipular las [cadenas (string)](/docs/sintaxis/cadenas) en Latino.

**Lista de comando**


| Comando | Parámetros | Descripción |
| --- | --- | --- |
| bytes( ) | 1 | Devuelve el valor ASCII de cada carácter en una lista |
| char( ) | 1 | Combierte el valor o lista ASCII a un carácter o una lista de caracteres |
| comparar( ) | 2 | Compara dos cadenas de textos y devuelve un valor númerico |
| concatenar( ) | 2 | Combina dos cadenas de textos en una sola cadena |
| contiene( ) | 2 | Devuelve un valor buleano si encuentra la palabra o cadena especificada |
| ejecutar( ) | 1 | Ejecuta una cadena que tenga código de latino |
| eliminar( ) | 2 | Elimina la primera considencia en una cadena |
| encontrar( ) | 2 | Regresa la posición de la primera considencia encuentra |
| indice( ) |
| es\_alfa( ) | 1 | Comprueba si la cadena solo contiene texto y/o números |
| es\_igual( ) | 2 | Regresa verdadero si las dos cadenas son iguales |
| es\_numerico( ) es\_numero( ) | 1 | Comprueba si la cadena solo contiene números |
| esta\_vacia( ) | 1 | Regresa verdadero si la cadena está vacia |
| formato( ) | 1 | Asigna un formato a un carácter |
| inicia\_con( ) | 2 | Comprueba si la cadena inicia con un texto o cadena especificado |
| insertar( ) | 3 | Agrega una cadena en la posición indicada |
| invertir( ) | 1 | Invierte el contenido de la cadena |
| longitud( ) | 1 | Regresa el tamaño de la cadena |
| mayusculas( ) | 1 | Combierte toda la cadena en mayúsculas |
| minusculas( ) | 1 | Combierte toda la cadena en minúsculas |
| recortar( ) | 1 | Elimina los espacios al inicio y al final de la cadena |
| reemplazar( ) | 4 | Cambiar una palabra por otra en una cadena |
| regex( ) | 2 | Utiliza RegEx y regresa una lista de las coincidencias |
| regexl( ) | 2 | Regresa un valor buelano si encuentra la coincidencia |
| rellenar\_derecha( ) | 3 | Agrega n caracteres al final de la cadena especificada |
| rellenar\_izquierda( ) | 3 | Agrega n caracteres al inicio de la cadena especificada |
| separar( ) | 2 | Separa la cadena en una lista en base a un separador |
| subcadena( ) | 3 | Devuelve una sub-cadena en base a la posición y su longitud |
| termina\_con( ) | 2 | Devuelve un valor buleano si hay una coincidencia |
| ultimo\_indice( ) | 2 | Devuelve la posición final de un caracter o palabra especificada |

___

## cadena.bytes( )

Este comando nos permite **convertir** nuestra **cadena de texto** a [valor ASCII](https://es.wikipedia.org/wiki/ASCII) y la devuelve en una lista.

El comando **cadena.char( )** es su contraparte, ya que convierte los valores ASCII a textos.

___

## cadena.char( )

Este comando nos permite **convertir** un número o **lista de** [valores ASCII](https://es.wikipedia.org/wiki/ASCII) a una cadena de texto.

El comando **cadena.bytes( )** es su contraparte, ya que convierte los textos a valores ASCII.

___

## cadena.comparar( )

Este comando **comparar** dos cadenas de textos **carácter por carácter** hasta encontrar la primera diferencia.

Este comando es similar al comando **strcmp()** en C.

El comando **cadena.comparar( )** devuelve los siguientes valores:

> -   \-1, si la primera cadena es **menor** que la segunda.
> -   0, si ambas cadenas son **iguales**.
> -   1, si la primera cadena es **mayor** que la segunda.

> **menor**, **igual** o **mayor** hacen referencia al orden o posición de las letra en el alfabeto.

___

## cadena.concatenar( )

Este comando nos permite **unir** dos cadenas de textos en una sola.

El comando **cadena.concatenar( )** es una alternativa al comando **doble punto (..)**.

___

## cadena.contiene( )

Este comando nos permite **verificar** si existe una **coincidencia** del texto o cadena a buscar en otra y devolverá un valor buleano.

___

## cadena.ejecutar( )

Este comando nos permite **ejecutar** una cadena de texto que tenga código de Latino.

___

## cadena.eliminar( )

Este comando solo **elimina la primera coincidencia** encontrada en una cadena de texto.

___

## cadena.encontrar( )

Este comando **busca** la posición de la primera coincidencia de caracteres o textos.

Este comando también dispone de un alias **cadena.indice( )**.

El comando **cadena.encontrar( )** cuenta cada carácter de una cadena de texto hasta encontrar la primera coincidencia.

El comando comienza a contar desde el número **cero (0)** como primer número en adelante.

Si el texto o cadena no fue encontrado, entonces devolverá **\-1**.

___

## cadena.es\_alfa( )

Este comando **comprueba** si la cadena solo contiene valores **alfanuméricos** y NO símbolos.

El comando **cadena.es\_alfa( )** devolverá un valor buleano:

> -   **verdadero** si la cadena es letras y/o números.
> -   **falso** si la cadena contiene o es un símbolo.

___

## cadena.es\_igual( )

Este comando **comprueba** si ambas cadenas **coinciden entre sí** y regresa un valor buleano.

___

## cadena.es\_numero( )

Este comando **comprueba** si la cadena **solo contiene números** y devolverá un valor buleano.

Este comando también dispone de un alias **cadena.es\_numerico( )**.

___

## cadena.esta\_vacia( )

Este comando **verificar** que la cadena está vacía.

El comando **cadena.esta\_vacia( )** devolverá un valor buleano:

> -   **verdadero** si la cadena esta vacía.
> -   **falso** si la cadena NO esta vacía.

___

## cadena.formato( )

Este comando permite **dar formato** a un carácter o valor ASCII.

Este comando es similar al comando **imprimirf( )**, aunque este ultimo requiere del carácter **\\n** para poder escribir en pantalla.

El comando **cadena.formato( )** opera con los siguientes formatos:

> -   **%c**, convierte a un carácter el valor ASCII.
> -   **%i**, convierte a un número enteros.
> -   **%f**, convierte a un número decimal.
> -   **%d**, convierte a un número.
> -   **%o**, convierte a un valor octal.
> -   **%x**, convierte a un hexadecimal.
> -   **%e**, convierte a una expresión científica.
> -   **%s**, convierte a carácter o ha una cadena de texto.
> -   **%%**, Devuelve el simbolo de **porcentage (%)**.

___

## cadena.inicia\_con( )

A diferencia del comando **cadena.termina\_con( )**, este comando **comprueba** si la cadena de texto **inicia con** un carácter especificado, y este devolverá un valor buleano.

Este comando distingue entre **mayúsculas** y **minúsculas**.

___

## cadena.insertar( )

Este comando nos permite **añadir** una cadena a otra cadena de texto en cualquier posición especificada.

La posición se maneja contando cada carácter de la cadena original. Este conteo inicia desde el número **cero (0)** como primer número en adelante.

**Ejemplo de sintaxis**

```
cadena.insertar(cadena_original, cadena_a_agregar, la_posición)

```

___

## cadena.invertir( )

Este comando nos permite **invertir** el orden de la cadena.

___

## cadena.longitud( )

Este comando retorna la **longitud** de la cadena en dígitos.

El comando comienza a contar desde el número **uno (1)** como primer número en adelante.

___

## cadena.mayusculas( )

Este comando nos permite **transformar** toda nuestra cadena a letras **mayúsculas**.

___

## cadena.minusculas( )

Este comando nos permite **transformar** toda nuestra cadena a letras **minúsculas**.

___

## cadena.recortar( )

Este comando **elimina** cualquier **carácter de espacio** al inicio y al final de la cadena, ya sea espacio en blanco o tabulación.

___

## cadena.reemplazar( )

Este comanod nos permite **cambiar** una palabra por otra en una cadena

**Ejemplo de sintaxis**

```
(cadena_original, texto_a_reemplazar, texto_nuevo, posición)

```

> Este comando cambia el texto seleccionado por el nuevo texto asignado, **mas no lo guarda**.

Para guardar el cambio es recomendable asignarlo a una variable.

___

## cadena.regex( )

Este comando hace uso de las **Expresiones Regulares** o **RegEx** para hacer una **búsqueda avanzada** y retorna una lista con cada una de las coincidencias.

Para aprender más sobre este comando y las expresiones regulares, mire el artículo de RegEx, [aquí](/docs/sintaxis/regex).

___

## cadena.regexl( )

Este comando es conocido como **regex lógico**.

Este comando hace use de las **Expresiones Regulares** o **RegEx** para hacer una **búsqueda avanzada** y retorna **verdadero** si encuentra la coincidencia y **falso** si no la encontró.

Para aprender más sobre este comando y las expresiones regulares, mire el artículo de RegEx, [aquí](/docs/sintaxis/regex).

___

## cadena.rellenar\_derecha( )

Este comando nos permite **añadir al final** de la cadena especificada un texto o cadena.

El comando **cadena.rellenar\_derecha( )** nos permite indicar la cantidad de veces que deseamos se repita el nuevo texto a añadir.

**Ejemplo de sintaxis**

```
cadena.rellenar_derecha(cadena_original, cadena_a_agregar, long_cadena_original + cantidad_de_repeticiones(Valor númerico))

```

___

## cadena.rellenar\_izquierda( )

Este comando nos permite **añadir al inicio** de la cadena especificada un texto o cadena.

El comando **cadena.rellenar\_izquierda( )** nos permite indicar la cantidad de veces que deseamos se repita el nuevo texto a añadir.

**Ejemplo de sintaxis**

```
cadena.rellenar_izquierda(cadena_original, cadena_a_agregar, long_cadena_original + cantidad_de_repeticiones(Valor númerico))

```

___

## cadena.separar( )

Este comando nos permite **segmentar** una cadena de texto al especificar un separador y el resultado lo devuelve en una lista.

El separador debe ser especificado **dentro de comillas**.

Si no se le asigna un separador, por defecto buscara los espacios en blanco.

**Ejemplo de sintaxis**

```
cadena.separar(cadena_original, separador)

```

___

## cadena.subcadena( )

Este comando **copia** de una cadena el texto deseado el cual se define indicando **en donde inicia** y la **longitud** que deseamos que tenga el texto a copiar.

La **posición\_inicial** comienza a contar desde el número **cero (0)** en adelante.

La **longitud** comienza a contar desde el número **uno (1)** en adelante.

**Ejemplo de sintaxis**

```
cadena.subcadena(cadena_original, posición_inicial(número), longitud(número))

```

___

## cadena.termina\_con( )

A diferencia del comando **cadena.inicia\_con**, este comando nos permite **buscar** en una cadena de texto si esta **termina con** un carácter especificado y devuelve un valor buelano.

Este comando distingue entre **mayúsculas** y **minúsculas**.

___

## cadena.ultimo\_indice( )

Este comando devuelve la **última posición encontrada** del carácter especificado.

Este comando comienza a contar desde el número **cero (0)** en adelante.
