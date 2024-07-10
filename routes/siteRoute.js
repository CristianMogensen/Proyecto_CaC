const express = require("express");
const router = express.Router();

// Importación de los controllers para cada tabla.
const controllerPlanes = require("../controllers/controllerPlanes");
const controllerCatalogo = require("../controllers/controllerCatalogo");
const controllerUsuario = require("../controllers/controllerUsuario");

// Peticiones GET
router.get("/planes", controllerPlanes.consultarPlanes);
router.get("/planes/:idplanes", controllerPlanes.consultarPlanPorId);

router.get("/catalogo", controllerCatalogo.consultarCatalogo);
router.get("/catalogo/:idcatalogo", controllerCatalogo.consultarPeliculaPorId);

router.get("/usuarios", controllerUsuario.consultarUsuarios);
router.get("/usuarios/:idusuarios", controllerUsuario.consultarUsuarioPorId);


// Peticiones POST
router.post("/planes", controllerPlanes.agregarPlan);
router.post("/catalogo", controllerCatalogo.agregarPelicula);
router.post("/usuarios", controllerUsuario.agregarUsuario);


// Peticiones PUT
router.put("/planes/:idplanes", controllerPlanes.modificarPlan);
router.put("/catalogo/:idcatalogo", controllerCatalogo.modificarPelicula);
router.put("/usuarios/:idusuario", controllerUsuario.modificarUsuario);


// Peticiones DELETE
router.delete("/planes/:idplanes", controllerPlanes.eliminarPlan);
router.delete("/catalogo/:idcatalogo", controllerCatalogo.eliminarPelicula);
router.delete("/usuarios/:idusuario", controllerUsuario.eliminarUsuario);


module.exports = router;
