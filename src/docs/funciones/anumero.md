# anumero()

La función **anumero( )** convierte las cadenas(textos) a números.

Las comillas sin caracteres, ejemplo **“”** devolverá un valor **Nulo** al igual que el números **0**.

Los espacios en blanco, ejemplo **“ “** o cualquier número que tengo un espacio en blanco, ejemplo **“7 “** estos serán convertidos su valor de [código ALT](https://en.wikipedia.org/wiki/Alt_code).

**Ejemplo de función**

```latino
escribir(anumero("3.14"))     //Devolverá 3.14
escribir(anumero(""))         //Devolverá nulo
escribir(anumero("0"))        //Devolverá nulo
escribir(anumero(" "))        //Devolverá 32 (Esto correspondo al código ALT)
escribir(anumero("9"))        //Devolverá 9
escribir(anumero("9 "))       //Devolverá 57(Como tiene un espacio devolverá el código ALT)
```

___

## Convertir buleanos a número

La función **anumero( )** se puede usar para convertir valores buleanos(lógicos) en un valor numérico.

```latino
anumero(verdadero)     //Devolverá 1
anumero(falso)         //Devolverá "nulo" (no retorna 0, ya que su valor es representado por un valor nulo)
```
