import { RouteGroup } from "../../models/RouteGroup";
import RenderSideNavbarRoute from "./side-navbar-route.view";
import { isNullOrUndefined } from "util";

export default function RenderSideNavbarGroup(group: RouteGroup): string {
    let groupDisplay: string = "";

    groupDisplay += "<div class=\"list-group list-group-flush d-block\">";
    groupDisplay += "<a class=\"list-group-item anchor-link\" href=\"#" + group.id + "\">";
    groupDisplay += "<strong>" + group.title + "</strong>";
    groupDisplay += "</a>";
    if (!isNullOrUndefined(group.routes)) {
        group.routes.forEach(route => {
            groupDisplay += RenderSideNavbarRoute(route);
        });
    }
    groupDisplay += "</div>";

    return groupDisplay;
}