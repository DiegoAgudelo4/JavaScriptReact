react es una libería, no es un framework, angular si es un framework

Library Facebook View

1. cpmunidad
2. sigue siendo javascript
3. enfocado a componentes
4. es muy flexible
5. se puedem crear aplicaciones moviles

Empresas que usan react, facebook, udemy etc.

node js es el entorno del lado del servidor donde se va a ejecutar
equivalente a maven, gradle.

javascriptes un lenguaje interpretado, no compilado.

Babel es el encargado de interpretar.

cra, vite, nos permite crear la libreria
next, es el framework de react

        cra            vite                 next
create  3               1                   2
deploy  3               1                   2
config  3               1                   2

npm: gestor de paquetes

***crear proyecto***
instalar la extension de react en chrome o mozilla
instalar node
instalar vite
npm create vite@latest
npm run dev

***concepto***
--DOM

React no trabaja directamente sobre el DOM
Crea una copia del DOM llamado virtual DOM

Cuando actualizar un algo de la pagina no la actualiza toda, solo actualiza el algo.
--componente (es una funcion) que devuelve un jsx 
un botón es un componente, la idea de un componente es reutilizarlo

un componente es una funcion que retorna JSX

React se basa en componentes
Componente A componente B

--Data Flow
La unica forma de compartir informacion entre los dos, por propiedades(inmutables) o por estados (mutables)  (props, state)
Del componente A al componente B se hace por propiedades.

En react la comunicacion es unidireccional, de padre a hijo.

Para comunicar el hijo con el padre es mediante una funcion. enviar una funcion al hijo y esta la devuelve

las propiedades y los estados son objetos.

si el usuario interactua es un estado.

<<Hook>>
un hook es como darle un ciclo de vida al componente
todos empiezan con  <<use>>
                ->*useState (Estado)
                *useMemo
                ->*useEffects  (ciclo de vida al componente)

Cuando se llama al useState() retorna un arreglo
[0,1]
x,y --__-->> [x,y]=useState(z)
x: el valor que vamos a guardar (cualquier cosa) ; y: la funcion que va a modificar ese valor
z: el valor con el que se inicializa x
React solo lee esta funcion cuando hay un cambio, a ninguna otra

<<Regla>>
Un hook pertenece al componente


Repasar
el map
filtro 
reduce

el examen es un arreglo, hacer cosas
el oro es explicar por qué saca error