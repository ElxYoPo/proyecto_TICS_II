const router = require("express").Router();
const Producto = require("../models/prodModel");

router.route('/').get((req, res) => {
    Producto.find()
        .then(Productos => res.json(Productos))
        .catch(err => res.status(400).json('Ha ocurrido el sgte error mera-kun: ' + err))
});

router.route('/add').post((req, res) => {
    const codigo = req.body.codigo;
    const nombre = req.body.nombre;
    const marca = req.body.marca;
    const precio = Number(req.body.precio);
    const tCaducidad = req.body.tCaducidad;

    const newProducto = new Producto({codigo, nombre, marca, precio, tCaducidad});

    newProducto.save()
        .then(() => res.json('Se añadió merita!!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Producto.findById(req.params.id)
        .then(prod => res.json(prod))
        .catch(err => res.status(400).json('Error-kun: ' + err))
});

// router.route('/update/:id').post((req, res) => {
    // Producto.findById(req.params.id)
    //     .then(prod => {
    //         parametros

    //         prod.save()
    //             .then(() => res.json('Se actualizó el producto'))
    //             .catch(err => res.status(400).json('Error: ' + err));
    //     })
    //     .catch(err => res.status(400).json('Error: ' + err));
// });

router.route('/:id').delete((req, res) => {
    Producto.findByIdAndDelete(req.params.id)
        .then(() => res.json('Se eliminó el producto mera'))
        .catch(err => res.status(400).json('Error-kun: ' + err))
});

module.exports = router;