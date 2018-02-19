var socket = io();

socket.on('connect',function (){
  console.log('Connected to the server');

  socket.emit('createEmail',{
    to:'jen@example.com',
    text:'Hey. This is Andrew.'
  })
})

socket.on('disconnect',function (){
  console.log('Disconnect from server');
});

socket.on('newEmail',function (email){
  console.log('New email',email);
})

socket.on('newMessage',function(message){
  console.log('New message',message);
})

socket.emit('createMessage',{
  from: 'Jeff',
  text: 'Good night'
})
