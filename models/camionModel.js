const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const autoIncrementModelID = require('../helpers/counterModel');

const camionSchema = new Schema({
    id: { 
        type: Number,
        unique: true,
        min: 1
    },
    idBodega: Number,
    patente: String,
    operador: String,
    telOperador: String,
    emailOperador: String,
    activo: { type: Boolean, default: true }
}, {
    timestamps: true
});

camionSchema.pre('save', function (next) {
    if (!this.isNew) {
        next();
        return;
    }
  
    autoIncrementModelID('activities', this, next);
});
  

const Camion = mongoose.model("Camion", camionSchema);

module.exports = Camion;