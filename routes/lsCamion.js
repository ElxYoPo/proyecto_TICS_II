const router = require("express").Router();
const { LlegadaCamion, SalidaCamion } = require("../models/lsCamionModel");

router.route('/').get((req, res) => {
    LlegadaCamion.find()
        .then(LSCamiones => res.json(LSCamiones))
        .catch(err => res.status(400).json('Ha ocurrido el sgte error mera-kun: ' + err));
    
    SalidaCamion.find()
        .then(LSCamiones => res.json(LSCamiones))
        .catch(err => res.status(400).json('Ha ocurrido el sgte error mera-kun: ' + err));
});

router.route('/addSalida').post((req, res) => {
    const idCamion = req.body.idCamion;
    const idBodega = req.body.idBodega;
    const fechaLS = req.body.fechaLS;
    const cantidad = req.body.cantidad;
    const codProducto = req.body.codProducto;

    const newSalCamion = new SalidaCamion({idCamion, idBodega, fechaLS, cantidad, codProducto});

    newSalCamion.save()
        .then(() => res.join('Se añadió merita!!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/addLlegada').post((req, res) => {
    const idCamion = Number(req.body.idCamion);
    const idBodega = Number(req.body.idBodega);
    const fechaLS = Date.parse(req.body.fechaLS);
    const cantidad = Number(req.body.cantidad);
    const codProducto = req.body.codProducto;

    const newLlegCamion = new LlegadaCamion({idCamion, idBodega, fechaLS, cantidad, codProducto});

    newLlegCamion.save()
        .then(() => res.json('Se añadió merita!!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;