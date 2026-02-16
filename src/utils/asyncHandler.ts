import { NextFunction, Request, Response } from "express";

export const asyncHandler = (fn: Function) => 
    (req: Request, resp: Response, next: NextFunction) => 
        Promise.resolve(fn(req,resp,next)).catch(next);