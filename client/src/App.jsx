import React from "react"
import io from 'socket.io-client' 

const socket = io("http://localhost:3000")

function App()
{
  return(
    <div>hola mundo</div>
  )
}

export default App


