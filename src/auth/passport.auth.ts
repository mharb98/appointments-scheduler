import passport from 'passport';
import PASSPORT_CONFIG from "@/config/passport.config";
import { Strategy } from 'passport-jwt';

const initAuth = () => {
    passport.use(
        new Strategy(PASSPORT_CONFIG, async (payload, done: any) => {
            try{
                const user = {
                    id: payload.id,
                    name: "Marwan",
                    email: "marwan@gmail.com",
                    roles: ["admin", "financing"]
                }

                if(user) {
                    return done(null, user);
                }
            } catch(error) {
                return done(error);
            }
        })
    )
}

export default initAuth;