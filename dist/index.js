"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const EkoApiDoc_1 = require("./models/EkoApiDoc");
const template_1 = require("./views/template");
const globals_1 = require("./globals");
const util_1 = require("util");
__export(require("./models/EkoApiDoc"));
__export(require("./models/RouteGroup"));
__export(require("./models/RouteBody"));
__export(require("./models/Route"));
__export(require("./models/RouteResult"));
__export(require("./decorators/decorators"));
class EkoDoc {
    constructor(title, description, version) {
        this.router = new Router();
        let matchingApi = globals_1.EkoApis.find((doc) => doc.version === version);
        if (util_1.isNullOrUndefined(matchingApi)) {
            this.EkoDoc = new EkoApiDoc_1.EkoApiDoc({ title: title, description: description, version: version });
            globals_1.EkoApis.push(this.EkoDoc);
        }
        else {
            matchingApi.title = title;
            matchingApi.description = description;
            this.EkoDoc = matchingApi;
        }
        this.router.get("/", async (ctx) => {
            ctx.body = this.Render(globals_1.EkoApis[0]);
        });
    }
    Routes() {
        return this.router.routes();
    }
    AllowedMethods() {
        return this.router.allowedMethods();
    }
    Render(api) {
        return template_1.EkoApiDocWebTemplate.RenderTemplate(api);
    }
}
exports.EkoDoc = EkoDoc;
//# sourceMappingURL=index.js.map