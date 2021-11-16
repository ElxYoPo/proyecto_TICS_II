const router = require("express").Router();
const Bodega = require("../models/bodegaModel");

router.route('/').get((req, res) => {
    Bodega.find()
        .then(Bodegas => res.json(Bodegas))
        .catch(err => res.status(400).json('Ha ocurrido el sgte error mera-kun: ' + err))
});

router.route('/add').post((req, res) => {
    const ubicacion = req.body.ubicacion;

    const newBodega = new Bodega({ubicacion});

    newBodega.save()
        .then(() => res.json('Se añadió merita!!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;