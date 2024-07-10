const db = require("../db/db");

const consultarUsuarios = (req, res) => {
    // Creamos una consulta.
    const sql = 'SELECT * FROM usuarios';

    // Se envía la consulta a la base de datos.
    // Primer parametro la consulta, segundo una función callback
    db.query(sql, (err, results) => {
        // Si sucede un error.
        if (err) {console.log(err);}

        // Enviamos el resultado en formato json
        res.json(results);
    });
};

const consultarUsuarioPorId = (req, res) => {
    // Creamos una consulta.
    const sql = 'SELECT * FROM usuarios WHERE idusuarios = ?';

    const { idusuarios } = req.params;

    // Se envía la consulta a la base de datos.
    db.query(sql, [idusuarios], (err, results) => {
        // Si sucede un error.
        if (err) {console.log(err);}

        // Enviamos el resultado en formato json
        res.json(results);
    });
};

const agregarUsuario = (req, res) => {
    // Desestructuramos la request
    const { nombre, apellido, email, consulta, fechaAlta, plan } = req.body;
    
    const sql = 'INSERT INTO usuarios (nombre, apellido, email, consulta, fechaAlta, plan) VALUES (?, ?, ?, ?, ?, ?)';
    
    // Se envía la consulta a la base de datos.
    db.query(sql, [nombre, apellido, email, consulta, fechaAlta, plan], (err, result) => {
        // Si sucede un error.
        if (err) {console.log(err);}

        // Enviamos mensaje de éxito
        res.json({ message: 'Usuario creado', idusuario: result.insertId });
    });
};

const modificarUsuario = (req, res) => {
    // Desestructuramos la peticion
    const { idusuarios } = req.params;
    const { nombre, apellido, email, consulta, fechaAlta, plan } = req.body;

    const sql = 'UPDATE usuarios SET nombre = ?, apellido = ?, email = ?, consulta = ?, fechaAlta = ?, plan = ? WHERE idusuarios = ?';

    // Pasamos la consulta
    db.query(sql, [nombre, apellido, email, consulta, fechaAlta, plan, idusuarios], (err, result) => {
        // Si sucede un error.
        if (err) {console.log(err);}

        // Enviamos mensaje de éxito
        res.json({ message: 'Usuario actualizado/modificado' });
    });
};

const eliminarUsuario = (req, res) => {
    // Desestructuramos la peticion
    const { idusuarios } = req.params;

    const sql = 'DELETE FROM usuarios WHERE idusuarios = ?';
    // Pasamos la consulta
    db.query(sql, [idusuarios], (err, result) => {
        // Si sucede un error.
        if (err) {console.log(err);}

        // Enviamos mensaje de éxito
        res.json({ message: 'Usuario eliminado' });
    });
};

// Se exportan las funciones implementadas.
module.exports = {
    consultarUsuarios,
    consultarUsuarioPorId,
    agregarUsuario,
    modificarUsuario,
    eliminarUsuario
};
