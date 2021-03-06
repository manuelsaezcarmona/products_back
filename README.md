# Products backend

BackEnd para la aplicaci贸n de Muestra de productos.

### Comenzando 馃殌

Para ejecutar esta aplicaci贸n en tu maquina, necesitaras tener instalado Node en tu ordenador.

Puedes descargarla [aqui](https://nodejs.org/en/)

### Instalaci贸n 馃敡

Desde la teminal crea una carpeta y dentro de ella puedes clonar el repositorio

```bash
git clone https://github.com/manuelsaezcarmona/products_back.git
```

Necesitas realizar la instalaci贸n de las dependencias necesarias ejecuta el comando.

```bash
npm install
```

Este proyecto utiliza variables de entorno que por seguridad no se suben a los repositorios de github, con lo que se tendr谩 que crear un archivo .env con las siguientes variables. Solo es copiar y pegar el siguiente c贸digo:

```powershell
PORT=8000
DB_USER=flat101
DB_PASS=productos
DB_CLUSTER=@manucluster0.xmenl.mongodb.net
DB_NAME_DEV=productsDev
DB_NAME_TEST=productsTest
DB_NAME_PROD=productsDev
```

Ahora ya puedes lanzar el proyecto con ...

```bash
npm start
```

He realizado una peque帽a landing para tener una comprobaci贸n visual de que el servidor se encuentra funcionando puedes acceder a traves de [http://localhost:8000](http://localhost:8000)

### Testing 鈿欙笍

La aplicaci贸n contiene pruebas automatizadas realizadas bajo el test runner jest.
Se ha realizado de los dos m贸dulos principales,el de conexi贸n a la base de datos y el de los controladores.

Para ejecutar las pruebas, desde el terminal lanza el comando :

```bash
npm test
```

### Tecnolog铆as 馃枼

- Node para usar js fuera del navegador y usarse en un servidor
- express. Modulo / framework de Node para desarrollar el servidor.
- MongoDB / Mongoose .- Para la capa de persistencia y gestion de Datos (DB no relacionales).
- Lint - Eslint - Para estilar el c贸digo
- Prettier - Para formatear el c贸digo segun la guia de estilo

### Consideraciones en el desarrollo.

- EndPoints, segun los requisitos para la aplicacion front , los endpoints necesarios son de Lectura (read) y de escritura (create).
- La unica entidad que se ha creado es Productos. Al no haber usuarios no se implementa autorizaciones.

### Gesti贸n de versiones GIT | GitHub. 

Evito trabajar directamente sobre main, y cada una de las ramas son para cada una de las fases del proyecto. Si fuese una feature el proceso seria el mismo concretado para esa funcionalidad especifica.

Las ramas que se han usado para el desarrollo de la app han sido:

- **master - main:** unicamente para iniciar el proyecto y para el posterior deploy.
- **DB-Conection:**
  - Configuraci贸n y desarrollo de la conexi贸n a realizar entre el servidor y el sistema gestor de base de datos.
  - Se definen los modelos de datos que son necesarios para la aplicaci贸n.
  - Desarrollo de controladores y enrutadores de los distintos endpoints
- **testing:** Pruebas unitarias sobre los modulos desarrollados

Una vez terminadas estas fases en sus respectivas ramas se realiza un merge a la rama master donde se establecer谩 un deploy al entorno de producci贸n.
