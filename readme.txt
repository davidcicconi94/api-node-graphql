// Instalacion de libreria para que lea contenido del archivo .env en el archivo 'environment.ts'

1-  npm i dotenv --save
2- Importamos dotenv from 'dotenv'
3- Ejecutamos dotenv.config()



// ENTITIES: TABLAS

/* BOOKS */

1- Crearemos un archivo book.entities.ts dentro de la carpeta Entity

2- Importaremos las clases Entity y Column.

3- Haremos la estructura de la tabla mediante una clase: crearemos la clase Book y le a agregaremos 4 propiedades: id, title, author, createdAt

4- Especificación de 'tipo' mediante decoradores, especificaremos columnas @Column, salvo la primera de ID que va a ser auto incrementable. Lo haremos con 
PrimaryGeneratedColumn.

5- IMPORTANTE: Le agregaremos un inicializador a cada una de las propiedades con '!'

6- typeorm nos da un decorador para ayudarnos con la fecha: CreateDateColumn. Como parametro le pasaremos un objeto con el tipo de fecha que vamos a poner, "timestamp"

7- Para que la clase Book sea interpretada como una entity, tenemos que especificarla con un @Entity().

8- Ahora vamos a crear otra entidad que va a ser para los Authors, para relacionarlo con el de BOOKS


/* AUTHORS */

0- Leer relacion: OnToOne, OneToMany, ManyToOne. Por ejemplo, la relacion de libros a autores va a ser de ManyToOne. Porque hay muchos libros para un solo autor.

*** De Books a Author ***

1- Copiar y pegar el codigo de book.entities a author.entities. Donde modificaremos algunas cosas como las propiedades de las columnas.

2- En el archivo de books, vamos a reemplazar el @Column por un @ManyToOne, dentro pasaremos dos parametros (2 arrow functions). En una pondremos la clase la cual lo relacionaremos, en este caso Author, y en la otra crearemos un parámetro (author) que recorrerá las propiedades de la clase anterior, y usaremos .books en este caso. Ya que lo queremos relacionar con los libros del autor. 
Por último, cambiamos el tipo number a Author 

*** De Author a Books ***

1- Hacemos lo mismo que en el paso anterior pero de forma inversa



// RESOLVERS 

0- Crearemos los resolvers para Graphql
1- Crearemos el archivo author.resolver.ts 
2- Importamos el Query y Resolver de type-Graphql
3- Al igual que antes, vamos a exportar una clase AuthorResolver
4- Dentro pondremos una Mutation asincrona. Especificando que es una mutation e importandola. Y le tenemos que especificar como parámetro en arrow function, que nos va a devolver, en este caso nos devuelve un objeto de tipo Author (Importar la clase Author de author.entities).
Pero eso nos va a devolver un objeto tipo Author pero de la entidad, que no tiene nada que ver con Graphql. Por eso hay que especificar que los campos de esa clase van a ser los que nos va a devolver Graphql. 
5- Vamos a importar, en author.entities, Field y ObjectType from type-graphql. Vamos a especificar que la clase es un ObjectType. ¿Qué es un ObjectType? cuando no queremos retornar algo que es un numero o un string, sino que queremos retornar un objeto. Lo especificamos con ese decorador.
6- Llenamos el resto de las propiedades y le agregamos de que tipo son.
7- Hacemos lo mismo con fullname

¿Qué es una Mutation? Una mutation nos permite guardar o generar datos en nuestra DB



// CREAR LA LOGICA PARA HACER LA CONSULTA A LA DB









