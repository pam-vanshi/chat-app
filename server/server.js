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
   socket.emit('newMessage', {
     from: 'admin',
     text: 'Welcome ot the chat app'
   })
   socket.broadcast.emit('newMessage', {
     from: 'admin',
     text: 'New user joined'
   })
  // socket.emit('newEmail', {
  //   'from': 'gyanchod@lodu.com',
  //   'text': 'sun..............tu ma chuda',
  //   'sentAt': 'abhi abhi to bheja hai bro'
  // })
    socket.on('createMessage', function(newMessage){
     io.emit('newMessage',{
       from: newMessage.from,
       text: newMessage.text,
       createdAt: new Date().getTime()

     })
  })


  socket.on('disconnect', function() {
    console.log('disconnected from server');
  })
})


// app.get('/', (req,res) => {
//   res.render('index.html')
// })

server.listen(port, console.log(`server is running on ${port}`))
