# VivelabTest

Hola y bienvenidos al equipo de Vivelab. Cómo saben, sómos el laboratorio de innovación de la ciudad. Además compramos
y vendemos mercancías para los aventureros que nos visitan.
Por desgracia, nuestras mercancías estan perdiendo calidad constantemente mientras se aproximan a su fecha de venta. 
Para eso tenemos un sistema que actualiza el inventario por nosotros. Fue desarrollado por un Orco, que ya se ha ido
a nuevas aventuras. Su misión es añadir una nueva funcionalidad a nuestro sistema, para que podamos empezar a vender
una nueva categoría de ítems. Primero, una introducción al sistema actual: 

	- Todos los items tienen el valor SellIn que determina el numero de días que tenemos para vender el ítem
	- Todos los ítems tienen un valor Quality que determina que tan valioso es.
	- Al final de cada día nuestro sistema reduce ambos valores por cada ítem
	
Bastante sencillo, cierto? Aquí se pone interesante:

	- Una vez la fecha de venta ha pasado, la calidad se reduce al doble de velocidad
	- La calidad de un item nunca puede ser negativa
	- "Aged Brie", un tipo de queso, aumenta su calidad a medida que el tiempo pasa
	- La calidad de un ítem nunca será mayor a 50
	- "Sulfuras", un ítem legendario, nunca será vendido ni disminuira su calidad
	- "Backstage passes", al igual que Aged Brie, su calidad aumenta a medida que su fecha de venta se aproxima;
	La calidad aumenta por 2 cuando está a 10 días o menos y por 3 cuando hay 5 días o menos pero la calidad pasa a 0
	después del concierto.
	
Hemos firmado con un vendedor de ítems encantados( Conjured ). Esto requiere que se actualice nuestro sistema:

	- "Conjured" items pierden calidad al doble de velocidad que los ítems normales

Pueden hacer cualquier cambio al metodo UpdateQuality y añadir el código que quieran siempre y cuando todo siga 
funcionando correctamente. Sin embargo, no se debe modificar la clase Item ya que esta pertenece a los orcos de la 
mano blanca y ellos no creen en compartir el código( pueden hacer estaticos UpdateQuality e Items, ya que ellos no
entienden de eso )

Valga la pena aclarar, un item no puede tener una calidad mayor a 50, pero "Sulfuras" siendo legendario tiene calidad
de 80 y nunca cambia.
