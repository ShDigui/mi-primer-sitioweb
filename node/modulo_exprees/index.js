const express = require('express');

const server = express();
server.use(express.json());

server.listen('3000', () => {
    console.log('server on port 3000')
});

server.get('/', function(req, res) {
    res.json({
        name:"Diego",
        lastName:"Salazar"
    });
});

server.get('/mision', function(req, res) {
    res.send("<h1>Misión</h1><p>Nuestra misión es mejorar día a día¡¡</p>")
});

server.get('/vision', function(req, res) {
    res.send("<h1>Visión</h1><p>Nuestra vision es alcanzar el exito y ser los mejores¡¡</p>")
});

server.post('/Sobrenosotros', function(req, res) {
    res.send("Sobre Nosotros.¡Conoscamos¡")
});

server.put('/contactanos', function(req, res){
    res.send("que esperas para contactarnos¡¡")
});

server.delete('/cerrarsesion', function(req, res){
    res.send("estas seguro de serra sesión?")
});


