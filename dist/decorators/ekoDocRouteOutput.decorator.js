"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RouteBody_1 = require("../models/RouteBody");
const util_1 = require("util");
function EkoDocRouteOutput(type, output, name) {
    function GenerateRouteBodyParams(target) {
        let bodyParams = [];
        let attributes = Reflect.getMetadata("sequelize:attributes", target);
        Object.keys(attributes).forEach(attr => {
            bodyParams.push(new RouteBody_1.RouteBodyParam({
                name: attr,
                type: attributes[attr].type.key.toLowerCase(),
                allowNull: attributes[attr].allowNull ? true : false
            }));
        });
        return bodyParams;
    }
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
    function PushNewRouteOutputDoc(target, routeResult) {
        let routeResultDocs = Reflect.getMetadata("ekodoc:routes-outputs", target.constructor) || [];
        routeResultDocs.push(routeResult);
        Reflect.defineMetadata("ekodoc:routes-outputs", routeResultDocs, target.constructor);
    }
    return function (target, propertyKey, descriptor) {
        let routes = Reflect.getMetadata("eko:routes", target.constructor);
        if (!util_1.isNullOrUndefined(routes)) {
            let correspondingRoute = findCorrespondingRoute(routes, propertyKey);
            if (!util_1.isNullOrUndefined(correspondingRoute)) {
                let routeOutput = new RouteBody_1.RouteBody({
                    LinkedPropertyKey: propertyKey.toString(),
                    type: type,
                    name: name,
                    params: GenerateRouteBodyParams(output)
                });
                PushNewRouteOutputDoc(target, routeOutput);
            }
        }
    };
}
exports.EkoDocRouteOutput = EkoDocRouteOutput;
//# sourceMappingURL=ekoDocRouteOutput.decorator.js.map