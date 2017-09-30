const path = require('path')
const express = require('express')
const socketIO = require('socket.io')
const http = require('http')
const publicPath = path.join(__dirname, '/../public')
const port = process.env.PORT || 3000
const {generateMessage} = require('./utils/message.js')
console.log(publicPath);
var app = express();

var server = http.createServer(app);
var io = socketIO(server)
app.use(express.static(publicPath));

io.on('connection', function(socket) {
  console.log("New user connected");
   socket.emit('newMessage', generateMessage('admin','welcome to the chat app'))
   socket.broadcast.emit('newMessage', generateMessage('admin','new user joined'))
  // socket.emit('newEmail', {
  //   'from': 'gyanchod@lodu.com',
  //   'text': 'sun..............tu ma chuda',
  //   'sentAt': 'abhi abhi to bheja hai bro'
  //})
    socket.on('createMessage', function(newMessage,callback){
      console.log("new message",newMessage);
     io.emit('newMessage',generateMessage(newMessage.from,newMessage.text));
     callback("Message sent successfully");
  })


  socket.on('disconnect', function() {
    console.log('disconnected from server');
  })
})


// app.get('/', (req,res) => {
//   res.render('index.html')
// })

server.listen(port, console.log(`server is running on ${port}`))
