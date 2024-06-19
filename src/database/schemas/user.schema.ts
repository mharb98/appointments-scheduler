import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {type: String, minLength: 3, maxLength: 50, required: [true, "Name is required"]},
    email: {type: String, required: [true, "Email is required"], unique: true},
    phoneNumber: {type: String, required: false, unique: true},
    dateOfBirth: {type: Date, required: [true, "Date of birth is required"]},
    password: {type: String, required: [true, "Password is required"]},
    status: {type: Boolean, default: false}
}, {
    timestamps: true
})

export const User = mongoose.model("User", UserSchema);