# Burger Queen

## Índice

* [1. Ice-Queen](#Ice-Queen)
* [2. Historia de Usuario](#2-Historia-de-Usuario)
* [3. Realización del Proyecto](#Realización-del-Proyecto)
* [4. Tecnologías empleadas](#Tecnologías-empleadas)
* [5. Fuentes](#Fuentes)
* [6. Autores](#Autores)

***

## 1. Ice-Queen 🍨

<div style="text-align: center;">
  <img src="./ice-queen/src/assets/img/logo-Ice-Queen.png" style="width:20vw">
</div>


Ice-Queen es una aplicación para un restaurante de helados. La cual podrá ayudar al mesero y al chef a cumplir sus roles de manera eficiente.

La aplicación se desenvuelve en los roles ya antes mencioandos, en donde el mesero podrá desplegar el menú de opciones que se tiene para el cliente y este podrá realizar el pedido, enviándolo a cocina en tiempo real. También podrá verificar el estado de las ordenes para poder realizar la entrega de el o los productos al cliente.

En caso del rol del chef, este podrá recibir la orden enviada por el mesero, podrá aceptarla y también podrá verificar el tiempo que le tomó preparar el pedido desde que aceptó realizarlo.

La aplicación es una _Single Page App_. La interfaz esta diseñada para ser usada en una _tablet_, y es **responsive**.
Se encuentrá en desarrollo el funcionamiento de manera **offline**.

## 2. Historia de Usuario 🔍

### Definición del producto

El Product Owner nos presenta este _backlog_ que es el resultado de su trabajo con el cliente hasta
hoy.

***

#### [Historia de usuario 1] Mesero/a debe poder tomar pedido de cliente

Yo como meserx quiero tomar el pedido de un cliente para no depender de mi mala
memoria, para saber cuánto cobrar, y enviarlo a la cocina para evitar errores y
que se puedan ir preparando en orden.

##### Criterios de aceptación

Lo que debe ocurrir para que se satisfagan las necesidades del usuario)

* Anotar nombre de cliente.
* Agregar productos al pedido.
* Eliminar productos.
* Ver resumen y el total de la compra.
* Enviar pedido a cocina (guardar en alguna base de datos).
* Se ve y funciona bien en una _tablet_

##### Definición de terminado

Lo acordado que debe ocurrir para decir que la historia está terminada.

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***

#### [Historia de usuario 2] Jefe de cocina debe ver los pedidos

Yo como jefx de cocina quiero ver los pedidos de los clientes en orden y
marcar cuáles están listos para saber qué se debe cocinar y avisar a lxs meserxs
que un pedido está listo para servirlo a un cliente.

##### Criterios de aceptación

* Ver los pedidos ordenados según se van haciendo.
* Marcar los pedidos que se han preparado y están listos para servirse.
* Ver el tiempo que tomó prepara el pedido desde que llegó hasta que se
  marcó como completado.

##### Definición de terminado

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***

#### [Historia de usuario 3] Meserx debe ver pedidos listos para servir

Yo como meserx quiero ver los pedidos que están preparados para entregarlos
rápidamente a los clientes que las hicieron.

##### Criterios de aceptación

* Ver listado de pedido listos para servir.
* Marcar pedidos que han sido entregados.

##### Definición de terminado

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).
* Los datos se deben mantener íntegros, incluso después de que un pedido ha
  terminado. Todo esto para poder tener estadísticas en el futuro.

***

## 3. Realización del Proyecto
## 3.1 Diseño 📱

### 3.1.1 Wireframe:📝

[Wireframe](https://www.figma.com/file/9Xufxpn3hjHaPSEAyoHv2l/Prototipo-Burger-Queen?node-id=274%3A2)

### 3.1.2 Prototipo de Alta fidelidad:📝
[Prototipo de alta fidelidad](https://www.figma.com/file/9Xufxpn3hjHaPSEAyoHv2l/?node-id=0%3A1)

### 3.1.3 Vídeo desarrollativo del proyecto

<div style="text-align: center;">
  <img src="./ice-queen/src/assets/img/video-ice-queen.gif">
</div>

** Para poder hacer uso de la aplicación podrás ingresar con los siguientes datos:

| Usuario| Contraseña |
| ------------- | ------------- |
| workers@ice-queen.com  | 123456  |
| chef@ice-queen.com | chef123456  |


## 4. Tecnologías empleadas 👩🏾‍💻

### WireFrame

- [Angular](https://angular.io/)

### Trabajo Colaborativo

- [Git](https://git-scm.com/)

- [Github](https://github.com/)

### Para la funcionalidad:
- [Typescript](https://www.typescriptlang.org/)

- [Firebase](https://firebase.google.com/)

### Para la estructura y diseño:

-  [HTML](https://developer.mozilla.org/es/docs/Web/HTML)

- [SASS](https://sass-lang.com/)

- [Figma](https://www.figma.com)

- [Bootstrap](https://getbootstrap.com/)

## 5. Fuentes 📚
- [Repositorio de Laboratoria](https://github.com/Laboratoria/LIM016-burger-queen)

## 6. Autores 📍
- [Jeanella Hugo](https://github.com/jeanecvh)
- [Brisset Corcino](https://github.com/Brisset-91)
- Equipo de Laboratoria LIM016


