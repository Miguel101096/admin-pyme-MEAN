const mongoose = require('mongoose');
const { Schema } = mongoose;
const bookSchema = new Schema(
    {
        title: { type: String, require: true },
        description: { type: String, require: true },
        isbn: { type: String, require: true },
    }
);
module.exports = mongoose.model('Book', bookSchema);