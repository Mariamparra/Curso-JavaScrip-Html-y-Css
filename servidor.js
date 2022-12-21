var express = require("express");
var aplicacion = express();

aplicacion.get("/", inicio);
aplicacion.get("/cursos", cursos);

function inicio(peticion, resultado)
{
    resultado.send("Este es el <strong>home</strong> de: <br/> Maria del mar");
}

function cursos(peticion, resultado)
{
    
    resultado.send("Estos son los <strong>cursos</strong>");
}

aplicacion.listen(8989);
// requiere sirve para ver que librererias estan cargadas
