import { Route } from "./Route";

export class RouteGroup {
    public readonly id?: number;
    public title: string;
    public description: string;
    public routes: Route[];

    public constructor(init?: Partial<RouteGroup>) {
        Object.assign(this, init);

        let uid: number = 0;
        for (let i: number = 0; i < 8; i++) {
            uid *= 10;
            uid += Math.ceil(Math.random()*10);
        }
        this.id = uid;
    }
}
