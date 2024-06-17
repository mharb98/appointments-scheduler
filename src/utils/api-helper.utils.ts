import { CONTROLLER_METADATA, ROUTES_METADATA } from "@/decorators/api-decorators/constants/api-decorators.constants";
import RouteDefinition from "@/decorators/api-decorators/types/route-definition.type";
import { NextFunction, Router } from "express";

export class ApiHelperUtils {
    public static registerControllers(router: Router, controllers: any[]){
        controllers.forEach((controller => {
            const instance = new controller();
            const basePath = Reflect.getMetadata(CONTROLLER_METADATA, controller);

            const routes: RouteDefinition[] = Reflect.getMetadata(ROUTES_METADATA, controller) || [];

            routes.forEach((route) => {
                const fullPath = `/${basePath}${route.path}`;
                const handler = instance[route.methodName].bind(instance);

                switch(route.requestMethod) {
                    case 'get':
                        router.get(fullPath, handler);
                        break;
                    case 'post': 
                        router.post(fullPath, handler);
                        break;
                    case 'delete':
                        router.delete(fullPath, handler);
                        break;
                    case 'put':
                        router.put(fullPath, handler);
                        break;
                    case 'patch':
                        router.patch(fullPath, handler);
                        break;
                    default:
                        throw new Error('Unhandled HTTP method');    
                }
            })
        }))
    }
}