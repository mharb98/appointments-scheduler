import { container } from "./container";
import { Constructor } from "./types/constructor.type";

export function Autowired<T extends Constructor>(constructor: T) {
    return class extends constructor {
      constructor(...args: any[]) {
        super(...args);
        
        
        for (const propertyName in this) {
          const metadata = Reflect.getMetadata("custom:inject", this, propertyName);

          if (metadata) {
            (this as any)[propertyName] = new metadata.type();
          }
        }
      }
    };
}