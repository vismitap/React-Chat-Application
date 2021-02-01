const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 5000;

const router = require('./Router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(router);

io.sockets.on('connection', (socket) => {
    console.log("We have a new connection");

    socket.on('join',({name,room})=>{
        console.log(name, room);
    })
    socket.on('disconnect', ()=>{
        console.log("User left the chat!");
    })
})

server.listen(PORT, ()=>{
    console.log(`Server has started running on Port ${PORT}`);
})
