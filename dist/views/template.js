"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const head_view_1 = require("./head.view");
const body_view_1 = require("./body.view");
var EkoApiDocWebTemplate;
(function (EkoApiDocWebTemplate) {
    function RenderTemplate(api) {
        let head = head_view_1.default(api);
        let body = body_view_1.default(api);
        return head + body;
    }
    EkoApiDocWebTemplate.RenderTemplate = RenderTemplate;
})(EkoApiDocWebTemplate = exports.EkoApiDocWebTemplate || (exports.EkoApiDocWebTemplate = {}));
//# sourceMappingURL=template.js.map