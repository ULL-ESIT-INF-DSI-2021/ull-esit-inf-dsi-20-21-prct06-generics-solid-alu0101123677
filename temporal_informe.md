# Informe Práctica 6. Clases e interfaces genéricas. Principios SOLID
## 1. Introducción

Informe de la sexta práctica de la asignatura de **Desarrollo de Sistemas Informáticos**. En la práctica propuesta se ha realizado 3 ejercicios diversos de typescript para profundizar en los conceptos de programación en typescript trabajando con **clases** e **interfaces genéricas**, así como la implementación de los **principios SOLID** e **Instanbul**.

## 2. Objetivos

El objetivo principal de la práctica es la realización de diversos ejercicios para profundizar en Typescript y Javascript. Para conseguirlo se tienen los siguientes ejercicios:

* Ejercicio 1. El combate definitivo
* Ejercicio 2. Conversor de unidades
* Ejercicio 3. DSIflix

## 3. Desarrollo

### 3.1 Tareas Previas

Para el desarrollo de la práctica cómo tal primero hay que hacer unas preparaciones previas, hay que aceptar la asignación de la práctica 6 y preparar el entorno del proyecto la práctica 6, para esto es necesario crear y configurar los archivos *package.json* y *tsconfig.jon* así cómo crear la **estructura de directorios**. Además de seguir las pautas para generar la documentación por **typedoc** y los **tests unitarios** realizados **mocha** y **chai**, así cómo la preparación para la utilización del **Instanbul**. 

### [Ejercicio 1. El combate definitivo.]()

En este ejercicio creamos la superclase **Fighter** y las subclases **DC**, **DragonBall**, **Marvel**, **Pokemon** y **StarWars**, así cómo las clases Combat y Plantel y el método ejercicio1.

En la **superclase abstracta Fighter** definimos los atributos y funciones comunes para las subclases de los universos de los luchadores. Se define 8 atributos: dos tipo string, name y catching_phrase; y 6 de tipo number height, weight, attack, defense, speed y healt. Cada atributo se autodefinen. También se tienen 16 métodos, 8 métodos getters y 8 métodos setters. 

Las subclases **DC**, **DragonBall**, **Marvel**, **Pokemon** y **StarWars** se extienden de la superclase **Fighter**, además de que cuentan con sus mismos atributos y métodos cumpliendo de esta manera ádemas el tercer **principio SOLID Liskov substitution principle**.

Las clase **Plantel** sirve para guardar los luchadores que vamos a usar para realizar el combate. Definimos un atributo privado que se trata de un array de objetos de la clase Fighter. Tenemos tres métodos getPlantel, choose y push.

El método **getPlantel** actua cómo getter del atributo de la clase.

El método **choose** nos sirve para para escoger el luchador que queremos utilizar, recibe como atributo un string con el nombre del luchador que queremos escoger y recorremos el vector de luchadores, cuando coincida el string dado por parametro con el nombre de uno de los luchadores retornamos el objeto coincidente.

El método **push** nos sirve para introducir un luchador nuevo en el vector de luchadores. Recibe como parametro un objeto de la clase Fighter el cual sería el luchador que queremos introducir. guardamos en una variable number el tamaño actual del vector y introducimos el objeto recibido mediante un push, una vez hecho esto retornamos el objeto que se encuentre en la posición indicada por la variable number creada anteriormente, de esta manera comprobamos que el push se ha realizado correctamente.

El método **ejercicio1** es una función planteada para hacer el recorrido completo del ejercicio 1 desde las pruebas unitarias, recibe un objeto objeto de la clase Plantel donde se encuentran todos los luchadores que deseamos usar y dos string con los nombres de los luchadores que vamos a seleccionar y retorna el nombre del ganador.

La clase **Combat** la utilzamos para llevar acabo el combate entre los dos luchadores. Se define con dos atributos, ambos objetos de la clase Fighter y contempla 7 métodos: start, fight, priority, attack, lowEfficiency, neutralEfficiency y highEfficiency.

La función **start** nos informa que se empieza el combate, se encarga de llamar al método fight y de terminar el combate anunciando el ganador. Por último realiza un return del nombre del ganador para verificar en las pruebas unitarias.

