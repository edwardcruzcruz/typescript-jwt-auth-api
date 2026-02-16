import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";

const authService = new AuthService();

export const register = async (req: Request,res: Response) => {
    const user = await authService.register(req.body.email, req.body.password);
    res.status(201).json(user);
};

export const login = async (req: Request,resp: Response) => {
    const result = await authService.login(req.body.email,req.body.password);
    resp.json(result);
}