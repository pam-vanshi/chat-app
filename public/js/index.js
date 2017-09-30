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
  var li = jQuery('<li></li>')
  li.text(`${message.from}: ${message.text}`)
  jQuery('#message').append(li);
})
// socket.emit('createEmail',{
//   to: 'chutiya@gandu.com',
//   text: "aur bhai kaise ho?"
//})
// socket.emit('createMessage',{
//   from: 'pramudit',
//   text: "aur bhai kaise ho?"
// }, function(post) {
//   console.log('got it',post);
// })

jQuery('#message-form').on('submit',function(e){
  e.preventDefault();
  socket.emit('createMessage', {
from: 'User',
text: jQuery('[name=message]').val()
}, function(post) {
  console.log("mil gaya message ");
})})
