import * as Router from "koa-router";
import { EkoApiDoc } from "./models/EkoApiDoc";
import { EkoApiDocWebTemplate } from "./views/template";
import { EkoApis } from "./globals";
import { isNullOrUndefined } from "util";

export * from "./models/EkoApiDoc";
export * from "./models/RouteGroup";
export * from "./models/RouteBody";
export * from "./models/Route";
export * from "./models/RouteResult";
export * from "./decorators/decorators";

export class EkoDoc {

    private EkoDoc: EkoApiDoc;
    private router: Router = new Router();

    public constructor(title: string, description: string, version: string) {
        let matchingApi: EkoApiDoc = EkoApis.find((doc) => doc.version === version);
        if (isNullOrUndefined(matchingApi)) {
            this.EkoDoc = new EkoApiDoc({ title: title, description: description, version: version });
            EkoApis.push(this.EkoDoc);
        } else {
            matchingApi.title = title;
            matchingApi.description = description;
            this.EkoDoc = matchingApi;
        }

        this.router.get("/", async (ctx: Router.IRouterContext) => {
            ctx.body = this.Render(EkoApis[0]);
        });
    }

    public Routes(): Router.IMiddleware {
        return this.router.routes();
    }

    public AllowedMethods(): Router.IMiddleware {
        return this.router.allowedMethods();
    }

    private Render(api: EkoApiDoc): string {
        return EkoApiDocWebTemplate.RenderTemplate(api);
    }

}
