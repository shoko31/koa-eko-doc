import { EkoApiDoc } from "../models/EkoApiDoc";
import RenderHead from "./head.view";
import RenderBody from "./body.view";

export module EkoApiDocWebTemplate {

    export function RenderTemplate(api: EkoApiDoc): string {

        let head:string = RenderHead(api);
        let body:string = RenderBody(api);

        return head + body;
    }
}
