// server.js

const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Handle socket connections
io.on('connection', socket => {
    console.log('A user connected');

    // Listen for start call signal
    socket.on('start-call', () => {
        // Broadcast start call signal to all connected clients except the sender
        socket.broadcast.emit('start-call');
    });

    // Listen for end call signal
    socket.on('end-call', () => {
        // Broadcast end call signal to all connected clients except the sender
        socket.broadcast.emit('end-call');
    });

    // Listen for offer signal
    socket.on('offer', offer => {
        // Broadcast offer signal to all connected clients except the sender
        socket.broadcast.emit('offer', offer);
    });

    // Listen for answer signal
    socket.on('answer', answer => {
        // Broadcast answer signal to all connected clients except the sender
        socket.broadcast.emit('answer', answer);
    });

    // Listen for ICE candidate signal
    socket.on('ice-candidate', candidate => {
        // Broadcast ICE candidate signal to all connected clients except the sender
        socket.broadcast.emit('ice-candidate', candidate);
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
