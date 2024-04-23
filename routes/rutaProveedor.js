const express = require('express');
const router = express.Router();
const proveedoresController = require('../controllers/proveedoresController');

//rutas del crud

router.post('/', proveedoresController.agregarProveedor);
router.get('/', proveedoresController.buscarProveedores);
router.get('/:id', proveedoresController.buscarProveedor);
router.delete('/:id', proveedoresController.eliminarProveedor);
router.put('/:id', proveedoresController.actualizarProveedor);

module.exports = router;

