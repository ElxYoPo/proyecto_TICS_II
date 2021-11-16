const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const autoIncrementModelID = require('../helpers/counterModel');

const prodPorFechaSchema = new Schema({
    id: { 
        type: Number,
        unique: true,
        min: 1
    },
    codProducto: String,
    idBodega: Number,
    stockProducto: Number,
    fechaLlegada: Date,
    fechaCaducidad: Date
}, {
    timestamps: true
});

prodPorFechaSchema.pre('save', function (next) {
    if (!this.isNew) {
        next();
        return;
    }
  
    autoIncrementModelID('activities', this, next);
});
  

const ProdPorFecha = mongoose.model("ProdPorFecha", prodPorFechaSchema);

module.exports = ProdPorFecha;