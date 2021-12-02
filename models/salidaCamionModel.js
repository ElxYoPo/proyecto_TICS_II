const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const autoIncrementModelID = require('../helpers/counterModel');

const salidaCamionSchema = new Schema({
    id: { 
        type: Number,
        unique: true,
        min: 1
    },
    idCamion: Number,
    idBodega: Number,
    fechaSalida: Date,
    idLlegada: Number,
    cantidad: Number,
    codProducto: String
}, {
    timestamps: true
});

salidaCamionSchema.pre('save', function (next) {
    if (!this.isNew) {
        next();
        return;
    }
  
    autoIncrementModelID('activities', this, next);
});
  

const SalidaCamion = mongoose.model("SalidaCamion", salidaCamionSchema);

module.exports = SalidaCamion;