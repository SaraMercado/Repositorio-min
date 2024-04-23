const Proveedor = require('../models/Proveedor');

//buscar los proveedores

exports.buscarProveedores = async(req, res)=>{
    try {
        let proveedor = await Proveedor.find();
        res.json(proveedor)
    } catch (error ) {
        console.log('error');
        res.status(500).send('No funciono la busqueda');
    }
}

//fn para  agregar un nuevo proveedor 

exports.agregarProveedor = async(req, res)=>{
    try {
        let proveedor;
        proveedor = new Proveedor(req.body)
        await proveedor.save();
        res.send(proveedor);
        
    } catch (error) {
        console.log('error')
        res.status(500).send('Fallo al agregar al proveedor')
    }
}

//busqueda de proveedor por id

exports.buscarProveedor = async(req, res)=>{
    try {
        let proveedor = await Proveedor.findById(req.params.id)
        if(!proveedor){
            res.status(404).json({msg:'El proveedor no existe'})
            return
        }
        res.send(proveedor);
    } catch (error) {
        console.log('error')
        res.status(500).send('Fallo al buscar al proveedor');
        
    }
}
//fn para eliminar a un cliente

exports.eliminarProveedor = async(req,res)=>{
    try {
        let proveedor = await Proveedor.findById(req.params.id);
        if(!proveedor){
            res.status(404).json({msg:'El proveedor no exixte'})
            return
        }
        
    } catch (error) {
        console.log('error')
        res.status(500).send('No fue posible eliminar al proovedor');
    }
}

//fn para actualizar el proveedor 

exports.actualizarProveedor = async(req,res) =>{
    try {
        const proveedor = await Proveedor.findAndUpdate({_id:req.params.id}, req.body);

        if(!proveedor) res.status(404).send('Proveedor no encontrado');
        else res.json(proveedor);
    } catch (error) {
        console.log('error');
        res.status(500).send('fallo al actualizar al proveedor')
    }
}