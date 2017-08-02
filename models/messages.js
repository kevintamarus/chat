const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let messagesSchema = new Schema({
  userName: String,
  text: String
});

const Messages = mongoose.model('messages', messagesSchema);

module.exports = Messages;