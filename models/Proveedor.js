const mongoose = require('mongoose');

const proveedorSchema = mongoose.Schema({
    nombre:{
        type: String,
        required:true
    },
    NIT:{
        type: Number,
        required: true
    },
    direccion:{
        type: String,
        required: true
    },
    telefono:{
        type: Number,
        required: true
    },
    correo:{
        type: Number,
        required: true
    },
    horario:{
        type: String,
        required: true
    }
},{versionkey:false});

module.exports = mongoose.model('Proveedor', proveedorSchema);