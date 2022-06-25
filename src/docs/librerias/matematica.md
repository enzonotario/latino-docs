La librería **mate** contiene las funciones de **matemáticas** en Latino.

**Lista de comando**


| Comando | Parámetros | Descripción |
| --- | --- | --- |
| abs( ) | 1 | Devuelve el valor absoluto |
| acos( ) | 1 | Devuelve el arcocoseno en radianes |
| acosh( ) | 1 | Devuelve el coseno hiperbólico inverso de un número |
| aleatorio( ) | 0, 1 ó 2 | Devuelve un número aleatorio |
| alt( ) |
| asen( ) | 1 | Devuelve el arcoseno en radianes |
| asenh( ) | 1 | Devuelve el arcoseno hiperbólico inverso de un número |
| atan( ) | 1 | Devuelve el arcotangente como un valor numérico entrew -PI/2 y PI/2 radianes |
| atanh( ) | 1 | Devuelve el arcotangente hiperbólico inverso de un número |
| atan2( ) | 2 | Devuelve el arcotangente del cociente de sus argumentos |
| base( ) | 2 | Devuelve la base de la operación |
| cos( ) | 1 | Devuelve el coseno |
| cosh( ) | 1 | Devuelve el coseno hiperbólico |
| e( ) | 0 | Devuelve el valor del número de Eular (Eular’s number) |
| exp( ) | 1 | Devuelve el valor de $E^x$, donde E es un [número de Euler](https://es.wikipedia.org/wiki/N%C3%BAmero_e) |
| frexp( ) | 2 | Devuelve el número descompuesto y a una potencia integral de dos. |
| ldexp( ) | 2 | Devuelve el número multiplicado por 2 elevado a una potencia |
| log( ) | 1 | Devuelve el logaritmo natural |
| log10( ) | 1 | Devuelve el logaritmo natural en base diez |
| parte( ) | 2 | Devuelve la parte de la operación |
| pi( ) | 0 | Devuelve el valor de PI |
| piso( ) | 1 | Devuelve el número redondeado hacia abajo al número entero más cercano |
| porc( ) | 2 | Devuelve el porcentaje de la operación |
| porciento( ) |
| porcentaje( ) |
| pot( ) | 2 | Devuelve el valor de un número elevado a la potencia |
| max( ) | 1,2,3… | Devuelve el más alto valor de una lista |
| min( ) | 1,2,3… | Devuelve el más bajo valor de una lista |
| raiz( ) | 1 | Devuelve la raíz cuadrada |
| raizc( ) | 1 | Devuelve la raíz cúbica de un número |
| redondear( ) | 1 | Devuelve el número redondeado |
| rnd( ) |
| sen( ) | 1 | Devuelve el seno |
| senh( ) | 1 | Devuelve el seno hiperbólico |
| tan( ) | 1 | Devuelve la tangente de un ángulo |
| tanh( ) | 1 | Devuelve la tangente hiperbólico de un número |
| tau( ) | 0 | Devuelve el valor de TAU |
| techo( ) | 1 | Devuelve el número redondeado hacia arriba al número entero más cercano |
| trunc( ) | 1 | Devuelve las partes enteras truncadas de diferentes números |

___

## mate.abs( )

El comando **mate.abs( )** devuelve el valor **absoluto (positivo)** del número especificado.

___

## mate.acos( )

Este comando devuelve el **arcocoseno** de un número como un valor entre el **cero (0) y PI radianes**.

Si el número asignado está **fuera** del rango de -1 a 1, el comando devolverá **NaN**.

El valor de **\-1** devolverá el valor de PI, y el valor de **1** devolverá el valor de cero (0).

___

## mate.acosh( )

Este comando devuelve el **coseno hiperbólico inverso** de un número.

Este comando admite números igual o mayor que 1 **(x >= 1)**.

Si el número asignado está **fuera** es menor que 1, el comando devolverá **NaN**.

___

## mate.aleatorio( )

El comando **mate.aleatorio( )** devuelve un número.

Este comando también dispone de un alias **mate.alt()**.

Este comando puede admitir desde **cero (0)** parámetros, hasta un máximo de **dos (2)** parámetros.

En este comando se puede asignar números positivos como negativos.

Los parámetros se definen de la siguiente manera:

-   Cero o ningún parámetro:

    Devolverá un valor aleatorio entre **cero (0)** y **uno (1)**.

-   Un parámetro:

    Se tomará como el número máximo, y devolverá entre **cero (0)** hasta el número asignado.

-   Dos parámetros:

    Devolverá un número aleatorio dentro del rango numérico asignado.


___

## mate.asen( )

El comando **mate.asen( )** devuelve el **arcoseno** de un número como un valor entre **\-PI/2** y **PI/2** radianes.

Si el número asignado está **fuera** del rango de -1 a 1, el comando devolverá **NaN**.

El valor de **1** devolverá el valor de PI/2 y el valor de **\-1** devolverá el valor de -PI/2.

___

## mate.asenh( )

Este comando devuelve el **arcoseno hiperbólico inverso** de un número.

___

## mate.atan( )

Este comando devuelve el **arcotangente** de un número como un valor entre **\-PI/2** y **PI/2** radianes.

___

## mate.atanh( )

Este comando devuelve el **arcotangente hiperbólico inverso** de un número.

El parámetro admitido por este comando debe estar entre -0.99 y 0.99.

___

## mate.atan2( )

Este comando devuelve el **arcotangente** del cociente de sus argumentos, como un valor numérico entre **PI** y **\-PI** radianes.

El número devuelto representa el ángulo en el sentido contrario de las agujas del reloj en radianes (pero NO en grados) entre los dos valores asignados a la operación.

___

## mate.base( )

Este comando devuelve la **base** de un porciento.

Para el porcentaje **NO es necesario** digitarlo en número decimal sino en **porcentaje**.

Este comando está relacionado con los comandos [mate.parte( )](https://manual.lenguajelatino.org/es/stable/librerias/Matematica.html#parte) y [mate.porc( )](https://manual.lenguajelatino.org/es/stable/librerias/Matematica.html#porc)

**Ejemplo de sintaxis**

___

## mate.cos( )

Este comando devuelve el **coseno** de un número.

El comando **mate.cos( )** devuelve un valor numérico entre **\-1** y **1**, que representa el coseno del ángulo.

___

## mate.cosh( )

Este comando devuelve el **coseno hiperbólico** de un número.

___

## mate.e( )

Este comando devuelve el valor del **número de Eular** (_eular’s number_).

___

## mate.exp( )

Este comando devuelve el valor $E^x$, donde E es un [número de Euler](https://es.wikipedia.org/wiki/N%C3%BAmero_e) (aproximadamente 2,7183) y **equis(x)** es el número que se le pasa.

___

## mate.frexp( )

Este comando **descompone** un número en significativo y a una potencia integral de 2.

___

## mate.ldexp( )

Este comando **multiplica** un número por 2, **elevado a una potencia**.

___

## mate.log( )

Este comando devuelve el **logaritmo natural** de un número.

Si el parámetro es **negativo**, devolverá **NaN**.

Si el parámetro es **cero (0)**, devolverá **infinito**.

___

## mate.log10( )

Este comando devuelve el **logaritmo común** de un número (en base a 10).

Si el parámetro es **negativo**, devolverá **NaN**.

Si el parámetro es **cero (0)**, devolverá **infinito**.

___

## mate.parte( )

Este comando devuelve la **parte** de un porciento.

Para el porcentaje **NO es necesario** digitarlo en número decimal sino en **porcentaje**.

Este comando está relacionado con los comandos [mate.base( )](https://manual.lenguajelatino.org/es/stable/librerias/Matematica.html#base) y [mate.porc( )](https://manual.lenguajelatino.org/es/stable/librerias/Matematica.html#porc)

**Ejemplo de sintaxis**

___

## mate.pi( )

Este comando devuelve el valor de **PI**.

___

## mate.piso( )

A diferencia del comando **mate.techo( )**, el comando **mate.piso( )** redondea un número **hacia abajo** al entero más cercano.

Si el argumento pasado es un número entero, el valor NO se redondeará.

___

## mate.porc( )

Este comando devuelve la **porcentaje** de un porciento.

Este comando también dispone de alias como **mate.porciento( )** y **mate.porcentaje( )**.

Para el porcentaje **NO es necesario** digitarlo en número decimal sino en **porcentaje**.

Este comando está relacionado con los comandos [mate.base( )](https://manual.lenguajelatino.org/es/stable/librerias/Matematica.html#base) y [mate.parte( )](https://manual.lenguajelatino.org/es/stable/librerias/Matematica.html#parte)

**Ejemplo de sintaxis**

```
porcentaje = parte / base

```

___

## mate.pot( )

Este comando devuelve el valor(primer dígito) **elevado a la potencia** (segundo dígito).

___

## mate.max( )

Este comando devuelve el más **alto valor** de una lista.

Este comando también trabaja con números **negativos**.

Este comando NO tiene cantidad máxima de parámetros, lo que significa que se puede hacer una comparación entre 2 a 1000 números si se desea.

___

## mate.min( )

Este comando devuelve el más **bajo valor** de una lista.

Este comando también trabaja con números **negativos**.

Este comando NO tiene cantidad máxima de parámetros, lo que significa que se puede hacer una comparación entre 2 a 1000 números si se desea.

___

## mate.raiz( )

Este comando devuelve la **raíz cuadrada** de un número.

___

## mate.raizc( )

Este comando devuelve la **raíz cúbica** de un número.

___

## mate.redondear( )

Este comando **redondea** el número a su mas cercano entero.

Este comando también dispone de un alias **mate.rnd( )**.

___

## mate.sen( )

Este comando devuelve el **seno** de un número.

El comando **mate.sen( )** devuelve un valor entre **\-1** y **1**, que representa el seno del parámetro asignado.

___

## mate.senh( )

Este comando devuelve el **seno hiperbólico** de un número.

___

## mate.tan( )

Este comando devuelve la **tangente** de un número.

___

## mate.tanh( )

Este comando devuelve la **tangente hiperbólica** de un número.

___

## mate.tau( )

Este comando devuelve el valor de **TAU**.

___

## mate.techo( )

A diferencia del comando **mate.piso( )**, el comando **mate.techo( )** redondea un número **hacia arriba** al entero más cercano.

Si el argumento pasado es un número entero, el valor NO se redondeará.

___

## mate.trunc( )

Este comando devuelve la parte **entera truncada** de un número.

Este comando NO redondea el número al más cercado entero, sino **remueve su punto decimal**.

___
