"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const side_navbar_route_view_1 = require("./side-navbar-route.view");
const util_1 = require("util");
function RenderSideNavbarGroup(group) {
    let groupDisplay = "";
    groupDisplay += "<div class=\"list-group list-group-flush d-block\">";
    groupDisplay += "<a class=\"list-group-item anchor-link\" href=\"#" + group.id + "\">";
    groupDisplay += "<strong>" + group.title + "</strong>";
    groupDisplay += "</a>";
    if (!util_1.isNullOrUndefined(group.routes)) {
        group.routes.forEach(route => {
            groupDisplay += side_navbar_route_view_1.default(route);
        });
    }
    groupDisplay += "</div>";
    return groupDisplay;
}
exports.default = RenderSideNavbarGroup;
//# sourceMappingURL=side-navbar-group.view.js.map