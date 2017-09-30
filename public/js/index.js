var socket = io()

socket.on('connect', function() {
  console.log('server is connected');
})

socket.on('disconnect', function() {
  console.log('disconnected from server');
})

socket.on('newEmail', function(email){
  console.log('naya email aya hai bhopadi.....kholo',email);

})

socket.on('newMessage', function(message){
  console.log('new message',message);
})
// socket.emit('createEmail',{
//   to: 'chutiya@gandu.com',
//   text: "aur bhai kaise ho?"
// })
// socket.emit('createMessage',{
//   from: 'pramudit',
//   text: "aur bhai kaise ho?"
// })
