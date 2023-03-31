const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    categoryName: {
        type: String,
        required: true,
        unique: true,
    },
    userID: {
        type: String,
        required: true,
    }
}, 
{});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;