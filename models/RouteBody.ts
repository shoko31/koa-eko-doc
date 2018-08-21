export class RouteBodyParam {
    public name: string;
    public type: string;
    public allowNull: boolean = false;
    public description?: string;
    public exemple?: string;

    public constructor(init?: Partial<RouteBodyParam>) {
        Object.assign(this, init);
    }
}

export enum RouteBodyType {
    JSON = "JSON",
    XML = "XML",
    TEXT = "TEXT"
}

export class RouteBody {
    public readonly id?: number;
    public readonly LinkedPropertyKey?: string;
    public name?: string;
    public type?: RouteBodyType = RouteBodyType.JSON;
    public params: RouteBodyParam[];

    public constructor(init?: Partial<RouteBody>) {
        Object.assign(this, init);

        let uid: number = 0;
        for (let i: number = 0; i < 8; i++) {
            uid *= 10;
            uid += Math.ceil(Math.random()*10);
        }
        this.id = uid;
    }
}
