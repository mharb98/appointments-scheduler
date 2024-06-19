import { BaseModel } from "./base.model";

export interface AppointmentModel extends BaseModel {
    name: string;
    description?: string  | null;
    date?: Date | null;
}