const express = require('express');
const conectarBD = require('../config/db');
const app = express();
const cors = require('cors')
//enlazar la conexion con la bd
conectarBD();
app.use(cors());
app.use(express.json());

//ruta principal del proyecto
app.use('/api/clientes', require('../routes/rutas'));
app.use('/api/proveedor', require('../routes/rutaProveedor'));


// comprobar que el servidor este conectado

app.get('/', (req, res) =>{
    res.send('Hola mundo desde el Back');
})

//se define una constante para el puerto que tendra configuraci[on local o en la nube del proyecto
const port = process.env.PORT || 3000;

app.listen(port, () =>{
    console.log('el servidor se ha conectado')
})


