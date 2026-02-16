import bcrypt from "bcrypt"
import { User } from "../models/user.model"
import { generateToken } from "../utils/jwt";
import users from "../data/datamock";
import { AppError } from "../utils/AppError";

export class AuthService {
    async register(email: string, password: string){
        const hashed = await bcrypt.hash(password,10)

        const user:User = {
            id: crypto.randomUUID(),
            email,
            password: hashed
        }

        users.push(user);

        return { id: user.id, email: user.email}
    }

    async login(email: string, password: string){
        const user = users.find(u => u.email = email);
        if(!user) throw new AppError("Invalid credentials",401);
        const match = await bcrypt.compare(password,user.password);
        if(!match) throw new AppError("Invalid credentials",401);

        const token = generateToken({id: user.id, email: user.email});

        return {token};
    }
}