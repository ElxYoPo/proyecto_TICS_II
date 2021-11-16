const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const autoIncrementModelID = require('../helpers/counterModel');

const lsCamionSchema = new Schema({
    id: { 
        type: Number,
        unique: true,
        min: 1
    },
    idCamion: Number,
    idBodega: Number,
    fechaLS: Date,
    idSL: Number,
    cantidad: Number,
    codProducto: String
}, {
    timestamps: true
});

lsCamionSchema.pre('save', function (next) {
    if (!this.isNew) {
        next();
        return;
    }
  
    autoIncrementModelID('activities', this, next);
});
  

const LlegadaCamion = mongoose.model("LlegadaCamion", lsCamionSchema);
const SalidaCamion = mongoose.model("SalidaCamion", lsCamionSchema);

module.exports = LlegadaCamion, SalidaCamion;