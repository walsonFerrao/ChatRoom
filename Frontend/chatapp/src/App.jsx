import "./App.css";
import io from "socket.io-client";
import { useEffect, useState } from "react";
import { Register } from "./Components/Register/Register";
import Chatroom from "./Components/Chatroom/Chatroom";
import {Routes,Route} from 'react-router-dom'

const socket = io.connect("http://localhost:3001");

function App() {
  //Room State
  // const [room, setRoom] = useState("");

  // // Messages States
  // const [message, setMessage] = useState("");
  // const [messageReceived, setMessageReceived] = useState("");

  
  // const joinRoom = () => {
  //   if (room !== "") {
  //     socket.emit("join_room", room);
  //   }
  // };

  // const sendMessage = () => {
  //   socket.emit("send_message", { message, room });
  // };

  // useEffect(() => {
  //   socket.on("receive_message", (data) => {
  //     setMessageReceived(data.message);
  //   });
  // }, [socket]);
  return (
    <>
    <Routes>

<Route path="/" element={<Register />} />
<Route path="/chat" element={<Chatroom />} />




    </Routes>
  
</>
  );
}

export default App;