import { ROLES_KEY } from "@/decorators/api-decorators/constants/api-decorators.constants";
import { NextFunction, Request, Response } from "express";

const rolesMiddleware = (req: Request, res: Response, next: NextFunction) => {
    console.log(req);
    // const classRoles = Reflect.getMetadata(ROLES_KEY, req.route.stack[req.route.stack.length - 1].handle.constructor) || [];
    // const methodRoles = Reflect.getMetadata(ROLES_KEY, req.route.stack[req.route.stack.length - 1].handle) || [];

    // const roles = methodRoles || classRoles;
    // const user: any = req.user;
    // const userRoles = user?.roles || [];

    // if(roles && roles.length > 0) {
    //     const hasRole = roles.some((role: string) => userRoles.includes(role));
        
    //     if(hasRole){
    //         return next();
    //     } else {
    //         return res.status(403).json({message: 'Forbidden Resource'})
    //     }
    // }

    return next();
}

export default rolesMiddleware;