// import dependencies
import { Router } from "express";
import { login, logout, register, user } from "../controllers/auth.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";
const appRouter = Router();

// auth routes
appRouter.post('auth/register', register);
appRouter.post( 'auth/login', login );

// authenticated routes
appRouter.get( 'auth/user', authMiddleware, user );
appRouter.post( 'auth/logout', authMiddleware, logout );


export default appRouter;