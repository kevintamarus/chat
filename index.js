const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 8000;

//middleware
const parser = bodyParser.json();
app.use(express.static(__dirname, + '/client/static'));
app.use(parser);

//connecting mongoose
const mongoose = require('mongoose');
const mongoDB = require('./config/keys')
mongoose.connect(mongoDB.mongoURI);
const Messages = require('./models/messages')


app.post('/', function(req, res) {
  let messages = new Messages ({
    userName: 'Kevin',
    text: 'Hello!'
  })
  messages.save(function(err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log('data stored');
    }
  })
  res.send('POST received');
})

app.get('/', function(req, res) {
  Messages.find({})
  .then(function(data) {
    res.send(JSON.stringify(data));
  })
  .catch(function(err) {
    res.send(err);
    console.log('error getting data');
  })
})


app.listen(PORT, function(err) {
  if(err) {
    console.log('cannot connect to server');
  } else {
  console.log('listening on PORT', PORT);
  }
})