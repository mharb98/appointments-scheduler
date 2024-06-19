import { UsersRepository } from "@/database/repositories/users.repository";
import { controller } from "@/decorators/api-decorators/controller.decorator";
import { Get, Post } from "@/decorators/api-decorators/http-methods.decorator";
import { Inject } from "@/decorators/dependency-injection-decorators/inject.decorator";
import { EnvironmentVariables } from "@/environment-vars";
import { NextFunction, Request, Response } from "express";
import * as jwt from 'jsonwebtoken';
import { Autowired } from "@/decorators/dependency-injection-decorators/auto-wired.decorator";
import { PasswordUtils } from "@/utils/password.utils";

@Autowired
@controller('auth')
class AuthController {
    @Inject("UsersRepository")
    private usersRepository: UsersRepository;


    @Post('/register')
    public async register(req: Request, res: Response) {
        const {name,email, phoneNumber, password, dateOfBirth} = req.body;

        const encryptedPassword = await PasswordUtils.encryptPassword(password);

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
        const {email, password} = req.body;

        try{
            const user = await this.usersRepository.findByEmail(email);

            if(!user){
                throw new Error("User doesn't exist");
            }

            const encryptedPassword = await PasswordUtils.encryptPassword(password);

            if(user.password !== encryptedPassword) {
                throw new Error("Invalid email/password");
            }

            const accessToken = jwt.sign({
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    dateOfBirth: user.dateOfBirth,
                    phoneNumber: user.phoneNumber
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