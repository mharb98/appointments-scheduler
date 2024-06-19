import { Constructor } from "@/decorators/dependency-injection-decorators/types/constructor.type";

export function BaseRepository<Model extends Constructor>(model: Model) {
    return class MixinRepository {
        _model: Model;

        constructor() {
            this._model = model;
        }

        public getModel(): Model {
            return this._model;
        }
    }
}