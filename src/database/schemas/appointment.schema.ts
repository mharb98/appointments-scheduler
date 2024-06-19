import mongoose, { Schema } from "mongoose";

const AppointmentSchema = new mongoose.Schema({
    name: {type: String, minLength: 3, maxLength: 50, required: [true, "Name of the appointment is required"]},
    description: {type: String, minLength: 10, maxLength: 500, required: false},
    date: {type: Date, required: false},
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
}, {
    timestamps: true
})

export const Appointment = mongoose.model("Appointment", AppointmentSchema);
