import { container } from "./container";
import { Constructor } from "./types/constructor.type";

export function Injectable(key: string) {
    return function <T extends { new(...args: any[]): {} }>(constructor: T) {
      container.register(key, constructor);
    };
}