import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const SECRET = process.env.JWT_SECRET || "CHANGEENV";

export const generateToken = (payload: object): string =>{
    return jwt.sign(payload, SECRET, { expiresIn: "1h"})   
}

export const verifyToken = (token: string) => {
    return jwt.verify(token, SECRET)
}