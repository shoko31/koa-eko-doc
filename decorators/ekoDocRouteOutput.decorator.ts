import { EkoRouteDecorator, Route } from "koa-eko";
import { IMiddleware } from "koa-router";
import { RouteBody, RouteBodyType, RouteBodyParam } from "../models/RouteBody";
import { isNullOrUndefined } from "util";

export function EkoDocRouteOutput(type: RouteBodyType, output?: Object, name?: string): EkoRouteDecorator {

    function GenerateRouteBodyParams(target: Object): RouteBodyParam[] {
        let bodyParams: RouteBodyParam[] = [];

        let attributes: any = Reflect.getMetadata("sequelize:attributes", target);
        Object.keys(attributes).forEach(attr => {
            bodyParams.push(new RouteBodyParam({
                name: attr,
                type: attributes[attr].type.key.toLowerCase(),
                allowNull: attributes[attr].allowNull ? true : false
            }));
        });

        return bodyParams;
    }

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

    function PushNewRouteOutputDoc(target: Object, routeResult: RouteBody): void {
        let routeResultDocs: RouteBody[] = Reflect.getMetadata("ekodoc:routes-outputs", target.constructor) || [];
        routeResultDocs.push(routeResult);
        Reflect.defineMetadata("ekodoc:routes-outputs", routeResultDocs, target.constructor);
    }

    return function(target: Object, propertyKey: PropertyKey, descriptor: TypedPropertyDescriptor<IMiddleware>): void {
        let routes: Route[] = Reflect.getMetadata("eko:routes", target.constructor);

        if (!isNullOrUndefined(routes)) {
            let correspondingRoute: Route = findCorrespondingRoute(routes, propertyKey);

            if (!isNullOrUndefined(correspondingRoute)) {
                let routeOutput: RouteBody = new RouteBody({
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
