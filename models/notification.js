const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notificationSchema = new Schema({
    //Do I need too add a user ID here?
    notificationsOn: {
        type: Boolean,
        default: false,
    },
    textNotificationsOn: {
        type: Boolean,
        default: false,
    },
    emailNotificationsOn: {
        type: Boolean,
        default: false,
    },
    notificationTime: {
        type: String,
        required: false,
        //Does this need to be required?
    },
});

module.exports = mongoose.model('Notification', notificationSchema);