Readme del Backend - Proyecto Pokedex

Autores: Juan Da Costa - Gaston Hecht

Instrucciones para levatar el Backend

1er paso:
- Clonar el Repositorio ejecutando el comando: "git clone [ruta del proyecto]"

2do paso:
- realizar el comando : "npm install" en la raiz de "/server" para que se instalen todas las dependencias (Express js, Node js, React js, Sequelize Cli, etc)

3er paso:
- Nos paramos en la ruta del server, y ejecutamos el comando: "nodemon app.js" para correr el servidor falso

4to paso:
- Configurar nuestro archivo de servidor (Server/config/config.json) con los datos de nuestro programa de base de datos(PostreSQL).
- Configurar un archivo .env con los datos de la base de datos
-creamos una base de datos con el nombre "pokemons"

5to paso:
- Ejecutar el comando: "sequelize-cli db:migrate" para que se realizen las migraciones y los modelos
- Ejecutar el comando: "npx sequelize-cli db:seed:all" para que se realizen los seeders para que mande la información.

6to paso:
- Realizar el comando "npm start" y probar las funcionalidades del proyecto
