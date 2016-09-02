var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

UserSchema.statics.findUserByName = function(name, cb) {
    return this.find({username: name}).exec(cb);
};

module.exports = mongoose.model('User', UserSchema);