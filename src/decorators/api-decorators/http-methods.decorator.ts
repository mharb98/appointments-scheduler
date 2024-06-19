import { ROUTES_METADATA } from "./constants/api-decorators.constants";
import HttpMethod from "./types/http-method.enum";

function createRouteDecorator(method: HttpMethod) {
    return (path: string): MethodDecorator => {
        return (target: any , propertyKey: string | symbol) => {
            const routes = Reflect.getMetadata(ROUTES_METADATA, target.constructor) || [];
            routes.push({
                requestMethod: method,
                path,
                methodName: propertyKey,
            })

            Reflect.defineMetadata(ROUTES_METADATA, routes, target.constructor);
        }
    }
}

export const Get = createRouteDecorator(HttpMethod.GET);
export const Post = createRouteDecorator(HttpMethod.POST);
export const Delete = createRouteDecorator(HttpMethod.DELETE);
export const Put = createRouteDecorator(HttpMethod.PUT);
export const Patch = createRouteDecorator(HttpMethod.PATCH);