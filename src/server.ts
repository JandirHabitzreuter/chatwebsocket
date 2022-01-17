import {server} from "./http";
import "./Websocket/ChatService";

server.listen(3000,()=>{console.log("Server is running!")})