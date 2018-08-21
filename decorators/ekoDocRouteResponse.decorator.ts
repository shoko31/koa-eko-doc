import { EkoRouteDecorator, Route } from "koa-eko";
import { IMiddleware } from "koa-router";
import { isNullOrUndefined } from "util";
import { RouteResult } from "../models/RouteResult";

function findCorrespondingRoute(routes: Route[], propertyKey: PropertyKey): Route {
    let correspondingRoute: Route = undefined;
    for (let i: number = 0; i < routes.length; i++) {
        const route: Route = routes[i];
        if (!isNullOrUndefined(route.LinkedPropertyKey) && route.LinkedPropertyKey === propertyKey.toString()) {
            correspondingRoute = route;
            break;
        }
    }
    return correspondingRoute;
}

function PushNewRouteResultDoc(target: Object, routeResult: RouteResult): void {
    let routeResultDocs: RouteResult[] = Reflect.getMetadata("ekodoc:routes-results", target.constructor) || [];
    routeResultDocs.push(routeResult);
    Reflect.defineMetadata("ekodoc:routes-results", routeResultDocs, target.constructor);
}

export function EkoDocRouteResponse(response: RouteResult): EkoRouteDecorator {
    return function(target: Object, propertyKey: PropertyKey, descriptor: TypedPropertyDescriptor<IMiddleware>): void {
        let routes: Route[] = Reflect.getMetadata("eko:routes", target.constructor);

        if (!isNullOrUndefined(routes)) {
            let correspondingRoute: Route = findCorrespondingRoute(routes, propertyKey);

            if (!isNullOrUndefined(correspondingRoute)) {
                response.LinkedPropertyKey = propertyKey.toString();
                PushNewRouteResultDoc(target, response);
            }
        }
    };
}
