import { CONTROLLER_METADATA } from './constants/api-decorators.constants';

export function controller(basePath: string): ClassDecorator {
    return (target: any) => {
        Reflect.defineMetadata(CONTROLLER_METADATA, basePath, target);
    }
}