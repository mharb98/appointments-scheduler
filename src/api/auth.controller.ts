import { UsersRepository } from "@/database/repositories/users.repository";
import { controller } from "@/decorators/api-decorators/controller.decorator";
import { Get, Post } from "@/decorators/api-decorators/http-methods.decorator";
import { Inject } from "@/decorators/dependency-injection-decorators/inject.decorator";
import { EnvironmentVariables } from "@/environment-vars";
import { NextFunction, Request, Response } from "express";
import * as jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { Autowired } from "@/decorators/dependency-injection-decorators/auto-wired.decorator";

@Autowired
@controller('auth')
class AuthController {
    @Inject("UsersRepository")
    private usersRepository: UsersRepository;


    @Post('/register')
    public async register(req: Request, res: Response) {
        const {name,email, phoneNumber, password, dateOfBirth} = req.body;
        console.log("we are here");
        const encryptedPassword = await bcrypt.hash(password, 1);
        console.log(encryptedPassword);

        const user = await this.usersRepository.createUser({
            name,
            email,
            phoneNumber,
            dateOfBirth,
            password: encryptedPassword
        });

        return res.status(201).json({user})
    }

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