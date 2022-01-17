const socket = io("http://localhost:3000");

socket.on("Chat_started", data =>{
    console.log(data);
});
