import HttpMethod from "./http-method.enum";

type RouteDefinition = {
    path: string;
    requestMethod: HttpMethod;
    methodName: string;
}

export default RouteDefinition;