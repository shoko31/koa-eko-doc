import { RouteGroup } from "../../models/RouteGroup";
import RenderRoute from "./route.view";
import { isNullOrUndefined } from "util";

export default function RenderGroup(group: RouteGroup): string {
    let routeGroup: string = "";

    routeGroup += "<h2 id=\"" + group.id + "\">" + group.title + "</h2>";
    if (!isNullOrUndefined(group.routes)) {
        group.routes.forEach(route => {
            routeGroup += RenderRoute(route);
        });
    }

    return routeGroup;
}
