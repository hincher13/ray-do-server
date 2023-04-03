const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        //Do I need to include default: '' here?
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function(v) {
                return /\S+@\S+\.\S+/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
        },
    },
    phoneNumber: {
        type: String,
        required: false,
        validate: {
            validator: function(v) {
                return /\d{3}-\d{3}-\d{4}/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        },
    },
    admin: {
        type: Boolean,
        default: false,
    },
    preference: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Preference',
    },
    notification: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Notification',
    },
});

module.exports = mongoose.model('User', userSchema);