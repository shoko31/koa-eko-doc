"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const group_view_1 = require("./group.view");
function RenderContent(api) {
    let docBody = "";
    docBody += "<p class=\"lead\">" + api.description + "</p>";
    api.groups.forEach(group => {
        docBody += group_view_1.default(group);
    });
    return docBody;
}
exports.default = RenderContent;
//# sourceMappingURL=content.view.js.map