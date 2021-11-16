const router = require("express").Router();
const Solicitud = require("../models/solicitudModel");

router.route('/').get((req, res) => {
    Solicitud.find()
        .then(Solicituds => res.json(Solicituds))
        .catch(err => res.status(400).json('Ha ocurrido el sgte error mera-kun: ' + err))
});

router.route('/add').post((req, res) => {
    const fecha = Date.parse(req.body.fecha);
    const idBodega = Number(req.body.idBodega);
    const codProducto = req.body.codProducto;
    const cantidad = Number(req.body.cantidad);

    const newSolicitud = new Solicitud({fecha, idBodega, codProducto, cantidad});

    newSolicitud.save()
        .then(() => res.json('Se añadió merita!!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;