# Condición Romper (Break)

La **condición o sentencia Romper (Break)** detiene las repeticiones (rompe) de los bucles [si](/docs/sintaxis/condicion-si), [mientras](/docs/sintaxis/condicion-mientras), [rango](/docs/sintaxis/condicion-rango) y [desde](/docs/sintaxis/condicion-desde).

Es decir, la sentencia **romper** termina de forma abrupta un bucle.

Esta condicional evalúa una condición y si el resultado es verdadero ejecuta las instrucciones descritas en ella.

Latino tiene las siguientes declaraciones condicionales:

| Comandos   | Descripción                                                                           |
| ---------- | ------------------------------------------------------------------------------------- |
| **romper** | Detiene la operación de un bucle y, el programa, continua con la siguiente operación. |

## Condicional «romper» (Break)

Inicio de cualquier condicional que genere un bucle (**si**, **mientras**, **rango** y **desde**). Dentro de esa declaración, en el bloque de código, se ingresa el comando **romper**.

**Ejemplo de sintaxis**

```latino
elegir (condición lógica)
  caso 1:
  caso 2:
    #Bloque de código
    romper
  caso 3:
    #Bloque de código
    romper
  defecto:
    #Bloque de código
fin
```

```
desde (condición lógica)
  #Bloque de código
  romper
fin

```

> La **condición lógica** se puede escribir entre paréntesis o sin ellos.

**Ejemplo de código**

```latino
/*
Cuando la condición se cumple
se detendrá la ejecución del código
y devolverá los valores obtenidos
hasta antes de su finalización.
*/

desde (i=0; i<10; i++)
  escribir(i)
    si (i == 5)
      romper
    fin
  fin
fin
#salida: 0 1 2 3 4 5
```

```latino
i=0
mientras (i < 10)
  escribir(i)
    si (i == 5)
      romper
    fin
    i++
  fin
fin
#salida: 0 1 2 3 4 5
```

```latino
para i en rango(0, 10)
  escribir(i)
    si (i == 5)
      romper
    fin
  fin
fin
#salida: 0 1 2 3 4 5
```
