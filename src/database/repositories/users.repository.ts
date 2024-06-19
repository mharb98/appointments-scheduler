import { Injectable } from "@/decorators/dependency-injection-decorators/injectable.decorator";
import { User } from "../schemas/user.schema";
import { BaseRepository } from "./base.repository";

@Injectable("UsersRepository")
export class UsersRepository extends BaseRepository(User) {
    public async createUser(createUserInput: any): Promise<any> {
        return await this.getModel().create(createUserInput);
    }

    public async updateUser(id: string, updateUserInput: any): Promise<void> {
        await this.getModel().updateOne({_id: id}, {...updateUserInput});
    }

    public async findById(id: string): Promise<any> {
        return await this.getModel().findById({_id: id});
    }

    public async findByEmail(email: string): Promise<any> {
        return await this.getModel().findOne({email});
    }
}