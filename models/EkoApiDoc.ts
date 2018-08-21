import { RouteGroup } from "./RouteGroup";

export class EkoApiDoc {
    public title: string;
    public description: string;
    public version: string;
    public groups?: RouteGroup[];

    public constructor(init?: Partial<EkoApiDoc>) {
        Object.assign(this, init);
    }
}
