import  express  from "express";
import path from "path";
import {createServer} from "http";
import {Server} from "socket.io";
import mongoose  from "mongoose";
import "reflect-metadata";

const app = express();
const server = createServer(app);

app.use(express.static(path.join(__dirname, "..", "public")));

mongoose.connect("mongodb://localhost/rocketsocket");

const io = new Server(server); // Criar o servidor do Socket
io.on("connection",(Socket)=>{
    console.log("Server IO is running!");
});

export {server, io};