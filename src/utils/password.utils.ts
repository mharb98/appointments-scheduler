import bcrypt from 'bcrypt';

export class PasswordUtils {
    public static async encryptPassword(password: string): Promise<string> {
        try{
            return await bcrypt.hash(password, 1);
        } catch(error){
            throw new Error("Failed to encrypt password");
        }
    }
}