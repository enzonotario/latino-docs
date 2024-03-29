# Lógicos

Los operadores lógicos se usan para determinar la lógica entre variables o valores y estos devuelven **Verdadero** o **Falso**, dependiendo si la expresión es verdadera o falsa.

Los operadores lógicos se utilizan comúnmente en la toma de decisiones en programación.

| Operador | Descripción                                                              |
| -------- | ------------------------------------------------------------------------ |
| &&       | Y lógico: Sólo será verdadero si todos los operadores son verdaderos.    |
| \|\|     | Ó lógico: Será verdadero si sólo uno de los dos operadores es verdadero. |
| !        | NO lógico: Sólo será verdadero si todos los operadores son falsos.       |

**Ejemplo:**

Para los siguientes ejemplos supondremos que la variable **x=6** y la variable **y=3**.

| Operador | Descripción | Ejecución                    | Resultado |
| -------- | ----------- | ---------------------------- | --------- |
| &&       | y lógico    | escribir(x < 10 && y > 1)    | Verdadero |
| \|\|     | o lógico    | escribir(x == 5 \|\| y == 5) | Falso     |
| !        | no lógico   | escribir(!(x == y))          | Verdadero |
