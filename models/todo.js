const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    title: {
        type: String,
        required: true,
    },
    details: {
        type: String,
        required: false,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    },
    priority: {
        type: String,
        required: false,
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Todo', todoSchema);