import { EnvironmentVariables } from "@/environment-vars";
import { ExtractJwt, StrategyOptionsWithoutRequest } from "passport-jwt";

const PASSPORT_CONFIG: StrategyOptionsWithoutRequest = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: EnvironmentVariables.JWT_SECRET,
}

export default PASSPORT_CONFIG;