import { Injectable } from "@/decorators/dependency-injection-decorators/injectable.decorator";

// @Injectable("AdminSchedulesService")
export class AdminSchedulesService {
    public createSchedule() {
        return "Maro is using dependency injection";
    }
}