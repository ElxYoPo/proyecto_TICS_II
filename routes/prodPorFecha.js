const router = require("express").Router();
const ProdPorFecha = require("../models/prodPorFechaModel");

router.route('/').get((req, res) => {
    ProdPorFecha.find()
        .then(ProdPorFechas => res.json(ProdPorFechas))
        .catch(err => res.status(400).json('Ha ocurrido el sgte error mera-kun: ' + err))
});

router.route('/add').post((req, res) => {
    const codProducto = req.body.codProducto;
    const idBodega = Number(req.body.idBodega);
    const stockProducto = Number(req.body.stockProducto);
    const fechaLlegada = Date.parse(req.body.fechaLlegada);
    const fechaCaducidad = Date.parse(req.body.fechaCaducidad);

    const newProdPorFecha = new ProdPorFecha({codProducto, idBodega, stockProducto, fechaLlegada, fechaCaducidad});

    newProdPorFecha.save()
        .then(() => res.json('Se añadió merita!!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;