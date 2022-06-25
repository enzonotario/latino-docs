La librería **sis** contiene funciones que nos permitirán operar con nuestro sistema desde Latino.

**Lista de comando**


| Comando | Parámetros | Descripción |
| --- | --- | --- |
| dormir( ) | 1 | Detiene el sistema por segundos |
| ejecutar( ) | 1 | Ejecuta un comando de la consola desde latino |
| fecha( ) | 1 | Imprime la fecha y hora del sistema (cadena) |
| salir( ) | 0 | Termina la ejecución de latino |
| cwd( ) | 0 | Imprime la ruta de donde se está ejecutando Latino |
| iraxy( ) | 2 | Mueve el cursor de la consola a una nueva posición |
| tiempo( ) | 2 | Muestra el año, mes, hora, min, y seg de la máquina local |
| usuario( ) | 0 | Devuelve el nombre del usuario activo del sistema |
| operativo( ) | 1 | Devuleve el sistema operativo en el que se ejecuta |
| op( ) |

___

## sis.dormir( )

Este comando **detiene la ejecución del código** por la cantidad de segundos signados.

Es importante recalcar que este comando admite **segundos** y NO milisegundos.

___

## sis.ejecutar( )

Con este comando podemos efectuar **comandos nativos de la consola** en el que estamos.

___

## sis.fecha( )

Este comando nos permite obtener la **fecha** del equipo o máquina local en donde Latino se está ejecutado.

Los comando a utilizar son los siguientes:


| Comandos | Descripción |
| --- | --- |
| seg | Devuelve los segundos |
| min | Devuelve los minutos |
| hora | Devuelve las horas (hora militar) |
| mes | Devuelve el mes |
| año | Devuelve el año |
| d\_sem | Devuelve el día de la semana |
| d\_mes | Devuelve el día del mes |
| d\_año | Devuelve el día del año |
| estacion | Devuelve la estación del año |

___

## sis.salir( )

Con este comando podemos **cerrar o terminar** la ejecución de Latino.

Este comando es similar al atajo de teclado de consola explicado [aquí](https://manual.lenguajelatino.org/es/stable/consola/Comandos-Consola.html#atajoconsolalink).

___

## sis.cwd( )

Imprime la **ruta** en donde Latino esta siendo ejecutado.

___

## sis.iraxy( )

Con este comando podemos **mover** el cursor de texto a cualquier parte de la ventana.

Este comando es similar al comando **gotoxy( )** en C.

**Ejemplo de sintaxis**

```
sis.iraxy(valorHorizontal, valorVertical)

```

___

## sis.tiempo( )

A diferencia del comando **sis.fecha( )**, el comando **sis.tiempo( )** nos permite tener un mayor control de las fechas y horas.

Este comando es similar a la librería **datetime** en Python.


| Comando | Descripción |
| --- | --- |
| %a | Nombre del día de la semana abreviado |
| %A | Nombre del día de la semana completo |
| %w | Día de la semana en números del 0-6 (0 es domingo) |
| %d | Día del mes |
| %b | Nombre del mes abreviado |
| %B | Nombre del mes completo |
| %m | Mes en números |
| %y | Año abreviado |
| %Y | Año completo |
| %H | Horas (00-23) |
| %I | Horas (00-12) |
| %p | AM/PM |
| %M | Minutos (00-59) |
| %S | Segundos (00-59) |
| %z | UTC offset |
| %Z | Zona horaria (timezone) |
| %j | Número del día del año (001-366) |
| %U | Números de la semana del año (00-53, Domingo como el primer día de la semana) |
| %W | Números de la semana del año (00-53, Lunes como el primer día de la semana) |
| %c | Fecha y el hora de la máquina local |
| %x | Fecha de la máquina local |
| %X | Hora de la máquina local |
| %% | Devuelve el carácter de % |

___

## sis.usuario( )

Este comando obtener el **nombre del usuario** activo en el sistema.

___

## sis.operativo( )

El comando **sis.operativo( )** también dispone de una abreviación **op**.

Ambos comandos retornar el nombre del **sistema operativo** es en el que Latino esta siendo ejecutado.

Estés comando solo admite los siguientes comandos (en mayúsculas):

-   **WIN32** : para MS-Windows
-   **APPLE** : para macOS-X
-   **LINUX** : para Linux
