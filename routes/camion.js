const router = require("express").Router();
const Camion = require("../models/camionModel");

router.route('/').get((req, res) => {
    Camion.find()
        .then(Camiones => res.json(Camiones))
        .catch(err => res.status(400).json('Ha ocurrido el sgte error mera-kun: ' + err))
});

router.route('/add').post((req, res) => {
    const idBodega = Number(req.body.idBodega);
    const patente = req.body.patente;
    const operador = req.body.operador;
    const telOperador = req.body.telOperador;
    const emailOperador = req.body.emailOperador;

    const newCamion = new Camion({idBodega, patente, operador, telOperador, emailOperador});

    newCamion.save()
        .then(() => res.json('Se añadió merita!!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;