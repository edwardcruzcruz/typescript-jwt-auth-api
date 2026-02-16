import users from "../data/datamock";

export class UserService {
    async getUserByEmail(email: string){
        const user = users.find(u => u.email = email);
        if(!user) throw new Error("User not found");

        return {user};
    }
}