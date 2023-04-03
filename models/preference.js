const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const preferenceSchema = new Schema({
    darkModeOn: {
        type: Boolean,
        default: false,
    },
    showClockOn: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model('Preference', preferenceSchema);