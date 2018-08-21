"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("util");
function findCorrespondingRoute(routes, propertyKey) {
    let correspondingRoute = undefined;
    for (let i = 0; i < routes.length; i++) {
        const route = routes[i];
        if (!util_1.isNullOrUndefined(route.LinkedPropertyKey) && route.LinkedPropertyKey === propertyKey.toString()) {
            correspondingRoute = route;
            break;
        }
    }
    return correspondingRoute;
}
function PushNewRouteResultDoc(target, routeResult) {
    let routeResultDocs = Reflect.getMetadata("ekodoc:routes-results", target.constructor) || [];
    routeResultDocs.push(routeResult);
    Reflect.defineMetadata("ekodoc:routes-results", routeResultDocs, target.constructor);
}
function EkoDocRouteResponse(response) {
    return function (target, propertyKey, descriptor) {
        let routes = Reflect.getMetadata("eko:routes", target.constructor);
        if (!util_1.isNullOrUndefined(routes)) {
            let correspondingRoute = findCorrespondingRoute(routes, propertyKey);
            if (!util_1.isNullOrUndefined(correspondingRoute)) {
                response.LinkedPropertyKey = propertyKey.toString();
                PushNewRouteResultDoc(target, response);
            }
        }
    };
}
exports.EkoDocRouteResponse = EkoDocRouteResponse;
//# sourceMappingURL=ekoDocRouteResponse.decorator.js.map