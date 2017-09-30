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

io.on('connection', (socket) => {
  console.log("New user connected");
  socket.on('disconnect', () => {
    console.log('disconnected from server');
  })
})


// app.get('/', (req,res) => {
//   res.render('index.html')
// })

server.listen(port, console.log(`server is running on ${port}`))
