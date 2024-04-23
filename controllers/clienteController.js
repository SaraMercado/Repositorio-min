const Cliente = require('../models/Cliente');

//funcion para buscar los clientes
exports.buscarClientes= async (req,res)=>{
    try {
        let cliente = await Cliente.find();
        res.json(cliente)
    } catch (error) {
        console.log('error')
        res.status(500).send('fallo la busqueda')
        
    }
}


//function agregar cliente

exports.agregarClientes = async(req, res) =>{
    try {
        let cliente;
        cliente = new Cliente(req.body);
        await cliente.save();
        res.send(cliente);

    } catch (error) {
        console.log('error')
        res.status(500).send('hubo un error al agregar al cliente');
    }
}

//funcion para bsucar un solo cliente 

exports.buscarCliente= async(req, res) =>{
    try {
        let cliente = await Cliente.findById(req.params.id)
        if(!cliente){
            res.status(404).json({msg:'cliente no encontrado por Id'})
        }
        res.send(cliente);
        
    } catch (error) {
        console.log('error')
        res.status(500).send('hubo un error al buscar al cliente');
    }
}

//funcion para eliminar a un cliente

exports.eliminarCliente = async(req, res) =>{
    try {
        let cliente = await Cliente.findById(req.params.id);
        if(!cliente){
            res.status(404).json({msg:'El cliente no existe'})
            return
        }

        await Cliente.findOneAndRemove({_id: req.params.id});
        res.json({msg:'el cliente fue eliminado'});
        return
    } catch (error) {
        console.log('error')
        res.status(500).send('no fue posible eliminar al cliente');
        
    }
}

//funcion para actualizar al cliente forma |1

/*exports.actualizarCliente = async(req, res)=>{
    try {
        const {nombres, apellidos, documento, correo, telefono, direccion} = req.body
        let cliente = await  Cliente.findById(req.params.id);

        if(!cliente){
            res.status(404).json({msg:"El cliente no existe"});
            return
        } else{
            cliente.nombres = nombres;
            cliente.apellidos = apellidos;
            cliente.documento = documento;
            cliente.correo = correo;
            cliente.telefono = telefono;
            cliente.direccion = direccion;

            cliente = await Cliente.findOneAndUpdate({_id: req.params.id}, cliente, {new:true}) ;
            res.json(cliente);
        }
        
    } catch (error) {
        console.log(error)
        res.status(500).send('no fue posible actualizar al cliente');
    }
}*/


//actualizar cliente |forma2
exports.actualizarCliente = async(req, res)=>{
    try {
        const cliente = await Cliente.findOneAndUpdate({_id:req.params.id}, req.body);

        if(!cliente) res.status(404).send('Cliente no encontrado');
        else res.json(cliente);
    } catch (error) {
        console.log(error);
        res.status(500).send('Fallo al actualizar el cliente')
    }
    
} 