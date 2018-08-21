import "reflect-metadata";
import { isNullOrUndefined } from "util";
import { Route, EkoControllerDecorator } from "koa-eko";
import { Route as EkoDocRoute } from "../models/Route";
import { RouteGroup as EkoDocRouteGroup } from "../models/RouteGroup";
import { RouteResult as EkoDocRouteResult } from "../models/RouteResult";
import { RouteBody as EkoDocRouteBody } from "../models/RouteBody";
import { EkoApiDoc } from "../models/EkoApiDoc";
import { EkoApis } from "../globals";

export function EkoDocController(name?: string, description?: string): EkoControllerDecorator {

    function AppendRouteToApiDoc(version: string, routeGroup: EkoDocRouteGroup): void {
        let EkoApi: EkoApiDoc = undefined;
        let newApi: boolean = false;

        for (let i: number = 0; i < EkoApis.length; i++) {
            const api: EkoApiDoc = EkoApis[i];
            if (api.version === version) {
                EkoApi = api;
                break;
            }
        }

        if (isNullOrUndefined(EkoApi)) {
            newApi = true;
            EkoApi = new EkoApiDoc({ title: version, description: version, version: version });
        }

        if (isNullOrUndefined(EkoApi.groups)) {
            EkoApi.groups = [];
        }
        EkoApi.groups.push(routeGroup);
        EkoApi.groups = EkoApi.groups.sort((g, h) => g.title.localeCompare(h.title));

        if (newApi) {
            EkoApis.push(EkoApi);
        }
    }

    function GenerateRouteResults<T>(target: T, route: Route): EkoDocRouteResult[] {
        let routeResults: EkoDocRouteResult[] = Reflect.getMetadata("ekodoc:routes-results", target);

        let results: EkoDocRouteResult[] = [];

        if (isNullOrUndefined(routeResults)) {
            return undefined;
        }

        routeResults.forEach(routeResult => {
            if (!isNullOrUndefined(routeResult.LinkedPropertyKey) && routeResult.LinkedPropertyKey === route.LinkedPropertyKey) {
                results.push(routeResult);
            }
        });

        return results;
    }

    function GenerateRouteOutput<T>(target: T, route: Route): EkoDocRouteBody {
        let routeOutputs: EkoDocRouteBody[] = Reflect.getMetadata("ekodoc:routes-outputs", target);

        let result: EkoDocRouteBody = undefined;

        if (isNullOrUndefined(routeOutputs)) {
            return undefined;
        }

        routeOutputs.forEach(routeOutput => {
            if (!isNullOrUndefined(routeOutput.LinkedPropertyKey) && routeOutput.LinkedPropertyKey === route.LinkedPropertyKey) {
                result = routeOutput;
            }
        });

        return result;
    }

    function GenerateRoutes<T>(target: T, routes: Route[]): EkoDocRoute[] {
        let groupRoutes: EkoDocRoute[] = [];

        routes.forEach(route => {
           groupRoutes.push(new EkoDocRoute({
               name: route.Name,
               description: route.Description,
               path: route.Path,
               type: route.Type,
               results: GenerateRouteResults(target, route),
               output: GenerateRouteOutput(target, route)
           }));
        });

        return groupRoutes;
    }

    return function<T>(target: T): void {
        let version:string = Reflect.getMetadata("eko:version", target);
        version = isNullOrUndefined(version) || version === "" ? "1.0.0" : version;
        let controllerName: string = (<any>target).name.toLowerCase().replace("controller", "");
        controllerName = controllerName[0].toUpperCase() + controllerName.substr(1);
        name = (isNullOrUndefined(name) || name === "") ? controllerName : name;

        let foundRoutes: Route[] = Reflect.getMetadata("eko:routes", target);

        let routeGroup: EkoDocRouteGroup = new EkoDocRouteGroup({
            title: name,
            description: description,
            routes: GenerateRoutes(target, foundRoutes)
        });
        AppendRouteToApiDoc(version, routeGroup);
    };
}
