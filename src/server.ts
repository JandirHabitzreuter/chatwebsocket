import  express  from "express";
import path from "path";
import {createServer} from "http";
import {Server, Socket} from "socket.io";

const app = express();
app.use(express.static(path.join(__dirname, "..", "public")));

const server = createServer(app);

const io = new Server(server); // Criar o servidor do Socket
io.on("connection",(Socket)=>{
    console.log("Server IO is running!");
});

server.listen(3000,()=>{console.log("Server is running!")})