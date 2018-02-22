const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const {generateMessage,generateLocationMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

io.on('connection',(socket)=>{
  console.log('New user connected');

  socket.emit('newMessage',generateMessage('Admin','Welcome to the chat app'));
  socket.broadcast.emit('newMessage', generateMessage('Admin','New user joined'));

  socket.on('createMessage',(message,callback)=>{
    io.emit('newMessage',{
      from:message.from,
      text:message.text,
      createAt:new Date().getTime()
    });
    callback();
  });
  socket.on('createLocationMessage', (coords)=>{
    io.emit('newLocationMessage',generateLocationMessage('Admin',coords.latitude,coords.longitude))
  })

  socket.on('disconnect',()=>{
    console.log('User disconnected');
  })
});

server.listen(port,()=>{
  console.log(`Server is running on ${port}.`);
})
