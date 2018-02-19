const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const publicPath = path.join(__dirname, '../public');
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

io.on('connection',(socket)=>{
  console.log('New user connected');

  socket.emit('newEmail',{
    from:'mike@example.com',
    text:'Hey. What is going on.',
    createAt: 123
  });

  socket.on('createMessage',(message)=>{
    console.log('createMessage',message);
    io.emit('newMessage',{
      from:message.from,
      text:message.text,
      createAt:new Date().getTime()
    });
  })

  socket.on('disconnect',()=>{
    console.log('User disconnected');
  })
});

server.listen(port,()=>{
  console.log(`Server is running on ${port}.`);
})
