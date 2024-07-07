const express=require("express");
const router=express.Router();

//const fs=require("fs");

const controllerPlanes=require("../controllers/controllerPlanes");
const controllerCatalogo=require("../controllers/controllerCatalogo");
const controllerUsuario=require("../controllers/controllerUsuario");

//Peticiones GET
router.get("",controllerPlanes.getPlanes);
router.get("",controllerCatalogo.getCatalogo);
router.get("",controllerUsuario.getUsuario);

//Peticiones POST
//router.post("",controllerCatalogo.agregarPelicula);
router.post("",controllerUsuario.agregarUsuario);

//Peticiones PUT
router.put("",controllerUsuario.modificarUsuario);
//Peticiones DELETE
router.delete("",controllerUsuario.eliminarUsuario);

module.exports=router;
