"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function RenderSideNavbarRoute(route) {
    let routeDisplay = "";
    routeDisplay += "<a class=\"list-group-item list-group-item-action anchor-link\" href=\"#" + route.id + "\">";
    routeDisplay += route.name;
    routeDisplay += "</a>";
    return routeDisplay;
}
exports.default = RenderSideNavbarRoute;
//# sourceMappingURL=side-navbar-route.view.js.map