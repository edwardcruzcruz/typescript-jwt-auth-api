import users from "../data/datamock";
import { AppError } from "../utils/AppError";

export class UserService {
    async getUserByEmail(email: string){
        const user = users.find(u => u.email = email);
        if(!user) throw new AppError("User not found",404);

        return {user};
    }
}