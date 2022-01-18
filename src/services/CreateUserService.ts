import { injectable } from "tsyringe";
import { User } from "../schemas/User"


interface CreateUserDTO{
    email : string;
    socket_id : string;
    avatar : string;
    name : string;
}

@injectable() // Injeção de dependencia 
class CreateUserService{

    async execute({email, socket_id, avatar, name} : CreateUserDTO){

        const userAlteradyExists = await User.findOne({
            email
        }).exec();

        if(userAlteradyExists){
            const user = await User.findOneAndUpdate({
                _id: userAlteradyExists._id
            },
            {
                $set:{socket_id, avatar, name}
            },
            {
                new : true
            }
            
            );

            return user;

        }

        const user = await User.create({
            email, 
            socket_id, 
            avatar, 
            name
        });

        return user
    };

}

export {CreateUserService}