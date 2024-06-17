import EnvVariable from "./decorators/env-decorators/env-variable.decorator";

export class EnvironmentVariables {
    @EnvVariable('PORT_NUMBER', 3000)
    public static PORT_NUMBER: number;
}