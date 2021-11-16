const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const {MongoClient} = require('mongodb');

require('dotenv').config();

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI
mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Se estableció la conexión a MongoDB merita!!");
})

app.use("/user", require("./routes/user"));
app.use("/bodega", require("./routes/bodega"));
app.use("/camion", require("./routes/camion"));
app.use("/lsCamion", require("./routes/lsCamion"));
app.use("/prodPorFecha", require("./routes/prodPorFecha"));
app.use("/producto", require("./routes/producto"));
app.use("/solicitud", require("./routes/solicitud"));

app.listen(3001, function() {
    console.log("merita chupelo en el puerto 3001");
})