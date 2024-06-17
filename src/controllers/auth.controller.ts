import { controller } from "@/decorators/api-decorators/controller.decorator";
import { Get, Post } from "@/decorators/api-decorators/http-methods.decorator";
import { EnvironmentVariables } from "@/environment-vars";
import { NextFunction, Request, Response } from "express";
import * as jwt from 'jsonwebtoken';

@controller('auth')
class AuthController {

    @Post('/register')
    public async register(req: Request, res: Response) {}

    @Post('/login')
    public async login(req: Request, res: Response, next: NextFunction) {
        try{
            const accessToken = jwt.sign({
                    id: 1,
                    name: "Marwan",
                    email: "marwan@gmail.com",
                    roles: ["admin", "financing"]
                },
                EnvironmentVariables.JWT_SECRET,
                {expiresIn: "1h"}
            );

            return res.status(200).json({
                accessToken
            })
        } catch(error: any){
            next(error);
        }
    }

    @Get('/profie')
    public async getUserProfile(req: Request, res: Response) {
        
    }
}

export default AuthController;