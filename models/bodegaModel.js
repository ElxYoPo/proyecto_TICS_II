const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const autoIncrementModelID = require('../helpers/counterModel');

const bodegaSchema = new Schema({
    id: { 
        type: Number,
        unique: true,
        min: 1
    },
    ubicacion: String
}, {
    timestamps: true
});

bodegaSchema.pre('save', function (next) {
    if (!this.isNew) {
        next();
        return;
    }
  
    autoIncrementModelID('activities', this, next);
});
  

const Bodega = mongoose.model("Bodega", bodegaSchema);

module.exports = Bodega;