import { container } from "tsyringe";
import {io} from "../http";
import { CreateUserService } from "../services/CreateUserService";
import { GetAllUsersService } from "../services/GetAllUserServices";

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

       Socket.broadcast.emit("new_users", user);

    });

    Socket.on("get_users", async(callback) =>{
        const getAllUser = container.resolve(GetAllUsersService);
        const users  = await getAllUser.execute();

        callback(users);
    });

});