El método **fight** es el cuerpo principal para llevar acabo el combate entre los dos luchadores, establecemos la vida de ambos luchadores en unas variables y llamamos al método priority para calcular cómo van a ser los turnos depediendo de las velocidades de ambos luchadores. Realizado esto hacemos un bucle while infinito que se termina cuando se retorna un number que puede ser 1 o 2 dependiendo de quien es el ganador. Mientras se encuentra en el while se va llamando al método attack dos veces, una por cada luchador para atacar al contrincante hasta que la vida de uno caiga por debajo de 0.

El método **priority** retorna un valor number que puede ser 1 o 2 dependiendo de las velocidades de los contrincantes y así establecer el ordén de ataque.

La función **attack** recibe dos objetos de la clase Fighter, el luchador que realiza el daño y el que lo recibe, dentro de la función se van realizando diversas comparaciones y subcomparaciones comparando los luchadores hasta encontrar a que subclase universo pertenece. y una vez encontrado se procede a llamar a lowEfficiency, neutralEfficiency y highEfficiency para calcular el daño y retornarlo.

La función **lowEfficiency** calcula el daño si el ataque es poco eficaz y lo retorna.

La función **neutralEfficiency** calcula el daño si el ataque es neutral y los retorna.

El método **highEfficiency** calcula el daño si el ataque es eficaz y lo retorna.


### [Ejercicio 2. Conversor de unidades.]()

En este ejercicio creamos la interfaz genérica **isConvertible** y las clases **Force**, **Length**, **Mass**, **Speed**, **Temperature**, **Time** y **Volume**.

En la interfaz genérica **isConvertible** define los atributos y funciones comunes para las distintas clases que representan unidades métricas. Se definen 2 atributos de tipo genérico, T y U restringidos a los tipos number y string respectivamente para representar el valor númerico y el tipo de unidad. También se define un método conversion utilizada para realizar las conversiones.

Se tiene 5 métodos, 2 métodos getter y 2 métodos setter y el método conversión para realizar las conversiones entre sistemas y unidades.

Las clases **Force**, **Lenght**, **Mass**, **Speed**, **Temperature**, **Time**, **Volume** se implementan de la misma manera gracias a que utilizan la misma interfaz, todas tienen un atributo tipo number y un atributo string que indican el valor de la unidad y en que unidad se encuentra.

El método **conversion** de cada clase recibe un string que se utiliza para indicar a que unidad queremos hacer la conversión y se retorna el valor con la conversión realizada. En los método conversión se realiza una doble comparación mediante if aninados para saber que tipo vamos a convertir y en que tipo de unidad queremos para así realizar las formulas correspondientes. En el caso de que sea imposible establecer una conversión implementada se retornará 0.

### [Ejercicio 3. DSIflix.]()

En este ejercicio creamos las interfaces genéricas **Streamable** y **Printeable**, así cómo la clase abstracta genérica **BasicStreamableCollection**, las subclases **CollectionDocumentary**, **CollectionMovie** y **CollectionSerie**, además de las clases **Documentary**, **Movie** y **Serie**

En la interfaz genérica Streamable definimos los atributos y funciones comunes para las 
distintas clases que representen colecciones de series, peliculas y documentales.


## 4. Conclusiones

En conclusión, estos ejercicios resultan más sencillos tras el desarrollo de los ejercicios de las prácticas anteriores pero llevan su tiempo desarrollarlos cuanta más cantidades de casos y datos se introduzcan además de tener en cuenta el desarrollo de las pruebas unitarias para cada caso.

En el **ejercicio 1** se podría introducir diversas modificaciones que no afectarían al código principal pero se pueden introducir nuevas funciones para especificar casos concretos de combates entre luchadores o añadir nuevos atributos a cada universos para que se tengan en cuenta en los combates y resulta bastante interesante.

El **ejercicio 2** se vuelve bastante repetitivo ya que es pasar de convertir unidades de las diferentes magnitudes y el ejericio crece bastante cuantas más conversiones tengas en cuenta, pero todas van a tener la misma estructura de realizarse y la forma de añadirlas va ser la misma.



## 5. Bibliografía

**[Guión Práctica 6]():** Guión de la práctica 5 de la asignatura de Desarrollo de Sistemas Informáticos.

**[Apuntes de Clases de interfaces genéricos. Principios SOLID]():** Apuntes de Clases de interfaces genéricos. principios SOLID.