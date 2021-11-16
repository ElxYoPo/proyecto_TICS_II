const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const autoIncrementModelID = require('../helpers/counterModel');

const userSchema = new Schema({
    id: { 
            type: Number,
            unique: true,
            min: 1
        },
    nombre: { type: String },
    username: { type: String },
    password: { type: String },
    email: { type: String },
    tipo: { type: String, default: "secre" },
    activo: { type: Boolean, default: true }
}, {
    timestamps: true
});

userSchema.pre('save', function (next) {
    if (!this.isNew) {
        next();
        return;
    }
  
    autoIncrementModelID('activities', this, next);
});
  

const User = mongoose.model("User", userSchema);

module.exports = User;