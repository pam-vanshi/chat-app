const path = require('path')
const express = require('express')
const socketIO = require('socket.io')
const http = require('http')
const publicPath = path.join(__dirname, '/../public')
const port = process.env.PORT || 3000

console.log(publicPath);
var app = express();

var server = http.createServer(app);
var io = socketIO(server)
app.use(express.static(publicPath));

io.on('connection', function(socket) {
  console.log("New user connected");

  // socket.emit('newEmail', {
  //   'from': 'gyanchod@lodu.com',
  //   'text': 'sun..............tu ma chuda',
  //   'sentAt': 'abhi abhi to bheja hai bro'
  // })
  socket.emit('newMessage', {
    'text': 'sun..............tu ma chuda',
    'sentAt': 'abhi abhi to bheja hai bro'
  })

  socket.on('createEmail', function(newEmail){
    console.log('naya email aya bhai log',newEmail);
  })
  socket.on('createMessage', function(newMessage){
    console.log('naya message aya bhai log',newMessage);
  })


  socket.on('disconnect', function() {
    console.log('disconnected from server');
  })
})


// app.get('/', (req,res) => {
//   res.render('index.html')
// })

server.listen(port, console.log(`server is running on ${port}`))
