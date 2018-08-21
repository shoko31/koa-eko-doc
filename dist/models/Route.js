"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const koa_eko_1 = require("koa-eko");
class Route {
    constructor(init) {
        this.type = koa_eko_1.RouteType.GET;
        Object.assign(this, init);
        let uid = 0;
        for (let i = 0; i < 8; i++) {
            uid *= 10;
            uid += Math.ceil(Math.random() * 10);
        }
        this.id = uid;
    }
}
exports.Route = Route;
//# sourceMappingURL=Route.js.map