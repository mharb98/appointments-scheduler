import { ROLES_KEY } from "./constants/api-decorators.constants";

export function RolesGuard(roles: string[]) {
    return (target: any, propertyKey?: string | symbol,descriptor?: TypedPropertyDescriptor<any>) => {
        if(propertyKey && descriptor) {
            Reflect.defineMetadata(ROLES_KEY, roles, target, propertyKey);
        } else {
            Reflect.defineMetadata(ROLES_KEY, roles, target.prototype);
        }
    }
}