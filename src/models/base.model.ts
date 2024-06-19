import { ObjectId } from "mongoose";

export interface BaseModel {
    _id: any;
    createdAt: Date;
    updatedAt: Date;
}