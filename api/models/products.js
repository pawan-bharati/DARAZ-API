const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    pid: Number,
    name: String,
    price: Number
});


module.exports = mongoose.model('Daraz_Product', productSchema);