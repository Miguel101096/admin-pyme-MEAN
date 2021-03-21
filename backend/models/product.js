const mongoose = require('mongoose');
const { Schema } = mongoose;
const productSchema = new Schema(
    {
        name: { type: String, require: true },
        description: { type: String, require: true },
        price: { type: Number, require: true },
        type: { type: String, require: true },
        size: { type: String, require: true },
        image: { type: String, require: true },
    }
);
module.exports = mongoose.model('Product', productSchema);