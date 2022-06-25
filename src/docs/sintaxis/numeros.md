# Números

En diversos lenguajes de programación existen varias clasificaciones para los números entre ellas están integer, float, double y complex.

Latino trabaja solo con un tipo de número, los números que se escriben con decimal y los que no.

```latino
x = 3.14     //Número con decimal
y = 3        //Número sin decimal
```

> Las siguientes expresiones científicas no son reconocidas por Latino:
> ```latino
> x = 123e5     //Expresión no reconocida
> y = 123e-5    //Expresión no reconocida
> ```

> Latino dispone de una librería para matemáticas la cual puede ver [aquí](/docs/librerias/matematica).

## Decimales

Todos los números en Latino siempre serán reconocidos como decimales, tengan o no el punto decimal.

Esto lo podemos comprobar utilizando la función **tipo( )** en Latino.

```latino
x = 3.14
y = 3

escribir(tipo(x))     //Devolverá decimal
escribir(tipo(y))     //Devolverá decimal
```

Los números también puede ser expresados como números negativos:

```latino
x = -3255522
y = -35.59
```

> Los números pasados de 15 dígitos son devueltos como expresión científica en Latino:
> ```latino
> x = 999999999999999
> y = 9999999999999999
> 
> escribir(x)     //Devolverá 999999999999999
> escribir(y)     //Devolverá 1e+16
> ```

## Números como cadedas(textos)

A diferencia de las cadenas los números no requieren ser escritos entre comillas, pero de serlo estas dejaran de ser números y pasaran a ser interpretadas como cadenas(textos).

```latino
x = 100       //X es un decimal
y = "100"     //Y es una cadena
```

### Convertir cadenas a números

Latino puede convertir las cadenas numéricas a números con los operadores aritméticos:

```latino
x = "100"
y = "10"

escribir(x + y)     //Devolverá 110
escribir(x - y)     //Devolverá 90
escribir(x * y)     //Devolverá 1000
escribir(x / y)     //Devolverá 10
```

En Latino existe una funcion pre-definida llamada **anumero( )** que de igualmanera nos convierte una cadena a número.

```latino
x = "100"
escribir(tipo(x))     //Devolverá cadena

x = anumero("100")
escribir(tipo(x))     //Devolverá decimal
```
