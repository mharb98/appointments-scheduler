import { AdminSchedulesService } from "@/controllers/admin/admin.schedules/admin.schedules.service";
import { Constructor } from "./types/constructor.type";



class Container {
    private services: Map<string, any> = new Map();

    public register<T>(key: string, service: Constructor): void {
        this.services.set(key, service);
    }

    public resolve<T>(key: string): T {
        const Service = this.services.get(key);

        if(Service) {
            throw new Error(`Service with key ${key} not found`);
        }

        return Service;
    }
}

const container = new Container();

container.register("AdminSchedulesService", AdminSchedulesService);

export {container};