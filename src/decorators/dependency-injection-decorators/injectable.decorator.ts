import { container } from "./container";
import { Constructor } from "./types/constructor.type";

export function Injectable(key: string) {
    return function <T extends Constructor>(constructor: T) {
      container.register(key, constructor);
    };
}