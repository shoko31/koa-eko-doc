"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const route_view_1 = require("./route.view");
const util_1 = require("util");
function RenderGroup(group) {
    let routeGroup = "";
    routeGroup += "<h2 id=\"" + group.id + "\">" + group.title + "</h2>";
    if (!util_1.isNullOrUndefined(group.routes)) {
        group.routes.forEach(route => {
            routeGroup += route_view_1.default(route);
        });
    }
    return routeGroup;
}
exports.default = RenderGroup;
//# sourceMappingURL=group.view.js.map