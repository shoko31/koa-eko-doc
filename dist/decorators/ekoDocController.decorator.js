"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const util_1 = require("util");
const Route_1 = require("../models/Route");
const RouteGroup_1 = require("../models/RouteGroup");
const EkoApiDoc_1 = require("../models/EkoApiDoc");
const globals_1 = require("../globals");
function EkoDocController(name, description) {
    function AppendRouteToApiDoc(version, routeGroup) {
        let EkoApi = undefined;
        let newApi = false;
        for (let i = 0; i < globals_1.EkoApis.length; i++) {
            const api = globals_1.EkoApis[i];
            if (api.version === version) {
                EkoApi = api;
                break;
            }
        }
        if (util_1.isNullOrUndefined(EkoApi)) {
            newApi = true;
            EkoApi = new EkoApiDoc_1.EkoApiDoc({ title: version, description: version, version: version });
        }
        if (util_1.isNullOrUndefined(EkoApi.groups)) {
            EkoApi.groups = [];
        }
        EkoApi.groups.push(routeGroup);
        EkoApi.groups = EkoApi.groups.sort((g, h) => g.title.localeCompare(h.title));
        if (newApi) {
            globals_1.EkoApis.push(EkoApi);
        }
    }
    function GenerateRouteResults(target, route) {
        let routeResults = Reflect.getMetadata("ekodoc:routes-results", target);
        let results = [];
        if (util_1.isNullOrUndefined(routeResults)) {
            return undefined;
        }
        routeResults.forEach(routeResult => {
            if (!util_1.isNullOrUndefined(routeResult.LinkedPropertyKey) && routeResult.LinkedPropertyKey === route.LinkedPropertyKey) {
                results.push(routeResult);
            }
        });
        return results;
    }
    function GenerateRouteOutput(target, route) {
        let routeOutputs = Reflect.getMetadata("ekodoc:routes-outputs", target);
        let result = undefined;
        if (util_1.isNullOrUndefined(routeOutputs)) {
            return undefined;
        }
        routeOutputs.forEach(routeOutput => {
            if (!util_1.isNullOrUndefined(routeOutput.LinkedPropertyKey) && routeOutput.LinkedPropertyKey === route.LinkedPropertyKey) {
                result = routeOutput;
            }
        });
        return result;
    }
    function GenerateRoutes(target, routes) {
        let groupRoutes = [];
        routes.forEach(route => {
            groupRoutes.push(new Route_1.Route({
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
    return function (target) {
        let version = Reflect.getMetadata("eko:version", target);
        version = util_1.isNullOrUndefined(version) || version === "" ? "1.0.0" : version;
        let controllerName = target.name.toLowerCase().replace("controller", "");
        controllerName = controllerName[0].toUpperCase() + controllerName.substr(1);
        name = (util_1.isNullOrUndefined(name) || name === "") ? controllerName : name;
        let foundRoutes = Reflect.getMetadata("eko:routes", target);
        let routeGroup = new RouteGroup_1.RouteGroup({
            title: name,
            description: description,
            routes: GenerateRoutes(target, foundRoutes)
        });
        AppendRouteToApiDoc(version, routeGroup);
    };
}
exports.EkoDocController = EkoDocController;
//# sourceMappingURL=ekoDocController.decorator.js.map