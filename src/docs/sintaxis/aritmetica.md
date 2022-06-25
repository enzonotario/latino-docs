# Aritmética

## Operadores aritméticos

Los operadores aritméticos realizan operaciones matemáticas básicas tales como suma, resta, multiplicación y división en valores numéricos (constantes y variables).

| Operador | Descripción                    |
| -------- | ------------------------------ |
| +        | Suma                           |
| \-       | Resta                          |
| \*       | Multiplicación                 |
| /        | División                       |
| %        | Modulo (reminente de división) |
| ^        | Potencia (Exponencial)         |

**Ejemplos:**

Una típica operación aritmética serían con dos números.

Con dos números literales:

```latino
x = 100 + 50
```

o también con variables:

```latino
x = a + b
```

o también con expresiones:

```latino
x = (100 + 50) * a
```

### Suma

El operador de **suma** (+):

```latino
x = 5
y = 2
z = x + y
escribir(z)    //El resultado sería 7
```

### Resta

El operador de **Resta** (-):

```latino
x = 5
y = 2
z = x - y
escribir(z)    //El resultado sería 3
```

### Multiplicación

El operador de **multiplicación** (\*):

```latino
x = 5
y = 2
z = x * y
escribir(z)    //El resultado sería 10
```

### División

El operador de **división** (/):

```latino
x = 5
y = 2
z = x / y
escribir(z)    //El resultado sería 2.5
```

### Modulo (Remitente)

El operador de **remitente** (%):

```latino
x = 5
y = 2
z = x % y
escribir(z)    //El resultado sería 1
```

### Potencia

El operador de **función exponencial** (^):

```latino
x = 5
y = 2
z = x ^ y
escribir(z)    //El resultado sería 25
```

> Para la **potencia**, podemos conseguir el mismo resultado utilizando la librería de matemáticas **mate.pot(5,2)**
> ```latino
> x = 5
> y = 2
> escribir(mate.pot(x,y))    //El resultado sería 25
> ```

## Operadores de incremento y decremento

### Incrementación

El operador de incremento, se representa por **suma doble** (+ +).

```latino
x = 5         //Declaramos una variable con un valor de 5
x++           //Se incrementa el valor de la variable X por 1
escribir(x)   //Es resultado sería 6
```

### Decrementación

El operador de decremento, se representa por **resta doble** (- -).

```latino
x = 5         //Declaramos una variable con un valor de 5
x--           //Se decrece el valor de la variable X por 1
escribir(x)   //Es resultado sería 4
```

## Precedencia en los Operadores

En aritmética, todos los operadores (aritméticos, lógicos y relacionales) tienen unas **reglas de precedencia** que se aplican cuando varios operadores actúan juntos, y Latino hace uso de estas reglas.

Los operadores aritméticos, por ejemplo, la multiplicación y la división se ejecutan antes que la suma o la resta.

Para alterar estas reglas de precedencia, se pueden usar **paréntesis ( )**.

```latino
x = 100 + 50 * 3       //Devolverá 250
y = (100 + 50) * 3     //Devolverá 450
escribir ("Valor de X: " .. x .. ", Valor de Y: ".. y)
```
