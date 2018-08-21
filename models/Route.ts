import { RouteResult } from "./RouteResult";
import { RouteBody } from "./RouteBody";
import { RouteType } from "koa-eko";

export class Route {
    public readonly id?: number;
    public name: string;
    public path: string;
    public description: string;
    public type?: RouteType = RouteType.GET;
    public body?: RouteBody;
    public output?: RouteBody;
    public results?: RouteResult[];

    public constructor(init?: Partial<Route>) {
        Object.assign(this, init);

        let uid: number = 0;
        for (let i: number = 0; i < 8; i++) {
            uid *= 10;
            uid += Math.ceil(Math.random()*10);
        }
        this.id = uid;
    }
}
