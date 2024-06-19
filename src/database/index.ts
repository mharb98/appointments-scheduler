import mongoose from "mongoose";

export const initDb = async () => {
    await mongoose.connect("mongodb://marwan:11071964@localhost:27017/appointments-scheduler?authSource=admin");
}

