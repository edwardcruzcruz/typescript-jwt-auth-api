import { Request, Response } from "express";
import { UserService } from "../services/user.service";

const userService = new UserService();

export const getUserByEmail = async (req: Request<{ email: string }>, resp: Response) => {
    const user = await userService.getUserByEmail(req.params.email);
    resp.status(200).json(user);
}