"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const side_navbar_group_view_1 = require("./side-navbar-group.view");
function RenderSideNavbar(api) {
    let docNav = "";
    // tslint:disable-next-line:max-line-length
    docNav += "<nav class=\"sidebar bd-links\" id=\"bd-docs-nav\" style=\"padding-top: 40px; max-height: calc(100vh - 85px); overflow-y: auto; display: block!important;\">";
    api.groups.forEach(group => {
        docNav += side_navbar_group_view_1.default(group);
    });
    docNav += "</nav>";
    return docNav;
}
exports.default = RenderSideNavbar;
//# sourceMappingURL=side-navbar.view.js.map