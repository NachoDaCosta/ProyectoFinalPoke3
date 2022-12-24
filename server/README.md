# Proyecto Pokedex

Autores: Juan Da Costa - Gaston Hecht

Instrucciones para levantar el Backend

1er paso:
- Clonar el Repositorio ejecutando el comando
```bash
  git clone https://github.com/NachoDaCosta/ProyectoFinalPoke3
```

2do paso:
- realizar el siguiente comando en la raiz de "/server" y de "/front" para que se instalen todas las dependencias (Express js, Node js, React js, Sequelize Cli, etc)


```bash
  npm i
```

3er paso:
- Nos paramos en la ruta del server, y ejecutamos el comando (depende del equipo) para correr el servidor falso
```bash
  nodemon app.js
  ó
  npx nodemon app.js
```

4to paso:
- Configurar nuestro archivo de servidor (Server/config/config.json) con los datos de nuestra base de datos.
- Configurar un archivo .env con los datos de la base de datos

5to paso:
- Ejecutar el siguiente comando para que se cree nuestra base de datos
```bash
  sequelize-cli db:create
```
- Ejecutar el siguiente comando para que se realizen las migraciones y los modelos
```bash
  sequelize-cli db:migrate
```
- Ejecutar el siguente comando para que se realizen los seeders para que mande la información.
```bash
  npx sequelize-cli db:seed:all
```

6to paso:
- Realizar el siguiente comando en la raiz de "/front" y probar las funcionalidades del proyecto
```bash
  npm start
```