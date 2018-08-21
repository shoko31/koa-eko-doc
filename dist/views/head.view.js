"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const externalIncludes_1 = require("./externalIncludes");
const doctype = "<!DOCTYPE html>";
const charset = "<meta charset=\"utf-8\">";
const ua = "<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">";
const vp = "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">";
function RenderHead(api) {
    let head = "";
    head += doctype;
    head += "<head>";
    head += charset;
    head += ua;
    head += vp;
    head += "<title>" + api.title + "</title>";
    externalIncludes_1.externalIncludes.css.forEach(css => {
        head += externalIncludes_1.RenderCss(css);
    });
    head += "</head>";
    return head;
}
exports.default = RenderHead;
//# sourceMappingURL=head.view.js.map