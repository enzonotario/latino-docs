# Condición Si (If)

En programación la **condicional Si (If)** ayuda al programador a ejecutar instrucciones cuando una condición lógica es cumplida.

Esta condicional evalúa una condición y si el resultado es verdadero ejecuta las instrucciones descritas en ella.

Latino tiene las siguientes declaraciones condicionales:

| Comandos | Descripción                                                                                           |
| -------- | ----------------------------------------------------------------------------------------------------- |
| **si**   | Inicio de la declaración condicional y esta ejecuta un bloque de código si su condición es verdadera. |
| **osi**  | Esta ejecuta un nuevo bloque de código si la condicional anterior fue falsa.                          |
| **sino** | Esta ejecuta un bloque de código si las codiciones anterios son falsas.                               |
| **fin**  | Marca el fin de la condicional lógica.                                                                |

Las **condiciones lógicas** pueden contener expresiones matemáticas.

| Expresión | Descripción       |
| --------- | ----------------- |
| a == b    | Es igual          |
| a != b    | No es igual       |
| a < b     | Menor que         |
| a > b     | Mayor que         |
| a <= b    | Menor o igual que |
| a >= b    | Mayor o igual que |
| a <> b    | Si es diferente   |

## Condicional «si» (if)

Inicio de la declaración condicional y esta ejecuta un bloque de código si su condición es verdadera.

En esta declaración condicional solo se puede escribir el comando **si** una vez y es solo al principio, así también como el comando **fin** solo al final.

**Ejemplo de sintaxis**

```latino
si (condición lógica)
  #Bloque de código
fin
```

> La **condición lógica** se puede escribir entre paréntesis o sin ellos.

**Ejemplo de código**

```latino
/*
Si la condición se cumple
escribirá en pantalla la siguiente oración:
10 es mayor que 5
*/
x = 10
y = 5

si (x > y)
  escribir(x.." es mayor que "..y)
fin
```

## Condicional «osi» (else if)

Esta ejecuta un nuevo bloque de código si la condicional anterior fue falsa.

El comando **osi** se puede repetir cuantas veces sean necesarias pero cada nuevo comando **osi** debe llegar una nueva **condición lógica**.

**Ejemplo de sintaxis**

```latino
si  condición lógica
  #bloque de código
osi condición lógica
  #bloque de código
fin
```

**Ejemplo de código**

```latino
/*
Si la condición se cumple
escribirá en pantalla la siguiente oración:
Y es menor
*/
x = 10
y = 5
z = 20

si x < y                      //Recuerde que los paréntesis en la condicional lógica es opcional.
  escribir("X es menor")
osi x > z
  escribir("X es mayor")
osi y < z
  escribir("Y es menor")
fin
```

## Condicional «sino» (else)

Esta ejecuta un bloque de código si las codiciones anterios son falsas.

El comando **sino** solo se puede escribir una sola vez y debe ir después del comando **si** o después del comando **osi**.

El comando **sino** a diferencia del comando **si** y del comando **osi** no lleva **condición lógica**.

**Ejemplo de sintaxis**

```latino
si (condición lógica)
  #bloque de código
sino
  #bloque de código
fin
```

**Ejemplo de código**

```latino
/*
Si la condición se cumple
escribirá en pantalla la siguiente oración:
Ninguna condición lógica fue cumplida
*/
x = 10
y = 5
z = 20

si x < y
  escribir("X es menor")
osi x > z
  escribir("X es mayor")
osi y < z
  escribir("Y es menor")
sino
  escribir("Ninguna condición lógica fue cumplida")
fin
```

## Condicional «si» lineal

Latino al ser un lenguaje de consola, su código se puede escribir en una sola línea, asi:

Este ejemplo también aplica para el comando **osi** y **sino**.

```latino
si x < y escribir("X es menor") fin
```

## Anidar condición «si»

Una **condicional si** puede tener anidada **otra condición si**, si fuera necesario.

Esta nueva condición anidada puede ir en cualquier bloque de código, dentro del **si**, o del **osi** o también del **sino**

```latino
x = 40

si x > 10
  escribir("X es mayor que 10")
  si x > 20
    escribir("y mayor que 20")
  sino
    escribir("pero menor que 20")
  fin
fin
```

## Operadores condicionales

En capítulos pasados ya habíamos hablado de los [operadores condicionales](/docs/sintaxis/operadores#operadores-condicionales). Aquí volveremos a repasar esta clase de operador.

El operador condicional es puede implementar como una alternativa de la **condicional si**, ya que requiere de menos líneas de código para ejecutar su condicional lógica.

**Sintaxis del operador condicional:**

```latino
(Expresión condicional) ? expresión1 : expresión2
```

El operador condicional funciona de la siguiente manera:

- La primera _expresión condicional_ se evalúa primero. Esta expresión se evalúa si es verdadera o si es falsa.
- Si la expresión condicional es verdadera, se evalúa la _expresión1_.
- Si la expresión condicional es falsa, se evalúa la _expresió2_.

```latino
numero = -5                                                #Creamos una variable con un valor de -5
mensaje = (numero < 0) ? " es negativo" : " es positivo"   #Creamos una nueva variable y a esta le asignamos el operador condicional.
escribir ("El número " .. numero .. mensaje)               #El mensaje seria: El número -5 es negativo.
```

## Operadores lógicos

En capítulos pasados vimos que los [operadores lógicos](/docs/sintaxis/operadores#operadores-logicos) son el **Y lógico**, el **Ó lógico** y el **No lógico**.

Estos al igual que las expresiones matemáticas también se pueden utilizar en la **condicional si**.

### «Y» lógico

El **Y lógico** se expresa así: **&&**

```latino
x = 10
y = 5
z = 20

si x > y && z > x
  escribir ("Ambas condiciones se cumplieron")
fin
```

### «Ó» lógico

El **Ó lógico** se expresa así: **||**

```latino
x = 10
y = 5

si x > 100 || y < 30
  escribir ("Una condición se cumplió")
fin
```

### «No» lógico

El **No lógico** se expresa así: **!**

```latino
/*
Para este ejemplo la condición lógica
la escribimos en paréntesis con esto negamos
todo el conjunto de la condición lógica
*/

x = 10

si !(x > 100)
  escribir ("La condición se cumplió")
fin
```
