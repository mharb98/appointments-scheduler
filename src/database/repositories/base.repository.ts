import { Constructor } from "@/decorators/dependency-injection-decorators/types/constructor.type";

export function BaseRepository<Model extends Constructor>(model: Model) {
    return class MixinRepository {
        _model: Model;

        constructor() {
            console.log("Logging the model");
            console.log(model);
            this._model = model;
        }

        public getModel(): Model {
            console.log("Inside get model");
            console.log(this._model);
            return this._model;
        }
    }
}