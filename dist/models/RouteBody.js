"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RouteBodyParam {
    constructor(init) {
        this.allowNull = false;
        Object.assign(this, init);
    }
}
exports.RouteBodyParam = RouteBodyParam;
var RouteBodyType;
(function (RouteBodyType) {
    RouteBodyType["JSON"] = "JSON";
    RouteBodyType["XML"] = "XML";
    RouteBodyType["TEXT"] = "TEXT";
})(RouteBodyType = exports.RouteBodyType || (exports.RouteBodyType = {}));
class RouteBody {
    constructor(init) {
        this.type = RouteBodyType.JSON;
        Object.assign(this, init);
        let uid = 0;
        for (let i = 0; i < 8; i++) {
            uid *= 10;
            uid += Math.ceil(Math.random() * 10);
        }
        this.id = uid;
    }
}
exports.RouteBody = RouteBody;
//# sourceMappingURL=RouteBody.js.map