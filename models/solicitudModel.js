const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const autoIncrementModelID = require('../helpers/counterModel');

const solicitudSchema = new Schema({
    id: { 
        type: Number,
        unique: true,
        min: 1
    },
    fecha: Date,
    idBodega: Number,
    codProducto: String,
    cantidad: Number,
    activa: { type: Boolean, default: true }
}, {
    timestamps: true
});

solicitudSchema.pre('save', function (next) {
    if (!this.isNew) {
        next();
        return;
    }
  
    autoIncrementModelID('activities', this, next);
});
  

const Solicitud = mongoose.model("Solicitud", solicitudSchema);

module.exports = Solicitud;