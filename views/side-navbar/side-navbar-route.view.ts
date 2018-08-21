import { Route } from "../../models/Route";

export default function RenderSideNavbarRoute(route: Route): string {
    let routeDisplay: string = "";

    routeDisplay += "<a class=\"list-group-item list-group-item-action anchor-link\" href=\"#" + route.id + "\">";
    routeDisplay += route.name;
    routeDisplay += "</a>";

    return routeDisplay;
}
