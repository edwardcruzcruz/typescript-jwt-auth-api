import { Router } from "express";
import { getUserByEmail } from "../controllers/user.controller";

const userRoutes = Router();

userRoutes.get("/:email",getUserByEmail)

export default userRoutes;