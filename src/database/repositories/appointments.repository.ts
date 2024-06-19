import { Injectable } from "@/decorators/dependency-injection-decorators/injectable.decorator";
import { Appointment } from "../schemas/appointment.schema";
import { BaseRepository } from "./base.repository";
import { AppointmentModel } from "@/models/appointment.model";

@Injectable("AppointmentsRepository")
export class AppointmentsRepository extends BaseRepository(Appointment) {
        public async createAppointment(createAppointmentInput: any): Promise<AppointmentModel> {
            return await this.getModel().create({
                name: createAppointmentInput.name,
                description: createAppointmentInput.description,
                date: new Date("2024-06-30")
            })
        }

        public async findOne(id: string): Promise<AppointmentModel | null> {
            return await this.getModel().findById(id)
        }
}