import { Socket } from "socket.io";
import {io} from "../http";

io.on("connect", Socket =>{
    Socket.emit("Chat_started", {
        message:"your chat is started!"
    });
});