import { container } from "./container";
import { Constructor } from "./types/constructor.type";

export function Autowired<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      constructor(...args: any[]) {
        super(...args);
        
        console.log(Object.getOwnPropertyNames(constructor.prototype));
        
        for (const propertyName in this) {
          const metadata = Reflect.getMetadata("custom:inject", this, propertyName);
          console.log(metadata);
          if (metadata) {
            (this as any)[propertyName] = new metadata.type();
          }
        }
      }
    };
}