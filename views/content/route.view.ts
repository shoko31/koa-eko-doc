import { Route } from "../../models/Route";
import RenderRouteOutput from "./route-components/output.route-component.view";
import RenderRouteBody from "./route-components/body.route-component.view";
import RenderRouteResults from "./route-components/result.route-component.view";

export default function RenderRoute(route: Route): string {
    let routeDisplay: string = "";

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
        routeDisplay += RenderRouteBody(route.body);
    }

    if (route.output !== null && route.output !== undefined) {
        routeDisplay += RenderRouteOutput(route.output);
    }

    if (route.results !== null && route.results !== undefined && route.results.length > 0) {
        routeDisplay += RenderRouteResults(route.results, route.id);
    }

    routeDisplay += "</div>";
    routeDisplay += "</div>";

    return routeDisplay;
}
