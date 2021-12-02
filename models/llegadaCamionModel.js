const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const autoIncrementModelID = require('../helpers/counterModel');

const llegadaCamionSchema = new Schema({
    id: { 
        type: Number,
        unique: true,
        min: 1
    },
    idCamion: Number,
    idBodega: Number,
    fechaLlegada: Date,
    idSalida: Number,
    cantidad: Number,
    codProducto: String
}, {
    timestamps: true
});

llegadaCamionSchema.pre('save', function (next) {
    if (!this.isNew) {
        next();
        return;
    }
  
    autoIncrementModelID('activities', this, next);
});
  

const LlegadaCamion = mongoose.model("LlegadaCamion", llegadaCamionSchema);

module.exports = LlegadaCamion;