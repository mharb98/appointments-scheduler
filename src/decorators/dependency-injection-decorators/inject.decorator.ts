export function Inject(key: string) {
    return function (target: any, propertyKey: string) {
      const type = Reflect.getMetadata("design:type", target, propertyKey);

      Reflect.defineMetadata("custom:inject", { key, type }, target, propertyKey);
      
      Object.defineProperty(target, propertyKey, {
        writable: true,
        enumerable: true,
        configurable: true
      })
    };
}