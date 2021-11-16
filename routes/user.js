const router = require("express").Router();
const User = require("../models/userModel");

router.route('/').get((req, res) => {
    User.find()
        .then(Usuarios => res.json(Usuarios))
        .catch(err => res.status(400).json('Ha ocurrido el sgte error mera-kun: ' + err))
});

router.route('/add').post((req, res) => {
    const nombre = req.body.nombre;
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const tipo = req.body.tipo === 'admin' ? req.body.tipo : 'secre';

    const newUser = new User({nombre, username, password, email, tipo});

    newUser.save()
        .then(() => res.json('Se añadió merita!!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;