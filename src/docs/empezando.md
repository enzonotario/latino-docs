---
title: Empezando
editLink: true
---

# Empezando

Esta sección del manual está enfocada en dar al usuario una breve muestra de algunas funciones y operaciones básicas que se pueden hacer en Latino

Para comenzar con cada uno de los ejemplos tendremos que abrir la terminal de nuestro sistema operativo y tener ejecutado Latino.

> Para ejecutar Latino en la terminal sólo escribimos **latino** y presionamos la tecla Enter.

> Para ejecutar un archivo de **Latino** ingresamos a la ubicación del archivo desde la consola y escribimos **latino** y el nombre del archivo con su extensión. Por ejemplo: **latino miarchivo.lat**.

> Si al escribir el código de Latino se hace uso de un editor de texto, al guardar el documento se requiere guardalos con la extensión **.lat**. Por ejemplo: **archivo.lat**.

## Hola Mundo en Lenguaje Latino

En este ejemplo vamos a realizar un pequeño programa que, al ejecutarse, mostrará un mensaje que diga `Hola Mundo, Latino!`.

Para mostrar un mensaje en pantalla utilizaremos la función `escribir`, de manera que el código será:

```latino
escribir("Hola Mundo, Latino!")
```

Este programa se puede ejecutar en [LatinoEditor](https://editor.lenguajelatino.org/):

<InlinePlayground src="https://editor.lenguajelatino.org/?base64=ZXNjcmliaXIoIkhvbGEgTXVuZG8sIExhdGlubyEiKQ=="/>

## Imprimir número (digitado por el usuario)

En este ejemplo se mostrara como podemos digitar y almacenar valores a una variable y posteriormente mostrar ese valor en pantalla.

```latino
escribir("Digite un número:")
num = leer() // Aquí creamos una variable y le asignamos la función leer().
escribir("El número digitado fue: " .. num)
```

<InlinePlayground src="https://editor.lenguajelatino.org/?code=KYZwxgTglgRlEAoBEARKBzKAXYACArgHa6EBfAtsBAPYBcSAlAFCH7m4C8uANsFQg1wB6IbgCCAR3wBb3JGABDctRAFCC3ADcF0BTF64AnjzwKQGdctXcNAMyJgoAZ%2BK9%2BzUJFjxkAUW4kFFTUuAAmGNgKoSH2wLS4SLgAdEkkbAxAA"/>

## Número Par o Impar en Latino

En este ejemplo vamos a crear un programa que nos ayude a identificar cuando un número (digitado por el usuario) es par o impar.

### Ejemplo 1

```latino
escribir("Ingresa un número:")
num = leer()
si (num % 2 == 0) // Verdadero si el número es perfectamente divisible por 2.
    escribir("El número "..num.." es par")
sino
    escribir("El número "..num.." es impar")
fin
```

<InlinePlayground src="https://editor.lenguajelatino.org/?code=KYZwxgTglgRlEAoBEBJAdgcwqAhgAgFc080AvgW2AgHsAuJASgCg0Dy8BePAG2CoWYgoeBK3YBSPACZOXAAwM8AeiV4AalQAmOTVWp4heYNxIU9RkHgAOVAGbAwAFxyU0j4Hk1QAblCExea2oIaQA6JjxIi0hYeGQAURMySho8JFDQsQykC2scCEYmITRqCKjQGLhEJETTFP10zLZs3KhyK3zC2yg0IA"/>


### Ejemplo 2

Esta es otra forma de poder crear el mismo programa pero en menos líneas de códigos:

```latino
escribir("Ingresa un número:")
num=leer()
escribir("El numero "..num..(num%2==0) ? "es par":"es impar")
```

## Intercambiar dos números entre variable en Latino

En este ejemplo haremos un programa que intercambie los valores de dos variables entre si.

### Ejemplo 1

```latino
priNum = 2
segNum = 5
priNum, segNum = segNum, priNum  //Aquí se intercambian los valores.
escribir("PrimeroNum:"..priNum.." | SegundoNum:"..segNum)
```

El resultado será:

```
PrimeroNum:5 | SegundoNum: 2
```

<InlinePlayground src="https://editor.lenguajelatino.org/?code=A4JwlgcgrgtgBAXjgJgFAGcCmBza8kCsqoksANHFrrIpTnhSXnHAPSsCCAjlALd1wwAOwAumEAGMAhjABGYKULgAbAPbo4ANylqQmdADpU%2BieHkgAFACIACuBjjVeAFxWDBprHdW4AHzgAyjhQQgAmTrCu7lR4AJRAA" />

### Ejemplo 2

```latino
escribir("Ingresa el primer número:")
priNum = leer()
escribir("Ingresa el segundo número:")
segNum = leer()
tempVar = priNum //El valor de la primera variable es asignada a una variable temporal.
priNum = segNum //El valor de la segunda variable es asignada a la primera variable.
segNum = tempVar //El valor de la variable temporaria es asignada a la segunda variable.
escribir("Después de intercambiar, la primera variable es de: "..priNum)
escribir("y la segunda variable es de:"..segNum)
```

El resultado será:

```
Ingresa el primer número:
1
Ingresa el segundo número:
2
Después de intercambiar, la primera variable es de: 2
y la segunda variable es de: 1
```

<InlinePlayground src="https://editor.lenguajelatino.org/?code=KYZwxgTglgRlEAoBEBJAdgcwqAhgAmABs8AHaAW2AjzQC-KIB7ALiQEoAoMqAOQFdyeALx5CwKgk6hIseMnRZcBYiGAY%2BaACaMa9Ki3YdVGfoJFiJnAC7ByJAGo5qI7qbwB6dwFFiANxyEjNSawKL43Az4-tA4MGIEIHg4IFAYaDia%2BPgaUU5QsfE2dkEBAHRc0G4ixm6ePnj%2BgcGhhPjGGpkNeQWhoEkpaRlZYaQUVLkxccDlNQLCeEUOTh7efgFBeCEj0flTC7YkJTEJ-anpnfiteO1aE7ti5dLQcIhIACKgJHwAl4lbUGgbBAwDhyHAnAAaEYRcZdSbxPohZh4JClUquARScDPORIACeIxunR2PROSNRpVm5DYQA" />

### Ejemplo 3

```latino
escribir("Ingresa el primer número:")
priNum = leer()
escribir("Ingresa el segundo número:")
segNum = leer()
// Processo de intercambio.
priNum = priNum - segNum
segNum = priNum + segNum
priNum = segNum - priNum
escribir("Después de intercambiar, la primera variable es de: "..priNum)
escribir("y la segunda variable es de: "..segNum)
```

El resultado será:

```
Ingresa el primer número:
10.25
Ingresa el segundo número:
-12.5
Después de intercambiar, la primera variable es de: -12.5
y la segunda variable es de: 10.25
```

<InlinePlayground src="https://editor.lenguajelatino.org/?code=KYZwxgTglgRlEAoBEBJAdgcwqAhgAmABs8AHaAW2AjzQC-KIB7ALiQEoAoMqAOQFdyeALx5CwKgk6hIseMnRZcBYiGAY%2BaACaMa9Ki3YdVGfoJFiJnAPRW8ABSZhQIHZuB4oaAC5UwOcnCMAHRc0KbCpGECeAC0eMamRmrhItzhANTxyQKhvNEiCdFxaTnS0HCISAAioCR8AJcgeG4e3r7%2BcDgQADSi%2BNwM%2BABuXVA4MGIETW7MeEhBQSXkUuDlckgAnn1Z6lrDo%2BOToM3As-NBhctAA" />

## Identificar si el caracter es Vocal o Consonante en Latino

En este ejemplo vamos a crear un programa que sea capaz de saber si el valor que insertamos es una vocal o consonante.

```latino
escribir("Ingresa un caracter:")
caracter = leer()
vocales = ["a","A","e","E","i","I","o","O","u","U"] //Declaración de vocales.

resp = caracter..", NO es una vocal"

desde (i = 0; i < lista.longitud(vocales); i++)
   si (caracter == vocales[i])
      resp = caracter..", SI es una vocal"
   fin
fin

escribir (resp)
```

El resultado será:

```
Ingresa un caracter:
a
a, SI es una vocal
```

<InlinePlayground src="https://editor.lenguajelatino.org/?code=KYZwxgTglgRlEAoBEBJAdgcwqAhgAgFc08wcIcwAXYCALiQEoAoU8qmvAXjwBtgaEzAG4B7UnxBc8AbSQ4kAGiQBBRUmBqAomqhqUakWoDyagmoCqSALp4A9LYAiwMDzIUoAZ%2BIATYHlHioAB0TEzYIAAOUqwU1BBBQYp4AHJGeKCEaPgBODxIob4gvngIUFIADADceGUAPLxQIJQ4QTwimFCUBN4IORIM1VAA1EPMeOMgZQgx7BBc3H2g0lBWY%2BPr4VHcM3EJSQDKKOmSRNliufnrAGZQaEw3d0ygkLDwJZsMQA" />
