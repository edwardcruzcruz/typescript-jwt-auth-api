import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt";

export const authMiddleware = (req: Request, resp: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if(!authHeader) return resp.sendStatus(401);

    const token = authHeader.split(" ")[1];

    try {
        verifyToken(token);
        next();
    } catch {
        return resp.sendStatus(403)
    }
}