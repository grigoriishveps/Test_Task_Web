const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GiraffeSchema = new Schema({
    id: String,
    name: String,
    gender: String,
    weight: Number,
    height: Number,
    color: String,
    diet: String,
    character: String,
    photoPath: String,
    numAviary: Number
});

const Giraffe = mongoose.model('giraffe', GiraffeSchema);

module.exports = Giraffe;