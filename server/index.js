import express from 'express'
import http from 'http'
import {Server as SocketServer} from 'socket.io'

const app = express()
const server = http.createServer(app)
const io = new SocketServer(server, {
    cors: {
        origin: "http://localhost:5173"
    }
})

io.on('connection', socket => {
    console.log('client connnected !!!')
})

server.listen(3000)
console.log('corriendo en puerto', 3000)


