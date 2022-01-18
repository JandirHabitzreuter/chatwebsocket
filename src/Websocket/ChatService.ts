import { container } from "tsyringe";
import {io} from "../http";
import { CreateUserService } from "../services/CreateUserService";

io.on("connect", Socket =>{
  
    Socket.on("start", async(data) =>{
        const {email, avatar, name} = data;
        const createUserService = container.resolve(CreateUserService);

         const user = await createUserService.execute({
             email, 
             avatar, 
             name,
            socket_id : Socket.id
            });

            console.log(user);

    });

});