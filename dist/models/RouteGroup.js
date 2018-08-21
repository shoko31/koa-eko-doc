"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RouteGroup {
    constructor(init) {
        Object.assign(this, init);
        let uid = 0;
        for (let i = 0; i < 8; i++) {
            uid *= 10;
            uid += Math.ceil(Math.random() * 10);
        }
        this.id = uid;
    }
}
exports.RouteGroup = RouteGroup;
//# sourceMappingURL=RouteGroup.js.map