"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const output_route_component_view_1 = require("./route-components/output.route-component.view");
const body_route_component_view_1 = require("./route-components/body.route-component.view");
const result_route_component_view_1 = require("./route-components/result.route-component.view");
function RenderRoute(route) {
    let routeDisplay = "";
    routeDisplay += "<div id=\"" + route.id + "\" class=\"card border-secondary mb-4\">";
    // tslint:disable-next-line:max-line-length
    routeDisplay += "<div style=\"cursor: pointer;\" class=\"card-header\" data-toggle=\"collapse\" data-target=\"#r" + route.id + "\"><h5>" + route.name + "</h5></div>";
    routeDisplay += "<div id=\"r" + route.id + "\" class=\"card-body collapse show\">";
    routeDisplay += "<h4 class=\"card-title\">";
    routeDisplay += "<span class=\"badge badge-primary\">" + route.type.toString() + "</span> ";
    routeDisplay += route.path;
    routeDisplay += "</h4>";
    routeDisplay += "<p class=\"card-text\">" + route.description + "</p>";
    if (route.body !== null && route.body !== undefined) {
        routeDisplay += body_route_component_view_1.default(route.body);
    }
    if (route.output !== null && route.output !== undefined) {
        routeDisplay += output_route_component_view_1.default(route.output);
    }
    if (route.results !== null && route.results !== undefined && route.results.length > 0) {
        routeDisplay += result_route_component_view_1.default(route.results, route.id);
    }
    routeDisplay += "</div>";
    routeDisplay += "</div>";
    return routeDisplay;
}
exports.default = RenderRoute;
//# sourceMappingURL=route.view.js.map