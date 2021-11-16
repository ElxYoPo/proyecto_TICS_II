const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const autoIncrementModelID = require('../helpers/counterModel');

const productoSchema = new Schema({
    id: { 
        type: Number,
        unique: true,
        min: 1
    },
    codigo: String,
    nombre: String,
    marca: String,
    precio: Number,
    tCaducidad: String
}, {
    timestamps: true
});

productoSchema.pre('save', function (next) {
    if (!this.isNew) {
        next();
        return;
    }
  
    autoIncrementModelID('activities', this, next);
});
  

const Producto = mongoose.model("Producto", productoSchema);

module.exports = Producto;