# Cadenas

Las **cadenas** (_strings_ por su nombre en Ingles) son utilizadas para almacenar y manipular textos.

Estas **cadenas** están rodeadas por **comillas simples ( ' )** o **comillas dobles ( “ )**.

```latino
escribir('hola');
escribir('hola');
```

Se pueden usar comillas dentro de una cadena, siempre y cuando estas no coincidan con las comillas que las rodean.

```latino
escribir("El se llama 'Melvin'")     //Devolverá: El se llama 'Melvin'
escribir('El se llama "Melvin"')     //Devolverá: El se llama "Melvin"
```

> Latino dispone de una librería para el manejo de cadenas, [aquí](/docs/librerias/cadena).

## Concatenar cadenas(textos)

Para concatenar o unir textos en Latino se hace uso de **doble puntos (..)**, que a diferencia de otros lenguajes de programación los cuales usan el signo de **más (+)**.

El **doble punto (..)** no solo es útil para unir textos, también números.

```latino
x = "Hola mundo"
y = ", Latino"
escribir(x..y)     //Devolverá Hola mundo, Latino
escribir(1..2)     //Devolverá 12
```

## Caracteres especiales

Las cadenas al estar escritas entre comillas, se pudiera producir un error con la siguiente sintaxis:

```latino
escribir("Hola mundo, "Latino!" ¿Cómo estan?")
```

En el ejemplo anterior, La oración estaría cortada hasta “Hola mundo,” y Latino pensaría que el nombre **Latino!** es una variable, produciendo así un error de sintaxis.

La solución a este problema sería usar una **barra invertida ( \\ )**.

La **barra invertida ( \\ )** convierte los caracteres especiales en textos:

```latino
/*
Devolverá:
Hola mundo, "Latino" ¿Cómo estan?
*/

escribir("Hola mundo, \"Latino!\" ¿Cómo estan?")
```

Además de usar la barra invertida para escribir textos, también es usada para indicar funciones.

A continuación se presentan los caracteres disponibles para usar en Latino.

### Tabla de caracteres:

| Carácter | Descripción                            |
| -------- | -------------------------------------- |
| \\ “     | Comillas dobles                        |
| \\ '     | Comillas simples                       |
| \\n      | Nueva línea                            |
| \\r      | Retorno de carro (Carriage return)     |
| \\b      | Remover (Backspace)                    |
| \\t      | Tabulación horizontal                  |
| \\v      | Tabulación vertical                    |
| \\f      | Alimentación de formulario (Form feed) |
| \\a      | Alerta (Beep)                          |
| \\0      | Carácter nulo                          |
| \\nnn    | Carácter con valor octal nnn           |

> Los caracteres especiales descritos en la tabla superior fueron originalmente diseñados para el uso de máquina de escribir, teletipo, y máquina de fax.

#### Comillas dobles

Carácter a usar: **\\ “**

```latino
/*
Devolverá:
Hola "mundo"
*/

escribir("Hola \"mundo\"")
```

#### Comillas simples

Carácter a usar: **\\ '**

```latino
/*
Devolverá:
Hola 'mundo'
*/

escribir('Hola \'mundo\'')
```

#### Nueva línea

Carácter a usar: **\\n**

```latino
/*
Devolverá:
Hola
mundo
*/

escribir("Hola\nmundo")
```

#### Retorno de carro

Carácter a usar: **\\r**

> Para saber la diferencia entre **\\n** y **\\r** ver enlace [aquí](https://es.stackoverflow.com/a/172368/183823)

```latino
/*
A diferencia de \n, \r no crea una nueva línea
sino que devuelve el cursor al punto de partida
y sigue escribiendo. Esto proveca una sobre escritura.

Devolverá:
Latinoundo,
*/

escribir("Hola mundo,\rLatino")
```

#### Remover

Carácter a usar: **\\b**

```latino
/*
Este comando elimina el carácter previo a este.

Devolverá:
HolMundo
*/

escribir("Hola\bmundo")
```

#### Tabulación horizontal

Carácter a usar: **\\t**

```latino
/*
Devolverá:
Hola    mundo
*/

escribir("Hola\tmundo")
```

#### Alerta

Carácter a usar: **\\a**

```latino
/*
Hará sonar el Beep de la PC y Devolverá:
Hola mundo
*/

escribir("Hola mundo\a")
```

#### Carácter nulo

Carácter a usar: **\\0 \*(cero)**

> De igual manera **\\0** al ser un valor nulo, también puede ser usado en condicionales lógicas:
> 
> **Ejemplo 1**
> 
> ```latino
> /*
> Devolverá:
> El valor no es nulo
> */
> 
> x = 5
> 
> si x != "\0"
>   escribir ("El valor no es nulo")
> fin
> ```
> 
> **Ejemplo 2**
> 
> ```latino
> /*
> Devolverá:
> No es nulo
> */
> 
> x = 5
> 
> si x == "\0"
>   escribir ("Es un valor nulo")
> sino
>   escribir ("No es nulo")
> fin
> ```

#### Carácter con valor octal

Carácter a usar: **\\nnn**

```latino
/*
Devolverá:
Hola mundo
*/

texto = "\110\157\154\141\040\155\165\156\144\157"
escribir(texto)
```

## Textos de multiples líneas

Previamente vimos que las cadenas pueden ser textos líneales, pero también pueden ser textos de multiples líneas.

Para indicar cuando una cadena será de múltiples líneas, basta con dejar una de las comillas al inicio y otra al final del párrafo.

```latino
escribir("Ejemplo de texto de múltiples lineas:
---------------------------------------
En este ejemplo podemos observar
que Latino es perfectamente capaz de
procesar textos de múltiples líneas
siempre y cuando una de las dos comillas
se encuentre al inicio del párrafo y otra al final")
```

## Textos como listas

Como en muchos otros lenguajes de programación, los textos son [listas (arrays)](/docs/sintaxis/listas).

```latino
/*
Devolverá:
la letra "o"
*/

x = "Hola"
escribir(x[1])
```

## Convertir números a cadenas

En Latino existe una funcion pre-definida llamada **acadena( )** que nos convierte un número a una cadena(texto).

```latino
x = 100
escribir(tipo(x))     //Devolverá decimal

x = acadena("100")
escribir(tipo(x))     //Devolverá cadena
```
