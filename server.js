const express=require("express");
const app=express();

const siteRoutes=require("../Proyecto_CaC/routes/siteRoute");
const PORT=3000;

app.use(express.json());
app.use("/",siteRoutes);

app.listen(PORT,()=>{
    console.log(`El servidor esta escuchando el puerto ${PORT}`);
});

/** Posible integracion del front con el back*/
const http=require("http");
const fs=require("fs");

const serverOptions={
    timeout:50000
};

const requestListener=function(req,res){
    //Utilizamos el modulo fs para leer el archivo html
    const archivo=fs.readFileSync(__dirname+"/index.html");

    //Preparamos un objeto de cabecera
    const cabecera={
        'Content-Type': 'text/html; charset=UTF-8'
    }
    //Configuramos el estado de la respuesta
    res.writeHead(200,cabecera);

    //Envio del documento
    res.end(archivo);
}

const server = http.createServer(serverOptions, requestListener);