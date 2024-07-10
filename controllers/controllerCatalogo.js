const db = require("../db/db");

const consultarCatalogo = (req, res) => {
    // Creamos una consulta.
    const sql = 'SELECT * FROM catalogo';

    // Se envía la consulta a la base de datos.
    // Primer parametro la consulta, segundo una función callback
    db.query(sql, (err, results) => {
        // Si sucede un error.
        if (err) {console.log(err);}

        // Enviamos el resultado en formato json
        res.json(results);
    });
};

const consultarPeliculaPorId = (req, res) => {
    // Creamos una consulta.
    const sql = 'SELECT * FROM catalogo WHERE idcatalogo = ?';

    const { idcatalogo } = req.params;

    // Se envía la consulta a la base de datos.
    db.query(sql, [idcatalogo], (err, results) => {
        // Si sucede un error.
        if (err) {console.log(err);}

        // Enviamos el resultado en formato json
        res.json(results);
    });
};

const agregarPelicula = (req, res) => {
    // Desestructuramos la request
    const { pelicula, director, anio, plan } = req.body;
    
    const sql = 'INSERT INTO catalogo (pelicula, director, anio, plan) VALUES (?, ?, ?, ?)';
    
    // Se envía la consulta a la base de datos.
    db.query(sql, [pelicula, director, anio, plan], (err, result) => {
        // Si sucede un error.
        if (err) {console.log(err);}

        // Enviamos mensaje de éxito
        res.json({ message: 'Pelicula creada', idpelicula: result.insertId });
    });
};

const modificarPelicula = (req, res) => {
    // Desestructuramos la peticion
    const { idcatalogo } = req.params;
    const { pelicula, director, anio, plan } = req.body;

    const sql = 'UPDATE catalogo SET pelicula = ?, director = ?, anio = ?, plan = ? WHERE idcatalogo = ?';

    // Pasamos la consulta
    db.query(sql, [pelicula, director, anio, plan], (err, result) => {
        // Si sucede un error.
        if (err) {console.log(err);}

        // Enviamos mensaje de éxito
        res.json({ message: 'Pelicula actualizada/modificada' });
    });
};

const eliminarPelicula = (req, res) => {
    // Desestructuramos la peticion
    const { idcatalogo } = req.params;

    const sql = 'DELETE FROM catalogo WHERE idcatalogo = ?';
    // Pasamos la consulta
    db.query(sql, [idcatalogo], (err, result) => {
        // Si sucede un error.
        if (err) {console.log(err);}

        // Enviamos mensaje de éxito
        res.json({ message: 'Pelicula eliminada' });
    });
};

// Se exportan las funciones implementadas.
module.exports = {
    consultarCatalogo,
    consultarPeliculaPorId,
    agregarPelicula,
    modificarPelicula,
    eliminarPelicula
};
