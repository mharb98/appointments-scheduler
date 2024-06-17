
function EnvVariable(key: string, fallbackValue?: any) {
    return function(target: any, propertyKey: string) {
        const value = process.env[key] || fallbackValue;

        if(!value) {
            throw new Error('Missing env variable');
        }

        Object.defineProperty(target, propertyKey, {
            get: () => value,
            enumerable: true,
            configurable: true
        })
    }
}

export default EnvVariable;