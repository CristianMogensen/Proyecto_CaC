const mysql=require("mysql2");

// Configuración de la conexión.
const connection=mysql.createConnection({
    host:"localhost",
    user:"root",//usuario de workbench
    password:"Massardi1993",//contraseña del workbench
    port:3306
});

connection.connect((err)=>{
    //Programamos que sucede si se produce un error
    if(err){
        console.log(`Error de conexion en el servidor: ${err}`);
    }
    //En caso de que la conexion sea exitosa
    console.log(`Estado de conexion: conectado`);

    //Verificamos si existe la base de datos, si no existe la creamos
    const sqlQueryCreate="CREATE DATABASE IF NOT EXISTS peliculas2";
    connection.query(sqlQueryCreate,(err,result)=>{
        //Si se produce un error al crear la base de datos
        if(err){
            console.error(`Se produjo un error al crear la base de datos: ${err}`);
            return ;
        }

        //Si hubo exito al crear la base de datos
        console.log(`Base de datos: CREADA/EXISTENTE/GARANTIZADA`);

        connection.changeUser({database: "peliculas2"}, (err)=>{
            //Que sucederia si se produce un error
            if(err){
                console.error(`Error al cambia a la base de datos peliculas2: ${err}`);
                return ;
            }
            
            //Consulta SQL para la creación de la tabla Usuarios
            const createTableUsuarios = `
                CREATE TABLE IF NOT EXISTS usuarios (
                    idusuarios int NOT NULL AUTO_INCREMENT,
                    nombre varchar(45) NOT NULL,
                    apellido varchar(45) NOT NULL,
                    email varchar(45) NOT NULL,
                    consulta varchar(45) DEFAULT NULL,
                    fechaAlta date NOT NULL,
                    plan int NOT NULL,
                    PRIMARY KEY (idusuarios),
                    KEY fk_usuarios_planes_idx (plan),
                    CONSTRAINT fk_usuarios_planes FOREIGN KEY (plan) REFERENCES planes (idplanes)
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
            `;
            //Consulta SQL para la creación de la tabla Catalogo
            const createTableCatalogo = `
                CREATE TABLE IF NOT EXISTS catalogo  (
                    idcatalogo int NOT NULL AUTO_INCREMENT,
                    pelicula varchar(45) NOT NULL,
                    director varchar(45) DEFAULT NULL,
                    anio int DEFAULT NULL,
                    plan int NOT NULL,
                    PRIMARY KEY (idcatalogo),
                    KEY fk_catalogo_planes1_idx (plan),
                    CONSTRAINT fk_catalogo_planes FOREIGN KEY (plan) REFERENCES planes (idplanes)
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
            `;
            //Consulta SQL para la creación de la tabla Planes
            const createTablePlanes = `
                CREATE TABLE IF NOT EXISTS planes (
                    nombre varchar(15) DEFAULT NULL,
                    precio decimal(10,0) DEFAULT NULL,
                    idplanes int NOT NULL AUTO_INCREMENT,
                    PRIMARY KEY (idplanes)
                    ) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
            `;

            // Consultas a la base de datos para las creaciones de las tablas.
            // Creación Tabla Usuarios.
            connection.query(createTableUsuarios,(err,result)=>{
                //Si se produce un error al crear la tabla
                if(err){
                    console.error(`Se produjo un error al crear la tabla Usuarios: ${err}`);
                    return ;
                }

                //Si hubo exito al crear la base de datos
                console.log(`Tabla Usuarios: CREADA/EXISTENTE/GARANTIZADA`);
            });

            // Creación Tabla Planes.
            connection.query(createTablePlanes,(err,result)=>{
                //Si se produce un error al crear la tabla
                if(err){
                    console.error(`Se produjo un error al crear la tabla Planes: ${err}`);
                    return ;
                }

                //Si hubo exito al crear la base de datos
                console.log(`Tabla Planes: CREADA/EXISTENTE/GARANTIZADA`);
            });

            // Creación Tabla Catalogo.
            connection.query(createTableCatalogo,(err,result)=>{
                //Si se produce un error al crear la tabla
                if(err){
                    console.error(`Se produjo un error al crear la tabla Catalogo: ${err}`);
                    return ;
                }

                //Si hubo exito al crear la base de datos
                console.log(`Tabla Catalogo: CREADA/EXISTENTE/GARANTIZADA`);
            });
        });
    });

});

//Exportacion del modulo
module.exports = connection;
