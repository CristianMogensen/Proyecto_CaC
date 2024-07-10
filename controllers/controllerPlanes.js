const db = require("../db/db");

const consultarPlanes = (req, res) => {
    // Creamos una consulta.
    const sql = 'SELECT * FROM planes';

    // Se envía la consulta a la base de datos.
    // Primer parametro la consulta, segundo una función callback
    db.query(sql, (err, results) => {
        // Si sucede un error.
        if (err) {console.log(err);}

        // Enviamos el resultado en formato json
        res.json(results);
    });
};

const consultarPlanPorId = (req, res) => {
    // Creamos una consulta.
    const sql = 'SELECT * FROM planes WHERE idplanes = ?';

    const { idplanes } = req.params;

    // Se envía la consulta a la base de datos.
    db.query(sql, [idplanes], (err, results) => {
        // Si sucede un error.
        if (err) {console.log(err);}

        // Enviamos el resultado en formato json
        res.json(results);
    });
};

const agregarPlan = (req, res) => {
    // Desestructuramos la request
    const { nombre, precio } = req.body;
    
    const sql = 'INSERT INTO planes (nombre, precio) VALUES (?, ?)';
    
    // Se envía la consulta a la base de datos.
    db.query(sql, [nombre, precio], (err, result) => {
        // Si sucede un error.
        if (err) {console.log(err);}

        // Enviamos mensaje de éxito
        res.json({ message: 'Plan creado', idplan: result.insertId });
    });
};

const modificarPlan = (req, res) => {
    // Desestructuramos la peticion
    const { idplanes } = req.params;
    const { nombre, precio } = req.body;

    const sql = 'UPDATE planes SET nombre = ?, precio = ? WHERE idplanes = ?';

    // Pasamos la consulta
    db.query(sql, [nombre, precio, idplanes], (err, result) => {
        // Si sucede un error.
        if (err) {console.log(err);}

        // Enviamos mensaje de éxito
        res.json({ message: 'Plan actualizado/modificado' });
    });
};

const eliminarPlan = (req, res) => {
    // Desestructuramos la peticion
    const { idplanes } = req.params;

    const sql = 'DELETE FROM planes WHERE idplanes = ?';
    // Pasamos la consulta
    db.query(sql, [idplanes], (err, result) => {
        // Si sucede un error.
        if (err) {console.log(err);}

        // Enviamos mensaje de éxito
        res.json({ message: 'Plan eliminado' });
    });
};

// Se exportan las funciones implementadas.
module.exports = {
    consultarPlanes,
    consultarPlanPorId,
    agregarPlan,
    modificarPlan,
    eliminarPlan
};
